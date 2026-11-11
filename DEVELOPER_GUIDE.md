# Developer Onboarding & Contribution Guide — Swedish Driving Platform

Welcome to the **Swedish Driving Platform** codebase. This guide explains how to get your local environment running when cloning the repository for the first time, what files to track in Git versus what to keep secret, our architectural standards, and where to find all project documentation.

---

## 1. Quickstart: First-Time Setup

### Prerequisites
Before starting, ensure your system has:
* **Node.js**: `v20.x` or `v24.x` (LTS recommended)
* **npm**: `v10.x` or higher
* **PostgreSQL**: `v15.x` or higher running locally or in Docker
* **Git**: `v2.x`

---

### Step 1: Clone the Repository & Switch to `dev`
All development starts from the `dev` branch:

```bash
git clone <repository-url> swedish-driving-platform
cd swedish-driving-platform

# Switch to the integration branch
git checkout dev

# Create your dedicated feature branch (never commit directly to dev or main)
git checkout -b feature/<your-name>-<feature-description>
```

---

### Step 2: Set Up the Backend (`server/`)

1. **Navigate to the server directory**:
   ```bash
   cd server
   ```

2. **Install backend dependencies**:
   ```bash
   npm install
   ```

3. **Configure environment variables**:
   ```bash
   cp .env.example .env
   ```
   Open `.env` and verify your PostgreSQL credentials and server settings:
   ```env
   PORT=4000
   NODE_ENV=development
   DATABASE_URL=postgresql://postgres:postgres@localhost:5432/swedish_driving_db
   DB_HOST=localhost
   DB_PORT=5432
   DB_USER=postgres
   DB_PASSWORD=postgres
   DB_NAME=swedish_driving_db
   DB_SSL=false
   JWT_SECRET=your_dev_jwt_secret_here
   CLIENT_URL=http://localhost:3000
   ```

4. **Start the backend development server**:
   ```bash
   npm run dev
   ```
   *The server runs at `http://localhost:4000` with hot-reload enabled via `nodemon`.*

5. **Verify backend health**:
   Open a browser or run:
   ```bash
   curl http://localhost:4000/api/v1/health
   ```
   Expected response:
   ```json
   {
     "success": true,
     "message": "Swedish Driving Platform API is running",
     "environment": "development"
   }
   ```

---

### Step 3: Set Up the Frontend (`client/`)

1. **Navigate to the client directory**:
   ```bash
   cd ../client
   ```

2. **Install frontend dependencies**:
   ```bash
   npm install
   ```

3. **Configure environment variables**:
   ```bash
   cp .env.example .env.local
   ```
   Verify settings:
   ```env
   NEXT_PUBLIC_API_URL=http://localhost:4000/api/v1
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_placeholder
   ```

4. **Start the Next.js development server**:
   ```bash
   npm run dev
   ```
   *The client runs at `http://localhost:3000`.*

---

## 2. Git Hygiene: What to Keep vs. What to NEVER Commit

| Category | What to KEEP in Git (Tracked) | What to NEVER Commit (Ignored) |
| :--- | :--- | :--- |
| **Environment & Secrets** | `.env.example` templates with placeholders | Real `.env`, `.env.local`, `.env.*` files containing passwords, API keys, or JWT secrets |
| **Dependencies** | `package.json` (and `package-lock.json` for deterministic builds) | `node_modules/`, `.yarn/`, `.pnp/` |
| **Build Artifacts** | Source code in `client/src` and `server/src` | `.next/`, `dist/`, `build/`, `out/`, `coverage/` |
| **System & Editor** | `.editorconfig`, `.gitignore`, `tsconfig.json` | `.DS_Store`, `Thumbs.db`, `.vscode/`, `.idea/`, `*.swp` |
| **Data & Logs** | Migration SQL files (`server/src/database/migrations/`), seed scripts | Database dumps (`*.sql.dump`), production backups, runtime logs (`*.log`) |
| **Directories** | `.gitkeep` files in empty architecture folders | Temporary upload folders (`uploads/`, `tmp/`, `temp/`) |

> [!CAUTION]
> If you accidentally stage a `.env` file or secret, immediately unstage it with `git restore --staged <file>` before committing. Never push secrets to GitHub.

---

## 3. Backend Architecture: Spring Boot-Style Modular Monolith

To prevent the typical Node.js problem of flat messy folders or giant monolithic controllers, this project enforces **Spring Boot-style MVC isolation per business domain**.

Every domain module in `server/src/modules/<module-name>/` follows this exact internal layout:

```
server/src/modules/<module-name>/
├── controllers/    # Thin HTTP handlers (status codes, req/res mapping)
├── services/       # Pure business logic, calculations, orchestration
├── models/         # Entity definitions and data structures
├── repositories/   # PostgreSQL queries (SQL queries live ONLY here)
├── routes/         # Express endpoint definitions
├── validators/     # Request input validation schemas (Zod/Joi)
└── index.js        # Module export (mounts router to /api/v1)
```

