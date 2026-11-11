# Developer and AI Agent Guidelines — Swedish Driving Platform

This document defines the architectural principles, directory layout conventions, and development rules for the Swedish Driving Platform. **All developers and AI coding agents must strictly adhere to these practices.**

---

## 1. Architectural Philosophy: Modular Monolith (Spring Boot Style)

A common problem in Node.js codebases is dumping all controllers, services, or models into flat monolithic folders, or mixing concerns into large single files. 

**This repository strictly enforces a Spring Boot-style modular architecture with MVC separation per business domain:**

```
server/src/modules/<module-name>/
├── controllers/    # Thin HTTP request/response handlers
├── services/       # Pure business logic and domain orchestration
├── models/         # Entity definitions and data models
├── repositories/   # Database access layer and queries
├── routes/         # Express endpoint definitions
├── validators/     # Input validation schemas and middleware
└── index.js        # Module export and router entry point
```

### Module Boundary Rules
1. **Self-Contained Modules**: Each business domain (`auth`, `users`, `schools`, `questions`, `mock-exams`, `subscriptions`, etc.) lives inside its dedicated folder under `server/src/modules/`.
2. **Thin Controllers**: Controllers must only parse request inputs, delegate to the module's service, and return formatted HTTP responses. No direct database queries or heavy business logic in controllers.
3. **Services for Business Logic**: All validation of business rules, commission calculations, exam evaluation, and state transitions belong in services.
4. **Repositories for Data Access**: Only repositories may query PostgreSQL via `server/src/database/connection.js`. No raw queries inside controllers or services.
5. **No Circular Dependencies**: A module must never import internal submodules of another module directly. When inter-module communication is needed, consume the module's public interface (`index.js`) or emit/listen via application events.
6. **Centralized Error Handling**: Throw operational errors using `AppError` subclasses from `server/src/shared/errors/AppError.js`. Do not catch and suppress errors silently.

---

## 2. Directory Layout & Organization

```
swedish-driving-platform/
│
├── client/                     # Next.js Frontend Application
│   ├── public/
│   │   ├── images/
│   │   ├── icons/
│   │   └── fonts/
│   ├── src/
│   │   ├── app/
│   │   │   ├── (public)/       # Public marketing & SEO pages
│   │   │   ├── (auth)/         # Login, registration, password reset
│   │   │   ├── (student)/      # Student dashboard, theory & exam simulator
│   │   │   ├── (school)/       # Driving school partner portal
│   │   │   ├── (admin)/        # Platform administration & CMS
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx
│   │   │   ├── sitemap.ts
│   │   │   └── robots.ts
│   │   ├── components/
│   │   │   ├── ui/             # Generic, primitive UI elements
│   │   │   ├── layout/         # Header, footer, sidebars, navigation
│   │   │   └── shared/         # Shared compound widgets across features
│   │   ├── features/           # Domain-specific frontend modules
│   │   │   ├── authentication/
│   │   │   ├── learning/
│   │   │   ├── questions/
│   │   │   ├── mock-exams/
│   │   │   ├── subscriptions/
│   │   │   └── schools/
│   │   ├── hooks/              # Custom reusable React hooks
│   │   ├── lib/                # Shared utilities and helper functions
│   │   ├── services/           # Backend API communication clients
│   │   ├── types/              # Global TypeScript definitions
│   │   ├── config/             # Frontend app configuration
│   │   └── styles/             # Global styles and design tokens
│   ├── .env.example
│   ├── package.json
│   └── README.md
│
├── server/                     # Express.js Modular Backend
│   ├── src/
│   │   ├── config/             # Environment & service configurations
│   │   ├── database/
│   │   │   ├── migrations/     # Versioned SQL migration files
│   │   │   ├── seeds/          # Development and test seed scripts
│   │   │   └── connection.js   # PostgreSQL pool connection
│   │   ├── modules/            # Business domain modules (Modular Monolith)
│   │   │   ├── auth/
│   │   │   ├── users/
│   │   │   ├── schools/
│   │   │   ├── learning-content/
│   │   │   ├── traffic-signs/
│   │   │   ├── questions/
│   │   │   ├── practice/
│   │   │   ├── mock-exams/
│   │   │   ├── subscriptions/
│   │   │   ├── payments/
│   │   │   ├── referrals/
│   │   │   ├── commissions/
│   │   │   ├── notifications/
│   │   │   ├── admin/
│   │   │   └── audit/
│   │   ├── middleware/         # Centralized middlewares (auth, errorHandler)
│   │   ├── shared/
│   │   │   ├── constants/
│   │   │   ├── errors/
│   │   │   ├── helpers/
│   │   │   └── utils/
│   │   ├── app.js              # Express app configuration & route registry
│   │   └── server.js           # Server bootstrap and listener
│   ├── tests/
│   │   ├── unit/
│   │   └── integration/
│   ├── .env.example
│   ├── package.json
│   └── README.md
│
├── docs/                       # Project Documentation
│   ├── requirements/           # User stories & acceptance criteria
│   ├── architecture/           # System design & Master SRS
│   ├── database/               # Schemas, ER diagrams & migration plans
│   ├── api/                    # REST API documentation & OpenAPI specs
│   └── decisions/              # Architecture Decision Records (ADRs)
│
├── infrastructure/             # Docker, CI/CD, deployment manifests
├── scripts/                    # Maintenance, setup, and dev automation scripts
├── .github/
│   └── PULL_REQUEST_TEMPLATE.md
├── .editorconfig
├── .gitignore
├── CONTRIBUTING.md
└── README.md
```

---

## 3. Frontend Principles (Next.js & React)

1. **App Router Conventions**: Organize views into route groups `(public)`, `(auth)`, `(student)`, `(school)`, `(admin)` to separate layouts without affecting URL paths.
2. **Server vs. Client Components**: Default to Server Components. Only add `"use client"` when interactivity, browser state, or React hooks are required.
3. **No Direct Backend Business Rule Duplication**: The frontend must consume API contracts and not attempt to replicate calculation engines (e.g. commission rates or exam scoring rules) client-side.
4. **API Service Layer**: All HTTP calls must reside in `src/services/` or within the corresponding `src/features/<feature>/services/`. Never call `fetch()` directly inside presentational UI components.
5. **SEO & Performance**: Public pages must use the Next.js Metadata API, provide canonical URLs, and optimize images.

---

## 4. Backend Request Lifecycle

Every API request follows a strict unidirectional flow:

$$\text{Client Request} \longrightarrow \text{Route} \longrightarrow \text{Middleware/Validation} \longrightarrow \text{Controller} \longrightarrow \text{Service} \longrightarrow \text{Repository} \longrightarrow \text{PostgreSQL}$$

- **Route** (`routes/`): Declares the HTTP verb and path, attaching middleware.
- **Validator** (`validators/`): Sanitizes and validates request parameters and body.
- **Controller** (`controllers/`): Unpacks parameters, calls service, returns HTTP response.
- **Service** (`services/`): Implements business logic, validation, calculations, transactions.
- **Repository** (`repositories/`): Formulates and runs SQL queries, returning clean data structures.

---

## 5. Development Workflow & Git Rules

1. **Branches**: All development work occurs on `feature/<developer>-<task>` or `fix/<developer>-<task>` branched from `dev`.
2. **Pull Requests**: Pull requests must target `dev` and use `.github/PULL_REQUEST_TEMPLATE.md`.
3. **Zero Untracked / Monolithic Dumps**: Do not create generic helper folders or dump miscellaneous files outside the specified module structure.

