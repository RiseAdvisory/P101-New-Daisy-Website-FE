#!/usr/bin/env node

/**
 * Blog Article Editorial Image Generator (Interactive)
 *
 * For each article, shows the content context, builds a draft prompt,
 * and lets you review/edit before generating. This ensures each image
 * is unique and tailored to the specific article.
 *
 * Usage:
 *   REPLICATE_API_TOKEN=r8_... node scripts/generate-article-images.mjs
 *
 * Flags:
 *   --dry-run     Preview prompts without generating images
 *   --overwrite   Regenerate images that already exist
 *   --slug=NAME   Only process a specific article by slug
 *   --limit=N     Process at most N articles
 *   --auto        Skip interactive editing, use generated prompts as-is
 */

import fs from 'fs';
import path from 'path';
import readline from 'readline';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const CONFIG = JSON.parse(fs.readFileSync(path.join(ROOT, 'config/image-generator.json'), 'utf-8'));

// ---------------------------------------------------------------------------
// CLI flags
// ---------------------------------------------------------------------------
const args = process.argv.slice(2);
const DRY_RUN = args.includes('--dry-run');
const OVERWRITE = args.includes('--overwrite');
const AUTO = args.includes('--auto');
const SLUG_FILTER = args.find((a) => a.startsWith('--slug='))?.split('=')[1];
const LIMIT = parseInt(args.find((a) => a.startsWith('--limit='))?.split('=')[1] || '0', 10);

// ---------------------------------------------------------------------------
// Environment
// ---------------------------------------------------------------------------
const REPLICATE_API_TOKEN = process.env[CONFIG.env.replicateApiKey];

if (!REPLICATE_API_TOKEN && !DRY_RUN) {
  console.error(`[error] ${CONFIG.env.replicateApiKey} environment variable is required (or use --dry-run).`);
  process.exit(1);
}

// ---------------------------------------------------------------------------
// Interactive readline
// ---------------------------------------------------------------------------
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

function ask(question) {
  return new Promise((resolve) => rl.question(question, resolve));
}

/**
 * Opens an interactive multi-line editor.
 * Shows the draft prompt and lets the user edit it.
 * Enter a blank line to accept, or type replacement text.
 */
async function editPrompt(draft) {
  console.log('\n  ┌─ Draft prompt (edit below, or press Enter to accept):');
  console.log('  │');
  draft.split('. ').forEach((s) => console.log(`  │  ${s.trim()}.`));
  console.log('  │');
  console.log('  └─ Type your edited prompt (or press Enter to keep draft):');

  const input = await ask('  > ');
  return input.trim() || draft;
}

