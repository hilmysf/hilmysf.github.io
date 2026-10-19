# Hilmy Saeful Fatah — Portfolio

Vue 3, TypeScript, and Vite portfolio. Source and deployment are maintained together in
https://github.com/hilmysf/hilmysf.github.io.

Live site: https://hilmysf.github.io/

## Local development

Use Node.js 22.

```sh
npm ci
npm run dev
```

## Build

```sh
npm run build
npm run preview
```

The build type-checks the source and writes static files to `dist/`. Generated files
are ignored by Git. Hash-based routing supports direct navigation on GitHub Pages.

## Automatic deployment

Push to `main` to run `.github/workflows/deploy-pages.yml`. GitHub Actions installs
locked dependencies, checks types, builds, and deploys the `dist/` artifact to Pages.
Failed builds do not deploy. Pull requests build without deploying. You can also
run the workflow manually from the Actions tab.

Pages must use **GitHub Actions** as its publishing source. The workflow uses the
repository's built-in token and OIDC; no personal access token or deploy key is needed.

```sh
git push origin main
```

The former `hilmysf-portofolio` repository is retained as historical source. New work
belongs in this repository. The old force-push deployment script is retired.
