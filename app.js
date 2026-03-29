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
  signals: { weather: null, hazards: [], tech: [], jobs: [], investments: [], lastUpdated: null },
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
  meta: { lastEngine: null, lastSavedAt: null },
  scenarioLab: {
    assumptions: {
      salaryDeltaPct: 0,
      spouseActivationMonths: 12,
      childCostDelta: 350,
      housingPriceShockPct: 0,
      housingRateShockPct: 0,
      relocationCountryId: 'belgium',
    },
    saved: [],
  },
};

const E = {};

const clone = (obj) => JSON.parse(JSON.stringify(obj));
const round = (v) => Math.round(v);
const clamp = (v, min, max) => Math.min(Math.max(v, min), max);
const avg = (values) => (values.length ? values.reduce((a, b) => a + b, 0) / values.length : 0);
const euros = (value) => new Intl.NumberFormat('en-IE', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(value);

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
    meta: { ...clone(DEFAULT_STATE.meta), ...(parsed.meta || {}) },
    scenarioLab: {
      assumptions: { ...clone(DEFAULT_STATE.scenarioLab.assumptions), ...(parsed.scenarioLab?.assumptions || {}) },
      saved: Array.isArray(parsed.scenarioLab?.saved) ? parsed.scenarioLab.saved : clone(DEFAULT_STATE.scenarioLab.saved),
    },
  };

  merged.comparisonCountryIds = Array.isArray(parsed.comparisonCountryIds) ? parsed.comparisonCountryIds : clone(DEFAULT_STATE.comparisonCountryIds);
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

function strategicPostureFromMetrics(scenario) {
  if (scenario.runwayFloorMonths < 9 || scenario.houseFundProbabilityBand === 'Low') return 'Defensive: preserve cash, reduce optional burn, delay major commitments.';
  if (scenario.houseFundProbabilityBand === 'High' && scenario.outcomes.y10 >= scenario.outcomes.y5 * 1.7) return 'Offensive: accelerate investing, lock in high-upside career and location moves.';
  return 'Balanced: keep steady contributions, test spouse-income ramp, and stage housing timing.';
}

function computeScenarioOutcome(stateRef, assumptions, name = 'Scenario') {
  const profile = stateRef.profile;
  const relocationCountry = COUNTRY_LIBRARY[assumptions.relocationCountryId] || COUNTRY_LIBRARY.belgium;
  const relocatedEssentials = profile.essentialCosts * (1 + (55 - relocationCountry.affordability) / 240);
  const adjustedNetIncome = profile.netIncome * (1 + assumptions.salaryDeltaPct / 100);
  const adjustedEssentials = Math.max(0, relocatedEssentials + assumptions.childCostDelta);
  const monthlyRate = (profile.expectedReturnPct / 100) / 12;
  let assets = profile.cashSavings + profile.investments;
  let runwayFloorMonths = Number.POSITIVE_INFINITY;
  const yearlyOutcomes = {};

  for (let month = 1; month <= 120; month += 1) {
    const spouseIncome = month > assumptions.spouseActivationMonths ? profile.spouseIncomeTarget : 0;
    const monthlySurplus = adjustedNetIncome + spouseIncome - adjustedEssentials - profile.strategicSpending;
    assets = assets * (1 + monthlyRate) + monthlySurplus;
    const burn = Math.max(adjustedEssentials + profile.strategicSpending - spouseIncome, 1);
    runwayFloorMonths = Math.min(runwayFloorMonths, assets / burn);
    if (month === 12) yearlyOutcomes.y1 = assets;
    if (month === 60) yearlyOutcomes.y5 = assets;
    if (month === 120) yearlyOutcomes.y10 = assets;
  }

  const adjustedTargetHouse = profile.targetHouseFund * (1 + assumptions.housingPriceShockPct / 100) * (1 + assumptions.housingRateShockPct / 250);
  const houseCoverage = yearlyOutcomes.y5 / Math.max(adjustedTargetHouse, 1);
  const houseFundProbabilityBand = houseCoverage >= 1.15 ? 'High' : houseCoverage >= 0.85 ? 'Medium' : 'Low';

  const scenario = {
    name,
    assumptions: clone(assumptions),
    relocationCountry: relocationCountry.name,
    outcomes: yearlyOutcomes,
    runwayFloorMonths: Math.max(0, runwayFloorMonths),
    houseFundProbabilityBand,
  };
  scenario.strategicPosture = strategicPostureFromMetrics(scenario);
  return scenario;
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
    locationScores,
    topCountry,
    familyScore,
    compositeScore,
  };
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

  return {
    today: [
      { title: 'Ship one high-value output in your strongest lane', meta: 'Income leverage | Expertise-first', description: `Prioritize ${topOpps[0].title.toLowerCase()} and complete one concrete output (proposal, brief, or targeted application).`, payoff: 'High leverage', risk: 'Low risk', time: '45-60 min', confidence: 'High' },
      {
        title: liveJob ? `Apply or outreach to this live role: ${liveJob.title}` : 'No live role captured yet: run manual job scan now',
        meta: 'Career watch | Live feed',
        description: liveJob ? `${liveJob.detail}. Use this as your first concrete career action today.` : 'Trigger “Load live signals” and shortlist one role with clear fit before ending the day.',
        payoff: 'Career acceleration',
        risk: 'Low risk',
        time: '20-30 min',
        confidence: liveJob ? 'High' : 'Medium',
      },
      { title: weekendMode ? 'Weekend protection ON: run low-cognitive tasks only' : 'Weekend protection OFF: one medium push is allowed', meta: 'Energy protocol', description: weekendMode ? 'Burnout is elevated, so this engine is protecting recovery. Keep weekend execution to admin, maintenance, and setup tasks.' : 'Energy load is acceptable. Add one medium-effort strategic task, then hard-stop.', payoff: 'Burnout control', risk: 'Low risk', time: '20-40 min', confidence: 'High' },
    ],
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
  node.querySelector('.rec-meta').textContent = rec.meta;
  node.querySelector('.rec-description').textContent = rec.description;
  node.querySelector('.confidence-pill').textContent = rec.confidence;
  node.querySelector('.rec-payoff').textContent = rec.payoff;
  node.querySelector('.rec-risk').textContent = rec.risk;
  node.querySelector('.rec-time').textContent = rec.time;
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

  E.connectorStatus.innerHTML = state.connectors.map((item) => `<article class="connector-card"><h4>${item.name}</h4><p>${item.type}</p><p>${item.note}</p><span class="status ${item.status === 'live' ? 'status-live' : item.status === 'mock' ? 'status-mock' : 'status-planned'}">${item.status}</span></article>`).join('');
}

