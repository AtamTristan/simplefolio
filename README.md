# Tristan Wesendahl Velázquez — Portfolio

Small static portfolio built with Parcel and SCSS.

## Local development

```bash
npm install
npm start
```

Parcel prints the local development URL in the terminal.

## Production build

```bash
npm run build
```

The deployable site is generated in `dist/`.

## Netlify

`netlify.toml` is included. For a Git-connected Netlify site the expected settings are:

- Build command: `npm run build`
- Publish directory: `dist`
- Node: 18

After pushing the updated repository, Netlify can deploy the new version automatically if the site is already connected to that repository.

## Before making the portfolio public

Replace the remaining intentional placeholders:

1. `src/assets/profile_example.jpg` with the real portrait.
2. The three project placeholder screenshots in `src/assets/project1.png`, `project2.png`, `project3.png`.
3. Add a real contact email and/or LinkedIn URL in `src/index.html`.
4. Add public project links when repositories or demos are ready.
5. Optionally connect a custom domain in Netlify after the content is final.
