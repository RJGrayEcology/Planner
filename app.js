const STORAGE_KEY = 'strategic-life-dashboard-state-v2';

const COUNTRY_LIBRARY = {
  belgium: {
    id: 'belgium',
    name: 'Belgium',
    type: 'priority',
    safety: 81,
    affordability: 61,
    familyComfort: 79,
    wealthUpside: 59,
    childcareSupport: 76,
    remoteCareerFit: 67,
    notes: 'Strong stability baseline, family-friendly social services, manageable but rising housing pressure in major cities.',
  },
  france: {
    id: 'france',
    name: 'France',
    type: 'priority',
    safety: 74,
    affordability: 63,
    familyComfort: 77,
    wealthUpside: 58,
    childcareSupport: 74,
    remoteCareerFit: 64,
    notes: 'Broad quality-of-life range and family lifestyle options. Compensation acceleration depends on specialization and region.',
  },
  'united-states': {
    id: 'united-states',
    name: 'United States',
    type: 'priority',
    safety: 62,
    affordability: 48,
    familyComfort: 59,
    wealthUpside: 86,
    childcareSupport: 42,
    remoteCareerFit: 88,
    notes: 'Highest raw earning upside, but higher healthcare/family cost volatility and lower baseline safety consistency.',
  },
  netherlands: {
    id: 'netherlands',
    name: 'Netherlands',
    type: 'comparison',
    safety: 83,
    affordability: 45,
    familyComfort: 81,
    wealthUpside: 67,
    childcareSupport: 73,
    remoteCareerFit: 71,
    notes: 'Very strong stability and family comfort profile, with heavy housing competition in key areas.',
  },
  canada: {
    id: 'canada',
    name: 'Canada',
    type: 'comparison',
    safety: 82,
    affordability: 42,
    familyComfort: 77,
    wealthUpside: 64,
    childcareSupport: 71,
    remoteCareerFit: 69,
    notes: 'High-quality family environment with affordability pressure in top metros.',
  },
  germany: {
    id: 'germany',
    name: 'Germany',
    type: 'comparison',
    safety: 79,
    affordability: 58,
    familyComfort: 75,
    wealthUpside: 66,
    childcareSupport: 74,
    remoteCareerFit: 72,
    notes: 'Strong economic base and childcare infrastructure with mixed tax and language trade-offs.',
  },
  portugal: {
    id: 'portugal',
    name: 'Portugal',
    type: 'comparison',
    safety: 84,
    affordability: 70,
    familyComfort: 82,
    wealthUpside: 49,
    childcareSupport: 68,
    remoteCareerFit: 62,
    notes: 'Excellent lifestyle and affordability for family setup, with lower local salary upside.',
  },
  switzerland: {
    id: 'switzerland',
    name: 'Switzerland',
    type: 'comparison',
    safety: 90,
    affordability: 35,
    familyComfort: 80,
    wealthUpside: 84,
    childcareSupport: 66,
    remoteCareerFit: 74,
    notes: 'Outstanding safety and earnings potential with very high cost of living and housing barriers.',
  },
};

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
    applicationsTracked: 2,
  },
  weights: { wealth: 35, safety: 30, housing: 20, career: 10, energy: 5 },
  comparisonCountryIds: ['netherlands', 'canada'],
  opportunities: [
    { title: 'Wildlife trafficking and OSINT consulting micro-practice', type: 'leveraged income', fit: 96, upside: 87, energy: 58, risk: 'Medium', why: 'Highest profile fit and fastest path to premium pricing without re-training.' },
    { title: 'Premium training on AI-assisted online harm monitoring', type: 'semi-passive after setup', fit: 91, upside: 74, energy: 50, risk: 'Medium', why: 'Can convert expertise into productized workshops and institutional programs.' },
    { title: 'Niche SaaS or dashboard tools for enforcement / conservation monitoring', type: 'leveraged income', fit: 83, upside: 84, energy: 71, risk: 'High', why: 'Large upside if built around a known paid problem; slower to monetize.' },
    { title: 'Higher-pay international analyst or intelligence role', type: 'active income', fit: 88, upside: 72, energy: 42, risk: 'Low', why: 'Reliable path for compensation growth and credential strength.' },
    { title: 'General creator/influencer monetization', type: 'speculative', fit: 34, upside: 66, energy: 79, risk: 'High', why: 'Possible but lower strategic fit than expertise-led offers.' },
  ],
  careerLanes: [
    { title: 'INTERPOL / Europol / international enforcement analyst track', fit: 90, payoff: 'High salary + mission fit + prestige', action: 'Maintain one reusable targeted application packet and scan vacancies weekly.' },
    { title: 'Conservation and illicit-trade consultancy track', fit: 95, payoff: 'High-margin niche advisory potential', action: 'Offer 3 products: monitoring design, AI workflow review, intelligence reporting support.' },
    { title: 'Remote strategic analyst roles linked to OSINT, risk, and monitoring', fit: 82, payoff: 'Material income lift without relocation', action: 'Monitor remote + Brussels + France roles with strict keyword filters.' },
    { title: 'Thought leadership and research publishing lane', fit: 76, payoff: 'Authority and lead flow compounding', action: 'Publish one short high-signal expert output monthly.' },
  ],
  spouseIncomePaths: [
    { title: 'Scientific and educational writing', fit: 87, ramp: 'Fast-medium', why: 'Fits flexible scheduling and links to primatology, conservation, parenting, and education niches.' },
    { title: 'Remote education and tutoring content', fit: 81, ramp: 'Fast', why: 'Can run in small time blocks, then evolve into reusable products.' },
    { title: 'Primatology and research support services', fit: 78, ramp: 'Medium', why: 'Niche defensibility with strong alignment and portfolio potential.' },
  ],
  threats: [
    { title: 'Housing affordability drift', severity: 'Medium', note: 'A 5-year house plan needs strict down-payment discipline if prices remain elevated.' },
    { title: 'One-income family pressure', severity: 'High', note: 'A child arrival increases the value of liquidity and predictable cashflow.' },
    { title: 'Opportunity dilution', severity: 'Medium', note: 'Too many broad ideas reduce execution quality. Keep expertise-first filters.' },
  ],
  signals: { weather: null, hazards: [], tech: [], jobs: [], investments: [], meta: {}, lastUpdated: null },
  connectors: [
    { name: 'Open-Meteo weather', type: 'API', status: 'live', note: 'Client-side fetch enabled.' },
    { name: 'NASA EONET hazards', type: 'API', status: 'live', note: 'Client-side fetch enabled.' },
    { name: 'Hacker News API', type: 'API', status: 'live', note: 'Client-side fetch enabled.' },
    { name: 'ReliefWeb jobs API', type: 'API', status: 'live', note: 'Live humanitarian and consultancy opportunities.' },
    { name: 'Arbeitnow jobs API', type: 'API', status: 'live', note: 'Live remote/international role stream.' },
    { name: 'Remotive jobs API', type: 'API', status: 'live', note: 'Live remote opportunity stream for analyst/consultancy-adjacent roles.' },
    { name: 'FMP market gainers API', type: 'API', status: 'live', note: 'Daily market momentum scan for investment radar.' },
    { name: 'Alternative.me sentiment API', type: 'API', status: 'live', note: 'Live fear & greed signal for risk pacing.' },
  ],
  history: { daily: [] },
  meta: { lastEngine: null, lastSavedAt: null },
};

const E = {};

const clone = (obj) => JSON.parse(JSON.stringify(obj));
const round = (v) => Math.round(v);
const clamp = (v, min, max) => Math.min(Math.max(v, min), max);
const avg = (values) => (values.length ? values.reduce((a, b) => a + b, 0) / values.length : 0);
const euros = (value) => new Intl.NumberFormat('en-IE', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(value);
const isoDay = (date = new Date()) => date.toISOString().slice(0, 10);

function buildCountries(stateRef) {
  const base = ['belgium', 'france', 'united-states'];
  const optional = stateRef.comparisonCountryIds.filter((id) => COUNTRY_LIBRARY[id] && !base.includes(id)).slice(0, 2);
  return [...base, ...optional].map((id) => clone(COUNTRY_LIBRARY[id]));
}

function hydrateState(parsed = {}) {
  const merged = {
    ...clone(DEFAULT_STATE),
    ...parsed,
    profile: { ...clone(DEFAULT_STATE.profile), ...(parsed.profile || {}) },
    weights: { ...clone(DEFAULT_STATE.weights), ...(parsed.weights || {}) },
    opportunities: parsed.opportunities || clone(DEFAULT_STATE.opportunities),
    careerLanes: parsed.careerLanes || clone(DEFAULT_STATE.careerLanes),
    spouseIncomePaths: parsed.spouseIncomePaths || clone(DEFAULT_STATE.spouseIncomePaths),
    threats: parsed.threats || clone(DEFAULT_STATE.threats),
    signals: { ...clone(DEFAULT_STATE.signals), ...(parsed.signals || {}) },
    connectors: parsed.connectors || clone(DEFAULT_STATE.connectors),
    history: { ...clone(DEFAULT_STATE.history), ...(parsed.history || {}) },
    meta: { ...clone(DEFAULT_STATE.meta), ...(parsed.meta || {}) },
  };

  merged.comparisonCountryIds = Array.isArray(parsed.comparisonCountryIds) ? parsed.comparisonCountryIds : clone(DEFAULT_STATE.comparisonCountryIds);
  merged.history.daily = Array.isArray(parsed?.history?.daily) ? parsed.history.daily : [];
  return merged;
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return hydrateState(raw ? JSON.parse(raw) : {});
  } catch (error) {
    console.error('Failed to load state:', error);
    return hydrateState({});
  }
}

