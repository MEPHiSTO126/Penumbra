import { defineConfig } from 'astro/config';

// `SITE_URL` is set once in Vercel (Project → Settings → Environment Variables).
// Locally it falls back to a non-resolvable host, which is fine: nothing is
// published until a real domain is configured.
export default defineConfig({
  site: process.env.SITE_URL ?? 'https://archive.local',
  markdown: {
    // Astro 7 renders Markdown with Sätteri, which includes GFM (tables,
    // footnotes, autolinks) by default. No remark plugin needed.
    // Essays do not contain code samples; skipping Shiki keeps the build
    // dependency-free and the HTML smaller.
    syntaxHighlight: false,
  },
});
