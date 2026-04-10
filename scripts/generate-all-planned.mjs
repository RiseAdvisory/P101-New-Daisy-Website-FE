#!/usr/bin/env node

/**
 * Batch runner: generates all images from the v2 plan, skipping specified slugs.
 */

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

const SKIP = new Set([
  // Approved from earlier runs
  'ai-scheduling-saves-salon-owners-time',
  'salon-rebooking-strategies',
  'going-freelance-beauty-professional',
  'death-of-salon-software-platform-ecosystems',
  'salon-social-media-marketing',
  // Just generated from v3 batch 1
  '5-ways-ai-transform-beauty-business-2026',
  'ai-tools-independent-beauty-professional',
  'daisy-ai-vs-competitors-scheduling-comparison',
  'predictive-analytics-salons-beginners-guide',
  '7-salon-metrics-track-weekly',
]);

// Parse plan file for slugs
const plan = fs.readFileSync(path.join(ROOT, 'docs/image-generation-plan-v3.md'), 'utf-8');
const lines = plan.split('\n');
const slugs = [];
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
    if (!SKIP.has(currentSlug)) slugs.push(currentSlug);
    currentSlug = null;
  }
}

console.log(`[batch] ${slugs.length} images to generate (${SKIP.size} skipped)`);

let success = 0;
let failed = 0;
const failures = [];

for (let i = 0; i < slugs.length; i++) {
  const slug = slugs[i];
  const num = `[${i + 1}/${slugs.length}]`;

  try {
    process.stdout.write(`${num} ${slug} ... `);
    const output = execSync(
      `node scripts/generate-article-images.mjs --overwrite --auto --slug="${slug}"`,
      { cwd: ROOT, timeout: 120000, encoding: 'utf-8', stdio: ['pipe', 'pipe', 'pipe'] },
    );

    if (output.includes('saved:')) {
      const size = output.match(/\((\d+KB)\)/)?.[1] || '';
      console.log(`✓ ${size}`);
      success++;
    } else if (output.includes('[error]')) {
      const err = output.match(/\[error\] (.+)/)?.[1] || 'unknown';
      console.log(`✗ ${err}`);
      failed++;
      failures.push(slug);
    } else {
      console.log('✓');
      success++;
    }
  } catch (err) {
    console.log(`✗ ${err.message.substring(0, 80)}`);
    failed++;
    failures.push(slug);
  }

  // Small delay between requests
  if (i < slugs.length - 1) {
    await new Promise((r) => setTimeout(r, 500));
  }
}

console.log('');
console.log('='.repeat(50));
console.log(`DONE: ${success} generated, ${failed} failed out of ${slugs.length}`);
if (failures.length > 0) {
  console.log(`Failed slugs: ${failures.join(', ')}`);
}
console.log('='.repeat(50));