let state = loadState();

function saveState() {
  state.meta.lastSavedAt = new Date().toISOString();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function normalizeWeights(weights) {
  const total = Object.values(weights).reduce((sum, value) => sum + value, 0) || 1;
  return Object.fromEntries(Object.entries(weights).map(([key, value]) => [key, value / total]));
}

function monthsRunway(profile) {
  const burn = profile.essentialCosts + profile.strategicSpending;
  return burn ? profile.cashSavings / burn : 0;
}

function projectAssets(profile, years, monthlyContribution) {
  const monthlyRate = (profile.expectedReturnPct / 100) / 12;
  let total = profile.cashSavings + profile.investments;
  for (let month = 0; month < years * 12; month += 1) total = total * (1 + monthlyRate) + monthlyContribution;
  return total;
}

function computeCountryScores(country, normalizedWeights, profile) {
  const oneIncomePressure = clamp((profile.essentialCosts / Math.max(profile.netIncome, 1)) * 100, 0, 100);
  const familyStability = avg([country.safety, country.familyComfort, country.childcareSupport]);
  const housingStressPenalty = clamp(65 - country.affordability, 0, 35);
  const weighted =
    country.wealthUpside * normalizedWeights.wealth +
    familyStability * normalizedWeights.safety +
    country.affordability * normalizedWeights.housing +
    country.remoteCareerFit * normalizedWeights.career +
    (100 - profile.weekendBurnout) * normalizedWeights.energy;
  const total = clamp(round(weighted - housingStressPenalty * 0.25 - oneIncomePressure * 0.08), 0, 100);
  return {
    ...country,
    familyStability: round(familyStability),
    housingStressPenalty: round(housingStressPenalty),
    total,
  };
}

function computeEngine(stateRef) {
  const { profile, opportunities, spouseIncomePaths, careerLanes } = stateRef;
  const countries = buildCountries(stateRef);
  const normalizedWeights = normalizeWeights(stateRef.weights);

  const monthlyBuffer = profile.netIncome - profile.essentialCosts - profile.strategicSpending;
  const investableSurplus = Math.max(monthlyBuffer, 0);
  const conservativeContribution = investableSurplus * 0.65;
  const runway = monthsRunway(profile);
  const houseProjection = profile.cashSavings + conservativeContribution * 12 * profile.homeGoalYears;
  const tenYearAssets = projectAssets(profile, 10, conservativeContribution + profile.sideIncomeTarget * 0.45);

  const savingsRate = clamp((investableSurplus / Math.max(profile.netIncome, 1)) * 100, 0, 100);
  const wealthScore = clamp(round(savingsRate * 0.45 + clamp((houseProjection / profile.targetHouseFund) * 100, 0, 100) * 0.3 + clamp((tenYearAssets / 320000) * 100, 0, 100) * 0.25), 0, 100);

  const weekendProtection = clamp(round(100 - (profile.weekendBurnout * 0.7 + Math.max(profile.weeklyHours - 42, 0) * 1.8)), 0, 100);
  const resilienceScore = clamp(round(clamp((runway / 12) * 100, 0, 100) * 0.5 + clamp((profile.spouseIncomeTarget / 1200) * 100, 0, 100) * 0.2 + clamp((profile.netIncome - profile.essentialCosts) / Math.max(profile.netIncome, 1) * 100, 0, 100) * 0.2 + weekendProtection * 0.1), 0, 100);

  const spousePotential = clamp(round(avg(spouseIncomePaths.map((path) => path.fit)) * 0.82 + (profile.spouseIncomeTarget / 14)), 0, 100);
  const careerLeverageScore = clamp(round(avg(careerLanes.map((lane) => lane.fit)) * 0.75 + (profile.sideIncomeTarget / 18)), 0, 100);
  const opportunityScore = clamp(round(avg(opportunities.map((opp) => opp.fit * 0.58 + opp.upside * 0.42))), 0, 100);
  const executionLoad = clamp(round((profile.weeklyHours / 55) * 70 + (profile.applicationsTracked || 0) * 4), 0, 100);

  const locationScores = countries.map((country) => computeCountryScores(country, normalizedWeights, profile)).sort((a, b) => b.total - a.total);
  const topCountry = locationScores[0];
  const familyScore = clamp(round(resilienceScore * 0.35 + topCountry.familyStability * 0.4 + weekendProtection * 0.25), 0, 100);

  const compositeScore = clamp(round(
    wealthScore * normalizedWeights.wealth +
    resilienceScore * normalizedWeights.safety +
    topCountry.total * normalizedWeights.housing +
    careerLeverageScore * normalizedWeights.career +
    weekendProtection * normalizedWeights.energy
  ), 0, 100);

  return {
    monthlyBuffer,
    investableSurplus,
    conservativeContribution,
    runway,
    houseProjection,
    tenYearAssets,
    savingsRate,
    wealthScore,
    resilienceScore,
    weekendProtection,
    spousePotential,
    careerLeverageScore,
    opportunityScore,
    executionLoad,
    locationScores,
    topCountry,
    familyScore,
    compositeScore,
  };
}

function upsertDailySnapshot(engine) {
  const today = isoDay();
  const relevantJobs = getRelevantJobs(state);
  const snapshot = {
    date: today,
    wealthScore: engine.wealthScore,
    resilienceScore: engine.resilienceScore,
    familyScore: engine.familyScore,
    weekendProtection: engine.weekendProtection,
    savingsRate: round(engine.savingsRate),
    topCountry: engine.topCountry.name,
    feedCounts: {
      weather: state.signals.weather ? 1 : 0,
      hazards: state.signals.hazards.length,
      tech: state.signals.tech.length,
      jobs: state.signals.jobs.length,
      investments: state.signals.investments.length,
    },
    runwayMonths: round(engine.runway * 10) / 10,
    houseFundProjection: round(engine.houseProjection),
    weekendBurnout: state.profile.weekendBurnout,
    executionLoad: engine.executionLoad,
    highFitJobsWeek: relevantJobs.length,
    applicationsTracked: state.profile.applicationsTracked || 0,
  };

  const existingIndex = state.history.daily.findIndex((item) => item.date === today);
  if (existingIndex >= 0) state.history.daily[existingIndex] = snapshot;
  else state.history.daily.push(snapshot);

  state.history.daily = state.history.daily
    .sort((a, b) => a.date.localeCompare(b.date))
    .slice(-730);
}

function movingAverage(values, span = 7) {
  return values.map((_, index) => {
    const start = Math.max(0, index - span + 1);
    const window = values.slice(start, index + 1);
    return round(avg(window) * 10) / 10;
  });
}

function makeChartConfig(labels, datasets, yAxes = {}) {
  return {
    type: 'line',
    data: { labels, datasets },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: { mode: 'index', intersect: false },
      plugins: { legend: { labels: { color: '#dbe3ee' } } },
      scales: {
        x: { ticks: { color: '#9ca3af' }, grid: { color: 'rgba(148, 163, 184, 0.12)' } },
        y: { ticks: { color: '#9ca3af' }, grid: { color: 'rgba(148, 163, 184, 0.12)' }, min: 0, max: 100 },
        ...yAxes,
      },
    },
  };
}

function drawOrUpdateChart(key, canvas, config) {
  if (E.trendCharts[key]) E.trendCharts[key].destroy();
  E.trendCharts[key] = new Chart(canvas, config);
}

