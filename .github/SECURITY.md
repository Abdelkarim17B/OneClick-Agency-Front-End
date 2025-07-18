# Security Policy

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| 1.x.x   | :white_check_mark: |

## Reporting a Vulnerability

We take security vulnerabilities seriously. If you discover a security vulnerability, please follow these steps:

1. **Do not** open a public issue
2. Email the maintainer directly (contact information in README)
3. Include detailed information about the vulnerability
4. Allow reasonable time for a response before public disclosure

## Security Measures

This project implements several security measures:

- **Content Security Policy** via nginx configuration
- **Security headers** for XSS and clickjacking protection
- **Dependency scanning** via GitHub Actions
- **Secret scanning** to prevent credential leaks
- **Regular dependency updates** to patch known vulnerabilities

## Secure Development Practices

- All dependencies are regularly audited
- ESLint rules include security-focused checks
- Docker images use non-root users when possible
- Build artifacts are scanned for vulnerabilities
- No sensitive data is committed to the repository

Thank you for helping keep our project secure!
