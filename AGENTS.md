# Repository Guidelines

## Project Structure & Module Organization
This is a Next.js 14 App Router app under `src/`.
- `src/app`: route pages and API handlers (`src/app/[locale]/...`, `src/app/api/...`).
- `src/components`: reusable UI pieces, grouped by feature area (e.g., `formBusiness`, `pricingPage`).
- `src/lib` and `src/helpers`: business logic, API helpers, constants, i18n, and utilities.
- `src/store`: global state modules.
- `src/assets` and `public`: SVG/PNG and static assets.
- `scripts`: maintenance and content automation (`i18n`, image generation, indexing).
- `__tests__`: top-level tests plus colocated `__tests__` folders under feature modules.
- `docs`: SEO/strategy/spec documentation (non-code reference).

## Build, Test, and Development Commands
- `npm install`: install dependencies.
- `npm run dev`: start local dev server at `http://localhost:3000`.
- `npm run build`: production build.
- `npm run start`: run built app.
- `npm run lint`: run `next lint`.
- `npm run format`: run Prettier on the repo.
- `npm run test`: run Jest.
- `npm run test:watch`: watch-mode tests.
- `npm run test:coverage`: collect coverage.
- `npm run analyze`: generate build analysis (`ANALYZE=true next build`).
- `npm run i18n:audit` / `npm run i18n:audit:ci`: locale/translation checks.
- `npm run generate-images`: regenerate article assets.

## Coding Style & Naming Conventions
- Use TypeScript and path alias `@/*` (e.g., `import { foo } from '@/lib/foo'`).
- Follow Prettier: single quotes, trailing commas, 80-character print width, 2 spaces, semicolons.
- Components use React component naming (`PascalCase`), e.g., `CardItem.tsx`.
- Route folders use kebab/lowercase (`about`, `customer`, `privacy-policy`).
- Keep utility/helper names in camelCase; constant file names are descriptive and grouped by domain.
- Formatting and linting should stay aligned with `next/core-web-vitals` defaults.

## Testing Guidelines
- Framework: Jest + React Testing Library.
- Test files are `*.test.ts`/`*.test.tsx`, typically under `__tests__`.
- Keep tests close to feature code when practical (`src/.../__tests__/`), with shared checks in root `__tests__`.
- Run `npm run test` before finalizing feature work; use coverage for broader verification.

## Commit & Pull Request Guidelines
- Commit history uses Conventional Commit-style prefixes (`feat`, `fix`, `docs`, etc.), including scoped forms (`feat(i18n): ...`).
- Use imperative, specific subject lines and keep them concise.
- PRs should include:
  - Summary of behavior changes and affected routes/components.
  - Validation results (`npm run lint`, `npm run test`, and build if relevant).
  - Linked issue or context.
  - Screenshots for UI changes.

## Security & Configuration Notes
- Use `.env.example` as the template for local configuration.
- Do not commit secrets (`.env`, API keys, third-party tokens).
- Keep API URL/config values in environment variables, not hardcoded strings.
