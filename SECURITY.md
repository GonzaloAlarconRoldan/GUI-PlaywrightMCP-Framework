# Security Policy

## Reporting a vulnerability

Please **do not** open a public issue. Use [GitHub private vulnerability reporting](https://github.com/GonzaloAlarconRoldan/GUI-PlaywrightMCP-Framework/security/advisories/new) instead. You will get a response within 7 days.

## Handling credentials

This framework drives a real browser with real test accounts. Keep it safe:

- `project_config/credentials.yaml` and `playwright/auth/*.json` are git-ignored — keep them that way.
- Use dedicated test users with minimum permissions, never personal or production admin accounts.
- Generated reports and screenshots can contain sensitive data; review them before sharing.
- If a credential is ever committed, **rotate it immediately** — removing it from a later commit does not remove it from history.