function renderTrends() {
  if (typeof Chart === 'undefined') return;

  const days = Number(state.meta.trendRangeDays || 30);
  const showMovingAverage = Boolean(state.meta.showMovingAverage ?? true);
  const cutoff = new Date();
  cutoff.setDate(cutoff.getDate() - (days - 1));
  const cutoffText = isoDay(cutoff);
  const history = state.history.daily.filter((item) => item.date >= cutoffText);
  if (!history.length) return;

  const labels = history.map((item) => item.date.slice(5));
  const wealth = history.map((item) => item.wealthScore);
  const resilience = history.map((item) => item.resilienceScore);
  const family = history.map((item) => item.familyScore);
  const weekend = history.map((item) => item.weekendProtection);
  const runway = history.map((item) => item.runwayMonths || 0);
  const houseFund = history.map((item) => item.houseFundProjection || 0);
  const burnout = history.map((item) => item.weekendBurnout || 0);
  const executionLoad = history.map((item) => item.executionLoad || 0);
  const highFitJobs = history.map((item) => item.highFitJobsWeek || 0);
  const applications = history.map((item) => item.applicationsTracked || 0);

  const maStyle = { borderDash: [6, 4], pointRadius: 0, tension: 0.3 };
  const scoreDatasets = [
    { label: 'Wealth', data: wealth, borderColor: '#5eead4', tension: 0.28 },
    { label: 'Resilience', data: resilience, borderColor: '#60a5fa', tension: 0.28 },
    { label: 'Family', data: family, borderColor: '#fbbf24', tension: 0.28 },
    { label: 'Weekend protection', data: weekend, borderColor: '#fb7185', tension: 0.28 },
  ];
  if (showMovingAverage) {
    scoreDatasets.push(
      { label: 'Wealth (MA7)', data: movingAverage(wealth), borderColor: '#2dd4bf', ...maStyle },
      { label: 'Resilience (MA7)', data: movingAverage(resilience), borderColor: '#3b82f6', ...maStyle },
      { label: 'Family (MA7)', data: movingAverage(family), borderColor: '#f59e0b', ...maStyle },
    );
  }
  drawOrUpdateChart('scoreTrends', E.scoreTrendsChart, makeChartConfig(labels, scoreDatasets));

  const runwayHouseDatasets = [
    { label: 'Runway (months)', data: runway, borderColor: '#a78bfa', yAxisID: 'y' },
    { label: 'House fund projection (€)', data: houseFund, borderColor: '#34d399', yAxisID: 'y2' },
  ];
  if (showMovingAverage) runwayHouseDatasets.push({ label: 'Runway MA7', data: movingAverage(runway), borderColor: '#8b5cf6', yAxisID: 'y', ...maStyle });
  drawOrUpdateChart('runwayHouse', E.runwayHouseChart, makeChartConfig(labels, runwayHouseDatasets, {
    y: { ticks: { color: '#9ca3af' }, grid: { color: 'rgba(148, 163, 184, 0.12)' }, min: 0 },
    y2: {
      position: 'right',
      ticks: {
        color: '#9ca3af',
        callback: (value) => euros(value),
      },
      grid: { drawOnChartArea: false },
    },
  }));

  const burnoutLoadDatasets = [
    { label: 'Weekend burnout', data: burnout, borderColor: '#fb7185' },
    { label: 'Execution load', data: executionLoad, borderColor: '#60a5fa' },
  ];
  if (showMovingAverage) burnoutLoadDatasets.push({ label: 'Execution load MA7', data: movingAverage(executionLoad), borderColor: '#2563eb', ...maStyle });
  drawOrUpdateChart('burnoutLoad', E.burnoutLoadChart, makeChartConfig(labels, burnoutLoadDatasets));

  const jobsAppsDatasets = [
    { label: 'High-fit jobs / week', data: highFitJobs, borderColor: '#4ade80', yAxisID: 'y' },
    { label: 'Applications tracked', data: applications, borderColor: '#f59e0b', yAxisID: 'y' },
  ];
  if (showMovingAverage) jobsAppsDatasets.push({ label: 'Jobs MA7', data: movingAverage(highFitJobs), borderColor: '#16a34a', yAxisID: 'y', ...maStyle });
  drawOrUpdateChart('jobsApps', E.jobsApplicationsChart, makeChartConfig(labels, jobsAppsDatasets, {
    y: { ticks: { color: '#9ca3af' }, grid: { color: 'rgba(148, 163, 184, 0.12)' }, min: 0 },
  }));
}

function computeChanges(currentEngine, previousEngine) {
  if (!previousEngine) return [{ label: 'Baseline initialized', detail: 'No prior snapshot was available, so this is the first strategic baseline.' }];

  const tracked = [
    { key: 'wealthScore', label: 'Wealth score' },
    { key: 'resilienceScore', label: 'Resilience score' },
    { key: 'careerLeverageScore', label: 'Career leverage' },
    { key: 'familyScore', label: 'Family readiness' },
    { key: 'compositeScore', label: 'Composite score' },
  ];

  const changes = tracked
    .map(({ key, label }) => ({ label, delta: currentEngine[key] - previousEngine[key], now: currentEngine[key] }))
    .filter((item) => Math.abs(item.delta) >= 1)
    .sort((a, b) => Math.abs(b.delta) - Math.abs(a.delta))
    .slice(0, 4)
    .map((item) => ({
      label: `${item.label} ${item.delta > 0 ? 'improved' : 'declined'} by ${Math.abs(item.delta)} pts`,
      detail: `Now at ${item.now}. This shift should influence task intensity and where you focus this week.`,
    }));

  return changes.length ? changes : [{ label: 'No major score shifts', detail: 'Your strategic baseline is stable since the last save.' }];
}

function getRelevantJobs(stateRef) {
  const baseKeywords = [
    'analyst', 'intelligence', 'osint', 'monitoring', 'risk', 'investigation',
    'conservation', 'wildlife', 'illicit', 'policy', 'research', 'security',
    'europol', 'interpol', 'ai', 'remote',
  ];
  const laneKeywords = stateRef.careerLanes
    .flatMap((lane) => `${lane.title} ${lane.action}`.toLowerCase().split(/[^a-z0-9]+/g))
    .filter((word) => word.length > 3);
  const keywords = [...new Set([...baseKeywords, ...laneKeywords])];

  return stateRef.signals.jobs
    .map((job) => {
      const haystack = `${job.title} ${job.detail}`.toLowerCase();
      const score = keywords.reduce((acc, keyword) => (haystack.includes(keyword) ? acc + 1 : acc), 0);
      return { ...job, relevance: score };
    })
    .filter((job) => job.relevance >= 2)
    .sort((a, b) => b.relevance - a.relevance)
    .slice(0, 10);
}

