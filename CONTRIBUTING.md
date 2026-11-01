# Contributing

Thanks for wanting to improve the QA Agent Template! Contributions in English or Spanish are welcome.

## Good first contributions

- A new prompt in `prompts/` (accessibility audit, visual diff, API smoke…)
- Better report templates in `reports/templates/`
- Docs: guides for adapting the framework to a specific kind of app
- Real-world examples (with all private data removed)

## Workflow

1. Fork the repo and create a branch: `git checkout -b feat/a11y-prompt`
2. `npm ci`
3. Make your change
4. `npm run typecheck && npm run test:framework`
5. Open a PR using the template

## Commit messages

We follow [Conventional Commits](https://www.conventionalcommits.org/):

```
feat(prompts): add accessibility audit prompt
fix(report): keep screenshots in PDF output
docs: add Spanish quick start
```

## Rules

- **Never commit credentials, `playwright/auth/*.json` or private URLs.**
- Keep prompts short and explicit — every extra line costs tokens on every run.
- If you add a file the agent must read, list it in `CLAUDE_CONTEXT.md`.

By participating you agree to the [Code of Conduct](CODE_OF_CONDUCT.md).
