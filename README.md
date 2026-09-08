# Half-marathon training dashboard

This is a dependency-free local website for the San Jose half-marathon block.

## Open it

From this directory, run:

```bash
python3 -m http.server 8765 --bind 0.0.0.0
```

Then open <http://localhost:8765>.

On a phone connected to the same Wi-Fi as this Mac, open the Mac's local-network address on port 8765. The current address is shown when the dashboard server is started. The Mac must remain awake and connected to that network.

The site includes a web-app manifest and offline cache. On iPhone, use Safari's **Share → Add to Home Screen** after opening the dashboard. A plain local-network HTTP address can be bookmarked, although full install/offline behavior may depend on the browser's secure-context requirements.

The default host is private to the local network. Public exposure requires the athlete's explicit authorization because the dashboard includes health and training information.

## Current public tunnel

The athlete explicitly authorized public, unpassworded access on August 30, 2026. The current Cloudflare quick-tunnel URL is:

<https://significant-other-left-reserve.trycloudflare.com>

The URL remains available only while the local Python server and `cloudflared` process are running. Quick-tunnel hostnames are temporary and change after a tunnel restart. Cloudflare documents quick tunnels as development/testing infrastructure rather than production hosting.

## Updating the plan

The interface reads its structured content from `data.js`. Coaching updates should update both `HM_CONTEXT.md` and this file so the dashboard remains the visual source of truth. Workout completion toggles are stored only in the browser's local storage.

Garmin data is intentionally not fetched directly from the browser because account credentials must never be exposed client-side. Recovery values are added after the read-only Garmin coaching connector has been reviewed.
