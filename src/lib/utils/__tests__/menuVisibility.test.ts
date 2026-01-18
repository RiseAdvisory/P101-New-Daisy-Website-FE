import { shouldHideMenuItem, NAV_PATHS } from '../menuVisibility';

describe('menuVisibility', () => {
  describe('shouldHideMenuItem', () => {
    describe('when activePage is null or undefined', () => {
      it('should return false when activePage is null', () => {
        expect(shouldHideMenuItem(NAV_PATHS.RESOURCES, null)).toBe(false);
        expect(shouldHideMenuItem(NAV_PATHS.FEATURES, null)).toBe(false);
        expect(shouldHideMenuItem(NAV_PATHS.PRICING, null)).toBe(false);
      });

      it('should return false when activePage is empty string', () => {
        expect(shouldHideMenuItem(NAV_PATHS.RESOURCES, '')).toBe(false);
        expect(shouldHideMenuItem(NAV_PATHS.FEATURES, '')).toBe(false);
      });
    });

    describe('when activePage is a user type page (customer/business/professional)', () => {
      it('should hide Resources on customer page', () => {
        expect(
          shouldHideMenuItem(NAV_PATHS.RESOURCES, NAV_PATHS.CUSTOMER),
        ).toBe(true);
      });

      it('should hide Resources on business page', () => {
        expect(
          shouldHideMenuItem(NAV_PATHS.RESOURCES, NAV_PATHS.BUSINESS),
        ).toBe(true);
      });

      it('should hide Resources on professional page', () => {
        expect(
          shouldHideMenuItem(NAV_PATHS.RESOURCES, NAV_PATHS.PROFESSIONAL),
        ).toBe(true);
      });

      it('should hide Features on customer page', () => {
        expect(shouldHideMenuItem(NAV_PATHS.FEATURES, NAV_PATHS.CUSTOMER)).toBe(
          true,
        );
      });

      it('should hide Features on business page', () => {
        expect(shouldHideMenuItem(NAV_PATHS.FEATURES, NAV_PATHS.BUSINESS)).toBe(
          true,
        );
      });

      it('should hide Features on professional page', () => {
        expect(
          shouldHideMenuItem(NAV_PATHS.FEATURES, NAV_PATHS.PROFESSIONAL),
        ).toBe(true);
      });

      it('should NOT hide Pricing on customer page', () => {
        expect(shouldHideMenuItem(NAV_PATHS.PRICING, NAV_PATHS.CUSTOMER)).toBe(
          false,
        );
      });

      it('should NOT hide Pricing on business page', () => {
        expect(shouldHideMenuItem(NAV_PATHS.PRICING, NAV_PATHS.BUSINESS)).toBe(
          false,
        );
      });

      it('should NOT hide Pricing on professional page', () => {
        expect(
          shouldHideMenuItem(NAV_PATHS.PRICING, NAV_PATHS.PROFESSIONAL),
        ).toBe(false);
      });
    });

    describe('when activePage is not a user type page', () => {
      it('should not hide Resources on other pages', () => {
        expect(shouldHideMenuItem(NAV_PATHS.RESOURCES, '/about')).toBe(false);
        expect(shouldHideMenuItem(NAV_PATHS.RESOURCES, '/contact')).toBe(false);
        expect(shouldHideMenuItem(NAV_PATHS.RESOURCES, '/')).toBe(false);
      });

      it('should not hide Features on other pages', () => {
        expect(shouldHideMenuItem(NAV_PATHS.FEATURES, '/about')).toBe(false);
        expect(shouldHideMenuItem(NAV_PATHS.FEATURES, '/contact')).toBe(false);
        expect(shouldHideMenuItem(NAV_PATHS.FEATURES, '/')).toBe(false);
      });

      it('should not hide Pricing on other pages', () => {
        expect(shouldHideMenuItem(NAV_PATHS.PRICING, '/about')).toBe(false);
        expect(shouldHideMenuItem(NAV_PATHS.PRICING, '/contact')).toBe(false);
        expect(shouldHideMenuItem(NAV_PATHS.PRICING, '/')).toBe(false);
      });
    });

    describe('edge cases', () => {
      it('should handle unknown navigation paths', () => {
        expect(shouldHideMenuItem('/unknown', NAV_PATHS.CUSTOMER)).toBe(false);
        expect(shouldHideMenuItem('/random', NAV_PATHS.BUSINESS)).toBe(false);
      });

      it('should handle case sensitivity correctly', () => {
        // Navigation paths are case-sensitive
        expect(shouldHideMenuItem('/Resources', NAV_PATHS.CUSTOMER)).toBe(
          false,
        );
        expect(shouldHideMenuItem('/FEATURES', NAV_PATHS.CUSTOMER)).toBe(false);
      });

      it('should handle paths with trailing slashes', () => {
        expect(shouldHideMenuItem('/resources/', NAV_PATHS.CUSTOMER)).toBe(
          false,
        );
      });
    });

    describe('comprehensive test matrix', () => {
      const userTypePages = [
        NAV_PATHS.CUSTOMER,
        NAV_PATHS.BUSINESS,
        NAV_PATHS.PROFESSIONAL,
      ];
      const otherPages = ['/', '/about', '/contact', '/faq'];

      userTypePages.forEach((activePage) => {
        it(`should hide Resources and Features but not Pricing on ${activePage}`, () => {
          expect(shouldHideMenuItem(NAV_PATHS.RESOURCES, activePage)).toBe(
            true,
          );
          expect(shouldHideMenuItem(NAV_PATHS.FEATURES, activePage)).toBe(true);
          expect(shouldHideMenuItem(NAV_PATHS.PRICING, activePage)).toBe(false);
        });
      });

      otherPages.forEach((activePage) => {
        it(`should not hide any menu items on ${activePage}`, () => {
          expect(shouldHideMenuItem(NAV_PATHS.RESOURCES, activePage)).toBe(
            false,
          );
          expect(shouldHideMenuItem(NAV_PATHS.FEATURES, activePage)).toBe(
            false,
          );
          expect(shouldHideMenuItem(NAV_PATHS.PRICING, activePage)).toBe(false);
        });
      });
    });
  });

  describe('NAV_PATHS constants', () => {
    it('should export correct navigation path constants', () => {
      expect(NAV_PATHS.RESOURCES).toBe('/resources');
      expect(NAV_PATHS.FEATURES).toBe('/features');
      expect(NAV_PATHS.PRICING).toBe('/pricing');
      expect(NAV_PATHS.CUSTOMER).toBe('/customer');
      expect(NAV_PATHS.BUSINESS).toBe('/business');
      expect(NAV_PATHS.PROFESSIONAL).toBe('/professional');
    });
  });
});