function renderScenarioLab() {
  const assumptions = state.scenarioLab.assumptions;
  Object.entries(assumptions).forEach(([key, value]) => {
    const input = E.scenarioForm.elements.namedItem(key);
    if (input) input.value = value;
  });

  const active = computeScenarioOutcome(state, assumptions, 'Current scenario');
  E.scenarioOutcomeCards.innerHTML = `
    <article class="note-card"><h4>1 year</h4><p>${euros(active.outcomes.y1)}</p></article>
    <article class="note-card"><h4>5 years</h4><p>${euros(active.outcomes.y5)}</p></article>
    <article class="note-card"><h4>10 years</h4><p>${euros(active.outcomes.y10)}</p></article>
    <article class="note-card"><h4>Runway floor</h4><p>${active.runwayFloorMonths.toFixed(1)} months</p></article>
    <article class="note-card"><h4>House-fund probability</h4><p>${active.houseFundProbabilityBand}</p></article>
    <article class="note-card"><h4>Recommended posture</h4><p>${active.strategicPosture}</p></article>
  `;

  const baseline = computeScenarioOutcome(state, clone(DEFAULT_STATE.scenarioLab.assumptions), 'Baseline');
  const scenarios = [baseline, ...state.scenarioLab.saved];
  E.scenarioComparison.innerHTML = `
    <table class="scenario-table">
      <thead>
        <tr>
          <th>Scenario</th><th>Relocation</th><th>1y</th><th>5y</th><th>10y</th><th>Runway floor</th><th>House band</th><th>Posture</th><th></th>
        </tr>
      </thead>
      <tbody>
        ${scenarios.map((scenario, index) => `
          <tr>
            <td>${scenario.name}</td>
            <td>${scenario.relocationCountry}</td>
            <td>${euros(scenario.outcomes.y1)}</td>
            <td>${euros(scenario.outcomes.y5)}</td>
            <td>${euros(scenario.outcomes.y10)}</td>
            <td>${scenario.runwayFloorMonths.toFixed(1)} mo</td>
            <td>${scenario.houseFundProbabilityBand}</td>
            <td>${scenario.strategicPosture}</td>
            <td>${index > 0 ? `<button class="btn btn-secondary btn-inline" data-delete-scenario="${index - 1}">Delete</button>` : ''}</td>
          </tr>
        `).join('')}
      </tbody>
    </table>
  `;
  E.scenarioComparison.querySelectorAll('[data-delete-scenario]').forEach((button) => {
    button.addEventListener('click', () => {
      const index = Number(button.dataset.deleteScenario);
      state.scenarioLab.saved.splice(index, 1);
      saveState();
      renderAll();
    });
  });
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
}

