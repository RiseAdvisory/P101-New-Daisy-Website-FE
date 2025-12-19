# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is "The Daisy" website - a Next.js 14 application for a business/customer service platform. The project uses TypeScript, Tailwind CSS, and various UI libraries to create a multi-language (English/Arabic) website with multiple user types (customer, business, professional).

## Development Commands

- `npm run dev` - Start development server at http://localhost:3000
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run prepare` - Set up Husky git hooks

## Tech Stack & Architecture

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design system
- **State Management**: Zustand for client state
- **UI Components**: Radix UI primitives with custom styling
- **Forms**: React Hook Form with Zod validation
- **Icons**: Lucide React and custom SVG components
- **Animations**: Framer Motion
- **HTTP Client**: Axios

## Project Structure

### Key Directories

- `src/app/` - Next.js App Router pages and layouts
- `src/components/` - Reusable React components organized by feature/page
- `src/assets/` - Static assets (icons, images)
- `src/lib/constants/` - Application constants and configuration
- `src/store/` - Zustand state management stores
- `src/helpers/` - Utility functions and API configuration

### Architecture Patterns

**Multi-User Type System**: The application supports three user types (customer, business, professional) with:

- Shared layout through `MyContext.js` provider
- User type switching via Zustand store (`src/store/chooseTabs.ts`)
- Type-specific pages and features

**Internationalization**:

- Arabic/English support via language store (`src/store/language.ts`)
- RTL/LTR text direction switching
- Font switching between Open Sans (English) and Cairo (Arabic)

**SEO & Bot Handling**:

- Prerender.io integration in middleware for bot traffic
- Custom redirects: root `/` → `/customer`, `/features` → `/features/customer`
- Open Graph metadata configuration

## Component Organization

Components are organized by feature/page:

- `aboutPage/`, `businessPage/`, `customerPage/` - Page-specific components
- `header/`, `footer/` - Layout components
- `ui/` - Reusable UI primitives (buttons, forms, etc.)
- `featuresPage/` - Feature showcase components with tabs/carousels

## State Management

Zustand stores handle:

- `language.ts` - Language switching and direction
- `chooseTabs.ts` - User type selection
- `currentPage.ts` - Page navigation state
- `openMenu.tsx` - Mobile menu state
- `calculateResult.ts` - Pricing calculator state

## Styling System

- Custom Tailwind config with design tokens
- CSS custom properties for theming
- Responsive breakpoints: md (768px), xl (1300px)
- Custom color palette with primary/secondary variants
- Font family variables for multi-language support

## Key Features

- **Responsive Design**: Mobile-first with custom breakpoints
- **Multi-language**: English/Arabic with RTL support
- **User Type Switching**: Customer/Business/Professional flows
- **Form Handling**: React Hook Form with Zod validation
- **File Uploads**: React Dropzone integration
- **Animations**: Framer Motion and CSS animations
- **Carousel Components**: Embla Carousel implementation

## Git Hooks

- Pre-commit hooks run linting and formatting via Husky
- Lint-staged configuration for TypeScript, JSON, CSS, and Markdown files
