# Security Policy

We are committed to project security and dedicated to providing users with a stable and secure front-end component library.

## 📮 Reporting a Vulnerability

If you discover a security vulnerability, **please DO NOT create a public issue**.

Instead, contact us privately:

- 📧 Email: ljc.byte@gmail.com
- 🔒 GitHub Advisory: https://github.com/oljc/arco-next-vue/security/advisories/new

Please include:

- A clear description of the vulnerability and its impact
- Reproduction steps or a minimal demo (if possible)
- Versions of `vue`, `vite`, `pnpm`, and Node.js in use
- Optional: Suggestions for a fix or mitigation

We appreciate responsible disclosure and will coordinate a fix as soon as possible.

## ⏱️ Response Timeline

- We'll respond within **7 business days** of receiving your report
- Verified vulnerabilities will be prioritized and patched quickly
- Releases and changelogs will clearly indicate security-related updates

## 🔒 Dependency & Build Security

We maintain dependency security with:

- [`pnpm audit`](https://pnpm.io/cli/audit)
- [`GitHub's Dependabot`](https://docs.github.com/en/code-security/dependabot)

Our build process (via Vite) ensures:

- No leaking of internal paths or dev-only code in production bundles
- Removal of `console` and `debugger` statements
- Minimized use of `v-html` with appropriate sanitization when absolutely required

## 🔧 Secure Coding Guidelines

We follow secure Vue practices:

- Avoid `v-html`; sanitize if used
- Strictly type all props, with defaults or `required: true`
- Never use `eval` or dynamic code execution
- Sanitize user input before DOM/style binding

## 🤝 Contributor Guidelines

When submitting PRs that involve user input, DOM manipulation, or dynamic rendering, please include tests to ensure safety and correctness.

We recommend reviewing [OWASP Secure Coding Guidelines](https://owasp.org/www-project-secure-coding-practices/).

---

🤝 Thank you for helping us make `arco-next-vue` more secure!