# Performance Lab

This is Adit's dependency-free, installable endurance and strength coaching app.

## Production app

The persistent public app is deployed through GitHub Pages:

<https://adit-negi.github.io/hm-performance-dashboard/>

Source repository:

<https://github.com/adit-negi/hm-performance-dashboard>

On iPhone, open the production URL in Safari, then use **Share → Add to Home Screen**. The service worker keeps the most recently loaded version available offline.

## Open it

From this directory, run:

```bash
python3 -m http.server 8765 --bind 0.0.0.0
```

Then open <http://localhost:8765>.

On a phone connected to the same Wi-Fi as this Mac, open the Mac's local-network address on port 8765. The current address is shown when the dashboard server is started. The Mac must remain awake and connected to that network.

The site includes a web-app manifest and offline cache. On iPhone, use Safari's **Share → Add to Home Screen** after opening the dashboard. A plain local-network HTTP address can be bookmarked, although full install/offline behavior may depend on the browser's secure-context requirements.

The default host is private to the local network. Public exposure requires the athlete's explicit authorization because the dashboard includes health and training information.

## Updating the plan

The interface reads its structured content from `data.js`. Coaching updates should update both `HM_CONTEXT.md` and this file so the dashboard remains the visual source of truth. Workout completion toggles are stored only in the browser's local storage.

After validating a change, publish it with:

```bash
git add .
git commit -m "Update training plan"
git push origin main
```

GitHub Pages deploys `main` automatically. No tunnel or always-on local process is required.

Garmin data is intentionally not fetched directly from the browser because account credentials must never be exposed client-side. Recovery values are added after the read-only Garmin coaching connector has been reviewed.
