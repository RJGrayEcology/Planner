# Strategic Life Intelligence Dashboard

Static GitHub Pages dashboard (HTML/CSS/JS) for personal strategic planning.

## What is live vs static

### Live feeds (client-side, no backend)
The app fetches live data from these open sources:
- Open-Meteo (Brussels weather)
- NASA EONET (active natural events)
- Hacker News API (top technical chatter)
- ReliefWeb Jobs API
- Arbeitnow Jobs API
- Remotive Jobs API
- Financial Modeling Prep (market gainers, demo endpoint)
- Alternative.me Fear & Greed index

### Static/seeded inputs
These remain editable seeded planning inputs:
- personal profile + weights
- long-horizon goals
- country scoring assumptions
- opportunity lane definitions

## How recommendations are generated

Recommendations are **adaptive**, not fixed text:
1. The engine computes current scores (wealth, resilience, career leverage, family, location, weekend protection).
2. It detects the weakest area.
3. It injects latest live feeds (high-fit jobs + investment signals) into:
   - daily actions
   - why-now logic
   - wealth recommendations
   - opportunity radar
4. Career Watch filters live jobs by relevance to your high-fit lanes (analyst/intelligence/OSINT/risk/conservation style signals).

## Refresh behavior

- Manual refresh: **Load live signals** button.
- Automatic refresh: on page load if feeds are stale, then hourly checks; fetch runs when data age > 24 hours.
- Last refresh timestamp is stored in local state.

## Storage

Everything is local browser storage (`localStorage`): profile, weights, computed snapshots, and fetched feed payloads.
Import/export JSON is supported.

## Deploy

Upload `index.html`, `styles.css`, `app.js` to repo root (or `/docs`) and enable GitHub Pages.
