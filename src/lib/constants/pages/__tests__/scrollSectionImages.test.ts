import { businessPageData } from '../businessPage';
import { customerPageData } from '../customerPage';
import { professionalPageData } from '../professionalPage';
import type { LocalScrollSection } from '../scrollSections.types';

/**
 * The Arabic scroll sections reuse the English screenshots, so the images must
 * be framed the same way in both languages. The professional page drifted:
 * on mobile, Arabic sections 1 and 3 centred a phone mockup that is cropped at
 * its bottom edge, leaving a strip of background under the cut. English
 * anchors it flush to the bottom of the card.
 *
 * Only the image keys are compared. Decorative backgrounds may legitimately
 * mirror for right-to-left.
 */
const IMAGE_KEYS: (keyof LocalScrollSection)[] = [
  'mainImage',
  'mainImageMobile',
  'mainImageWidth',
  'mainImageHeight',
  'styleMainPictureJSON',
  'styleImageMobile',
];

const pages = {
  business: businessPageData,
  customer: customerPageData,
  professional: professionalPageData,
};

describe.each(Object.entries(pages))('%s page scroll images', (_name, data) => {
  const en = (data.en.scrollSections ?? []) as LocalScrollSection[];
  const ar = (data.ar.scrollSections ?? []) as LocalScrollSection[];

  it('has the same number of sections in both languages', () => {
    expect(ar).toHaveLength(en.length);
  });

  it('frames every image the same way in Arabic as in English', () => {
    const drift: string[] = [];
    en.forEach((section, i) => {
      for (const key of IMAGE_KEYS) {
        if (JSON.stringify(section[key]) !== JSON.stringify(ar[i]?.[key])) {
          drift.push(`section ${i + 1} ${String(key)}`);
        }
      }
    });
    expect(drift).toEqual([]);
  });
});