function computeDrivers(engine, signals, profile) {
  const now = Date.now();
  const staleHours = signals.lastUpdated
    ? (now - new Date(signals.lastUpdated).getTime()) / (1000 * 60 * 60)
    : null;
  const relevantJobs = (signals.relevantJobs || [])
    .filter((job) => typeof job.relevance === 'number')
    .sort((a, b) => b.relevance - a.relevance);
  const freshRelevantJobs = relevantJobs.filter((job) => {
    if (!job.postedAt) return false;
    return now - new Date(job.postedAt).getTime() <= 24 * 60 * 60 * 1000;
  });

  const liquidityGap = clamp((12 - engine.runway) / 12, 0, 1);
  const careerGap = clamp((75 - engine.careerLeverageScore) / 75, 0, 1);
  const energyGap = clamp((65 - engine.weekendProtection) / 65, 0, 1);
  const feedGap = staleHours === null ? 1 : clamp((staleHours - 12) / 36, 0, 1);

  return [
    {
      key: 'liquidity',
      weight: round((liquidityGap * 0.72 + (engine.investableSurplus > 0 ? 0.18 : 0.42)) * 100),
      title: 'Protect family runway before acceleration',
      action: 'Preserve a 12-month cash floor and only increase investments when surplus remains positive.',
      expectedImpact: 'Lower downside risk while keeping house-fund progress steady.',
      urgency: engine.runway < 10 ? 'High' : 'Medium',
      confidence: engine.runway < 10 ? 88 : 74,
      whatChanged: `Runway now ${engine.runway.toFixed(1)} months with ${euros(engine.investableSurplus)} monthly surplus.`,
      whyNow: engine.runway < 12 ? 'A low runway can force reactive decisions during family volatility.' : 'Runway is adequate, but preserving buffer prevents backsliding.',
      because: [
        `Runway is ${engine.runway.toFixed(1)} months.`,
        `Monthly investable surplus is ${euros(engine.investableSurplus)}.`,
        `Family readiness score is ${engine.familyScore}/100.`,
      ],
      reviewAt: new Date(now + 7 * 24 * 60 * 60 * 1000).toISOString(),
    },
    {
      key: 'career',
      weight: round((careerGap * 0.56 + Math.min(relevantJobs.length / 8, 0.44)) * 100),
      title: 'Convert live market demand into targeted applications',
      action: 'Ship one tailored application or outreach to the highest-fit role today.',
      expectedImpact: 'Faster compensation growth and improved career leverage score.',
      urgency: freshRelevantJobs.length >= 2 ? 'High' : 'Medium',
      confidence: relevantJobs.length ? 82 : 61,
      whatChanged: `${relevantJobs.length} relevant jobs in feed, ${freshRelevantJobs.length} posted in the last 24h.`,
      whyNow: relevantJobs.length ? 'Live openings decay quickly; acting in the first day raises response odds.' : 'No validated opportunities yet, so refreshing signals is the bottleneck.',
      because: [
        `${relevantJobs.length} high-fit jobs matched your lanes.`,
        `${freshRelevantJobs.length} high-fit jobs were posted in the last 24h.`,
        `Career leverage score is ${engine.careerLeverageScore}/100.`,
      ],
      expiresAt: new Date(now + 24 * 60 * 60 * 1000).toISOString(),
    },
    {
      key: 'energy',
      weight: round((energyGap * 0.78 + clamp(profile.weekendBurnout / 100, 0, 1) * 0.22) * 100),
      title: 'Throttle weekend workload to prevent execution decay',
      action: 'Keep weekends to low-cognitive maintenance tasks plus one bounded strategic block.',
      expectedImpact: 'Higher consistency and lower burnout-driven drop-offs.',
      urgency: profile.weekendBurnout >= 70 ? 'High' : 'Medium',
      confidence: 86,
      whatChanged: `Weekend burnout is ${profile.weekendBurnout}/100 and protection score is ${engine.weekendProtection}/100.`,
      whyNow: profile.weekendBurnout >= 70 ? 'Recovery debt compounds quickly and can erase weekday output quality.' : 'Energy is manageable now; guardrails keep it that way.',
      because: [
        `Weekend burnout is ${profile.weekendBurnout}/100.`,
        `Weekend protection score is ${engine.weekendProtection}/100.`,
        `Weekly hours are set to ${profile.weeklyHours}h.`,
      ],
      reviewAt: new Date(now + 3 * 24 * 60 * 60 * 1000).toISOString(),
    },
    {
      key: 'signal-freshness',
      weight: round(feedGap * 100),
      title: 'Refresh live feeds before making irreversible decisions',
      action: 'Run "Load live signals" and re-rank opportunities before next major commitment.',
      expectedImpact: 'Prevents stale-data bias in job and investment choices.',
      urgency: staleHours === null || staleHours >= 24 ? 'High' : 'Low',
      confidence: staleHours === null ? 58 : 72,
      whatChanged: staleHours === null ? 'No live signal refresh has been recorded yet.' : `Last refresh was ${round(staleHours)}h ago.`,
      whyNow: staleHours === null || staleHours >= 24 ? 'Signal quality has likely drifted beyond a reliable decision window.' : 'Feed is still reasonably fresh but should be checked before critical moves.',
      because: [
        staleHours === null ? 'Signals were never refreshed.' : `Last live refresh was ${round(staleHours)} hours ago.`,
        `${signals.jobs.length} jobs and ${signals.investments.length} investment signals are currently loaded.`,
      ],
      reviewAt: new Date(now + 12 * 60 * 60 * 1000).toISOString(),
    },
  ];
}

function rankRecommendations(drivers) {
  return clone(drivers)
    .sort((a, b) => b.weight - a.weight)
    .slice(0, 3)
    .map((driver) => ({
      title: driver.title,
      action: driver.action,
      description: driver.action,
      expectedImpact: driver.expectedImpact,
      urgency: driver.urgency,
      confidence: `${driver.confidence}%`,
      because: driver.because,
      whatChanged: driver.whatChanged,
      whyNow: driver.whyNow,
      expiresAt: driver.expiresAt || null,
      reviewAt: driver.reviewAt || null,
    }));
}

function generateBriefing(stateRef, engine) {
  const topOpps = clone(stateRef.opportunities)
    .sort((a, b) => (b.fit * 0.58 + b.upside * 0.42) - (a.fit * 0.58 + a.upside * 0.42));

  const weekendMode = stateRef.profile.weekendBurnout >= 65;
  const relevantJobs = getRelevantJobs(stateRef);
  const liveJob = relevantJobs[0];
  const liveInvestment = stateRef.signals.investments[0];
  const weakestArea = [
    { key: 'wealth', score: engine.wealthScore },
    { key: 'resilience', score: engine.resilienceScore },
    { key: 'career', score: engine.careerLeverageScore },
    { key: 'family', score: engine.familyScore },
  ].sort((a, b) => a.score - b.score)[0];
  const staleHours = stateRef.signals.lastUpdated
    ? round((Date.now() - new Date(stateRef.signals.lastUpdated).getTime()) / (1000 * 60 * 60))
    : null;
  const drivers = computeDrivers(engine, { ...stateRef.signals, relevantJobs }, stateRef.profile);
  const rankedRecommendations = rankRecommendations(drivers);

  return {
    today: rankedRecommendations,
    whyNow: [
      { title: 'Family runway pressure is real', detail: `Runway is ${round(engine.runway)} months. Child-related uncertainty makes liquidity timing critical.` },
      { title: 'Opportunity quality is concentrated', detail: `Top lane fit is ${topOpps[0].fit}/100; broad side-hustle exploration should stay deprioritized.` },
      { title: 'House horizon has a fixed date', detail: `${stateRef.profile.homeGoalYears}-year home objective requires consistent monthly discipline now.` },
      { title: 'Weakest system area today', detail: `${weakestArea.key} is currently lowest (${weakestArea.score}/100), so recommendations are biased to improve it first.` },
      { title: 'Feed freshness', detail: staleHours === null ? 'Live feeds were never loaded. Trigger refresh now.' : `Last live refresh was ${staleHours}h ago.` },
    ],
    narrative: [
      'Balanced mode means compounding wealth without adding family fragility.',
      'Primary engine: expert-led compensation growth. Safety engine: cash runway and workload limits.',
      `Current country leader is ${engine.topCountry.name}, treated as a testable hypothesis rather than final truth.`,
    ],
    checkpoints: [
      { title: 'Income concentration', detail: 'Are you still relying on one income stream only?' },
      { title: 'Weekend protection compliance', detail: weekendMode ? 'You are in strict low-energy mode. Avoid heavy tasks this weekend.' : 'Energy is acceptable. Use one bounded strategic session then stop.' },
      { title: 'Home fund path', detail: `Progress toward ${euros(stateRef.profile.targetHouseFund)} in ${stateRef.profile.homeGoalYears} years remains visible.` },
    ],
    wealthRecs: [
      { title: 'Increase automated investing when surplus remains positive for 3 months', detail: 'Use stability trigger rules instead of emotional timing.' },
      { title: 'Protect safety cash from house allocation drift', detail: 'Never compromise emergency runway for faster down-payment optics.' },
      { title: liveInvestment ? `Live investment watch: ${liveInvestment.title}` : 'No live investment feed item yet', detail: liveInvestment ? liveInvestment.detail : 'Load live signals to pull daily market momentum and risk sentiment inputs.' },
    ],
    familyRecs: [
      { title: 'Codify a weekend recovery protocol', detail: 'Pre-define low-energy tasks and a hard stop time for Saturday/Sunday.' },
      { title: 'Run one spouse-income micro-pilot per month', detail: 'Small predictable experiments beat large uncertain launches.' },
      { title: 'Maintain a visible one-year cash floor', detail: 'House plans and risk investments should be built above this floor.' },
    ],
    topOpps,
    opportunityRadar: topOpps.slice(0, 4).map((opp, index) => ({
      title: opp.title,
      detail: `${opp.why} Score ${round(opp.fit * 0.58 + opp.upside * 0.42)}/100.`,
      kicker: `${index + 1} • ${opp.type}`,
    })).concat(
      relevantJobs.slice(0, 2).map((job, index) => ({
        title: `Live role ${index + 1}: ${job.title}`,
        detail: `${job.detail} | Relevance ${job.relevance}`,
        kicker: 'Live jobs feed',
      })),
    ).concat(
      stateRef.signals.investments.slice(0, 2).map((asset, index) => ({
        title: `Live market signal ${index + 1}: ${asset.title}`,
        detail: asset.detail,
        kicker: 'Live investment feed',
      })),
    ),
  };
}

function getDirective(engine) {
  if (engine.weekendProtection < 45) {
    return {
      title: 'Energy protection first: avoid compounding burnout.',
      text: 'The dashboard is throttling ambition because overload destroys execution quality and family stability.',
      tags: ['Weekend guardrails', 'Family bandwidth', 'Sustainable pace'],
    };
  }
  if (engine.wealthScore < 60) {
    return {
      title: 'Stabilize surplus and house-fund cadence before aggressive upside.',
      text: 'Current profile rewards disciplined automation, focused income lanes, and reduced optional-spend leakage.',
      tags: ['Capital discipline', 'Lower downside', 'House horizon'],
    };
  }
  return {
    title: 'Convert expertise into higher income while preserving family resilience.',
    text: 'You can press for compensation growth through a focused combination of consultancy offers and high-fit analyst opportunities.',
    tags: ['Expertise-first', 'Balanced strategy', 'Compounding outputs'],
  };
}

