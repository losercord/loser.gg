# loser.gg

---

Source code for our bot's website, [loser.gg](https://loser.gg).

Built with [Next.js](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/), [TypeScript](https://www.typescriptlang.org/) & [Million](https://www.million.dev).

Using [Lanyard](https://lanyard.rest) for Discord Presence.

## Development

```bash
pnpm i && pnpm dev
```

## Build

```bash
pnpm i && pnpm build
```

## Deploy

Deployment is done via [Cloudflare Pages](https://pages.cloudflare.com/), using [next-on-pages](https://github.com/cloudflare/next-on-pages).

Cache is cleared via a [Workflow](.github/workflows/cf-pages-await.yml) that runs on every push.
