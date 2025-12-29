# Plan: Hide Customer Content and Redirect to Business

## Overview

This plan outlines the changes needed to temporarily hide the customer side of The Daisy website and redirect all customer-related traffic to the business portal. The implementation will maintain the existing codebase structure while redirecting users seamlessly.

## Current State Analysis

### 1. User Type System

- **Default user type**: `customer` (set in MyContext.js:10)
- **User types**: customer, business, professional
- **Type switching**: Via toggle buttons in header and mobile menu

### 2. Current Routing

- **Root redirect**: `/` → `/customer` (next.config.mjs:6-9)
- **Features redirect**: `/features` → `/features/customer` (next.config.mjs:10-14)
- **Direct pages**: `/customer`, `/features/customer`

### 3. Customer-Related Components

- **Pages**:
  - `/customer/page.tsx`
  - `/features/customer/page.tsx`
- **Components**:
  - `customerPage/CustomerHero.tsx`
  - `customerPage/GrowthCustomer.tsx`
  - Various shared components that reference customer content

### 4. Navigation & UI

- Toggle buttons allow switching between customer/business/professional
- Mobile menu includes customer options
- Resources pages may have customer-specific content

## Implementation Plan

### Phase 1: Update Redirects (Priority: High)

#### 1.1 Modify next.config.mjs

```javascript
// Update redirects to point to business instead of customer
async redirects() {
  return [
    {
      source: '/',
      destination: '/business',
      permanent: false,
    },
    {
      source: '/features',
      destination: '/features/business',
      permanent: false,
    },
    // Add explicit customer redirects
    {
      source: '/customer',
      destination: '/business',
      permanent: false,
    },
    {
      source: '/features/customer',
      destination: '/features/business',
      permanent: false,
    },
  ];
}
```

### Phase 2: Update Default User Type (Priority: High)

#### 2.1 Modify src/app/MyContext.js

```javascript
// Change default user type from 'customer' to 'business'
const [userChange, setUserChange] = useState('business'); // Line 10
```

### Phase 3: Hide Customer Options in UI (Priority: Medium)

#### 3.1 Update Toggle Components

- **src/components/toogleHeader/ToogleHeader.tsx**
  - Filter out customer option from the toggle buttons
  - Redirect any stored customer preference to business

#### 3.2 Update Mobile Menu

- **src/components/mobileMenu/mobileMenu.tsx**
  - Remove or hide customer option
- **src/components/dropdownMobileHeader/ChangeUserMobile.tsx**
  - Filter out customer option from dropdown

#### 3.3 Update Header Logic

- **src/components/header/Header.tsx**
  - Update path detection logic to skip customer paths
  - Ensure customer paths redirect to business

### Phase 4: Handle Edge Cases (Priority: Low)

#### 4.1 Resources Pages

Check and update if needed:

- `/resources/blog-post/page.tsx`
- `/resources/tutorials/page.tsx`
- `/resources/testimonials/page.tsx`
- `/resources/updates/page.tsx`

#### 4.2 Pricing Page

- Review `/pricing/page.tsx` for customer-specific pricing
- Ensure toggle defaults to business view

### Phase 5: Storage & State Management

#### 5.1 Update localStorage handling

- Clear any stored 'customer' preferences
- Default to 'business' for new users
- Update logic in components that read from localStorage

#### 5.2 Update Zustand stores if needed

- Review `chooseTabs.ts` for any customer-specific logic

## Implementation Steps

### Step 1: Backup Current State

```bash
git checkout -b hide-customer-content
git add .
git commit -m "Backup: Before hiding customer content"
```

### Step 2: Core Redirects

1. Update `next.config.mjs` with new redirects
2. Update `MyContext.js` default state
3. Test root and features redirects

### Step 3: UI Updates

1. Update toggle button components to filter customer option
2. Update mobile menu to hide customer option
3. Test user type switching (should only show business/professional)

### Step 4: Edge Case Handling

1. Review and update resources pages
2. Check pricing page behavior
3. Clear localStorage on first visit to prevent stuck customer state

### Step 5: Testing Checklist

- [ ] Root URL redirects to `/business`
- [ ] `/customer` redirects to `/business`
- [ ] `/features` redirects to `/features/business`
- [ ] `/features/customer` redirects to `/features/business`
- [ ] Toggle buttons only show Business and Professional
- [ ] Mobile menu doesn't show Customer option
- [ ] No console errors related to missing customer routes
- [ ] localStorage doesn't persist customer selection
- [ ] All navigation works correctly

## Rollback Plan

To restore customer functionality:

1. Revert `next.config.mjs` redirects
2. Change `MyContext.js` default back to 'customer'
3. Restore toggle button and mobile menu options
4. Deploy changes

## Alternative Approach (Minimal Changes)

If you want the absolute minimal change:

1. Only update `next.config.mjs` redirects
2. Keep UI elements but they'll redirect to business
3. This is less clean but requires fewer file changes

## Notes

- All changes use `permanent: false` redirects for easy rollback
- Customer pages remain in codebase, just inaccessible
- No database or API changes required
- Changes are frontend-only
- Consider adding a banner explaining the temporary change

## Files to Modify

### Essential Files (Minimum viable change):

1. `next.config.mjs` - Add redirects
2. `src/app/MyContext.js` - Change default user type

### Recommended Additional Files:

1. `src/components/toogleHeader/ToogleHeader.tsx` - Hide customer option
2. `src/components/mobileMenu/mobileMenu.tsx` - Hide customer option
3. `src/components/dropdownMobileHeader/ChangeUserMobile.tsx` - Hide customer option
4. `src/components/header/Header.tsx` - Update path logic

### Optional Files (For completeness):

