# Simplefolio Portfolio

Personal software engineering portfolio of Tristan Wesendahl Velázquez.

## Stack

- Vite 8
- Vanilla JavaScript
- SCSS / Dart Sass
- Multi-page static build (`index`, `imprint`, `privacy`)
- Netlify deployment

## Requirements

- Node.js 20.19+ (Node 22 recommended; see `.nvmrc`)

## Development

```bash
npm install
npm run dev
```

Vite serves the site at the URL printed in the terminal, normally `http://localhost:5173`.

## Production build

```bash
npm run build
npm run preview
```

The production output is written to `dist/`.

## Quality checks

```bash
npm run format:check
npm run audit
npm run audit:prod
```

## Deployment

`netlify.toml` is configured to run `npm run build` and publish `dist/` with Node 22.

## Legal / privacy

See `LEGAL_PRIVACY_NOTES.md`. The current site intentionally contains no analytics or marketing trackers and therefore does not include a decorative cookie-consent banner. Fill the deployment placeholders in the imprint/privacy pages with the required real operator details before publishing the legal pages as final.
