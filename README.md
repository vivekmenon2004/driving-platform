# Swedish Driving Platform

A scalable digital platform for Swedish driving-theory education, examination preparation, driving-school partnerships and practical driving lesson services.

## Project Overview

The Swedish Driving Platform is designed to provide students with a digital learning and examination-preparation experience while supporting driving schools through partner services and administrative tools.

**Initial market:** Sweden  
**Initial licence category:** Category B (B-körkort)

---

## Getting Started (First-Time Setup)

Detailed onboarding instructions are documented in [**`DEVELOPER_GUIDE.md`**](./DEVELOPER_GUIDE.md).

### 1. Prerequisites
- **Node.js**: `v20.x` or `v24.x`
- **PostgreSQL**: `v15.x` or higher
- **Git**

### 2. Quick Setup Commands
```bash
# Clone and enter the repository
git clone <repo-url> swedish-driving-platform
cd swedish-driving-platform

# Switch to the dev branch
git checkout dev

# Set up the Backend
cd server
npm install
cp .env.example .env     # Update your PostgreSQL credentials
npm run dev             # Runs at http://localhost:4000

# Set up the Frontend (in another terminal)
cd ../client
npm install
cp .env.example .env.local
npm run dev             # Runs at http://localhost:3000
```

Verify backend health at: `http://localhost:4000/api/v1/health`

---

## Documentation Directory

| Document | Description |
| :--- | :--- |
| [**`DEVELOPER_GUIDE.md`**](./DEVELOPER_GUIDE.md) | First-time clone guide, git hygiene (what to commit vs ignore), and developer rules |
| [**`AGENTS.md`**](./AGENTS.md) | Architectural standards for AI agents & developers (Spring Boot-style MVC monolith) |
| [**`CONTRIBUTING.md`**](./CONTRIBUTING.md) | Git branching strategy (`main`, `dev`, `feature/*`), workflow, and code review rules |
| [**`client/README.md`**](./client/README.md) | Frontend architecture, Next.js conventions, SEO requirements, and directory layout |
| [**`server/README.md`**](./server/README.md) | Backend architecture, 15 core domain modules, database standards, and API rules |
| [**`docs/README.md`**](./docs/README.md) | Technical documentation index (architecture, database, API, decisions) |
| [**`Master SRS (v2.0)`**](./docs/architecture/Swedish_Driving_Platform_Master_SRS_Gothenburg_Dynamics.docx) | Official Consolidated Master Software Requirements Specification |
| [**`PULL_REQUEST_TEMPLATE.md`**](./.github/PULL_REQUEST_TEMPLATE.md) | Pull request checklist enforcing architectural boundaries and tests |

---

## Technology Stack

### Frontend
- Next.js (latest stable release)
- React
- TypeScript
- Tailwind CSS

### Backend
- Node.js
- Express.js
- JavaScript (ES modules)
- Modular Monolith Architecture (Spring Boot-style per domain)
- MVC-style separation of responsibilities

### Database
- PostgreSQL
- Database migrations and version control

### API
- REST API
- Versioned endpoints (`/api/v1`)
- OpenAPI / Swagger documentation

---

## Repository Structure

- `client/` — Next.js frontend application
- `server/` — Express.js backend application
- `docs/` — Technical and project documentation
- `infrastructure/` — Deployment and infrastructure configuration
- `scripts/` — Development and maintenance scripts
- `.github/` — GitHub templates and workflows

---

## Product Scope

### Phase 1 — Driving Theory Learning Platform

- Student registration and authentication
- Theory learning and educational content
- Traffic signs and road rules
- Practice questions
- Mock examinations
- Student progress and results
- Subscription management
- Payment processing
- Driving-school partnerships
- Referral tracking
- Commission management
- Administration and content management

### Phase 2 — Driving School Platform

- Driving-school websites
- School administration
- Instructor and trainer management
- Vehicle management, where required
- Availability and scheduling
- Practical lesson booking
- Booking notifications
- School reporting and management tools

Phase 2 functionality must not unnecessarily complicate or delay Phase 1.

---

## Architecture Principles

- Modular monolith backend architecture
- MVC-style separation of responsibilities (`routes`, `controllers`, `services`, `repositories`, `validators`)
- Independent business-domain modules
- Separation of frontend and backend
- API-first development
- Reusable frontend components
- Secure role-based access control
- School-level tenant isolation
- Database migrations for schema changes
- Centralized error handling and validation
- Automated testing
- Documented architecture decisions

---

## Frontend Principles

- SEO-friendly public pages
- Server-side rendering or static generation where appropriate
- Semantic HTML and accessibility
- Responsive design
- Optimized images and fonts
- Metadata, canonical URLs, sitemap and robots configuration
- Structured data where appropriate
- Strong Core Web Vitals and page performance

---

## Development Workflow

- `main` — stable production-ready code
- `dev` — integration and testing
- `feature/*` — individual development tasks
- `fix/*` — bug fixes

All changes must be submitted through Pull Requests into `dev`.

Refer to `CONTRIBUTING.md` and `DEVELOPER_GUIDE.md` for conventions.

---

## Project Ownership

Developed for Gothenburg Dynamics AB.
