import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { imageSizeFromFile } from "image-size/fromFile";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..");

const IMAGE_EXT = new Set([".jpg", ".jpeg", ".png", ".webp"]);

const DEFAULT_SOURCES = [
  "C:\\Users\\jayab\\OneDrive\\Desktop\\photos_memories",
  "C:\\Users\\jayab\\OneDrive\\Desktop\\moments",
];

const publicDir = path.join(projectRoot, "public", "images");
const memoriesDir = path.join(publicDir, "memories");
const manifestPath = path.join(
  projectRoot,
  "src",
  "data",
  "memories-images.json",
);

function getSourceDirs() {
  const raw =
    process.env.PHOTOS_SOURCES ??
    process.env.PHOTOS_SOURCE ??
    DEFAULT_SOURCES.join(";");
  return raw
    .split(/[;,]/)
    .map((s) => s.trim())
    .filter(Boolean);
}

function isImageFile(name) {
  return IMAGE_EXT.has(path.extname(name).toLowerCase());
}

async function readDimensions(full) {
  try {
    const dim = await imageSizeFromFile(full);
    const width = dim.width ?? 0;
    const height = dim.height ?? 0;
    return { width, height, pixels: width * height };
  } catch {
    return { width: 0, height: 0, pixels: 0 };
  }
}

async function listImagesInDir(dir) {
  const entries = fs
    .readdirSync(dir, { withFileTypes: true })
    .filter((e) => e.isFile() && isImageFile(e.name));

  const images = [];
  for (const e of entries) {
    const full = path.join(dir, e.name);
    const stat = fs.statSync(full);
    const { width, height, pixels } = await readDimensions(full);
    images.push({
      name: e.name,
      full,
      size: stat.size,
      mtime: stat.mtimeMs,
      sourceDir: dir,
      width,
      height,
      pixels,
    });
  }
  return images;
}

async function collectImages(sourceDirs) {
  const all = [];
  const seen = new Set();

  for (const dir of sourceDirs) {
    if (!fs.existsSync(dir)) {
      console.warn(`Skipping missing folder: ${dir}`);
      continue;
    }
    for (const img of await listImagesInDir(dir)) {
      const key = `${img.name}|${img.size}`;
      if (seen.has(key)) continue;
      seen.add(key);
      all.push(img);
    }
  }

  return all.sort((a, b) => b.pixels - a.pixels || b.size - a.size);
}

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function copyFile(src, dest) {
  fs.copyFileSync(src, dest);
}

function extForDest(srcExt) {
  const lower = srcExt.toLowerCase();
  if (lower === ".jpeg" || lower === ".jpg") return ".jpg";
  return lower;
}

function pickHero(list) {
  if (process.env.HERO_FILE) {
    const named = list.find((i) => i.name === process.env.HERO_FILE);
    if (named) return named;
  }
  // Highest pixel count = sharpest when displayed at native size
  return [...list].sort((a, b) => b.pixels - a.pixels || b.size - a.size)[0];
}

function clearMemoriesDir() {
  if (!fs.existsSync(memoriesDir)) return;
  for (const file of fs.readdirSync(memoriesDir)) {
    const full = path.join(memoriesDir, file);
    if (fs.statSync(full).isFile()) fs.unlinkSync(full);
  }
}

async function main() {
  const sourceDirs = getSourceDirs();
  const images = await collectImages(sourceDirs);

  if (images.length === 0) {
    console.error("No images found in any source folder:", sourceDirs.join(", "));
    process.exit(1);
  }

  ensureDir(memoriesDir);
  clearMemoriesDir();

  const hero = pickHero(images);
  const heroDest = path.join(publicDir, "landing.jpg");
  copyFile(hero.full, heroDest);

  const heroDims = await readDimensions(heroDest);

  const gallerySources = images.filter((i) => i.full !== hero.full);
  const manifest = [];
  const sourcesByFolder = {};

  for (let i = 0; i < gallerySources.length; i++) {
    const src = gallerySources[i];
    const destName = `image${i + 1}${extForDest(path.extname(src.name))}`;
    const destPath = path.join(memoriesDir, destName);
    copyFile(src.full, destPath);
    manifest.push(destName);

    const folder = path.basename(src.sourceDir);
    sourcesByFolder[folder] = (sourcesByFolder[folder] ?? 0) + 1;
  }

  ensureDir(path.dirname(manifestPath));
  fs.writeFileSync(
    manifestPath,
    JSON.stringify(
      {
        hero: "/images/landing.jpg",
        heroSource: hero.name,
        heroFrom: path.basename(hero.sourceDir),
        heroWidth: heroDims.width || hero.width,
        heroHeight: heroDims.height || hero.height,
        heroPixels: heroDims.width * heroDims.height || hero.pixels,
        images: manifest.map((f) => `/images/memories/${f}`),
        syncedAt: new Date().toISOString(),
        sourceDirs,
        countByFolder: sourcesByFolder,
        totalImages: images.length,
      },
      null,
      2,
    ) + "\n",
  );

  console.log(
    JSON.stringify({
      sourceDirs,
      found: images.length,
      copied: images.length,
      hero: hero.name,
      heroFrom: path.basename(hero.sourceDir),
      heroResolution: `${heroDims.width || hero.width}x${heroDims.height || hero.height}`,
      gallery: manifest.length,
      countByFolder: sourcesByFolder,
      failed: [],
    }),
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
