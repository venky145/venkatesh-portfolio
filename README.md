# Venkatesh Mandapati

Personal portfolio. Static site built with Astro.

Node.js 22.12 or newer is required.

```sh
npm install
npm run dev
```

## Where to edit

- `src/data/site.ts` — links and email
- `src/data/experience.ts` — timeline
- `src/data/engineering.ts` — practice areas
- `src/data/about.ts` — about copy
- `src/content/projects/` — one Markdown file per project

Set `caseStudy: true` on a project when its write-up is ready. That publishes `/work/[slug]`.

Professional projects stay off the production homepage until a file exists. The experience and contact sections do the same until their data is filled in.
