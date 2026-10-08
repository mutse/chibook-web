# Chibook website

Responsive Chibook product website, implemented from the selected pale-blue visual concept using React and Vite.

## Local development

```sh
npm install
npm run dev -- --host 0.0.0.0 --port 5173
```

## Build

```sh
npm run build
```

The retained Product Design starter emits `dist/client` static assets and its Sites-compatible worker. No publishing has been performed.

## Product behavior

- Responsive desktop/mobile navigation and in-page links.
- Reader demonstration with reading/listening tabs, font size, contents and temporary bookmark state.
- Original demonstration text with browser speech synthesis, restart and rate changes. Audio availability and voice depend on browser/device; it is not connected to Chibook's cloud TTS service.
- Accessible native download dialog, focus return and keyboard dismissal.
- Download status: iPhone / iPad is live on the App Store at https://apps.apple.com/us/app/chibook/id6810264383; Android remains coming soon. The download dialog and FAQ link directly to the App Store entry.
- SEO/traffic: canonical URL, Open Graph/Twitter Cards, iOS Smart App Banner (`apple-itunes-app`), SoftwareApplication + FAQPage JSON-LD, and `public/llms.txt`.
- No backend, analytics, uploads, external AI calls or persistent user data.

## Assets

- `public/assets/logo.png`: original supplied Chibook brand logo.
- `public/assets/hero-glass.png`: built-in ImageGen; pale blue glass book at lower right, icy light ribbons, text-free background based on selected mock.
- `public/assets/book-cover.png`: built-in ImageGen; original cobalt mountain book cover, 山间来信 / CHIBOOK.
- Icons: Feather React. Display font: Noto Serif SC from Google Fonts with local Chinese serif fallbacks.

## September 8 update

Added bilingual descriptions for WeRead sign-in / bookshelf information sync and Z-Library ebook downloads. These sections describe the app; this website does not authenticate with or download from these services. The header language switch translates content, controls, download dialog, speech sample and document metadata without reloading. The language preference is stored locally, and changing language stops/reset the active speech preview.
