---
name: add-route
description: Conventions for adding or modifying a page/route in this Next.js App Router storefront. Use this whenever adding a new page, screen, or URL to the app, creating a folder under app/, adding a link to the navbar, or changing how an existing route renders — even if the user just says "add a products detail page" or "make a checkout screen" without mentioning routing.
---

# Adding a route

Routes live in `app/<segment>/page.tsx`. The folder name is the URL. `app/layout.tsx` wraps every route and already renders `Navbar`, so a new page should render only its own content — never its own nav or `<html>`/`<body>`.

## Start on the server

Every page here is a server component unless something forces otherwise. Server components ship no JavaScript to the browser, so the page renders faster and the bundle stays small.

Add `"use client"` only when the file actually needs one of these:

- React state or effects (`useState`, `useEffect`)
- Browser-only APIs (`window`, `localStorage`)
- Event handlers on DOM elements (`onClick`, `onChange`, `onSubmit`)
- Client hooks like `useRouter` or `usePathname`

Navigation alone is not a reason. A button that just goes somewhere should be a `Link`, which works fine on the server:

```tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";

<Button asChild>
  <Link href="/products">Shop Now</Link>
</Button>
```

Reach for `useRouter` only when you navigate *after* something else happens — a successful form submit, for instance.

When a page is mostly static but has one interactive piece, keep the page a server component and push `"use client"` down into the small child component instead. That way only the interactive part costs bundle size.

## Give every route its own metadata

The root layout's `metadata` is a fallback, not a per-page title. Export metadata from each page so browser tabs and search results are meaningful:

```tsx
export const metadata = {
  title: "Products",
  description: "Handmade paintings, clay houses, knitwear and ornaments.",
};
```

This only works in server components. If a page genuinely must be a client component, move the content into a client child and keep the `page.tsx` itself on the server so it can still export metadata.

## Wire up the navigation, and verify the target exists

A link to a route that doesn't exist is a 404 users find before you do — this has already happened in this repo. When you add a link to `app/components/Navbar.tsx`, confirm there's a matching `app/<segment>/page.tsx`. When you add a page, add the link.

For a dynamic segment like `/products/[id]`, create `app/products/[id]/page.tsx` and read the param:

```tsx
export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  // ...
}
```

`params` is a Promise in Next.js 16 — awaiting it is required, not optional.

## Handle the states a route can be in

A route that only handles the happy path looks broken the moment anything is slow or missing. Colocate these next to `page.tsx` as needed:

- `loading.tsx` — shown while a server component awaits data
- `error.tsx` — catches render errors; must be a client component
- `not-found.tsx` — pairs with calling `notFound()` when a lookup misses

You don't need all three on every route. Add `loading.tsx` when the page fetches, and `not-found.tsx` when it looks something up by id.

## Don't ship an empty page

A route that renders an empty `<div>` is worse than no route: it's reachable, linked, and tells the user the app is broken. If you're scaffolding a page you'll fill in later, put a visible heading and a short line of placeholder text in it so the route reads as intentional.

## Testing a route

This repo is test-first — see the `test-driven-development` skill. One thing specific to routes: Vitest can't render `async` server components. Keep the `page.tsx` a thin shell that fetches and delegates, and put the markup in a component you can test directly.

## Before you finish

Run the `pre-commit-check` skill. Lint catches the client/server and image mistakes this skill describes, and it's faster than rereading the page.
