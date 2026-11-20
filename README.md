# tw-app

Personal portfolio for Teodor Wegestål, built with React, TypeScript, Vite and Mantine.

## Getting started

```bash
npm install
npm run dev
```

## Scripts

| Command           | Description                         |
| ----------------- | ----------------------------------- |
| `npm run dev`     | Start the dev server                |
| `npm run build`   | Type-check and build for production |
| `npm run preview` | Preview the production build        |
| `npm run lint`    | Lint the project                    |
| `npm run format`  | Format the project with Prettier    |

## Deployment

Set `VITE_SITE_URL` in `.env` to the public URL of the site (without a trailing slash), so link previews on LinkedIn and other platforms can resolve the share image.

## Structure

```
src/
  content/     Profile, experience, projects and tech stack data
  components/  Reusable UI components
  sections/    Page sections composed from components
  hooks/       Custom React hooks
```

Experience, projects and technologies are edited in `src/content/`.
