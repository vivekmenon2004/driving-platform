## Description
<!-- Provide a brief summary of the changes introduced in this pull request and the problem they solve. -->

## Related Issue / Ticket
<!-- Link to the issue or ticket (e.g. Closes #123) -->

## Type of Change
- [ ] Bug fix (non-breaking change which fixes an issue)
- [ ] New feature (non-breaking change which adds functionality)
- [ ] Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [ ] Architectural / Refactoring / Cleanup
- [ ] Documentation update

## Module / Area Impacted
- [ ] Backend: `server/src/modules/<module-name>`
- [ ] Backend: `server/src/database`
- [ ] Frontend: `client/src/features/<feature-name>`
- [ ] Frontend: `client/src/app`
- [ ] Documentation: `docs/*`
- [ ] Infrastructure / Scripts

## Architectural Checklist
- [ ] **Modular Boundaries Respected**: Changes are localized to the assigned domain module without circular dependencies.
- [ ] **Layered Separation Followed**: Controllers remain thin; business logic is in services; database queries are in repositories.
- [ ] **Input Validation**: All external requests are validated with appropriate schemas.
- [ ] **Error Handling**: Uses centralized error classes (`AppError`) and asynchronous error propagation.
- [ ] **Database Integrity**: Schema changes include reversible migrations (no direct schema alterations).
- [ ] **Security & Authorization**: Tenant isolation and role-based permissions are enforced.
- [ ] **Testing**: Unit tests and/or integration tests added or updated.
- [ ] **Documentation**: Updated relevant documentation in `docs/` or module README if applicable.

## Testing Performed
<!-- Describe tests taken to verify changes, including instructions so reviewer can reproduce. -->

