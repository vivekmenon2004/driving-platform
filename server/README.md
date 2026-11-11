# Backend — Swedish Driving Platform

## 1. Overview

The backend is built with Node.js and Express.js using JavaScript ES modules.

The application follows a **Modular Monolith Architecture with MVC-style separation**.

All business domains initially operate within one deployable backend application and use PostgreSQL as the primary database.

The objective is to maintain clear module boundaries, independent business logic and maintainable code without introducing unnecessary microservice complexity.

## 2. Technology

- Node.js
- Express.js
- JavaScript (ES modules)
- PostgreSQL
- REST API
- OpenAPI / Swagger
- Database migrations
- Automated tests

The database ORM or query builder must be selected after evaluating project requirements and documenting the decision.

## 3. Architecture

Each business module should follow a consistent structure where applicable:

- `routes/` — endpoint definitions
- `controllers/` — HTTP request and response handling
- `services/` — business logic
- `models/` — data models and entity definitions
- `repositories/` — database access
- `validators/` — request validation
- `index.js` — module exports and integration

A module must not contain unnecessary abstractions or empty folders.

### Request lifecycle

Route → Middleware → Validation → Controller → Service → Repository → PostgreSQL.

Controllers must remain thin. Business logic belongs in services. Database operations belong in repositories or the approved data-access layer.

## 4. Core Modules

### Phase 1

- `auth/` — authentication, sessions and authorization
- `users/` — user and student management
- `schools/` — driving-school partner management
- `learning-content/` — theory lessons and educational content
- `traffic-signs/` — traffic-sign information
- `questions/` — question bank and question management
- `practice/` — practice sessions and answer evaluation
- `mock-exams/` — mock examinations, scoring and results
- `subscriptions/` — subscription lifecycle and plans
- `payments/` — payment processing and webhooks
- `referrals/` — referral tracking
- `commissions/` — commission calculations and records
- `notifications/` — email and application notifications
- `admin/` — administrative operations
- `audit/` — audit logs and sensitive-action tracking

### Phase 2

Additional modules may be introduced for:

- Instructor management
- Vehicle management
- Availability and scheduling
- Practical lesson booking
- Driving-school website configuration

Phase 2 modules must not be implemented as part of Phase 1 without approval.

## 5. Coding Standards

- Use JavaScript ES modules consistently.
- Follow consistent naming conventions.
- Use `camelCase` for variables and functions.
- Use `PascalCase` for classes.
- Keep controllers focused on HTTP handling.
- Keep business logic in services.
- Keep database operations in repositories.
- Validate all external input.
- Use centralized error handling.
- Avoid duplicate business logic.
- Avoid circular module dependencies.
- Use asynchronous error handling consistently.
- Add JSDoc comments for complex or public interfaces where useful.

## 6. Database Standards

- PostgreSQL is the primary database.
- All schema changes must use migrations.
- Define foreign keys and constraints explicitly.
- Use indexes for frequently queried fields.
- Use transactions for operations that must be atomic.
- Maintain auditability for payments and commissions.
- Define appropriate data ownership and school-level access boundaries.
- Never commit production database credentials or dumps.

## 7. API Standards

Base URL: `/api/v1`

- Use RESTful resource naming.
- Use appropriate HTTP methods and status codes.
- Maintain consistent response structures.
- Validate request parameters, body and query strings.
- Document endpoints using OpenAPI / Swagger.
- Apply authentication and authorization to protected endpoints.
- Ensure financial endpoints support idempotent processing where necessary.

## 8. Security Standards

- Secure password hashing.
- Authentication and role-based authorization.
- School-level tenant isolation.
- Request validation and sanitization.
- Rate limiting where appropriate.
- Secure HTTP headers.
- CORS configuration.
- Secure environment-variable management.
- Payment webhook signature verification.
- Audit logging for sensitive operations.
- No storage of raw card details.

## 9. Testing

- Unit tests for business services.
- Integration tests for API endpoints.
- Database tests for critical queries and transactions.
- Authorization and tenant-isolation tests.
- Payment and commission edge-case tests.

## 10. Environment Configuration

Maintain `.env.example` with documented variable names and placeholder values.

Never commit `.env` or real credentials.

## 11. Development Rule

No module should be considered complete without appropriate validation, error handling, tests and API documentation.