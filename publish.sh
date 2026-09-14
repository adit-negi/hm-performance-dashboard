#!/bin/sh
set -eu

cd "$(dirname "$0")"
node --check app.js
node --check data.js
git diff --check
git add data.js index.html app.js styles.css sw.js publish.sh
if ! git diff --cached --quiet; then
  git commit -m "Update current training dashboard"
fi
git push origin main
