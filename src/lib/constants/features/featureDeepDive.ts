export {
  featureDeepDives,
  type FeatureDeepDive,
  type FeatureDeepDiveFaq,
} from './featureDeepDiveData';

import { featureDeepDives, FeatureDeepDive } from './featureDeepDiveData';
import { featureDeepDivesAr } from './featureDeepDiveData.ar';

export function getFeatureDeepDive(
  userType: 'business' | 'professional',
  slug: string,
  locale: string = 'en',
): FeatureDeepDive | undefined {
  const list = locale === 'ar' ? featureDeepDivesAr : featureDeepDives;
  const hit = list.find((f) => f.userType === userType && f.slug === slug);
  // Fall back to English so missing AR coverage is obvious in audits and UI.
  if (!hit && locale === 'ar') {
    return featureDeepDives.find((f) => f.userType === userType && f.slug === slug);
  }
  return hit;
}

export function getAllFeatureDeepDiveSlugs(
  userType: 'business' | 'professional',
): string[] {
  return featureDeepDives
    .filter((f) => f.userType === userType)
    .map((f) => f.slug);
}

export function getRelatedFeatureDeepDives(
  userType: 'business' | 'professional',
  slug: string,
  locale: string = 'en',
): FeatureDeepDive[] {
  const current = getFeatureDeepDive(userType, slug, locale);
  if (!current) return [];

  return current.relatedCategories
    .map((relSlug) => getFeatureDeepDive(userType, relSlug, locale))
    .filter((f): f is FeatureDeepDive => f !== undefined);
}
