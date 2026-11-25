# Kolawole Emmanuel’s portfolio

A résumé-style portfolio built with Next.js, TypeScript, and Tailwind CSS.

## Development

```sh
npm install
npm run dev
```

Open http://localhost:3000. The homepage is `src/app/page.tsx`; the previous Vite entry point `src/main.jsx` has been replaced by the Next.js App Router.

## Checks and production

```sh
npm run lint
npx tsc --noEmit
npm run build
```

The build exports a static website to `out/`, matching `.openai/hosting.json`. Serve that directory using a static host. `npm run dev` is the local preview command.

## Content

Edit the files in `src/data/` to update contact details, projects, skills, experience, education, and certifications. Experience bullet points intentionally remain empty pending the original CV. Confirm the production URL in `src/data/site.ts` before publishing; it is used for search and social metadata.

The **Print / Save CV** button opens the browser print dialog. Choose **Save as PDF** to download a copy. A source CV PDF is not currently included.

Project preview screenshots are stored in `public/projects/` and linked through the `image` and `imageAlt` fields in `src/data/projects.ts`. Replace an image file or update those fields to change a preview. The six screenshots were captured from the listed project URLs on November 7, 2026; the Prosumate app preview shows its public sign-in page. Missing images fall back to the project's initials.

The web development portfolio is at `/` and the digital marketing portfolio is at `/digital-marketing`. Both use `src/components/ResumePage.tsx`. Edit `src/data/marketing.ts` for marketing-specific content; its downloadable CV is in `public/resume/`.
