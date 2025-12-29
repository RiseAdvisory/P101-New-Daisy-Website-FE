# The Daisy Website - Project Reference

## Overview

The Daisy is a multi-user type web application built with Next.js 14, featuring separate experiences for customers, businesses, and professionals. The platform serves as "Your Gateway To Exceptional Experiences" with multi-language support (English/Arabic).

**Live URL**: https://jointhedaisy.com

## Tech Stack

### Core Framework
- **Next.js 14** with App Router
- **TypeScript** for type safety
- **React 18** with Server Components

### Styling & UI
- **Tailwind CSS** with custom design system
- **Radix UI** primitives for accessible components
- **Framer Motion** for animations
- **Embla Carousel** for carousel components
- **Lucide React** for icons

### State Management & Data
- **Zustand** for client-side state management
- **React Hook Form** with **Zod** validation
- **Axios** for API calls
- **Strapi CMS** backend (API endpoints via env vars)

### Development Tools
- **ESLint** & **Prettier** for code quality
- **Husky** & **lint-staged** for pre-commit hooks

## Project Structure

```
src/
├── app/                      # Next.js App Router pages
│   ├── layout.tsx           # Root layout with fonts & providers
│   ├── MyContext.js         # Global context provider wrapper
│   ├── page.tsx             # Empty home page (redirects to /customer)
│   ├── customer/            # Customer portal pages
│   ├── business/            # Business portal pages
│   ├── professional/        # Professional portal pages
│   ├── features/            # Feature pages per user type
│   ├── resources/           # Blog, tutorials, testimonials
│   └── [other pages]/       # About, contact, pricing, etc.
│
├── components/              # Organized by feature/page
│   ├── ui/                 # Reusable UI primitives
│   ├── header/             # Global header component
│   ├── footer/             # Global footer component
│   ├── customerPage/       # Customer-specific components
│   ├── businessPage/       # Business-specific components
│   ├── professional/       # Professional-specific components
│   └── [feature]Page/      # Page-specific components
│
├── assets/
│   ├── icons/              # Custom SVG icon components
│   └── images/             # Static images (PNG, JPG)
│
├── store/                   # Zustand stores
│   ├── language.ts         # Language & RTL switching
│   ├── chooseTabs.ts       # User type selection
│   ├── currentPage.ts      # Page navigation tracking
│   ├── openMenu.tsx        # Mobile menu state
│   └── calculateResult.ts  # Pricing calculator state
│
├── helpers/
│   ├── axiosConfig.js      # Axios instance with Strapi URL
│   ├── ClientSideEffect.tsx # Client-side only effects
│   └── [other helpers]/
│
└── lib/
    ├── constants/          # All app constants
    │   ├── features/       # Feature lists per user type
    │   ├── pricing/        # Pricing tiers & options
    │   ├── resources/      # Blog, tutorial content
    │   └── [others]/       # Navigation, forms, etc.
    └── utils.ts            # Utility functions
```

## Key Architecture Patterns

### 1. Multi-User Type System
- Three user types: `customer`, `business`, `professional`
- User type context via `MyContext.js` wraps entire app
- Zustand store (`chooseTabs.ts`) manages active user type
- Separate pages and components for each user type
- Type-specific routing under `/features/*`

### 2. Internationalization (i18n)
- Arabic/English language support
- RTL/LTR direction switching
- Font switching: Open Sans (English) vs Cairo (Arabic)
- Language state in Zustand store with localStorage persistence
- Full page reload on language change for proper re-render

### 3. Routing & Redirects
```javascript
// next.config.mjs redirects
'/' → '/customer'
'/features' → '/features/customer'
```

### 4. SEO & Bot Optimization
- Prerender.io integration for bot traffic (middleware.js)
- Custom bot detection for social media crawlers
- Open Graph metadata in layout.tsx
- Sitemap support

### 5. Component Patterns
- **Page Components**: Located in `app/[page]/page.tsx`
- **Feature Components**: Organized by page in `components/[page]Page/`
- **Shared UI**: Reusable primitives in `components/ui/`
- **Icon Components**: Custom SVGs as React components
- **Form Components**: React Hook Form with Zod schemas

### 6. State Management
```typescript
// Example Zustand store pattern
interface ILanguageStore {
  lang: string;
  changeLanguages: (newLang: string) => void;
}

export const useChangeLanguage = create<ILanguageStore>((set) => ({
  lang: localStorage.getItem('lang') || 'en',
  changeLanguages: (newLang) => {
    set({ lang: newLang });
    localStorage.setItem('lang', newLang);
    document.body.setAttribute('dir', newLang === 'ar' ? 'rtl' : 'ltr');
    window.location.reload();
  },
}));
```

