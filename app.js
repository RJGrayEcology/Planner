const STORAGE_KEY = 'strategic-life-dashboard-state-v1';

const DEFAULT_STATE = {
  profile: {
    netIncome: 3800,
    cashSavings: 45000,
    investments: 5500,
    essentialCosts: 2200,
    strategicSpending: 350,
    weeklyHours: 40,
    homeGoalYears: 5,
    targetHouseFund: 120000,
    weekendBurnout: 74,
    expectedReturnPct: 7,
    spouseIncomeTarget: 500,
    sideIncomeTarget: 1200,
  },
  weights: {
    wealth: 35,
    safety: 30,
    housing: 20,
    career: 10,
    energy: 5,
  },
  countries: [
    {
      id: 'belgium',
      name: 'Belgium',
      type: 'priority',
      safety: 81,
      affordability: 61,
      familyComfort: 79,
      wealthUpside: 59,
      notes: 'Strong stability baseline, decent family comfort, housing burden is manageable but not cheap in top areas.',
    },
    {
      id: 'france',
      name: 'France',
      type: 'priority',
      safety: 74,
      affordability: 63,
      familyComfort: 77,
      wealthUpside: 58,
      notes: 'Good lifestyle and broad regional choice, but income acceleration may depend on niche consulting or remote work leverage.',
    },
    {
      id: 'united-states',
      name: 'United States',
      type: 'priority',
      safety: 62,
      affordability: 48,
      familyComfort: 59,
      wealthUpside: 86,
      notes: 'Best raw upside for wealth and high salaries, but more volatility in healthcare, housing, and family cost exposure.',
    },
    {
      id: 'netherlands',
      name: 'Netherlands',
      type: 'comparison',
      safety: 83,
      affordability: 45,
      familyComfort: 81,
      wealthUpside: 67,
      notes: 'Very strong family and stability profile, but housing pressure is a major constraint.',
    },
    {
      id: 'canada',
      name: 'Canada',
      type: 'comparison',
      safety: 82,
      affordability: 42,
      familyComfort: 77,
      wealthUpside: 64,
      notes: 'Solid long-horizon livability and safety, but affordability in key metros is punishing.',
    },
  ],
  opportunities: [
    {
      title: 'Wildlife trafficking and OSINT consulting micro-practice',
      type: 'leveraged income',
      fit: 96,
      upside: 87,
      energy: 58,
      risk: 'Medium',
      why: 'Matches your exact edge. Best near-term path for high-value services without learning a new field from zero.',
    },
    {
      title: 'Premium training on AI-assisted online harm monitoring',
      type: 'semi-passive after setup',
      fit: 91,
      upside: 74,
      energy: 50,
      risk: 'Medium',
      why: 'High expertise match and can be productized into workshops, short courses, or institutional training.',
    },
    {
      title: 'Niche SaaS or dashboard tools for enforcement / conservation monitoring',
      type: 'leveraged income',
      fit: 83,
      upside: 84,
      energy: 71,
      risk: 'High',
      why: 'Large upside but slower path. Strong if built from a problem you already know people will pay to solve.',
    },
    {
      title: 'Higher-pay international analyst or intelligence role',
      type: 'active income',
      fit: 88,
      upside: 72,
      energy: 42,
      risk: 'Low',
      why: 'Good path to stabilize the base income and gain stronger institutional signaling value.',
    },
    {
      title: 'General creator/influencer monetization',
      type: 'speculative',
      fit: 34,
      upside: 66,
      energy: 79,
      risk: 'High',
      why: 'Possible, but less aligned than expert-led content or premium niche intelligence products.',
    },
  ],
  careerLanes: [
    {
      title: 'INTERPOL / Europol / international enforcement analyst track',
      fit: 90,
      payoff: 'High salary + mission fit + prestige',
      action: 'Build a reusable targeted application packet and track vacancies weekly.',
    },
    {
      title: 'Conservation and illicit-trade consultancy track',
      fit: 95,
      payoff: 'High-margin niche advisory potential',
      action: 'Package 3 offers: monitoring system design, AI-assisted detection workflow review, and intelligence reporting support.',
    },
    {
      title: 'Remote strategic analyst roles linked to OSINT, risk, and monitoring',
      fit: 82,
      payoff: 'Could materially lift income without relocation',
      action: 'Watch remote and Brussels/France-linked analyst openings with keyword filters.',
    },
    {
      title: 'Thought leadership and research publishing lane',
      fit: 76,
      payoff: 'Indirect monetization via authority and lead flow',
      action: 'Publish a short, high-signal expert output each month that demonstrates unique insight.',
    },
  ],
  spouseIncomePaths: [
    {
      title: 'Scientific and educational writing',
      fit: 87,
      ramp: 'Fast-medium',
      why: 'Compatible with flexible scheduling and can connect to primatology, conservation, parenting, or education niches.',
    },
    {
      title: 'Remote education and tutoring content',
      fit: 81,
      ramp: 'Fast',
      why: 'Can be offered in small blocks of time and productized later into lesson packs or digital resources.',
    },
    {
      title: 'Primatology and research support services',
      fit: 78,
      ramp: 'Medium',
      why: 'Niche but defensible. Could include literature support, science communication, or background research assistance.',
    },
  ],
  threats: [
    { title: 'Housing affordability drift', severity: 'Medium', note: 'A 5-year house plan needs stricter down-payment discipline if prices stay elevated in your preferred markets.' },
    { title: 'One-income family pressure', severity: 'High', note: 'A child arrival increases the value of liquidity, clear buffers, and lower optional spending.' },
    { title: 'Opportunity dilution', severity: 'Medium', note: 'Too many broad money ideas can waste time. The dashboard should keep forcing expertise-first choices.' },
  ],
  signals: {
    weather: null,
    hazards: [],
    tech: [],
    lastUpdated: null,
  },
  connectors: [
    { name: 'Open-Meteo weather', type: 'API', status: 'live', note: 'Client-side fetch enabled.' },
    { name: 'NASA EONET hazards', type: 'API', status: 'live', note: 'Client-side fetch enabled.' },
    { name: 'Hacker News API', type: 'API', status: 'live', note: 'Client-side fetch enabled for lightweight tech chatter.' },
    { name: 'ACLED conflict feed', type: 'API', status: 'planned', note: 'Recommended for server-side integration later.' },
    { name: 'World Bank indicators', type: 'API', status: 'planned', note: 'Good candidate for macro data in a later version.' },
    { name: 'ECB data portal', type: 'API', status: 'planned', note: 'Use for Europe-centric rates and inflation later.' },
    { name: 'INTERPOL vacancies', type: 'Page watch', status: 'mock', note: 'Official page target. Static site cannot crawl it reliably without backend help.' },
    { name: 'ReliefWeb jobs', type: 'RSS/API', status: 'mock', note: 'Official opportunity source placeholder for later integration.' },
    { name: 'IUCN jobs', type: 'Page watch', status: 'mock', note: 'Tracked as a priority source for conservation roles.' },
  ],
};

