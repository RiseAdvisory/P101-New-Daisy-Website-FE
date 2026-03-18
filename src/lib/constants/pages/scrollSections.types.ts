export interface FaqItem {
  question: string;
  answer: string;
}

export interface LocalScrollSection {
  sortId: number;
  mainImage: string;
  firstBg: string;
  secondBg?: string;
  styleMainPictureJSON?: Record<string, string | number>;
  styleFirstBgJSON?: Record<string, string | number>;
  styleSecondBgJSON?: Record<string, string | number>;
  styleBgMobileSecond?: Record<string, string | number>;
  styleImageMobile?: Record<string, string | number>;
  mainImageWidth?: number;
  mainImageHeight?: number;
  infoScroll: {
    title: string;
    text: string;
    description: string;
    listSub?: string[];
  };
}

export interface GrowthData {
  title: string;
  description: string;
  subtitle: string;
  buttonLearn: string;
  buttonLink: string;
  imageUrl: string;
}

export interface HeroData {
  categoryLabel: string;
  headline: string;
  subHeadline: string;
  ctaText: string;
  ctaLink: string;
  answerBlock?: {
    question: string;
    answer: string;
  };
}

export interface PlatformStrengthsData {
  headline: string;
  subHeadline: string;
  capabilities: Array<{
    label: string;
    description: string;
  }>;
  stats: Array<{
    value: string;
    context: string;
    source?: string;
  }>;
}

export interface LandingPageContent {
  hero?: HeroData;
  platformStrengths?: PlatformStrengthsData;
  titleFraque: string;
  growth: GrowthData;
  scrollSections: LocalScrollSection[];
  fallbackFaqs?: FaqItem[];
}

/**
 * Converts local scroll section data to the ScrollSectionItem format
 * expected by LockerContainer, LockerImageItem, LockerContentItem,
 * and MobileScrollSection components.
 *
 * This bridges the gap between local static data (LocalScrollSection[])
 * and the Strapi-shaped data ({id, attributes: {...}}) that child components consume.
 */
export function toScrollSectionItems(sections: LocalScrollSection[]) {
  return sections.map((section, index) => ({
    id: index + 1,
    attributes: {
      sortId: section.sortId,
      styleBgMobileSecond: section.styleBgMobileSecond,
      styleImageMobile: section.styleImageMobile,
      styleFirstBgJSON: section.styleFirstBgJSON,
      styleSecondBgJSON: section.styleSecondBgJSON,
      styleMainPictureJSON: section.styleMainPictureJSON,
      firstBg: {
        data: [
          {
            id: index + 1,
            attributes: { url: section.firstBg },
          },
        ],
      },
      secondBg: section.secondBg
        ? {
            data: [
              {
                id: index + 1,
                attributes: { url: section.secondBg },
              },
            ],
          }
        : { data: null },
      mainImage: {
        data: [
          {
            id: index + 1,
            attributes: {
              url: section.mainImage,
              formats: {
                large: { url: section.mainImage },
                small: {
                  url: section.mainImage,
                  width: section.mainImageWidth ?? 300,
                  height: section.mainImageHeight ?? 500,
                },
              },
            },
          },
        ],
      },
      infoScroll: {
        objectId: index + 1,
        title: section.infoScroll.title,
        text: section.infoScroll.text,
        description: section.infoScroll.description,
        listSub: section.infoScroll.listSub,
        // Last section shows store buttons instead of list
        storeBurron: !section.infoScroll.listSub,
      },
    },
  }));
}