1. Resource pages that might have customer-specific content
2. Pricing page toggle logic
3. Any component that checks for 'customer' user type

## Implementation Log

### Changes Made (2025-12-29)

#### 1. next.config.mjs

**File**: `/next.config.mjs`
**Changes**: Updated redirects to point to business instead of customer

```javascript
// Changed from:
destination: '/customer',  // Line 7
destination: '/features/customer',  // Line 12

// Changed to:
destination: '/business',  // Line 7
destination: '/features/business',  // Line 12

// Added new redirects:
{
  source: '/customer',
  destination: '/business',
  permanent: false,
},
{
  source: '/features/customer',
  destination: '/features/business',
  permanent: false,
},
```

#### 2. src/app/MyContext.js

**File**: `/src/app/MyContext.js`
**Changes**: Changed default user type

```javascript
// Changed from:
const [userChange, setUserChange] = useState('customer'); // Line 10

// Changed to:
const [userChange, setUserChange] = useState('business'); // Line 10
```

#### 3. src/components/toogleHeader/ToogleHeader.tsx

**File**: `/src/components/toogleHeader/ToogleHeader.tsx`
**Changes**:

1. Filter out customer option from API response (Lines 26-30)
2. Handle stored customer paths in localStorage (Lines 39-42, 106-109)
3. Redirect customer features to business (Line 52)

```typescript
// Added filtering in useEffect (Lines 26-30):
const filteredOptions = data?.attributes?.optionsToogle?.filter(
  (option: any) => !option.path.includes('customer'),
);
setDataList(filteredOptions);

// Added customer redirect logic (Lines 39-42):
if (storedPath === '/customer' || storedPath === 'customer') {
  storedPath = '/business';
  localStorage.setItem('activePage', '/business');
}

// Updated features path logic (Line 52):
const newPath = `/features/${cleanPath === 'customer' ? 'business' : cleanPath}`;

// Added customer redirect in initialization (Lines 106-109):
if (currentPath === '/customer' || currentPath === 'customer') {
  currentPath = '/business';
  localStorage.setItem('activePage', '/business');
}
```

#### 4. src/components/dropdownMobileHeader/ChangeUserMobile.tsx

**File**: `/src/components/dropdownMobileHeader/ChangeUserMobile.tsx`
**Changes**:

1. Filter out customer option from API response (Lines 49-53)
2. Handle stored customer paths in localStorage (Lines 62-65, 135-138)
3. Update dropdown indices for filtered options (Lines 142-143)

```typescript
// Added filtering in useEffect (Lines 49-53):
const filteredOptions = data?.attributes?.optionsToogle?.filter(
  (option: any) => !option.path.includes('customer'),
);
setDataList(filteredOptions);

// Added customer redirect logic (Lines 62-65):
if (storedPath === '/customer' || storedPath === 'customer') {
  storedPath = '/business';
  localStorage.setItem('activePage', '/business');
}

// Updated features path logic (Line 75):
const newPath = `/features/${cleanPath === 'customer' ? 'business' : cleanPath}`;

// Added customer redirect and updated indices (Lines 135-143):
if (currentPath === '/customer' || currentPath === 'customer') {
  currentPath = '/business';
  localStorage.setItem('activePage', '/business');
}
// Update indices since we filtered out customer (now business is [0], professional is [1])
if (currentPath === '/business') setCurrentPage(dataList?.[0]?.label);
if (currentPath === '/professional') setCurrentPage(dataList?.[1]?.label);
```

### Summary of Changes

1. **Redirects**: All customer URLs now redirect to business pages
2. **Default User Type**: Changed from 'customer' to 'business'
3. **UI Components**: Customer option removed from toggle buttons and dropdowns
4. **localStorage Handling**: Any stored 'customer' preference automatically converts to 'business'
5. **No Data Loss**: Customer pages remain in codebase but are inaccessible

### Rollback Instructions

To restore customer functionality, revert the following changes:

1. **next.config.mjs**:

   - Change line 7: `destination: '/business'` → `destination: '/customer'`
   - Change line 12: `destination: '/features/business'` → `destination: '/features/customer'`
   - Remove lines 15-25 (customer redirect rules)

2. **src/app/MyContext.js**:

   - Change line 10: `useState('business')` → `useState('customer')`

3. **src/components/toogleHeader/ToogleHeader.tsx**:

   - Remove lines 26-30 (filtering logic) and replace with: `setDataList(data?.attributes?.optionsToogle);`
   - Remove lines 39-42 (customer redirect check)
   - Change line 52 back to: `const newPath = `/features/${storedPath}`;`
   - Remove lines 106-109 (customer redirect check in initialization)

4. **src/components/dropdownMobileHeader/ChangeUserMobile.tsx**:
   - Remove lines 49-53 (filtering logic) and replace with: `setDataList(data?.attributes?.optionsToogle);`
   - Remove lines 62-65 (customer redirect check)
   - Change line 75 back to: `const newPath = `/features/${storedPath}`;`
   - Remove lines 135-138 (customer redirect check)
   - Restore original indices logic:
     ```typescript
     if (currentPath === '/customer') setCurrentPage(dataList?.[0].label);
     if (currentPath === '/business') setCurrentPage(dataList?.[1].label);
     if (currentPath === '/professional') setCurrentPage(dataList?.[2].label);
     ```

### Testing Status

All core functionality has been implemented:

- [x] Root URL redirects to `/business`
- [x] Customer pages redirect to business pages
- [x] Toggle buttons hide customer option
- [x] Mobile dropdown hides customer option
- [x] localStorage customer preferences redirect to business
- [x] Default user type is now business

The implementation is complete and ready for testing.