function recommendationNode(rec) {
  const template = document.getElementById('recommendation-template');
  const node = template.content.cloneNode(true);
  node.querySelector('.rec-title').textContent = rec.title;
  node.querySelector('.rec-action').textContent = rec.action;
  node.querySelector('.rec-impact').textContent = rec.expectedImpact;
  node.querySelector('.rec-urgency').textContent = rec.urgency;
  node.querySelector('.confidence-pill').textContent = rec.confidence;
  node.querySelector('.rec-what-changed').textContent = rec.whatChanged;
  node.querySelector('.rec-why-now').textContent = rec.whyNow;
  const evidenceList = node.querySelector('.rec-evidence');
  evidenceList.innerHTML = '';
  (rec.because || []).forEach((evidence) => {
    const li = document.createElement('li');
    li.textContent = evidence;
    evidenceList.appendChild(li);
  });
  const reviewDate = rec.expiresAt || rec.reviewAt;
  node.querySelector('.rec-review').textContent = reviewDate
    ? new Date(reviewDate).toLocaleString()
    : 'Review in next planning cycle';
  return node;
}

function noteCard(item, kicker = '') {
  const article = document.createElement('article');
  article.className = 'note-card';
  article.innerHTML = `${kicker ? `<span class="note-kicker">${kicker}</span>` : ''}<h4>${item.title}</h4><p>${item.detail || ''}</p>`;
  return article;
}

function renderStack(container, items, renderer) {
  container.innerHTML = '';
  if (!items?.length) {
    container.innerHTML = '<p class="empty-state">Nothing to show yet.</p>';
    return;
  }
  items.forEach((item) => container.appendChild(renderer(item)));
}

function renderOverview(engine, briefing, changeItems) {
  const directive = getDirective(engine);
  E.primaryDirectiveTitle.textContent = directive.title;
  E.primaryDirectiveText.textContent = directive.text;
  E.directiveTags.innerHTML = directive.tags.map((tag) => `<span class="tag">${tag}</span>`).join('');

  E.wealthScore.textContent = engine.wealthScore;
  E.resilienceScore.textContent = engine.resilienceScore;
  E.locationScore.textContent = engine.topCountry.total;
  E.careerScore.textContent = engine.careerLeverageScore;
  E.compositeScore.textContent = engine.compositeScore;
  E.weekendProtectionScore.textContent = engine.weekendProtection;

  const degrees = Math.max(4, Math.round(engine.compositeScore * 3.6));
  E.compositeScoreRing.style.background = `conic-gradient(var(--accent) 0deg, var(--accent-2) ${degrees}deg, rgba(255,255,255,0.08) ${degrees}deg)`;

  renderStack(E.todayActions, briefing.today, recommendationNode);
  renderStack(E.whyNow, briefing.whyNow, (item) => noteCard(item, 'Why now'));
  renderStack(E.whatChanged, changeItems, (item) => noteCard(item, 'Change'));
  renderStack(E.threatList, state.threats, (item) => noteCard({ title: item.title, detail: item.note }, item.severity));
  renderStack(E.opportunityLanes, briefing.topOpps.slice(0, 3), (item) => noteCard({ title: item.title, detail: item.why }, item.type));
  renderStack(E.checkpointList, briefing.checkpoints, (item) => noteCard(item, 'Checkpoint'));
}

function renderHorizons(briefing) {
  const blocks = [
    { label: 'Today', items: briefing.today },
    { label: 'This week', items: [{ title: 'Package 3 paid offers from current expertise', description: 'Define clear outcomes, deliverables, and pricing anchors.' }] },
    { label: 'This month', items: [{ title: 'Publish one authority artifact', description: 'A brief, post, or demo that signals rare capability.' }] },
    { label: 'This year', items: [{ title: 'Build two income engines', description: 'Primary compensation upgrade + secondary expertise productized line.' }] },
    { label: '5 years', items: [{ title: 'Reach home-purchase decision with optionality', description: 'Hit target fund without eroding family safety buffers.' }] },
    { label: '10 years', items: [{ title: 'High-wealth and high-family-comfort position', description: 'Geographic flexibility, strong assets, and low stress dependency.' }] },
  ];

  E.horizonTimeline.innerHTML = '';
  blocks.forEach((block) => {
    const wrapper = document.createElement('div');
    wrapper.className = 'timeline-item';
    wrapper.innerHTML = `<h4>${block.label}</h4><p>${block.items[0].title}</p><p class="muted small" style="margin-top:8px;">${block.items[0].description}</p>`;
    E.horizonTimeline.appendChild(wrapper);
  });

  renderStack(E.strategyNarrative, briefing.narrative.map((text) => ({ title: 'Strategy view', detail: text })), (item) => noteCard(item, 'Narrative'));
}

function renderWealth(engine, briefing) {
  E.monthlySurplus.textContent = euros(engine.investableSurplus);
  E.houseFundProjection.textContent = euros(engine.houseProjection);
  E.tenYearAssets.textContent = euros(engine.tenYearAssets);

  E.surplusMeter.style.width = `${clamp((engine.investableSurplus / Math.max(state.profile.netIncome, 1)) * 100, 0, 100)}%`;
  E.houseMeter.style.width = `${clamp((engine.houseProjection / state.profile.targetHouseFund) * 100, 0, 100)}%`;
  E.assetMeter.style.width = `${clamp((engine.tenYearAssets / 400000) * 100, 0, 100)}%`;

  const rows = [
    { label: 'Safety reserve', pct: 30, value: state.profile.cashSavings * 0.3 },
    { label: 'Home fund', pct: 35, value: state.profile.cashSavings * 0.35 },
    { label: 'Long-term growth', pct: 25, value: state.profile.investments + state.profile.cashSavings * 0.12 },
    { label: 'Strategic opportunity', pct: 10, value: state.profile.cashSavings * 0.1 },
  ];

  E.capitalAllocation.innerHTML = rows.map((row) => `<div class="allocation-row"><p>${row.label}</p><div class="meter"><span style="width:${row.pct}%"></span></div><p>${euros(row.value)}</p></div>`).join('');
  renderStack(E.wealthRecommendations, briefing.wealthRecs, (item) => noteCard(item, 'Wealth'));
}

function renderLocation(engine) {
  E.countryComparison.innerHTML = engine.locationScores.map((country) => `
    <article class="country-card">
      <div>
        <h4 class="country-name">${country.name} ${country.type === 'priority' ? '<span class="inline-pill">Core</span>' : '<span class="inline-pill">Optional</span>'}</h4>
        <p class="country-meta">${country.notes}</p>
      </div>
      <div class="country-score-row">
        <div class="score-block"><span class="label">Total</span><span class="value">${country.total}</span></div>
        <div class="score-block"><span class="label">Family</span><span class="value">${country.familyStability}</span></div>
        <div class="score-block"><span class="label">Housing</span><span class="value">${country.affordability}</span></div>
        <div class="score-block"><span class="label">Upside</span><span class="value">${country.wealthUpside}</span></div>
      </div>
    </article>
  `).join('');

  E.locationRecommendation.innerHTML = '';
  E.locationRecommendation.appendChild(noteCard({ title: `${engine.topCountry.name} leads the current weighted model`, detail: `Lead is driven by balanced family stability and upside. Housing stress penalty applied: ${engine.topCountry.housingStressPenalty}.` }, 'Current leader'));
  E.locationRecommendation.appendChild(noteCard({ title: 'Belgium / France / US are always retained as anchors', detail: 'Two optional countries are for scenario testing, not replacing baseline references.' }, 'Model rule'));
}

function renderCareer() {
  renderStack(E.careerLanes, state.careerLanes, (item) => noteCard({ title: item.title, detail: `${item.action} Payoff: ${item.payoff}.` }, `Fit ${item.fit}`));
  const relevantJobs = getRelevantJobs(state);
  if (!relevantJobs.length) {
    E.jobWatchlist.innerHTML = '<p class="empty-state">No high-fit live jobs found yet. Feeds auto-refresh daily; click “Load live signals” to rescan now.</p>';
    return;
  }

  E.jobWatchlist.innerHTML = relevantJobs.slice(0, 8).map((item) => `
    <article class="note-card">
      <h4><a href="${item.url}" target="_blank" rel="noopener noreferrer">${item.title}</a></h4>
      <p>${item.detail}</p>
      <p class="note-meta">High-fit relevance: ${item.relevance}</p>
    </article>
  `).join('');
}

