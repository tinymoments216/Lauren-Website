# Lauren Wiener — Resume Site

A beautiful, fast, single-page resume site for Lauren Wiener, built with Astro + Tailwind v4.

## Develop

```sh
npm install
npm run dev
```

Open http://localhost:4321

## Build

```sh
npm run build
```

Output goes to `dist/` and can be deployed to any static host (Netlify, Vercel, Cloudflare Pages, GitHub Pages, S3+CloudFront, etc.).

## Editing content

All content lives in `src/data/resume.ts`. Update the fields there to change what's shown on the site.

Add or edit featured videos in `src/data/videos.ts`. Each entry takes:

- `id` — YouTube or Vimeo video id
- `provider` — `"youtube"` or `"vimeo"`
- `title`
- `role` — Lauren's role on the video
- `brand` — Brand or publication
- `views` — Total view count (number)
- `url` — Full public URL to the video
- `thumbnail` — Optional override; otherwise auto-generated
- `year`
