import { I18nContent } from '@/lib/constants/i18n';
import { LandingPageContent } from '@/lib/constants/pages/scrollSections.types';
import { getAllSolutionSlugs } from '@/lib/constants/solutions';

export const VALID_ANGLE_SLUGS = [
  'ai-receptionist',
  'unified-inbox',
  'brand-control',
  'smart-scheduling',
  'service-portfolio',
  'ai-marketing',
  'all-in-one',
] as const;

export const VALID_PERSONAS = ['business', 'professional'] as const;

export type AngleSlug = (typeof VALID_ANGLE_SLUGS)[number];
export type AnglePersona = (typeof VALID_PERSONAS)[number];

// Slug namespace collision guard
const solutionSlugs = getAllSolutionSlugs();
const collisions = VALID_ANGLE_SLUGS.filter((s) => solutionSlugs.includes(s));
if (collisions.length > 0) {
  throw new Error(
    `Angle slugs collide with solution slugs: ${collisions.join(', ')}. These namespaces must not overlap.`,
  );
}

// Registry — populated by angle data files
const angleRegistry = new Map<
  string,
  Record<AnglePersona, I18nContent<LandingPageContent>>
>();

export function registerAngle(
  slug: AngleSlug,
  data: Record<AnglePersona, I18nContent<LandingPageContent>>,
) {
  angleRegistry.set(slug, data);
}

export function getAngleData(
  slug: string,
  persona: string,
): I18nContent<LandingPageContent> | null {
  if (
    !VALID_ANGLE_SLUGS.includes(slug as AngleSlug) ||
    !VALID_PERSONAS.includes(persona as AnglePersona)
  ) {
    return null;
  }
  const angle = angleRegistry.get(slug);
  if (!angle) return null;
  return angle[persona as AnglePersona] ?? null;
}

export function getAllAngleParams(): Array<{ slug: string; persona: string }> {
  const params: Array<{ slug: string; persona: string }> = [];
  for (const slug of VALID_ANGLE_SLUGS) {
    for (const persona of VALID_PERSONAS) {
      params.push({ slug, persona });
    }
  }
  return params;
}

// Import all angle data files to trigger registration
import './ai-receptionist';
import './unified-inbox';
import './brand-control';
import './smart-scheduling';
import './service-portfolio';
