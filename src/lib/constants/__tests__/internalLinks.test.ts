import fs from 'fs';
import path from 'path';
import { getAllFeatureDeepDiveSlugs } from '../features/featureDeepDive';
import { businessBlogPosts, professionalBlogPosts } from '../blog/blogData';

/**
 * Guards internal links inside static content data.
 *
 * Content lives as HTML strings in src/lib/constants, so nothing at render time
 * catches a link to a route that does not exist. These tests do.
 */

const CONSTANTS_DIR = path.join(__dirname, '..');

function readAllContentFiles(): { file: string; text: string }[] {
  const out: { file: string; text: string }[] = [];
  const walk = (dir: string) => {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        if (entry.name === '__tests__') continue;
        walk(full);
      } else if (entry.name.endsWith('.ts')) {
        out.push({ file: path.relative(CONSTANTS_DIR, full), text: fs.readFileSync(full, 'utf-8') });
      }
    }
  };
  walk(CONSTANTS_DIR);
  return out;
}

const CONTENT = readAllContentFiles();

describe('feature deep-dive links resolve', () => {
  const businessSlugs = new Set(getAllFeatureDeepDiveSlugs('business'));
  const professionalSlugs = new Set(getAllFeatureDeepDiveSlugs('professional'));

  const links = CONTENT.flatMap(({ file, text }) =>
    [...text.matchAll(/\/(?:en|ar)\/features\/(business|professional)\/([a-z-]+)/g)].map((m) => ({
      file,
      persona: m[1] as 'business' | 'professional',
      slug: m[2],
    })),
  );

  it('finds feature links to check', () => {
    expect(links.length).toBeGreaterThan(0);
  });

  it('every business feature link points at a real deep-dive page', () => {
    const broken = links
      .filter((l) => l.persona === 'business' && !businessSlugs.has(l.slug))
      .map((l) => `${l.file} -> /features/business/${l.slug}`);
    expect([...new Set(broken)]).toEqual([]);
  });

  it('every professional feature link points at a real deep-dive page', () => {
    const broken = links
      .filter((l) => l.persona === 'professional' && !professionalSlugs.has(l.slug))
      .map((l) => `${l.file} -> /features/professional/${l.slug}`);
    expect([...new Set(broken)]).toEqual([]);
  });
});

describe('pricing links match the audience of the article', () => {
  const bodyOf = (post: { attributes: Record<string, unknown> }) =>
    [post.attributes.aboutPosts, post.attributes.description].filter(Boolean).join(' ');

  it('professional articles never link to business pricing', () => {
    const offenders = professionalBlogPosts
      .filter((p) => /\/(?:en|ar)\/pricing\/business/.test(bodyOf(p)))
      .map((p) => p.attributes.slug);
    expect(offenders).toEqual([]);
  });

  it('business articles never link to professional pricing', () => {
    const offenders = businessBlogPosts
      .filter((p) => /\/(?:en|ar)\/pricing\/professional/.test(bodyOf(p)))
      .map((p) => p.attributes.slug);
    expect(offenders).toEqual([]);
  });

  it('no content links to bare /pricing, which 301s to /pricing/business', () => {
    const offenders = CONTENT.filter(({ text }) => /['"]\/(?:en|ar)\/pricing['"]/.test(text)).map(
      ({ file }) => file,
    );
    expect(offenders).toEqual([]);
  });
});
