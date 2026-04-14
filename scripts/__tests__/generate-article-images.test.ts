/**
 * @jest-environment node
 */
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const ROOT = path.resolve(__dirname, '../..');
const SCRIPT = path.join(ROOT, 'scripts/generate-article-images.mjs');
const PLAN = path.join(ROOT, 'docs/image-generation-plan-v3.md');
const CONFIG_PATH = path.join(ROOT, 'config/image-generator.json');

describe('generate-article-images', () => {
  describe('config', () => {
    it('config file exists and is valid JSON', () => {
      const config = JSON.parse(fs.readFileSync(CONFIG_PATH, 'utf-8'));
      expect(config.replicate.model).toBeTruthy();
      expect(config.imageFormat).toBe('webp');
      expect(config.env.replicateApiKey).toBe('REPLICATE_API_TOKEN');
    });
  });

  describe('plan file', () => {
    it('plan v3 exists', () => {
      expect(fs.existsSync(PLAN)).toBe(true);
    });

    it('plan contains 113+ prompts with slug headers', () => {
      const content = fs.readFileSync(PLAN, 'utf-8');
      const slugHeaders = content.match(/^## \d+\./gm);
      expect(slugHeaders!.length).toBeGreaterThanOrEqual(113);
    });

    it('every slug header has a matching prompt line', () => {
      const content = fs.readFileSync(PLAN, 'utf-8');
      const lines = content.split('\n');
      let currentSlug: string | null = null;
      let slugCount = 0;
      let promptCount = 0;

      for (const line of lines) {
        const match = line.match(/^## \d+\.\s+(.+)$/);
        if (match) {
          currentSlug = match[1].trim();
          slugCount++;
        }
        if (currentSlug && line.startsWith('- Prompt: ')) {
          promptCount++;
          currentSlug = null;
        }
      }

      expect(slugCount).toBe(promptCount);
    });
  });

  describe('dry-run mode', () => {
    it('runs without API key in dry-run mode', () => {
      const output = execSync(`node ${SCRIPT} --dry-run --auto --limit=1`, {
        cwd: ROOT,
        encoding: 'utf-8',
        timeout: 15000,
      });
      expect(output).toContain('prompts from plan');
    });

    it('filters by slug with --overwrite', () => {
      const output = execSync(
        `node ${SCRIPT} --dry-run --auto --overwrite --slug=salon-five-apps-how-to-fix`,
        { cwd: ROOT, encoding: 'utf-8', timeout: 15000 },
      );
      expect(output).toContain('salon-five-apps-how-to-fix');
    });

    it('reports nothing to do for nonexistent slug', () => {
      const output = execSync(
        `node ${SCRIPT} --dry-run --auto --slug=nonexistent-slug-xyz`,
        { cwd: ROOT, encoding: 'utf-8', timeout: 15000 },
      );
      expect(output).toContain('Nothing to do');
    });
  });

  describe('article extraction', () => {
    it('finds all configured articles', () => {
      const output = execSync(`node ${SCRIPT} --dry-run --auto --limit=0`, {
        cwd: ROOT,
        encoding: 'utf-8',
        timeout: 15000,
      });
      const match = output.match(/Found (\d+) total articles/);
      expect(match).not.toBeNull();
      const count = Number(match?.[1] ?? 0);
      expect(count).toBeGreaterThanOrEqual(113);
    });
  });

  describe('image files', () => {
    it('every article has a matching webp image file', () => {
      const dir = path.join(ROOT, 'src/lib/constants/blog/articles');
      const files = fs
        .readdirSync(dir)
        .filter((f: string) => f.endsWith('.ts') && !f.includes('test'));
      const missing: string[] = [];

      for (const f of files) {
        const content = fs.readFileSync(path.join(dir, f), 'utf-8');
        const slugSet = new Set(
          [...content.matchAll(/slug:\s*'([^']+)'/g)].map((m) => m[1]),
        );
        for (const slug of slugSet) {
          const webpPath = path.join(ROOT, 'public/images/blog', `${slug}.webp`);
          const pngPath = path.join(ROOT, 'public/images/blog', `${slug}.png`);
          if (!fs.existsSync(webpPath) && !fs.existsSync(pngPath)) {
            missing.push(slug);
          }
        }
      }

      expect(missing).toEqual([]);
    });

    it('every article references its own slug-based image', () => {
      const dir = path.join(ROOT, 'src/lib/constants/blog/articles');
      const files = fs
        .readdirSync(dir)
        .filter((f: string) => f.endsWith('.ts') && !f.includes('test'));
      const mismatches: { slug: string; found: string; expected: string }[] = [];

      for (const f of files) {
        const content = fs.readFileSync(path.join(dir, f), 'utf-8');
        const slugs = new Set(
          [...content.matchAll(/slug:\s*'([^']+)'/g)].map((m) => m[1]),
        );

        for (const slug of slugs) {
          const idx = content.indexOf(`slug: '${slug}'`);
          const nextSlug = content.indexOf("slug: '", idx + 10);
          const block = content.substring(idx, nextSlug > 0 ? nextSlug : content.length);

          const expectedWebp = `/images/blog/${slug}.webp`;
          const expectedPng = `/images/blog/${slug}.png`;
          const hasSlugImage =
            block.includes(`url: '${expectedWebp}'`) ||
            block.includes(`url: '${expectedPng}'`);

          if (!hasSlugImage) {
            mismatches.push({
              slug,
              found: 'missing slug-based picture url',
              expected: `${expectedWebp} or ${expectedPng}`,
            });
          }
        }
      }

      expect(mismatches).toEqual([]);
    });
  });
});
