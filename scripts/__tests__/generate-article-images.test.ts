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
    it('finds all 118 articles', () => {
      const output = execSync(`node ${SCRIPT} --dry-run --auto --limit=0`, {
        cwd: ROOT,
        encoding: 'utf-8',
        timeout: 15000,
      });
      expect(output).toContain('Found 118 total articles');
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
        const slugs = [...content.matchAll(/slug:\s*'([^']+)'/g)];
        for (const m of slugs) {
          const imgPath = path.join(ROOT, 'public/images/blog', `${m[1]}.webp`);
          if (!fs.existsSync(imgPath)) missing.push(m[1]);
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
        const slugs = [...content.matchAll(/slug:\s*'([^']+)'/g)];

        for (const m of slugs) {
          const slug = m[1];
          const expected = `/images/blog/${slug}.webp`;
          const idx = m.index!;
          const nextSlug = content.indexOf("slug: '", idx + 10);
          const block = content.substring(
            idx,
            nextSlug > 0 ? nextSlug : content.length,
          );
          const urls = [
            ...block.matchAll(/\/images\/blog\/[a-z0-9-]+\.webp/g),
          ].map((u) => u[0]);

          if (urls.length > 0 && !urls.every((u) => u === expected)) {
            mismatches.push({ slug, found: urls[0], expected });
          }
        }
      }

      expect(mismatches).toEqual([]);
    });
  });
});