function renderFamily(engine, briefing) {
  E.runwayMonths.textContent = `${round(engine.runway)} mo`;
  E.spousePotential.textContent = engine.spousePotential;
  E.familyScore.textContent = engine.familyScore;

  renderStack(E.spouseIncomePaths, state.spouseIncomePaths, (item) => noteCard({ title: item.title, detail: `${item.why} Ramp: ${item.ramp}.` }, `Fit ${item.fit}`));
  renderStack(E.familyRecommendations, briefing.familyRecs, (item) => noteCard(item, 'Family'));

  E.weekendPolicy.innerHTML = '';
  E.weekendPolicy.appendChild(noteCard({ title: engine.weekendProtection < 45 ? 'Strict weekend recovery mode' : 'Managed weekend execution mode', detail: engine.weekendProtection < 45 ? 'Only low-cognitive tasks allowed. Max one strategic block per day.' : 'One bounded strategic block allowed, followed by full recovery time.' }, 'Protection logic'));
  E.weekendPolicy.appendChild(noteCard({ title: 'Why this exists', detail: 'Sustained weekend overload degrades career performance, partner support, and decision quality over the week.' }, 'Reasoning'));
}

function renderOpportunityRadar(briefing, engine) {
  renderStack(E.opportunityRadar, briefing.opportunityRadar, (item) => noteCard({ title: item.title, detail: item.detail }, item.kicker));
  E.opportunitySummary.innerHTML = '';
  E.opportunitySummary.appendChild(noteCard({ title: `Opportunity concentration score: ${engine.opportunityScore}/100`, detail: 'Concentration is intentional: fewer high-fit bets usually outperform many low-fit bets.' }, 'Signal'));
  const latestInvestment = state.signals.investments[0];
  E.opportunitySummary.appendChild(noteCard({
    title: latestInvestment ? `Today investment signal: ${latestInvestment.title}` : 'Investment signal unavailable',
    detail: latestInvestment ? latestInvestment.detail : 'No live investment item loaded yet. Daily automation will retry and you can refresh manually now.',
  }, 'Investment radar'));
}

function renderSignals() {
  E.weatherSignal.innerHTML = state.signals.weather
    ? ''
    : '<p class="empty-state">Click “Load live signals” to pull current weather data.</p>';
  if (state.signals.weather) E.weatherSignal.appendChild(noteCard({ title: state.signals.weather.city, detail: `${state.signals.weather.summary} | ${state.signals.weather.temp}°C | Wind ${state.signals.weather.wind} km/h` }, 'Open-Meteo'));

  if (state.signals.hazards.length) renderStack(E.hazardSignal, state.signals.hazards, (item) => noteCard(item, 'NASA EONET'));
  else E.hazardSignal.innerHTML = '<p class="empty-state">No live hazard feed loaded yet.</p>';

  if (state.signals.tech.length) renderStack(E.techSignal, state.signals.tech, (item) => noteCard(item, 'Hacker News'));
  else E.techSignal.innerHTML = '<p class="empty-state">No live tech signal loaded yet.</p>';

  const feedMetaEntries = Object.entries(state.signals.meta || {});
  if (!feedMetaEntries.length) {
    E.feedHealth.innerHTML = '<p class="empty-state">No feed health history yet. Run “Load live signals” first.</p>';
  } else {
    const now = Date.now();
    const statusClassMap = { healthy: 'status-live', stale: 'status-mock', failed: 'status-planned' };
    const statusLabelMap = { healthy: 'green', stale: 'yellow', failed: 'red' };
    E.feedHealth.innerHTML = feedMetaEntries
      .sort((a, b) => a[0].localeCompare(b[0]))
      .map(([feedId, meta]) => {
        const cadenceHours = Number(meta.refreshCadenceHours || 24);
        const ageMs = meta.lastSuccessAt ? Math.max(now - new Date(meta.lastSuccessAt).getTime(), 0) : null;
        const ageHours = ageMs === null ? null : round(ageMs / (1000 * 60 * 60));
        const isStale = ageHours !== null && ageHours > cadenceHours;
        const summary = ageHours === null ? 'No successful snapshot yet' : ageHours < 1 ? 'fresh (<1h)' : `${ageHours}h old`;
        const effectiveStatus = meta.status === 'failed' ? 'failed' : (isStale ? 'stale' : 'healthy');
        return `
          <article class="connector-card">
            <h4>${feedId}</h4>
            <p>${meta.category || 'general'} • ${meta.itemsCount || 0} items</p>
            <p>Data age: <strong>${summary}</strong>${isStale ? ' • <span class="stale-warning">stale over SLA</span>' : ''}</p>
            <p class="muted small">Latency ${meta.latencyMs || 'n/a'} ms${meta.errorSummary ? ` • ${meta.errorSummary}` : ''}</p>
            <span class="status ${statusClassMap[effectiveStatus] || 'status-planned'}">${statusLabelMap[effectiveStatus] || effectiveStatus}</span>
          </article>
        `;
      })
      .join('');
  }

  E.connectorStatus.innerHTML = state.connectors.map((item) => `<article class="connector-card"><h4>${item.name}</h4><p>${item.type}</p><p>${item.note}</p><span class="status ${item.status === 'live' ? 'status-live' : item.status === 'mock' ? 'status-mock' : 'status-planned'}">${item.status}</span></article>`).join('');
}

function renderSettings() {
  Object.entries(state.profile).forEach(([key, value]) => {
    const input = E.settingsForm.elements.namedItem(key);
    if (input) input.value = value;
  });

  E.weightControls.innerHTML = '';
  Object.entries(state.weights).forEach(([key, value]) => {
    const wrapper = document.createElement('div');
    wrapper.className = 'weight-row';
    wrapper.innerHTML = `<label>${key.charAt(0).toUpperCase() + key.slice(1)} weight: <span id="weight-value-${key}">${value}</span>%</label><input type="range" min="0" max="100" step="1" value="${value}" data-weight="${key}" />`;
    E.weightControls.appendChild(wrapper);
  });

  E.weightControls.querySelectorAll('input[type="range"]').forEach((input) => {
    input.addEventListener('input', (event) => {
      const key = event.target.dataset.weight;
      const value = Number(event.target.value);
      state.weights[key] = value;
      document.getElementById(`weight-value-${key}`).textContent = value;
      saveState();
      renderAll();
    });
  });

  const optionalIds = Object.keys(COUNTRY_LIBRARY).filter((id) => !['belgium', 'france', 'united-states'].includes(id));
  [E.comparisonCountry1, E.comparisonCountry2].forEach((select, index) => {
    select.innerHTML = optionalIds.map((id) => `<option value="${id}">${COUNTRY_LIBRARY[id].name}</option>`).join('');
    select.value = state.comparisonCountryIds[index] || optionalIds[index] || 'netherlands';
  });

  E.persistenceStamp.textContent = state.meta.lastSavedAt ? `Last saved: ${new Date(state.meta.lastSavedAt).toLocaleString()}` : 'No local save timestamp yet.';
  const activeRange = Number(state.meta.trendRangeDays || 30);
  E.trendRangeButtons.forEach((button) => button.classList.toggle('active', Number(button.dataset.range) === activeRange));
  E.trendMAToggle.checked = Boolean(state.meta.showMovingAverage ?? true);
}

function renderAll() {
  const engine = computeEngine(state);
  upsertDailySnapshot(engine);
  const briefing = generateBriefing(state, engine);
  const changeItems = computeChanges(engine, state.meta.lastEngine);

  renderOverview(engine, briefing, changeItems);
  renderHorizons(briefing);
  renderWealth(engine, briefing);
  renderLocation(engine);
  renderCareer();
  renderFamily(engine, briefing);
  renderOpportunityRadar(briefing, engine);
  renderTrends();
  renderSignals();
  renderSettings();

  E.dateStamp.textContent = new Date().toLocaleDateString();
  state.meta.lastEngine = {
    wealthScore: engine.wealthScore,
    resilienceScore: engine.resilienceScore,
    careerLeverageScore: engine.careerLeverageScore,
    familyScore: engine.familyScore,
    compositeScore: engine.compositeScore,
  };
  saveState();
}

function setupNavigation() {
  const navButtons = document.querySelectorAll('.nav-btn');
  navButtons.forEach((button) => {
    button.addEventListener('click', () => {
      navButtons.forEach((btn) => btn.classList.remove('active'));
      button.classList.add('active');
      document.querySelectorAll('.section').forEach((section) => section.classList.remove('visible'));
      document.getElementById(button.dataset.section).classList.add('visible');
      E.sectionTitle.textContent = button.textContent;
    });
  });
}

