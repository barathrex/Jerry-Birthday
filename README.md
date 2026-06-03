# Happy Birthday Jerry — Birthday Surprise Website

A heartfelt, cinematic birthday surprise built with Next.js, TypeScript, Tailwind CSS, Framer Motion, and React Confetti.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

**Password:** `JERRY` (case-insensitive)

## Photos (OneDrive sync)

Images are merged from both folders:

- `C:\Users\jayab\OneDrive\Desktop\photos_memories`
- `C:\Users\jayab\OneDrive\Desktop\moments`

Override with `PHOTOS_SOURCES` (semicolon-separated paths on Windows).

```bash
npm run sync-memories
```

- Largest image → `public/images/landing.jpg` (landing hero)
- Remaining images → `public/images/memories/image1.jpg`, `image2.jpg`, …
- Regenerates `src/data/memories-images.json` for the gallery
- `prebuild` runs sync automatically before `npm run build`

Supported: `.jpg`, `.jpeg`, `.png`, `.webp` (videos in the folder are skipped).

**Background music:** `public/music/birthday.mp3` — [Party Like It's Your Birthday](https://mixkit.co/free-stock-music/tag/birthday/) by Mixkit (free for personal/commercial use, no attribution required). Replace the file anytime to use your own track.

## Deploy to Vercel

1. Push this repo to GitHub
2. Import the project at [vercel.com/new](https://vercel.com/new)
3. Deploy — no extra configuration required

```bash
npm run build
npm start
```

## Project Structure

```
src/
  app/              # Routes: / and /memories
  components/
    landing/        # Hero, password gate, balloons, music
    memories/       # Story sections, gallery, timeline, final surprise
    ui/             # GlassCard, SectionReveal, particles
  lib/constants.ts  # Copy text, password, image paths
public/
  images/
  music/
```

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS v4
- Framer Motion
- Lucide React
- react-confetti
