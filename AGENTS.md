# Agent notes

## Base44 sandbox
- Run: `docker compose -f docker-compose.base44.yml up -d` (plain `node:22`, source bind-mounted, `node_modules` in a named volume, `npm install` on start — there is no lockfile, so `npm ci` isn't possible).
- Vite dev server listens on 8080 in the container, mapped to host port 3000.
- Sandbox override: `vite.config.ts` adds `server.allowedHosts: [".${BASE44_SANDBOX_HOST_DOMAIN}"]` only when `BASE44_PREVIEW_MODE === "1"`. Vite 5.4.12+ blocks unknown Host headers, and Vite 5 ignores `__VITE_ADDITIONAL_SERVER_ALLOWED_HOSTS` (that needs 6.1+). When the flag is missing, Vite keeps its default behavior.
- No backend, no env vars, no secrets.

## Verify
- `curl http://localhost:3000/` should return index.html with `/@vite/client` (that's the dev server, not a built bundle).
- The home page shows the "Vite Test App" card with a −/+ counter.
