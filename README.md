# Tolaria Docs

Standalone public documentation site for Tolaria, built with Astro and Starlight.

Production target:

```text
https://hhungxun.github.io/tolaria-docs/
```

## Local Development

```bash
pnpm install
pnpm dev --host 127.0.0.1 --port 4321
```

With the GitHub Pages base path configured, open:

```text
http://localhost:4321/tolaria-docs/
```

## Checks

```bash
pnpm check
pnpm build
pnpm preview --host 127.0.0.1 --port 4322
```

Preview URL:

```text
http://localhost:4322/tolaria-docs/
```

## Source Policy

The Tolaria app repository remains source material only. Curate public docs from:

- https://github.com/refactoringhq/tolaria
- https://github.com/refactoringhq/tolaria-getting-started
- https://tolaria.md/
- Public Loom walkthrough metadata and embeds.

Do not dump a vault into the site as generated documentation. Write pages as
public docs and keep `sourceRefs` in frontmatter.

## Upstream Proposal Workflow

Use this repo to draft and review docs changes. When a page becomes canonical,
propose matching changes upstream in the official Tolaria docs or README.
