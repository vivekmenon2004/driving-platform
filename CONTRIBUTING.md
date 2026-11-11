# Contribution Guidelines

## Branch Strategy

- `main` — stable production-ready code
- `dev` — integration and testing
- `feature/<developer>-<task>` — new features
- `fix/<developer>-<task>` — bug fixes

## Development Workflow

1. Receive an assigned GitHub issue.
2. Understand the scope and acceptance criteria.
3. Create a feature branch from the latest `dev`.
4. Implement only the assigned scope.
5. Write or update tests.
6. Update relevant documentation.
7. Push the feature branch.
8. Open a Pull Request into `dev`.
9. Obtain code review and approval.
10. Merge after CI and testing pass.

## General Rules

- No direct commits to `main`.
- No direct commits to `dev`.
- Every change requires a Pull Request.
- One task should have one responsible developer.
- Do not modify unrelated modules.
- Do not commit secrets, credentials or production data.
- Do not introduce dependencies without justification.
- Document important architectural changes.
- Do not modify database schemas without migrations.
- Avoid large unrelated changes in a single Pull Request.

## Backend Rules

- Use Node.js and Express.js.
- Follow the established modular monolith architecture.
- Maintain MVC-style separation.
- Keep controllers thin.
- Put business logic in services.
- Keep database access in repositories.
- Validate external input.
- Add tests for important business logic.

## Frontend Rules

- Use Next.js, TypeScript and Tailwind CSS.
- Follow App Router conventions.
- Prefer reusable components.
- Maintain SEO requirements for public pages.
- Avoid unnecessary Client Components.
- Keep API communication in service modules.
- Follow accessibility and responsive-design standards.

## Code Review

Reviewers should check:

- Correctness and acceptance criteria.
- Architecture and module boundaries.
- Security and authorization.
- Database impact.
- Error handling.
- Tests.
- Performance.
- Documentation.

The repository maintainer or designated lead approves architectural changes and production releases.