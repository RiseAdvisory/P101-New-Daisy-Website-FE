/**
 * Shared types for the /pricing-v3 comparison table.
 */

export interface FeatureCategoryRow {
  name: string;
  note?: string;
  // For each tier index (0, 1, 2): undefined = not included, true = included,
  // string = included with detail (e.g. "3 Posts" or "After review").
  values: (boolean | string | undefined)[];
}

export interface FeatureCategory {
  title: string;
  rows: FeatureCategoryRow[];
}
