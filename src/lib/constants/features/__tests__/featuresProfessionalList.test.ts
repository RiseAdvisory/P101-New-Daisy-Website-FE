import { featuresProfessionalData } from '../featuresProfessionalList';

describe('featuresProfessionalData', () => {
  const features = featuresProfessionalData.en.featureList;

  it('has features defined', () => {
    expect(features.length).toBeGreaterThan(0);
  });

  it('has sequential IDs starting from 1', () => {
    features.forEach((feature, index) => {
      expect(feature.id).toBe(index + 1);
    });
  });

  it('has sortId values in ascending order', () => {
    const sortIds = features.map((f) => f.attributes.sortId);
    for (let i = 1; i < sortIds.length; i++) {
      expect(sortIds[i]).toBeGreaterThanOrEqual(sortIds[i - 1]);
    }
  });

  it('has no duplicate sortId values', () => {
    const sortIds = features.map((f) => f.attributes.sortId);
    const unique = new Set(sortIds);
    expect(unique.size).toBe(sortIds.length);
  });

  it('every feature has required fields', () => {
    features.forEach((feature) => {
      expect(feature.attributes.title).toBeTruthy();
      expect(feature.attributes.description).toBeTruthy();
      expect(feature.attributes.picture.data[0].attributes.url).toBeTruthy();
      expect(feature.attributes.stylePicture).toBeDefined();
    });
  });
});