function renderAll() {
  const engine = computeEngine(state);
  const briefing = generateBriefing(state, engine);
  const changeItems = computeChanges(engine, state.meta.lastEngine);

  renderOverview(engine, briefing, changeItems);
  renderHorizons(briefing);
  renderWealth(engine, briefing);
  renderLocation(engine);
  renderCareer();
  renderFamily(engine, briefing);
  renderOpportunityRadar(briefing, engine);
  renderSignals();
  renderScenarioLab();
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

  E.scenarioForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(E.scenarioForm);
    Object.keys(state.scenarioLab.assumptions).forEach((key) => {
      const value = formData.get(key);
      state.scenarioLab.assumptions[key] = key === 'relocationCountryId' ? value : Number(value);
    });
    saveState();
    renderAll();
  });

  E.saveScenario.addEventListener('click', () => {
    const name = E.scenarioName.value.trim();
    if (!name) {
      alert('Name the scenario before saving.');
      return;
    }
    const scenario = computeScenarioOutcome(state, state.scenarioLab.assumptions, name);
    state.scenarioLab.saved = [scenario, ...state.scenarioLab.saved.filter((item) => item.name !== name)].slice(0, 8);
    E.scenarioName.value = '';
    saveState();
    renderAll();
  });
}

function setupActions() {
  E.refreshBriefing.addEventListener('click', () => renderAll());
  E.loadLiveSignals.addEventListener('click', loadLiveSignals);
}

function weatherCodeToText(code) {
  const map = { 0: 'Clear', 1: 'Mostly clear', 2: 'Partly cloudy', 3: 'Overcast', 45: 'Fog', 48: 'Rime fog', 51: 'Light drizzle', 53: 'Drizzle', 55: 'Dense drizzle', 61: 'Light rain', 63: 'Rain', 65: 'Heavy rain', 71: 'Light snow', 73: 'Snow', 75: 'Heavy snow', 80: 'Rain showers', 81: 'Showers', 82: 'Heavy showers', 95: 'Thunderstorm', 96: 'Thunderstorm with hail', 99: 'Severe thunderstorm with hail' };
  return map[code] || 'Mixed conditions';
}

