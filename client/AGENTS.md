<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Frontend Architectural Standards

1. **Feature-Oriented Architecture**:
   - Feature-specific UI, hooks, and services belong in `src/features/<feature-name>/`.
   - Primitive UI elements belong in `src/components/ui/`.
   - Reusable layout components (header, footer, nav) belong in `src/components/layout/`.
   - Shared cross-domain widgets belong in `src/components/shared/`.

2. **Route Groups**:
   - `src/app/(public)` — Public website, marketing, pricing, SEO-optimized landing pages.
   - `src/app/(auth)` — Authentication views (login, register, forgot-password).
   - `src/app/(student)` — Student dashboard, theory training centre, question practice, and mock exam simulator.
   - `src/app/(school)` — Driving school partner portal, referral tracking, and commission statements.
   - `src/app/(admin)` — Administration, question bank management, user & school governance.

3. **API Communication**:
   - Keep API calls inside `src/services/` or `src/features/<feature>/services/`.
   - Do not invoke raw `fetch()` directly in presentation UI components.
   - Use `NEXT_PUBLIC_API_URL` for backend endpoint resolution.

4. **SEO & Accessibility**:
   - Generate metadata using Next.js Metadata API in `layout.tsx` or `page.tsx`.
   - Use semantic HTML tags and proper ARIA labels.
   - Configure sitemap and robots via `src/app/sitemap.ts` and `src/app/robots.ts`.
