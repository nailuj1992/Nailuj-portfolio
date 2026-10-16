# AGENTS.md

Spec for agents/LLMs working on this repo. Read before proposing changes.

## Project identity

Nailuj portfolio: personal, bilingual (EN/ES) single-page portfolio of Julián González Prieto, deployed on Vercel at https://nailuj-portfolio.vercel.app/. Angular 20 with SSR + build-time prerendering. There is no backend and no database: all content lives in the source.

## Git workflow — mandatory

- **NEVER push directly to `master`.** Not even a one-line fix, a copy tweak or a revert. `master` is what Vercel deploys to production.
- **Every change goes on its own branch cut from `master`** (`git checkout master && git pull && git checkout -b <type>/<short-description>`), with `<type>` one of `feature/`, `fix/`, `chore/`, `docs/`, `refactor/`. Push that branch and integrate into `master` through a pull request (history is a series of merged PRs).
- Never force-push a shared branch, never rewrite pushed history, never bypass hooks (`--no-verify`).
- Commit only what you were asked to commit: check `git status` first and keep stray local files (`dist/`, `.angular/`, `.vercel/`, logs) out. Commit messages are written in English: a short imperative subject, then a body explaining the *why* for non-trivial changes.

## Stack

- **Angular 20.3** with **standalone components** — no `NgModule`s in new code. Bootstrapped with `bootstrapApplication` (`src/main.ts`, `src/main.server.ts`).
- **TypeScript 5.8**, strict mode (`strict`, `strictTemplates`, `noImplicitReturns`, `noPropertyAccessFromIndexSignature`). Single quotes in `.ts` and 2-space indent (`.editorconfig`).
- **SSR + prerender** through `@angular/ssr` (`angular.json` → `prerender: true`, `ssr.entry: server.ts`) with client hydration (`provideClientHydration`).
- **Angular Material 20** (theme in `src/custom-theme.scss`), **Font Awesome 6** (`@fortawesome/angular-fontawesome`: every icon is an `<fa-icon [icon]="faXxx">` with the icon imported from `free-solid-svg-icons` / `free-brands-svg-icons` in the component; there is no Font Awesome CSS or CDN, so don't add `fa fa-*` classes), plain per-component CSS. Icon-only links need an `aria-label`.
- **Vercel Analytics + Speed Insights** (injected in `AppComponent`).
- **pnpm — not npm, not yarn.** Lockfile is `pnpm-lock.yaml`, `pnpm-workspace.yaml` sets `nodeLinker: hoisted` and `autoInstallPeers: true` (pnpm 11 ignores these in `.npmrc`, which this repo no longer has). Always `pnpm install` / `pnpm add` / `pnpm run <script>`.
- Node **24.x** (`engines` in `package.json`).

## Hard constraints — do not violate

- **pnpm only.** Do not generate or commit a `package-lock.json` or `yarn.lock` (`package-lock.json` is git-ignored).
- **Keep `nodeLinker: hoisted` in `pnpm-workspace.yaml`.** pnpm 11 reads its settings from there and ignores `node-linker` in `.npmrc`; without it Angular Material SCSS fails with `The "path" argument must be of type string` (`@use '@material/typography'`). Test any change to it with a clean `pnpm install` + `pnpm build`.
- **Code that runs during SSR/prerender must not touch browser globals unguarded.** `window`, `document`, `localStorage`, `sessionStorage` do not exist on the server. Inject `DOCUMENT` and use `document.defaultView?.…` (see `LanguageService`, `AppComponent`), or guard with `isPlatformBrowser`. A crash here breaks `ng build` (prerender) and therefore the deploy.
- **Keep the host-header validation in `server.ts`** (`sanitizeHeaders`, `ALLOWED_HOSTS`) and the URL sanitizer in `server.js`: they are security fixes for SSR/SSRF advisories. If a new production domain is added, set `ALLOWED_HOST` rather than weakening the check.
- **Don't bump Angular major/minor versions piecemeal.** `@angular/*`, `@angular/build` (the esbuild builder, replaces `@angular-devkit/build-angular`), `@angular/ssr` and `@fortawesome/angular-fontawesome` move together (major N of one needs major N of the others), otherwise the build breaks.

## Project structure

```
src/
  app/
    components/      — page sections, one folder each: home (hosts all the others), about, portfolio, experience, studies, contact
    elements/        — reusable UI pieces: menu (nav + language toggle), footer, image-slider, scroll-to-top, separator
    services/        — language.service.ts (i18n: signal-based, SSR-safe)
    model/dto/       — language.ts (translation dictionary), slide.ts (slide / project types)
    app.config.ts    — client providers (router, hydration, async animations, HttpClient)
    app.config.server.ts — adds server rendering
    app.routes.ts    — single route: '' → HomeComponent
  environments/      — environment.ts (links, contact data), variables.ts (production) / variables.development.ts (dev, swapped by fileReplacements)
  assets/img/        — photos and project screenshots (one subfolder per project); the World of Warcraft addons use `fps-latency-meter/`, `dead-ui/` and `tacotip-mop/` (the screenshots of each addon README, in README order; the repeated "Addon out of date" tip image is left out on purpose)
  assets/svg/        — technology/flag/contact icons, named after the technology key
server.ts            — Express SSR server (Vercel / `serve:ssr`)
server.js            — plain Express static server behind `pnpm start` / `pnpm preview`
```

TypeScript path aliases (`tsconfig.json`) are used for imports: `@components/*`, `@elements/*`, `@services/*`, `@model/*`, `@environments/*`, plus `@app.component`, `@app.config`, `@app.routes`. Prefer them over long relative paths.

## Architecture notes

- **One page, one route.** `HomeComponent` stacks every section; the menu navigates with in-page anchors (`href="#about"`), not router links. A new section = a new component under `components/`, added to `home.component.html`, plus a menu entry in `menu.component.html` and its title key in the dictionary.
- **Content is data, not markup.** Jobs (`ExperienceComponent.slides`), projects (`PortfolioComponent.slidesOthers`, screenshot arrays) and URLs (`environment.ts`) are plain TS data; templates only render them. To add a job or project, edit the data and the dictionary, not the HTML.
- **World of Warcraft addons** (FpsLatencyMeter, DeadUI, TacoTip-for-MoP) are featured cards under the "World of Warcraft addons" subsection of `PortfolioComponent`: screenshot arrays (`slidesFpsLatencyMeter`, `slidesDeadUi`, `slidesTacoTipMop`), texts `title-*` / `description-*` in the dictionary, and two buttons each (GitHub `repo*Url` and CurseForge `curseForge*Url`, both in `environment.ts`). To add another addon, follow the same pattern and add its images under `assets/img/<name>/`. The `lua` technology icon (`assets/svg/lua.svg`) is a simple neutral badge, not the official Lua logo.
- **Technology icons by naming convention.** A technology is referenced by key (`"angular"`, `"springboot"`, …) and rendered from `assets/svg/<key>.svg`. A new technology needs the SVG file with exactly that name; a missing file shows a broken image.
- **Slide navigation is shared.** `elements/slide-navigation.ts` (`SlideNavigation`: `next` / `previous` / `jumpToSlide` with the `hidden` + `setTimeout` fade) is the base class of `ExperienceComponent`, `PortfolioComponent` and `ImageSliderComponent`. A component that needs a slider extends it and provides `animationSpeed` and `slideCount`; don't copy the logic again.

## Internationalization (i18n)

- Every user-facing string goes through the dictionary in `src/app/model/dto/language.ts`: `mapPhrases.set("key", new PhraseDto("English", "Español"))`, read in components with `LanguageService.getText("key")`. **Never hard-code visible text in a template** (proper names and place names such as company names and "Bogotá D.C" are the exception).
- **Always provide both languages** for a new key, with the same meaning. **Spanish text uses correct orthography** (accents and ñ).
- Language lives in a signal in `LanguageService`, mirrored in `sessionStorage` under `lang` (`enUS` / `esES`). Default comes from `environment.variables.defaultLang`: **English in production, Spanish in development** (`angular.json` development `fileReplacements`). Don't assume one default when testing.
- `LanguageService` is SSR-safe: without `sessionStorage` (server, blocked storage) it keeps the language in memory and falls back to the default, so prerendered HTML always contains text. Templates call `getText()` on every change-detection pass; it reads the signal, so switching language updates the whole page. It also keeps `<html lang>` in sync (`en` / `es`).

## Components & code conventions

- New components: `standalone: true`, `templateUrl` + `styleUrl` in their own folder (`name.component.ts/.html/.css/.spec.ts`), selector prefix `app-`, class `NameComponent`. Match the existing files: components expose `env = environment` and a `getText(id)` wrapper when the template needs them.
- Inject dependencies with `inject()` (field initializers), not constructor parameters (`@angular-eslint/prefer-inject`). Don't mix styles inside one class.
- Reusable pieces go in `elements/`, page sections in `components/`.
- Styling is per-component CSS plus global `src/styles.css` and the Material theme in `src/custom-theme.scss`. Don't introduce another UI/CSS framework.
- Images: use web formats and no spaces in file names. Everything under `src/assets` is copied to the deployed site, so design sources (`.psd`, etc.) live in `design/`, outside the build.
- Don't commit secrets. The phone numbers, email and links in `environment.ts` are intentionally public contact data; nothing else sensitive should be added there.

## Testing

- Tests are Karma + Jasmine (`pnpm test`), specs next to each component (`*.spec.ts`). Every component, the language service and the slide navigation have real assertions: rendering in both languages, links taken from `environment.ts`, slider wrap-around, and data integrity (every dictionary key used by the experience/projects data exists in English and Spanish, every technology icon and screenshot referenced exists under `assets/`, checked with `fetch` against Karma's server). When you change a component, update its spec; don't make specs pass by deleting assertions. On a machine without Chrome, point `CHROME_BIN` at Edge (`msedge.exe`) and run `pnpm test --watch=false --browsers=ChromeHeadless`.
- **CI** (`.github/workflows/ci.yml`) runs on every PR and on pushes to `master`: `pnpm lint`, `pnpm test:ci` (headless Chrome through the `ChromeHeadlessCI` launcher in `karma.conf.js`, which adds `--no-sandbox`) and `pnpm build` (production, with prerender, like Vercel), plus a non-blocking `pnpm audit --prod`. Keep all three green. Run the same three commands locally before opening a PR, since SSR-only errors do not show up in `pnpm dev`. Actions are pinned to a **full commit SHA** with the version in a trailing comment; when bumping one, look up the new SHA (`gh api repos/<owner>/<repo>/commits/<tag> --jq .sha`).

## Build & run

```bash
pnpm install
pnpm dev            # ng serve --open, http://localhost:4200 (development config: Spanish by default)
pnpm build          # production build: browser + server bundles + prerendered routes in dist/nailuj-portfolio
pnpm preview        # ng build, then serve dist/…/browser with server.js on http://localhost:8080
pnpm test           # Karma + Jasmine
pnpm test:ci        # single headless run (CI); set CHROME_BIN to Edge/Chrome if needed
pnpm lint           # ESLint (angular-eslint, flat config in eslint.config.js): TypeScript + templates, incl. accessibility rules
```

- `pnpm start` runs `node server.js` and requires a previous build.
- `pnpm serve:ssr` runs the SSR server from the build output (`dist/nailuj-portfolio/server/server.mjs`, port 4000). `server.ts` only starts listening when it is the entry point (`isMainModule`) and passes `ALLOWED_HOSTS` to `CommonEngine` as `allowedHosts`; without it Angular falls back to client-side rendering.
- `dist/` and `.angular/cache` are build output: never edit or commit them.

## Deployment (Vercel)

`vercel.json` runs `rm -rf node_modules && pnpm install` and `ng build`; Vercel serves the prerendered output. Merging to `master` deploys. If `ng build` passes locally with the production configuration, it should pass on Vercel — but a dependency change must be tested with a clean `pnpm install` (the hoisted linker and `pnpm-workspace.yaml` `allowBuilds` list matter there). When adding a dependency that has a build script, decide `true`/`false` for it in `allowBuilds` instead of approving everything.

## Known issues (don't "discover" them again, and don't hide them)

- `pnpm audit` reports one dev-only finding (`braces`, through karma) with no patched release published yet.

If you fix one of these, remove it from this list in the same change.

## Rules for new code

1. **Branch first.** Follow the *Git workflow* section: work on a branch cut from `master`, never push to `master`.
2. **Match the existing shape**: new section → `components/<name>/` with all four files, wired into `HomeComponent` and the menu; new reusable piece → `elements/<name>/`.
3. **All visible text through the dictionary**, in English and Spanish (see *Internationalization*).
4. **SSR-safe by default**: no unguarded browser globals; confirm with `pnpm build`.
5. **Don't add dependencies lightly.** This is a static portfolio; prefer what's already installed. If one is needed, use `pnpm add`, and keep it in the right section (`devDependencies` for tooling).
6. **Keep contact info and links in `environment.ts`**, not scattered in templates.
7. **Update this file** and `README.md` when you change a convention, add a section/route or hit a gotcha the hard way.
8. **Angular upgrades go one major at a time** (`@angular/core` 20 → 21 → …): bump, `pnpm install`, `pnpm build` and `pnpm test`, commit, repeat. Known traps from the 17 → 20 upgrade: `main.server.ts` must forward the `BootstrapContext` to `bootstrapApplication` (otherwise route extraction fails with "document is not defined"), `CommonEngine` lives in `@angular/ssr/node`, and Material's M2 theming functions are prefixed `m2-` in `custom-theme.scss`.
