# Prototype Instructions

Run the local server yourself and open the preview in the browser available to this environment. Do not give the user server-start instructions when you can run it.

Before making substantial visual changes, use the Product Design plugin's `get-context` skill when the visual source is unclear or no longer matches the current goal. When the user gives durable prototype-specific design feedback, preferences, or decisions, record them in `AGENTS.md`.

When implementing from a selected generated mock, treat that image as the source of truth for layout, component anatomy, density, spacing, color, typography, visible content, and hierarchy.

Build app UI in `src/`. Keep `.openai/hosting.json`, `worker/index.js`, `scripts/prepare-sites-build.mjs`, and `tests/sites-worker.test.mjs` intact so the same local prototype can be handed to Sites. Before a Sites handoff, run `npm run build` and `npm run test:sites`; the build must leave `dist/client/index.html`, `dist/server/index.js`, and `dist/.openai/hosting.json`.

## Chibook website direction

The user selected displayed option 2 on 2026-09-06: pale blue glass atmosphere, left-aligned serif Chinese headline, a reader with floating audio controls on the right. Source visual: /Users/mutse/.codex/generated_images/01a076ce-a350-76d2-88aa-90746a6b36fc/exec-9ae31c31-4bef-472d-8e87-a2516d3c470c.png. This is the Chibook product website, with an interactive demonstration, not a complete web reader. Keep the original mobile app at /Users/mutse/workspace/ai/chibook untouched. Do not imply store availability until real distribution URLs are configured.

## 2026-09-08 additions

Keep the selected visual direction. Include descriptive sections for WeRead account sign-in / bookshelf information sync and Z-Library ebook downloads followed by EPUB/PDF import. These are product descriptions, not website authentication or download integrations. Support Chinese/English switching across page content, controls, dialog, metadata and speech preview; persist only the language preference locally. The language switch must remain visible on mobile.

## Privacy and support pages

Use `/Users/mutse/workspace/ai/chibook-app/docs/app-store/privacy-policy.html` and `support.html` as the content references for dedicated bilingual privacy and support pages. Link both from the website footer and preserve the established visual direction. The user confirmed `young@mutse.top` as the support email; use it for support and privacy requests.

## 2026-10-02 download link

The user confirmed the iPhone / iPad App Store download URL: https://apps.apple.com/us/app/chibook/id6810264383. Use this link for the iOS download entry and keep Chinese/English availability descriptions consistent. Android remains coming soon.

## 2026-10-02 hidden integrations

The user requested hiding WeRead and Z-Library from the website. Do not render their descriptive section in either language or mention them in page metadata. This supersedes the earlier requirement to display these product descriptions.