// ---------------------------------------------------------------------------
// 1. Extract articles from TypeScript data files
// ---------------------------------------------------------------------------
function extractArticles() {
  const articlesGlobDir = path.join(ROOT, path.dirname(CONFIG.articlesGlob));
  const ext = path.extname(CONFIG.articlesGlob);
  const files = fs.readdirSync(articlesGlobDir)
    .filter((f) => f.endsWith(ext) && !f.includes('__tests__') && !f.includes('.test.'))
    .map((f) => path.join(articlesGlobDir, f));
  const articles = [];

  for (const file of files) {
    const content = fs.readFileSync(file, 'utf-8');

    // Extract article blocks by splitting on slug patterns
    const slugMatches = [...content.matchAll(/slug:\s*'([^']+)'/g)];
    const titleMatches = [...content.matchAll(/title:\s*'([^']+)'/g)];
    const descMatches = [...content.matchAll(/description:\s*(?:'([^']*)'|"([^"]*)")/g)];
    const pictureUrlMatches = [...content.matchAll(/picture:\s*\{[\s\S]*?url:\s*'([^']+)'/g)];
    const categoryMatches = [...content.matchAll(/category:\s*\{[\s\S]*?name:\s*'([^']+)'/g)];

    // Extract article HTML content (aboutPosts field) for context
    const contentMatches = [...content.matchAll(/aboutPosts:\s*['"`]([\s\S]*?)['"`]\s*,\s*(?:metaTitle|meta)/g)];

    for (let i = 0; i < slugMatches.length; i++) {
      const slug = slugMatches[i][1];
      const title = titleMatches[i]?.[1] || slug;
      const description = descMatches[i]?.[1] || descMatches[i]?.[2] || '';
      const imageUrl = pictureUrlMatches[i]?.[1] || '';
      const category = categoryMatches[i]?.[1] || '';

      // Strip HTML to get plain text content for context
      const rawContent = contentMatches[i]?.[1] || '';
      const plainContent = rawContent
        .replace(/<[^>]+>/g, ' ')
        .replace(/\\n/g, ' ')
        .replace(/\s+/g, ' ')
        .trim()
        .substring(0, 500);

      articles.push({
        slug,
        title,
        description,
        imageUrl,
        category,
        contentPreview: plainContent,
        sourceFile: path.basename(file),
      });
    }
  }

  return articles;
}

// ---------------------------------------------------------------------------
// 2. Check which articles need images
// ---------------------------------------------------------------------------
function findMissingImages(articles) {
  return articles.filter((article) => {
    if (SLUG_FILTER && article.slug !== SLUG_FILTER) return false;

    const expectedPath = path.join(
      ROOT,
      CONFIG.imageOutputDir,
      `${article.slug}.${CONFIG.imageFormat}`,
    );

    if (OVERWRITE) return true;
    return !fs.existsSync(expectedPath);
  });
}

// ---------------------------------------------------------------------------
// 3. Load prompts from the pre-built plan file
// ---------------------------------------------------------------------------

const PLAN_FILE = path.join(ROOT, 'docs/image-generation-plan-v3.md');

function loadPlanPrompts() {
  if (!fs.existsSync(PLAN_FILE)) {
    console.error(`[error] Plan file not found: ${PLAN_FILE}`);
    console.error('Run the plan generator first to create docs/image-generation-plan-v2.md');
    process.exit(1);
  }

  const plan = fs.readFileSync(PLAN_FILE, 'utf-8');
  const prompts = {};
  const lines = plan.split('\n');
  let currentSlug = null;

  for (const line of lines) {
    // v3 format: "## N. slug-name"
    const v3Match = line.match(/^## \d+\.\s+(.+)$/);
    if (v3Match) {
      currentSlug = v3Match[1].trim();
    }
    // v2 format: "- Slug: `slug-name`"
    if (line.startsWith('- Slug: ')) {
      currentSlug = line.replace('- Slug: ', '').replace(/`/g, '').trim();
    }
    if (currentSlug && line.startsWith('- Prompt: ')) {
      prompts[currentSlug] = line.replace('- Prompt: ', '').trim();
      currentSlug = null;
    }
  }

  return prompts;
}

const planPrompts = loadPlanPrompts();
console.log(`[image-gen] Loaded ${Object.keys(planPrompts).length} prompts from plan`);

function getPrompt(article) {
  const planned = planPrompts[article.slug];
  if (planned) return planned;

  // Fallback for articles not in the plan
  console.log(`  [warn] No plan prompt for ${article.slug}, using fallback`);
  return [
    CONFIG.style.base,
    `Editorial photo for: ${article.title}.`,
    article.description ? article.description.substring(0, 120) + '.' : '',
    'No text, no watermarks, no logos. Cinematic composition, rule of thirds.',
  ].filter(Boolean).join(' ');
}

// ---------------------------------------------------------------------------
// 4. Generate image via Replicate
// ---------------------------------------------------------------------------
async function generateImage(prompt) {
  const modelPath = CONFIG.replicate.model;
  const isGptImage = modelPath.includes('gpt-image');

  const input = isGptImage
    ? {
        prompt,
        aspect_ratio: CONFIG.aspectRatio || '3:2',
        quality: CONFIG.quality || 'high',
        output_format: CONFIG.imageFormat,
        output_compression: CONFIG.outputCompression || 85,
        background: 'opaque',
        moderation: 'low',
        number_of_images: 1,
      }
    : {
        prompt,
        width: CONFIG.dimensions.width,
        height: CONFIG.dimensions.height,
        output_format: CONFIG.imageFormat,
        output_quality: CONFIG.outputCompression || 80,
        safety_tolerance: 2,
        prompt_upsampling: true,
      };

  const createResponse = await fetch(
    `https://api.replicate.com/v1/models/${modelPath}/predictions`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${REPLICATE_API_TOKEN}`,
        Prefer: 'wait',
      },
      body: JSON.stringify({ input }),
    },
  );

  if (!createResponse.ok) {
    const err = await createResponse.text();
    throw new Error(`Replicate create error ${createResponse.status}: ${err}`);
  }

  const prediction = await createResponse.json();

  // If Prefer: wait returned the result directly
  if (prediction.status === 'succeeded') {
    return prediction.output;
  }

  // Otherwise poll
  let predictionId = prediction.id;
  for (let attempt = 0; attempt < 60; attempt++) {
    await sleep(CONFIG.replicate.pollIntervalMs);
    const pollResponse = await fetch(
      `https://api.replicate.com/v1/predictions/${predictionId}`,
      { headers: { Authorization: `Bearer ${REPLICATE_API_TOKEN}` } },
    );
    const result = await pollResponse.json();
    if (result.status === 'succeeded') return result.output;
    if (result.status === 'failed' || result.status === 'canceled') {
      throw new Error(`Replicate prediction ${result.status}: ${result.error || 'unknown'}`);
    }
    if (attempt % 5 === 0) process.stdout.write('.');
  }
  throw new Error('Replicate prediction timed out');
}

// ---------------------------------------------------------------------------
// 5. Download and save image
// ---------------------------------------------------------------------------
async function downloadImage(imageUrl, outputPath) {
  const response = await fetch(imageUrl);
  if (!response.ok) throw new Error(`Failed to download image: ${response.status}`);
  const buffer = Buffer.from(await response.arrayBuffer());
  fs.writeFileSync(outputPath, buffer);
  return buffer.length;
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function withRetry(fn, label, maxAttempts = CONFIG.replicate.retryAttempts) {
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      return await fn();
    } catch (err) {
      if (attempt === maxAttempts) throw err;
      console.log(`  [retry] ${label} attempt ${attempt}/${maxAttempts} failed: ${err.message}`);
      await sleep(CONFIG.replicate.retryDelayMs * attempt);
    }
  }
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------
async function main() {
  console.log('[image-gen] Scanning articles...');
  const allArticles = extractArticles();
  console.log(`[image-gen] Found ${allArticles.length} total articles`);

  let toProcess = findMissingImages(allArticles);
  if (LIMIT > 0) toProcess = toProcess.slice(0, LIMIT);

  if (toProcess.length === 0) {
    console.log('[image-gen] All articles have images. Nothing to do.');
    if (SLUG_FILTER) console.log(`[image-gen] (filtered by slug: ${SLUG_FILTER})`);
    rl.close();
    return;
  }

  console.log(`[image-gen] ${toProcess.length} articles to process${DRY_RUN ? ' (dry run)' : ''}${AUTO ? ' (auto mode)' : ''}`);
  console.log('');

  let generated = 0;
  let skipped = 0;
  let failed = 0;

  for (const article of toProcess) {
    const outputPath = path.join(ROOT, CONFIG.imageOutputDir, `${article.slug}.${CONFIG.imageFormat}`);

    console.log('═'.repeat(70));
    console.log(`[${generated + skipped + failed + 1}/${toProcess.length}] ${article.title}`);
    console.log(`  slug:     ${article.slug}`);
    console.log(`  category: ${article.category}`);
    console.log(`  file:     ${article.sourceFile}`);
    if (article.description) {
      console.log(`  summary:  ${article.description.substring(0, 100)}${article.description.length > 100 ? '...' : ''}`);
    }
    if (article.contentPreview) {
      console.log(`  content:  ${article.contentPreview.substring(0, 150)}...`);
    }

    try {
      // Step 1: Get prompt from plan file
      let prompt = getPrompt(article);

      if (!AUTO && !DRY_RUN) {
        // Interactive: let user review and edit
        prompt = await editPrompt(prompt);
      } else {
        console.log(`  prompt: ${prompt.substring(0, 150)}...`);
      }

      if (DRY_RUN) {
        console.log(`  [dry-run] Would save to: ${outputPath}`);
        generated++;
        continue;
      }

      // Check if user wants to skip
      if (!AUTO) {
        const action = await ask('  Generate image? [Y/n/skip] ');
        if (action.toLowerCase() === 'n' || action.toLowerCase() === 'skip') {
          console.log('  [skipped]');
          skipped++;
          continue;
        }
      }

      // Step 2: Generate image
      process.stdout.write('  generating image');
      const imageOutput = await withRetry(() => generateImage(prompt), 'image generation');
      console.log(' done');

      // Step 3: Download and save
      const imageUrl = typeof imageOutput === 'string' ? imageOutput : imageOutput[0];
      const size = await downloadImage(imageUrl, outputPath);
      console.log(`  saved: ${outputPath} (${(size / 1024).toFixed(0)}KB)`);

      generated++;
    } catch (err) {
      console.error(`  [error] ${err.message}`);
      failed++;
    }

    console.log('');
    if (!DRY_RUN) await sleep(1000);
  }

  rl.close();
  console.log('═'.repeat(70));
  console.log(`[image-gen] Done. Generated: ${generated}, Skipped: ${skipped}, Failed: ${failed}`);
}

main().catch((err) => {
  console.error('[image-gen] Fatal error:', err);
  rl.close();
  process.exit(1);
});