### Request Flow
```mermaid
flowchart LR
    Client["Client Request"] --> Route["Route (routes/)"]
    Route --> Validator["Validator (validators/)"]
    Validator --> Controller["Controller (controllers/)"]
    Controller --> Service["Service (services/)"]
    Service --> Repository["Repository (repositories/)"]
    Repository --> DB[("PostgreSQL")]
```

### The 5 Golden Rules for Developers
1. **Keep Controllers Thin**: Do not write database queries or business calculations in controllers. Unpack parameters, call the service, and return HTTP JSON.
2. **Business Logic Belongs in Services**: Validation of business rules, commission tier logic, and exam grading belongs strictly in `services/`.
3. **Database Queries Belong in Repositories**: Only repositories may query PostgreSQL via `server/src/database/connection.js`.
4. **No Direct Inter-Module Subfolder Imports**: Module A must never import from `modules/module-b/repositories/`. Communicate via public module interfaces (`index.js`) or application events.
5. **Use Centralized Errors**: Throw subclasses of `AppError` (e.g. `NotFoundError`, `BadRequestError`, `UnauthorizedError`). Do not swallow errors.

---

## 4. Frontend Architecture: Next.js App Router

* **Route Groups**: Route pages belong inside route groups to maintain clean layout separation:
  * `(public)/` — Public landing pages, marketing, and SEO.
  * `(auth)/` — Login, registration, password reset.
  * `(student)/` — Student dashboard, theory training, and exam simulator.
  * `(school)/` — Driving school partner portal.
  * `(admin)/` — Admin CMS and platform oversight.
* **Component Classification**:
  * `components/ui/` — Primitive, reusable UI widgets (buttons, modals, inputs).
  * `components/layout/` — Headers, footers, sidebars.
  * `components/shared/` — Reusable compound components.
  * `features/<domain>/` — Domain-specific UI, hooks, and services.
* **API Calls**: Never write raw `fetch()` directly in presentational UI components. Keep all API calls inside `src/services/` or `src/features/<feature>/services/`.

---

## 5. Documentation Directory & Reference Links

All developers should familiarize themselves with the project documentation:

| Document | Location | Purpose |
| :--- | :--- | :--- |
| **Project Overview** | [README.md](file:///home/nibin/Downloads/projects/GoTailory/Projects/swedish-driving-platform/README.md) | High-level product summary, tech stack, and phase breakdown |
| **Developer Onboarding** | [DEVELOPER_GUIDE.md](file:///home/nibin/Downloads/projects/GoTailory/Projects/swedish-driving-platform/DEVELOPER_GUIDE.md) | First-time clone guide, git hygiene, and developer instructions (this file) |
| **Agent & Arch Rules** | [AGENTS.md](file:///home/nibin/Downloads/projects/GoTailory/Projects/swedish-driving-platform/AGENTS.md) | Architectural standards for AI coding agents and human developers |
| **Contribution & Git** | [CONTRIBUTING.md](file:///home/nibin/Downloads/projects/GoTailory/Projects/swedish-driving-platform/CONTRIBUTING.md) | Branching strategy (`main`, `dev`, `feature/*`), PR rules, and reviews |
| **PR Template** | [.github/PULL_REQUEST_TEMPLATE.md](file:///home/nibin/Downloads/projects/GoTailory/Projects/swedish-driving-platform/.github/PULL_REQUEST_TEMPLATE.md) | PR checklist enforcing modular boundaries and testing |
| **Frontend Guide** | [client/README.md](file:///home/nibin/Downloads/projects/GoTailory/Projects/swedish-driving-platform/client/README.md) | Next.js conventions, SEO requirements, and directory layout |
| **Frontend Agent Rules** | [client/AGENTS.md](file:///home/nibin/Downloads/projects/GoTailory/Projects/swedish-driving-platform/client/AGENTS.md) | Next.js App Router rules and feature-driven conventions |
| **Backend Guide** | [server/README.md](file:///home/nibin/Downloads/projects/GoTailory/Projects/swedish-driving-platform/server/README.md) | Modular monolith conventions, core modules, and coding rules |
| **Technical Docs Index** | [docs/README.md](file:///home/nibin/Downloads/projects/GoTailory/Projects/swedish-driving-platform/docs/README.md) | Index of architecture, database, API, and decision docs |
| **Master SRS (v2.0)** | [docs/architecture/Swedish_Driving_Platform_Master_SRS_Gothenburg_Dynamics.docx](file:///home/nibin/Downloads/projects/GoTailory/Projects/swedish-driving-platform/docs/architecture/Swedish_Driving_Platform_Master_SRS_Gothenburg_Dynamics.docx) | Official Master SRS consolidating all 24 sections and business requirements |

---

## 6. Development Workflow & Pull Requests

1. **Pull the latest `dev` branch**:
   ```bash
   git checkout dev
   git pull origin dev
   ```
2. **Create your feature branch**:
   ```bash
   git checkout -b feature/<your-name>-<task-name>
   ```
3. **Run linter and tests before pushing**:
   ```bash
   # In client/
   npm run lint

   # In server/
   npm test
   ```
4. **Push branch and open Pull Request**:
   * Target branch: `dev` (never `main`).
   * Complete the architectural checklist in `.github/PULL_REQUEST_TEMPLATE.md`.

