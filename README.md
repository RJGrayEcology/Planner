# Strategic Life Intelligence Dashboard

A static GitHub Pages friendly prototype built as plain HTML, CSS, and JavaScript.

## What it does

- Gives a private command-center style dashboard for life planning
- Uses editable local settings for income, savings, family planning, and risk weighting
- Generates horizon-based recommendations for:
  - today
  - this week
  - this month
  - this year
  - 5 years
  - 10 years
- Includes seeded country comparison and family-readiness logic
- Includes live client-side signal loading for:
  - Open-Meteo weather
  - NASA EONET natural events
  - Hacker News top stories
- Stores all user state locally in the browser

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

- This is intentionally a static prototype so it works on GitHub Pages.
- For real protected APIs, RSS normalization, job page watchers, or alert automation, a backend later would be better.
- Current country scores and many opportunity scores are seeded planning assumptions, not authoritative real-time facts.

## Suggested next upgrades

1. Add real job/RSS connectors through a small serverless backend.
2. Add editable city-level housing comparisons.
3. Add a weekly memo generator.
4. Add manual notes and evidence drawers per recommendation.
5. Add scenario presets such as `house-first`, `career-jump`, and `max-safety`.
