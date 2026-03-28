# Strategic Life Intelligence Dashboard

A static GitHub Pages friendly prototype built with plain HTML, CSS, and JavaScript.

## What it does

- Runs as a private command-center dashboard for long-horizon life strategy.
- Uses editable local settings for income, savings, family planning, and weighted priorities.
- Produces recommendations across day/week/month/year/5-year/10-year horizons.
- Includes stronger scoring for:
  - wealth compounding
  - household resilience
  - family readiness
  - career leverage
  - weekend protection
- Includes a richer location model anchored on Belgium, France, US + 2 optional comparison countries.
- Includes dedicated modules for:
  - Family Readiness
  - Career / Consultancy Watch
  - Opportunity Radar
  - Location & Stability comparison
- Shows "what changed" and "why now" logic in the command center.
- Stores state locally with import/export JSON support and save timestamp visibility.
- Includes live client-side signal loading for:
  - Open-Meteo weather
  - NASA EONET natural events
  - Hacker News top stories
  - ReliefWeb jobs API
  - Arbeitnow jobs API
  - RemoteOK jobs API
- Live feeds auto-refresh daily (and can be manually refreshed immediately).

## Deploy to GitHub Pages

### Option 1: simplest
1. Create a new GitHub repository.
2. Upload these files to the root of the repository.
3. In GitHub, go to **Settings > Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select your main branch and `/root` folder.
6. Save.

### Option 2: docs folder
If you want to keep site files in `/docs`, move `index.html`, `styles.css`, and `app.js` there, then configure Pages to deploy from `/docs`.

## Notes

- This remains intentionally static for GitHub Pages compatibility.
- For protected APIs, alerting automation, RSS normalization, and robust page-watchers, a future backend/serverless layer is recommended.
- Country and opportunity values are seeded planning assumptions, meant for structured thinking rather than authoritative external truth.
