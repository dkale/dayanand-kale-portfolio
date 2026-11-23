## Project rules
- All portfolio content lives in `src/data/portfolio.ts`; sections in `src/components/sections/*` only render it — keeps edits in one place.
- Contact form validates in the browser and submits directly to Web3Forms. Configure `VITE_WEB3FORMS_ACCESS_KEY` at build time; it is public in the deployed client bundle, and without it the form reports "not set up" and never claims success.
- Theme is set before paint by `themeInitScript` in `__root.tsx` head and toggled via the `.dark` class — avoids a flash of the wrong theme.
