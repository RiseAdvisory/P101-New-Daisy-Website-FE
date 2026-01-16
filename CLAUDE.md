# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is "The Daisy" website - a Next.js 14 application for a business/customer service platform. The project uses TypeScript, Tailwind CSS, and various UI libraries to create a multi-language (English/Arabic) website with multiple user types (customer, business, professional).

## Knowledge Base (KB Agent) - IMPORTANT

**Before starting any task**, consult the KB Agent through the provided MCP tool (`mcp__daisy-kb__Call_Daisy_-_SDLC_Factory_`) to get project context whenever necessary. The KB Agent has complete insight into:

- **Project specifications** - Detailed requirements and business logic
- **Feature descriptions** - What each feature does and its value proposition
- **User personas** - Customer, business, and professional user types
- **SEO content** - Keywords, meta descriptions, and marketing copy that best represent the platform
- **Module specifications** - Technical details about specific modules
- **Test cases** - Expected behavior and acceptance criteria

### When to Use the KB Agent

Use the KB Agent when working on:

- **SEO tasks** - Get appropriate keywords, descriptions, and titles that accurately represent the product
- **Content updates** - Ensure messaging aligns with the official product positioning
- **New features** - Understand the intended behavior and specifications
- **Bug fixes** - Reference expected functionality from specifications
- **UI/UX changes** - Understand the user journey and persona requirements

### Example Usage

When implementing SEO metadata, query the KB Agent:

- "What are the key features of The Daisy platform for customers?"
- "What keywords best describe The Daisy's business services?"
- "What is the value proposition for professional users?"

This ensures all content accurately reflects the product's capabilities and target market.

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

## Documentation Storage

All generated documentation, plans, summaries, and implementation steps should be stored in the `.claude/docs/` folder:

- **Plans** - Implementation plans and architectural decisions
- **Summaries** - Feature summaries and code reviews
- **Implementation steps** - Step-by-step guides for complex tasks
- **SEO documentation** - SEO content and metadata references

### File Naming Convention

All MD files in the docs folder must use a date prefix in the format `yyyy-mm-dd`:

```
yyyy-mm-dd-filename.md
```

**Examples:**

- `2026-01-16-seo-analysis-report.md`
- `2026-01-16-implementation-plan.md`
- `2026-01-20-feature-summary.md`

This ensures all generated documentation is organized in one location, can be easily referenced, and is chronologically sortable.

## Custom Commands

### `/commit-and-pr` - Git Commit and PR Workflow

When the user says `/commit-and-pr` or asks to "commit and create a PR", execute the following sequence:

#### Step 1: Clean Up & Review Changes

```bash
# Remove any temporary files first
rm -rf tmpclaude-* 2>/dev/null

git status                    # See all changed files
git diff --stat               # Review changed files summary
git log --oneline -5          # Check recent commit style
```

#### Step 2: Stage Changes

- Review the changes and stage appropriate files
- Exclude any sensitive files (.env, credentials, etc.)
- Exclude local settings (`.claude/settings.local.json`)
- Ask the user if unclear which files to include

#### Step 3: Commit

- Draft a clear, concise commit message based on the changes
- Follow the repository's commit message style
- Include `Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>`

**Note:** Pre-commit hooks (Prettier/ESLint) will run automatically. If hooks modify files:

```bash
# Amend the commit to include hook-modified files
git add <modified-files>
git commit --amend --no-edit
```

#### Step 4: Sync with Remote

```bash
git fetch origin

# Stash any remaining unstaged changes before rebase
git stash

git rebase origin/main        # Rebase on top of main branch

# Restore stashed changes (if any were stashed)
git stash pop 2>/dev/null || true
```

- Resolve any conflicts if they occur
- If conflicts exist, inform the user and help resolve them

#### Step 5: Push to Remote

```bash
# Use --force-with-lease after rebase (safe force push)
git push -u origin <branch-name> --force-with-lease
```

**Note:** `--force-with-lease` is required after rebase since history changed. It's safe because it won't overwrite others' work.

#### Step 6: Create PR

```bash
gh pr create --title "Title" --body "Description"
```

- Include a summary of changes (bullet points)
- Add a test plan section with checklist
- Include the Claude Code attribution footer

#### Step 7: Check PR Status (3 minutes after creation)

- Wait 3 minutes after PR creation (run in background)
- Check the PR status using:

```bash
gh pr view <pr-number> --json state,reviewDecision,statusCheckRollup,reviews
```

- Report whether the PR is:
  - **Approved** - Ready to merge
  - **Changes Requested** - Review feedback and suggest fixes
  - **Pending Review** - Still awaiting reviewer
  - **CI/CD Status** - Pass/Fail of automated checks

**Example invocation:**

```
User: /commit-and-pr
User: commit and create a PR
User: push my changes and open a PR
```