function clone(data) {
  return JSON.parse(JSON.stringify(data));
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return clone(DEFAULT_STATE);
    const parsed = JSON.parse(raw);
    return {
      ...clone(DEFAULT_STATE),
      ...parsed,
      profile: { ...clone(DEFAULT_STATE.profile), ...(parsed.profile || {}) },
      weights: { ...clone(DEFAULT_STATE.weights), ...(parsed.weights || {}) },
      countries: parsed.countries || clone(DEFAULT_STATE.countries),
      opportunities: parsed.opportunities || clone(DEFAULT_STATE.opportunities),
      careerLanes: parsed.careerLanes || clone(DEFAULT_STATE.careerLanes),
      spouseIncomePaths: parsed.spouseIncomePaths || clone(DEFAULT_STATE.spouseIncomePaths),
      threats: parsed.threats || clone(DEFAULT_STATE.threats),
      signals: { ...clone(DEFAULT_STATE.signals), ...(parsed.signals || {}) },
      connectors: parsed.connectors || clone(DEFAULT_STATE.connectors),
    };
  } catch (error) {
    console.error('Failed to load state:', error);
    return clone(DEFAULT_STATE);
  }
}

let state = loadState();

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function euros(value) {
  return new Intl.NumberFormat('en-IE', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
  }).format(value);
}

