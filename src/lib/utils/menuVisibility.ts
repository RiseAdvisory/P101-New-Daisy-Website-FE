/**
 * Menu visibility utility
 * Determines which navigation menu items should be hidden based on the current active page
 */

// Navigation paths constants
export const NAV_PATHS = {
  RESOURCES: '/resources',
  FEATURES: '/features',
  PRICING: '/pricing',
  CUSTOMER: '/customer',
  BUSINESS: '/business',
  PROFESSIONAL: '/professional',
} as const;

// Pages where certain menu items should be hidden
const USER_TYPE_PAGES = [
  NAV_PATHS.CUSTOMER,
  NAV_PATHS.BUSINESS,
  NAV_PATHS.PROFESSIONAL,
] as const;

/**
 * Determines if a menu item should be hidden based on the navigation path and current active page
 * @param navPath - The navigation path of the menu item (e.g., '/resources', '/features')
 * @param activePage - The current active page from localStorage (e.g., '/customer', '/business')
 * @returns true if the menu item should be hidden, false otherwise
 */
export const shouldHideMenuItem = (
  navPath: string,
  activePage: string | null,
): boolean => {
  // If no active page, don't hide anything
  if (!activePage) {
    return false;
  }

  // Hide Features when on user type pages (customer/business/professional)
  // Resources and Pricing should remain visible
  const isUserTypePage = USER_TYPE_PAGES.includes(
    activePage as (typeof USER_TYPE_PAGES)[number],
  );

  if (!isUserTypePage) {
    return false;
  }

  // Hide Features, but keep Resources and Pricing visible
  return navPath === NAV_PATHS.FEATURES;
};