function setupForms() {
  E.settingsForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(E.settingsForm);
    Object.keys(state.profile).forEach((key) => {
      state.profile[key] = Number(formData.get(key));
    });
    state.comparisonCountryIds = [E.comparisonCountry1.value, E.comparisonCountry2.value].filter((value, index, arr) => value && arr.indexOf(value) === index).slice(0, 2);
    saveState();
    renderAll();
  });

  E.resetDefaults.addEventListener('click', () => {
    state = hydrateState({});
    saveState();
    renderAll();
  });

  E.exportState.addEventListener('click', () => {
    const blob = new Blob([JSON.stringify(state, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'strategic-life-dashboard-state.json';
    link.click();
    URL.revokeObjectURL(url);
  });

  E.importState.addEventListener('change', async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    try {
      const parsed = JSON.parse(await file.text());
      state = hydrateState(parsed);
      saveState();
      renderAll();
      alert('Dashboard state imported.');
    } catch (error) {
      console.error(error);
      alert('Import failed. Please use a valid exported JSON file.');
    }
  });
}

function setupActions() {
  E.refreshBriefing.addEventListener('click', () => renderAll());
  E.loadLiveSignals.addEventListener('click', refreshFeeds);
}

function setupTrendControls() {
  E.trendRangeButtons.forEach((button) => {
    button.addEventListener('click', () => {
      E.trendRangeButtons.forEach((node) => node.classList.remove('active'));
      button.classList.add('active');
      state.meta.trendRangeDays = Number(button.dataset.range);
      saveState();
      renderTrends();
    });
  });

  E.trendMAToggle.addEventListener('change', () => {
    state.meta.showMovingAverage = E.trendMAToggle.checked;
    saveState();
    renderTrends();
  });
}

function weatherCodeToText(code) {
  const map = { 0: 'Clear', 1: 'Mostly clear', 2: 'Partly cloudy', 3: 'Overcast', 45: 'Fog', 48: 'Rime fog', 51: 'Light drizzle', 53: 'Drizzle', 55: 'Dense drizzle', 61: 'Light rain', 63: 'Rain', 65: 'Heavy rain', 71: 'Light snow', 73: 'Snow', 75: 'Heavy snow', 80: 'Rain showers', 81: 'Showers', 82: 'Heavy showers', 95: 'Thunderstorm', 96: 'Thunderstorm with hail', 99: 'Severe thunderstorm with hail' };
  return map[code] || 'Mixed conditions';
}

async function loadLiveSignals() {
  return refreshFeeds();
}

const FEED_TIMEOUT_MS = 12000;

const feedRegistry = [
  {
    id: 'weather-open-meteo',
    category: 'weather',
    url: 'https://api.open-meteo.com/v1/forecast?latitude=50.85&longitude=4.35&current=temperature_2m,weather_code,wind_speed_10m&timezone=Europe%2FBerlin',
    refreshCadenceHours: 6,
    parser: (data) => ({ city: 'Brussels', temp: round(data.current.temperature_2m), wind: round(data.current.wind_speed_10m), summary: weatherCodeToText(data.current.weather_code) }),
    priority: 1,
    timeoutMs: 7000,
  },
  {
    id: 'hazards-eonet',
    category: 'hazards',
    url: 'https://eonet.gsfc.nasa.gov/api/v3/events?status=open&limit=5',
    refreshCadenceHours: 6,
    parser: (data) => (data.events || []).map((event) => ({
      title: event.title,
      detail: `${event.categories?.map((c) => c.title).join(', ') || 'Event'} | ${event.geometry?.[0]?.date ? new Date(event.geometry[0].date).toLocaleDateString() : 'Recent'}`,
    })),
    priority: 1,
    timeoutMs: FEED_TIMEOUT_MS,
    fallbackSources: ['hazards-usgs'],
  },
  {
    id: 'hazards-usgs',
    category: 'hazards',
    url: 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_day.geojson',
    refreshCadenceHours: 6,
    parser: (data) => (data.features || []).slice(0, 5).map((event) => ({
      title: event.properties?.title || 'USGS seismic event',
      detail: `Earthquake | Magnitude ${event.properties?.mag ?? 'n/a'} | ${event.properties?.place || 'Global'}`,
    })),
    priority: 2,
    timeoutMs: FEED_TIMEOUT_MS,
  },
  {
    id: 'tech-hackernews',
    category: 'tech',
    url: 'https://hacker-news.firebaseio.com/v0/topstories.json',
    refreshCadenceHours: 12,
    parser: async (ids = []) => {
      const stories = await Promise.all((ids || []).slice(0, 5).map((id) => fetchWithRetry(`https://hacker-news.firebaseio.com/v0/item/${id}.json`, { timeoutMs: FEED_TIMEOUT_MS, retries: 1 }).then((res) => res.json())));
      return stories.filter(Boolean).map((story) => ({ title: story.title, detail: `Score ${story.score || 0} | ${story.by || 'unknown'} | ${story.url || 'news.ycombinator.com'}` }));
    },
    priority: 1,
    timeoutMs: FEED_TIMEOUT_MS,
  },
  {
    id: 'jobs-reliefweb',
    category: 'jobs',
    url: 'https://api.reliefweb.int/v1/jobs?appname=strategic-life-dashboard&limit=8&sort[]=date:desc',
    refreshCadenceHours: 12,
    parser: (data) => (data.data || []).map((item) => ({
      title: item.fields?.title || 'ReliefWeb opportunity',
      detail: `ReliefWeb | ${item.fields?.country?.[0]?.name || 'Global'} | ${item.fields?.career_categories?.[0]?.name || 'Professional'}`,
      url: item.fields?.url || 'https://reliefweb.int/jobs',
    })),
    priority: 1,
    timeoutMs: FEED_TIMEOUT_MS,
    fallbackSources: ['jobs-arbeitnow', 'jobs-remotive'],
  },
  {
    id: 'jobs-arbeitnow',
    category: 'jobs',
    url: 'https://www.arbeitnow.com/api/job-board-api',
    refreshCadenceHours: 12,
    parser: (data) => (data.data || []).slice(0, 8).map((item) => ({
      title: item.title || 'Arbeitnow opportunity',
      detail: `Arbeitnow | ${item.company_name || 'Company'} | ${item.location || 'Remote'}`,
      url: item.url || 'https://www.arbeitnow.com/jobs',
    })),
    priority: 2,
    timeoutMs: FEED_TIMEOUT_MS,
    fallbackSources: ['jobs-reliefweb', 'jobs-remotive'],
  },
  {
    id: 'jobs-remotive',
    category: 'jobs',
    url: 'https://remotive.com/api/remote-jobs?limit=12',
    refreshCadenceHours: 12,
    parser: (data) => ((data.jobs || []).slice(0, 8)).map((item) => ({
      title: item.title || 'Remotive opportunity',
      detail: `Remotive | ${item.company_name || 'Company'} | ${item.candidate_required_location || 'Remote'}`,
      url: item.url || 'https://remotive.com/remote-jobs',
    })),
    priority: 3,
    timeoutMs: FEED_TIMEOUT_MS,
    fallbackSources: ['jobs-reliefweb', 'jobs-arbeitnow'],
  },
  {
    id: 'markets-fmp-gainers',
    category: 'investments',
    url: 'https://financialmodelingprep.com/api/v3/stock_market/gainers?apikey=demo',
    refreshCadenceHours: 8,
    parser: (data) => (Array.isArray(data) ? data.slice(0, 5) : []).map((item) => ({
      title: `${item.ticker || item.symbol || 'Ticker'} (${item.changesPercentage || 'n/a'})`,
      detail: `Top gainer | Price ${item.price || 'n/a'} | Volume ${item.volume || 'n/a'}`,
    })),
    priority: 1,
    timeoutMs: FEED_TIMEOUT_MS,
    fallbackSources: ['markets-fear-greed'],
  },
  {
    id: 'markets-fear-greed',
    category: 'investments',
    url: 'https://api.alternative.me/fng/?limit=1',
    refreshCadenceHours: 8,
    parser: (data) => {
      const latest = data?.data?.[0];
      if (!latest) return [];
      return [{ title: `Fear & Greed: ${latest.value} (${latest.value_classification})`, detail: 'Use as a risk pacing signal, not a stand-alone investment decision trigger.' }];
    },
    priority: 2,
    timeoutMs: FEED_TIMEOUT_MS,
    fallbackSources: ['markets-fmp-gainers'],
  },
];

function shortError(error) {
  return (error?.message || 'Unknown error').slice(0, 120);
}

async function fetchWithRetry(url, { timeoutMs = FEED_TIMEOUT_MS, retries = 1 } = {}) {
  let lastError;
  for (let attempt = 0; attempt <= retries; attempt += 1) {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), timeoutMs);
    try {
      const response = await fetch(url, { signal: controller.signal });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      clearTimeout(timeout);
      return response;
    } catch (error) {
      clearTimeout(timeout);
      lastError = error;
      if (attempt === retries) throw lastError;
    }
  }
  throw lastError;
}

