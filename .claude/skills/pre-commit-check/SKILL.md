---
name: pre-commit-check
description: Verification steps to run before committing or before claiming work is done in this Next.js repo — lint, build, and a short manual check for dead nav links and unhandled route states. Use whenever finishing a change, preparing a commit, or about to tell the user something is complete, working, or fixed. Also use when the user asks "is this ready", "can I commit this", or "did that work".
---

# Pre-commit check

Run these before saying a change is done. Most defects that have shipped in this repo — an `any` prop, a missing `alt`, an `<img>` where `next/image` belongs — were things `npm run lint` would have printed in under a minute. Reading the diff again is a weaker check than running the tools.

## 1. Tests

```bash
npm test
```

Every test must pass. A failing test is a blocker, not a note to add to the commit message.

If you changed behavior and a test now fails, work out which is wrong before editing either one. Sometimes the test is stale and should be updated; sometimes it's correctly reporting that you broke something. Deleting or skipping a test to get green is never the answer — that removes the signal instead of the defect.

If you added behavior without adding a test, go back to the `test-driven-development` skill. Tests are written first here.

## 2. Lint

```bash
npm run lint
```

Fix every **error** — errors fail the build and block CI.

Take **warnings** seriously rather than tuning them out. The two that recur here both cost real users something:

- `@next/next/no-img-element` — an unoptimized image, usually on the largest element on the page
- `jsx-a11y/alt-text` — an image no screen reader user can interpret

If you're leaving a warning in place, say so explicitly and why, rather than letting it pass unmentioned.

## 3. Build

```bash
npm run build
```

This is where type errors surface. `next dev` is forgiving in ways `next build` is not, so a page that renders fine in the browser can still fail here — most often from a client hook used in a server component, or a `params` object used without `await`.

## 4. Check what the tools can't

Three failure modes in this codebase are invisible to lint and build, because they're all valid code that's simply wrong:

- **Dead links.** For any `href` you added or changed, confirm a matching `app/<segment>/page.tsx` exists. Links to routes that were never created have shipped here before.
- **Placeholder pages.** A route rendering an empty element is reachable and linked, and reads to a user as a broken app.
- **CSS variable names.** A `var(--name)` typo fails silently — no error, the style just never applies. If you touched `app/globals.css` or a font/theme variable, confirm the name is actually defined and isn't referring to itself.

If the change is visual, look at it: `npm run dev` and open the affected route. Check it in dark mode too if you touched colors.

## 5. Report honestly

State what you ran and what it said. If lint is clean and the build passed, say so plainly. If something still fails or you skipped a step, say that instead of rounding up to "done" — an unflagged failure costs far more time later than an accurate report does now.

Quote the actual output when reporting a failure, rather than paraphrasing it.