async function loadLiveSignals() {
  const original = E.loadLiveSignals.textContent;
  E.loadLiveSignals.textContent = 'Loading...';
  E.loadLiveSignals.disabled = true;

  try {
    const weatherPromise = fetch('https://api.open-meteo.com/v1/forecast?latitude=50.85&longitude=4.35&current=temperature_2m,weather_code,wind_speed_10m&timezone=Europe%2FBerlin')
      .then((res) => { if (!res.ok) throw new Error('Weather request failed'); return res.json(); })
      .then((data) => ({ city: 'Brussels', temp: round(data.current.temperature_2m), wind: round(data.current.wind_speed_10m), summary: weatherCodeToText(data.current.weather_code) }));

    const hazardPromise = fetch('https://eonet.gsfc.nasa.gov/api/v3/events?status=open&limit=5')
      .then((res) => { if (!res.ok) throw new Error('Hazard request failed'); return res.json(); })
      .then((data) => (data.events || []).map((event) => ({
        title: event.title,
        detail: `${event.categories?.map((c) => c.title).join(', ') || 'Event'} | ${event.geometry?.[0]?.date ? new Date(event.geometry[0].date).toLocaleDateString() : 'Recent'}`,
      })));

    const techPromise = fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
      .then((res) => { if (!res.ok) throw new Error('HN request failed'); return res.json(); })
      .then(async (ids) => {
        const stories = await Promise.all(ids.slice(0, 5).map((id) => fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then((res) => res.json())));
        return stories.filter(Boolean).map((story) => ({ title: story.title, detail: `Score ${story.score || 0} | ${story.by || 'unknown'} | ${story.url || 'news.ycombinator.com'}` }));
      });

    const reliefWebPromise = fetch('https://api.reliefweb.int/v1/jobs?appname=strategic-life-dashboard&limit=8&sort[]=date:desc')
      .then((res) => { if (!res.ok) throw new Error('ReliefWeb request failed'); return res.json(); })
      .then((data) => (data.data || []).map((item) => ({
        title: item.fields?.title || 'ReliefWeb opportunity',
        detail: `ReliefWeb | ${item.fields?.country?.[0]?.name || 'Global'} | ${item.fields?.career_categories?.[0]?.name || 'Professional'}`,
        url: item.fields?.url || 'https://reliefweb.int/jobs',
      })));

    const arbeitnowPromise = fetch('https://www.arbeitnow.com/api/job-board-api')
      .then((res) => { if (!res.ok) throw new Error('Arbeitnow request failed'); return res.json(); })
      .then((data) => (data.data || []).slice(0, 8).map((item) => ({
        title: item.title || 'Arbeitnow opportunity',
        detail: `Arbeitnow | ${item.company_name || 'Company'} | ${item.location || 'Remote'}`,
        url: item.url || 'https://www.arbeitnow.com/jobs',
      })));

    const remotivePromise = fetch('https://remotive.com/api/remote-jobs?limit=12')
      .then((res) => { if (!res.ok) throw new Error('Remotive request failed'); return res.json(); })
      .then((data) => ((data.jobs || []).slice(0, 8)).map((item) => ({
        title: item.title || 'Remotive opportunity',
        detail: `Remotive | ${item.company_name || 'Company'} | ${item.candidate_required_location || 'Remote'}`,
        url: item.url || 'https://remotive.com/remote-jobs',
      })));

    const marketGainersPromise = fetch('https://financialmodelingprep.com/api/v3/stock_market/gainers?apikey=demo')
      .then((res) => { if (!res.ok) throw new Error('FMP gainers request failed'); return res.json(); })
      .then((data) => (Array.isArray(data) ? data.slice(0, 5) : []).map((item) => ({
        title: `${item.ticker || item.symbol || 'Ticker'} (${item.changesPercentage || 'n/a'})`,
        detail: `Top gainer | Price ${item.price || 'n/a'} | Volume ${item.volume || 'n/a'}`,
      })));

    const fearGreedPromise = fetch('https://api.alternative.me/fng/?limit=1')
      .then((res) => { if (!res.ok) throw new Error('Fear/Greed request failed'); return res.json(); })
      .then((data) => {
        const latest = data?.data?.[0];
        if (!latest) return [];
        return [{
          title: `Fear & Greed: ${latest.value} (${latest.value_classification})`,
          detail: 'Use as a risk pacing signal, not a stand-alone investment decision trigger.',
        }];
      });

    const [weatherResult, hazardResult, techResult, reliefWebResult, arbeitnowResult, remotiveResult, marketGainersResult, fearGreedResult] = await Promise.allSettled([
      weatherPromise,
      hazardPromise,
      techPromise,
      reliefWebPromise,
      arbeitnowPromise,
      remotivePromise,
      marketGainersPromise,
      fearGreedPromise,
    ]);
    if (weatherResult.status === 'fulfilled') state.signals.weather = weatherResult.value;
    if (hazardResult.status === 'fulfilled') state.signals.hazards = hazardResult.value;
    if (techResult.status === 'fulfilled') state.signals.tech = techResult.value;
    const liveJobs = [
      ...(reliefWebResult.status === 'fulfilled' ? reliefWebResult.value : []),
      ...(arbeitnowResult.status === 'fulfilled' ? arbeitnowResult.value : []),
      ...(remotiveResult.status === 'fulfilled' ? remotiveResult.value : []),
    ];
    state.signals.jobs = liveJobs.slice(0, 14);
    const liveInvestments = [
      ...(marketGainersResult.status === 'fulfilled' ? marketGainersResult.value : []),
      ...(fearGreedResult.status === 'fulfilled' ? fearGreedResult.value : []),
    ];
    state.signals.investments = liveInvestments.slice(0, 8);

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
    if (needsDailyRefresh(state.signals.lastUpdated)) loadLiveSignals();
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
    connectorStatus: document.getElementById('connector-status'),

    settingsForm: document.getElementById('settings-form'),
    resetDefaults: document.getElementById('reset-defaults'),
    importState: document.getElementById('import-state'),
    weightControls: document.getElementById('weight-controls'),
    comparisonCountry1: document.getElementById('comparison-country-1'),
    comparisonCountry2: document.getElementById('comparison-country-2'),
    persistenceStamp: document.getElementById('persistence-stamp'),
    scenarioForm: document.getElementById('scenario-form'),
    scenarioName: document.getElementById('scenario-name'),
    saveScenario: document.getElementById('save-scenario'),
    scenarioOutcomeCards: document.getElementById('scenario-outcome-cards'),
    scenarioComparison: document.getElementById('scenario-comparison'),
  });
}

function init() {
  cacheElements();
  setupNavigation();
  setupForms();
  setupActions();
  setupDailyAutomation();
  renderAll();
}

init();