async function refreshFeeds() {
  const original = E.loadLiveSignals.textContent;
  E.loadLiveSignals.textContent = 'Loading...';
  E.loadLiveSignals.disabled = true;

  try {
    const nowIso = new Date().toISOString();
    const categoryBuckets = {};
    const registryById = Object.fromEntries(feedRegistry.map((feed) => [feed.id, feed]));
    const sortedFeeds = [...feedRegistry].sort((a, b) => a.priority - b.priority);

    await Promise.all(sortedFeeds.map(async (feed) => {
      const attemptAt = new Date().toISOString();
      const startedAt = performance.now();
      const previousMeta = state.signals.meta[feed.id] || {};
      try {
        const response = await fetchWithRetry(feed.url, { timeoutMs: feed.timeoutMs, retries: 1 });
        const json = await response.json();
        const parsed = await feed.parser(json);
        const itemsCount = Array.isArray(parsed) ? parsed.length : (parsed ? 1 : 0);
        const latencyMs = round(performance.now() - startedAt);
        state.signals.meta[feed.id] = {
          ...previousMeta,
          category: feed.category,
          refreshCadenceHours: feed.refreshCadenceHours,
          lastAttemptAt: attemptAt,
          lastSuccessAt: new Date().toISOString(),
          status: 'healthy',
          errorSummary: null,
          itemsCount,
          latencyMs,
        };
        categoryBuckets[feed.category] = categoryBuckets[feed.category] || [];
        categoryBuckets[feed.category].push({ feedId: feed.id, priority: feed.priority, payload: parsed, itemsCount });
      } catch (error) {
        const latencyMs = round(performance.now() - startedAt);
        const lastSuccessAt = previousMeta.lastSuccessAt || null;
        state.signals.meta[feed.id] = {
          ...previousMeta,
          category: feed.category,
          refreshCadenceHours: feed.refreshCadenceHours,
          lastAttemptAt: attemptAt,
          lastSuccessAt,
          status: 'failed',
          errorSummary: shortError(error),
          itemsCount: previousMeta.itemsCount || 0,
          latencyMs,
        };
      }
    }));

    const chooseCategoryPayload = (category, previousValue) => {
      const successful = (categoryBuckets[category] || []).filter((entry) => entry.itemsCount > 0).sort((a, b) => a.priority - b.priority);
      if (!successful.length) return previousValue;
      if (category === 'weather') return successful[0].payload;
      return successful.flatMap((entry) => (Array.isArray(entry.payload) ? entry.payload : [entry.payload]));
    };

    const feedFailed = (feedId) => (state.signals.meta[feedId]?.status === 'failed');
    Object.values(registryById).forEach((feed) => {
      if (!feed.fallbackSources || !feed.fallbackSources.length || !feedFailed(feed.id)) return;
      const fallbackHealthy = feed.fallbackSources.some((fallbackId) => state.signals.meta[fallbackId]?.status === 'healthy');
      if (fallbackHealthy) state.signals.meta[feed.id].status = 'stale';
    });

    state.signals.weather = chooseCategoryPayload('weather', state.signals.weather);
    state.signals.hazards = chooseCategoryPayload('hazards', state.signals.hazards) || [];
    state.signals.tech = chooseCategoryPayload('tech', state.signals.tech) || [];
    state.signals.jobs = chooseCategoryPayload('jobs', state.signals.jobs).slice(0, 14);
    state.signals.investments = chooseCategoryPayload('investments', state.signals.investments).slice(0, 8);
    state.signals.lastUpdated = nowIso;

    const staleCutoff = (hours) => Date.now() - (hours * 60 * 60 * 1000);
    Object.entries(state.signals.meta).forEach(([feedId, meta]) => {
      if (!meta.lastSuccessAt || meta.status === 'failed') return;
      if (new Date(meta.lastSuccessAt).getTime() < staleCutoff(meta.refreshCadenceHours || 24)) {
        state.signals.meta[feedId] = { ...meta, status: 'stale' };
      }
    });
    state.signals.lastUpdated = new Date().toISOString();
    saveState();
    renderAll();
  } catch (error) {
    console.error(error);
    alert('Some live signals failed to load. Existing data was preserved.');
  } finally {
    E.loadLiveSignals.textContent = original;
    E.loadLiveSignals.disabled = false;
  }
}

function needsDailyRefresh(lastUpdated) {
  if (!lastUpdated) return true;
  const ageMs = Date.now() - new Date(lastUpdated).getTime();
  return ageMs >= 24 * 60 * 60 * 1000;
}

function setupDailyAutomation() {
  if (needsDailyRefresh(state.signals.lastUpdated)) loadLiveSignals();
  setInterval(() => {
    if (needsDailyRefresh(state.signals.lastUpdated)) refreshFeeds();
  }, 60 * 60 * 1000);
}

function cacheElements() {
  Object.assign(E, {
    sectionTitle: document.getElementById('section-title'),
    dateStamp: document.getElementById('date-stamp'),
    refreshBriefing: document.getElementById('refresh-briefing'),
    loadLiveSignals: document.getElementById('load-live-signals'),
    exportState: document.getElementById('export-state'),

    primaryDirectiveTitle: document.getElementById('primary-directive-title'),
    primaryDirectiveText: document.getElementById('primary-directive-text'),
    directiveTags: document.getElementById('directive-tags'),
    compositeScore: document.getElementById('composite-score'),
    compositeScoreRing: document.getElementById('composite-score-ring'),
    wealthScore: document.getElementById('wealth-score'),
    resilienceScore: document.getElementById('resilience-score'),
    locationScore: document.getElementById('location-score'),
    careerScore: document.getElementById('career-score'),
    weekendProtectionScore: document.getElementById('weekend-protection-score'),

    todayActions: document.getElementById('today-actions'),
    whyNow: document.getElementById('why-now'),
    whatChanged: document.getElementById('what-changed'),
    threatList: document.getElementById('threat-list'),
    opportunityLanes: document.getElementById('opportunity-lanes'),
    checkpointList: document.getElementById('checkpoint-list'),

    horizonTimeline: document.getElementById('horizon-timeline'),
    strategyNarrative: document.getElementById('strategy-narrative'),

    monthlySurplus: document.getElementById('monthly-surplus'),
    houseFundProjection: document.getElementById('house-fund-projection'),
    tenYearAssets: document.getElementById('ten-year-assets'),
    surplusMeter: document.getElementById('surplus-meter'),
    houseMeter: document.getElementById('house-meter'),
    assetMeter: document.getElementById('asset-meter'),
    capitalAllocation: document.getElementById('capital-allocation'),
    wealthRecommendations: document.getElementById('wealth-recommendations'),

    countryComparison: document.getElementById('country-comparison'),
    locationRecommendation: document.getElementById('location-recommendation'),

    careerLanes: document.getElementById('career-lanes'),
    jobWatchlist: document.getElementById('job-watchlist'),

    runwayMonths: document.getElementById('runway-months'),
    spousePotential: document.getElementById('spouse-potential'),
    familyScore: document.getElementById('family-score'),
    spouseIncomePaths: document.getElementById('spouse-income-paths'),
    familyRecommendations: document.getElementById('family-recommendations'),
    weekendPolicy: document.getElementById('weekend-policy'),

    opportunityRadar: document.getElementById('opportunity-radar-list'),
    opportunitySummary: document.getElementById('opportunity-summary'),

    weatherSignal: document.getElementById('weather-signal'),
    hazardSignal: document.getElementById('hazard-signal'),
    techSignal: document.getElementById('tech-signal'),
    feedHealth: document.getElementById('feed-health'),
    connectorStatus: document.getElementById('connector-status'),

    settingsForm: document.getElementById('settings-form'),
    resetDefaults: document.getElementById('reset-defaults'),
    importState: document.getElementById('import-state'),
    weightControls: document.getElementById('weight-controls'),
    comparisonCountry1: document.getElementById('comparison-country-1'),
    comparisonCountry2: document.getElementById('comparison-country-2'),
    persistenceStamp: document.getElementById('persistence-stamp'),
    scoreTrendsChart: document.getElementById('score-trends-chart'),
    runwayHouseChart: document.getElementById('runway-house-chart'),
    burnoutLoadChart: document.getElementById('burnout-load-chart'),
    jobsApplicationsChart: document.getElementById('jobs-applications-chart'),
    trendRangeButtons: document.querySelectorAll('.trend-range-btn'),
    trendMAToggle: document.getElementById('trend-ma-toggle'),
    trendCharts: {},
  });
}

function init() {
  cacheElements();
  setupNavigation();
  setupForms();
  setupActions();
  setupTrendControls();
  setupDailyAutomation();
  renderAll();
}

init();