### 7. API Integration
- Strapi CMS backend
- Environment variables:
  - `NEXT_PUBLIC_STRAPI_URL`: API base URL
  - `NEXT_PUBLIC_STRAPI_URL_IMAGE`: Image CDN URL
- Axios instance configured in `helpers/axiosConfig.js`
- API calls scattered throughout page components

### 8. Styling System
- Tailwind CSS with custom configuration
- Design tokens in `tailwind.config.ts`:
  - Custom colors: `primary`, `primaryBtn`, `customGreen`, etc.
  - Responsive breakpoints: `md` (768px), `xl` (1300px)
  - Font families: `openSans`, `montserrat`, `inter`, `cairo`
- CSS modules for complex components (Locker, Carousel)
- RTL support via Tailwind's `rtl:` prefix

## Key Features

### Global Features
- Responsive mobile-first design
- Multi-language support (EN/AR) with RTL
- User type switching (Customer/Business/Professional)
- Mobile hamburger menu with dropdowns
- Footer with newsletter signup
- FreshChat widget integration
- QR code for app downloads

### Page-Specific Features

#### Customer Portal
- Hero section with app download CTAs
- Growth/benefits showcase
- Experience sections with animations
- Join the Daisy CTA sections

#### Business Portal  
- Partner application form
- Mission & values sections
- Growth metrics display
- Multi-step form with validation

#### Professional Portal
- Professional-focused hero
- Service listings
- Specialized features carousel

#### Features Pages
- Tab-based navigation per user type
- Mobile carousel view
- Desktop column view
- Feature comparison lists

#### Resources Section
- Blog posts with categories
- Video tutorials with tabs
- Customer testimonials  
- Product updates
- Legal documentation

#### Pricing Page
- Interactive pricing calculator
- Tiered pricing cards
- Enterprise options
- Monthly/yearly toggle

## Development Workflow

### Commands
```bash
npm run dev        # Start dev server (localhost:3000)
npm run build      # Production build
npm run start      # Production server
npm run lint       # ESLint check
npm run format     # Prettier formatting
```

### Git Hooks
- Pre-commit: Runs linting and formatting via Husky
- Lint-staged config for TS, JSON, CSS, MD files

### Environment Setup
Required `.env.local`:
```
NEXT_PUBLIC_STRAPI_URL=https://your-strapi-url.com
NEXT_PUBLIC_STRAPI_URL_IMAGE=https://your-cdn-url.com
PRERENDER_TOKEN=your-prerender-token
```

## Common Patterns & Conventions

### Component File Structure
```tsx
// Import icons/images
import { IconName } from '@/assets/icons/...';
import imageName from '@/assets/images/...';

// Import UI components  
import { Button } from '@/components/ui/button';

// Component with typed props
interface ComponentProps {
  title: string;
  // ...
}

export const ComponentName = ({ title }: ComponentProps) => {
  // Hooks first
  const { lang } = useChangeLanguage();
  
  // Render
  return (
    <div className="...">
      {/* Content */}
    </div>
  );
};
```

### Form Pattern
```tsx
const form = useForm<FormData>({
  resolver: zodResolver(formSchema),
  defaultValues: { /* ... */ }
});

const onSubmit = async (data: FormData) => {
  try {
    const res = await axiosInstance.post('/endpoint', data);
    // Handle success
  } catch (error) {
    // Handle error
  }
};
```

### Multi-Language Text
- Text content often passed as props from page components
- Some components have hardcoded English/Arabic conditionals
- No centralized i18n solution - text is component-specific

### Responsive Design
- Mobile-first approach
- Common breakpoints:
  - `md:` for tablet (768px+)
  - `xl:` for desktop (1300px+)
- Different layouts for mobile vs desktop

## Important Notes

1. **No Tests**: Project currently has no test files
2. **React Strict Mode**: Disabled in next.config.mjs
3. **Image Optimization**: Remote patterns allow all HTTPS images
4. **TypeScript**: Mixed usage - some files still use .js
5. **API Keys**: All API endpoints via environment variables
6. **State Persistence**: Language preference saved to localStorage
7. **Forms**: Heavy use of React Hook Form with Zod validation
8. **Animations**: Framer Motion for page transitions, CSS for simple animations
9. **Mobile Menu**: Complex dropdown system with nested navigation
10. **User Flow**: Default redirect to customer portal, manual switching between types

## Recent Changes
- Added `@anthropic-ai/claude-code` package (v2.0.73)
- Working on minor updates branch
- Recent commits related to QR code implementation

## Deployment Considerations
- Prerender.io token required for SEO
- Strapi backend must be configured
- Environment variables must be set
- Static assets served from public directory
- Next.js production build optimizations