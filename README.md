# Dark Articles

A static archive for long-form essays. No CMS, no database, no client-side
JavaScript, no third-party requests.

## Writing

Add a Markdown file to `src/content/essays/`. The filename becomes the URL:
`the-gap.md` → `/the-gap`.

```yaml
---
title: 'The Gap'
description: 'One sentence, at most 200 characters. Used on the index and in link previews.'
pubDate: 2026-10-19
updatedDate: 2026-11-02   # optional
draft: true               # optional; drafts never reach the build
---
```

Then write. `---` on its own line becomes a section mark (⁂). Footnotes work out
of the box, because Astro's Markdown processor includes GFM:

```md
A claim that needs a source.[^1]

[^1]: The source.
```

## Commands

| Command           | Does                                        |
| ----------------- | ------------------------------------------- |
| `npm install`     | Install Astro                               |
| `npm run dev`     | Local server at `http://localhost:4321`     |
| `npm run build`   | Static output in `dist/`                    |
| `npm run preview` | Serve the built output                      |

## Deploying

Vercel, framework preset **Astro**, build `npm run build`, output `dist`.

Set `SITE_URL` in the Vercel project's environment variables to the production
origin (`https://example.com`, no trailing slash). Canonical and Open Graph
URLs are derived from it; without it the build falls back to
`https://archive.local`, which is fine locally and wrong in public.

## Files worth knowing

- `src/lib/site.ts` — the site's name and footer line.
- `src/styles/tokens.css` — palette, measure, type sizes. Both themes live here.
- `src/styles/prose.css` — the essay body and its print rules.
- `src/content.config.ts` — frontmatter schema. Required: `title`,
  `description`, `pubDate`.
