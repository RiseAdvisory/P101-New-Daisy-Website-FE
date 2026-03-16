export {
  featureDeepDives,
  type FeatureDeepDive,
  type FeatureDeepDiveFaq,
} from './featureDeepDiveData';

import { featureDeepDives, FeatureDeepDive } from './featureDeepDiveData';

export function getFeatureDeepDive(
  userType: 'business' | 'professional',
  slug: string,
): FeatureDeepDive | undefined {
  return featureDeepDives.find(
    (f) => f.userType === userType && f.slug === slug,
  );
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
): FeatureDeepDive[] {
  const current = getFeatureDeepDive(userType, slug);
  if (!current) return [];

  return current.relatedCategories
    .map((relSlug) => getFeatureDeepDive(userType, relSlug))
    .filter((f): f is FeatureDeepDive => f !== undefined);
}
