# Amani Patrick — Portfolio

Personal portfolio site showcasing projects, expert advisors, and blog posts.

## Stack

- Vite
- React + TypeScript
- Tailwind CSS
- shadcn/ui
- React Router

## Local development

```sh
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run test` | Run tests |

## Blog posts

Posts live in `src/data/blogs.json`. In development, you can draft posts at `/blog/new`, save to localStorage, then export and copy into `blogs.json`.

## Deploy

Built for static hosting (e.g. Vercel). SPA rewrites are configured in `vercel.json`.