function round(value) {
  return Math.round(value);
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function avg(values) {
  if (!values.length) return 0;
  return values.reduce((sum, value) => sum + value, 0) / values.length;
}

function monthsRunway(profile) {
  const monthlyBurn = profile.essentialCosts + profile.strategicSpending;
  if (!monthlyBurn) return 0;
  return profile.cashSavings / monthlyBurn;
}

function projectAssets(profile, years, monthlyContribution) {
  const annualReturn = profile.expectedReturnPct / 100;
  const monthlyRate = annualReturn / 12;
  let total = profile.cashSavings + profile.investments;
  for (let i = 0; i < years * 12; i += 1) {
    total = total * (1 + monthlyRate) + monthlyContribution;
  }
  return total;
}

function normalizeWeights(weights) {
  const total = Object.values(weights).reduce((sum, value) => sum + value, 0) || 1;
  return Object.fromEntries(Object.entries(weights).map(([key, value]) => [key, value / total]));
}

function computeCountryScores(country, weights) {
  const normalized = normalizeWeights(weights);
  const combined =
    country.wealthUpside * normalized.wealth +
    country.safety * normalized.safety +
    country.affordability * normalized.housing +
    country.familyComfort * (normalized.safety * 0.5 + normalized.housing * 0.5) +
    country.wealthUpside * normalized.career +
    (100 - Math.abs(50 - country.familyComfort)) * normalized.energy;
  return round(combined);
}

function computeEngine(stateRef) {
  const { profile, weights, countries, opportunities, spouseIncomePaths, careerLanes } = stateRef;
  const monthlyBuffer = profile.netIncome - profile.essentialCosts - profile.strategicSpending;
  const investableSurplus = Math.max(monthlyBuffer, 0);
  const conservativeContribution = investableSurplus * 0.65;
  const houseProjection = profile.cashSavings + conservativeContribution * 12 * profile.homeGoalYears;
  const tenYearAssets = projectAssets(profile, 10, conservativeContribution + profile.sideIncomeTarget * 0.45);
  const runway = monthsRunway(profile);

  const wealthScore = clamp(round(
    (investableSurplus / Math.max(profile.netIncome, 1)) * 40 +
    clamp((houseProjection / profile.targetHouseFund) * 35, 0, 35) +
    clamp((tenYearAssets / 300000) * 25, 0, 25)
  ), 0, 100);

  const resilienceScore = clamp(round(
    clamp((runway / 12) * 55, 0, 55) +
    clamp((profile.spouseIncomeTarget / 1000) * 15, 0, 15) +
    clamp(((profile.netIncome - profile.essentialCosts) / profile.netIncome) * 20, 0, 20) +
    clamp((100 - profile.weekendBurnout) * 0.1, 0, 10)
  ), 0, 100);

  const burnoutLoadScore = clamp(round(100 - (profile.weeklyHours * 0.9 + profile.weekendBurnout * 0.45 - 12)), 0, 100);
  const spousePotential = clamp(round(avg(spouseIncomePaths.map(path => path.fit)) * 0.8 + (profile.spouseIncomeTarget / 10)), 0, 100);
  const careerLeverageScore = clamp(round(avg(careerLanes.map(lane => lane.fit)) * 0.78 + (profile.sideIncomeTarget / 80)), 0, 100);
  const locationScores = countries.map(country => ({ ...country, total: computeCountryScores(country, weights) })).sort((a, b) => b.total - a.total);
  const topCountry = locationScores[0];
  const locationScore = topCountry.total;
  const familyScore = clamp(round((resilienceScore * 0.4) + (topCountry.familyComfort * 0.35) + (burnoutLoadScore * 0.25)), 0, 100);
  const opportunityScore = clamp(round(avg(opportunities.map(opp => (opp.fit * 0.55) + (opp.upside * 0.45))) / 1.15), 0, 100);

  const normalizedWeights = normalizeWeights(weights);
  const compositeScore = clamp(round(
    wealthScore * normalizedWeights.wealth +
    resilienceScore * normalizedWeights.safety +
    locationScore * normalizedWeights.housing +
    careerLeverageScore * normalizedWeights.career +
    burnoutLoadScore * normalizedWeights.energy
  ), 0, 100);

  return {
    investableSurplus,
    conservativeContribution,
    houseProjection,
    tenYearAssets,
    runway,
    wealthScore,
    resilienceScore,
    burnoutLoadScore,
    spousePotential,
    careerLeverageScore,
    locationScores,
    topCountry,
    locationScore,
    familyScore,
    opportunityScore,
    compositeScore,
  };
}

function buildRecommendation({ title, horizon, description, payoff, risk, time, confidence, meta }) {
  return { title, horizon, description, payoff, risk, time, confidence, meta };
}

function generateBriefing(stateRef, engine) {
  const { profile, opportunities, careerLanes, spouseIncomePaths, threats } = stateRef;
  const topOpps = clone(opportunities)
    .sort((a, b) => ((b.fit * 0.55 + b.upside * 0.45) - (a.fit * 0.55 + a.upside * 0.45)));

  const today = [
    buildRecommendation({
      title: 'Spend 45 focused minutes on your highest-value expertise lane',
      horizon: 'Today',
      meta: 'Income leverage | Expertise-first',
      description: `Push one asset that compounds: a consultancy offer draft, an expert brief, or one targeted application to a high-fit role. Your best lane remains ${topOpps[0].title.toLowerCase()}.`,
      payoff: 'High leverage',
      risk: 'Low risk',
      time: '45-60 min',
      confidence: 'High',
    }),
    buildRecommendation({
      title: 'Protect the house-fund base before chasing new ideas',
      horizon: 'Today',
      meta: 'Family stability | Capital discipline',
      description: `Your 5-year home runway improves most from disciplined monthly allocation, not extra speculative ideas. Current projected house fund: ${euros(engine.houseProjection)}.`,
      payoff: 'Stability gain',
      risk: 'Low risk',
      time: '20 min',
      confidence: 'High',
    }),
    buildRecommendation({
      title: profile.weekendBurnout > 65 ? 'Use a low-energy task format tonight' : 'Add one medium-effort task tonight',
      horizon: 'Today',
      meta: 'Energy preservation',
      description: profile.weekendBurnout > 65
        ? 'Because weekend burnout is high, prefer admin, reading, or setup work rather than deep execution. The app is intentionally throttling ambition here.'
        : 'Your load is manageable enough to support one additional medium-effort task if it clearly supports income or family security.',
      payoff: 'Burnout control',
      risk: 'Low risk',
      time: '15-30 min',
      confidence: 'High',
    }),
  ];

  const week = [
    buildRecommendation({
      title: 'Package 3 paid offers from your current expertise',
      horizon: 'This week',
      meta: 'Consultancy lane',
      description: 'Define three services with a clear outcome, example deliverable, and price anchor. One offer should target AI-assisted monitoring systems, one OSINT/intelligence workflows, and one illicit-trade or conservation analytics support.',
      payoff: 'Income optionality',
      risk: 'Medium risk',
      time: '2-3 hrs',
      confidence: 'High',
    }),
    buildRecommendation({
      title: `Track 5 official target sources for roles like ${careerLanes[0].title.toLowerCase()}`,
      horizon: 'This week',
      meta: 'Career acceleration',
      description: 'Use the official watchlist and create a repeatable weekly scan. The point is not volume. The point is to stop missing high-fit openings.',
      payoff: 'Career leverage',
      risk: 'Low risk',
      time: '1 hr',
      confidence: 'Medium',
    }),
    buildRecommendation({
      title: 'Formalize one remote-income pilot for your wife',
      horizon: 'This week',
      meta: 'Household resilience',
      description: `The best current spouse-fit lane is ${spouseIncomePaths[0].title.toLowerCase()}. Start with a low-pressure pilot that could later expand when family bandwidth allows.`,
      payoff: 'Resilience gain',
      risk: 'Low risk',
      time: '1-2 hrs',
      confidence: 'Medium',
    }),
  ];

  const month = [
    buildRecommendation({
      title: 'Publish one authority-building output',
      horizon: 'This month',
      meta: 'Signal and lead generation',
      description: 'Release one short but strong output that proves rare expertise. It could be a briefing, dashboard demo, analytical post, or technical note. Authority compounds into better jobs and better clients.',
      payoff: 'Lead magnet',
      risk: 'Low risk',
      time: '4-6 hrs',
      confidence: 'High',
    }),
    buildRecommendation({
      title: 'Increase automatic long-term capital flow',
      horizon: 'This month',
      meta: 'Wealth engine',
      description: 'Even a moderate automatic increase matters. The app will keep preferring systematic wealth building over random speculation.',
      payoff: 'Wealth compounding',
      risk: 'Low risk',
      time: '30 min',
      confidence: 'High',
    }),
    buildRecommendation({
      title: `Stress-test ${engine.topCountry.name} vs Belgium vs France for family life`,
      horizon: 'This month',
      meta: 'Location strategy',
      description: 'Do not assume the highest-upside country is the best family fit. Force a side-by-side comparison of wealth upside, housing pressure, and family friction.',
      payoff: 'Better long-horizon decisions',
      risk: 'Low risk',
      time: '90 min',
      confidence: 'High',
    }),
  ];

  const year = [
    buildRecommendation({
      title: 'Lift household income through one major and one secondary channel',
      horizon: 'This year',
      meta: 'Balanced wealth strategy',
      description: 'Primary path: better-compensated analyst/consultancy work. Secondary path: expertise-led product or service. The app is deliberately avoiding shallow side-hustle churn.',
      payoff: 'Major trajectory shift',
      risk: 'Medium risk',
      time: '12-month focus',
      confidence: 'High',
    }),
    buildRecommendation({
      title: 'Create an explicit family liquidity floor',
      horizon: 'This year',
      meta: 'Child and household security',
      description: 'Keep a clearly separated cash safety layer so that house planning and investing do not cannibalize family security.',
      payoff: 'Resilience',
      risk: 'Low risk',
      time: '1-2 sessions',
      confidence: 'High',
    }),
    buildRecommendation({
      title: 'Build a recognizable niche identity',
      horizon: 'This year',
      meta: 'Career compounding',
      description: 'You should become easier to categorize at the high end: intelligence systems for online harms, illicit trade analysis, AI-enabled monitoring, or similar.',
      payoff: 'Higher-value opportunities',
      risk: 'Low risk',
      time: 'Ongoing',
      confidence: 'Medium',
    }),
  ];

  const fiveYear = [
    buildRecommendation({
      title: 'Reach the home-purchase decision point with optionality intact',
      horizon: '5 years',
      meta: 'House goal',
      description: `Target a house-fund level near ${euros(stateRef.profile.targetHouseFund)} while preserving emergency resilience. The goal is not just to buy, but to buy without regret or fragility.`,
      payoff: 'Family lifestyle base',
      risk: 'Medium risk',
      time: '5-year track',
      confidence: 'High',
    }),
    buildRecommendation({
      title: 'Have at least two durable income engines',
      horizon: '5 years',
      meta: 'Wealth diversification',
      description: 'One should be your main work or consulting lane. The second should be an expertise-led product, training line, retainer, or premium service.',
      payoff: 'Wealth resilience',
      risk: 'Medium risk',
      time: '5-year track',
      confidence: 'High',
    }),
    buildRecommendation({
      title: 'Choose location based on wealth + family quality, not ideology',
      horizon: '5 years',
      meta: 'Location realism',
      description: 'Your final destination should maximize both upward financial movement and everyday family life, not just salary headlines or vague lifestyle fantasies.',
      payoff: 'Long-term fit',
      risk: 'Low risk',
      time: '5-year track',
      confidence: 'High',
    }),
  ];

  const tenYear = [
    buildRecommendation({
      title: 'Primary destination: high-wealth, high-comfort family life with geographic optionality',
      horizon: '10 years',
      meta: 'Destination plan',
      description: 'By 10 years, the target state is a strong asset base, a comfortable home, at least one flexible income engine, and the ability to stay or relocate without stress. This is not just higher income. It is strategic freedom.',
      payoff: 'Strategic freedom',
      risk: 'Medium risk',
      time: '10-year track',
      confidence: 'Medium',
    }),
  ];

  return {
    today,
    week,
    month,
    year,
    fiveYear,
    tenYear,
    whyNow: [
      { title: 'Family timing pressure', detail: 'A child on the way increases the value of buffers, systems, and a calmer money strategy.' },
      { title: 'Expertise edge exists now', detail: 'Your strongest income leverage is not generic online hustle. It is packaging rare expertise already built over years.' },
      { title: 'Housing clock is medium-term', detail: 'A 5-year target is close enough to require discipline now but far enough to retain flexibility.' },
    ],
    narrative: [
      'The strategy is to increase wealth without creating household fragility.',
      'That means expertise-led income growth, strong family liquidity, disciplined long-term investing, and a location choice filtered through both comfort and upside.',
      `Current best fit destination in this seeded model is ${engine.topCountry.name}, but the dashboard treats this as a decision hypothesis, not truth.`
    ],
    checkpoints: [
      { title: 'Income engines', detail: 'Do you still rely on one income source only?' },
      { title: 'Home fund pace', detail: `Are you still on track for roughly ${euros(stateRef.profile.targetHouseFund)} in ${stateRef.profile.homeGoalYears} years?` },
      { title: 'Authority building', detail: 'Have you published or shipped something that makes high-value opportunities more likely?' },
    ],
    wealthRecs: [
      { title: 'Increase automated investing when surplus stabilizes', detail: 'Raise contributions gradually instead of waiting for the perfect market entry.' },
      { title: 'Separate safety cash from house fund', detail: 'Do not let the future home deposit eat the emergency layer needed for family stability.' },
      { title: 'Allocate high-upside effort to expertise-led income, not random speculation', detail: 'The profile fit is much stronger for consulting, tools, and institutional roles.' },
    ],
    familyRecs: [
      { title: 'Protect weekends by default', detail: 'The system deliberately limits weekend load because sustained burnout destroys compounding.' },
      { title: 'Pilot spouse income in small blocks', detail: 'Favor flexible writing, educational, or research-adjacent work that can scale later.' },
      { title: 'Keep at least 12 months of runway visible', detail: 'A child makes hidden financial fragility much more expensive.' },
    ],
    topOpps,
    threats,
  };
}

function getDirective(engine) {
  if (engine.wealthScore < 60) {
    return {
      title: 'Stabilize the base before chasing aggressive upside.',
      text: 'Your next major gains come from stronger surplus discipline and expertise-led income, not from adding more noise. The dashboard is prioritizing family stability and strategic leverage over excitement.',
      tags: ['Capital discipline', 'Lower downside', 'Family-first buffer'],
    };
  }
  if (engine.careerLeverageScore >= 75 && engine.familyScore >= 70) {
    return {
      title: 'Convert rare expertise into higher income while preserving family bandwidth.',
      text: 'You are in a strong position to build wealth through a mix of higher-value analyst work, specialized consulting, and selective productization. The engine is favoring high-fit lanes instead of generic side-income clutter.',
      tags: ['Expertise-first', 'Balanced strategy', '5-year house plan'],
    };
  }
  return {
    title: 'Reduce fragility and build optionality.',
    text: 'The system sees good long-term potential, but it wants more household resilience, cleaner execution, and fewer diluted efforts. The path forward is focus, buffers, and leverage.',
    tags: ['Risk control', 'Liquidity', 'Execution focus'],
  };
}

function createRecommendationNode(rec) {
  const template = document.getElementById('recommendation-template');
  const node = template.content.cloneNode(true);
  node.querySelector('.rec-title').textContent = rec.title;
  node.querySelector('.rec-meta').textContent = rec.meta || rec.horizon;
  node.querySelector('.rec-description').textContent = rec.description;
  node.querySelector('.confidence-pill').textContent = rec.confidence;
  node.querySelector('.rec-payoff').textContent = rec.payoff;
  node.querySelector('.rec-risk').textContent = rec.risk;
  node.querySelector('.rec-time').textContent = rec.time;
  return node;
}

function renderStack(containerId, items, renderer) {
  const container = document.getElementById(containerId);
  container.innerHTML = '';
  if (!items || !items.length) {
    container.innerHTML = '<p class="empty-state">Nothing to show yet.</p>';
    return;
  }
  items.forEach(item => {
    const node = renderer(item);
    container.appendChild(node);
  });
}

function noteCard(item, kicker = '') {
  const article = document.createElement('article');
  article.className = 'note-card';
  article.innerHTML = `
    ${kicker ? `<span class="note-kicker">${kicker}</span>` : ''}
    <h4>${item.title}</h4>
    <p>${item.detail || item.note || item.why || ''}</p>
  `;
  return article;
}

function renderOverview(engine, briefing) {
  const directive = getDirective(engine);
  document.getElementById('primary-directive-title').textContent = directive.title;
  document.getElementById('primary-directive-text').textContent = directive.text;
  document.getElementById('directive-tags').innerHTML = directive.tags.map(tag => `<span class="tag">${tag}</span>`).join('');

  document.getElementById('wealth-score').textContent = engine.wealthScore;
  document.getElementById('resilience-score').textContent = engine.resilienceScore;
  document.getElementById('location-score').textContent = engine.locationScore;
  document.getElementById('career-score').textContent = engine.careerLeverageScore;
  document.getElementById('composite-score').textContent = engine.compositeScore;

  const scoreRing = document.getElementById('composite-score-ring');
  const degrees = Math.max(4, Math.round(engine.compositeScore * 3.6));
  scoreRing.style.background = `conic-gradient(var(--accent) 0deg, var(--accent-2) ${degrees}deg, rgba(255,255,255,0.08) ${degrees}deg)`;

  renderStack('today-actions', briefing.today, createRecommendationNode);
  renderStack('why-now', briefing.whyNow, item => noteCard(item, 'Signal'));
  renderStack('threat-list', briefing.threats, item => noteCard(item, item.severity));
  renderStack('opportunity-lanes', briefing.topOpps.slice(0, 3), item => noteCard({ title: item.title, detail: item.why }, item.type));
  renderStack('checkpoint-list', briefing.checkpoints, item => noteCard(item, 'Checkpoint'));
}

function renderHorizons(briefing) {
  const timeline = document.getElementById('horizon-timeline');
  timeline.innerHTML = '';

  const blocks = [
    { label: 'Today', items: briefing.today },
    { label: 'This week', items: briefing.week },
    { label: 'This month', items: briefing.month },
    { label: 'This year', items: briefing.year },
    { label: '5 years', items: briefing.fiveYear },
    { label: '10 years', items: briefing.tenYear },
  ];

  blocks.forEach(block => {
    const wrapper = document.createElement('div');
    wrapper.className = 'timeline-item';
    wrapper.innerHTML = `
      <h4>${block.label}</h4>
      <p>${block.items[0].title}</p>
      <p class="muted small" style="margin-top:8px;">${block.items[0].description}</p>
    `;
    timeline.appendChild(wrapper);
  });

  renderStack('strategy-narrative', briefing.narrative.map(text => ({ title: 'Strategy view', detail: text })), item => noteCard(item, 'Narrative'));
}

function renderWealth(engine, briefing) {
  document.getElementById('monthly-surplus').textContent = euros(engine.investableSurplus);
  document.getElementById('house-fund-projection').textContent = euros(engine.houseProjection);
  document.getElementById('ten-year-assets').textContent = euros(engine.tenYearAssets);

  document.getElementById('surplus-meter').style.width = `${clamp((engine.investableSurplus / state.profile.netIncome) * 100, 0, 100)}%`;
  document.getElementById('house-meter').style.width = `${clamp((engine.houseProjection / state.profile.targetHouseFund) * 100, 0, 100)}%`;
  document.getElementById('asset-meter').style.width = `${clamp((engine.tenYearAssets / 400000) * 100, 0, 100)}%`;

  const rows = [
    { label: 'Safety reserve', pct: 30, value: state.profile.cashSavings * 0.3 },
    { label: 'Home fund', pct: 35, value: state.profile.cashSavings * 0.35 },
    { label: 'Long-term growth', pct: 25, value: state.profile.investments + state.profile.cashSavings * 0.12 },
    { label: 'Strategic opportunity', pct: 10, value: state.profile.cashSavings * 0.1 },
  ];

  const container = document.getElementById('capital-allocation');
  container.innerHTML = rows.map(row => `
    <div class="allocation-row">
      <p>${row.label}</p>
      <div class="meter"><span style="width:${row.pct}%"></span></div>
      <p>${euros(row.value)}</p>
    </div>
  `).join('');

  renderStack('wealth-recommendations', briefing.wealthRecs, item => noteCard(item, 'Wealth'));
}

function renderLocations(engine) {
  const container = document.getElementById('country-comparison');
  container.innerHTML = engine.locationScores.map(country => `
    <article class="country-card">
      <div>
        <h4 class="country-name">${country.name} ${country.type === 'priority' ? '<span class="inline-pill">Priority</span>' : ''}</h4>
        <p class="country-meta">${country.notes}</p>
      </div>
      <div class="country-score-row">
        <div class="score-block"><span class="label">Total</span><span class="value">${country.total}</span></div>
        <div class="score-block"><span class="label">Safety</span><span class="value">${country.safety}</span></div>
        <div class="score-block"><span class="label">Housing</span><span class="value">${country.affordability}</span></div>
        <div class="score-block"><span class="label">Lifestyle</span><span class="value">${country.familyComfort}</span></div>
      </div>
    </article>
  `).join('');

  const recommendation = document.getElementById('location-recommendation');
  recommendation.innerHTML = '';
  const best = engine.locationScores[0];
  recommendation.appendChild(noteCard({
    title: `${best.name} leads in the current seeded model`,
    detail: `This result is driven by a balance of safety, family comfort, and wealth upside rather than just salary potential. Use it as a working hypothesis to test, not a final answer.`
  }, 'Current leader'));
  recommendation.appendChild(noteCard({
    title: 'Best raw upside is not automatically the best destination',
    detail: 'The model intentionally penalizes countries that create too much housing and family friction relative to the income upside.'
  }, 'Interpretation'));
}

function renderCareer(stateRef) {
  renderStack('career-lanes', stateRef.careerLanes, item => noteCard({ title: item.title, detail: `${item.action} Payoff: ${item.payoff}.` }, `Fit ${item.fit}`));

  const watchlist = [
    {
      title: 'INTERPOL vacancies / secondments',
      detail: 'Official careers and secondment pages. Best for law-enforcement-aligned analyst pathways.',
      url: 'https://www.interpol.int/What-you-can-do/Careers/Vacancies'
    },
    {
      title: 'ReliefWeb jobs',
      detail: 'Free global jobs and consultancy source for humanitarian, development, environment, and some conservation-adjacent roles.',
      url: 'https://reliefweb.int/jobs'
    },
    {
      title: 'EU Careers / Europol',
      detail: 'Useful for analyst, policy, security, and Brussels-based institutional pathways.',
      url: 'https://eu-careers.europa.eu/'
    },
    {
      title: 'UN Careers / UNEP / UNODC',
      detail: 'Relevant for international roles linked to environment, crime, policy, and analysis.',
      url: 'https://careers.un.org/'
    },
    {
      title: 'IUCN roles',
      detail: 'Conservation and consultancy monitoring target. Good match for your domain expertise.',
      url: 'https://www.iucn.org/'
    },
  ];

  const container = document.getElementById('job-watchlist');
  container.innerHTML = watchlist.map(item => `
    <article class="note-card">
      <h4><a href="${item.url}" target="_blank" rel="noopener noreferrer">${item.title}</a></h4>
      <p>${item.detail}</p>
    </article>
  `).join('');
}

function renderFamily(engine, briefing, stateRef) {
  document.getElementById('runway-months').textContent = `${round(engine.runway)} mo`;
  document.getElementById('spouse-potential').textContent = engine.spousePotential;
  document.getElementById('family-score').textContent = engine.familyScore;

  renderStack('spouse-income-paths', stateRef.spouseIncomePaths, item => noteCard({ title: item.title, detail: `${item.why} Ramp: ${item.ramp}.` }, `Fit ${item.fit}`));
  renderStack('family-recommendations', briefing.familyRecs, item => noteCard(item, 'Family'));
}

function renderSignals(stateRef) {
  const weatherContainer = document.getElementById('weather-signal');
  const hazardContainer = document.getElementById('hazard-signal');
  const techContainer = document.getElementById('tech-signal');

  weatherContainer.innerHTML = '';
  if (stateRef.signals.weather) {
    weatherContainer.appendChild(noteCard({
      title: `${stateRef.signals.weather.city}`,
      detail: `${stateRef.signals.weather.summary} | ${stateRef.signals.weather.temp}°C | Wind ${stateRef.signals.weather.wind} km/h`
    }, 'Open-Meteo'));
  } else {
    weatherContainer.innerHTML = '<p class="empty-state">Click “Load live signals” to pull current weather data.</p>';
  }

  if (stateRef.signals.hazards.length) {
    renderStack('hazard-signal', stateRef.signals.hazards, item => noteCard({ title: item.title, detail: item.detail }, 'NASA EONET'));
  } else {
    hazardContainer.innerHTML = '<p class="empty-state">No live hazard feed loaded yet.</p>';
  }

  if (stateRef.signals.tech.length) {
    renderStack('tech-signal', stateRef.signals.tech, item => noteCard({ title: item.title, detail: item.detail }, 'Hacker News'));
  } else {
    techContainer.innerHTML = '<p class="empty-state">No live tech signal loaded yet.</p>';
  }

  const connectorGrid = document.getElementById('connector-status');
  connectorGrid.innerHTML = stateRef.connectors.map(item => `
    <article class="connector-card">
      <h4>${item.name}</h4>
      <p>${item.type}</p>
      <p>${item.note}</p>
      <span class="status ${item.status === 'live' ? 'status-live' : item.status === 'mock' ? 'status-mock' : 'status-planned'}">${item.status}</span>
    </article>
  `).join('');
}

function renderSettings(stateRef) {
  const form = document.getElementById('settings-form');
  Object.entries(stateRef.profile).forEach(([key, value]) => {
    const input = form.elements.namedItem(key);
    if (input) input.value = value;
  });

  const container = document.getElementById('weight-controls');
  container.innerHTML = '';
  Object.entries(stateRef.weights).forEach(([key, value]) => {
    const wrapper = document.createElement('div');
    wrapper.className = 'weight-row';
    wrapper.innerHTML = `
      <label>${key.charAt(0).toUpperCase() + key.slice(1)} weight: <span id="weight-value-${key}">${value}</span>%</label>
      <input type="range" min="0" max="100" step="1" value="${value}" data-weight="${key}" />
    `;
    container.appendChild(wrapper);
  });

  container.querySelectorAll('input[type="range"]').forEach(input => {
    input.addEventListener('input', (event) => {
      const weightKey = event.target.dataset.weight;
      const nextValue = Number(event.target.value);
      state.weights[weightKey] = nextValue;
      document.getElementById(`weight-value-${weightKey}`).textContent = nextValue;
      saveState();
      renderAll();
    });
  });
}

function renderAll() {
  const engine = computeEngine(state);
  const briefing = generateBriefing(state, engine);
  renderOverview(engine, briefing);
  renderHorizons(briefing);
  renderWealth(engine, briefing);
  renderLocations(engine);
  renderCareer(state);
  renderFamily(engine, briefing, state);
  renderSignals(state);
  renderSettings(state);
  document.getElementById('date-stamp').textContent = new Date().toLocaleDateString();
}

function setupNavigation() {
  const navButtons = document.querySelectorAll('.nav-btn');
  navButtons.forEach(button => {
    button.addEventListener('click', () => {
      navButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      const sectionId = button.dataset.section;
      document.querySelectorAll('.section').forEach(section => section.classList.remove('visible'));
      document.getElementById(sectionId).classList.add('visible');
      document.getElementById('section-title').textContent = button.textContent;
    });
  });
}

function setupForms() {
  const form = document.getElementById('settings-form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    Object.keys(state.profile).forEach(key => {
      const value = formData.get(key);
      state.profile[key] = Number(value);
    });
    saveState();
    renderAll();
  });

  document.getElementById('reset-defaults').addEventListener('click', () => {
    state = clone(DEFAULT_STATE);
    saveState();
    renderAll();
  });

  document.getElementById('export-state').addEventListener('click', () => {
    const blob = new Blob([JSON.stringify(state, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'strategic-life-dashboard-state.json';
    link.click();
    URL.revokeObjectURL(url);
  });

  document.getElementById('import-state').addEventListener('change', async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    try {
      const text = await file.text();
      const parsed = JSON.parse(text);
      state = {
        ...clone(DEFAULT_STATE),
        ...parsed,
        profile: { ...clone(DEFAULT_STATE.profile), ...(parsed.profile || {}) },
        weights: { ...clone(DEFAULT_STATE.weights), ...(parsed.weights || {}) },
      };
      saveState();
      renderAll();
      alert('Dashboard state imported.');
    } catch (error) {
      console.error(error);
      alert('Import failed. Please use a valid exported JSON file.');
    }
  });
}

function setupRefreshActions() {
  document.getElementById('refresh-briefing').addEventListener('click', () => {
    renderAll();
  });

  document.getElementById('load-live-signals').addEventListener('click', loadLiveSignals);
}

function weatherCodeToText(code) {
  const map = {
    0: 'Clear', 1: 'Mostly clear', 2: 'Partly cloudy', 3: 'Overcast', 45: 'Fog', 48: 'Rime fog',
    51: 'Light drizzle', 53: 'Drizzle', 55: 'Dense drizzle', 61: 'Light rain', 63: 'Rain', 65: 'Heavy rain',
    71: 'Light snow', 73: 'Snow', 75: 'Heavy snow', 80: 'Rain showers', 81: 'Showers', 82: 'Heavy showers',
    95: 'Thunderstorm', 96: 'Thunderstorm with hail', 99: 'Severe thunderstorm with hail'
  };
  return map[code] || 'Mixed conditions';
}

async function loadLiveSignals() {
  const loadButton = document.getElementById('load-live-signals');
  const original = loadButton.textContent;
  loadButton.textContent = 'Loading...';
  loadButton.disabled = true;

  try {
    const weatherPromise = fetch('https://api.open-meteo.com/v1/forecast?latitude=50.85&longitude=4.35&current=temperature_2m,weather_code,wind_speed_10m&timezone=Europe%2FBerlin')
      .then(res => {
        if (!res.ok) throw new Error('Weather request failed');
        return res.json();
      })
      .then(data => ({
        city: 'Brussels',
        temp: Math.round(data.current.temperature_2m),
        wind: Math.round(data.current.wind_speed_10m),
        summary: weatherCodeToText(data.current.weather_code),
      }));

    const hazardPromise = fetch('https://eonet.gsfc.nasa.gov/api/v3/events?status=open&limit=5')
      .then(res => {
        if (!res.ok) throw new Error('Hazard request failed');
        return res.json();
      })
      .then(data => (data.events || []).map(event => ({
        title: event.title,
        detail: `${event.categories?.map(c => c.title).join(', ') || 'Event'} | ${event.geometry?.[0]?.date ? new Date(event.geometry[0].date).toLocaleDateString() : 'Recent'}`,
      })));

    const techPromise = fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
      .then(res => {
        if (!res.ok) throw new Error('HN request failed');
        return res.json();
      })
      .then(async ids => {
        const sampleIds = ids.slice(0, 5);
        const stories = await Promise.all(sampleIds.map(id => fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then(res => res.json())));
        return stories.filter(Boolean).map(story => ({
          title: story.title,
          detail: `Score ${story.score || 0} | ${story.by || 'unknown'} | ${story.url || 'news.ycombinator.com'}`,
        }));
      });

    const [weatherResult, hazardResult, techResult] = await Promise.allSettled([weatherPromise, hazardPromise, techPromise]);

    if (weatherResult.status === 'fulfilled') state.signals.weather = weatherResult.value;
    if (hazardResult.status === 'fulfilled') state.signals.hazards = hazardResult.value;
    if (techResult.status === 'fulfilled') state.signals.tech = techResult.value;

    state.signals.lastUpdated = new Date().toISOString();
    saveState();
    renderAll();
  } catch (error) {
    console.error(error);
    alert('Some live signals failed to load. The dashboard will continue using existing data.');
  } finally {
    loadButton.textContent = original;
    loadButton.disabled = false;
  }
}

function init() {
  setupNavigation();
  setupForms();
  setupRefreshActions();
  renderAll();
}

init();
