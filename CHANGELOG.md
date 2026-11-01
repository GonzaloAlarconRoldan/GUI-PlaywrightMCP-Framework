# Changelog

All notable changes to this project are documented here. Format based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), versioning follows [SemVer](https://semver.org/).

## [Unreleased]

### Added
- `CLAUDE.md` entry point so Claude Code loads the agent instructions automatically
- `.mcp.json` with the Playwright MCP server preconfigured
- Working `playwright.config.ts` (reads `base_url` from `application.yaml`, reuses saved auth state)
- Framework integrity tests (`npm run test:framework`) and GitHub Actions CI
- Issue/PR templates, Dependabot, CONTRIBUTING, SECURITY, CODE_OF_CONDUCT, MIT license
- `credentials.example.yaml`

### Changed
- `README` → `README.md`, rewritten with quick start and architecture diagram

### Security
- `credentials.yaml` and `playwright/auth/*.json` are no longer tracked

## [1.0.0] - 2026-10-20

### Added
- Initial template: prompts (exploratory, smoke, regression, change validation, report), knowledge base, config files and PDF generation.
