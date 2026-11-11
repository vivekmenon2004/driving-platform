# Frontend — Swedish Driving Platform

## 1. Overview

The frontend is developed using the latest stable Next.js release, React, TypeScript and Tailwind CSS.

The application must provide a responsive, accessible, performant and SEO-friendly experience.

## 2. Technology

- Next.js (latest stable)
- React
- TypeScript
- Tailwind CSS
- Next.js App Router

Use the official Next.js conventions and avoid unnecessary dependencies.

## 3. Application Architecture

The frontend should use a feature-oriented structure.

### Main directories

- `src/app/` — routes, layouts and pages
- `src/components/ui/` — reusable UI primitives
- `src/components/layout/` — headers, footers and navigation
- `src/components/shared/` — shared application components
- `src/features/` — domain-specific frontend features
- `src/hooks/` — reusable React hooks
- `src/lib/` — utilities and shared libraries
- `src/services/` — backend API communication
- `src/types/` — shared TypeScript types
- `src/config/` — application configuration
- `src/styles/` — global styles and design tokens

## 4. Main Application Areas

- Public website
- Authentication
- Student dashboard
- Theory learning
- Traffic signs
- Practice questions
- Mock examinations
- Subscription management
- Payment experience
- Driving-school partner dashboard
- Administration interface

Phase 2 may introduce instructor, scheduling and practical lesson-booking interfaces.

## 5. SEO Requirements

SEO is a core requirement for all public-facing pages.

Implement:

- Server-side rendering and static generation where appropriate.
- Next.js Metadata API for page titles and descriptions.
- Unique metadata for important public pages.
- Canonical URLs.
- XML sitemap using Next.js sitemap conventions.
- Robots configuration.
- Open Graph and social-sharing metadata.
- Structured data using appropriate Schema.org types.
- Semantic HTML.
- Descriptive URLs and headings.
- Optimized images using Next.js image optimization.
- Good Core Web Vitals.
- Mobile-friendly layouts.
- Proper internal linking.

Private student, school and administration pages must not expose private information through search indexing.

SEO metadata and rendering strategy should be selected according to the page's purpose. Do not force every page into static generation.

## 6. Coding Standards

- TypeScript must be used throughout the frontend.
- Avoid `any` unless justified.
- Prefer reusable components.
- Keep domain-specific UI inside feature directories.
- Keep backend communication inside service modules.
- Do not duplicate backend business rules in the frontend.
- Use environment variables for API configuration.
- Keep components focused and maintainable.
- Follow accessibility standards.
- Avoid unnecessary client-side rendering.
- Prefer Server Components where appropriate.
- Use Client Components only when interactivity or browser APIs require them.

## 7. API Communication

The frontend communicates with the backend through documented REST endpoints.

The backend API base URL must be configurable through environment variables.

Example:

`NEXT_PUBLIC_API_URL=http://localhost:4000/api/v1`

Never expose private credentials through `NEXT_PUBLIC_` environment variables.

## 8. Quality Standards

- Responsive layouts.
- Consistent design system.
- Accessible navigation and forms.
- Loading, empty and error states.
- Form validation.
- Reusable components.
- Performance optimization.
- Testing of important user journeys.

## 9. Environment Configuration

Maintain `.env.example` with documented placeholder values.

Never commit actual environment files or credentials.