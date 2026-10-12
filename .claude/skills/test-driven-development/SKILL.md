---
name: test-driven-development
description: MANDATORY test-first workflow for this repo — write a failing test, watch it fail, then write the code that passes it. Use before writing or changing ANY component, page, utility, handler, or logic, without exception. Applies even to small edits, styling-adjacent components, and "this is too simple to test" changes. Also use when the user asks to add a feature, fix a bug, or says "add tests" — and when fixing a bug, reproduce it as a failing test first.
---

# Test-driven development

**Tests come first here. No exceptions.** Do not write implementation code before there is a failing test that demands it.

## Why the order matters

Writing the test afterwards feels equivalent but isn't. A test written after the code tends to assert what the code *does*, including its bugs, because you've already anchored on the implementation. A test written first has to describe what the feature is *supposed* to do, in terms of what a user can observe — and that's the thing worth locking in.

The failing run matters just as much. A test that has never failed hasn't been shown to be capable of failing. Plenty of tests pass because of a typo'd selector or a matcher that would accept anything.

## The loop

**1. Red — write the test, run it, watch it fail.**

```bash
npx vitest run app/components/ProductCard.test.tsx
```

Read the failure. It must fail for the reason you intended — "cannot find element with role button" is a real red. `ReferenceError: Foo is not defined` because you misspelled the import is not; fix that and get a real failure first.

**2. Green — write the simplest code that passes.**

Resist building beyond what the test asks for. If you want more behavior, that's the next test.

**3. Refactor — clean up with the test still green.**

Rerun after every change. This is the payoff: you can restructure freely because the test tells you the moment you break something.

Then repeat for the next piece of behavior.

## Fixing a bug

Reproduce it as a failing test before you touch the fix. If you can't write a test that fails, you don't yet understand the bug well enough to fix it — and you'd have no way to know it never comes back.

## Commands

```bash
npm test                          # whole suite, once
npm run test:watch                # reruns on save — use this while working
npx vitest run path/to/x.test.tsx # one file
npx vitest run -t "shows the price" # one test by name
```

## Where tests live

Colocated next to what they test: `ProductCard.tsx` and `ProductCard.test.tsx` in the same folder. A test that's easy to find next to the code is a test people actually update.

## What to assert — this is what keeps strict TDD survivable

Testing everything only works if the tests don't shatter every time you restyle something. The rule: **assert what a user can perceive, never how the markup is built.**

Query by accessible role and visible text, in this order of preference:

```tsx
screen.getByRole("button", { name: /add to cart/i })  // best
screen.getByLabelText("Email")                        // form fields
screen.getByText("$5")                                // visible content
screen.getByTestId("cart-total")                      // last resort only
```

Never assert on class names, wrapper `<div>` structure, or child ordering. Those are implementation details — changing `p-4` to `p-6` should not fail a test.

The bonus: `getByRole` and `getByLabelText` only find elements that are actually exposed to assistive technology. A button with no accessible name or an input with no associated label will fail these queries, so accessibility bugs surface as test failures for free.

```tsx
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import ProductCard from "@/app/components/ProductCard";

it("offers an add to cart action", () => {
  render(<ProductCard product={product} />);
  expect(screen.getByRole("button", { name: /add to the cart/i })).toBeInTheDocument();
});
```

## Testing interaction

Use `user-event`, not raw `fireEvent` — it simulates what a real user does (focus, keydown, keyup, click) rather than dispatching one synthetic event, so it catches bugs `fireEvent` walks past. It's async, so await it:

```tsx
import userEvent from "@testing-library/user-event";

it("adds the item to the cart when clicked", async () => {
  const user = userEvent.setup();
  render(<ProductCard product={product} />);

  await user.click(screen.getByRole("button", { name: /add to the cart/i }));

  expect(screen.getByText("1 item in cart")).toBeInTheDocument();
});
```

## The one real limitation: async server components

**Vitest cannot render `async` server components.** This is a known gap in the tooling, not something to work around with mocks — mocking your way around it produces a test that passes while the real page is broken.

What this means in practice:

- Synchronous server components and all client components — test normally.
- A page that's `async` because it awaits data or `params` — extract the logic and the presentational component, and test *those* directly. The async shell that only fetches and passes props down is the part left uncovered.
- Cover the async shells with end-to-end tests when Playwright gets added. Until then, say plainly that the shell is untested rather than implying coverage you don't have.

Keeping data-fetching shells thin is good practice anyway, and it's what makes this gap small.

## Before you finish

All tests green, then run the `pre-commit-check` skill. Report the actual result — if something is failing or skipped, say so.
