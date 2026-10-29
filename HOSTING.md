# CapitalworkCreations — Hosting Guide

This is a **TanStack Start (SSR)** application built with Vite + Nitro. It needs a Node.js runtime to render pages on the server.

## What's in this archive
- `dist/` — the production build (client + server bundles)
- `dist/server/index.mjs` — the Node server entry
- `dist/client/` — static client assets
- `src/` + project files — full source code (for re-builds / edits)

## Option A — Node.js hosting (recommended)
Works on: VPS, DigitalOcean, Railway, Render, Hetzner, Heroku, cPanel "Node.js App", etc.

1. Upload the `dist/` folder to your server.
2. Install Node.js 20+ on the server.
3. Start the server:
   ```bash
   node dist/server/index.mjs
   ```
4. It listens on `process.env.PORT` (default 3000). Point your domain / reverse proxy (Nginx, Apache, cPanel) to that port.

### cPanel quick path
- cPanel → **Setup Node.js App**
- Node version: 20.x
- Application root: folder where you uploaded `dist`
- Application startup file: `server/index.mjs`
- Click **Run NPM Install** (none needed — bundle is standalone)
- Click **Start**

## Option B — Cloudflare Pages / Workers
The build already produced a `wrangler.json`. Deploy with:
```bash
npx wrangler deploy
```

## Option C — Rebuild from source
```bash
bun install        # or npm install
bun run build      # produces dist/
bun run start      # or: node dist/server/index.mjs
```

## Environment
No environment variables required. Calendly, WhatsApp, phone, and email are hard-coded to:
- Email: capitalwork96@gmail.com
- Phone / WhatsApp: +254 117 222 345
- Calendly: https://calendly.com/capitalwork96/30min

## Support
Need help deploying? capitalwork96@gmail.com
