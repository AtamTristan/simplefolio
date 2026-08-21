# Vite migration

## v1.2.0

- Replaced Parcel 2 and `@parcel/transformer-sass` with Vite 8.
- Added Dart Sass as the explicit SCSS compiler.
- Updated Prettier to the current 3.x release.
- Configured Vite as a multi-page app for `index.html`, `imprint.html`, and `privacy.html` while keeping `src/` as the project root.
- Updated Netlify to Node 22.
- Removed Parcel cache configuration and old build dependencies.
- Converted large portfolio images to optimized WebP assets and removed unused template media.
