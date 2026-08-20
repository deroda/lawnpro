/**
 * TurfTrack Pro - Sports Turf Monitor & Pitch Clipping Volume Engine
 */

// Initial Seed Data provided directly in user request
const SEED_DATA = [
  // Pitch 1 Entries
  { id: 'p1-1', date: '2026-07-16', pitch: 'Pitch 1', direction: 'Width', left: 3.0, center: 2.0, right: 3.0 },
  { id: 'p1-2', date: '2026-07-17', pitch: 'Pitch 1', direction: 'Length', left: 5.0, center: 2.0, right: 3.0 },
  { id: 'p1-3', date: '2026-07-18', pitch: 'Pitch 1', direction: 'Width', left: 4.0, center: 2.0, right: 3.0 },
  { id: 'p1-4', date: '2026-07-19', pitch: 'Pitch 1', direction: 'Length', left: 5.0, center: 3.0, right: 3.0 },
  { id: 'p1-5', date: '2026-07-20', pitch: 'Pitch 1', direction: 'Width', left: 4.0, center: 5.0, right: 6.0 },
  { id: 'p1-6', date: '2026-07-21', pitch: 'Pitch 1', direction: 'Length', left: 4.0, center: 5.0, right: 6.0 },
  { id: 'p1-7', date: '2026-07-22', pitch: 'Pitch 1', direction: 'Width', left: 4.0, center: 3.0, right: 5.0 },
  { id: 'p1-8', date: '2026-07-23', pitch: 'Pitch 1', direction: 'Length', left: 4.0, center: 3.0, right: 5.0 },
  { id: 'p1-9', date: '2026-07-24', pitch: 'Pitch 1', direction: 'None', left: 0, center: 0, right: 0 },
  { id: 'p1-10', date: '2026-07-25', pitch: 'Pitch 1', direction: 'None', left: 0, center: 0, right: 0 },
  { id: 'p1-11', date: '2026-07-26', pitch: 'Pitch 1', direction: 'Width', left: 11.0, center: 9.0, right: 8.0 },
  { id: 'p1-12', date: '2026-07-27', pitch: 'Pitch 1', direction: 'Width', left: 8.0, center: 7.0, right: 7.0 },
  { id: 'p1-13', date: '2026-07-28', pitch: 'Pitch 1', direction: 'None', left: 0, center: 0, right: 0 },
  { id: 'p1-14', date: '2026-07-29', pitch: 'Pitch 1', direction: 'None', left: 0, center: 0, right: 0 },
  { id: 'p1-15', date: '2026-07-30', pitch: 'Pitch 1', direction: 'Length', left: 13.0, center: 13.0, right: 15.0 },
  { id: 'p1-16', date: '2026-07-31', pitch: 'Pitch 1', direction: 'Width', left: 9.0, center: 8.0, right: 11.0 },
  { id: 'p1-17', date: '2026-08-01', pitch: 'Pitch 1', direction: 'Width', left: 10.0, center: 10.0, right: 12.0 },
  { id: 'p1-18', date: '2026-08-02', pitch: 'Pitch 1', direction: 'Width', left: 10.0, center: 10.0, right: 15.0 },
  { id: 'p1-19', date: '2026-08-03', pitch: 'Pitch 1', direction: 'Length', left: 16.0, center: 16.0, right: 22.0 },
  { id: 'p1-20', date: '2026-08-04', pitch: 'Pitch 1', direction: 'Length', left: 12.0, center: 13.0, right: 16.0 },
  { id: 'p1-21', date: '2026-08-05', pitch: 'Pitch 1', direction: 'Length', left: 7.0, center: 8.0, right: 8.0 },

  // Pitch 2 Entries
  { id: 'p2-1', date: '2026-07-16', pitch: 'Pitch 2', direction: 'None', left: 0, center: 0, right: 0 },
  { id: 'p2-2', date: '2026-07-17', pitch: 'Pitch 2', direction: 'None', left: 0, center: 0, right: 0 },
  { id: 'p2-3', date: '2026-07-18', pitch: 'Pitch 2', direction: 'Width', left: 4.0, center: 3.0, right: 4.0 },
  { id: 'p2-4', date: '2026-07-19', pitch: 'Pitch 2', direction: 'Length', left: 3.0, center: 2.0, right: 3.0 },
  { id: 'p2-5', date: '2026-07-20', pitch: 'Pitch 2', direction: 'Width', left: 4.0, center: 2.0, right: 3.0 },
  { id: 'p2-6', date: '2026-07-21', pitch: 'Pitch 2', direction: 'Length', left: 3.0, center: 2.0, right: 2.0 },
  { id: 'p2-7', date: '2026-07-22', pitch: 'Pitch 2', direction: 'Width', left: 2.0, center: 1.0, right: 2.0 },
  { id: 'p2-8', date: '2026-07-23', pitch: 'Pitch 2', direction: 'Length', left: 3.0, center: 2.0, right: 2.0 },
  { id: 'p2-9', date: '2026-07-24', pitch: 'Pitch 2', direction: 'Width', left: 3.0, center: 2.0, right: 2.0 },
  { id: 'p2-10', date: '2026-07-25', pitch: 'Pitch 2', direction: 'None', left: 0, center: 0, right: 0 },
  { id: 'p2-11', date: '2026-07-26', pitch: 'Pitch 2', direction: 'Length', left: 4.0, center: 2.0, right: 4.0 },
  { id: 'p2-12', date: '2026-07-27', pitch: 'Pitch 2', direction: 'None', left: 0, center: 0, right: 0 },
  { id: 'p2-13', date: '2026-07-28', pitch: 'Pitch 2', direction: 'Length', left: 4.0, center: 3.0, right: 2.0 },
  { id: 'p2-14', date: '2026-07-29', pitch: 'Pitch 2', direction: 'None', left: 0, center: 0, right: 0 },
  { id: 'p2-15', date: '2026-07-30', pitch: 'Pitch 2', direction: 'Width', left: 7.0, center: 7.0, right: 7.0 },
  { id: 'p2-16', date: '2026-07-31', pitch: 'Pitch 2', direction: 'Width', left: 6.0, center: 6.0, right: 6.0 },
  { id: 'p2-17', date: '2026-08-01', pitch: 'Pitch 2', direction: 'Length', left: 6.0, center: 6.0, right: 6.0 },
  { id: 'p2-18', date: '2026-08-02', pitch: 'Pitch 2', direction: 'Length', left: 7.0, center: 7.0, right: 10.0 },
  { id: 'p2-19', date: '2026-08-03', pitch: 'Pitch 2', direction: 'Width', left: 10.0, center: 11.0, right: 14.0 },
  { id: 'p2-20', date: '2026-08-04', pitch: 'Pitch 2', direction: 'Length', left: 11.0, center: 12.0, right: 14.0 },
  { id: 'p2-21', date: '2026-08-05', pitch: 'Pitch 2', direction: 'Width', left: 11.0, center: 12.0, right: 14.0 }
];

// Global Settings State
let settings = {
  mowerWidth: 1.62,
  sampleDistance: 370,
  pitch1SampleDistance: 370,
  pitch2SampleDistance: 370,
  sampleRuns: 1,
  pitch1Area: 7140,
  pitch2Area: 7140
};

// Global Logs Data State
let clippingLogs = [];

// ==========================================================================
// Agrovista Amenity Soil Analysis Guideline Standards
// ==========================================================================
const SOIL_GUIDELINES = {
  // Nutrients (11 Tested Elements)
  phosphorus: { name: 'Phosphorus (P)', symbol: 'P', category: 'Nutrients', min: 25, max: 50, unit: 'ppm', step: 0.1, inputId: 'soil-input-p', pillId: 'pill-p', desc: 'Powers root branching, root tensile anchoring, cellular ATP energy transfer, and rapid crown tillering. Prevents shallow root plates.' },
  potassium: { name: 'Potassium (K)', symbol: 'K', category: 'Nutrients', min: 125, max: 225, unit: 'ppm', step: 0.1, inputId: 'soil-input-k', pillId: 'pill-k', desc: 'Regulates guard cell stomatal opening, turgor pressure, and fluid transport. Hardens epidermal cell walls for superior wear tolerance & drought resilience.' },
  magnesium: { name: 'Magnesium (MgO)', symbol: 'MgO', category: 'Nutrients', min: 75, max: 125, unit: 'ppm', step: 0.1, inputId: 'soil-input-mgo', pillId: 'pill-mgo', desc: 'Central metallic core in the chlorophyll molecule. Drives enzyme activation for carbohydrate partitioning into roots and crowns for dense sward recovery.' },
  sulphur: { name: 'Sulphur (S)', symbol: 'S', category: 'Nutrients', min: 8, max: 18, unit: 'ppm', step: 0.1, inputId: 'soil-input-s', pillId: 'pill-s', desc: 'Builds sulfur-containing amino acids (cysteine & methionine). Forms disulfide bonds that reinforce structural proteins, cuticle thickness, and N uptake.' },
  calcium: { name: 'Calcium (Ca)', symbol: 'Ca', category: 'Nutrients', min: 400, max: 2000, unit: 'ppm', step: 1, inputId: 'soil-input-ca', pillId: 'pill-ca', desc: 'Forms calcium pectate in the middle lamella, binding plant cell walls together. Promotes root cap elongation and prevents leaf tip burn under intense play.' },
  iron: { name: 'Iron (Fe)', symbol: 'Fe', category: 'Nutrients', min: 200, max: 2000, unit: 'ppm', step: 1, inputId: 'soil-input-fe', pillId: 'pill-fe', desc: 'Catalytic cofactor for electron transport chains and chlorophyll synthesis. Delivers deep greening and leaf uprightness without soft, succulent flushes.' },
  copper: { name: 'Copper (Cu)', symbol: 'Cu', category: 'Nutrients', min: 5, max: 10, unit: 'ppm', step: 0.1, inputId: 'soil-input-cu', pillId: 'pill-cu', desc: 'Essential for lignin synthesis, which reinforces vascular xylem vessels and strengthens cell walls against mechanical crushing and fungal pathogen entry.' },
  zinc: { name: 'Zinc (Zn)', symbol: 'Zn', category: 'Nutrients', min: 4, max: 6, unit: 'ppm', step: 0.1, inputId: 'soil-input-zn', pillId: 'pill-zn', desc: 'Drives the biosynthesis of auxin growth hormones (IAA). Governs stem elongation, node development, and lateral leaf blade expansion.' },
  manganese: { name: 'Manganese (Mn)', symbol: 'Mn', category: 'Nutrients', min: 35, max: 75, unit: 'ppm', step: 0.1, inputId: 'soil-input-mn', pillId: 'pill-mn', desc: 'Catalyzes water-splitting in Photosystem II and activates nitrate reductase. Strengthens crown tissues and increases root resilience against Take-all patch.' },
  boron: { name: 'Boron (B)', symbol: 'B', category: 'Nutrients', min: 0.5, max: 6.0, unit: 'ppm', step: 0.01, inputId: 'soil-input-b', pillId: 'pill-b', desc: 'Cross-links pectin polysaccharides in primary cell walls. Governs membrane integrity and carbohydrate translocation from leaf blades down to root reserves.' },
  sodium: { name: 'Sodium (Na)', symbol: 'Na', category: 'Nutrients', min: 0.1, max: 100, unit: 'ppm', step: 0.1, inputId: 'soil-input-na', pillId: 'pill-na', desc: 'Regulates osmotic pressure in trace amounts. High levels displace calcium and potassium on root exchange sites and cause osmotic drought stress.' },

  // Soil Characteristics & Biology (7 Parameters)
  ph: { name: 'pH', symbol: 'pH', category: 'Soil Characteristics & Biology', min: 6.0, max: 7.0, unit: '-', step: 0.1, inputId: 'soil-input-ph', pillId: 'pill-ph', desc: 'Balances rootzone chemical charge and root membrane transporters. Optimal 6.0–7.0 pH ensures roots absorb structural cations without nutrient lockout.' },
  cec: { name: 'C.E.C. (Sand Based)', symbol: 'CEC', category: 'Soil Characteristics & Biology', min: 7, max: 14, unit: 'meq/100g', step: 0.1, inputId: 'soil-input-cec', pillId: 'pill-cec', desc: 'Cation Exchange Capacity measures the rootzone’s ability to hold and deliver positively charged nutrients (K+, Ca2+, Mg2+) directly to grass root hairs.' },
  cn_ratio: { name: 'C:N Ratio', symbol: 'C:N', category: 'Soil Characteristics & Biology', min: 10, max: 20, unit: 'Ratio', step: 0.1, inputId: 'soil-input-cn', pillId: 'pill-cn', desc: 'Carbon-to-Nitrogen ratio governing microbial digestion. Balances organic matter breakdown and natural plant-available nitrogen release.' },
  org_matter: { name: 'Org. Matter - DUMAS', symbol: 'OM', category: 'Soil Characteristics & Biology', min: 1.5, max: 4.0, unit: '%', step: 0.01, inputId: 'soil-input-om', pillId: 'pill-om', desc: 'Regulates soil cushion and pore space. Optimal OM (1.5–4.0%) cushions crowns, while excess OM builds spongy thatch that suffocates root respiration.' },
  org_carbon: { name: 'Org. Carbon Stock', symbol: 'OC', category: 'Soil Characteristics & Biology', min: 25, max: 60, unit: 't/ha', step: 0.1, inputId: 'soil-input-oc', pillId: 'pill-oc', desc: 'Organic carbon mass feeding rootzone microbial diversity, providing biological buffering and nutrient retention around grass roots.' },
  soil_respiration: { name: 'Soil Respiration', symbol: 'Resp', category: 'Soil Characteristics & Biology', min: 150, max: 200, unit: 'mg/kg', step: 1, inputId: 'soil-input-resp', pillId: 'pill-resp', desc: 'Measures active microbial respiration in the rootzone. Higher respiration reflects thriving soil biology cycling nutrients directly to grass roots.' },
  potentially_min_n: { name: 'Potentially Min N', symbol: 'PMN', category: 'Soil Characteristics & Biology', min: 50, max: 75, unit: 'kg N/ha', step: 0.1, inputId: 'soil-input-pmn', pillId: 'pill-pmn', desc: 'The pool of organic nitrogen that soil microbes will release throughout the season, providing sustained structural leaf growth without fertilizer scorch.' }
};

// Seed Soil Diagnostic Analysis Data (Empty by default for clean manual lab test entry)
const SEED_SOIL_DATA = [];

// ==========================================================================
// Weather & Microclimate Seed Data (Empty by default for clean accurate data logging)
// ==========================================================================
const SEED_WEATHER_DATA = [];

// State Variables
let currentActiveTab = 'dashboard';
let soilLogs = [];
let activeSoilPitch = 'Pitch 1';
let activeSoilCategory = 'all';
let activeSoilStatus = 'all';
let selectedSoilSampleId = null;
let activeAnatomyPitch = 'Pitch 1';
let selectedAnatomyZone = 'blade';

// Weather & Microclimate State Variables
let weatherLogs = [];
let activeWeatherPitch = 'all';

const SEED_KNOWLEDGE_DATA = [
  {
    "id": "kb-1",
    "title": "Clipping Volume (ClipVol) Interpretation & Pacing for Elite Football Pitches",
    "category": "clipping",
    "author": "Head Groundsman Playbook & USGA Standard",
    "date": "2026-08-10",
    "readTime": "3 min read",
    "summary": "Clipping Volume (mL/m\u00b2) is the primary physiological metric of sports turf vegetative yield. Rather than measuring fresh weight (which is heavily biased by surface moisture, morning dew, or rain), volumetric measurement in calibrated graduated buckets provides an accurate, unskewed measurement of daily shoot growth rate.",
    "decisionImpact": "When clipping yields exceed 150 L/cut (>0.75 mL/m\u00b2), the turf enters an unsustainable 'Surge' phase, burning stored crown carbohydrate reserves on vertical elongation. This reduces root depth and opens swards to wear damage. Immediate response: Withhold quick-release nitrogen and evaluate PGR application. When yield drops below 70 L/cut, turf is suppressed or dormant; check nutrition and soil moisture before heavy match play.",
    "actionSteps": [
      "Log bucket volume from standard sample passes after every cut.",
      "Convert to mL/m\u00b2 using calibrated sample area (e.g. 370 m\u00b2).",
      "Keep yields within the 70\u2013150 L/cut optimal envelope for Premier League match standards.",
      "If yield exceeds 150 L for 2 consecutive cuts, initiate growth regulation protocol.",
      "If yield drops below 50 L, conduct a soil compaction and moisture check."
    ],
    "targetThreshold": "Optimal: 70 \u2013 150 L/cut (0.35 \u2013 0.75 mL/m\u00b2) | Surge Warning: > 150 L/cut",
    "relatedMetrics": [
      "clipVol",
      "estTotalL",
      "gdd0",
      "tempAvg"
    ],
    "tags": [
      "ClipVol",
      "ClippingYield",
      "Pacing",
      "Carbohydrates",
      "Ryegrass",
      "Mowing"
    ],
    "isCustom": false
  },
  {
    "id": "kb-2",
    "title": "Plant Growth Regulators (PGR) GDD Kinetics: Attraxor vs Primo Maxx",
    "category": "pgr",
    "author": "BASF & Syngenta Turf Agronomy",
    "date": "2026-08-11",
    "readTime": "4 min read",
    "summary": "Plant Growth Regulators inhibit gibberellic acid biosynthesis, shortening cell elongation in the leaf blade while directing photosynthetic sugars down into the crown, tillers, and rootzone. Attraxor (prohexadione-calcium) acts late in the GA pathway (3b-hydroxylation), delivering rapid, powerful suppression with superior activity on Poa annua and cool-season Ryegrass compared to Primo Maxx (trinexapac-ethyl).",
    "decisionImpact": "PGR breakdown is governed entirely by temperature accumulation (Growing Degree Days). At 160\u2013180 GDD (Base 0\u00b0C), prohexadione-Ca suppression begins to decline. If re-application is not performed by 200 GDD, turf experiences a severe 'Rebound Surge' where vertical growth accelerates by up to 200%, exhausting crown carbohydrate reserves. Groundskeeper Rule: Re-apply between 180 and 200 GDD in a sub-21\u00b0C weather window.",
    "actionSteps": [
      "Track GDD Base 0\u00b0C accumulator daily from the date of the last application.",
      "When accumulator reaches 160 GDD (80%), inspect weather forecast for upcoming sub-21\u00b0C spray windows.",
      "Prepare tank mix: 0.75 kg/ha Attraxor + 3.0 L/ha Chelated Liquid Iron (to prevent chlorosis) + non-ionic wetting agent.",
      "Apply when Delta-T is 2\u20138\u00b0C and wind speed is under 7.5 mph.",
      "Reset GDD accumulator upon completion of spray event."
    ],
    "targetThreshold": "Target Re-application: 200 GDD Base 0\u00b0C (Attraxor) / 220 GDD (Primo Maxx II)",
    "relatedMetrics": [
      "gdd0",
      "clipVol",
      "tempAvg",
      "humidity",
      "windSpeed"
    ],
    "tags": [
      "Attraxor",
      "PrimoMaxx",
      "PGR",
      "GDD",
      "ReboundSurge",
      "Gibberellin"
    ],
    "isCustom": false
  },
  {
    "id": "kb-3",
    "title": "PACE Turf Growth Potential (GP) Model & Nitrogen Pacing",
    "category": "weather",
    "author": "PACE Turf (Gelernter & Stowell)",
    "date": "2026-08-12",
    "readTime": "3 min read",
    "summary": "The PACE Turf Growth Potential (GP) model describes the relationship between turfgrass growth rate and air temperature using an empirical Gaussian curve. For cool-season C3 turf (Perennial Ryegrass / Poa annua), optimal growth occurs at 20\u00b0C (GP = 100%). GP drops below 10\u00b0C (cold dormancy) and above 28\u00b0C (photorespiration and heat stress).",
    "decisionImpact": "GP provides the biological ceiling for nitrogen demand. Applying nitrogen when GP is under 30% results in nutrient leaching, shallow rooting, and wasted fertilizer. Applying high nitrogen during peak GP (>80%) without PGR regulation causes explosive vegetative surges (lush, disease-prone swards). Groundskeeper Rule: Scale monthly nitrogen application proportionally with GP: Monthly N (g/m\u00b2) = Target Maximum N \u00d7 GP.",
    "actionSteps": [
      "Review the 7-day average GP on the Weather Hub dashboard.",
      "In spring/autumn transitions (GP 40\u201370%), apply balanced spoon-fed liquid N (0.3\u20130.5 g N/m\u00b2/fortnight).",
      "During summer peak GP (80\u2013100%), hold nitrogen low (0.2 g N/m\u00b2) and rely on PGR to tighten sward density.",
      "During high heat (Temp > 25\u00b0C), switch from ammonium/nitrate to amino acid and biostimulant feeds."
    ],
    "targetThreshold": "C3 Cool-Season Optimum: 20\u00b0C (Var: 5.5) | Peak GP: 80\u2013100% | Low GP: < 40%",
    "relatedMetrics": [
      "gpPercent",
      "tempAvg",
      "tempMax",
      "tempMin",
      "rainfall"
    ],
    "tags": [
      "PACE-GP",
      "GrowthPotential",
      "Nitrogen",
      "Fertilization",
      "Temperature",
      "C3Turf"
    ],
    "isCustom": false
  },
  {
    "id": "kb-4",
    "title": "Agrovista Amenity Sand-Based Soil Standards & Nutrient Ratios",
    "category": "soil",
    "author": "Agrovista Amenity Diagnostic Services",
    "date": "2026-08-12",
    "readTime": "5 min read",
    "summary": "Sand-carpet and USGA sand-dominant sports pitch rootzones possess very low Cation Exchange Capacity (CEC 7\u201314 meq/100g) and minimal nutrient buffering capacity compared to natural loam soils. Maintaining exact chemical balance and biological activity is critical for sward wear resilience and root depth.",
    "decisionImpact": "Key Agrovista Diagnostic Benchmarks:\n- pH 6.0\u20137.0: Below 6.0 causes calcium/magnesium lockout and phosphorus binding; above 7.2 promotes Microdochium.\n- Potassium (K) 125\u2013225 ppm: K governs stomatal turgor and cell wall thickness. Low K (<125 ppm) results in severe wear bruising and disease susceptibility.\n- Phosphorus (P) 25\u201345 ppm: Critical for root initiation during renovation; excessive P promotes Poa annua over Ryegrass.\n- Organic Matter 1.5\u20134.0%: Above 4.5% in top 20mm causes anaerobic black layer, surface softening, and poor infiltration.",
    "actionSteps": [
      "Test rootzone chemistry quarterly (0\u201350mm and 50\u2013100mm depth).",
      "If Potassium is < 125 ppm, apply 0-0-50 Potassium Sulfate at 25 g/m\u00b2 or spoon-feed foliar potassium phosphite.",
      "If Organic Matter exceeds 4.0%, schedule scarification, hollow coring, and silica sand topdressing.",
      "If pH is acidic (< 6.0), apply calcified seaweed or Cal-Sea-Feed.",
      "If Soil Respiration is < 150 mg/kg, apply liquid humic acids and seaweed extracts to boost microbial cycling."
    ],
    "targetThreshold": "pH 6.0\u20137.0 | K: 125\u2013225 ppm | P: 25\u201345 ppm | OM: 1.5\u20134.0% | CEC: 7\u201314",
    "relatedMetrics": [
      "soilTemp",
      "potassium",
      "ph",
      "phosphorus",
      "org_matter"
    ],
    "tags": [
      "Agrovista",
      "SoilChemistry",
      "Potassium",
      "SandRootzone",
      "OrganicMatter",
      "CEC"
    ],
    "isCustom": false
  },
  {
    "id": "kb-5",
    "title": "Microdochium Patch (Fusarium) Integrated Pest Management (IPM)",
    "category": "disease",
    "author": "STRI & Plant Pathology Guidelines",
    "date": "2026-08-13",
    "readTime": "4 min read",
    "summary": "Microdochium nivale (Microdochium patch / Fusarium nivale) is the most destructive fungal disease of UK sports turf. It infects leaves and crowns through stomata and mowing wounds, forming water-soaked circular patches that collapse into brown necrosis with pink/white mycelium in damp conditions.",
    "decisionImpact": "Microdochium spore germination requires two simultaneous factors: Temperatures between 10\u00b0C and 18\u00b0C AND prolonged leaf wetness (> 7 hours or Relative Humidity > 80%). The risk spikes during autumnal drizzle, heavy dew, or under high nitrogen fertility (succulent tissue). Groundskeeper Rule: Preventative cultural IPM must precede fungicide interventions.",
    "actionSteps": [
      "Switch or brush dew off the sward every morning before 08:30 AM to break leaf moisture films.",
      "Apply preventative plant elicitors: Phosphite (potassium phosphite) + Soluble Iron (FeSO\u2084 10\u201315 kg/ha) to acidify surface and thicken leaf cuticle.",
      "Avoid late-afternoon irrigation that leaves swards wet into the night.",
      "Keep sward aerated with pencil tines or Star Slitter to improve surface drying.",
      "Withhold autumn nitrogen; supply Potassium (K) to harden cellular membranes."
    ],
    "targetThreshold": "Critical High Risk Window: 10\u201318\u00b0C + Leaf Wetness > 7h or RH > 80%",
    "relatedMetrics": [
      "tempAvg",
      "humidity",
      "leafWetness",
      "rainfall",
      "diseaseRisks"
    ],
    "tags": [
      "Microdochium",
      "Fusarium",
      "DewSwitching",
      "Phosphite",
      "IronSulfate",
      "IPM",
      "Fungus"
    ],
    "isCustom": false
  },
  {
    "id": "kb-6",
    "title": "Rootzone Evapotranspiration (ET\u2080) & Soil Moisture Deficit Balancing",
    "category": "weather",
    "author": "FAO-56 & Sports Turf Irrigation Advisory",
    "date": "2026-08-13",
    "readTime": "3 min read",
    "summary": "Evapotranspiration (ET\u2080) represents the combined loss of water via soil surface evaporation and plant transpiration driven by solar radiation, air temperature, wind, and relative humidity. In free-draining sand-based pitches, matching replacement water with actual ET\u2080 is essential to prevent drought stress without creating anaerobic conditions in the rootzone.",
    "decisionImpact": "In sports pitches, daily summer ET\u2080 ranges from 2.5 to 5.0 mm/day. If daily rainfall is less than ET\u2080, a Soil Moisture Deficit (SMD) accumulates. Once cumulative SMD exceeds 10\u201312 mm in a sand pitch, grass exhibits foot-printing and wilt. However, over-irrigating keeps the top 50mm saturated, leaching potassium and suffocating roots. Groundskeeper Rule: Practice 'Deep and Infrequent' irrigation overnight to replenish deficit to 85\u201390% of field capacity.",
    "actionSteps": [
      "Monitor Net Water Balance (Rainfall - ET\u2080) on the Weather Hub daily.",
      "If cumulative 7-day deficit exceeds 10 mm, schedule overnight irrigation cycle (02:00\u201305:00 AM).",
      "Calculate runtime: Each 1 mm deficit requires approx. 2.2 minutes per sprinkler zone (depending on nozzle precipitation rate).",
      "Apply monthly residual wetting agents to prevent localized hydrophobic dry spot in sand rootzones.",
      "Check soil moisture probes @ 50mm and 100mm to verify infiltration depth."
    ],
    "targetThreshold": "Daily ET\u2080 Summer Range: 2.5 \u2013 5.0 mm/day | Critical SMD Trigger: > 10 mm",
    "relatedMetrics": [
      "rainfall",
      "et0",
      "waterBalance",
      "soilTemp",
      "humidity"
    ],
    "tags": [
      "ET0",
      "Evapotranspiration",
      "Irrigation",
      "WaterBalance",
      "SoilMoisture",
      "DrySpot"
    ],
    "isCustom": false
  },
  {
    "id": "kb-7",
    "title": "Spraying Window Physics: Delta-T & Wind Drift Controls",
    "category": "weather",
    "author": "Chemical Application Best Practice (NROSO Standard)",
    "date": "2026-08-14",
    "readTime": "3 min read",
    "summary": "Delta-T (\u0394T) is the wet bulb depression\u2014the difference between dry bulb temperature and wet bulb temperature (T_dry - T_wet). It is the definitive atmospheric indicator of droplet evaporation rate, systemic chemical uptake, and spray drift potential.",
    "decisionImpact": "Groundskeeper Spray Physics Rules:\n- \u0394T < 2\u00b0C: Humidity is too high. Spray droplets do not dry or adhere, leading to heavy chemical run-off and dew wash-off.\n- \u0394T \u2208 [2\u00b0C, 8\u00b0C]: Optimal Spraying Window. Droplets remain liquid on the leaf blade long enough for active systemic absorption (e.g. Attraxor, iron, fungicides).\n- \u0394T > 8\u00b0C: Atmospheric evaporation is too rapid. Droplets shrink to aerosol size before reaching target, causing severe wind drift and chemical crystallization on leaf surface.\n- Wind Speed > 7.5 mph: High drift risk; > 9.3 mph: Spraying prohibited by law.",
    "actionSteps": [
      "Check Delta-T and wind speed on the Weather & Climate tab before filling sprayer.",
      "Confirm Delta-T is within 2\u20138\u00b0C and ambient temperature is below 21\u00b0C for PGRs.",
      "Verify wind speed is between 2 and 7.5 mph.",
      "Use low-drift air induction nozzles (025 or 03 size) operating at 2.0\u20132.5 bar pressure.",
      "If Delta-T exceeds 8\u00b0C during midday sun, postpone spray until early evening when temperature drops and humidity recovers."
    ],
    "targetThreshold": "Optimal Delta-T: 2.0\u00b0C \u2013 8.0\u00b0C | Max Wind Speed: 7.5 mph (No-Go > 9.3 mph)",
    "relatedMetrics": [
      "tempAvg",
      "humidity",
      "windSpeed",
      "gdd0"
    ],
    "tags": [
      "Delta-T",
      "Spraying",
      "SprayWindow",
      "WindDrift",
      "Nozzles",
      "NROSO",
      "Attraxor"
    ],
    "isCustom": false
  },
  {
    "id": "kb-8",
    "title": "Johnsons J Premier Pitch Perennial Ryegrass Sward Dynamics",
    "category": "seed",
    "author": "DLF Seeds & Johnsons Sports Seed Specification",
    "date": "2026-08-14",
    "readTime": "4 min read",
    "summary": "Johnsons J Premier Pitch is the gold-standard 100% 4-way diploid Perennial Ryegrass (Lolium perenne) mixture engineered specifically for elite stadium and training football pitches (containing top-ranked cultivars: Monroe, Gildara, Europitch, and Fabian/Barolympic). It delivers rapid germination, deep anchoring roots, fine leaf texture, and extreme cleat-wear tolerance.",
    "decisionImpact": "Sward Management Keys:\n- Minimum Soil Temperature for Germination: 10\u00b0C (Optimal 15\u201320\u00b0C).\n- Tillering & Crown Density: Diploid ryegrasses produce high tiller numbers per plant, providing a tight, interlocked carpet. However, without PGR suppression and light scarification, dense tillers can thatch up.\n- Winter Cleat Wear Recovery: In late autumn/winter when rootzone soil drops below 10\u00b0C, natural ryegrass leaf regeneration drops. Preserving root density through summer/early autumn K feeding is critical to survive the winter match calendar.",
    "actionSteps": [
      "Conduct renovation overseeding at 35\u201345 g/m\u00b2 using a disc or dimple seeder into clean sand channels.",
      "Maintain mowing height at 22\u201325 mm for match pitches and 25\u201328 mm for training pitches.",
      "Ensure minimum rootzone temperature > 10\u00b0C before autumn overseeding.",
      "Apply 0.75 kg/ha Attraxor post-establishment (3\u20134 leaf stage) to stimulate lateral tillering and root anchoring.",
      "Keep seedbed moist with micro-bursts of irrigation (3 mins every 4 hours) during first 7 days."
    ],
    "targetThreshold": "Mowing Height: 22\u201325 mm | Overseeding Rate: 35\u201345 g/m\u00b2 | Min Germination Soil Temp: 10\u00b0C",
    "relatedMetrics": [
      "soilTemp",
      "clipVol",
      "tempAvg",
      "potassium"
    ],
    "tags": [
      "JohnsonsPRG",
      "PerennialRyegrass",
      "SeedMix",
      "WearTolerance",
      "Germination",
      "Tillering"
    ],
    "isCustom": false
  },
  {
    "id": "kb-9",
    "title": "Crown & Rootzone Anatomy Under Heavy Mechanical Wear",
    "category": "seed",
    "author": "Turfgrass Anatomy & Morphology Handbook",
    "date": "2026-08-15",
    "readTime": "3 min read",
    "summary": "The turfgrass plant is anchored by its crown\u2014the compressed stem tissue located at the soil-air interface. All adventitious roots, tillers, and leaf primordia originate from the crown. Understanding vascular anatomy (xylem, phloem, and meristematic zones) is vital for groundsmen to protect turf during intensive match play and aeration operations.",
    "decisionImpact": "Crown Health Diagnostic Rules:\n- Crown Crush Injury: Heavy rolling or match play on water-saturated sand crushes crown meristems, causing irreversible plant death regardless of fertilizer inputs.\n- Deep Rooting vs Shoot Respiration: When rootzone soil temperatures exceed 24\u00b0C, root mortality increases because ryegrass photorespiration consumes carbohydrates faster than roots can absorb oxygen. Maintaining open pore space via aeration is essential.",
    "actionSteps": [
      "Check crown firmness during pitch walk (firm, white crown tissue indicates vigorous health; soft, brown crown indicates Pythium/Microdochium crown rot).",
      "Avoid heavy cylinder rolling immediately following heavy rain.",
      "Use solid pencil tines (8\u201310mm diameter, 150mm depth) monthly during the playing season to introduce oxygen directly to the rootzone without disturbing surface playability.",
      "Apply soluble calcium (calcium nitrate/acetate) to strengthen cellular pectins in crown walls."
    ],
    "targetThreshold": "Optimal Rootzone Temp: 12 \u2013 18\u00b0C | Critical Heat Stress: > 24\u00b0C",
    "relatedMetrics": [
      "soilTemp",
      "clipVol",
      "tempAvg",
      "diseaseRisks"
    ],
    "tags": [
      "CrownAnatomy",
      "Rootzone",
      "Aeration",
      "WearToxicity",
      "Morphology",
      "Oxygen"
    ],
    "isCustom": false
  },
  {
    "id": "kb-10",
    "title": "Sand Pitch Aeration, Decompaction & Hydrophobic Dry Patch Prevention",
    "category": "renovation",
    "author": "Sports Turf Research Institute (STRI)",
    "date": "2026-08-15",
    "readTime": "4 min read",
    "summary": "Modern stadium pitches constructed with 90%+ medium silica sand rootzones deliver exceptional drainage and stability. However, over time, organic matter accumulation and player foot-traffic create a compacted surface layer in the top 30mm, accompanied by fungal humic coatings on sand grains that induce hydrophobic Localized Dry Spot (LDS).",
    "decisionImpact": "Decompaction & Infiltration Decision Triggers:\n- Surface Infiltration Rate Drops Below 100 mm/hour: Indicates surface capping and compaction. Aeration required immediately.\n- Hydrophobic Sand: Water droplets bead on the rootzone core rather than absorbing within 5 seconds. Wetting agent application required.\n- Anaerobic Sulfur Odor ('Black Layer'): Hydrogen sulfide production caused by lack of soil oxygen and stagnant water films.",
    "actionSteps": [
      "Perform deep verti-draining (12\u201318mm tines with 2\u20135 degrees heave) twice annually (spring renovation and mid-season break).",
      "Apply monthly block-copolymer surfactant (wetting agent) from April to October at 20 L/ha with 600 L water.",
      "Star-slit or sarrel-roll the top 25mm weekly before matches to break surface tension without damaging root anchors.",
      "Topdress with 60\u201380 tonnes of kiln-dried washed silica sand (0.25\u20130.75mm grading) post-renovation.",
      "Irrigate for 3\u20135 minutes immediately following wetting agent application to wash active surfactant off leaf blades and into the upper rootzone."
    ],
    "targetThreshold": "Target Infiltration: > 150 mm/hr | Wetting Agent Cycle: Every 28 Days (Apr\u2013Oct)",
    "relatedMetrics": [
      "soilTemp",
      "rainfall",
      "et0",
      "waterBalance",
      "org_matter"
    ],
    "tags": [
      "Aeration",
      "Decompaction",
      "VertiDrain",
      "WettingAgent",
      "DrySpot",
      "SandRootzone",
      "STRI"
    ],
    "isCustom": false
  },
  {
    "id": "kb-rootzone-horizons",
    "title": "Engineered Sports Profile & Rootzone Depth Horizons (0–300+ mm)",
    "category": "soil",
    "author": "Sports Turf Research Institute & Pitch Agronomy Advisory",
    "date": "2026-08-20",
    "readTime": "5 min read",
    "summary": "Managing an engineered sports profile requires balancing physical, chemical, and biological dynamics across distinct depth horizons: Surface & Crown Layer (0–50 mm), Active Rootzone (50–150 mm), and Deep Penetration Zone (150–300+ mm).",
    "decisionImpact": "Each depth horizon exhibits unique structural, biological, and hydrological constraints. Compaction in the 0-50mm crown layer blocks oxygen exchange and induces shallow thatch routing; compaction pans at 50-150mm cause LDS and perched water; hardpans below 150mm eliminate deep tension anchoring, triggering pitch shearing and divot blowouts under match play slide tackles.",
    "actionSteps": [
      "0–50 mm Surface: Apply frequent light sand topdressing (0.5 mm), light grooming/scarification, and shallow needle/solid-tining to control organic matter under 3–4% in the upper 20 mm.",
      "50–150 mm Active Rootzone: Perform mid-depth aeration (solid/hollow coring & cross-tining) to preserve macro-pore oxygen diffusion; synchronize fertility with clip-rate volume tracking.",
      "150–300+ mm Deep Zone: Execute deep-tine verti-draining with optimal heave/kick angles to shatter sub-surface hardpans without surface disruption; employ deep infrequent irrigation to draw roots downward.",
      "Maintain air-filled porosity above 15% and hydraulic conductivity > 150 mm/hr throughout all profile horizons."
    ],
    "targetThreshold": "Thatch: < 3-4% OM (0–20mm) | Root Depth: > 200 mm | Air Porosity: > 15% | Verti-Drain Depth: 250–300 mm",
    "relatedMetrics": [
      "org_matter",
      "potassium",
      "potentially_min_n",
      "clipVol",
      "soilTemp"
    ],
    "tags": [
      "RootzoneProfile",
      "DepthHorizons",
      "ActiveRootzone",
      "VertiDrain",
      "ThatchControl",
      "ShearStrength",
      "SandRootzone"
    ],
    "isCustom": false
  }
];

// Knowledge Base State Variables
let knowledgeBase = [];
let activeKnowledgeCategory = 'all';
let selectedKnowledgeTag = null;
let knowledgeSearchQuery = '';
let activeReadingArticleId = null;

let activeWeatherStation = 'gresford';
let liveWeatherActive = false;
let liveWeatherFeed = [];
let currentLiveStationName = 'Gresford, Wrexham (Wales)';
let selectedWeatherRecordId = null;
let pgrSettings = {
  product: 'Attraxor (Prohexadione-Ca)',
  targetGDD: 200,
  lastSprayDate: '2026-07-16',
  lastSprayPitch: 'All Pitches',
  baseTemp: 0,
  rate: '0.75 kg/ha',
  notes: 'First seasonal Attraxor suppression application.'
};

// Chart Instances Storage
let charts = {};

// Sort State
let currentSort = { column: 'date', direction: 'asc' };
let weatherSort = { column: 'date', direction: 'desc' };

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
  loadSettings();
  loadData();
  loadSoilData();
  loadWeatherData();
  loadPgrSettings();
  loadKnowledgeData();
  loadRootDepthData();
  initRootDepthModule();
  setupNavigation();
  setupEventListeners();

  // Initialize Live Weather Banner for Gresford, Wrexham
  const banner = document.getElementById('live-weather-banner');
  if (banner && liveWeatherActive) {
    banner.style.display = 'flex';
    const label = document.getElementById('live-weather-station-label');
    if (label) label.textContent = `Live Open-Meteo Station Feed Active: ${currentLiveStationName}`;
    const updated = document.getElementById('live-weather-updated-label');
    if (updated) updated.textContent = `Live Synced (${new Date().toLocaleDateString()})`;
  }

  renderAll();
});

/* ==========================================================================
   Data Calculation Engine
   ========================================================================== */

function getSampleArea(pitchName = 'Pitch 1') {
  const dist = pitchName === 'Pitch 2' 
    ? (settings.pitch2SampleDistance || settings.sampleDistance || 370)
    : (settings.pitch1SampleDistance || settings.sampleDistance || 370);
  return Number((settings.mowerWidth * dist * settings.sampleRuns).toFixed(1));
}

function processLogEntry(raw) {
  const left = Number(raw.left || 0);
  const center = Number(raw.center || 0);
  const right = Number(raw.right || 0);
  const totalL = Number((left + center + right).toFixed(1));
  
  const sampleArea = getSampleArea(raw.pitch);
  
  // ClipVol (mL per m2) = (Total L * 1000) / sampleArea / 1000 = Total L / sampleArea
  const clipVol = sampleArea > 0 ? Number((totalL / sampleArea).toFixed(3)) : 0;
  
  const pitchArea = raw.pitch === 'Pitch 2' ? settings.pitch2Area : settings.pitch1Area;
  const estTotalL = Number((clipVol * pitchArea).toFixed(1));

  return {
    ...raw,
    left,
    center,
    right,
    totalL,
    sampleArea,
    clipVol,
    estTotalL
  };
}

function getGrowthTier(clipVol) {
  if (clipVol < 0.010) return { label: '< 10 mL/m² Low Growth', badgeClass: 'badge-low', key: 'low' };
  if (clipVol <= 0.0149) return { label: '10 - 14.9 mL/m² Ideal Turf', badgeClass: 'badge-ideal', key: 'ideal' };
  if (clipVol <= 0.0199) return { label: '15 - 19.9 mL/m² Intermediate', badgeClass: 'badge-intermediate', key: 'intermediate' };
  if (clipVol <= 0.050) return { label: '20 - 50 mL/m² Healthy Lawn', badgeClass: 'badge-healthy', key: 'healthy' };
  return { label: '> 50 mL/m² Excessive Growth', badgeClass: 'badge-excessive', key: 'excessive' };
}

function getPitchTotalTier(estTotalL) {
  if (estTotalL < 70) return { label: '< 70 L Struggling', badgeClass: 'badge-struggling', key: 'struggling' };
  if (estTotalL <= 150) return { label: '70 - 150 L Optimal', badgeClass: 'badge-optimal', key: 'optimal' };
  return { label: '> 150 L Surging', badgeClass: 'badge-surging', key: 'surging' };
}

/* ==========================================================================
   State Management & Storage
   ========================================================================== */

function loadSettings() {
  const saved = localStorage.getItem('turf_settings');
  if (saved) {
    try { settings = { ...settings, ...JSON.parse(saved) }; } catch (e) { console.error(e); }
  }
  updateSettingsInputs();
}

function saveSettings() {
  localStorage.setItem('turf_settings', JSON.stringify(settings));
}

function loadData() {
  const saved = localStorage.getItem('turf_clipping_logs');
  if (saved) {
    try {
      clippingLogs = JSON.parse(saved).map(processLogEntry);
    } catch (e) {
      clippingLogs = SEED_DATA.map(processLogEntry);
    }
  } else {
    clippingLogs = SEED_DATA.map(processLogEntry);
  }
}

function saveData() {
  localStorage.setItem('turf_clipping_logs', JSON.stringify(clippingLogs));
}

function loadSoilData() {
  const saved = localStorage.getItem('turf_soil_logs');
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      soilLogs = Array.isArray(parsed) ? parsed : [];
    } catch (e) {
      soilLogs = [];
    }
  } else {
    soilLogs = [];
  }
}

function saveSoilData() {
  localStorage.setItem('turf_soil_logs', JSON.stringify(soilLogs));
}

function clearAllSoilData() {
  if (confirm('Are you sure you want to remove all soil analysis data? This allows you to add your accurate lab test numbers from a blank state.')) {
    soilLogs = [];
    selectedSoilSampleId = null;
    saveSoilData();
    renderAll();
    if (typeof showToast === 'function') {
      showToast('All soil data removed. Ready to log your accurate soil test.', 'info');
    }
  }
}

/* ==========================================================================
   Weather Storage & Agronomic Calculations Engine
   ========================================================================== */

function loadWeatherData() {
  const saved = localStorage.getItem('turf_weather_logs');
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      weatherLogs = Array.isArray(parsed) ? parsed.map(processWeatherEntry) : [];
    } catch (e) {
      weatherLogs = [];
      localStorage.setItem('turf_weather_logs', JSON.stringify([]));
    }
  } else {
    weatherLogs = [];
    localStorage.setItem('turf_weather_logs', JSON.stringify([]));
  }
}

function saveWeatherData() {
  localStorage.setItem('turf_weather_logs', JSON.stringify(weatherLogs));
}


function loadPgrSettings() {
  const saved = localStorage.getItem('turf_pgr_settings');
  if (saved) {
    try {
      pgrSettings = { ...pgrSettings, ...JSON.parse(saved) };
    } catch (e) {
      console.error(e);
    }
  }
}

function savePgrSettings() {
  localStorage.setItem('turf_pgr_settings', JSON.stringify(pgrSettings));
}

function seedDemoWeatherData() {
  weatherLogs = SEED_WEATHER_DATA.map(processWeatherEntry);
  liveWeatherActive = false;
  saveWeatherData();
  renderAll();
  const banner = document.getElementById('live-weather-banner');
  if (banner) banner.style.display = 'none';
  showToast('Standard 2026 season demo weather records reloaded successfully.', 'success');
}

function clearAllWeatherData() {
  if (confirm('Are you sure you want to clear all weather observation records?')) {
    weatherLogs = [];
    liveWeatherActive = false;
    saveWeatherData();
    renderAll();
    const banner = document.getElementById('live-weather-banner');
    if (banner) banner.style.display = 'none';
    showToast('All weather observation records have been cleared.', 'info');
  }
}

/**
 * PACE Turf Cool-Season (C3 Perennial Ryegrass) Growth Potential Model
 * GP = exp(-0.5 * ((Tavg - Topt) / Var)^2), Topt = 20°C, Var = 5.5
 */
function calculateGrowthPotential(avgTemp) {
  const gp = Math.exp(-0.5 * Math.pow((Number(avgTemp) - 20) / 5.5, 2));
  const gpPercent = Math.min(100, Math.max(0, Math.round(gp * 100)));
  return { gp, gpPercent };
}

/**
 * Processes raw weather record into structured agronomic object
 */
function processWeatherEntry(raw) {
  const tempMin = Number(raw.tempMin ?? raw.minTemp ?? 14);
  const tempMax = Number(raw.tempMax ?? raw.maxTemp ?? 22);
  const tempAvg = Number(raw.tempAvg !== undefined && raw.tempAvg !== null && raw.tempAvg !== '' 
    ? raw.tempAvg 
    : ((tempMin + tempMax) / 2).toFixed(1));
  const soilTemp = Number(raw.soilTemp ?? raw.soil_temperature ?? 16.5);
  const rainfall = Number(raw.rainfall ?? raw.precipitation ?? 0);
  const humidity = Number(raw.humidity ?? raw.relative_humidity ?? 70);
  const windSpeed = Number(raw.windSpeed ?? raw.wind_speed ?? 5);
  const windDir = raw.windDir ?? raw.wind_direction ?? 'SW';
  const leafWetness = Number(raw.leafWetness ?? (humidity > 80 ? 8 : (humidity > 70 ? 5 : 3)));
  const solarRad = Number(raw.solarRad ?? raw.solar_radiation ?? 19.0);
  const cloud = Number(raw.cloud ?? raw.cloud_cover ?? 30);

  // 1. PACE Turf Cool-Season (C3) Growth Potential Model
  const { gp, gpPercent } = calculateGrowthPotential(tempAvg);

  // 2. Growing Degree Days (Base 0°C Amenity Turf & Base 6°C)
  const gdd0 = Math.max(0, Number((((tempMin + tempMax) / 2) - 0).toFixed(1)));
  const gdd6 = Math.max(0, Number((((tempMin + tempMax) / 2) - 6).toFixed(1)));

  // 3. Reference Evapotranspiration (ET₀)
  let et0 = Number(raw.et0);
  if (isNaN(et0) || et0 <= 0) {
    et0 = calculateEt0Estimate(tempMin, tempMax, tempAvg, solarRad);
  }
  et0 = Number(et0.toFixed(1));

  // 4. Net Daily Moisture Balance (Rain - ET₀)
  const waterBalance = Number((rainfall - et0).toFixed(1));

  // 5. Delta-T Calculation (Wet Bulb Depression for spray drift & droplet evaporation)
  const deltaT = calculateDeltaT(tempAvg, humidity);

  // 6. Multi-Pathogen Disease Pressure
  const diseaseRisks = calculateDiseaseRisksForEntry(tempMin, tempMax, tempAvg, humidity, leafWetness, rainfall);

  // 7. Spray Window Safety Status
  const sprayStatus = calculateSpraySafety(windSpeed, tempAvg, deltaT, rainfall);

  return {
    id: raw.id || `w-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
    date: raw.date,
    pitch: raw.pitch || 'Pitch 1',
    tempMin,
    tempMax,
    tempAvg,
    soilTemp,
    rainfall,
    et0,
    waterBalance,
    humidity,
    windSpeed,
    windDir,
    leafWetness,
    solarRad,
    cloud,
    notes: raw.notes || '',
    gp,
    gpPercent,
    gdd0,
    gdd6,
    deltaT,
    diseaseRisks,
    sprayStatus
  };
}

/**
 * Approximates Reference ET₀ (mm/day) using temperature and solar radiation
 */
function calculateEt0Estimate(tmin, tmax, tavg, solarRad) {
  const deltaT = Math.max(0.1, tmax - tmin);
  const rad = solarRad || 18.0;
  // Hargreaves-Samani formulation scaled for amenity turfgrass
  const et = 0.0023 * (tavg + 17.8) * Math.sqrt(deltaT) * (rad * 0.408);
  return Math.min(6.5, Math.max(0.8, Number(et.toFixed(1))));
}

/**
 * Calculates Wet Bulb Temperature and Delta-T (°C)
 */
function calculateDeltaT(temp, rh) {
  // Stull (2011) Wet-Bulb Temperature formula
  const t = Number(temp);
  const h = Number(rh);
  const tw = t * Math.atan(0.151977 * Math.pow(h + 8.313659, 0.5)) +
             Math.atan(t + h) -
             Math.atan(h - 1.676331) +
             0.00391838 * Math.pow(h, 1.5) * Math.atan(0.023101 * h) -
             4.686035;
  const dt = Math.max(0, t - tw);
  return Number(dt.toFixed(1));
}

/**
 * Calculates Fungal Disease Pressure Indices (%)
 */
function calculateDiseaseRisksForEntry(tmin, tmax, tavg, rh, leafWetness, rainfall) {
  // Microdochium Patch (Fusarium) Risk: Optimal 10-18°C + leaf wetness > 7h or RH > 80%
  let microdochium = 10;
  if (tavg >= 8 && tavg <= 20) {
    const tempFactor = 1 - Math.abs(tavg - 14) / 8;
    const wetFactor = Math.min(1, leafWetness / 10);
    microdochium = Math.round((tempFactor * 0.5 + wetFactor * 0.5) * 85 + (rh > 85 ? 15 : 0));
  } else {
    microdochium = Math.round(Math.max(5, 25 - Math.abs(tavg - 14) * 2));
  }
  microdochium = Math.min(95, Math.max(5, microdochium));

  // Dollar Spot (Clarireedia): Warm days (18-28°C) + heavy dew / high RH
  let dollar = 10;
  if (tmax >= 18 && tmax <= 32) {
    const tempFactor = 1 - Math.abs(tavg - 23) / 8;
    const humFactor = rh > 70 ? (rh - 70) / 30 : 0;
    dollar = Math.round((tempFactor * 0.6 + humFactor * 0.4) * 80);
  }
  dollar = Math.min(90, Math.max(5, dollar));

  // Anthracnose / Leaf Spot: Heat stress (Tmax > 24°C) + wear + humidity
  let anthracnose = 10;
  if (tmax > 22) {
    anthracnose = Math.round(((tmax - 22) / 10) * 50 + (rh > 70 ? 25 : 0) + (leafWetness > 6 ? 15 : 0));
  }
  anthracnose = Math.min(90, Math.max(5, anthracnose));

  // Pythium Blight: High Night Temp (Tmin > 18°C) + rain / saturation
  let pythium = 5;
  if (tmin > 18 && (rainfall > 2 || rh > 85)) {
    pythium = Math.round(50 + (tmin - 18) * 10 + (rainfall > 5 ? 20 : 0));
  }
  pythium = Math.min(90, Math.max(3, pythium));

  const overall = Math.round((microdochium * 0.4 + dollar * 0.25 + anthracnose * 0.25 + pythium * 0.1));

  return {
    microdochium,
    dollar,
    anthracnose,
    pythium,
    overall
  };
}

/**
 * Evaluates Spray Safety Window for PGRs and foliar nutrition
 */
function calculateSpraySafety(windSpeed, tavg, deltaT, rainfall) {
  if (windSpeed > 9.3) {
    return { status: 'Prohibited', badgeClass: 'badge-high', text: 'Wind speed exceeds 9.3 mph legal drift threshold. Spraying prohibited.' };
  }
  if (windSpeed > 7.5) {
    return { status: 'Caution', badgeClass: 'badge-amber', text: 'Moderate wind (7.5–9.3 mph). Use low-drift air induction nozzles.' };
  }
  if (tavg > 25) {
    return { status: 'Caution', badgeClass: 'badge-amber', text: 'Air temp > 25°C. Risk of leaf scorch & foliar volatilization.' };
  }
  if (deltaT < 2.0) {
    return { status: 'Caution', badgeClass: 'badge-amber', text: 'Delta-T < 2°C. High humidity slows drying; risk of wash-off & disease spread.' };
  }
  if (deltaT > 8.0) {
    return { status: 'Caution', badgeClass: 'badge-amber', text: 'Delta-T > 8°C. Droplets evaporate rapidly before systemic uptake.' };
  }
  return { status: 'Optimal', badgeClass: 'badge-ideal', text: 'Optimal spray window. Excellent droplet survival without drift or evaporation.' };
}

/* ==========================================================================
   Navigation & UI Handlers
   ========================================================================== */

function setupNavigation() {
  // Desktop & Drawer Sidebar Nav Items
  const navBtns = document.querySelectorAll('.nav-item');
  navBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const tab = btn.dataset.tab;
      switchTab(tab);
      closeMobileSidebar();
    });
  });

  // Mobile Bottom Navigation Bar Items
  const mobileNavBtns = document.querySelectorAll('.mobile-nav-item[data-tab]');
  mobileNavBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const tab = btn.dataset.tab;
      switchTab(tab);
    });
  });

  // Mobile FAB (+ button)
  const fabAdd = document.getElementById('mobile-fab-add');
  if (fabAdd) {
    fabAdd.addEventListener('click', () => {
      if (currentActiveTab === 'soil') {
        openSoilModal();
      } else if (currentActiveTab === 'weather') {
        openWeatherModal();
      } else {
        openModal();
      }
    });
  }

  // Mobile Sidebar Drawer Hamburger Toggle
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  const backdrop = document.getElementById('sidebar-backdrop');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', toggleMobileSidebar);
  }
  if (backdrop) {
    backdrop.addEventListener('click', closeMobileSidebar);
  }
}

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
  loadSettings();
  loadData();
  loadSoilData();
  loadWeatherData();
  loadPgrSettings();
  loadKnowledgeData();
  loadRootDepthData();
  initRootDepthModule();
  initVisionModule();
  setupNavigation();
  setupEventListeners();

  // Initialize Live Weather Banner for Gresford, Wrexham
  const banner = document.getElementById('live-weather-banner');
  if (banner && liveWeatherActive) {
    banner.style.display = 'flex';
    const label = document.getElementById('live-weather-station-label');
    if (label) label.textContent = `Live Open-Meteo Station Feed Active: ${currentLiveStationName}`;
    const updated = document.getElementById('live-weather-updated-label');
    if (updated) updated.textContent = `Live Synced (${new Date().toLocaleDateString()})`;
  }

  renderAll();
});

function toggleMobileSidebar() {
  const sidebar = document.querySelector('.sidebar');
  const backdrop = document.getElementById('sidebar-backdrop');
  if (sidebar && backdrop) {
    sidebar.classList.toggle('open');
    backdrop.classList.toggle('active');
  }
}

function closeMobileSidebar() {
  const sidebar = document.querySelector('.sidebar');
  const backdrop = document.getElementById('sidebar-backdrop');
  if (sidebar && backdrop) {
    sidebar.classList.remove('open');
    backdrop.classList.remove('active');
  }
}

function switchTab(tabId) {
  currentActiveTab = tabId;
  document.querySelectorAll('.nav-item').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.mobile-nav-item').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.tab-page').forEach(p => p.classList.remove('active'));

  const activeBtns = document.querySelectorAll(`[data-tab="${tabId}"]`);
  const activePage = document.getElementById(`tab-${tabId}`);

  activeBtns.forEach(btn => btn.classList.add('active'));

  if (activePage) {
    activePage.classList.add('active');
  }

  // Update Page Title
  const titles = {
    dashboard: { title: 'Dashboard Overview', sub: 'Real-time yield metrics & pitch performance summary' },
    tracker: { title: 'Pitch Clipping Logs', sub: 'Comprehensive data logging & entry table' },
    weather: { title: 'Pitch Weather & Microclimate Hub', sub: 'Real-time atmospheric & rootzone dynamics, Growth Potential (GP), GDD for PGR timing & disease pressure' },
    knowledge: { title: 'Agronomic Knowledge Base & Library', sub: 'Sports turf learning repository, physiological decision rules & groundskeeper playbooks' },
    analytics: { title: 'Analytics & Trends', sub: 'Visual growth curves, sectional balance & pitch comparison' },
    soil: { title: 'Agrovista Soil Analysis Hub', sub: 'Nutrient & biological health diagnostic calibrated to Agrovista target ranges' },
    advisory: { title: 'Agronomic Insights', sub: 'Automated turf diagnostic report & groundskeeper recommendations' },
    roots: { title: 'Rootzone Architecture & Depth Dynamics', sub: 'Engineered profile depth horizons (0–300+ mm), core sample tracking & longitudinal root analytics' },
    vision: { title: 'Turf Vision Optics & Health Hub', sub: 'Optical capture, Fractional Green Canopy Cover (FGCC) & DGCI chlorophyll health analysis' },
    settings: { title: 'Pitch Settings', sub: 'Configure mower dimensions & pitch surface parameters' }
  };

  if (titles[tabId]) {
    document.getElementById('page-title').textContent = titles[tabId].title;
    document.getElementById('page-subtitle').textContent = titles[tabId].sub;
  }

  // Re-render charts when switching to tabs with canvas to fix sizing
  if (tabId === 'dashboard' || tabId === 'analytics' || tabId === 'soil' || tabId === 'weather' || tabId === 'roots' || tabId === 'advisory' || tabId === 'vision') {
    setTimeout(() => {
      renderCharts();
      if (tabId === 'soil') {
        renderSoilTab();
      }
      if (tabId === 'weather') {
        renderWeatherTab();
        renderKnowledgeTab();
      }
      if (tabId === 'roots') {
        renderRootDepthModule();
      }
      if (tabId === 'knowledge') {
        renderKnowledgeTab();
      }
      if (tabId === 'vision') {
        renderVisionCanvas();
        renderVisionScanHistory();
      }
    }, 50);
  }
}

/* ==========================================================================
   Rendering & Dashboard Logic
   ========================================================================== */

function renderAll() {
  renderKPIs();
  renderDashboardRecentTable();
  renderMasterLogsTable();
  renderAdvisoryTab();
  renderSoilTab();
  renderWeatherTab();
  renderRootDepthModule();
  renderKnowledgeTab();
  updateDashboardWeatherWidget();
  renderCharts();
}

function renderKPIs() {
  const activeSamples = clippingLogs.filter(d => d.totalL > 0);
  
  // Avg ClipVol
  const avgClipVol = activeSamples.length > 0 
    ? (activeSamples.reduce((acc, c) => acc + c.clipVol, 0) / activeSamples.length)
    : 0;
  
  document.getElementById('kpi-avg-clipvol').innerHTML = `${avgClipVol.toFixed(3)} <small>mL/m²</small>`;
  const growthTier = getGrowthTier(avgClipVol);
  const badgeEl = document.getElementById('kpi-clipvol-badge');
  badgeEl.className = `badge ${growthTier.badgeClass}`;
  badgeEl.textContent = growthTier.label.split(' ').slice(3).join(' ') || growthTier.label;

  // Pitch 1 Avg Total (matching prompt exact average ~206.7L on active cuts)
  const p1Active = clippingLogs.filter(d => d.pitch === 'Pitch 1' && d.totalL > 0);
  const p1AvgTotal = p1Active.length > 0
    ? (p1Active.reduce((acc, c) => acc + c.estTotalL, 0) / p1Active.length)
    : 0;
  document.getElementById('kpi-pitch1-avg').innerHTML = `${p1AvgTotal.toFixed(1)} <small>L</small>`;
  const p1Tier = getPitchTotalTier(p1AvgTotal);
  const p1Badge = document.getElementById('kpi-pitch1-badge');
  p1Badge.className = `badge ${p1Tier.badgeClass}`;
  p1Badge.textContent = p1Tier.label;

  // Pitch 2 Avg Total (matching prompt exact average ~137.3L on active cuts)
  const p2Active = clippingLogs.filter(d => d.pitch === 'Pitch 2' && d.totalL > 0);
  const p2AvgTotal = p2Active.length > 0
    ? (p2Active.reduce((acc, c) => acc + c.estTotalL, 0) / p2Active.length)
    : 0;
  document.getElementById('kpi-pitch2-avg').innerHTML = `${p2AvgTotal.toFixed(1)} <small>L</small>`;
  const p2Tier = getPitchTotalTier(p2AvgTotal);
  const p2Badge = document.getElementById('kpi-pitch2-badge');
  p2Badge.className = `badge ${p2Tier.badgeClass}`;
  p2Badge.textContent = p2Tier.label;

  // Total Volume Collected
  const totalVolume = clippingLogs.reduce((acc, c) => acc + c.totalL, 0);
  document.getElementById('kpi-total-yield').innerHTML = `${totalVolume.toFixed(1)} <small>L</small>`;
  document.getElementById('kpi-total-cuts-count').textContent = `${clippingLogs.length} Total Logs (${activeSamples.length} Active Cuts)`;
}

function renderDashboardRecentTable() {
  const tbody = document.getElementById('dashboard-recent-tbody');
  tbody.innerHTML = '';

  const recent = [...clippingLogs]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 7);

  recent.forEach(row => {
    const tier = getGrowthTier(row.clipVol);
    const pitchTotTier = getPitchTotalTier(row.estTotalL);
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><strong>${row.date}</strong></td>
      <td><span class="badge ${row.pitch === 'Pitch 1' ? 'badge-intermediate' : 'badge-healthy'}">${row.pitch}</span></td>
      <td>${row.direction !== 'None' ? row.direction : '<span class="text-dim">No Mow</span>'}</td>
      <td>${row.left.toFixed(1)}</td>
      <td>${row.center.toFixed(1)}</td>
      <td>${row.right.toFixed(1)}</td>
      <td><strong>${row.totalL.toFixed(1)}</strong></td>
      <td>
        <span class="cell-clipvol cell-${tier.key}" title="${tier.label}">
          <span class="dot-indicator dot-${tier.key}"></span>
          ${row.clipVol.toFixed(3)}
        </span>
      </td>
      <td>
        <span class="cell-pitchtotal cell-${pitchTotTier.key}" title="${pitchTotTier.label}">
          <span class="dot-indicator dot-${pitchTotTier.key}"></span>
          ${row.estTotalL.toFixed(1)} L
        </span>
      </td>
      <td><span class="badge ${tier.badgeClass}">${tier.label.split(' ').slice(3).join(' ') || tier.label}</span></td>
    `;
    tbody.appendChild(tr);
  });
}

/* ==========================================================================
   Master Logs Table Rendering & Filtering
   ========================================================================== */

function renderMasterLogsTable() {
  const tbody = document.getElementById('master-logs-tbody');
  tbody.innerHTML = '';

  const search = document.getElementById('filter-search').value.toLowerCase();
  const pitchFilter = document.getElementById('filter-pitch').value;
  const dirFilter = document.getElementById('filter-direction').value;
  const tierFilter = document.getElementById('filter-growth-tier').value;

  let filtered = clippingLogs.filter(item => {
    if (pitchFilter !== 'all' && item.pitch !== pitchFilter) return false;
    if (dirFilter !== 'all' && item.direction !== dirFilter) return false;
    
    if (tierFilter !== 'all') {
      const t = getGrowthTier(item.clipVol);
      if (t.key !== tierFilter) return false;
    }

    if (search) {
      const str = `${item.date} ${item.pitch} ${item.direction}`.toLowerCase();
      if (!str.includes(search)) return false;
    }
    return true;
  });

  // Sort
  filtered.sort((a, b) => {
    let valA = a[currentSort.column];
    let valB = b[currentSort.column];

    if (currentSort.column === 'date') {
      valA = new Date(valA);
      valB = new Date(valB);
    }

    if (valA < valB) return currentSort.direction === 'asc' ? -1 : 1;
    if (valA > valB) return currentSort.direction === 'asc' ? 1 : -1;
    return 0;
  });

  filtered.forEach(row => {
    const tier = getGrowthTier(row.clipVol);
    const pitchTotTier = getPitchTotalTier(row.estTotalL);
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><strong>${row.date}</strong></td>
      <td><span class="badge ${row.pitch === 'Pitch 1' ? 'badge-intermediate' : 'badge-healthy'}">${row.pitch}</span></td>
      <td>${row.direction !== 'None' ? row.direction : '<span class="text-dim">No Cut</span>'}</td>
      <td>${row.left.toFixed(1)}</td>
      <td>${row.center.toFixed(1)}</td>
      <td>${row.right.toFixed(1)}</td>
      <td><strong>${row.totalL.toFixed(1)}</strong></td>
      <td>${row.sampleArea.toFixed(1)}</td>
      <td>
        <span class="cell-clipvol cell-${tier.key}" title="${tier.label}">
          <span class="dot-indicator dot-${tier.key}"></span>
          ${row.clipVol.toFixed(3)}
        </span>
      </td>
      <td>
        <span class="cell-pitchtotal cell-${pitchTotTier.key}" title="${pitchTotTier.label}">
          <span class="dot-indicator dot-${pitchTotTier.key}"></span>
          ${row.estTotalL.toFixed(1)} L
        </span>
      </td>
      <td><span class="badge ${tier.badgeClass}">${tier.label}</span></td>
      <td>
        <div class="action-btn-group">
          <button class="btn-icon" onclick="editEntry('${row.id}')" title="Edit"><i class="fa-solid fa-pen"></i></button>
          <button class="btn-icon btn-icon-danger" onclick="deleteEntry('${row.id}')" title="Delete"><i class="fa-solid fa-trash"></i></button>
        </div>
      </td>
    `;
    tbody.appendChild(tr);
  });

  // Table summary pills
  document.getElementById('table-record-count').textContent = `Showing ${filtered.length} of ${clippingLogs.length} entries`;

  const activeFiltered = filtered.filter(f => f.totalL > 0);
  const avgCV = activeFiltered.length > 0 ? (activeFiltered.reduce((acc, x) => acc + x.clipVol, 0) / activeFiltered.length) : 0;
  const p1Tot = filtered.filter(f => f.pitch === 'Pitch 1').reduce((acc, x) => acc + x.totalL, 0);
  const p2Tot = filtered.filter(f => f.pitch === 'Pitch 2').reduce((acc, x) => acc + x.totalL, 0);

  document.getElementById('summary-table-avg-clipvol').textContent = avgCV.toFixed(3);
  document.getElementById('summary-table-pitch1-tot').textContent = p1Tot.toFixed(1);
  document.getElementById('summary-table-pitch2-tot').textContent = p2Tot.toFixed(1);
}

/* ==========================================================================
   Chart JS Visualizations
   ========================================================================== */

function renderCharts() {
  renderGrowthTrendChart();
  renderSectionalRadarChart();
  renderClipVolBarChart();
  renderComparisonStackedChart();
  renderWeatherCharts();
}

function renderGrowthTrendChart() {
  const ctx = document.getElementById('chart-growth-trend');
  if (!ctx) return;

  const pitchFilter = document.getElementById('dash-pitch-filter')?.value || 'all';

  // Unique dates sorted chronologically
  const dates = [...new Set(clippingLogs.map(d => d.date))].sort();

  const datasets = [];

  // Active cut datasets for average calculation
  const activeP1 = clippingLogs.filter(d => d.pitch === 'Pitch 1' && d.totalL > 0);
  const activeP2 = clippingLogs.filter(d => d.pitch === 'Pitch 2' && d.totalL > 0);
  const p1AvgVal = activeP1.length > 0 ? (activeP1.reduce((a, b) => a + b.estTotalL, 0) / activeP1.length) : 0;
  const p2AvgVal = activeP2.length > 0 ? (activeP2.reduce((a, b) => a + b.estTotalL, 0) / activeP2.length) : 0;

  if (pitchFilter === 'all' || pitchFilter === 'Pitch 1') {
    const p1Data = dates.map(d => {
      const items = clippingLogs.filter(x => x.date === d && x.pitch === 'Pitch 1' && x.totalL > 0);
      return items.length > 0 ? Number(items.reduce((sum, item) => sum + item.estTotalL, 0).toFixed(1)) : null;
    });
    datasets.push({
      label: 'Pitch 1 Est. Total (L)',
      data: p1Data,
      borderColor: '#3b82f6',
      backgroundColor: '#3b82f6',
      fill: false,
      tension: 0.3,
      borderWidth: 2.5,
      pointRadius: 4,
      pointHoverRadius: 6,
      spanGaps: true
    });
    datasets.push({
      label: `Pitch 1 Active Avg (${p1AvgVal.toFixed(1)} L)`,
      data: dates.map(() => Number(p1AvgVal.toFixed(1))),
      borderColor: '#60a5fa',
      borderWidth: 1.5,
      borderDash: [6, 4],
      pointRadius: 0,
      fill: false
    });
  }

  if (pitchFilter === 'all' || pitchFilter === 'Pitch 2') {
    const p2Data = dates.map(d => {
      const items = clippingLogs.filter(x => x.date === d && x.pitch === 'Pitch 2' && x.totalL > 0);
      return items.length > 0 ? Number(items.reduce((sum, item) => sum + item.estTotalL, 0).toFixed(1)) : null;
    });
    datasets.push({
      label: 'Pitch 2 Est. Total (L)',
      data: p2Data,
      borderColor: '#10b981',
      backgroundColor: '#10b981',
      fill: false,
      tension: 0.3,
      borderWidth: 2.5,
      pointRadius: 4,
      pointHoverRadius: 6,
      spanGaps: true
    });
    datasets.push({
      label: `Pitch 2 Active Avg (${p2AvgVal.toFixed(1)} L)`,
      data: dates.map(() => Number(p2AvgVal.toFixed(1))),
      borderColor: '#34d399',
      borderWidth: 1.5,
      borderDash: [6, 4],
      pointRadius: 0,
      fill: false
    });
  }

  // Add Optimal Target Lines (70L - 150L)
  datasets.push({
    label: 'Optimal Min (70 L)',
    data: dates.map(() => 70),
    borderColor: 'rgba(52, 211, 153, 0.8)',
    borderWidth: 1.5,
    borderDash: [4, 4],
    pointRadius: 0,
    fill: false
  });
  datasets.push({
    label: 'Optimal Max (150 L)',
    data: dates.map(() => 150),
    borderColor: 'rgba(245, 158, 11, 0.8)',
    borderWidth: 1.5,
    borderDash: [4, 4],
    pointRadius: 0,
    fill: false
  });

  if (charts.growthTrend) charts.growthTrend.destroy();

  charts.growthTrend = new Chart(ctx, {
    type: 'line',
    data: { labels: dates, datasets },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: {
        mode: 'index',
        intersect: false
      },
      plugins: {
        legend: { labels: { color: '#9ca3af', font: { family: 'Outfit' } } },
        tooltip: {
          callbacks: {
            label: function(context) {
              if (context.parsed.y === null || context.parsed.y === undefined) return null;
              return ` ${context.dataset.label}: ${context.parsed.y} L`;
            }
          }
        }
      },
      scales: {
        x: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#9ca3af' } },
        y: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#9ca3af' }, title: { display: true, text: 'Est. Total Yield (Liters)', color: '#9ca3af' } }
      }
    }
  });
}

function renderSectionalRadarChart() {
  const ctx = document.getElementById('chart-sectional-radar');
  if (!ctx) return;

  const activeP1 = clippingLogs.filter(d => d.pitch === 'Pitch 1' && d.totalL > 0);
  const activeP2 = clippingLogs.filter(d => d.pitch === 'Pitch 2' && d.totalL > 0);

  const p1Left = activeP1.reduce((a, b) => a + b.left, 0) / (activeP1.length || 1);
  const p1Center = activeP1.reduce((a, b) => a + b.center, 0) / (activeP1.length || 1);
  const p1Right = activeP1.reduce((a, b) => a + b.right, 0) / (activeP1.length || 1);

  const p2Left = activeP2.reduce((a, b) => a + b.left, 0) / (activeP2.length || 1);
  const p2Center = activeP2.reduce((a, b) => a + b.center, 0) / (activeP2.length || 1);
  const p2Right = activeP2.reduce((a, b) => a + b.right, 0) / (activeP2.length || 1);

  if (charts.sectionalRadar) charts.sectionalRadar.destroy();

  charts.sectionalRadar = new Chart(ctx, {
    type: 'radar',
    data: {
      labels: ['Center Swath (L)', 'Right Swath (L)', 'Left Swath (L)'],
      datasets: [
        {
          label: 'Pitch 1 Avg Sectional',
          data: [Number(p1Center.toFixed(1)), Number(p1Right.toFixed(1)), Number(p1Left.toFixed(1))],
          backgroundColor: 'rgba(59, 130, 246, 0.25)',
          borderColor: '#3b82f6',
          pointBackgroundColor: '#3b82f6'
        },
        {
          label: 'Pitch 2 Avg Sectional',
          data: [Number(p2Center.toFixed(1)), Number(p2Right.toFixed(1)), Number(p2Left.toFixed(1))],
          backgroundColor: 'rgba(16, 185, 129, 0.25)',
          borderColor: '#10b981',
          pointBackgroundColor: '#10b981'
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        r: {
          grid: { color: 'rgba(255,255,255,0.08)' },
          angleLines: { color: 'rgba(255,255,255,0.08)' },
          pointLabels: { color: '#f3f4f6', font: { family: 'Outfit', size: 12 } },
          ticks: { backdropColor: 'transparent', color: '#9ca3af' }
        }
      },
      plugins: {
        legend: { labels: { color: '#9ca3af' } }
      }
    }
  });
}

function renderClipVolBarChart() {
  const ctx = document.getElementById('chart-clipvol-bar');
  if (!ctx) return;

  const dates = [...new Set(clippingLogs.map(d => d.date))].sort();
  const p1Vals = dates.map(d => {
    const items = clippingLogs.filter(x => x.date === d && x.pitch === 'Pitch 1' && x.totalL > 0);
    if (items.length === 0) return null;
    return Number((items.reduce((a, b) => a + b.clipVol, 0) / items.length).toFixed(3));
  });
  const p2Vals = dates.map(d => {
    const items = clippingLogs.filter(x => x.date === d && x.pitch === 'Pitch 2' && x.totalL > 0);
    if (items.length === 0) return null;
    return Number((items.reduce((a, b) => a + b.clipVol, 0) / items.length).toFixed(3));
  });

  const active = clippingLogs.filter(d => d.totalL > 0);
  const overallAvgCV = active.length > 0 ? (active.reduce((a, b) => a + b.clipVol, 0) / active.length) : 0;

  if (charts.clipVolBar) charts.clipVolBar.destroy();

  charts.clipVolBar = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: dates,
      datasets: [
        { label: 'Pitch 1 (mL/m²)', data: p1Vals, backgroundColor: '#3b82f6', borderRadius: 4 },
        { label: 'Pitch 2 (mL/m²)', data: p2Vals, backgroundColor: '#10b981', borderRadius: 4 },
        {
          type: 'line',
          label: `Overall Active Avg (${overallAvgCV.toFixed(3)} mL/m²)`,
          data: dates.map(() => Number(overallAvgCV.toFixed(3))),
          borderColor: '#f59e0b',
          borderWidth: 2,
          borderDash: [5, 4],
          pointRadius: 0,
          fill: false
        },
        {
          type: 'line',
          label: 'Ideal Min (0.010 mL/m²)',
          data: dates.map(() => 0.010),
          borderColor: 'rgba(52, 211, 153, 0.8)',
          borderWidth: 1.5,
          borderDash: [4, 4],
          pointRadius: 0,
          fill: false
        },
        {
          type: 'line',
          label: 'Ideal Max (0.015 mL/m²)',
          data: dates.map(() => 0.015),
          borderColor: 'rgba(59, 130, 246, 0.8)',
          borderWidth: 1.5,
          borderDash: [4, 4],
          pointRadius: 0,
          fill: false
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: {
        mode: 'index',
        intersect: false
      },
      plugins: { legend: { labels: { color: '#9ca3af' } } },
      scales: {
        x: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#9ca3af' } },
        y: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#9ca3af' }, title: { display: true, text: 'ClipVol Intensity (mL/m²)', color: '#9ca3af' } }
      }
    }
  });
}

function renderComparisonStackedChart() {
  const ctx = document.getElementById('chart-comparison-stacked');
  if (!ctx) return;

  const dates = [...new Set(clippingLogs.map(d => d.date))].sort();
  const p1Totals = dates.map(d => {
    const items = clippingLogs.filter(x => x.date === d && x.pitch === 'Pitch 1' && x.totalL > 0);
    return items.length > 0 ? Number(items.reduce((sum, item) => sum + item.totalL, 0).toFixed(1)) : null;
  });
  const p2Totals = dates.map(d => {
    const items = clippingLogs.filter(x => x.date === d && x.pitch === 'Pitch 2' && x.totalL > 0);
    return items.length > 0 ? Number(items.reduce((sum, item) => sum + item.totalL, 0).toFixed(1)) : null;
  });

  const activeAll = clippingLogs.filter(d => d.totalL > 0);
  const avgBasketVol = activeAll.length > 0 ? (activeAll.reduce((a, b) => a + b.totalL, 0) / activeAll.length) : 0;

  if (charts.stacked) charts.stacked.destroy();

  charts.stacked = new Chart(ctx, {
    type: 'line',
    data: {
      labels: dates,
      datasets: [
        { label: 'Pitch 1 Direct Harvest (L)', data: p1Totals, borderColor: '#ec4899', backgroundColor: '#ec4899', fill: false, tension: 0.3, borderWidth: 2.5, pointRadius: 4, pointHoverRadius: 6, spanGaps: true },
        { label: 'Pitch 2 Direct Harvest (L)', data: p2Totals, borderColor: '#06b6d4', backgroundColor: '#06b6d4', fill: false, tension: 0.3, borderWidth: 2.5, pointRadius: 4, pointHoverRadius: 6, spanGaps: true },
        {
          label: `Overall Active Avg (${avgBasketVol.toFixed(1)} L)`,
          data: dates.map(() => Number(avgBasketVol.toFixed(1))),
          borderColor: '#f59e0b',
          borderWidth: 2,
          borderDash: [6, 4],
          pointRadius: 0,
          fill: false
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: {
        mode: 'index',
        intersect: false
      },
      plugins: {
        legend: { labels: { color: '#9ca3af' } },
        tooltip: {
          callbacks: {
            label: function(context) {
              if (context.parsed.y === null || context.parsed.y === undefined) return null;
              return ` ${context.dataset.label}: ${context.parsed.y} L`;
            }
          }
        }
      },
      scales: {
        x: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#9ca3af' } },
        y: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#9ca3af' }, title: { display: true, text: 'Direct Basket Harvest (L)', color: '#9ca3af' } }
      }
    }
  });
}

/* ==========================================================================
   Agronomic Insights & Advisory Engine
   ========================================================================== */

function renderAdvisoryTab() {
  // Sort logs by date descending to accurately identify latest clip data
  const p1Logs = clippingLogs.filter(d => d.pitch === 'Pitch 1' && d.totalL > 0).sort((a, b) => new Date(b.date) - new Date(a.date));
  const p2Logs = clippingLogs.filter(d => d.pitch === 'Pitch 2' && d.totalL > 0).sort((a, b) => new Date(b.date) - new Date(a.date));

  const latestP1 = p1Logs[0] || null;
  const prevP1 = p1Logs[1] || null;
  const latestP2 = p2Logs[0] || null;
  const prevP2 = p2Logs[1] || null;

  // Historical season averages
  const p1CV = p1Logs.length > 0 ? (p1Logs.reduce((a, b) => a + b.clipVol, 0) / p1Logs.length) : 0;
  const p1Tot = p1Logs.length > 0 ? (p1Logs.reduce((a, b) => a + b.estTotalL, 0) / p1Logs.length) : 0;

  const p2CV = p2Logs.length > 0 ? (p2Logs.reduce((a, b) => a + b.clipVol, 0) / p2Logs.length) : 0;
  const p2Tot = p2Logs.length > 0 ? (p2Logs.reduce((a, b) => a + b.estTotalL, 0) / p2Logs.length) : 0;

  // Update Season Average Metric Rows
  const elP1CV = document.getElementById('adv-p1-clipvol');
  if (elP1CV) elP1CV.textContent = `${p1CV.toFixed(3)} mL/m²`;
  const elP1Tot = document.getElementById('adv-p1-total');
  if (elP1Tot) elP1Tot.textContent = `${p1Tot.toFixed(1)} L / cut`;

  const elP2CV = document.getElementById('adv-p2-clipvol');
  if (elP2CV) elP2CV.textContent = `${p2CV.toFixed(3)} mL/m²`;
  const elP2Tot = document.getElementById('adv-p2-total');
  if (elP2Tot) elP2Tot.textContent = `${p2Tot.toFixed(1)} L / cut`;

  // Update Pitch 1 Latest Cut Highlight Box
  if (latestP1) {
    const p1LatestDate = document.getElementById('adv-p1-latest-date');
    if (p1LatestDate) p1LatestDate.textContent = `Latest Cut: ${latestP1.date}`;

    const p1LatestTotal = document.getElementById('adv-p1-latest-total');
    if (p1LatestTotal) p1LatestTotal.textContent = `${latestP1.estTotalL.toFixed(1)} L`;

    const p1LatestCV = document.getElementById('adv-p1-latest-clipvol');
    if (p1LatestCV) p1LatestCV.textContent = `${latestP1.clipVol.toFixed(3)} mL/m²`;

    const p1LatestDetails = document.getElementById('adv-p1-latest-details');
    if (p1LatestDetails) {
      const dirIcon = latestP1.direction === 'Length' ? 'fa-arrows-up-down' : (latestP1.direction === 'Width' ? 'fa-arrows-left-right' : 'fa-scissors');
      p1LatestDetails.innerHTML = `<i class="fa-solid ${dirIcon}"></i> ${latestP1.direction || 'Standard'} Cut &bull; Basket: ${latestP1.totalL.toFixed(1)}L (L:${latestP1.left} C:${latestP1.center} R:${latestP1.right})`;
    }

    const p1LatestTrend = document.getElementById('adv-p1-latest-trend');
    if (p1LatestTrend) {
      const tier = getPitchTotalTier(latestP1.estTotalL);
      let trendText = tier.label.split(' ').slice(3).join(' ') || tier.label;
      if (prevP1 && prevP1.estTotalL > 0) {
        const diff = ((latestP1.estTotalL - prevP1.estTotalL) / prevP1.estTotalL) * 100;
        const diffSign = diff > 0 ? '+' : '';
        trendText += ` (${diffSign}${diff.toFixed(0)}% vs prev)`;
      }
      p1LatestTrend.className = `badge badge-xs ${tier.badgeClass}`;
      p1LatestTrend.textContent = trendText;
    }

    // Dynamic header status badge based on latest cut
    const p1Tier = getPitchTotalTier(latestP1.estTotalL);
    const p1Badge = document.getElementById('pitch1-status-badge');
    if (p1Badge) {
      p1Badge.className = `badge ${p1Tier.badgeClass}`;
      p1Badge.textContent = p1Tier.label;
    }
  } else {
    const p1Badge = document.getElementById('pitch1-status-badge');
    if (p1Badge) {
      p1Badge.className = 'badge badge-intermediate';
      p1Badge.textContent = 'No Active Cut';
    }
  }

  // Update Pitch 2 Latest Cut Highlight Box
  if (latestP2) {
    const p2LatestDate = document.getElementById('adv-p2-latest-date');
    if (p2LatestDate) p2LatestDate.textContent = `Latest Cut: ${latestP2.date}`;

    const p2LatestTotal = document.getElementById('adv-p2-latest-total');
    if (p2LatestTotal) p2LatestTotal.textContent = `${latestP2.estTotalL.toFixed(1)} L`;

    const p2LatestCV = document.getElementById('adv-p2-latest-clipvol');
    if (p2LatestCV) p2LatestCV.textContent = `${latestP2.clipVol.toFixed(3)} mL/m²`;

    const p2LatestDetails = document.getElementById('adv-p2-latest-details');
    if (p2LatestDetails) {
      const dirIcon = latestP2.direction === 'Length' ? 'fa-arrows-up-down' : (latestP2.direction === 'Width' ? 'fa-arrows-left-right' : 'fa-scissors');
      p2LatestDetails.innerHTML = `<i class="fa-solid ${dirIcon}"></i> ${latestP2.direction || 'Standard'} Cut &bull; Basket: ${latestP2.totalL.toFixed(1)}L (L:${latestP2.left} C:${latestP2.center} R:${latestP2.right})`;
    }

    const p2LatestTrend = document.getElementById('adv-p2-latest-trend');
    if (p2LatestTrend) {
      const tier = getPitchTotalTier(latestP2.estTotalL);
      let trendText = tier.label.split(' ').slice(3).join(' ') || tier.label;
      if (prevP2 && prevP2.estTotalL > 0) {
        const diff = ((latestP2.estTotalL - prevP2.estTotalL) / prevP2.estTotalL) * 100;
        const diffSign = diff > 0 ? '+' : '';
        trendText += ` (${diffSign}${diff.toFixed(0)}% vs prev)`;
      }
      p2LatestTrend.className = `badge badge-xs ${tier.badgeClass}`;
      p2LatestTrend.textContent = trendText;
    }

    // Dynamic header status badge based on latest cut
    const p2Tier = getPitchTotalTier(latestP2.estTotalL);
    const p2Badge = document.getElementById('pitch2-status-badge');
    if (p2Badge) {
      p2Badge.className = `badge ${p2Tier.badgeClass}`;
      p2Badge.textContent = p2Tier.label;
    }
  } else {
    const p2Badge = document.getElementById('pitch2-status-badge');
    if (p2Badge) {
      p2Badge.className = 'badge badge-intermediate';
      p2Badge.textContent = 'No Active Cut';
    }
  }

  // Active Soil Diagnostic Samples for Pitch 1 & Pitch 2
  const p1Soil = soilLogs.filter(s => s.pitch === 'Pitch 1').sort((a, b) => new Date(b.date) - new Date(a.date))[0] || null;
  const p2Soil = soilLogs.filter(s => s.pitch === 'Pitch 2').sort((a, b) => new Date(b.date) - new Date(a.date))[0] || null;

  // Populate Pitch 1 Live Soil Snapshot
  if (p1Soil) {
    const lbl1 = document.getElementById('adv-p1-soil-sample-label');
    if (lbl1) lbl1.innerHTML = `<i class="fa-solid fa-flask text-emerald"></i> Active Soil Sample: ${p1Soil.date} (${p1Soil.labRef || 'AGV-P1'})`;
    const ph1 = document.getElementById('adv-p1-soil-ph');
    if (ph1) ph1.textContent = Number(p1Soil.ph || 0).toFixed(1);
    const k1 = document.getElementById('adv-p1-soil-k');
    if (k1) k1.textContent = `${Number(p1Soil.potassium || 0).toFixed(0)} ppm`;
    const pmn1 = document.getElementById('adv-p1-soil-pmn');
    if (pmn1) pmn1.textContent = `${Number(p1Soil.potentially_min_n || 0).toFixed(0)} kg/ha`;
    const om1 = document.getElementById('adv-p1-soil-om');
    if (om1) om1.textContent = `${Number(p1Soil.org_matter || 0).toFixed(1)}%`;

    const kRes1 = evaluateSoilParam('potassium', p1Soil.potassium);
    const badge1 = document.getElementById('adv-p1-soil-badge');
    if (badge1) {
      if (kRes1 && kRes1.status === 'low') {
        badge1.className = 'badge badge-sm badge-low';
        badge1.textContent = 'K Deficit Alert';
      } else {
        badge1.className = 'badge badge-sm badge-ideal';
        badge1.textContent = 'Nutrient Balanced';
      }
    }
  } else {
    const lbl1 = document.getElementById('adv-p1-soil-sample-label');
    if (lbl1) lbl1.innerHTML = `<i class="fa-solid fa-flask text-muted"></i> No soil test recorded for Pitch 1`;
    const ph1 = document.getElementById('adv-p1-soil-ph');
    if (ph1) ph1.textContent = '--';
    const k1 = document.getElementById('adv-p1-soil-k');
    if (k1) k1.textContent = '--';
    const pmn1 = document.getElementById('adv-p1-soil-pmn');
    if (pmn1) pmn1.textContent = '--';
    const om1 = document.getElementById('adv-p1-soil-om');
    if (om1) om1.textContent = '--';
    const badge1 = document.getElementById('adv-p1-soil-badge');
    if (badge1) {
      badge1.className = 'badge badge-sm badge-optimal';
      badge1.textContent = 'Pending Soil Log';
    }
  }

  // Populate Pitch 2 Live Soil Snapshot
  if (p2Soil) {
    const lbl2 = document.getElementById('adv-p2-soil-sample-label');
    if (lbl2) lbl2.innerHTML = `<i class="fa-solid fa-flask text-emerald"></i> Active Soil Sample: ${p2Soil.date} (${p2Soil.labRef || 'AGV-P2'})`;
    const ph2 = document.getElementById('adv-p2-soil-ph');
    if (ph2) ph2.textContent = Number(p2Soil.ph || 0).toFixed(1);
    const k2 = document.getElementById('adv-p2-soil-k');
    if (k2) k2.textContent = `${Number(p2Soil.potassium || 0).toFixed(0)} ppm`;
    const pmn2 = document.getElementById('adv-p2-soil-pmn');
    if (pmn2) pmn2.textContent = `${Number(p2Soil.potentially_min_n || 0).toFixed(0)} kg/ha`;
    const om2 = document.getElementById('adv-p2-soil-om');
    if (om2) om2.textContent = `${Number(p2Soil.org_matter || 0).toFixed(1)}%`;

    const kRes2 = evaluateSoilParam('potassium', p2Soil.potassium);
    const badge2 = document.getElementById('adv-p2-soil-badge');
    if (badge2) {
      if (kRes2 && kRes2.status === 'low') {
        badge2.className = 'badge badge-sm badge-low';
        badge2.textContent = 'K Deficit Alert';
      } else {
        badge2.className = 'badge badge-sm badge-ideal';
        badge2.textContent = 'Optimal Equilibrium';
      }
    }
  } else {
    const lbl2 = document.getElementById('adv-p2-soil-sample-label');
    if (lbl2) lbl2.innerHTML = `<i class="fa-solid fa-flask text-muted"></i> No soil test recorded for Pitch 2`;
    const ph2 = document.getElementById('adv-p2-soil-ph');
    if (ph2) ph2.textContent = '--';
    const k2 = document.getElementById('adv-p2-soil-k');
    if (k2) k2.textContent = '--';
    const pmn2 = document.getElementById('adv-p2-soil-pmn');
    if (pmn2) pmn2.textContent = '--';
    const om2 = document.getElementById('adv-p2-soil-om');
    if (om2) om2.textContent = '--';
    const badge2 = document.getElementById('adv-p2-soil-badge');
    if (badge2) {
      badge2.className = 'badge badge-sm badge-optimal';
      badge2.textContent = 'Pending Soil Log';
    }
  }

  // Combined Dynamic Recommendations for Pitch 1 based on Most Recent Clip Data + Soil Diagnostics
  const p1List = document.getElementById('adv-p1-list');
  if (p1List) {
    p1List.innerHTML = '';

    if (latestP1) {
      // 1. Kinetic Harvest Rate Analysis
      if (latestP1.estTotalL > 150) {
        p1List.innerHTML += `
          <li class="advice-card advice-card-amber">
            <div class="advice-card-icon"><i class="fa-solid fa-arrow-trend-up"></i></div>
            <div class="advice-card-content">
              <div class="advice-card-header">
                <span class="advice-card-title">Vegetative Yield Rate Surge (${latestP1.date})</span>
                <span class="badge badge-xs badge-amber">Growth Surge</span>
              </div>
              <p class="advice-card-desc">Pitch yield registered at <strong>${latestP1.estTotalL.toFixed(1)} L/cut</strong> (${latestP1.clipVol.toFixed(3)} mL/m² with ${latestP1.totalL.toFixed(1)}L sample harvest). Rapid leaf elongation is actively drawing down crown carbohydrate reserves.</p>
            </div>
          </li>
          <li class="advice-card advice-card-pink">
            <div class="advice-card-icon"><i class="fa-solid fa-bottle-droplet"></i></div>
            <div class="advice-card-content">
              <div class="advice-card-header">
                <span class="advice-card-title">Attraxor PGR Regulation Directive</span>
                <span class="badge badge-xs badge-pink">Urgent Spray</span>
              </div>
              <p class="advice-card-desc">Sward pushing <strong>${latestP1.estTotalL.toFixed(1)} L/cut</strong> requires prohexadione-calcium application in the sub-21°C weather window (180–200 GDD cycle) to arrest vertical surge and redirect photosynthate into lateral tillering.</p>
            </div>
          </li>`;
      } else if (latestP1.estTotalL >= 70) {
        p1List.innerHTML += `
          <li class="advice-card advice-card-emerald">
            <div class="advice-card-icon"><i class="fa-solid fa-circle-check"></i></div>
            <div class="advice-card-content">
              <div class="advice-card-header">
                <span class="advice-card-title">Optimal Growth Equilibrium (${latestP1.date})</span>
                <span class="badge badge-xs badge-ideal">In Target</span>
              </div>
              <p class="advice-card-desc">Latest cut yielded <strong>${latestP1.estTotalL.toFixed(1)} L/cut</strong> (${latestP1.clipVol.toFixed(3)} mL/m²), inside the Premier League target envelope (70–150 L/cut). Photosynthetic production matches mowing removal.</p>
            </div>
          </li>`;
      } else {
        p1List.innerHTML += `
          <li class="advice-card advice-card-cyan">
            <div class="advice-card-icon"><i class="fa-solid fa-arrow-down"></i></div>
            <div class="advice-card-content">
              <div class="advice-card-header">
                <span class="advice-card-title">Growth Suppression Alert (${latestP1.date})</span>
                <span class="badge badge-xs badge-cyan">Low Biomass</span>
              </div>
              <p class="advice-card-desc">Latest cut yielded <strong>${latestP1.estTotalL.toFixed(1)} L/cut</strong> (<70 L threshold). Sward recovery may be compromised; verify rootzone moisture, compaction, and soil temperature.</p>
            </div>
          </li>`;
      }

      // 2. Potassium Drawdown vs Soil Test
      if (p1Soil && p1Soil.potassium < 125) {
        p1List.innerHTML += `
          <li class="advice-card advice-card-amber">
            <div class="advice-card-icon"><i class="fa-solid fa-atom"></i></div>
            <div class="advice-card-content">
              <div class="advice-card-header">
                <span class="advice-card-title">Potassium Deficit &amp; Extraction</span>
                <span class="badge badge-xs badge-low">Replenish K</span>
              </div>
              <p class="advice-card-desc">Tested Potassium at <strong>${p1Soil.potassium} ppm</strong> is below the 125 ppm Agrovista guideline. High clipping biomass extraction (${latestP1.estTotalL.toFixed(1)} L/cut) is rapidly depleting rootzone K. Apply 0-0-50 Sulphate of Potash or Potassium Phosphite to restore cell wall rigidity and wear tolerance.</p>
            </div>
          </li>`;
      } else if (p1Soil && p1Soil.potassium >= 125) {
        p1List.innerHTML += `
          <li class="advice-card advice-card-emerald">
            <div class="advice-card-icon"><i class="fa-solid fa-atom"></i></div>
            <div class="advice-card-content">
              <div class="advice-card-header">
                <span class="advice-card-title">Potassium Nutrition Balanced</span>
                <span class="badge badge-xs badge-ideal">Balanced</span>
              </div>
              <p class="advice-card-desc">Soil K at <strong>${p1Soil.potassium} ppm</strong> adequately supports recent ${latestP1.estTotalL.toFixed(1)} L/cut extraction. Continue balanced N:K spoon feeding (1:1.5 ratio).</p>
            </div>
          </li>`;
      }

      // 3. Sectional Distribution & Mowing Pattern
      const p1Diff = Math.abs(latestP1.center - ((latestP1.left + latestP1.right) / 2));
      if (p1Diff > 2.5 && latestP1.totalL > 10) {
        p1List.innerHTML += `
          <li class="advice-card advice-card-cyan">
            <div class="advice-card-icon"><i class="fa-solid fa-chart-column"></i></div>
            <div class="advice-card-content">
              <div class="advice-card-header">
                <span class="advice-card-title">Sectional Yield Uniformity</span>
                <span class="badge badge-xs badge-cyan">Traffic Variance</span>
              </div>
              <p class="advice-card-desc">Central strip harvest (${latestP1.center.toFixed(1)}L) varies from wings (L:${latestP1.left.toFixed(1)}L / R:${latestP1.right.toFixed(1)}L). Target intensive match play traffic areas with localized foliar biostimulants.</p>
            </div>
          </li>`;
      }
      p1List.innerHTML += `
        <li class="advice-card advice-card-emerald">
          <div class="advice-card-icon"><i class="fa-solid fa-arrows-spin"></i></div>
          <div class="advice-card-content">
            <div class="advice-card-header">
              <span class="advice-card-title">Mowing Direction &amp; Grain Control</span>
              <span class="badge badge-xs badge-intermediate">Pass Alternation</span>
            </div>
            <p class="advice-card-desc">Latest cut completed in <strong>${latestP1.direction}</strong> pattern. Alternate to <strong>${latestP1.direction === 'Length' ? 'Width' : 'Length'}</strong> on the next pass to eliminate ryegrass leaf blade grain.</p>
          </div>
        </li>`;

      // 4. Biological Nitrogen & Thatch
      if (p1Soil && p1Soil.potentially_min_n >= 50) {
        p1List.innerHTML += `
          <li class="advice-card advice-card-emerald">
            <div class="advice-card-icon"><i class="fa-solid fa-seedling"></i></div>
            <div class="advice-card-content">
              <div class="advice-card-header">
                <span class="advice-card-title">Biological Nitrogen Credit</span>
                <span class="badge badge-xs badge-ideal">Active Mineralization</span>
              </div>
              <p class="advice-card-desc">Soil PMN test reveals <strong>${p1Soil.potentially_min_n} kg N/ha</strong> active biological nitrogen. Reduce synthetic granular N dosing by 15–20% to prevent scalar scalping.</p>
            </div>
          </li>`;
      }
      if (p1Soil && p1Soil.org_matter >= 2.0) {
        p1List.innerHTML += `
          <li class="advice-card advice-card-blue">
            <div class="advice-card-icon"><i class="fa-solid fa-layer-group"></i></div>
            <div class="advice-card-content">
              <div class="advice-card-header">
                <span class="advice-card-title">Canopy &amp; Thatch Management</span>
                <span class="badge badge-xs badge-intermediate">Aeration</span>
              </div>
              <p class="advice-card-desc">Organic Matter at <strong>${p1Soil.org_matter}%</strong> holds surface boundary humidity. Perform light sarrel rolling and regular verti-cutting to avoid Microdochium Patch.</p>
            </div>
          </li>`;
      }
    } else {
      p1List.innerHTML += `
        <li class="advice-card advice-card-emerald">
          <div class="advice-card-icon"><i class="fa-solid fa-clipboard-check"></i></div>
          <div class="advice-card-content">
            <div class="advice-card-header">
              <span class="advice-card-title">Awaiting Pitch 1 Clipping Data</span>
            </div>
            <p class="advice-card-desc">Log clipping yield entries after mowing to generate automated real-time physiological diagnostics.</p>
          </div>
        </li>`;
    }
  }

  // Combined Dynamic Recommendations for Pitch 2 based on Most Recent Clip Data + Soil Diagnostics
  const p2List = document.getElementById('adv-p2-list');
  if (p2List) {
    p2List.innerHTML = '';

    if (latestP2) {
      // 1. Kinetic Harvest Rate Analysis
      if (latestP2.estTotalL > 150) {
        p2List.innerHTML += `
          <li class="advice-card advice-card-amber">
            <div class="advice-card-icon"><i class="fa-solid fa-arrow-trend-up"></i></div>
            <div class="advice-card-content">
              <div class="advice-card-header">
                <span class="advice-card-title">Vegetative Yield Rate Surge (${latestP2.date})</span>
                <span class="badge badge-xs badge-amber">Growth Surge</span>
              </div>
              <p class="advice-card-desc">Pitch yield escalated to <strong>${latestP2.estTotalL.toFixed(1)} L/cut</strong> (${latestP2.clipVol.toFixed(3)} mL/m² with ${latestP2.totalL.toFixed(1)}L harvest). Growth has entered a high-yield vegetative flush phase.</p>
            </div>
          </li>
          <li class="advice-card advice-card-pink">
            <div class="advice-card-icon"><i class="fa-solid fa-bottle-droplet"></i></div>
            <div class="advice-card-content">
              <div class="advice-card-header">
                <span class="advice-card-title">PGR Intervention Directive</span>
                <span class="badge badge-xs badge-pink">Urgent Spray</span>
              </div>
              <p class="advice-card-desc">Recent harvest (<strong>${latestP2.estTotalL.toFixed(1)} L/cut</strong>) exceeds the 150 L threshold. Prepare Attraxor or Primo Maxx PGR application to curb vertical leaf extension and strengthen root anchoring.</p>
            </div>
          </li>`;
      } else if (latestP2.estTotalL >= 70) {
        p2List.innerHTML += `
          <li class="advice-card advice-card-emerald">
            <div class="advice-card-icon"><i class="fa-solid fa-circle-check"></i></div>
            <div class="advice-card-content">
              <div class="advice-card-header">
                <span class="advice-card-title">Balanced Vegetative Equilibrium (${latestP2.date})</span>
                <span class="badge badge-xs badge-ideal">In Target</span>
              </div>
              <p class="advice-card-desc">Latest cut yielded <strong>${latestP2.estTotalL.toFixed(1)} L/cut</strong> (${latestP2.clipVol.toFixed(3)} mL/m²). Grass plant canopy growth is stable and resilient.</p>
            </div>
          </li>`;
      } else {
        p2List.innerHTML += `
          <li class="advice-card advice-card-cyan">
            <div class="advice-card-icon"><i class="fa-solid fa-arrow-down"></i></div>
            <div class="advice-card-content">
              <div class="advice-card-header">
                <span class="advice-card-title">Growth Suppression Alert (${latestP2.date})</span>
                <span class="badge badge-xs badge-cyan">Low Biomass</span>
              </div>
              <p class="advice-card-desc">Latest cut yielded <strong>${latestP2.estTotalL.toFixed(1)} L/cut</strong>. Inspect rootzone compaction and moisture levels.</p>
            </div>
          </li>`;
      }

      // 2. Potassium & Nutrient Balance
      if (p2Soil && p2Soil.potassium < 125) {
        p2List.innerHTML += `
          <li class="advice-card advice-card-amber">
            <div class="advice-card-icon"><i class="fa-solid fa-atom"></i></div>
            <div class="advice-card-content">
              <div class="advice-card-header">
                <span class="advice-card-title">Potassium Drawdown Warning</span>
                <span class="badge badge-xs badge-low">Replenish K</span>
              </div>
              <p class="advice-card-desc">Soil K is low (${p2Soil.potassium} ppm). Surge harvest (${latestP2.estTotalL.toFixed(1)} L/cut) requires Potassium replenishment (0-0-50 Sulphate of Potash).</p>
            </div>
          </li>`;
      } else if (p2Soil && p2Soil.potassium >= 125) {
        p2List.innerHTML += `
          <li class="advice-card advice-card-emerald">
            <div class="advice-card-icon"><i class="fa-solid fa-atom"></i></div>
            <div class="advice-card-content">
              <div class="advice-card-header">
                <span class="advice-card-title">Nutrient Equilibrium Confirmed</span>
                <span class="badge badge-xs badge-ideal">Balanced</span>
              </div>
              <p class="advice-card-desc">Soil Potassium at <strong>${p2Soil.potassium} ppm</strong> is optimal, maintaining high turgor and cell wall elasticity under current ${latestP2.estTotalL.toFixed(1)} L/cut yield.</p>
            </div>
          </li>`;
      }

      // 3. Mowing Direction & Alternation
      p2List.innerHTML += `
        <li class="advice-card advice-card-emerald">
          <div class="advice-card-icon"><i class="fa-solid fa-arrows-spin"></i></div>
          <div class="advice-card-content">
            <div class="advice-card-header">
              <span class="advice-card-title">Mowing Direction &amp; Grain Control</span>
              <span class="badge badge-xs badge-intermediate">Pass Alternation</span>
            </div>
            <p class="advice-card-desc">Latest cut performed in <strong>${latestP2.direction}</strong> orientation. Continue alternating Width/Length mowing passes to prevent ryegrass leaf blade lean.</p>
          </div>
        </li>`;

      // 4. Soil Air-Porosity & Biology
      if (p2Soil) {
        p2List.innerHTML += `
          <li class="advice-card advice-card-blue">
            <div class="advice-card-icon"><i class="fa-solid fa-layer-group"></i></div>
            <div class="advice-card-content">
              <div class="advice-card-header">
                <span class="advice-card-title">Surface Air-Porosity &amp; Topdressing</span>
                <span class="badge badge-xs badge-intermediate">Aeration</span>
              </div>
              <p class="advice-card-desc">OM at <strong>${p2Soil.org_matter}%</strong> is optimal; schedule light sand topdressing (0.5 mm) every 3–4 weeks to maintain root oxygen levels.</p>
            </div>
          </li>`;
        if (p2Soil.potentially_min_n >= 50) {
          p2List.innerHTML += `
            <li class="advice-card advice-card-emerald">
              <div class="advice-card-icon"><i class="fa-solid fa-seedling"></i></div>
              <div class="advice-card-content">
                <div class="advice-card-header">
                  <span class="advice-card-title">Biological PMN Credit</span>
                  <span class="badge badge-xs badge-ideal">Mineralization</span>
                </div>
                <p class="advice-card-desc">Active biological nitrogen (<strong>${p2Soil.potentially_min_n} kg N/ha</strong>) provides natural baseline nutrition.</p>
              </div>
            </li>`;
        }
      }
    } else {
      p2List.innerHTML += `
        <li class="advice-card advice-card-emerald">
          <div class="advice-card-icon"><i class="fa-solid fa-clipboard-check"></i></div>
          <div class="advice-card-content">
            <div class="advice-card-header">
              <span class="advice-card-title">Awaiting Pitch 2 Clipping Data</span>
            </div>
            <p class="advice-card-desc">Log clipping yield entries after mowing to generate automated real-time physiological diagnostics.</p>
          </div>
        </li>`;
    }
  }

  // Update Dynamic Integrated Action Protocol Matrix Cards
  const activeLatest = activeAnatomyPitch === 'Pitch 2' ? (latestP2 || latestP1) : (latestP1 || latestP2);
  const activeSoil = activeAnatomyPitch === 'Pitch 2' ? (p2Soil || p1Soil) : (p1Soil || p2Soil);
  const latestTot = activeLatest ? activeLatest.estTotalL : (p1Tot || 206.7);
  const latestCV = activeLatest ? activeLatest.clipVol : (p1CV || 0.029);

  // 1. Potassium Matrix Card
  const matKStatus = document.getElementById('mat-k-status');
  const matKDesc = document.getElementById('mat-k-desc');
  const matKAction = document.getElementById('mat-k-action');
  if (matKDesc) {
    if (activeSoil && activeSoil.potassium < 125) {
      if (matKStatus) { matKStatus.className = 'strategy-badge badge-warning'; matKStatus.textContent = 'Action Required'; }
      matKDesc.innerHTML = `High clipping removal (<strong>${latestTot.toFixed(1)} L/cut</strong>) is rapidly stripping rootzone K. Active soil test reads <strong>${activeSoil.potassium} ppm</strong> (Agrovista target: 125 – 225 ppm). Low K compromises stomatal drought and wear resistance.`;
      if (matKAction) matKAction.textContent = 'Apply 0-0-50 Sulphate of Potash (K₂SO₄) at 15-20 g/m² or foliar potassium phosphite to replenish intracellular K without stimulating top-growth flushes.';
    } else if (activeSoil && activeSoil.potassium >= 125) {
      if (matKStatus) { matKStatus.className = 'strategy-badge badge-optimal'; matKStatus.textContent = 'Nutrient Balanced'; }
      matKDesc.innerHTML = `Soil Potassium at <strong>${activeSoil.potassium} ppm</strong> is within the target window (125 – 225 ppm), adequately buffering recent biomass harvest of <strong>${latestTot.toFixed(1)} L/cut</strong>.`;
      if (matKAction) matKAction.textContent = 'Maintain regular N:K spoon-feeding program (1:1.5 ratio) to sustain cellular turgor through peak match play.';
    } else {
      if (matKStatus) { matKStatus.className = 'strategy-badge badge-warning'; matKStatus.textContent = 'Monitoring'; }
      matKDesc.innerHTML = `Recent harvest of <strong>${latestTot.toFixed(1)} L/cut</strong> extracts significant potassium from sand profiles. Enter your soil sample to verify rootzone K reserves.`;
    }
  }

  // 2. Nitrogen Matrix Card
  const matNStatus = document.getElementById('mat-n-status');
  const matNDesc = document.getElementById('mat-n-desc');
  const matNAction = document.getElementById('mat-n-action');
  if (matNDesc) {
    if (activeSoil && activeSoil.potentially_min_n) {
      if (matNStatus) { matNStatus.className = 'strategy-badge badge-optimal'; matNStatus.textContent = 'Biological Balance'; }
      matNDesc.innerHTML = `Soil biological tests show <strong>${activeSoil.potentially_min_n} kg N/ha</strong> Potentially Mineralizable Nitrogen with Respiration at <strong>${activeSoil.soil_respiration || 175} mg/kg</strong>. Natural microbial N release supports current <strong>${latestTot.toFixed(1)} L/cut</strong> yield.`;
      if (matNAction) matNAction.textContent = 'Reduce applied synthetic granular nitrogen by 15-20% to account for microbial mineralization and prevent excessive carbohydrate exhaustion.';
    } else {
      matNDesc.innerHTML = `Soil microbial biology mineralizes organic nitrogen reserves over the playing season. Enter your lab test to track PMN and soil respiration.`;
    }
  }

  // 3. PGR Attraxor Matrix Card
  const matPgrStatus = document.getElementById('mat-pgr-status');
  const matPgrDesc = document.getElementById('mat-pgr-desc');
  const matPgrAction = document.getElementById('mat-pgr-action');
  if (matPgrDesc) {
    if (latestTot > 150) {
      if (matPgrStatus) { matPgrStatus.className = 'strategy-badge badge-surging'; matPgrStatus.textContent = 'Urgent PGR Window'; }
      matPgrDesc.innerHTML = `Most recent clip harvest is surging at <strong>${latestTot.toFixed(1)} L/cut</strong> (${latestCV.toFixed(3)} mL/m²). Pure Perennial Ryegrass swards pushing >150L yield are actively depleting crown carbohydrate reserves.`;
      if (matPgrAction) matPgrAction.textContent = 'Apply Attraxor (prohexadione-calcium) at label rate in sub-21°C weather (180-200 GDD window) to redirect vertical growth into lateral tillering and root anchoring.';
    } else if (latestTot >= 70) {
      if (matPgrStatus) { matPgrStatus.className = 'strategy-badge badge-optimal'; matPgrStatus.textContent = 'Equilibrium / Regulated'; }
      matPgrDesc.innerHTML = `Clipping yield is regulated at <strong>${latestTot.toFixed(1)} L/cut</strong> within the 70–150 L optimal range. Canopy growth is disciplined and lateral sward density is maintained.`;
      if (matPgrAction) matPgrAction.textContent = 'Continue tracking Growing Degree Days (GDD Base 0°C) to time the next regulation cycle prior to rebound surge.';
    } else {
      if (matPgrStatus) { matPgrStatus.className = 'strategy-badge badge-low'; matPgrStatus.textContent = 'PGR Withheld'; }
      matPgrDesc.innerHTML = `Growth is suppressed at <strong>${latestTot.toFixed(1)} L/cut</strong> (<70 L). Withhold PGR application until sward vigor recovers.`;
      if (matPgrAction) matPgrAction.textContent = 'Withhold growth regulators; conduct rootzone moisture check and apply light amino acid biostimulants.';
    }
  }

  // 4. Organic Matter Matrix Card
  const matOmStatus = document.getElementById('mat-om-status');
  const matOmDesc = document.getElementById('mat-om-desc');
  const matOmAction = document.getElementById('mat-om-action');
  if (matOmDesc) {
    if (activeSoil && activeSoil.org_matter) {
      const om = Number(activeSoil.org_matter);
      if (om > 3.5) {
        if (matOmStatus) { matOmStatus.className = 'strategy-badge badge-warning'; matOmStatus.textContent = 'Thatch Alert'; }
        matOmDesc.innerHTML = `Organic Matter reads <strong>${om.toFixed(1)}%</strong>. High clipping volume biomass contributes to surface thatch accumulation in the upper 20mm.`;
        if (matOmAction) matOmAction.textContent = 'Perform linear verti-cutting and increase sand topdressing rate to dilute organic layer and maintain surface gas exchange.';
      } else {
        if (matOmStatus) { matOmStatus.className = 'strategy-badge badge-optimal'; matOmStatus.textContent = 'Target Controlled'; }
        matOmDesc.innerHTML = `Organic Matter tested at <strong>${om.toFixed(1)}%</strong> (Target: 1.5 – 4.0%). Dense PRG canopies produce rapid thatch layers if left unmanaged.`;
        if (matOmAction) matOmAction.textContent = 'Schedule regular micro-tining / sarrel rolling with light sand dusting (0.5 mm) every 3-4 weeks to maintain surface gas exchange and dry the boundary layer.';
      }
    }
  }

  // Render Turfgrass Plant Anatomy Diagram
  renderAnatomyDiagram();
}

/* ==========================================================================
   Turfgrass Anatomy Diagnostic Visualizer Module
   ========================================================================== */

function switchAnatomyPitch(pitchName) {
  activeAnatomyPitch = pitchName;
  
  const btnP1 = document.getElementById('btn-anatomy-p1');
  const btnP2 = document.getElementById('btn-anatomy-p2');
  if (btnP1) btnP1.classList.toggle('active', pitchName === 'Pitch 1');
  if (btnP2) btnP2.classList.toggle('active', pitchName === 'Pitch 2');

  renderAnatomyDiagram();
}

function selectAnatomyZone(zoneKey) {
  selectedAnatomyZone = zoneKey;

  // Update Navigation Pills
  const zones = ['blade', 'crown', 'thatch', 'roots'];
  zones.forEach(z => {
    const pill = document.getElementById(`nav-zone-${z}`);
    if (pill) pill.classList.toggle('active', z === zoneKey);
  });

  // Update SVG Highlights
  zones.forEach(z => {
    const svgGroup = document.getElementById(`svg-zone-${z}`);
    if (svgGroup) svgGroup.classList.toggle('active', z === zoneKey);
  });

  renderAnatomyDiagram();
}

function renderAnatomyDiagram() {
  const panel = document.getElementById('anatomy-detail-panel');
  if (!panel) return;

  const pitch = activeAnatomyPitch;
  const activeLogs = clippingLogs.filter(d => d.pitch === pitch && d.totalL > 0).sort((a, b) => new Date(b.date) - new Date(a.date));
  const latestLog = activeLogs[0] || null;
  const avgCV = activeLogs.length > 0 ? (activeLogs.reduce((a, b) => a + b.clipVol, 0) / activeLogs.length) : 0;
  const avgTot = activeLogs.length > 0 ? (activeLogs.reduce((a, b) => a + b.estTotalL, 0) / activeLogs.length) : 0;
  
  const latestTot = latestLog ? latestLog.estTotalL : avgTot;
  const latestCV = latestLog ? latestLog.clipVol : avgCV;

  const activeSoil = soilLogs.filter(s => s.pitch === pitch).sort((a, b) => new Date(b.date) - new Date(a.date))[0] || null;
  const kVal = activeSoil ? Number(activeSoil.potassium || 0) : (pitch === 'Pitch 1' ? 110 : 165);
  const pmnVal = activeSoil ? Number(activeSoil.potentially_min_n || 0) : (pitch === 'Pitch 1' ? 64 : 68);
  const omVal = activeSoil ? Number(activeSoil.org_matter || 0) : (pitch === 'Pitch 1' ? 2.4 : 2.8);

  const isSurging = latestTot > 150;
  const isKDeficit = kVal < 125;

  // Highlight active SVG group
  const zones = ['blade', 'crown', 'thatch', 'roots'];
  zones.forEach(z => {
    const svgGroup = document.getElementById(`svg-zone-${z}`);
    if (svgGroup) svgGroup.classList.toggle('active', z === selectedAnatomyZone);
    const pill = document.getElementById(`nav-zone-${z}`);
    if (pill) pill.classList.toggle('active', z === selectedAnatomyZone);
  });

  let zoneData = {};

  if (selectedAnatomyZone === 'blade') {
    zoneData = {
      title: '1. Leaf Blade & Foliar Cuticle Canopy',
      subtitle: 'Upper photosynthetic layer, stomatal guard cells & cuticular wax barrier',
      iconClass: 'icon-zone-blade',
      icon: 'fa-solid fa-wheat-awn',
      badgeClass: isSurging ? 'badge-surging' : 'badge-ideal',
      badgeText: isSurging ? 'Foliar Surge & Soft Cuticle Alert' : 'Optimal Leaf Turgor',
      cause: isSurging
        ? `Rapid vertical cell elongation triggered by temperature/nitrogen surge and natural microbial N release (PMN: ${pmnVal} kg/ha). Most recent cut registered ${latestTot.toFixed(1)} L/cut (${latestCV.toFixed(3)} mL/m²). Vertical cell division outpaces silica and potassium deposition in cell wall lattices.`
        : `Balanced vegetative growth kinetics (${latestTot.toFixed(1)} L/cut, ${latestCV.toFixed(3)} mL/m²) matching mowing removal with rootzone nutrient availability. Steady photosynthetic assimilates.`,
      effect: isSurging
        ? `Cell walls become thin, soft, and succulent with low mechanical elasticity. Stomatal guard cells fail to close rapidly under dry wind, causing rapid wilting. Upright leaf blades lean horizontally creating grain, while the dense canopy traps surface humidity, elevating Microdochium (Fusarium) infection risk.`
        : `Thick epidermal cell walls with optimal silicon/potassium bonding. High stomatal turgor, upright leaf habit, superior wear resistance, and clean cut from cylinder mowers.`,
      fixes: isSurging
        ? [
            { icon: 'fa-bottle-droplet', text: `<strong>Attraxor PGR Regulation:</strong> Apply Attraxor (prohexadione-calcium) at label rate in sub-21°C weather to block gibberellin synthesis, arresting the ${latestTot.toFixed(1)} L/cut surge and redirecting photosynthate to root/crown strengthening.` },
            { icon: 'fa-sliders', text: '<strong>Synthetic N Reduction:</strong> Reduce synthetic granular nitrogen applications by 20% to curb succulent cell stretching and prevent carbohydrate depletion.' },
            { icon: 'fa-atom', text: '<strong>Foliar Hardening Tank-Mix:</strong> Apply foliar Iron (Fe) and Manganese (Mn) to harden the leaf cuticle and stimulate chlorophyll synthesis without soft growth flushes.' }
          ]
        : [
            { icon: 'fa-scissors', text: '<strong>Sharp Cylinder Maintenance:</strong> Maintain regular mowing frequency with sharp cylinder blades to prevent torn leaf tips and disease entry.' },
            { icon: 'fa-arrows-spin', text: '<strong>Alternating Mowing Passes:</strong> Alternate mowing directions (Length / Width) every cut to prevent directional leaf blade lean and maintain true ball roll.' }
          ],
      metrics: `<strong>Latest Cut (${latestLog ? latestLog.date : 'Recent'}):</strong> ${latestTot.toFixed(1)} L/cut (${latestCV.toFixed(3)} mL/m²) &nbsp;|&nbsp; <strong>Period Avg:</strong> ${avgTot.toFixed(1)} L/cut &nbsp;|&nbsp; <strong>Attraxor Timing:</strong> ${isSurging ? 'Active Window' : 'Monitoring'}`
    };
  } else if (selectedAnatomyZone === 'crown') {
    zoneData = {
      title: '2. Plant Crown & Tillering Meristem',
      subtitle: 'Stem base growing point, carbohydrate storage reservoir & lateral tiller generation',
      iconClass: 'icon-zone-crown',
      icon: 'fa-solid fa-crown',
      badgeClass: isSurging ? 'badge-low' : 'badge-ideal',
      badgeText: isSurging ? 'Carbohydrate Depletion Risk' : 'High Tiller Vigor',
      cause: isSurging
        ? `Surge vertical shoot growth (${latestTot.toFixed(1)} L/cut) forces the plant to divert stored non-structural carbohydrates (fructans) from the crown base into leaf blade regeneration rather than crown hardening.`
        : `Equilibrium growth rate (${latestTot.toFixed(1)} L/cut) allows surplus photosynthate to be stored as fructans within the basal stem and crown tissue.`
      ,
      effect: isSurging
        ? `Crown tissues become depleted of stored energy reserves. Meristematic lateral bud initiation is suppressed, leading to reduced sward shoot density (fewer tillers/dm²). Crowns become highly vulnerable to stud shear, mechanical bruising, and slow divot recovery.`
        : `Dense, robust tillering crowns with high regeneration capacity and superior cleat shear resistance under match play.`
      ,
      fixes: isSurging
        ? [
            { icon: 'fa-seedling', text: '<strong>Promote Lateral Tillering:</strong> Attraxor PGR application redirects vegetative energy directly into lateral tillering and crown carbohydrate accumulation.' },
            { icon: 'fa-ruler-vertical', text: '<strong>Height of Cut Discipline:</strong> Maintain height of cut at sports pitch standard (25–28 mm) to ensure adequate crown shading and protection against mechanical scalping.' },
            { icon: 'fa-broom', text: '<strong>Light Verti-Grooming:</strong> Perform light grooming between cuts to stand up lateral stolons and relieve crown congestion.' }
          ]
        : [
            { icon: 'fa-arrows-spin', text: '<strong>Routine Grooming:</strong> Continue light verti-grooming to promote air circulation around crowns.' },
            { icon: 'fa-plus', text: '<strong>Post-Match Recovery:</strong> Ensure regular post-match divot repair and seed germination dusting with Johnsons J Premier Pitch.' }
          ],
      metrics: `<strong>Carbohydrate Status:</strong> ${isSurging ? 'Depleted (High Surge Demand)' : 'Optimal Reserves'} &nbsp;|&nbsp; <strong>Latest Yield:</strong> ${latestTot.toFixed(1)} L/cut &nbsp;|&nbsp; <strong>Sward Composition:</strong> Johnsons J Premier Pitch (100% PRG)`
    };
  } else if (selectedAnatomyZone === 'thatch') {
    zoneData = {
      title: '3. Thatch & Surface Layer Boundary (0–25mm)',
      subtitle: 'Organic matter accumulation layer, air-porosity barrier & moisture cushion',
      iconClass: 'icon-zone-thatch',
      icon: 'fa-solid fa-layer-group',
      badgeClass: omVal > 3.0 ? 'badge-high' : 'badge-ideal',
      badgeText: omVal > 3.0 ? 'Thatch Accumulation' : 'Optimal Surface OM',
      cause: `Clipping biomass production (${latestTot.toFixed(1)} L/cut latest harvest) deposits dead leaf sheaths and stolons at the surface. Tested Organic Matter (DUMAS) reads ${omVal}%.`,
      effect: `Builds an organic cushion layer at the surface. If unmanaged, holds excess capillary water, creating a barrier to soil gas exchange (O₂/CO₂) and encouraging shallow surface rooting above the sand profile.`,
      fixes: [
        { icon: 'fa-circle-notch', text: '<strong>Surface Air-Slitting:</strong> Perform regular sarrel rolling or shallow star-tine spiking to puncture the surface boundary and restore air exchange.' },
        { icon: 'fa-layer-group', text: '<strong>Sand Topdressing:</strong> Schedule light sand dusting (0.5 mm dressing, approx. 4–5 tonnes/pitch) every 3–4 weeks to dilute organic matter accumulation.' },
        { icon: 'fa-scissors', text: '<strong>Linear Verti-Cutting:</strong> Verti-cut lightly every 14 days during active growth to slice senescent thatch material and stand up upright growth.' }
      ],
      metrics: `<strong>Org. Matter (DUMAS):</strong> ${omVal}% (Target: 1.5 – 4.0%) &nbsp;|&nbsp; <strong>Latest Harvest Biomass:</strong> ${latestTot.toFixed(1)} L/cut`
    };
  } else {
    // roots
    zoneData = {
      title: '4. Sand Rootzone & Rhizosphere (0–150mm Depth)',
      subtitle: 'Fibrous root architecture, nutrient uptake root hairs & soil microbial biology',
      iconClass: 'icon-zone-roots',
      icon: 'fa-solid fa-network-wired',
      badgeClass: isKDeficit ? 'badge-low' : 'badge-ideal',
      badgeText: isKDeficit ? 'Potassium Deficit & Tensile Loss' : 'Strong Deep Root Matrix',
      cause: isKDeficit
        ? `Potassium depletion (K: ${kVal} ppm vs 125 ppm threshold) driven by high clipping extraction (${latestTot.toFixed(1)} L/cut) from low CEC sand profile, coupled with active biological nitrogen mineralization (PMN: ${pmnVal} kg/ha).`
        : `Potassium (K: ${kVal} ppm) in optimal target window with active microbial nitrogen mineralization (PMN: ${pmnVal} kg/ha) supporting ${latestTot.toFixed(1)} L/cut yield.`
      ,
      effect: isKDeficit
        ? `Reduced root tensile strength, reduced root hair surface area, and impaired osmotic water regulation. Roots fail to anchor deeply into the sand profile, causing divot blowout and weak turf shear strength during match play.`
        : `Deep fibrous root system with dense absorptive root hairs providing high shear strength, strong pitch anchoring, and resilient moisture uptake under match stress.`
      ,
      fixes: isKDeficit
        ? [
            { icon: 'fa-atom', text: `<strong>Potassium Replenishment:</strong> Apply 0-0-50 Sulphate of Potash (K₂SO₄) at 15–20 g/m² or foliar potassium phosphite to replenish intracellular K+ drawn down by ${latestTot.toFixed(1)} L/cut extraction.` },
            { icon: 'fa-seedling', text: `<strong>Account for Biological N:</strong> Credit active microbial nitrogen (${pmnVal} kg N/ha PMN) to avoid excessive fertilizer salts and reduce nitrogen input costs.` },
            { icon: 'fa-arrows-down-to-line', text: '<strong>Deep Aeration:</strong> Deep verti-drain / solid pencil tine aeration (100–150mm depth) to relieve compaction and encourage deep vertical root exploration.' }
          ]
        : [
            { icon: 'fa-arrows-down-to-line', text: '<strong>Routine Root Aeration:</strong> Maintain monthly solid tine aeration to keep deep sand root channels open and oxygenated.' },
            { icon: 'fa-atom', text: '<strong>Balanced Spoon-Feeding:</strong> Maintain balanced N:K spoon-feeding program (1:1.5 ratio) during match season.' }
          ],
      metrics: `<strong>Soil Potassium (K):</strong> ${kVal} ppm ${isKDeficit ? '(Deficit < 125)' : '(Target: 125 – 225)'} &nbsp;|&nbsp; <strong>PMN:</strong> ${pmnVal} kg/ha &nbsp;|&nbsp; <strong>Latest Harvest:</strong> ${latestTot.toFixed(1)} L/cut`
    };
  }

  panel.innerHTML = `
    <!-- Selected Zone Header Card -->
    <div class="anatomy-zone-header-card">
      <div class="zone-header-left">
        <div class="zone-header-icon ${zoneData.iconClass}">
          <i class="${zoneData.icon}"></i>
        </div>
        <div class="zone-header-title">
          <h3>${zoneData.title}</h3>
          <span>${zoneData.subtitle} &bull; <strong>${pitch}</strong></span>
        </div>
      </div>
      <span class="badge ${zoneData.badgeClass}">${zoneData.badgeText}</span>
    </div>

    <!-- 4-Pillar Diagnosis & Prescription Grid -->
    <div class="anatomy-pillars-grid">
      <!-- Pillar 1: Cause & Diagnosis -->
      <div class="anatomy-pillar-card pillar-cause">
        <div class="pillar-header">
          <i class="fa-solid fa-magnifying-glass"></i> 1. Cause & Agronomic Diagnosis
        </div>
        <p class="pillar-body">${zoneData.cause}</p>
      </div>

      <!-- Pillar 2: Plant Structural Effect -->
      <div class="anatomy-pillar-card pillar-effect">
        <div class="pillar-header">
          <i class="fa-solid fa-triangle-exclamation"></i> 2. Structural Effect on Grass Plant
        </div>
        <p class="pillar-body">${zoneData.effect}</p>
      </div>

      <!-- Pillar 3: Groundskeeper Prescribed Fix -->
      <div class="anatomy-pillar-card pillar-fix">
        <div class="pillar-header">
          <i class="fa-solid fa-toolbox"></i> 3. Prescribed Groundskeeper Agronomic Fixes
        </div>
        <ul class="pillar-fix-checklist">
          ${zoneData.fixes.map(f => `<li><i class="fa-solid ${f.icon}"></i> <div>${f.text}</div></li>`).join('')}
        </ul>
        <div class="pillar-metrics-tag mt-3">
          <div><i class="fa-solid fa-chart-line text-emerald me-1"></i> ${zoneData.metrics}</div>
        </div>
      </div>
    </div>
  `;
}


// Attach anatomy visualizer handlers to global window for inline onclicks
window.switchAnatomyPitch = switchAnatomyPitch;
window.selectAnatomyZone = selectAnatomyZone;
window.renderAnatomyDiagram = renderAnatomyDiagram;

/* ==========================================================================
   Engineered Sports Profile & Rootzone Depth Horizons Module
   ========================================================================== */
let selectedRootHorizon = 'all';

function selectRootHorizon(horizonKey) {
  selectedRootHorizon = horizonKey;

  // 1. Update filter buttons
  const buttons = ['all', 'surface', 'active', 'deep'];
  buttons.forEach(k => {
    const btn = document.getElementById(`btn-horizon-${k}`);
    if (btn) btn.classList.toggle('active', k === horizonKey);
  });

  // 2. Update Table row highlights
  const rows = [
    { key: 'surface', id: 'row-horizon-surface' },
    { key: 'active', id: 'row-horizon-active' },
    { key: 'deep', id: 'row-horizon-deep' }
  ];
  rows.forEach(r => {
    const rowEl = document.getElementById(r.id);
    if (rowEl) {
      if (horizonKey === 'all') {
        rowEl.classList.remove('active');
      } else {
        rowEl.classList.toggle('active', r.key === horizonKey);
      }
    }
  });

  // 3. Update Visual Strata diagram layers
  const strata = [
    { key: 'surface', id: 'stratum-surface' },
    { key: 'active', id: 'stratum-active' },
    { key: 'deep', id: 'stratum-deep' }
  ];
  strata.forEach(s => {
    const stratumEl = document.getElementById(s.id);
    if (stratumEl) {
      if (horizonKey === 'all') {
        stratumEl.classList.remove('active');
      } else {
        stratumEl.classList.toggle('active', s.key === horizonKey);
      }
    }
  });

  // 4. Update Detail Cards visibility/highlight
  const cards = [
    { key: 'surface', id: 'detail-card-surface' },
    { key: 'active', id: 'detail-card-active' },
    { key: 'deep', id: 'detail-card-deep' }
  ];
  cards.forEach(c => {
    const cardEl = document.getElementById(c.id);
    if (cardEl) {
      if (horizonKey === 'all') {
        cardEl.style.display = 'block';
        cardEl.classList.remove('highlight-focus');
      } else if (horizonKey === c.key) {
        cardEl.style.display = 'block';
        cardEl.classList.add('highlight-focus');
        cardEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      } else {
        cardEl.style.display = 'none';
        cardEl.classList.remove('highlight-focus');
      }
    }
  });
}

window.selectRootHorizon = selectRootHorizon;

/* ==========================================================================
   Root Depth Monitoring, Data Tracking & Longitudinal Analytics Module
   ========================================================================== */

const DEFAULT_ROOT_DEPTH_DATA = [
  {
    id: "root-1",
    date: "2026-05-15",
    pitch: "Pitch 1",
    location: "Center High-Wear Pass",
    maxDepth: 130,
    activeDepth: 90,
    thatchDepth: 14.0,
    density: "Moderate Branching",
    culturalPractice: "Verti-Drain (Deep-Tine 250-300mm)",
    notes: "Post-renovation root recovery. Sand topdressing incorporated well."
  },
  {
    id: "root-2",
    date: "2026-05-18",
    pitch: "Pitch 2",
    location: "Center High-Wear Pass",
    maxDepth: 145,
    activeDepth: 105,
    thatchDepth: 11.0,
    density: "Moderate Branching",
    culturalPractice: "Routine Core Sampling",
    notes: "Equilibrium root growth with good moisture distribution."
  },
  {
    id: "root-3",
    date: "2026-06-02",
    pitch: "Pitch 1",
    location: "Goal Mouth (North)",
    maxDepth: 110,
    activeDepth: 80,
    thatchDepth: 16.5,
    density: "Light / Fine Strands",
    culturalPractice: "Solid Pencil Tining (100-150mm)",
    notes: "Goalmouth compaction pan detected. Solid tine aeration scheduled."
  },
  {
    id: "root-4",
    date: "2026-06-10",
    pitch: "Pitch 2",
    location: "Goal Mouth (North)",
    maxDepth: 170,
    activeDepth: 130,
    thatchDepth: 12.0,
    density: "Dense Fibrous / High Tensile",
    culturalPractice: "Verti-Drain (Deep-Tine 250-300mm)",
    notes: "Strong vertical anchor root growth into deep sand profile."
  },
  {
    id: "root-5",
    date: "2026-06-20",
    pitch: "Pitch 1",
    location: "Midfield / Center Circle",
    maxDepth: 155,
    activeDepth: 115,
    thatchDepth: 12.5,
    density: "Dense Fibrous / High Tensile",
    culturalPractice: "Verti-Drain (Deep-Tine 250-300mm)",
    notes: "Deep root strands successfully reaching 150mm threshold."
  },
  {
    id: "root-6",
    date: "2026-07-02",
    pitch: "Pitch 2",
    location: "Penalty Area (18-Yard)",
    maxDepth: 195,
    activeDepth: 140,
    thatchDepth: 10.0,
    density: "Dense Fibrous / High Tensile",
    culturalPractice: "Linear Aeration / Earthquake",
    notes: "Superb tension lock; zero divoting observed during slide tackles."
  },
  {
    id: "root-7",
    date: "2026-07-08",
    pitch: "Pitch 1",
    location: "Wing / Flank Area",
    maxDepth: 180,
    activeDepth: 135,
    thatchDepth: 10.5,
    density: "Dense Fibrous / High Tensile",
    culturalPractice: "Routine Core Sampling",
    notes: "Dense root mass anchoring firmly into gravel sub-base."
  },
  {
    id: "root-8",
    date: "2026-07-25",
    pitch: "Pitch 2",
    location: "Midfield / Center Circle",
    maxDepth: 210,
    activeDepth: 155,
    thatchDepth: 9.5,
    density: "Dense Fibrous / High Tensile",
    culturalPractice: "Verti-Drain (Deep-Tine 250-300mm)",
    notes: "Roots anchoring directly into lower drainage matrix."
  },
  {
    id: "root-9",
    date: "2026-07-28",
    pitch: "Pitch 1",
    location: "Center High-Wear Pass",
    maxDepth: 175,
    activeDepth: 130,
    thatchDepth: 13.0,
    density: "Dense Fibrous / High Tensile",
    culturalPractice: "Verti-Drain (Deep-Tine 250-300mm)",
    notes: "Carbohydrate redirect from Attraxor application stimulating root elongation."
  },
  {
    id: "root-10",
    date: "2026-08-12",
    pitch: "Pitch 2",
    location: "Center High-Wear Pass",
    maxDepth: 205,
    activeDepth: 150,
    thatchDepth: 10.0,
    density: "Dense Fibrous / High Tensile",
    culturalPractice: "Routine Core Sampling",
    notes: "Deep root reserves buffering grass against matchday wilt."
  },
  {
    id: "root-11",
    date: "2026-08-14",
    pitch: "Pitch 1",
    location: "Goal Mouth (South)",
    maxDepth: 160,
    activeDepth: 120,
    thatchDepth: 15.0,
    density: "Moderate Branching",
    culturalPractice: "Hollow Coring & Sand Topdressing",
    notes: "High root hair flush following potassium replenishment."
  }
];

let rootDepthLogs = [];
let activeRootPitchFilter = 'all';
let rootTableSearchTerm = '';
let rootCharts = { trend: null, sector: null };

function loadRootDepthData() {
  const saved = localStorage.getItem('turf_root_depth_vault');
  if (saved) {
    try {
      rootDepthLogs = JSON.parse(saved);
    } catch (e) {
      console.error('Error parsing root depth logs:', e);
      rootDepthLogs = [...DEFAULT_ROOT_DEPTH_DATA];
    }
  } else {
    rootDepthLogs = [...DEFAULT_ROOT_DEPTH_DATA];
    saveRootDepthData();
  }
}

function saveRootDepthData() {
  localStorage.setItem('turf_root_depth_vault', JSON.stringify(rootDepthLogs));
}

function filterRootDepthPitch(pitchName) {
  activeRootPitchFilter = pitchName;
  const btns = ['all', 'p1', 'p2'];
  btns.forEach(b => {
    const btn = document.getElementById(`btn-root-filter-${b}`);
    if (btn) {
      const match = (b === 'all' && pitchName === 'all') || 
                    (b === 'p1' && pitchName === 'Pitch 1') || 
                    (b === 'p2' && pitchName === 'Pitch 2');
      btn.classList.toggle('active', match);
    }
  });
  renderRootDepthModule();
}

function filterRootDepthTable() {
  const input = document.getElementById('root-table-search');
  rootTableSearchTerm = input ? input.value.toLowerCase().trim() : '';
  renderRootDepthTable();
}

function openRootDepthModal(editId = null) {
  const modal = document.getElementById('root-depth-modal');
  const form = document.getElementById('root-depth-form');
  const title = document.getElementById('root-modal-title');
  if (!modal || !form) return;

  form.reset();
  document.getElementById('root-input-edit-id').value = '';

  if (editId) {
    const entry = rootDepthLogs.find(r => r.id === editId);
    if (entry) {
      if (title) title.textContent = 'Edit Root Depth Core Sample';
      document.getElementById('root-input-edit-id').value = entry.id;
      document.getElementById('root-input-date').value = entry.date;
      document.getElementById('root-input-pitch').value = entry.pitch;
      document.getElementById('root-input-location').value = entry.location;
      document.getElementById('root-input-density').value = entry.density;
      document.getElementById('root-input-max-depth').value = entry.maxDepth;
      document.getElementById('root-input-active-depth').value = entry.activeDepth;
      document.getElementById('root-input-thatch-depth').value = entry.thatchDepth || 12;
      document.getElementById('root-input-cultural-practice').value = entry.culturalPractice || 'Routine Core Sampling';
      document.getElementById('root-input-notes').value = entry.notes || '';
    }
  } else {
    if (title) title.textContent = 'Log Pitch Root Depth Core Sample';
    document.getElementById('root-input-date').value = new Date().toISOString().split('T')[0];
    document.getElementById('root-input-pitch').value = activeRootPitchFilter !== 'all' ? activeRootPitchFilter : 'Pitch 1';
    document.getElementById('root-input-max-depth').value = 180;
    document.getElementById('root-input-active-depth').value = 125;
    document.getElementById('root-input-thatch-depth').value = 12.0;
  }

  updateRootModalLivePreview();
  modal.classList.add('open');
}

function closeRootDepthModal() {
  const modal = document.getElementById('root-depth-modal');
  if (modal) modal.classList.remove('open');
}

function updateRootModalLivePreview() {
  const maxVal = Number(document.getElementById('root-input-max-depth')?.value || 0);
  const horizonEl = document.getElementById('root-modal-horizon-preview');
  const shearEl = document.getElementById('root-modal-shear-preview');
  const boxEl = document.getElementById('root-modal-preview-box');

  if (!horizonEl || !shearEl) return;

  if (maxVal >= 150) {
    horizonEl.textContent = `Deep Penetration Zone (${maxVal} mm \u2014 Anchor Horizon)`;
    horizonEl.className = 'text-cyan font-weight-bold';
    shearEl.textContent = 'High Shear Lock';
    shearEl.className = 'badge badge-cyan';
    if (boxEl) boxEl.style.borderColor = 'rgba(6, 182, 212, 0.35)';
  } else if (maxVal >= 50) {
    horizonEl.textContent = `Active Rootzone (${maxVal} mm \u2014 Metabolic Uptake)`;
    horizonEl.className = 'text-emerald font-weight-bold';
    shearEl.textContent = 'Moderate Anchorage';
    shearEl.className = 'badge badge-emerald';
    if (boxEl) boxEl.style.borderColor = 'rgba(16, 185, 129, 0.35)';
  } else {
    horizonEl.textContent = `Surface & Crown Layer (${maxVal} mm \u2014 Compaction Risk)`;
    horizonEl.className = 'text-amber font-weight-bold';
    shearEl.textContent = 'Shallow / Divot Risk';
    shearEl.className = 'badge badge-amber';
    if (boxEl) boxEl.style.borderColor = 'rgba(245, 158, 11, 0.35)';
  }
}

function handleSaveRootDepthSample(e) {
  e.preventDefault();

  const editId = document.getElementById('root-input-edit-id').value;
  const date = document.getElementById('root-input-date').value;
  const pitch = document.getElementById('root-input-pitch').value;
  const location = document.getElementById('root-input-location').value;
  const density = document.getElementById('root-input-density').value;
  const maxDepth = Number(document.getElementById('root-input-max-depth').value);
  const activeDepth = Number(document.getElementById('root-input-active-depth').value);
  const thatchDepth = Number(document.getElementById('root-input-thatch-depth').value || 10);
  const culturalPractice = document.getElementById('root-input-cultural-practice').value;
  const notes = document.getElementById('root-input-notes').value.trim();

  if (!date || !pitch || !location || isNaN(maxDepth) || isNaN(activeDepth)) {
    showToast('Please fill out all required root depth parameters.', 'error');
    return;
  }

  const sampleObj = {
    id: editId || `root-${Date.now()}`,
    date,
    pitch,
    location,
    density,
    maxDepth,
    activeDepth,
    thatchDepth,
    culturalPractice,
    notes
  };

  if (editId) {
    const idx = rootDepthLogs.findIndex(r => r.id === editId);
    if (idx !== -1) rootDepthLogs[idx] = sampleObj;
  } else {
    rootDepthLogs.unshift(sampleObj);
  }

  saveRootDepthData();
  closeRootDepthModal();
  renderRootDepthModule();
  showToast(editId ? 'Root depth sample updated successfully.' : 'Root depth core sample recorded.', 'success');
}

function deleteRootDepthSample(id) {
  if (confirm('Are you sure you want to delete this root depth sample record?')) {
    rootDepthLogs = rootDepthLogs.filter(r => r.id !== id);
    saveRootDepthData();
    renderRootDepthModule();
    showToast('Root depth record removed.', 'info');
  }
}

function renderRootDepthModule() {
  renderRootDepthKPIs();
  renderRootDepthTable();
  renderRootDepthTrendChart();
  renderRootDepthSectorChart();
}

function renderRootDepthKPIs() {
  const p1Logs = rootDepthLogs.filter(r => r.pitch === 'Pitch 1');
  const p2Logs = rootDepthLogs.filter(r => r.pitch === 'Pitch 2');

  const p1Mean = p1Logs.length > 0 ? (p1Logs.reduce((a, b) => a + b.maxDepth, 0) / p1Logs.length) : 0;
  const p2Mean = p2Logs.length > 0 ? (p2Logs.reduce((a, b) => a + b.maxDepth, 0) / p2Logs.length) : 0;
  const avgActive = rootDepthLogs.length > 0 ? (rootDepthLogs.reduce((a, b) => a + b.activeDepth, 0) / rootDepthLogs.length) : 0;

  const deepCount = rootDepthLogs.filter(r => r.maxDepth >= 150).length;
  const activeCount = rootDepthLogs.filter(r => r.maxDepth >= 50 && r.maxDepth < 150).length;
  const surfaceCount = rootDepthLogs.filter(r => r.maxDepth < 50).length;
  const totalCount = rootDepthLogs.length || 1;

  const deepShare = ((deepCount / totalCount) * 100).toFixed(1);
  const activeShare = ((activeCount / totalCount) * 100).toFixed(1);
  const surfaceShare = ((surfaceCount / totalCount) * 100).toFixed(1);

  const kpiP1 = document.getElementById('kpi-p1-root-depth');
  if (kpiP1) kpiP1.innerHTML = `${p1Mean.toFixed(1)} <small>mm</small>`;

  const kpiP2 = document.getElementById('kpi-p2-root-depth');
  if (kpiP2) kpiP2.innerHTML = `${p2Mean.toFixed(1)} <small>mm</small>`;

  const kpiActive = document.getElementById('kpi-avg-active-branch');
  if (kpiActive) kpiActive.innerHTML = `${avgActive.toFixed(1)} <small>mm</small>`;

  const kpiDeep = document.getElementById('kpi-deep-share');
  if (kpiDeep) kpiDeep.innerHTML = `${deepShare} <small>%</small>`;

  // Progress Bar updates
  const barSurface = document.getElementById('bar-share-surface');
  const barActive = document.getElementById('bar-share-active');
  const barDeep = document.getElementById('bar-share-deep');
  if (barSurface) barSurface.textContent = `${surfaceShare}%`;
  if (barActive) barActive.textContent = `${activeShare}%`;
  if (barDeep) barDeep.textContent = `${deepShare}%`;

  const progSurface = document.getElementById('progress-surface');
  const progActive = document.getElementById('progress-active');
  const progDeep = document.getElementById('progress-deep');
  if (progSurface) progSurface.style.width = `${surfaceShare}%`;
  if (progActive) progActive.style.width = `${activeShare}%`;
  if (progDeep) progDeep.style.width = `${deepShare}%`;
}

function renderRootDepthTable() {
  const tbody = document.getElementById('root-depth-tbody');
  if (!tbody) return;

  let filtered = [...rootDepthLogs];
  if (activeRootPitchFilter !== 'all') {
    filtered = filtered.filter(r => r.pitch === activeRootPitchFilter);
  }

  if (rootTableSearchTerm) {
    filtered = filtered.filter(r => 
      r.location.toLowerCase().includes(rootTableSearchTerm) ||
      (r.notes && r.notes.toLowerCase().includes(rootTableSearchTerm)) ||
      (r.culturalPractice && r.culturalPractice.toLowerCase().includes(rootTableSearchTerm)) ||
      r.density.toLowerCase().includes(rootTableSearchTerm)
    );
  }

  filtered.sort((a, b) => new Date(b.date) - new Date(a.date));

  if (filtered.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="9" class="text-center text-muted p-4">
          <i class="fa-solid fa-ruler-vertical text-muted mb-2 d-block" style="font-size: 1.5rem;"></i>
          No root depth sample records found matching filter. Click <strong>+ Log Root Depth Sample</strong> to record core sample data.
        </td>
      </tr>
    `;
    return;
  }

  tbody.innerHTML = filtered.map(r => {
    let horizonBadge = '';
    if (r.maxDepth >= 150) {
      horizonBadge = `<span class="badge badge-cyan font-mono font-weight-bold">${r.maxDepth} mm</span> <span class="text-xs text-cyan d-block">Deep (>150mm)</span>`;
    } else if (r.maxDepth >= 50) {
      horizonBadge = `<span class="badge badge-emerald font-mono font-weight-bold">${r.maxDepth} mm</span> <span class="text-xs text-emerald d-block">Active (50-150)</span>`;
    } else {
      horizonBadge = `<span class="badge badge-amber font-mono font-weight-bold">${r.maxDepth} mm</span> <span class="text-xs text-amber d-block">Surface (0-50)</span>`;
    }

    const pitchBadge = r.pitch === 'Pitch 1' 
      ? `<span class="badge badge-outline text-emerald border-emerald"><i class="fa-solid fa-futbol text-emerald me-1"></i>Pitch 1</span>`
      : `<span class="badge badge-outline text-blue border-blue"><i class="fa-solid fa-futbol text-blue me-1"></i>Pitch 2</span>`;

    return `
      <tr>
        <td class="font-mono text-sm">${r.date}</td>
        <td>${pitchBadge}</td>
        <td><strong>${r.location}</strong></td>
        <td>${horizonBadge}</td>
        <td><span class="font-mono">${r.activeDepth} mm</span></td>
        <td><span class="font-mono text-dim">${r.thatchDepth || 10} mm</span></td>
        <td><span class="text-xs text-muted">${r.density}</span></td>
        <td>
          <div class="text-xs"><strong>${r.culturalPractice || 'Core Sampling'}</strong></div>
          <div class="text-xs text-dim">${r.notes || 'Routine observation'}</div>
        </td>
        <td style="text-align: right;">
          <button type="button" class="btn-icon btn-edit" title="Edit sample" onclick="openRootDepthModal('${r.id}')">
            <i class="fa-solid fa-pen-to-square"></i>
          </button>
          <button type="button" class="btn-icon btn-delete ms-1" title="Delete sample" onclick="deleteRootDepthSample('${r.id}')">
            <i class="fa-solid fa-trash-can"></i>
          </button>
        </td>
      </tr>
    `;
  }).join('');
}

function renderRootDepthTrendChart() {
  const ctx = document.getElementById('chart-root-depth-trend');
  if (!ctx) return;

  const p1Sorted = rootDepthLogs.filter(r => r.pitch === 'Pitch 1').sort((a, b) => new Date(a.date) - new Date(b.date));
  const p2Sorted = rootDepthLogs.filter(r => r.pitch === 'Pitch 2').sort((a, b) => new Date(a.date) - new Date(b.date));

  // Collect unique dates sorted
  const allDates = Array.from(new Set(rootDepthLogs.map(r => r.date))).sort((a, b) => new Date(a) - new Date(b));

  const p1Data = allDates.map(d => {
    const entry = p1Sorted.find(r => r.date === d);
    return entry ? entry.maxDepth : null;
  });

  const p2Data = allDates.map(d => {
    const entry = p2Sorted.find(r => r.date === d);
    return entry ? entry.maxDepth : null;
  });

  if (rootCharts.trend) rootCharts.trend.destroy();

  rootCharts.trend = new Chart(ctx, {
    type: 'line',
    data: {
      labels: allDates,
      datasets: [
        {
          label: 'Pitch 1 Max Root Depth (mm)',
          data: p1Data,
          borderColor: '#10b981',
          backgroundColor: 'rgba(16, 185, 129, 0.12)',
          borderWidth: 2.5,
          tension: 0.3,
          spanGaps: true,
          pointBackgroundColor: '#10b981',
          pointRadius: 4.5,
          pointHoverRadius: 6.5,
          fill: true
        },
        {
          label: 'Pitch 2 Max Root Depth (mm)',
          data: p2Data,
          borderColor: '#3b82f6',
          backgroundColor: 'rgba(59, 130, 246, 0.1)',
          borderWidth: 2.5,
          tension: 0.3,
          spanGaps: true,
          pointBackgroundColor: '#3b82f6',
          pointRadius: 4.5,
          pointHoverRadius: 6.5,
          fill: true
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: {
        mode: 'index',
        intersect: false
      },
      plugins: {
        legend: {
          labels: { color: '#9ca3af', font: { family: 'Outfit', size: 11 } }
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              if (context.parsed.y === null || context.parsed.y === undefined) return null;
              const horizon = context.parsed.y >= 150 ? 'Deep Penetration' : (context.parsed.y >= 50 ? 'Active Rootzone' : 'Surface Layer');
              return ` ${context.dataset.label}: ${context.parsed.y} mm (${horizon})`;
            }
          }
        }
      },
      scales: {
        x: {
          grid: { color: 'rgba(255, 255, 255, 0.05)' },
          ticks: { color: '#9ca3af' }
        },
        y: {
          suggestedMin: 0,
          suggestedMax: 260,
          grid: { color: 'rgba(255, 255, 255, 0.05)' },
          ticks: { color: '#9ca3af' },
          title: { display: true, text: 'Root Depth (mm)', color: '#9ca3af' }
        }
      }
    }
  });
}

function renderRootDepthSectorChart() {
  const ctx = document.getElementById('chart-root-depth-sector');
  if (!ctx) return;

  const sectors = [
    'Center High-Wear Pass',
    'Goal Mouth (North)',
    'Goal Mouth (South)',
    'Midfield / Center Circle',
    'Penalty Area (18-Yard)',
    'Wing / Flank Area'
  ];

  const p1Avgs = sectors.map(sec => {
    const matches = rootDepthLogs.filter(r => r.pitch === 'Pitch 1' && r.location === sec);
    if (matches.length === 0) return 0;
    return Number((matches.reduce((a, b) => a + b.maxDepth, 0) / matches.length).toFixed(1));
  });

  const p2Avgs = sectors.map(sec => {
    const matches = rootDepthLogs.filter(r => r.pitch === 'Pitch 2' && r.location === sec);
    if (matches.length === 0) return 0;
    return Number((matches.reduce((a, b) => a + b.maxDepth, 0) / matches.length).toFixed(1));
  });

  if (rootCharts.sector) rootCharts.sector.destroy();

  rootCharts.sector = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Center Pass', 'Goal (N)', 'Goal (S)', 'Midfield', 'Penalty Box', 'Wings'],
      datasets: [
        {
          label: 'Pitch 1 Mean Depth (mm)',
          data: p1Avgs,
          backgroundColor: 'rgba(16, 185, 129, 0.75)',
          borderColor: '#10b981',
          borderWidth: 1,
          borderRadius: 4
        },
        {
          label: 'Pitch 2 Mean Depth (mm)',
          data: p2Avgs,
          backgroundColor: 'rgba(59, 130, 246, 0.75)',
          borderColor: '#3b82f6',
          borderWidth: 1,
          borderRadius: 4
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          labels: { color: '#9ca3af', font: { family: 'Outfit', size: 11 } }
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              return ` ${context.dataset.label}: ${context.parsed.y} mm`;
            }
          }
        }
      },
      scales: {
        x: {
          grid: { color: 'rgba(255, 255, 255, 0.05)' },
          ticks: { color: '#9ca3af' }
        },
        y: {
          suggestedMin: 0,
          suggestedMax: 240,
          grid: { color: 'rgba(255, 255, 255, 0.05)' },
          ticks: { color: '#9ca3af' },
          title: { display: true, text: 'Mean Root Depth (mm)', color: '#9ca3af' }
        }
      }
    }
  });
}

function initRootDepthModule() {
  const form = document.getElementById('root-depth-form');
  if (form) {
    form.addEventListener('submit', handleSaveRootDepthSample);
  }
}

// Global window exposure for inline events
window.openRootDepthModal = openRootDepthModal;
window.closeRootDepthModal = closeRootDepthModal;
window.filterRootDepthPitch = filterRootDepthPitch;
window.filterRootDepthTable = filterRootDepthTable;
window.updateRootModalLivePreview = updateRootModalLivePreview;
window.deleteRootDepthSample = deleteRootDepthSample;
window.renderRootDepthModule = renderRootDepthModule;

/* ==========================================================================
   Agrovista Amenity Soil Analysis Engine & Module
   ========================================================================== */

function evaluateSoilParam(paramKey, val) {
  const guide = SOIL_GUIDELINES[paramKey];
  if (!guide) return null;
  const num = Number(val);
  let status = 'optimal';
  if (num < guide.min) status = 'low';
  else if (num > guide.max) status = 'high';

  // Target Guideline Zone calculation for the visual gauge bar
  const lowerBound = Math.max(0, guide.min * 0.4);
  const upperBound = guide.max * 1.5;
  const span = upperBound - lowerBound;

  const targetLeftPercent = Math.max(5, Math.min(85, ((guide.min - lowerBound) / span) * 100));
  const targetWidthPercent = Math.max(10, Math.min(85, ((guide.max - guide.min) / span) * 100));

  let pinPercent = ((num - lowerBound) / span) * 100;
  pinPercent = Math.max(2, Math.min(98, pinPercent));

  let statusLabel = 'In Target Range';
  let badgeClass = 'badge-ideal';
  let pinClass = 'pin-optimal';

  if (status === 'low') {
    statusLabel = `Deficient (< ${guide.min} ${guide.unit})`;
    badgeClass = 'badge-low';
    pinClass = 'pin-low';
  } else if (status === 'high') {
    statusLabel = `High (> ${guide.max} ${guide.unit})`;
    badgeClass = 'badge-high';
    pinClass = 'pin-high';
  } else {
    statusLabel = `Optimal (${guide.min} - ${guide.max} ${guide.unit})`;
  }

  return {
    paramKey,
    guide,
    value: num,
    status,
    statusLabel,
    badgeClass,
    pinClass,
    targetLeftPercent,
    targetWidthPercent,
    pinPercent
  };
}

function getActiveSoilSample() {
  const pitchSamples = soilLogs.filter(s => s.pitch === activeSoilPitch);
  if (pitchSamples.length === 0) return null;

  if (selectedSoilSampleId) {
    const found = pitchSamples.find(s => s.id === selectedSoilSampleId);
    if (found) return found;
  }

  // Return latest sample by date
  return [...pitchSamples].sort((a, b) => new Date(b.date) - new Date(a.date))[0];
}

function renderSoilTab() {
  // Populate Soil Pitch Selector & Sample Select Dropdown
  const pitchSelect = document.getElementById('soil-pitch-select');
  if (pitchSelect && pitchSelect.value !== activeSoilPitch) {
    pitchSelect.value = activeSoilPitch;
  }

  const sampleSelect = document.getElementById('soil-sample-select');
  const pitchSamples = soilLogs
    .filter(s => s.pitch === activeSoilPitch)
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  if (sampleSelect) {
    sampleSelect.innerHTML = '';
    if (pitchSamples.length === 0) {
      sampleSelect.innerHTML = `<option value="">No samples recorded for ${activeSoilPitch}</option>`;
    } else {
      pitchSamples.forEach((s, idx) => {
        const opt = document.createElement('option');
        opt.value = s.id;
        opt.textContent = `${s.date} — ${s.labRef || 'Sample #' + (idx + 1)}`;
        sampleSelect.appendChild(opt);
      });

      const current = getActiveSoilSample();
      if (current) {
        sampleSelect.value = current.id;
        selectedSoilSampleId = current.id;
      }
    }
  }

  const sample = getActiveSoilSample();

  renderSoilKpis(sample);
  renderDashboardSoilBanner(sample);
  renderSoilParamGauges(sample);
  renderSoilCharts(sample);
  renderSoilDiagnosticInsights(sample);
  renderSoilHistoryTable();
}

function renderSoilKpis(sample) {
  if (!sample) {
    const elComp = document.getElementById('kpi-soil-compliance');
    if (elComp) elComp.textContent = '--%';
    const elCnt = document.getElementById('kpi-soil-in-target-count');
    if (elCnt) elCnt.textContent = 'No active sample';
    const elPh = document.getElementById('kpi-soil-ph');
    if (elPh) elPh.innerHTML = `-- <small>pH</small>`;
    const elCec = document.getElementById('kpi-soil-cec-val');
    if (elCec) elCec.textContent = 'C.E.C: -- meq/100g';
    const elMacro = document.getElementById('kpi-soil-macro-score');
    if (elMacro) elMacro.textContent = '--/4';
    const elResp = document.getElementById('kpi-soil-respiration');
    if (elResp) elResp.innerHTML = `-- <small>mg/kg</small>`;
    const elOm = document.getElementById('kpi-soil-om-val');
    if (elOm) elOm.textContent = 'Org. Matter: --%';
    return;
  }

  let inTargetCount = 0;
  let totalParams = 0;

  Object.keys(SOIL_GUIDELINES).forEach(key => {
    totalParams++;
    const evaluated = evaluateSoilParam(key, sample[key]);
    if (evaluated && evaluated.status === 'optimal') {
      inTargetCount++;
    }
  });

  const compliancePercent = Math.round((inTargetCount / totalParams) * 100);
  const complianceEl = document.getElementById('kpi-soil-compliance');
  if (complianceEl) complianceEl.textContent = `${compliancePercent}%`;

  const complianceBadge = document.getElementById('kpi-soil-compliance-badge');
  if (complianceBadge) {
    if (compliancePercent >= 80) {
      complianceBadge.className = 'badge badge-ideal';
      complianceBadge.textContent = 'Excellent Balance';
    } else if (compliancePercent >= 60) {
      complianceBadge.className = 'badge badge-optimal';
      complianceBadge.textContent = 'Moderate Compliance';
    } else {
      complianceBadge.className = 'badge badge-low';
      complianceBadge.textContent = 'Attention Needed';
    }
  }

  const inTargetCountEl = document.getElementById('kpi-soil-in-target-count');
  if (inTargetCountEl) {
    inTargetCountEl.textContent = `${inTargetCount} of ${totalParams} in Target Window`;
  }

  // pH & CEC
  const phVal = Number(sample.ph || 0);
  const phEl = document.getElementById('kpi-soil-ph');
  if (phEl) phEl.innerHTML = `${phVal.toFixed(1)} <small>pH</small>`;

  const phEval = evaluateSoilParam('ph', phVal);
  const phBadge = document.getElementById('kpi-soil-ph-badge');
  if (phBadge && phEval) {
    phBadge.className = `badge ${phEval.badgeClass}`;
    phBadge.textContent = phEval.status === 'optimal' ? 'Target (6.0 - 7.0)' : phEval.statusLabel;
  }

  const cecEl = document.getElementById('kpi-soil-cec-val');
  if (cecEl) cecEl.textContent = `C.E.C: ${Number(sample.cec || 0).toFixed(1)} meq/100g`;

  // Macro Sufficiency (P, K, MgO, S)
  const macros = ['phosphorus', 'potassium', 'magnesium', 'sulphur'];
  const macrosInTarget = macros.filter(m => evaluateSoilParam(m, sample[m])?.status === 'optimal').length;
  const macroScoreEl = document.getElementById('kpi-soil-macro-score');
  if (macroScoreEl) macroScoreEl.textContent = `${macrosInTarget}/4`;

  const macroBadge = document.getElementById('kpi-soil-macro-badge');
  if (macroBadge) {
    macroBadge.className = `badge ${macrosInTarget === 4 ? 'badge-ideal' : macrosInTarget >= 2 ? 'badge-optimal' : 'badge-low'}`;
    macroBadge.textContent = macrosInTarget === 4 ? 'All Macros Balanced' : `${4 - macrosInTarget} Macro Deficit(s)`;
  }

  // Biological Activity & Org Matter
  const respVal = Number(sample.soil_respiration || 0);
  const respEl = document.getElementById('kpi-soil-respiration');
  if (respEl) respEl.innerHTML = `${respVal.toFixed(0)} <small>mg/kg</small>`;

  const respEval = evaluateSoilParam('soil_respiration', respVal);
  const bioBadge = document.getElementById('kpi-soil-biology-badge');
  if (bioBadge && respEval) {
    bioBadge.className = `badge ${respEval.badgeClass}`;
    bioBadge.textContent = respEval.status === 'optimal' ? 'Active Biology (150-200)' : respEval.statusLabel;
  }

  const omEl = document.getElementById('kpi-soil-om-val');
  if (omEl) omEl.textContent = `Org. Matter: ${Number(sample.org_matter || 0).toFixed(1)}%`;
}

function renderDashboardSoilBanner(sample) {
  const p1Latest = soilLogs.filter(s => s.pitch === 'Pitch 1').sort((a, b) => new Date(b.date) - new Date(a.date))[0];
  const p2Latest = soilLogs.filter(s => s.pitch === 'Pitch 2').sort((a, b) => new Date(b.date) - new Date(a.date))[0];

  const targetSample = sample || p1Latest || p2Latest;
  if (!targetSample) return;

  const phEl = document.getElementById('dash-soil-ph');
  if (phEl) phEl.textContent = Number(targetSample.ph || 0).toFixed(1);

  const cecEl = document.getElementById('dash-soil-cec');
  if (cecEl) cecEl.textContent = `${Number(targetSample.cec || 0).toFixed(1)} meq`;

  const kEl = document.getElementById('dash-soil-k');
  if (kEl) kEl.textContent = `${Number(targetSample.potassium || 0).toFixed(0)} ppm`;

  const omEl = document.getElementById('dash-soil-om');
  if (omEl) omEl.textContent = `${Number(targetSample.org_matter || 0).toFixed(1)} %`;

  const respEl = document.getElementById('dash-soil-resp');
  if (respEl) respEl.textContent = `${Number(targetSample.soil_respiration || 0).toFixed(0)} mg/kg`;

  const subtitleEl = document.getElementById('dash-soil-subtitle');
  if (subtitleEl) {
    subtitleEl.textContent = `${targetSample.pitch} (Report ${targetSample.date} - ${targetSample.labRef || 'AGV'}) active`;
  }
}

function renderSoilParamGauges(sample) {
  const container = document.getElementById('soil-params-grid');
  if (!container) return;

  if (!sample) {
    container.innerHTML = `
      <div class="soil-empty-state">
        <div class="soil-empty-icon"><i class="fa-solid fa-flask-vial"></i></div>
        <h3>No Soil Sample Recorded for ${activeSoilPitch}</h3>
        <p>All test inputs are ready for your accurate Agrovista report data. Click below to enter your parameters.</p>
        <button class="btn btn-primary btn-sm mt-2" onclick="openSoilModal()">
          <i class="fa-solid fa-plus"></i> Log Soil Test Now
        </button>
      </div>
    `;
    return;
  }

  container.innerHTML = '';

  const paramKeys = Object.keys(SOIL_GUIDELINES);

  paramKeys.forEach(key => {
    const guide = SOIL_GUIDELINES[key];

    // Filter by Category
    if (activeSoilCategory !== 'all' && guide.category !== activeSoilCategory) {
      return;
    }

    const evalResult = evaluateSoilParam(key, sample[key]);
    if (!evalResult) return;

    // Filter by Status
    if (activeSoilStatus !== 'all' && evalResult.status !== activeSoilStatus) {
      return;
    }

    const card = document.createElement('div');
    card.className = `soil-param-card status-${evalResult.status}`;

    card.innerHTML = `
      <div>
        <div class="soil-param-header">
          <div>
            <div class="soil-param-category-tag">${guide.category}</div>
            <h4 class="soil-param-title">
              <i class="fa-solid fa-${guide.category === 'Nutrients' ? 'atom' : 'seedling'} text-emerald"></i>
              ${guide.name}
            </h4>
          </div>
          <span class="badge badge-sm ${evalResult.badgeClass}">
            ${evalResult.status === 'optimal' ? 'In Target' : evalResult.status === 'low' ? 'Low / Below Min' : 'High / Above Max'}
          </span>
        </div>

        <div class="soil-param-value-box">
          <div class="soil-param-reading">
            ${evalResult.value} <small>${guide.unit !== '-' ? guide.unit : ''}</small>
          </div>
          <span class="text-sm ${evalResult.status === 'optimal' ? 'text-emerald' : evalResult.status === 'low' ? 'text-amber' : 'text-cyan'} font-bold">
            ${evalResult.status === 'optimal' ? '<i class="fa-solid fa-check me-1"></i>Guideline Target' : evalResult.status === 'low' ? '<i class="fa-solid fa-arrow-down me-1"></i>Deficient' : '<i class="fa-solid fa-arrow-up me-1"></i>Surplus'}
          </span>
        </div>

        <!-- Agrovista Visual Range Gauge Bar -->
        <div class="soil-gauge-container">
          <div class="soil-gauge-bar" title="Guideline Window: ${guide.min} - ${guide.max} ${guide.unit}">
            <div class="soil-gauge-target-zone" style="left: ${evalResult.targetLeftPercent}%; width: ${evalResult.targetWidthPercent}%;"></div>
            <div class="soil-gauge-pin ${evalResult.pinClass}" style="left: ${evalResult.pinPercent}%;"></div>
          </div>
          <div class="soil-gauge-ticks">
            <span>Min: ${guide.min}</span>
            <span>Target: ${guide.min} – ${guide.max} ${guide.unit}</span>
            <span>Max: ${guide.max}</span>
          </div>
        </div>
      </div>

      <div class="soil-param-footer">
        <span class="soil-range-hint">Agrovista Target: <strong>${guide.min} – ${guide.max} ${guide.unit}</strong></span>
        <div class="soil-tooltip-wrapper">
          <button type="button" class="soil-info-trigger" aria-label="Grass Structure Impact for ${guide.name}">
            <i class="fa-solid fa-question"></i>
          </button>
          <div class="soil-tooltip-popup">
            <div class="soil-tt-header">
              <i class="fa-solid fa-wheat-awn"></i> Grass Structure & Plant Role
            </div>
            <p class="soil-tt-body">${guide.desc}</p>
            <div class="soil-tt-footer">
              <span>Agrovista Target:</span>
              <strong>${guide.min} – ${guide.max} ${guide.unit}</strong>
            </div>
          </div>
        </div>
      </div>
    `;

    container.appendChild(card);
  });
}

function renderSoilCharts(sample) {
  renderSoilRadarChart(sample);
  renderSoilBarChart(sample);
}

function renderSoilRadarChart(sample) {
  const ctx = document.getElementById('chart-soil-radar');
  if (!ctx) return;

  if (charts.soilRadar) {
    charts.soilRadar.destroy();
  }

  if (!sample) return;

  const nutrientKeys = [
    'phosphorus', 'potassium', 'magnesium', 'sulphur',
    'calcium', 'iron', 'copper', 'zinc',
    'manganese', 'boron', 'sodium'
  ];

  const labels = nutrientKeys.map(k => SOIL_GUIDELINES[k].symbol);
  
  // Normalized percentage against median of guideline target range
  const samplePercentages = nutrientKeys.map(k => {
    const g = SOIL_GUIDELINES[k];
    const median = (g.min + g.max) / 2;
    const val = Number(sample[k] || 0);
    return Math.round((val / median) * 100);
  });

  const minBoundPercentages = nutrientKeys.map(k => {
    const g = SOIL_GUIDELINES[k];
    const median = (g.min + g.max) / 2;
    return Math.round((g.min / median) * 100);
  });

  const maxBoundPercentages = nutrientKeys.map(k => {
    const g = SOIL_GUIDELINES[k];
    const median = (g.min + g.max) / 2;
    return Math.round((g.max / median) * 100);
  });

  const targetLine = nutrientKeys.map(() => 100);

  charts.soilRadar = new Chart(ctx, {
    type: 'radar',
    data: {
      labels: labels,
      datasets: [
        {
          label: `${sample.pitch} Sample (${sample.date})`,
          data: samplePercentages,
          backgroundColor: 'rgba(16, 185, 129, 0.25)',
          borderColor: '#10b981',
          borderWidth: 2.5,
          pointBackgroundColor: '#10b981',
          pointBorderColor: '#ffffff',
          pointHoverRadius: 6,
          pointRadius: 4
        },
        {
          label: 'Agrovista Target Baseline (100% Median)',
          data: targetLine,
          borderColor: '#3b82f6',
          borderWidth: 1.5,
          borderDash: [4, 4],
          pointRadius: 0,
          fill: false
        },
        {
          label: 'Target Lower Limit (%)',
          data: minBoundPercentages,
          borderColor: 'rgba(245, 158, 11, 0.6)',
          borderWidth: 1.2,
          borderDash: [3, 3],
          pointRadius: 0,
          fill: false
        },
        {
          label: 'Target Upper Limit (%)',
          data: maxBoundPercentages,
          borderColor: 'rgba(6, 182, 212, 0.6)',
          borderWidth: 1.2,
          borderDash: [3, 3],
          pointRadius: 0,
          fill: false
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        r: {
          grid: { color: 'rgba(255, 255, 255, 0.08)' },
          angleLines: { color: 'rgba(255, 255, 255, 0.08)' },
          pointLabels: {
            color: '#f3f4f6',
            font: { size: 11, weight: 'bold', family: 'JetBrains Mono' }
          },
          ticks: {
            color: '#9ca3af',
            backdropColor: 'transparent',
            stepSize: 25,
            showLabelBackdrop: false
          },
          suggestedMin: 0,
          suggestedMax: 150
        }
      },
      plugins: {
        legend: {
          position: 'top',
          labels: { color: '#9ca3af', boxWidth: 12, font: { size: 11 } }
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              const key = nutrientKeys[context.dataIndex];
              const guide = SOIL_GUIDELINES[key];
              const rawVal = sample[key];
              return `${guide.name}: ${rawVal} ${guide.unit} (${context.raw}% of Agrovista median)`;
            }
          }
        }
      }
    }
  });
}

function renderSoilBarChart(sample) {
  const ctx = document.getElementById('chart-soil-bar');
  if (!ctx) return;

  if (charts.soilBar) {
    charts.soilBar.destroy();
  }

  if (!sample) return;

  const bioKeys = [
    'ph', 'cec', 'cn_ratio', 'org_matter',
    'org_carbon', 'soil_respiration', 'potentially_min_n'
  ];

  const labels = bioKeys.map(k => SOIL_GUIDELINES[k].symbol);

  // Normalized % vs median
  const sampleValues = bioKeys.map(k => {
    const g = SOIL_GUIDELINES[k];
    const median = (g.min + g.max) / 2;
    return Math.round(((sample[k] || 0) / median) * 100);
  });

  const minValues = bioKeys.map(k => {
    const g = SOIL_GUIDELINES[k];
    const median = (g.min + g.max) / 2;
    return Math.round((g.min / median) * 100);
  });

  const maxValues = bioKeys.map(k => {
    const g = SOIL_GUIDELINES[k];
    const median = (g.min + g.max) / 2;
    return Math.round((g.max / median) * 100);
  });

  charts.soilBar = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [
        {
          label: 'Lower Limit (%)',
          data: minValues,
          backgroundColor: 'rgba(245, 158, 11, 0.4)',
          borderColor: '#f59e0b',
          borderWidth: 1,
          borderRadius: 3
        },
        {
          label: 'Tested Value (% of Target Median)',
          data: sampleValues,
          backgroundColor: 'rgba(16, 185, 129, 0.75)',
          borderColor: '#10b981',
          borderWidth: 1.5,
          borderRadius: 4
        },
        {
          label: 'Upper Limit (%)',
          data: maxValues,
          backgroundColor: 'rgba(6, 182, 212, 0.4)',
          borderColor: '#06b6d4',
          borderWidth: 1,
          borderRadius: 3
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { labels: { color: '#9ca3af', boxWidth: 12 } },
        tooltip: {
          callbacks: {
            title: (items) => {
              const key = bioKeys[items[0].dataIndex];
              return SOIL_GUIDELINES[key].name;
            },
            label: (context) => {
              const key = bioKeys[context.dataIndex];
              const g = SOIL_GUIDELINES[key];
              if (context.datasetIndex === 1) {
                return `Tested: ${sample[key]} ${g.unit} (${context.raw}%)`;
              } else if (context.datasetIndex === 0) {
                return `Lower Limit: ${g.min} ${g.unit}`;
              } else {
                return `Upper Limit: ${g.max} ${g.unit}`;
              }
            }
          }
        }
      },
      scales: {
        x: {
          grid: { color: 'rgba(255,255,255,0.05)' },
          ticks: { color: '#9ca3af', font: { family: 'JetBrains Mono', weight: 'bold' } }
        },
        y: {
          grid: { color: 'rgba(255,255,255,0.05)' },
          ticks: { color: '#9ca3af' },
          title: { display: true, text: '% of Agrovista Guideline Median', color: '#9ca3af' },
          suggestedMax: 140
        }
      }
    }
  });
}

function renderSoilDiagnosticInsights(sample) {
  const container = document.getElementById('soil-diagnostic-insights');
  if (!container) return;

  if (!sample) {
    container.innerHTML = '<p class="text-muted">No soil test data available to generate diagnostic recommendations.</p>';
    return;
  }

  let html = '<div class="soil-diagnostic-grid">';

  // 1. Potassium vs Clipping Volume Insight
  const kRes = evaluateSoilParam('potassium', sample.potassium);
  if (kRes && kRes.status === 'low') {
    html += `
      <div class="diagnostic-item-card diag-alert">
        <div class="diag-title"><i class="fa-solid fa-triangle-exclamation text-amber"></i> Potassium (K) Deficit with High Summer Clipping Removal</div>
        <p class="diag-desc">Potassium level tested at <strong>${sample.potassium} ppm</strong> (Agrovista target: 125 – 225 ppm). High clipping volume extractions rapidly deplete available K, reducing turf wear tolerance and stomatal water management under heat stress.</p>
        <div class="diag-action"><i class="fa-solid fa-wrench me-1"></i> Recommended: Apply controlled-release sulphate of potash (K2SO4) or foliar potassium phosphite to replenish K reserves without driving leaf surges.</div>
      </div>
    `;
  } else {
    html += `
      <div class="diagnostic-item-card diag-optimal">
        <div class="diag-title"><i class="fa-solid fa-circle-check text-emerald"></i> Potassium & Base Nutrition Equilibrium</div>
        <p class="diag-desc">Potassium level at <strong>${sample.potassium} ppm</strong> is within the Agrovista optimal range (125-225 ppm), supporting cellular turgor and elite boot traction.</p>
      </div>
    `;
  }

  // 2. Organic Matter & Biological Activity
  const omRes = evaluateSoilParam('org_matter', sample.org_matter);
  if (omRes && omRes.value > 3.2) {
    html += `
      <div class="diagnostic-item-card diag-alert">
        <div class="diag-title"><i class="fa-solid fa-layer-group text-amber"></i> Organic Matter Thatch Accumulation Risk</div>
        <p class="diag-desc">Organic Matter (DUMAS) tested at <strong>${sample.org_matter}%</strong> (Target: 1.5 – 4.0%). Higher OM in pure PRG swards holds surface moisture, promoting shallow rooting and disease incubation.</p>
        <div class="diag-action"><i class="fa-solid fa-scissors me-1"></i> Recommended: Light sand topdressing and regular micro-coring / verti-cutting to dilute organic biomass in the top 20mm.</div>
      </div>
    `;
  } else {
    html += `
      <div class="diagnostic-item-card diag-optimal">
        <div class="diag-title"><i class="fa-solid fa-microbe text-emerald"></i> Healthy Soil Biology & Respiration</div>
        <p class="diag-desc">Soil respiration at <strong>${sample.soil_respiration} mg/kg</strong> with <strong>${sample.potentially_min_n} kg N/ha</strong> Potentially Mineralizable N confirms active, beneficial microbial activity facilitating natural nutrient release.</p>
      </div>
    `;
  }

  // 3. Soil pH & CEC Buffering
  const phRes = evaluateSoilParam('ph', sample.ph);
  const cecRes = evaluateSoilParam('cec', sample.cec);

  if (phRes && phRes.status === 'optimal' && cecRes && cecRes.status === 'optimal') {
    html += `
      <div class="diagnostic-item-card diag-optimal">
        <div class="diag-title"><i class="fa-solid fa-flask text-emerald"></i> Ideal Rootzone pH & Cation Exchange</div>
        <p class="diag-desc">pH <strong>${sample.ph}</strong> and C.E.C. <strong>${sample.cec} meq/100g</strong> are perfectly tuned for sand-based sports rootzones, ensuring maximum nutrient availability for pure perennial ryegrass without nutrient lockout.</p>
      </div>
    `;
  } else if (phRes && phRes.status === 'low') {
    html += `
      <div class="diagnostic-item-card diag-alert">
        <div class="diag-title"><i class="fa-solid fa-vial text-amber"></i> Acidic Soil Rootzone (pH < 6.0)</div>
        <p class="diag-desc">pH is at <strong>${sample.ph}</strong>, which can bind phosphorus and reduce micro-element uptake. Consider light calcified seaweed or calcium carbonate application.</p>
      </div>
    `;
  }

  html += '</div>';
  container.innerHTML = html;
}

function renderSoilHistoryTable() {
  const tbody = document.getElementById('soil-history-tbody');
  if (!tbody) return;

  tbody.innerHTML = '';

  if (soilLogs.length === 0) {
    tbody.innerHTML = `<tr><td colspan="9" class="text-center p-4 text-muted">No soil analysis records in system. Click "+ Add New Sample Record" above.</td></tr>`;
    return;
  }

  const sorted = [...soilLogs].sort((a, b) => new Date(b.date) - new Date(a.date));

  sorted.forEach(entry => {
    let optimalCount = 0;
    const deficits = [];
    const highs = [];

    Object.keys(SOIL_GUIDELINES).forEach(key => {
      const evalRes = evaluateSoilParam(key, entry[key]);
      if (evalRes) {
        if (evalRes.status === 'optimal') optimalCount++;
        else if (evalRes.status === 'low') deficits.push(evalRes.guide.symbol);
        else if (evalRes.status === 'high') highs.push(evalRes.guide.symbol);
      }
    });

    const compliancePercent = Math.round((optimalCount / 18) * 100);
    const isCurrent = entry.id === selectedSoilSampleId && entry.pitch === activeSoilPitch;

    const tr = document.createElement('tr');
    if (isCurrent) tr.className = 'table-row-selected';

    tr.innerHTML = `
      <td><strong>${entry.date}</strong> ${isCurrent ? '<span class="badge badge-sm badge-ideal ms-1">Active</span>' : ''}</td>
      <td><span class="badge ${entry.pitch === 'Pitch 1' ? 'badge-intermediate' : 'badge-healthy'}">${entry.pitch}</span></td>
      <td><code>${entry.labRef || '—'}</code></td>
      <td><strong>${Number(entry.ph || 0).toFixed(1)}</strong></td>
      <td>
        <div class="d-flex align-items-center gap-1">
          <span class="badge ${compliancePercent >= 80 ? 'badge-ideal' : compliancePercent >= 60 ? 'badge-optimal' : 'badge-low'}">
            ${compliancePercent}%
          </span>
          <small class="text-muted">(${optimalCount}/18)</small>
        </div>
      </td>
      <td>
        ${deficits.length > 0 ? deficits.map(d => `<span class="badge badge-sm badge-low me-1">${d}</span>`).join('') : '<span class="text-dim text-sm">None</span>'}
      </td>
      <td>
        ${highs.length > 0 ? highs.map(h => `<span class="badge badge-sm badge-high me-1">${h}</span>`).join('') : '<span class="text-dim text-sm">None</span>'}
      </td>
      <td>
        <span class="badge badge-sm ${Number(entry.soil_respiration || 0) >= 150 ? 'badge-ideal' : 'badge-low'}">
          Resp ${Number(entry.soil_respiration || 0).toFixed(0)} mg/kg
        </span>
      </td>
      <td>
        <div class="d-flex gap-1">
          <button type="button" class="btn-icon" title="View & Load in Hub" onclick="loadSoilSampleView('${entry.id}', '${entry.pitch}')">
            <i class="fa-solid fa-eye text-emerald"></i>
          </button>
          <button type="button" class="btn-icon" title="Edit Soil Sample" onclick="editSoilSample('${entry.id}')">
            <i class="fa-solid fa-pen-to-square text-blue"></i>
          </button>
          <button type="button" class="btn-icon text-danger" title="Delete Sample" onclick="deleteSoilEntry('${entry.id}')">
            <i class="fa-solid fa-trash"></i>
          </button>
        </div>
      </td>
    `;

    tbody.appendChild(tr);
  });
}

function loadSoilSampleView(id, pitch) {
  activeSoilPitch = pitch;
  selectedSoilSampleId = id;
  renderSoilTab();
  if (typeof showToast === 'function') {
    showToast(`Loaded soil diagnostic report for ${pitch}`, 'info');
  }
}

function editSoilSample(id) {
  const entry = soilLogs.find(s => s.id === id);
  if (entry) {
    openSoilModal(entry);
  }
}

function deleteSoilEntry(id) {
  if (confirm('Are you sure you want to delete this soil diagnostic test record?')) {
    soilLogs = soilLogs.filter(s => s.id !== id);
    if (selectedSoilSampleId === id) {
      selectedSoilSampleId = null;
    }
    saveSoilData();
    renderSoilTab();
    if (typeof showToast === 'function') {
      showToast('Soil analysis record deleted.', 'info');
    }
  }
}

function openSoilModal(entry = null) {
  const modal = document.getElementById('soil-modal');
  const title = document.getElementById('soil-modal-title');
  const form = document.getElementById('soil-entry-form');

  if (!modal || !form) return;

  form.reset();

  if (entry) {
    title.innerHTML = '<i class="fa-solid fa-pen-to-square text-emerald"></i> Edit Agrovista Soil Analysis Report';
    document.getElementById('soil-entry-id').value = entry.id;
    document.getElementById('soil-entry-date').value = entry.date;
    document.getElementById('soil-entry-pitch').value = entry.pitch;
    document.getElementById('soil-entry-lab-ref').value = entry.labRef || '';
    document.getElementById('soil-entry-notes').value = entry.notes || '';

    Object.keys(SOIL_GUIDELINES).forEach(key => {
      const guide = SOIL_GUIDELINES[key];
      const el = document.getElementById(guide.inputId);
      if (el) el.value = (entry[key] !== undefined && entry[key] !== null) ? entry[key] : '';
    });
  } else {
    title.innerHTML = '<i class="fa-solid fa-flask-vial text-emerald"></i> Log Agrovista Amenity Soil Analysis';
    document.getElementById('soil-entry-id').value = '';
    document.getElementById('soil-entry-date').value = new Date().toISOString().split('T')[0];
    document.getElementById('soil-entry-pitch').value = activeSoilPitch;
    document.getElementById('soil-entry-lab-ref').value = '';
    document.getElementById('soil-entry-notes').value = '';

    // Leave fields completely blank for accurate manual input
    Object.keys(SOIL_GUIDELINES).forEach(key => {
      const guide = SOIL_GUIDELINES[key];
      const el = document.getElementById(guide.inputId);
      if (el) {
        el.value = '';
        el.placeholder = `${guide.min} - ${guide.max}`;
      }
    });
  }

  updateSoilModalLivePreview();
  modal.classList.add('open');
  modal.classList.add('active');
}

function closeSoilModal() {
  const modal = document.getElementById('soil-modal');
  if (modal) {
    modal.classList.remove('open');
    modal.classList.remove('active');
  }
}

function updateSoilModalLivePreview() {
  let optimalCount = 0;
  let lowCount = 0;
  let highCount = 0;
  let enteredCount = 0;

  Object.keys(SOIL_GUIDELINES).forEach(key => {
    const guide = SOIL_GUIDELINES[key];
    const input = document.getElementById(guide.inputId);
    const pill = document.getElementById(guide.pillId);

    if (input && pill) {
      const raw = input.value.trim();
      const val = parseFloat(raw);
      if (raw !== '' && !isNaN(val)) {
        enteredCount++;
        const res = evaluateSoilParam(key, val);
        pill.className = `soil-status-pill ${res.pinClass === 'pin-optimal' ? 'pill-optimal' : res.pinClass === 'pin-low' ? 'pill-low' : 'pill-high'}`;
        pill.textContent = res.status === 'optimal' ? 'Target' : res.status === 'low' ? 'Low' : 'High';

        if (res.status === 'optimal') optimalCount++;
        else if (res.status === 'low') lowCount++;
        else highCount++;
      } else {
        pill.className = 'soil-status-pill';
        pill.textContent = `${guide.min}–${guide.max}`;
      }
    }
  });

  const total = 18;
  const percent = enteredCount > 0 ? Math.round((optimalCount / total) * 100) : 0;

  const prevText = document.getElementById('modal-compliance-preview');
  if (prevText) {
    if (enteredCount === 0) {
      prevText.textContent = `Ready for manual entry (18 parameters)`;
    } else {
      prevText.textContent = `${percent}% in Target Window (${optimalCount}/${total} parameters filled: ${enteredCount})`;
    }
  }

  const countOpt = document.getElementById('modal-count-optimal');
  if (countOpt) countOpt.textContent = `${optimalCount} Target`;

  const countLow = document.getElementById('modal-count-low');
  if (countLow) countLow.textContent = `${lowCount} Low`;

  const countHigh = document.getElementById('modal-count-high');
  if (countHigh) countHigh.textContent = `${highCount} High`;
}

function saveSoilModalEntry() {
  const idInput = document.getElementById('soil-entry-id').value;
  const isEdit = Boolean(idInput);

  const newEntry = {
    id: isEdit ? idInput : `soil-${Date.now()}`,
    date: document.getElementById('soil-entry-date').value,
    pitch: document.getElementById('soil-entry-pitch').value,
    labRef: document.getElementById('soil-entry-lab-ref').value,
    notes: document.getElementById('soil-entry-notes').value
  };

  Object.keys(SOIL_GUIDELINES).forEach(key => {
    const guide = SOIL_GUIDELINES[key];
    const input = document.getElementById(guide.inputId);
    newEntry[key] = input && input.value !== '' ? Number(parseFloat(input.value || 0).toFixed(guide.step < 0.1 ? 2 : 1)) : 0;
  });

  if (isEdit) {
    const idx = soilLogs.findIndex(s => s.id === idInput);
    if (idx >= 0) soilLogs[idx] = newEntry;
    else soilLogs.push(newEntry);
  } else {
    soilLogs.unshift(newEntry);
  }

  activeSoilPitch = newEntry.pitch;
  selectedSoilSampleId = newEntry.id;

  saveSoilData();
  closeSoilModal();
  renderAll();

  if (typeof showToast === 'function') {
    showToast(`Soil analysis report for ${newEntry.pitch} saved successfully!`, 'success');
  }
}

// Attach functions to global window for inline onclick handlers
window.openSoilModal = openSoilModal;
window.closeSoilModal = closeSoilModal;
window.saveSoilModalEntry = saveSoilModalEntry;
window.editSoilSample = editSoilSample;
window.deleteSoilEntry = deleteSoilEntry;
window.loadSoilSampleView = loadSoilSampleView;
window.clearAllSoilData = clearAllSoilData;

function exportSoilCSV() {
  if (soilLogs.length === 0) {
    if (typeof showToast === 'function') showToast('No soil records to export.', 'warning');
    return;
  }

  const headers = [
    'Sample ID', 'Date', 'Pitch', 'Lab Reference', 'Notes',
    'Phosphorus (P) ppm', 'Potassium (K) ppm', 'Magnesium (MgO) ppm', 'Sulphur (S) ppm',
    'Calcium (Ca) ppm', 'Iron (Fe) ppm', 'Copper (Cu) ppm', 'Zinc (Zn) ppm',
    'Manganese (Mn) ppm', 'Boron (B) ppm', 'Sodium (Na) ppm',
    'pH', 'C.E.C. (Sand Based) meq/100g', 'C:N Ratio', 'Org. Matter - DUMAS %',
    'Org. Carbon Stock t/ha', 'Soil Respiration mg/kg', 'Potentially Min N kg N/ha'
  ];

  const rows = soilLogs.map(s => [
    `"${s.id}"`,
    `"${s.date}"`,
    `"${s.pitch}"`,
    `"${s.labRef || ''}"`,
    `"${(s.notes || '').replace(/"/g, '""')}"`,
    s.phosphorus,
    s.potassium,
    s.magnesium,
    s.sulphur,
    s.calcium,
    s.iron,
    s.copper,
    s.zinc,
    s.manganese,
    s.boron,
    s.sodium,
    s.ph,
    s.cec,
    s.cn_ratio,
    s.org_matter,
    s.org_carbon,
    s.soil_respiration,
    s.potentially_min_n
  ]);

  const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
  const link = document.createElement('a');
  link.setAttribute('href', encodeURI(csvContent));
  link.setAttribute('download', `TurfTrack_Agrovista_Soil_Analysis_${new Date().toISOString().split('T')[0]}.csv`);
  document.body.appendChild(link);
  link.click();
  link.remove();

  if (typeof showToast === 'function') {
    showToast('Agrovista soil analysis CSV exported successfully.', 'success');
  }
}

/* ==========================================================================
   Modals & Event Handlers
   ========================================================================== */

function setupEventListeners() {
  // Add Entry Button
  document.getElementById('btn-add-entry').addEventListener('click', () => {
    openModal();
  });

  // Modal Close & Cancel
  document.getElementById('modal-close-btn').addEventListener('click', closeModal);
  document.getElementById('btn-cancel-modal').addEventListener('click', closeModal);

  // Modal Real-time Calculation
  const calcInputs = document.querySelectorAll('.calc-trigger');
  calcInputs.forEach(input => input.addEventListener('input', updateModalPreviewCards));

  // Modal Form Submit
  document.getElementById('entry-form').addEventListener('submit', (e) => {
    e.preventDefault();
    saveModalEntry();
  });

  // Soil Hub Toolbar Handlers
  const soilPitchSelect = document.getElementById('soil-pitch-select');
  if (soilPitchSelect) {
    soilPitchSelect.addEventListener('change', (e) => {
      activeSoilPitch = e.target.value;
      selectedSoilSampleId = null;
      renderSoilTab();
    });
  }

  const soilSampleSelect = document.getElementById('soil-sample-select');
  if (soilSampleSelect) {
    soilSampleSelect.addEventListener('change', (e) => {
      selectedSoilSampleId = e.target.value;
      renderSoilTab();
    });
  }

  // Soil Category Filter Pills
  document.querySelectorAll('#soil-category-filters .filter-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('#soil-category-filters .filter-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      activeSoilCategory = pill.dataset.category;
      renderSoilParamGauges(getActiveSoilSample());
    });
  });

  // Soil Status Filter Dropdown
  const soilStatusFilter = document.getElementById('soil-status-filter');
  if (soilStatusFilter) {
    soilStatusFilter.addEventListener('change', (e) => {
      activeSoilStatus = e.target.value;
      renderSoilParamGauges(getActiveSoilSample());
    });
  }

  // Soil Modal Triggers
  const btnAddSoil = document.getElementById('btn-add-soil-entry');
  if (btnAddSoil) btnAddSoil.addEventListener('click', () => openSoilModal());

  const btnHistoryAddSoil = document.getElementById('btn-history-add-soil');
  if (btnHistoryAddSoil) btnHistoryAddSoil.addEventListener('click', () => openSoilModal());

  const btnCloseSoilModal = document.getElementById('soil-modal-close-btn');
  if (btnCloseSoilModal) btnCloseSoilModal.addEventListener('click', closeSoilModal);

  const btnCancelSoilModal = document.getElementById('btn-cancel-soil-modal');
  if (btnCancelSoilModal) btnCancelSoilModal.addEventListener('click', closeSoilModal);

  // Live input validation in soil modal
  document.querySelectorAll('.soil-calc-input').forEach(inp => {
    inp.addEventListener('input', updateSoilModalLivePreview);
  });

  // Soil Form Submit
  const soilForm = document.getElementById('soil-entry-form');
  if (soilForm) {
    soilForm.addEventListener('submit', (e) => {
      e.preventDefault();
      saveSoilModalEntry();
    });
  }

  // Soil Export CSV
  const btnExportSoil = document.getElementById('btn-export-soil-csv');
  if (btnExportSoil) btnExportSoil.addEventListener('click', exportSoilCSV);

  // Settings Form Submit
  document.getElementById('settings-form').addEventListener('submit', (e) => {
    e.preventDefault();
    settings.mowerWidth = Number(document.getElementById('set-mower-width').value);
    settings.pitch1SampleDistance = Number(document.getElementById('set-p1-sample-dist').value);
    settings.pitch2SampleDistance = Number(document.getElementById('set-p2-sample-dist').value);
    settings.sampleDistance = settings.pitch1SampleDistance;
    settings.sampleRuns = Number(document.getElementById('set-sample-runs').value);
    settings.pitch1Area = Number(document.getElementById('set-p1-area').value);
    settings.pitch2Area = Number(document.getElementById('set-p2-area').value);
    
    saveSettings();
    updateSettingsInputs();
    
    // Re-process all logs with new settings
    clippingLogs = clippingLogs.map(processLogEntry);
    saveData();
    renderAll();
    if (typeof showToast === 'function') {
      showToast('Settings updated successfully!', 'success');
    } else {
      alert('Settings updated successfully!');
    }
  });

  // Preset Chips for Sample Distance (Pitch 1 & Pitch 2)
  document.querySelectorAll('.preset-chips-wrapper .chip-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const wrapper = btn.closest('.preset-chips-wrapper');
      const targetId = wrapper ? wrapper.dataset.target : null;
      if (targetId) {
        const input = document.getElementById(targetId);
        if (input) input.value = Number(btn.dataset.dist);
        recalcLiveSampleArea();
      }
    });
  });

  // Live calculation of sample area on input change
  ['set-mower-width', 'set-p1-sample-dist', 'set-p2-sample-dist', 'set-sample-runs'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('input', recalcLiveSampleArea);
  });

  // Reset to Prompt Default Data
  document.getElementById('btn-reset-default').addEventListener('click', () => {
    if (confirm('Reset dataset back to original prompt values and yearly baseline soil test? Custom changes will be overwritten.')) {
      clippingLogs = SEED_DATA.map(processLogEntry);
      soilLogs = [...SEED_SOIL_DATA];
      saveData();
      saveSoilData();
      renderAll();
      if (typeof showToast === 'function') showToast('Restored default clipping and soil analysis datasets.', 'success');
    }
  });

  // Clear Soil Data Triggers
  const btnClearSoil = document.getElementById('btn-clear-soil-data');
  if (btnClearSoil) btnClearSoil.addEventListener('click', clearAllSoilData);

  const btnClearSoilSettings = document.getElementById('btn-clear-soil-settings');
  if (btnClearSoilSettings) btnClearSoilSettings.addEventListener('click', clearAllSoilData);

  // Clear All Data
  document.getElementById('btn-clear-data').addEventListener('click', () => {
    if (confirm('Are you sure you want to clear ALL clipping and soil records?')) {
      clippingLogs = [];
      soilLogs = [];
      saveData();
      saveSoilData();
      renderAll();
      if (typeof showToast === 'function') showToast('All clipping and soil records cleared.', 'info');
    }
  });

  // Filters & Search
  document.getElementById('filter-search').addEventListener('input', renderMasterLogsTable);
  document.getElementById('filter-pitch').addEventListener('change', renderMasterLogsTable);
  document.getElementById('filter-direction').addEventListener('change', renderMasterLogsTable);
  document.getElementById('filter-growth-tier').addEventListener('change', renderMasterLogsTable);

  // Table Sort Click
  document.querySelectorAll('#master-logs-table th[data-sort]').forEach(th => {
    th.addEventListener('click', () => {
      const col = th.dataset.sort;
      if (currentSort.column === col) {
        currentSort.direction = currentSort.direction === 'asc' ? 'desc' : 'asc';
      } else {
        currentSort.column = col;
        currentSort.direction = 'asc';
      }
      renderMasterLogsTable();
    });
  });

  // Dashboard Pitch Filter Change
  document.getElementById('dash-pitch-filter').addEventListener('change', renderGrowthTrendChart);

  // CSV Export & Import Initialization
  document.getElementById('btn-export').addEventListener('click', exportCSV);
  initImportExportSystem();

  // Weather System Event Handlers
  setupWeatherEventListeners();
  setupKnowledgeEventListeners();
}

function openModal(entry = null) {
  const modal = document.getElementById('entry-modal');
  const title = document.getElementById('modal-title');
  
  if (entry) {
    title.innerHTML = `<i class="fa-solid fa-pen"></i> Edit Clipping Record`;
    document.getElementById('entry-id').value = entry.id;
    document.getElementById('entry-date').value = entry.date;
    document.getElementById('entry-pitch').value = entry.pitch;
    document.getElementById('entry-direction').value = entry.direction;
    document.getElementById('entry-left').value = entry.left;
    document.getElementById('entry-center').value = entry.center;
    document.getElementById('entry-right').value = entry.right;
  } else {
    title.innerHTML = `<i class="fa-solid fa-clipboard-check"></i> Log New Clipping Data`;
    document.getElementById('entry-form').reset();
    document.getElementById('entry-id').value = '';
    document.getElementById('entry-date').value = new Date().toISOString().split('T')[0];
    document.getElementById('entry-pitch').value = 'Pitch 1';
    document.getElementById('entry-direction').value = 'Width';
  }

  updateModalPreviewCards();
  modal.classList.add('open');
}

function closeModal() {
  document.getElementById('entry-modal').classList.remove('open');
}

function updateModalPreviewCards() {
  const left = Number(document.getElementById('entry-left').value || 0);
  const center = Number(document.getElementById('entry-center').value || 0);
  const right = Number(document.getElementById('entry-right').value || 0);
  const pitch = document.getElementById('entry-pitch').value;

  const totalL = Number((left + center + right).toFixed(1));
  const sampleArea = getSampleArea(pitch);
  const clipVol = sampleArea > 0 ? Number((totalL / sampleArea).toFixed(3)) : 0;
  const pitchArea = pitch === 'Pitch 2' ? settings.pitch2Area : settings.pitch1Area;
  const estTotalL = Number((clipVol * pitchArea).toFixed(1));

  document.getElementById('prev-total-l').textContent = `${totalL.toFixed(1)} L`;
  document.getElementById('prev-clipvol').textContent = `${clipVol.toFixed(3)}`;
  document.getElementById('prev-est-total').textContent = `${estTotalL.toFixed(1)} L`;
}

function saveModalEntry() {
  const id = document.getElementById('entry-id').value || `entry-${Date.now()}`;
  const raw = {
    id,
    date: document.getElementById('entry-date').value,
    pitch: document.getElementById('entry-pitch').value,
    direction: document.getElementById('entry-direction').value,
    left: Number(document.getElementById('entry-left').value || 0),
    center: Number(document.getElementById('entry-center').value || 0),
    right: Number(document.getElementById('entry-right').value || 0)
  };

  const processed = processLogEntry(raw);

  const existingIdx = clippingLogs.findIndex(x => x.id === id);
  if (existingIdx >= 0) {
    clippingLogs[existingIdx] = processed;
  } else {
    clippingLogs.push(processed);
  }

  saveData();
  renderAll();
  closeModal();
}

window.editEntry = function(id) {
  const entry = clippingLogs.find(x => x.id === id);
  if (entry) openModal(entry);
};

window.deleteEntry = function(id) {
  if (confirm('Delete this record?')) {
    clippingLogs = clippingLogs.filter(x => x.id !== id);
    saveData();
    renderAll();
  }
};

function updateSettingsInputs() {
  document.getElementById('set-mower-width').value = settings.mowerWidth;
  document.getElementById('set-p1-sample-dist').value = settings.pitch1SampleDistance || settings.sampleDistance || 370;
  document.getElementById('set-p2-sample-dist').value = settings.pitch2SampleDistance || settings.sampleDistance || 370;
  document.getElementById('set-sample-runs').value = settings.sampleRuns;
  document.getElementById('set-p1-area').value = settings.pitch1Area;
  document.getElementById('set-p2-area').value = settings.pitch2Area;
  recalcLiveSampleArea();
}

function recalcLiveSampleArea() {
  const width = Number(document.getElementById('set-mower-width').value || 0);
  const p1Dist = Number(document.getElementById('set-p1-sample-dist').value || 0);
  const p2Dist = Number(document.getElementById('set-p2-sample-dist').value || 0);
  const runs = Number(document.getElementById('set-sample-runs').value || 0);

  const p1Area = (width * p1Dist * runs).toFixed(1);
  const p2Area = (width * p2Dist * runs).toFixed(1);

  const p1Display = document.getElementById('calc-p1-sample-area-display');
  const p2Display = document.getElementById('calc-p2-sample-area-display');

  if (p1Display) p1Display.textContent = `${p1Area} m²`;
  if (p2Display) p2Display.textContent = `${p2Area} m²`;

  // Sync active chips for P1
  document.querySelectorAll('.preset-chips-wrapper[data-target="set-p1-sample-dist"] .chip-btn').forEach(btn => {
    btn.classList.toggle('active', Number(btn.dataset.dist) === p1Dist);
  });

  // Sync active chips for P2
  document.querySelectorAll('.preset-chips-wrapper[data-target="set-p2-sample-dist"] .chip-btn').forEach(btn => {
    btn.classList.toggle('active', Number(btn.dataset.dist) === p2Dist);
  });
}

/* ==========================================================================
   Export Functionality
   ========================================================================== */

function exportCSV() {
  if (clippingLogs.length === 0) {
    showToast('No data available to export.', 'warning');
    return;
  }

  let csvContent = 'data:text/csv;charset=utf-8,';
  csvContent += 'Date,Pitch,Direction,Left (L),Center (L),Right (L),Total (L),Sample Area (m2),ClipVol (mL/m2),Est Pitch Total (L)\n';

  clippingLogs.forEach(row => {
    csvContent += `${row.date},${row.pitch},${row.direction},${row.left},${row.center},${row.right},${row.totalL},${row.sampleArea},${row.clipVol},${row.estTotalL}\n`;
  });

  const encodedUri = encodeURI(csvContent);
  const link = document.createElement('a');
  link.setAttribute('href', encodedUri);
  link.setAttribute('download', `TurfTrack_Clipping_Export_${new Date().toISOString().split('T')[0]}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  showToast('CSV export generated and downloaded.', 'success');
}

/* ==========================================================================
   Toast Notification Utility
   ========================================================================== */

function showToast(message, type = 'info', duration = 3500) {
  const container = document.getElementById('toast-container');
  if (!container) {
    alert(message);
    return;
  }

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;

  let iconClass = 'fa-circle-info';
  if (type === 'success') iconClass = 'fa-circle-check';
  if (type === 'error') iconClass = 'fa-circle-xmark';
  if (type === 'warning') iconClass = 'fa-triangle-exclamation';

  toast.innerHTML = `
    <i class="fa-solid ${iconClass}"></i>
    <span class="toast-message">${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(50px)';
    setTimeout(() => toast.remove(), 300);
  }, duration);
}

/* ==========================================================================
   Import & Export System Logic
   ========================================================================== */

let activeImportSession = {
  file: null,
  validRecords: [],
  invalidRecords: [],
  importedSettings: null,
  strategy: 'merge'
};

function initImportExportSystem() {
  // Header & Settings Import Triggers
  const btnImportHeader = document.getElementById('btn-import');
  const btnImportSettings = document.getElementById('btn-settings-import');
  const btnExportJSON = document.getElementById('btn-export-json');

  if (btnImportHeader) btnImportHeader.addEventListener('click', openImportModal);
  if (btnImportSettings) btnImportSettings.addEventListener('click', openImportModal);
  if (btnExportJSON) btnExportJSON.addEventListener('click', exportJSON);

  // Modal Controls
  const modalClose = document.getElementById('import-modal-close');
  const btnCancel = document.getElementById('btn-cancel-import');
  const btnConfirm = document.getElementById('btn-confirm-import');

  if (modalClose) modalClose.addEventListener('click', closeImportModal);
  if (btnCancel) btnCancel.addEventListener('click', closeImportModal);
  if (btnConfirm) btnConfirm.addEventListener('click', executeImportData);

  // Drag & Drop / File Input
  const dropzone = document.getElementById('import-dropzone');
  const fileInput = document.getElementById('import-file-input');
  const browseTrigger = document.getElementById('import-browse-trigger');
  const removeFileBtn = document.getElementById('btn-remove-import-file');

  if (dropzone && fileInput) {
    dropzone.addEventListener('click', () => fileInput.click());
    if (browseTrigger) browseTrigger.addEventListener('click', (e) => { e.stopPropagation(); fileInput.click(); });

    dropzone.addEventListener('dragover', (e) => {
      e.preventDefault();
      dropzone.classList.add('dragover');
    });

    dropzone.addEventListener('dragleave', () => {
      dropzone.classList.remove('dragover');
    });

    dropzone.addEventListener('drop', (e) => {
      e.preventDefault();
      dropzone.classList.remove('dragover');
      if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
        handleImportFileSelect(e.dataTransfer.files[0]);
      }
    });

    fileInput.addEventListener('change', (e) => {
      if (e.target.files && e.target.files.length > 0) {
        handleImportFileSelect(e.target.files[0]);
      }
    });
  }

  if (removeFileBtn) {
    removeFileBtn.addEventListener('click', resetImportFileSelection);
  }

  // Template Downloads
  const btnTemplateCSV = document.getElementById('btn-template-csv');
  const btnTemplateJSON = document.getElementById('btn-template-json');

  if (btnTemplateCSV) btnTemplateCSV.addEventListener('click', downloadCSVTemplate);
  if (btnTemplateJSON) btnTemplateJSON.addEventListener('click', downloadJSONTemplate);

  // Strategy Radio Options
  const strategyRadios = document.querySelectorAll('input[name="import-strategy"]');
  strategyRadios.forEach(radio => {
    radio.addEventListener('change', (e) => {
      activeImportSession.strategy = e.target.value;
      document.querySelectorAll('.radio-option').forEach(opt => opt.classList.remove('active'));
      const activeLabel = e.target.closest('.radio-option');
      if (activeLabel) activeLabel.classList.add('active');
    });
  });
}

function openImportModal() {
  resetImportFileSelection();
  document.getElementById('import-modal').classList.add('open');
}

function closeImportModal() {
  document.getElementById('import-modal').classList.remove('open');
  resetImportFileSelection();
}

function resetImportFileSelection() {
  activeImportSession = {
    file: null,
    validRecords: [],
    invalidRecords: [],
    importedSettings: null,
    strategy: document.querySelector('input[name="import-strategy"]:checked')?.value || 'merge'
  };

  const fileInput = document.getElementById('import-file-input');
  if (fileInput) fileInput.value = '';

  document.getElementById('import-dropzone').classList.remove('hidden');
  document.getElementById('import-file-info').classList.add('hidden');
  document.getElementById('import-preview-section').classList.add('hidden');
  document.getElementById('btn-confirm-import').disabled = true;
}

function handleImportFileSelect(file) {
  if (!file) return;

  const validExts = ['.csv', '.json'];
  const ext = file.name.substring(file.name.lastIndexOf('.')).toLowerCase();

  if (!validExts.includes(ext)) {
    showToast('Invalid file format. Please upload a .CSV or .JSON file.', 'error');
    return;
  }

  activeImportSession.file = file;

  // Display file details
  document.getElementById('info-file-name').textContent = file.name;
  document.getElementById('info-file-size').textContent = `${(file.size / 1024).toFixed(1)} KB`;
  document.getElementById('import-dropzone').classList.add('hidden');
  document.getElementById('import-file-info').classList.remove('hidden');

  const reader = new FileReader();
  reader.onload = function(e) {
    const textContent = e.target.result;
    if (ext === '.csv') {
      processCSVContent(textContent);
    } else if (ext === '.json') {
      processJSONContent(textContent);
    }
  };
  reader.readAsText(file);
}

function processCSVContent(text) {
  const lines = text.split(/\r?\n/).filter(line => line.trim() !== '');
  if (lines.length <= 1) {
    showToast('The selected CSV file contains no data rows.', 'warning');
    renderImportPreview([], [{ line: 1, reason: 'Empty file or header only' }]);
    return;
  }

  const headers = lines[0].split(',').map(h => h.trim().toLowerCase().replace(/["']/g, ''));
  
  // Find column indices with flexible aliases
  const dateIdx = headers.findIndex(h => h.includes('date'));
  const pitchIdx = headers.findIndex(h => h.includes('pitch'));
  const dirIdx = headers.findIndex(h => h.includes('dir'));
  const leftIdx = headers.findIndex(h => h.includes('left'));
  const centerIdx = headers.findIndex(h => h.includes('center'));
  const rightIdx = headers.findIndex(h => h.includes('right'));

  if (dateIdx === -1 || leftIdx === -1 || centerIdx === -1 || rightIdx === -1) {
    showToast('CSV missing required column headers (Date, Left, Center, Right).', 'error');
    renderImportPreview([], [{ line: 1, reason: 'Missing required column headers' }]);
    return;
  }

  const valid = [];
  const invalid = [];

  for (let i = 1; i < lines.length; i++) {
    const rowStr = lines[i].trim();
    if (!rowStr) continue;

    // CSV line split with quote trimming
    const cols = rowStr.split(',').map(c => c.trim().replace(/^["']|["']$/g, ''));

    const rawDate = cols[dateIdx] || '';
    const rawPitch = pitchIdx !== -1 ? cols[pitchIdx] : 'Pitch 1';
    const rawDir = dirIdx !== -1 ? cols[dirIdx] : 'Width';
    const leftVal = parseFloat(cols[leftIdx]);
    const centerVal = parseFloat(cols[centerIdx]);
    const rightVal = parseFloat(cols[rightIdx]);

    const isDateValid = Boolean(rawDate && !isNaN(new Date(rawDate).getTime()));
    const isNumValid = !isNaN(leftVal) && !isNaN(centerVal) && !isNaN(rightVal);

    if (isDateValid && isNumValid) {
      const pitchName = rawPitch.toLowerCase().includes('2') ? 'Pitch 2' : 'Pitch 1';
      const directionName = rawDir.toLowerCase().includes('len') ? 'Length' : 'Width';
      const entryId = `import-${Date.now()}-${i}-${Math.random().toString(36).substr(2, 4)}`;

      const processed = processLogEntry({
        id: entryId,
        date: new Date(rawDate).toISOString().split('T')[0],
        pitch: pitchName,
        direction: directionName,
        left: leftVal,
        center: centerVal,
        right: rightVal
      });

      valid.push(processed);
    } else {
      invalid.push({
        line: i + 1,
        date: rawDate || 'N/A',
        pitch: rawPitch || 'N/A',
        reason: !isDateValid ? 'Invalid date format' : 'Non-numeric volume values'
      });
    }
  }

  activeImportSession.validRecords = valid;
  activeImportSession.invalidRecords = invalid;
  renderImportPreview(valid, invalid);
}

function processJSONContent(text) {
  let parsed;
  try {
    parsed = JSON.parse(text);
  } catch (err) {
    showToast('Invalid JSON file syntax.', 'error');
    renderImportPreview([], [{ line: 1, reason: 'JSON Parse Error' }]);
    return;
  }

  let recordsArray = [];
  let importedSettings = null;

  if (Array.isArray(parsed)) {
    recordsArray = parsed;
  } else if (typeof parsed === 'object' && parsed !== null) {
    if (Array.isArray(parsed.clippingLogs)) {
      recordsArray = parsed.clippingLogs;
    }
    if (parsed.settings) {
      importedSettings = parsed.settings;
    }
  }

  if (recordsArray.length === 0 && !importedSettings) {
    showToast('JSON file contains no clipping logs or settings.', 'warning');
    renderImportPreview([], [{ line: 1, reason: 'No clipping records found in JSON' }]);
    return;
  }

  const valid = [];
  const invalid = [];

  recordsArray.forEach((item, idx) => {
    const rawDate = item.date || '';
    const leftVal = Number(item.left);
    const centerVal = Number(item.center);
    const rightVal = Number(item.right);

    const isDateValid = Boolean(rawDate && !isNaN(new Date(rawDate).getTime()));
    const isNumValid = !isNaN(leftVal) && !isNaN(centerVal) && !isNaN(rightVal);

    if (isDateValid && isNumValid) {
      const processed = processLogEntry({
        id: item.id || `import-${Date.now()}-${idx}`,
        date: new Date(rawDate).toISOString().split('T')[0],
        pitch: item.pitch === 'Pitch 2' ? 'Pitch 2' : 'Pitch 1',
        direction: item.direction === 'Length' ? 'Length' : 'Width',
        left: leftVal,
        center: centerVal,
        right: rightVal
      });
      valid.push(processed);
    } else {
      invalid.push({
        line: idx + 1,
        date: rawDate || 'N/A',
        pitch: item.pitch || 'N/A',
        reason: 'Missing date or non-numeric clipping volumes'
      });
    }
  });

  activeImportSession.validRecords = valid;
  activeImportSession.invalidRecords = invalid;
  activeImportSession.importedSettings = importedSettings;

  renderImportPreview(valid, invalid, importedSettings);
}

function renderImportPreview(valid, invalid, importedSettings = null) {
  const previewSection = document.getElementById('import-preview-section');
  const tbody = document.getElementById('import-preview-tbody');
  const countValid = document.getElementById('import-count-valid');
  const countInvalid = document.getElementById('import-count-invalid');
  const countTotal = document.getElementById('import-count-total');
  const confirmBtn = document.getElementById('btn-confirm-import');
  const fileDetails = document.getElementById('import-file-details');

  previewSection.classList.remove('hidden');
  countValid.textContent = valid.length;
  countInvalid.textContent = invalid.length;
  countTotal.textContent = valid.length + invalid.length;

  if (importedSettings) {
    fileDetails.innerHTML = `<span class="badge badge-ideal"><i class="fa-solid fa-gear"></i> System Settings Included</span> Equipment & pitch settings will also be updated.`;
  } else {
    fileDetails.innerHTML = '';
  }

  tbody.innerHTML = '';

  const displayValid = valid.slice(0, 30);
  const displayInvalid = invalid.slice(0, 20);

  displayValid.forEach(rec => {
    const tr = document.createElement('tr');
    tr.className = 'row-valid';
    tr.innerHTML = `
      <td><span class="badge-valid"><i class="fa-solid fa-check"></i> Valid</span></td>
      <td>${rec.date}</td>
      <td>${rec.pitch}</td>
      <td>${rec.direction}</td>
      <td>${rec.left}</td>
      <td>${rec.center}</td>
      <td>${rec.right}</td>
      <td><strong>${rec.totalL} L</strong></td>
    `;
    tbody.appendChild(tr);
  });

  displayInvalid.forEach(err => {
    const tr = document.createElement('tr');
    tr.className = 'row-invalid';
    tr.innerHTML = `
      <td><span class="badge-invalid"><i class="fa-solid fa-triangle-exclamation"></i> Skipped</span></td>
      <td>${err.date || '—'}</td>
      <td>${err.pitch || '—'}</td>
      <td colspan="4" class="text-danger small">${err.reason}</td>
      <td>—</td>
    `;
    tbody.appendChild(tr);
  });

  confirmBtn.disabled = valid.length === 0 && !importedSettings;
}

function executeImportData() {
  const { validRecords, importedSettings, strategy } = activeImportSession;

  if (validRecords.length === 0 && !importedSettings) {
    showToast('No valid records to import.', 'error');
    return;
  }

  if (strategy === 'overwrite') {
    clippingLogs = [...validRecords];
  } else {
    // Merge Strategy
    validRecords.forEach(newRec => {
      const idx = clippingLogs.findIndex(x => x.id === newRec.id);
      if (idx >= 0) {
        clippingLogs[idx] = newRec;
      } else {
        clippingLogs.push(newRec);
      }
    });
  }

  if (importedSettings) {
    settings = { ...settings, ...importedSettings };
    saveSettings();
    updateSettingsInputs();
  }

  saveData();
  renderAll();
  closeImportModal();

  const msg = strategy === 'overwrite'
    ? `Successfully replaced dataset with ${validRecords.length} records!`
    : `Successfully merged ${validRecords.length} clipping records!`;

  showToast(msg, 'success');
}

function exportJSON() {
  if (clippingLogs.length === 0 && soilLogs.length === 0) {
    showToast('No data available to export.', 'warning');
    return;
  }

  const backupObj = {
    exportedAt: new Date().toISOString(),
    version: '2.0',
    settings: settings,
    clippingLogs: clippingLogs,
    soilLogs: soilLogs
  };

  const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(backupObj, null, 2));
  const downloadAnchor = document.createElement('a');
  downloadAnchor.setAttribute('href', dataStr);
  downloadAnchor.setAttribute('download', `TurfTrack_System_Backup_${new Date().toISOString().split('T')[0]}.json`);
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();

  showToast('Full system backup (clippings & soil analysis) exported successfully.', 'success');
}

function downloadCSVTemplate() {
  const csvContent = 'data:text/csv;charset=utf-8,Date,Pitch,Direction,Left (L),Center (L),Right (L)\n2026-08-10,Pitch 1,Width,65.0,72.5,68.0\n2026-08-11,Pitch 2,Length,58.0,64.0,60.5\n';
  const link = document.createElement('a');
  link.setAttribute('href', encodeURI(csvContent));
  link.setAttribute('download', 'TurfTrack_Clipping_Import_Template.csv');
  document.body.appendChild(link);
  link.click();
  link.remove();
  showToast('Sample CSV template downloaded.', 'info');
}

function downloadJSONTemplate() {
  const sampleJSON = [
    {
      "date": "2026-08-10",
      "pitch": "Pitch 1",
      "direction": "Width",
      "left": 65.0,
      "center": 72.5,
      "right": 68.0
    },
    {
      "date": "2026-08-11",
      "pitch": "Pitch 2",
      "direction": "Length",
      "left": 58.0,
      "center": 64.0,
      "right": 60.5
    }
  ];
  const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(sampleJSON, null, 2));
  const link = document.createElement('a');
  link.setAttribute('href', dataStr);
  link.setAttribute('download', 'TurfTrack_Clipping_Import_Template.json');
  document.body.appendChild(link);
  link.click();
  link.remove();
  showToast('Sample JSON template downloaded.', 'info');
}

/* ==========================================================================
   Weather & Microclimate UI Rendering, Live API & Decision Engine
   ========================================================================== */

/**
 * Updates the Dashboard Quick Weather & Growth Potential status card
 */
function updateDashboardWeatherWidget() {
  const records = getFilteredWeatherLogs('all');
  if (records.length === 0) {
    const tempEl = document.getElementById('dash-weather-temp');
    if (tempEl) tempEl.textContent = `--°C`;
    const tempRangeEl = document.getElementById('dash-weather-temp-range');
    if (tempRangeEl) {
      tempRangeEl.className = 'badge badge-sm badge-outline';
      tempRangeEl.textContent = `H: --° L: --°`;
    }

    const soilEl = document.getElementById('dash-weather-soil-temp');
    if (soilEl) soilEl.textContent = `--°C`;
    const soilBadgeEl = document.getElementById('dash-weather-soil-badge');
    if (soilBadgeEl) {
      soilBadgeEl.className = 'badge badge-sm badge-outline';
      soilBadgeEl.textContent = 'Awaiting Log';
    }

    const rain7El = document.getElementById('dash-weather-rain7');
    if (rain7El) rain7El.textContent = `0.0 mm`;
    const rainBadgeEl = document.getElementById('dash-weather-rain-badge');
    if (rainBadgeEl) {
      rainBadgeEl.className = 'badge badge-sm badge-outline';
      rainBadgeEl.textContent = '0.0 mm Total';
    }

    const et0El = document.getElementById('dash-weather-et0');
    if (et0El) et0El.textContent = `0.0 mm`;
    const deficitEl = document.getElementById('dash-weather-deficit-badge');
    if (deficitEl) {
      deficitEl.className = 'badge badge-sm badge-outline';
      deficitEl.textContent = '0.0 mm Balance';
    }

    const gddEl = document.getElementById('dash-weather-gdd');
    if (gddEl) gddEl.textContent = `0 GDD`;
    const pgrBadgeEl = document.getElementById('dash-weather-pgr-badge');
    if (pgrBadgeEl) {
      pgrBadgeEl.className = 'badge badge-sm badge-outline';
      pgrBadgeEl.textContent = 'No GDD Logs';
    }

    const diseaseEl = document.getElementById('dash-weather-disease');
    if (diseaseEl) diseaseEl.textContent = `--% Risk`;
    const diseaseBadgeEl = document.getElementById('dash-weather-disease-badge');
    if (diseaseBadgeEl) {
      diseaseBadgeEl.className = 'badge badge-sm badge-outline';
      diseaseBadgeEl.textContent = 'No Risk Data';
    }

    const gpBadgeEl = document.getElementById('dash-weather-gp-badge');
    if (gpBadgeEl) {
      gpBadgeEl.className = 'badge badge-outline';
      gpBadgeEl.textContent = 'Growth Potential: --% (No Weather Data)';
    }
    return;
  }

  const latest = records[records.length - 1];
  
  // 7-day rainfall sum
  const last7 = records.slice(-7);
  const rain7Sum = last7.reduce((sum, r) => sum + r.rainfall, 0);
  const et7Sum = last7.reduce((sum, r) => sum + r.et0, 0);
  const deficit7 = Number((et7Sum - rain7Sum).toFixed(1));

  // GDD accumulation
  const pgrMetrics = calculatePgrMetrics(records, pgrSettings);

  // Air Temp
  const tempEl = document.getElementById('dash-weather-temp');
  if (tempEl) tempEl.textContent = `${latest.tempAvg.toFixed(1)}°C`;
  const tempRangeEl = document.getElementById('dash-weather-temp-range');
  if (tempRangeEl) tempRangeEl.textContent = `H: ${latest.tempMax.toFixed(1)}° L: ${latest.tempMin.toFixed(1)}°`;

  // Soil Temp
  const soilEl = document.getElementById('dash-weather-soil-temp');
  if (soilEl) soilEl.textContent = `${latest.soilTemp.toFixed(1)}°C`;
  const soilBadgeEl = document.getElementById('dash-weather-soil-badge');
  if (soilBadgeEl) {
    if (latest.soilTemp < 10) {
      soilBadgeEl.className = 'badge badge-sm badge-low';
      soilBadgeEl.textContent = 'Cold Dormancy';
    } else if (latest.soilTemp <= 18) {
      soilBadgeEl.className = 'badge badge-sm badge-ideal';
      soilBadgeEl.textContent = 'Active Rooting';
    } else if (latest.soilTemp <= 24) {
      soilBadgeEl.className = 'badge badge-sm badge-intermediate';
      soilBadgeEl.textContent = 'Active Shoot';
    } else {
      soilBadgeEl.className = 'badge badge-sm badge-high';
      soilBadgeEl.textContent = 'Heat Stress';
    }
  }

  // 7-Day Rainfall
  const rain7El = document.getElementById('dash-weather-rain7');
  if (rain7El) rain7El.textContent = `${rain7Sum.toFixed(1)} mm`;

  // Daily ET0
  const et0El = document.getElementById('dash-weather-et0');
  if (et0El) et0El.textContent = `${latest.et0.toFixed(1)} mm`;
  const deficitEl = document.getElementById('dash-weather-deficit-badge');
  if (deficitEl) {
    deficitEl.className = deficit7 > 5 ? 'badge badge-sm badge-low' : 'badge badge-sm badge-ideal';
    deficitEl.textContent = deficit7 > 0 ? `-${deficit7.toFixed(1)} mm Deficit` : `+${Math.abs(deficit7).toFixed(1)} mm Surplus`;
  }

  // PGR GDD
  const gddEl = document.getElementById('dash-weather-gdd');
  if (gddEl) gddEl.textContent = `${pgrMetrics.accumulatedGDD} GDD`;
  const pgrBadgeEl = document.getElementById('dash-weather-pgr-badge');
  if (pgrBadgeEl) {
    pgrBadgeEl.className = `badge badge-sm ${pgrMetrics.badgeClass}`;
    pgrBadgeEl.textContent = pgrMetrics.statusText;
  }

  // Disease Risk
  const diseaseEl = document.getElementById('dash-weather-disease');
  if (diseaseEl) diseaseEl.textContent = `${latest.diseaseRisks.overall}% Risk`;
  const diseaseBadgeEl = document.getElementById('dash-weather-disease-badge');
  if (diseaseBadgeEl) {
    if (latest.diseaseRisks.overall > 60) {
      diseaseBadgeEl.className = 'badge badge-sm badge-high';
      diseaseBadgeEl.textContent = 'High Disease Warning';
    } else if (latest.diseaseRisks.overall > 35) {
      diseaseBadgeEl.className = 'badge badge-sm badge-amber';
      diseaseBadgeEl.textContent = 'Moderate Pressure';
    } else {
      diseaseBadgeEl.className = 'badge badge-sm badge-ideal';
      diseaseBadgeEl.textContent = 'Microdochium Low';
    }
  }

  // GP Badge
  const gpBadgeEl = document.getElementById('dash-weather-gp-badge');
  if (gpBadgeEl) {
    if (latest.gpPercent >= 80) {
      gpBadgeEl.className = 'badge badge-surging';
      gpBadgeEl.textContent = `Growth Potential: ${latest.gpPercent}% (Peak C3 Growth)`;
    } else if (latest.gpPercent >= 50) {
      gpBadgeEl.className = 'badge badge-ideal';
      gpBadgeEl.textContent = `Growth Potential: ${latest.gpPercent}% (Active Growth)`;
    } else {
      gpBadgeEl.className = 'badge badge-low';
      gpBadgeEl.textContent = `Growth Potential: ${latest.gpPercent}% (Slow / Stress)`;
    }
  }
}


/**
 * Returns weather logs filtered and sorted chronologically
 * When Live Weather is active, draws from the in-memory liveWeatherFeed without adding to observation logs
 */
function getFilteredWeatherLogs(pitchFilter = activeWeatherPitch) {
  let source = (liveWeatherActive && liveWeatherFeed.length > 0) ? [...liveWeatherFeed] : [...weatherLogs];
  if (pitchFilter !== 'all') {
    source = source.filter(w => w.pitch === pitchFilter || w.pitch === 'All Pitches');
  }
  return source.sort((a, b) => new Date(a.date) - new Date(b.date));
}


/**
 * Main Weather Tab Renderer
 */
function renderWeatherTab() {
  const records = getFilteredWeatherLogs(activeWeatherPitch);
  if (records.length === 0) {
    renderEmptyWeatherTab();
    return;
  }

  const latest = records[records.length - 1];

  // 1. KPI 1: Air Temperature
  const tempEl = document.getElementById('kpi-weather-temp');
  if (tempEl) tempEl.innerHTML = `${latest.tempAvg.toFixed(1)} <small>°C</small>`;
  const tempBadgeEl = document.getElementById('kpi-weather-temp-badge');
  if (tempBadgeEl) {
    if (latest.tempAvg >= 16 && latest.tempAvg <= 22) {
      tempBadgeEl.className = 'badge badge-ideal';
      tempBadgeEl.textContent = 'Optimal C3 Range';
    } else if (latest.tempAvg < 12) {
      tempBadgeEl.className = 'badge badge-low';
      tempBadgeEl.textContent = 'Sub-Optimal Cold';
    } else if (latest.tempAvg > 24) {
      tempBadgeEl.className = 'badge badge-surging';
      tempBadgeEl.textContent = 'Heat Stress Warning';
    } else {
      tempBadgeEl.className = 'badge badge-intermediate';
      tempBadgeEl.textContent = 'Moderate Growth Temp';
    }
  }
  const tempRangeEl = document.getElementById('kpi-weather-temp-range');
  if (tempRangeEl) tempRangeEl.textContent = `High ${latest.tempMax.toFixed(1)}° / Low ${latest.tempMin.toFixed(1)}° (DTR: ${(latest.tempMax - latest.tempMin).toFixed(1)}°)`;

  // 2. KPI 2: Soil Temp @ 50mm
  const soilEl = document.getElementById('kpi-weather-soil');
  if (soilEl) soilEl.innerHTML = `${latest.soilTemp.toFixed(1)} <small>°C</small>`;
  const soilBadgeEl = document.getElementById('kpi-weather-soil-badge');
  const soilSubEl = document.getElementById('kpi-weather-soil-sub');
  if (soilBadgeEl) {
    if (latest.soilTemp < 10) {
      soilBadgeEl.className = 'badge badge-low';
      soilBadgeEl.textContent = 'Cold Dormancy (<10°C)';
      if (soilSubEl) soilSubEl.textContent = 'Slow nutrient uptake';
    } else if (latest.soilTemp <= 18) {
      soilBadgeEl.className = 'badge badge-ideal';
      soilBadgeEl.textContent = 'Peak Root Respiration';
      if (soilSubEl) soilSubEl.textContent = 'Sub-24°C Root Safe';
    } else if (latest.soilTemp <= 24) {
      soilBadgeEl.className = 'badge badge-intermediate';
      soilBadgeEl.textContent = 'Active Shoot Tillering';
      if (soilSubEl) soilSubEl.textContent = 'Good root-to-shoot ratio';
    } else {
      soilBadgeEl.className = 'badge badge-high';
      soilBadgeEl.textContent = 'Heat Stress (>24°C)';
      if (soilSubEl) soilSubEl.textContent = 'Root decline risk';
    }
  }

  // 3. KPI 3: Rainfall & 7/30-Day Totals
  const last7 = records.slice(-7);
  const last30 = records.slice(-30);
  const rain7 = last7.reduce((sum, r) => sum + r.rainfall, 0);
  const rain30 = last30.reduce((sum, r) => sum + r.rainfall, 0);
  const rainEl = document.getElementById('kpi-weather-rain');
  if (rainEl) rainEl.innerHTML = `${latest.rainfall.toFixed(1)} <small>mm</small>`;
  const rain7Badge = document.getElementById('kpi-weather-rain7-badge');
  if (rain7Badge) rain7Badge.textContent = `7-Day: ${rain7.toFixed(1)} mm`;
  const rain30Sub = document.getElementById('kpi-weather-rain30-sub');
  if (rain30Sub) rain30Sub.textContent = `30-Day: ${rain30.toFixed(1)} mm`;

  // 4. KPI 4: ET0 & Deficit
  const et0El = document.getElementById('kpi-weather-et0');
  if (et0El) et0El.innerHTML = `${latest.et0.toFixed(1)} <small>mm/day</small>`;
  const et7 = last7.reduce((sum, r) => sum + r.et0, 0);
  const deficit7 = Number((et7 - rain7).toFixed(1));
  const wbBadge = document.getElementById('kpi-weather-water-balance-badge');
  if (wbBadge) {
    wbBadge.className = latest.waterBalance < 0 ? 'badge badge-low' : 'badge badge-ideal';
    wbBadge.textContent = `${latest.waterBalance > 0 ? '+' : ''}${latest.waterBalance.toFixed(1)} mm Net Balance`;
  }
  const smdSub = document.getElementById('kpi-weather-smd-sub');
  if (smdSub) smdSub.textContent = `Cum. 7-Day Deficit: ${Math.max(0, deficit7).toFixed(1)} mm`;

  // 5. KPI 5: PACE Growth Potential (GP)
  const gpEl = document.getElementById('kpi-weather-gp');
  if (gpEl) gpEl.innerHTML = `${latest.gpPercent} <small>%</small>`;
  const gpBadge = document.getElementById('kpi-weather-gp-badge');
  const gpNSub = document.getElementById('kpi-weather-gp-n-sub');
  if (gpBadge) {
    if (latest.gpPercent >= 80) {
      gpBadge.className = 'badge badge-surging';
      gpBadge.textContent = 'Growth Surge Window';
      if (gpNSub) gpNSub.textContent = `Target N Pacing: ${(0.8 * (latest.gpPercent / 100)).toFixed(2)} g N/m²/mo`;
    } else if (latest.gpPercent >= 50) {
      gpBadge.className = 'badge badge-ideal';
      gpBadge.textContent = 'Optimal C3 Growth';
      if (gpNSub) gpNSub.textContent = `Target N Pacing: ${(0.6 * (latest.gpPercent / 100)).toFixed(2)} g N/m²/mo`;
    } else {
      gpBadge.className = 'badge badge-low';
      gpBadge.textContent = 'Low Growth Potential';
      if (gpNSub) gpNSub.textContent = `Reduced N uptake (${(0.4 * (latest.gpPercent / 100)).toFixed(2)} g N/m²/mo)`;
    }
  }

  // 6. KPI 6: PGR GDD Accumulation
  const pgrMetrics = calculatePgrMetrics(records, pgrSettings);
  const gddEl = document.getElementById('kpi-weather-gdd');
  if (gddEl) gddEl.innerHTML = `${pgrMetrics.accumulatedGDD} <small>GDD</small>`;
  const pgrStatusBadge = document.getElementById('kpi-weather-pgr-status-badge');
  if (pgrStatusBadge) {
    pgrStatusBadge.className = `badge ${pgrMetrics.badgeClass}`;
    pgrStatusBadge.textContent = pgrMetrics.statusText;
  }
  const pgrTargetSub = document.getElementById('kpi-weather-pgr-target-sub');
  if (pgrTargetSub) pgrTargetSub.textContent = `Target: ${pgrSettings.targetGDD} GDD (${pgrSettings.product.split(' ')[0]})`;

  // Render 4 Decision Panels
  renderWeatherDecisionPanels(latest, records, pgrMetrics, deficit7, rain7, et7);

  // Render Charts & Table
  renderWeatherCharts();
  renderWeatherTable();
}

/**
 * Calculates cumulative GDD and PGR threshold status
 */
function calculatePgrMetrics(records, settings) {
  const sprayDate = settings.lastSprayDate || (records[0] ? records[0].date : '2026-07-16');
  const targetGDD = settings.targetGDD || 200;
  
  const sprayRecords = records.filter(r => r.date >= sprayDate);
  const accumulatedGDD = sprayRecords.reduce((sum, r) => sum + r.gdd0, 0);
  const roundedGDD = Math.round(accumulatedGDD);
  const percent = Math.min(150, Math.round((roundedGDD / targetGDD) * 100));

  let statusText = 'Optimal Suppression (0–150 GDD)';
  let badgeClass = 'badge-ideal';
  let adviceTitle = 'Optimal Growth Regulation Active';
  let adviceText = `Current GDD accumulation is ${roundedGDD} GDD (${percent}% of ${targetGDD} GDD target). Vertical elongation is actively suppressed, partitioning photosynthetic carbohydrates into roots and crowns.`;

  if (percent >= 100) {
    statusText = `Rebound Surge Warning (${roundedGDD} GDD)`;
    badgeClass = 'badge-surging';
    adviceTitle = `PGR Suppression Expired (${percent}% Target Reached)`;
    adviceText = `Suppression by ${settings.product} has worn off. Pure Perennial Ryegrass swards will experience rapid rebound surge. Apply ${settings.product} in the next sub-21°C spray window to halt carbohydrate depletion.`;
  } else if (percent >= 80) {
    statusText = `Spray Window Approaching (${roundedGDD} GDD)`;
    badgeClass = 'badge-amber';
    adviceTitle = `Re-application Window Open (${percent}% Target Reached)`;
    adviceText = `${settings.product} growth suppression is nearing expiration (${roundedGDD}/${targetGDD} GDD). Prepare tank mix and apply within 48–72 hours to prevent sward yield spike.`;
  }

  return {
    accumulatedGDD: roundedGDD,
    targetGDD,
    percent,
    statusText,
    badgeClass,
    adviceTitle,
    adviceText
  };
}

/**
 * Renders the 4 Agronomic Decision Panels
 */
function renderWeatherDecisionPanels(latest, records, pgrMetrics, deficit7, rain7, et7) {
  // Panel 1: PGR Status
  const activeProdEl = document.getElementById('pgr-active-product');
  if (activeProdEl) activeProdEl.textContent = pgrSettings.product;
  const currGddEl = document.getElementById('pgr-current-gdd-display');
  if (currGddEl) currGddEl.textContent = pgrMetrics.accumulatedGDD;
  const targetGddEl = document.getElementById('pgr-target-gdd-display');
  if (targetGddEl) targetGddEl.textContent = `${pgrSettings.targetGDD} GDD (Base 0°C)`;
  const fillEl = document.getElementById('pgr-progress-fill');
  if (fillEl) fillEl.style.width = `${Math.min(100, pgrMetrics.percent)}%`;
  const adviceTitleEl = document.getElementById('pgr-advice-title');
  if (adviceTitleEl) adviceTitleEl.textContent = pgrMetrics.adviceTitle;
  const adviceTextEl = document.getElementById('pgr-advice-text');
  if (adviceTextEl) adviceTextEl.textContent = pgrMetrics.adviceText;

  // Panel 2: Fungal Disease Pressure Matrix
  const d = latest.diseaseRisks;
  const overallBadge = document.getElementById('overall-disease-badge');
  if (overallBadge) {
    overallBadge.className = d.overall > 50 ? 'badge badge-high' : (d.overall > 30 ? 'badge badge-amber' : 'badge badge-ideal');
    overallBadge.textContent = `Overall Risk: ${d.overall}% (${d.overall > 50 ? 'High' : (d.overall > 30 ? 'Moderate' : 'Low')})`;
  }
  
  updateDiseaseBar('microdochium', d.microdochium);
  updateDiseaseBar('dollar', d.dollar);
  updateDiseaseBar('anthracnose', d.anthracnose);
  updateDiseaseBar('pythium', d.pythium);

  const cultAdvice = document.getElementById('disease-cultural-advice');
  if (cultAdvice) {
    if (d.microdochium > 50) {
      cultAdvice.innerHTML = `<strong>Critical Action:</strong> High Microdochium pressure (${d.microdochium}%). Switch morning dew by 08:30, apply bio-stimulants / phosphite hardeners and monitor turf crowns closely.`;
    } else if (d.anthracnose > 50) {
      cultAdvice.innerHTML = `<strong>Summer Stress Action:</strong> High Anthracnose risk (${d.anthracnose}%). Raise height of cut by 1mm and ensure adequate spoon-fed potassium and nitrogen.`;
    } else {
      cultAdvice.innerHTML = `<strong>Grounds Action:</strong> Switch morning dew off pitch with drag mat or cane by 08:30 to keep leaf moisture duration under 6 hours.`;
    }
  }

  // Panel 3: Spraying Window Advisor
  const sprayBadge = document.getElementById('spray-status-badge');
  if (sprayBadge) {
    sprayBadge.className = `badge ${latest.sprayStatus.badgeClass}`;
    sprayBadge.textContent = `${latest.sprayStatus.status} Spray Window`;
  }
  const windVal = document.getElementById('spray-wind-val');
  if (windVal) windVal.textContent = `${latest.windSpeed.toFixed(1)} mph`;
  const windBadge = document.getElementById('spray-wind-badge');
  if (windBadge) {
    windBadge.className = latest.windSpeed > 9.3 ? 'badge badge-sm badge-high' : (latest.windSpeed > 7.5 ? 'badge badge-sm badge-amber' : 'badge badge-sm badge-ideal');
    windBadge.textContent = latest.windSpeed > 9.3 ? 'Drift Prohibited (>9.3 mph)' : (latest.windSpeed > 7.5 ? 'Moderate Drift (7.5-9.3 mph)' : 'Low Drift (<7.5 mph)');
  }
  const dtVal = document.getElementById('spray-deltat-val');
  if (dtVal) dtVal.textContent = `${latest.deltaT.toFixed(1)} °C`;
  const dtBadge = document.getElementById('spray-deltat-badge');
  if (dtBadge) {
    dtBadge.className = (latest.deltaT >= 2 && latest.deltaT <= 8) ? 'badge badge-sm badge-ideal' : 'badge badge-sm badge-amber';
    dtBadge.textContent = (latest.deltaT >= 2 && latest.deltaT <= 8) ? 'Target (2–8°C)' : (latest.deltaT < 2 ? 'Low Evap (<2°C)' : 'High Evap (>8°C)');
  }
  const tempVal = document.getElementById('spray-temp-val');
  if (tempVal) tempVal.textContent = `${latest.tempAvg.toFixed(1)} °C`;
  const tempBadge = document.getElementById('spray-temp-badge');
  if (tempBadge) {
    tempBadge.className = latest.tempAvg < 21 ? 'badge badge-sm badge-ideal' : 'badge badge-sm badge-amber';
    tempBadge.textContent = latest.tempAvg < 21 ? 'Sub-21°C Safe' : 'Warm (>21°C)';
  }
  const guidanceEl = document.getElementById('spray-guidance-text');
  if (guidanceEl) guidanceEl.textContent = latest.sprayStatus.text;

  // Panel 4: Water Balance & Smart Irrigation
  const smdVal = document.getElementById('water-balance-smd-val');
  if (smdVal) smdVal.textContent = `${Math.max(0, deficit7).toFixed(1)} mm`;
  const wbRain = document.getElementById('wb-7day-rain');
  if (wbRain) wbRain.textContent = `${rain7.toFixed(1)} mm`;
  const wbEt0 = document.getElementById('wb-7day-et0');
  if (wbEt0) wbEt0.textContent = `${et7.toFixed(1)} mm`;
  const wbNet = document.getElementById('wb-7day-net');
  if (wbNet) {
    wbNet.className = deficit7 > 0 ? 'text-amber' : 'text-emerald';
    wbNet.textContent = deficit7 > 0 ? `-${deficit7.toFixed(1)} mm` : `+${Math.abs(deficit7).toFixed(1)} mm`;
  }
  const irrStatusBadge = document.getElementById('irrigation-status-badge');
  if (irrStatusBadge) {
    if (deficit7 > 15) {
      irrStatusBadge.className = 'badge badge-high';
      irrStatusBadge.textContent = 'Severe Deficit (>15mm)';
    } else if (deficit7 > 5) {
      irrStatusBadge.className = 'badge badge-intermediate';
      irrStatusBadge.textContent = 'Moderate Deficit (5-15mm)';
    } else {
      irrStatusBadge.className = 'badge badge-ideal';
      irrStatusBadge.textContent = 'Field Capacity / Saturated';
    }
  }
  const irrRecText = document.getElementById('irrigation-rec-text');
  if (irrRecText) {
    if (deficit7 > 5) {
      const recMM = Math.min(12, Math.max(4, deficit7));
      const mins = Math.round(recMM * 2.2);
      irrRecText.innerHTML = `Apply <strong>${recMM.toFixed(1)} mm</strong> overnight (approx. <strong>${mins} mins per zone</strong>) to replenish sand rootzone without nutrient leaching.`;
    } else {
      irrRecText.innerHTML = `Soil is near field capacity. <strong>Cancel irrigation cycle</strong> to prevent root suffocation and anaerobic black layer development.`;
    }
  }
}

function updateDiseaseBar(id, val) {
  const valEl = document.getElementById(`disease-val-${id}`);
  const barEl = document.getElementById(`disease-bar-${id}`);
  if (valEl) {
    const tier = val > 50 ? 'High' : (val > 30 ? 'Moderate' : 'Low');
    const colorClass = val > 50 ? 'text-rose' : (val > 30 ? 'text-amber' : 'text-emerald');
    valEl.className = colorClass;
    valEl.textContent = `${val}% - ${tier}`;
  }
  if (barEl) {
    barEl.style.width = `${val}%`;
    barEl.className = `disease-bar-fill ${val > 50 ? 'bg-rose' : (val > 30 ? 'bg-amber' : 'bg-emerald')}`;
  }
}

/**
 * Renders the 4 Weather & Turf Growth Charts using Chart.js
 * Strictly plots manual ground observation logs (weatherLogs), never populated by live sync
 */
function renderWeatherCharts() {
  let records = [...weatherLogs];
  if (activeWeatherPitch !== 'all') {
    records = records.filter(w => w.pitch === activeWeatherPitch || w.pitch === 'All Pitches');
  }
  records.sort((a, b) => new Date(a.date) - new Date(b.date));

  if (records.length === 0) {
    if (charts.weatherTempGp) { charts.weatherTempGp.destroy(); charts.weatherTempGp = null; }
    if (charts.weatherMoisture) { charts.weatherMoisture.destroy(); charts.weatherMoisture = null; }
    if (charts.weatherGddPgr) { charts.weatherGddPgr.destroy(); charts.weatherGddPgr = null; }
    if (charts.weatherYield) { charts.weatherYield.destroy(); charts.weatherYield = null; }
    return;
  }

  const dates = records.map(r => r.date);

  // 1. Chart 1: Air & Soil Temp vs PACE GP (%)
  const ctxTemp = document.getElementById('chart-weather-temp-gp');
  if (ctxTemp) {
    if (charts.weatherTempGp) charts.weatherTempGp.destroy();

    charts.weatherTempGp = new Chart(ctxTemp, {
      type: 'line',
      data: {
        labels: dates,
        datasets: [
          {
            label: 'Max Air Temp (°C)',
            data: records.map(r => r.tempMax),
            borderColor: '#f59e0b',
            backgroundColor: '#f59e0b',
            borderWidth: 2,
            tension: 0.3,
            pointRadius: 3,
            yAxisID: 'y'
          },
          {
            label: 'Avg Air Temp (°C)',
            data: records.map(r => r.tempAvg),
            borderColor: '#9ca3af',
            borderDash: [4, 4],
            borderWidth: 1.5,
            tension: 0.3,
            pointRadius: 0,
            yAxisID: 'y'
          },
          {
            label: 'Min Air Temp (°C)',
            data: records.map(r => r.tempMin),
            borderColor: '#3b82f6',
            backgroundColor: '#3b82f6',
            borderWidth: 2,
            tension: 0.3,
            pointRadius: 3,
            yAxisID: 'y'
          },
          {
            label: 'Soil Temp 50mm (°C)',
            data: records.map(r => r.soilTemp),
            borderColor: '#10b981',
            backgroundColor: '#10b981',
            borderWidth: 3,
            tension: 0.3,
            pointRadius: 4,
            yAxisID: 'y'
          },
          {
            label: 'Growth Potential (GP %)',
            data: records.map(r => r.gpPercent),
            borderColor: '#ec4899',
            backgroundColor: 'rgba(236, 72, 153, 0.15)',
            borderWidth: 2,
            fill: true,
            tension: 0.3,
            pointRadius: 0,
            yAxisID: 'y1'
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: { mode: 'index', intersect: false },
        scales: {
          x: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#9ca3af' } },
          y: {
            position: 'left',
            grid: { color: 'rgba(255,255,255,0.05)' },
            ticks: { color: '#9ca3af', callback: v => `${v}°C` },
            title: { display: true, text: 'Temperature (°C)', color: '#9ca3af' }
          },
          y1: {
            position: 'right',
            grid: { drawOnChartArea: false },
            ticks: { color: '#ec4899', callback: v => `${v}%` },
            min: 0,
            max: 100,
            title: { display: true, text: 'Growth Potential (%)', color: '#ec4899' }
          }
        },
        plugins: {
          legend: { labels: { color: '#f3f4f6', usePointStyle: true, boxWidth: 8 } }
        }
      }
    });
  }

  // 2. Chart 2: Daily Rainfall vs ET0 & Water Deficit
  const ctxMoisture = document.getElementById('chart-weather-moisture');
  if (ctxMoisture) {
    if (charts.weatherMoisture) charts.weatherMoisture.destroy();

    // Compute cumulative deficit
    let cumDeficit = 0;
    const cumDeficitData = records.map(r => {
      cumDeficit += (r.et0 - r.rainfall);
      return Number(Math.max(0, cumDeficit).toFixed(1));
    });

    charts.weatherMoisture = new Chart(ctxMoisture, {
      type: 'bar',
      data: {
        labels: dates,
        datasets: [
          {
            type: 'bar',
            label: 'Rainfall (mm)',
            data: records.map(r => r.rainfall),
            backgroundColor: '#06b6d4',
            borderRadius: 4,
            yAxisID: 'y'
          },
          {
            type: 'line',
            label: 'Reference ET₀ (mm)',
            data: records.map(r => r.et0),
            borderColor: '#818cf8',
            borderWidth: 2,
            borderDash: [3, 3],
            tension: 0.3,
            pointRadius: 3,
            yAxisID: 'y'
          },
          {
            type: 'line',
            label: 'Cum. Moisture Deficit (mm)',
            data: cumDeficitData,
            borderColor: '#f43f5e',
            backgroundColor: 'rgba(244, 63, 94, 0.1)',
            fill: true,
            borderWidth: 2,
            tension: 0.2,
            pointRadius: 0,
            yAxisID: 'y1'
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: { mode: 'index', intersect: false },
        scales: {
          x: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#9ca3af' } },
          y: {
            position: 'left',
            grid: { color: 'rgba(255,255,255,0.05)' },
            ticks: { color: '#9ca3af', callback: v => `${v} mm` },
            title: { display: true, text: 'Daily mm', color: '#9ca3af' }
          },
          y1: {
            position: 'right',
            grid: { drawOnChartArea: false },
            ticks: { color: '#f43f5e', callback: v => `${v} mm` },
            title: { display: true, text: 'Cum. Deficit (mm)', color: '#f43f5e' }
          }
        },
        plugins: {
          legend: { labels: { color: '#f3f4f6', usePointStyle: true, boxWidth: 8 } }
        }
      }
    });
  }

  // 3. Chart 3: GDD & PGR Accumulation
  const ctxGdd = document.getElementById('chart-weather-gdd-pgr');
  if (ctxGdd) {
    if (charts.weatherGddPgr) charts.weatherGddPgr.destroy();

    let runningGdd = 0;
    const cumGdd = records.map(r => {
      runningGdd += r.gdd0;
      return Math.round(runningGdd);
    });

    charts.weatherGddPgr = new Chart(ctxGdd, {
      type: 'line',
      data: {
        labels: dates,
        datasets: [
          {
            type: 'bar',
            label: 'Daily GDD (Base 0°C)',
            data: records.map(r => r.gdd0),
            backgroundColor: 'rgba(168, 85, 247, 0.4)',
            borderColor: '#a855f7',
            borderWidth: 1,
            yAxisID: 'y'
          },
          {
            type: 'line',
            label: 'Cumulative GDD',
            data: cumGdd,
            borderColor: '#c084fc',
            backgroundColor: 'rgba(192, 132, 252, 0.1)',
            borderWidth: 2.5,
            tension: 0.3,
            fill: true,
            pointRadius: 2,
            yAxisID: 'y1'
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#9ca3af' } },
          y: {
            position: 'left',
            grid: { color: 'rgba(255,255,255,0.05)' },
            ticks: { color: '#9ca3af' },
            title: { display: true, text: 'Daily GDD', color: '#9ca3af' }
          },
          y1: {
            position: 'right',
            grid: { drawOnChartArea: false },
            ticks: { color: '#c084fc' },
            title: { display: true, text: 'Cum. GDD', color: '#c084fc' }
          }
        },
        plugins: {
          legend: { labels: { color: '#f3f4f6', usePointStyle: true, boxWidth: 8 } }
        }
      }
    });
  }

  // 4. Chart 4: Yield vs Growth Potential Correlation
  const ctxYield = document.getElementById('chart-weather-yield-correlation');
  if (ctxYield) {
    if (charts.weatherYield) charts.weatherYield.destroy();

    // Align clipping logs with dates
    const yieldData = dates.map(d => {
      const cuts = clippingLogs.filter(c => c.date === d && (activeWeatherPitch === 'all' || c.pitch === activeWeatherPitch));
      return cuts.length > 0 ? Number(cuts.reduce((s, c) => s + c.estTotalL, 0).toFixed(1)) : null;
    });

    charts.weatherYield = new Chart(ctxYield, {
      type: 'line',
      data: {
        labels: dates,
        datasets: [
          {
            type: 'bar',
            label: 'Clipping Yield (Est. Total Liters)',
            data: yieldData,
            backgroundColor: 'rgba(59, 130, 246, 0.65)',
            borderColor: '#3b82f6',
            borderWidth: 1,
            borderRadius: 4,
            yAxisID: 'y'
          },
          {
            type: 'line',
            label: 'Growth Potential (GP %)',
            data: records.map(r => r.gpPercent),
            borderColor: '#ec4899',
            borderWidth: 2.5,
            tension: 0.3,
            pointRadius: 3,
            yAxisID: 'y1'
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#9ca3af' } },
          y: {
            position: 'left',
            grid: { color: 'rgba(255,255,255,0.05)' },
            ticks: { color: '#3b82f6', callback: v => `${v} L` },
            title: { display: true, text: 'Clipping Yield (L)', color: '#3b82f6' }
          },
          y1: {
            position: 'right',
            grid: { drawOnChartArea: false },
            ticks: { color: '#ec4899', callback: v => `${v}%` },
            min: 0,
            max: 100,
            title: { display: true, text: 'Growth Potential (%)', color: '#ec4899' }
          }
        },
        plugins: {
          legend: { labels: { color: '#f3f4f6', usePointStyle: true, boxWidth: 8 } }
        }
      }
    });
  }
}

/**
 * Renders the Weather Observation Log Table
 */
function renderWeatherTable() {
  const tbody = document.getElementById('weather-table-body');
  if (!tbody) return;

  const searchQuery = (document.getElementById('weather-search-input')?.value || '').toLowerCase().trim();
  const pitchFilter = document.getElementById('weather-table-pitch-filter')?.value || 'all';

  let records = [...weatherLogs];

  if (pitchFilter !== 'all') {
    records = records.filter(r => r.pitch === pitchFilter || r.pitch === 'All Pitches');
  }

  if (searchQuery) {
    records = records.filter(r => 
      r.date.includes(searchQuery) ||
      (r.notes && r.notes.toLowerCase().includes(searchQuery)) ||
      r.pitch.toLowerCase().includes(searchQuery)
    );
  }

  // Sort
  records.sort((a, b) => {
    const col = weatherSort.column;
    const dir = weatherSort.direction === 'asc' ? 1 : -1;
    if (col === 'date') return (new Date(a.date) - new Date(b.date)) * dir;
    if (col === 'tempAvg') return (a.tempAvg - b.tempAvg) * dir;
    if (col === 'soilTemp') return (a.soilTemp - b.soilTemp) * dir;
    if (col === 'rainfall') return (a.rainfall - b.rainfall) * dir;
    if (col === 'gp') return (a.gp - b.gp) * dir;
    return (new Date(a.date) - new Date(b.date)) * dir;
  });

  if (records.length === 0) {
    tbody.innerHTML = `<tr><td colspan="12" class="text-center py-4 text-muted"><i class="fa-solid fa-cloud-sun mb-2" style="font-size: 2rem;"></i><br>No weather observation records found. Click "Log Weather Data" or "Sync Live Weather" to start tracking.</td></tr>`;
    updateWeatherTableSummary(0, 0, 0, 0, 0);
    return;
  }

  tbody.innerHTML = records.map(r => {
    const gpBadgeClass = r.gpPercent >= 80 ? 'badge-surging' : (r.gpPercent >= 50 ? 'badge-ideal' : 'badge-low');
    const soilBadgeClass = r.soilTemp >= 12 && r.soilTemp <= 18 ? 'badge-ideal' : (r.soilTemp > 24 ? 'badge-high' : 'badge-intermediate');
    const wbClass = r.waterBalance < 0 ? 'text-amber' : 'text-emerald';
    const diseaseBadge = r.diseaseRisks.overall > 50 ? 'badge-high' : (r.diseaseRisks.overall > 30 ? 'badge-amber' : 'badge-ideal');

    return `
      <tr>
        <td><strong>${r.date}</strong></td>
        <td><span class="badge ${r.pitch === 'Pitch 1' ? 'badge-intermediate' : 'badge-purple'}">${r.pitch}</span></td>
        <td>
          <strong>${r.tempAvg.toFixed(1)}°C</strong>
          <span class="text-muted text-xs ms-1">(${r.tempMin.toFixed(1)}° / ${r.tempMax.toFixed(1)}°)</span>
        </td>
        <td>
          <span class="badge ${soilBadgeClass}">${r.soilTemp.toFixed(1)}°C</span>
        </td>
        <td><strong class="text-cyan">${r.rainfall.toFixed(1)} mm</strong></td>
        <td><span class="text-muted">${r.et0.toFixed(1)} mm</span></td>
        <td><strong class="${wbClass}">${r.waterBalance > 0 ? '+' : ''}${r.waterBalance.toFixed(1)} mm</strong></td>
        <td>
          <span class="badge ${gpBadgeClass}">${r.gpPercent}% GP</span>
        </td>
        <td><strong class="text-purple">${r.gdd0.toFixed(1)}</strong></td>
        <td>
          <span class="text-xs text-muted">${r.humidity}% RH | ${r.windSpeed.toFixed(1)} mph ${r.windDir}</span>
        </td>
        <td>
          <span class="badge ${diseaseBadge}">${r.diseaseRisks.overall}% Risk</span>
        </td>
        <td class="text-right">
          <div class="table-actions-cell">
            <button class="btn-icon btn-edit" title="Edit Weather Log" onclick="openWeatherModal('${r.id}')">
              <i class="fa-solid fa-pen-to-square"></i>
            </button>
            <button class="btn-icon btn-delete" title="Delete Weather Log" onclick="deleteWeatherEntry('${r.id}')">
              <i class="fa-solid fa-trash-can"></i>
            </button>
          </div>
        </td>
      </tr>
    `;
  }).join('');

  // Update table summary footer
  const avgTemp = records.reduce((s, r) => s + r.tempAvg, 0) / records.length;
  const avgSoil = records.reduce((s, r) => s + r.soilTemp, 0) / records.length;
  const totRain = records.reduce((s, r) => s + r.rainfall, 0);
  const avgGp = records.reduce((s, r) => s + r.gpPercent, 0) / records.length;

  updateWeatherTableSummary(records.length, avgTemp, avgSoil, totRain, avgGp);
}

function updateWeatherTableSummary(count, avgTemp, avgSoil, totRain, avgGp) {
  const countEl = document.getElementById('weather-record-count');
  if (countEl) countEl.textContent = `Showing ${count} weather observation entries`;
  const tempEl = document.getElementById('summary-weather-avg-temp');
  if (tempEl) tempEl.textContent = avgTemp.toFixed(1);
  const soilEl = document.getElementById('summary-weather-avg-soil');
  if (soilEl) soilEl.textContent = avgSoil.toFixed(1);
  const rainEl = document.getElementById('summary-weather-total-rain');
  if (rainEl) rainEl.textContent = totRain.toFixed(1);
  const gpEl = document.getElementById('summary-weather-avg-gp');
  if (gpEl) gpEl.textContent = Math.round(avgGp);
}

function renderEmptyWeatherTab() {
  // 1. Reset Weather KPIs
  const tempEl = document.getElementById('kpi-weather-temp');
  if (tempEl) tempEl.innerHTML = `-- <small>°C</small>`;
  const tempBadgeEl = document.getElementById('kpi-weather-temp-badge');
  if (tempBadgeEl) {
    tempBadgeEl.className = 'badge badge-outline';
    tempBadgeEl.textContent = 'No Data Logged';
  }
  const tempRangeEl = document.getElementById('kpi-weather-temp-range');
  if (tempRangeEl) tempRangeEl.textContent = 'Awaiting Observation Data';

  const soilEl = document.getElementById('kpi-weather-soil');
  if (soilEl) soilEl.innerHTML = `-- <small>°C</small>`;
  const soilBadgeEl = document.getElementById('kpi-weather-soil-badge');
  if (soilBadgeEl) {
    soilBadgeEl.className = 'badge badge-outline';
    soilBadgeEl.textContent = 'No Rootzone Log';
  }
  const soilSubEl = document.getElementById('kpi-weather-soil-sub');
  if (soilSubEl) soilSubEl.textContent = 'Awaiting sensor or manual entry';

  const rainEl = document.getElementById('kpi-weather-rain');
  if (rainEl) rainEl.innerHTML = `0.0 <small>mm</small>`;
  const rain7Badge = document.getElementById('kpi-weather-rain7-badge');
  if (rain7Badge) rain7Badge.textContent = '7-Day: 0.0 mm';
  const rain30Sub = document.getElementById('kpi-weather-rain30-sub');
  if (rain30Sub) rain30Sub.textContent = '30-Day: 0.0 mm';

  const et0El = document.getElementById('kpi-weather-et0');
  if (et0El) et0El.innerHTML = `0.0 <small>mm/day</small>`;
  const wbBadge = document.getElementById('kpi-weather-water-balance-badge');
  if (wbBadge) {
    wbBadge.className = 'badge badge-outline';
    wbBadge.textContent = '0.0 mm Net Balance';
  }
  const smdSub = document.getElementById('kpi-weather-smd-sub');
  if (smdSub) smdSub.textContent = 'Cum. 7-Day Deficit: 0.0 mm';

  const gpEl = document.getElementById('kpi-weather-gp');
  if (gpEl) gpEl.innerHTML = `-- <small>%</small>`;
  const gpBadge = document.getElementById('kpi-weather-gp-badge');
  if (gpBadge) {
    gpBadge.className = 'badge badge-outline';
    gpBadge.textContent = 'No Temp Data';
  }
  const gpNSub = document.getElementById('kpi-weather-gp-n-sub');
  if (gpNSub) gpNSub.textContent = 'Target N Pacing: --';

  const gddEl = document.getElementById('kpi-weather-gdd');
  if (gddEl) gddEl.innerHTML = `0 <small>GDD</small>`;
  const pgrStatusBadge = document.getElementById('kpi-weather-pgr-status-badge');
  if (pgrStatusBadge) {
    pgrStatusBadge.className = 'badge badge-outline';
    pgrStatusBadge.textContent = 'Awaiting Spray Log';
  }
  const pgrTargetSub = document.getElementById('kpi-weather-pgr-target-sub');
  if (pgrTargetSub) pgrTargetSub.textContent = `Target: ${pgrSettings.targetGDD} GDD`;

  // 2. Reset Decision Panels
  const fill = document.getElementById('pgr-progress-fill');
  if (fill) fill.style.width = '0%';
  const gddDisp = document.getElementById('pgr-current-gdd-display');
  if (gddDisp) gddDisp.textContent = '0';
  const adviceTitle = document.getElementById('pgr-advice-title');
  if (adviceTitle) adviceTitle.textContent = 'No Weather / GDD Logs';
  const adviceText = document.getElementById('pgr-advice-text');
  if (adviceText) adviceText.textContent = 'Log weather observations or sync live weather to calculate Growing Degree Days and monitor PGR re-application timing.';

  const overallDiseaseBadge = document.getElementById('overall-disease-badge');
  if (overallDiseaseBadge) {
    overallDiseaseBadge.className = 'badge badge-outline';
    overallDiseaseBadge.textContent = 'No Disease Risk Data';
  }

  ['microdochium', 'dollar', 'anthracnose', 'pythium'].forEach(d => {
    const bar = document.getElementById(`disease-bar-${d}`);
    if (bar) bar.style.width = '0%';
    const val = document.getElementById(`disease-val-${d}`);
    if (val) {
      val.textContent = '--';
      val.className = 'text-muted';
    }
  });

  const culturalAdvice = document.getElementById('disease-cultural-advice');
  if (culturalAdvice) culturalAdvice.innerHTML = `<strong>Grounds Action:</strong> Log daily weather and leaf wetness observations to calculate real-time disease pressure indices.`;

  const sprayBadge = document.getElementById('spray-status-badge');
  if (sprayBadge) {
    sprayBadge.className = 'badge badge-outline';
    sprayBadge.textContent = 'Awaiting Weather Data';
  }
  const sprayWind = document.getElementById('spray-wind-val');
  if (sprayWind) sprayWind.textContent = '-- mph';
  const sprayDeltaT = document.getElementById('spray-deltat-val');
  if (sprayDeltaT) sprayDeltaT.textContent = '-- °C';
  const sprayTemp = document.getElementById('spray-temp-val');
  if (sprayTemp) sprayTemp.textContent = '-- °C';
  const sprayRain = document.getElementById('spray-rainfast-val');
  if (sprayRain) sprayRain.textContent = '--';
  const sprayGuide = document.getElementById('spray-guidance-text');
  if (sprayGuide) sprayGuide.textContent = 'Add weather data or sync live weather to evaluate spraying delta-T, wind drift risk, and rainfast windows.';

  const irrStatus = document.getElementById('irrigation-status-badge');
  if (irrStatus) {
    irrStatus.className = 'badge badge-outline';
    irrStatus.textContent = 'No Deficit Logged';
  }
  const wbSmd = document.getElementById('water-balance-smd-val');
  if (wbSmd) wbSmd.textContent = '0.0 mm';
  const wbRain = document.getElementById('wb-7day-rain');
  if (wbRain) wbRain.textContent = '0.0 mm';
  const wbEt0 = document.getElementById('wb-7day-et0');
  if (wbEt0) wbEt0.textContent = '0.0 mm';
  const wbNet = document.getElementById('wb-7day-net');
  if (wbNet) {
    wbNet.textContent = '0.0 mm';
    wbNet.className = 'text-muted';
  }

  // 3. Clear charts & show empty table row
  renderWeatherCharts();
  const countEl = document.getElementById('weather-record-count');
  if (countEl) countEl.textContent = `Showing 0 weather observation entries`;
  const sumTemp = document.getElementById('summary-weather-avg-temp');
  if (sumTemp) sumTemp.textContent = '--';
  const sumSoil = document.getElementById('summary-weather-avg-soil');
  if (sumSoil) sumSoil.textContent = '--';
  const sumRain = document.getElementById('summary-weather-total-rain');
  if (sumRain) sumRain.textContent = '0.0';
  const sumGp = document.getElementById('summary-weather-avg-gp');
  if (sumGp) sumGp.textContent = '--';

  const tbody = document.getElementById('weather-table-body');
  if (tbody) {
    tbody.innerHTML = `<tr><td colspan="12" class="text-center py-5 text-muted"><i class="fa-solid fa-cloud-sun fa-2x mb-2 d-block opacity-50"></i>No weather or microclimate observation logs yet.<br>Click <strong>"Log Weather Data"</strong> to add accurate measurements or <strong>"Sync Live Weather"</strong>.</td></tr>`;
  }
}

/**
 * Open-Meteo Live API Weather Sync
 */
const LIVE_LOCATION = {
  lat: 53.086,
  lon: -2.974,
  name: 'Gresford, Wrexham (Wales)'
};

async function fetchLiveWeather() {
  const lat = LIVE_LOCATION.lat;
  const lon = LIVE_LOCATION.lon;
  const stationName = LIVE_LOCATION.name;

  executeOpenMeteoFetch(lat, lon, stationName);
}

async function executeOpenMeteoFetch(lat, lon, stationName) {
  const syncBtn = document.getElementById('btn-fetch-live-weather');
  if (syncBtn) {
    syncBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> <span class="btn-text">Syncing...</span>`;
    syncBtn.disabled = true;
  }

  try {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=temperature_2m_max,temperature_2m_min,temperature_2m_mean,precipitation_sum,et0_fao_evapotranspiration,wind_speed_10m_max,shortwave_radiation_sum&hourly=soil_temperature_0_to_7cm,relative_humidity_2m&wind_speed_unit=mph&timezone=auto&past_days=14&forecast_days=7`;
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Weather server status: ${response.status}`);

    const data = await response.json();
    const daily = data.daily;
    const hourly = data.hourly;

    if (!daily || !daily.time) throw new Error('Invalid weather dataset received.');

    const newEntries = [];
    for (let i = 0; i < daily.time.length; i++) {
      const dateStr = daily.time[i];
      const tmax = daily.temperature_2m_max[i] ?? 20;
      const tmin = daily.temperature_2m_min[i] ?? 12;
      const tmean = daily.temperature_2m_mean[i] ?? ((tmax + tmin) / 2);
      const rain = daily.precipitation_sum[i] ?? 0;
      const et0 = daily.et0_fao_evapotranspiration[i] ?? 3.0;
      const wind = daily.wind_speed_10m_max[i] ?? 5.0;
      const solar = daily.shortwave_radiation_sum[i] ?? 18.0;

      // Extract average soil temp and humidity for this date
      let soilTemp = 16.5;
      let rh = 70;
      if (hourly && hourly.time) {
        const matchingIndices = [];
        for (let h = 0; h < hourly.time.length; h++) {
          if (hourly.time[h].startsWith(dateStr)) matchingIndices.push(h);
        }
        if (matchingIndices.length > 0) {
          const soilSum = matchingIndices.reduce((s, idx) => s + (hourly.soil_temperature_0_to_7cm[idx] || 16.5), 0);
          soilTemp = Number((soilSum / matchingIndices.length).toFixed(1));
          const rhSum = matchingIndices.reduce((s, idx) => s + (hourly.relative_humidity_2m[idx] || 70), 0);
          rh = Math.round(rhSum / matchingIndices.length);
        }
      }

      newEntries.push(processWeatherEntry({
        id: `live-${dateStr}`,
        date: dateStr,
        pitch: activeWeatherPitch === 'all' ? 'Pitch 1' : activeWeatherPitch,
        tempMin: tmin,
        tempMax: tmax,
        tempAvg: tmean,
        soilTemp: soilTemp,
        rainfall: rain,
        et0: et0,
        humidity: rh,
        windSpeed: wind,
        windDir: 'SW',
        leafWetness: rh > 80 ? 8 : (rh > 70 ? 5 : 3),
        solarRad: solar,
        cloud: rain > 0 ? 85 : 35,
        notes: `Live satellite & station feed for ${stationName}.`
      }));
    }

    // Store in-memory live feed (does NOT append to weatherLogs or observation table)
    liveWeatherFeed = newEntries;
    liveWeatherActive = true;
    currentLiveStationName = stationName;

    // Update banner
    const banner = document.getElementById('live-weather-banner');
    if (banner) {
      banner.style.display = 'flex';
      const label = document.getElementById('live-weather-station-label');
      if (label) label.textContent = `Live Open-Meteo Feed Active: ${stationName}`;
      const updated = document.getElementById('live-weather-updated-label');
      if (updated) updated.textContent = `Updated ${new Date().toLocaleTimeString()}`;
    }

    renderAll();
    showToast(`Live weather synchronized for ${stationName}. Observation logs remain unaffected.`, 'success');
  } catch (err) {
    console.error('Weather Sync Error:', err);
    showToast(`Failed to sync live weather: ${err.message}`, 'danger');
  } finally {
    if (syncBtn) {
      syncBtn.innerHTML = `<i class="fa-solid fa-satellite-dish"></i> <span class="btn-text">Sync Live Weather</span>`;
      syncBtn.disabled = false;
    }
  }
}

/**
 * Saves current live weather observation for today from Gresford into persistent Observation Logs
 */
async function saveSyncedWeatherToLogs() {
  if (!liveWeatherActive || liveWeatherFeed.length === 0) {
    showToast('Fetching live weather for Gresford, Wrexham before saving...', 'info');
    await fetchLiveWeather();
  }

  if (!liveWeatherFeed || liveWeatherFeed.length === 0) {
    showToast('No synced weather record available to save.', 'warning');
    return;
  }

  // Find today's live observation entry (single day only)
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const todayStr = `${year}-${month}-${day}`;

  let targetEntry = liveWeatherFeed.find(r => r.date === todayStr);
  if (!targetEntry) {
    // If exact date match not found, take the closest current entry
    targetEntry = liveWeatherFeed.find(r => r.date <= todayStr) || liveWeatherFeed[0];
  }

  const pitchName = activeWeatherPitch === 'all' ? 'Pitch 1' : activeWeatherPitch;

  const persistentEntry = {
    ...targetEntry,
    pitch: pitchName,
    id: `w-${targetEntry.date}-${pitchName.replace(/\s+/g, '').toLowerCase()}`,
    notes: `Live synced for Gresford, Wrexham (${now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })})`
  };

  const merged = [...weatherLogs];
  const idx = merged.findIndex(w => w.date === persistentEntry.date && w.pitch === persistentEntry.pitch);
  let isUpdate = false;

  if (idx >= 0) {
    merged[idx] = persistentEntry;
    isUpdate = true;
  } else {
    merged.push(persistentEntry);
  }

  weatherLogs = merged;
  saveWeatherData();
  renderAll();

  const actionText = isUpdate ? 'Updated' : 'Added';
  showToast(`${actionText} today's live weather log (${persistentEntry.date}: ${persistentEntry.tempAvg.toFixed(1)}°C, Soil: ${persistentEntry.soilTemp.toFixed(1)}°C) in Observation Logs.`, 'success');
}

window.saveSyncedWeatherToLogs = saveSyncedWeatherToLogs;

/**
 * Weather Modals & Event Listeners
 */
function openWeatherModal(entryId = null) {
  const modal = document.getElementById('weather-modal');
  if (!modal) return;

  const title = document.getElementById('weather-modal-title');
  const idInput = document.getElementById('weather-entry-id');

  if (entryId) {
    const entry = weatherLogs.find(w => w.id === entryId);
    if (entry) {
      if (title) title.innerHTML = `<i class="fa-solid fa-pen text-cyan"></i> Edit Weather Observation`;
      if (idInput) idInput.value = entry.id;
      document.getElementById('weather-input-date').value = entry.date;
      document.getElementById('weather-input-pitch').value = entry.pitch;
      document.getElementById('weather-input-temp-min').value = entry.tempMin;
      document.getElementById('weather-input-temp-max').value = entry.tempMax;
      document.getElementById('weather-input-temp-avg').value = entry.tempAvg;
      document.getElementById('weather-input-soil-temp').value = entry.soilTemp;
      document.getElementById('weather-input-rainfall').value = entry.rainfall;
      document.getElementById('weather-input-et0').value = entry.et0;
      document.getElementById('weather-input-humidity').value = entry.humidity;
      document.getElementById('weather-input-leaf-wetness').value = entry.leafWetness;
      document.getElementById('weather-input-wind-speed').value = entry.windSpeed;
      document.getElementById('weather-input-wind-dir').value = entry.windDir;
      document.getElementById('weather-input-solar').value = entry.solarRad;
      document.getElementById('weather-input-cloud').value = entry.cloud;
      document.getElementById('weather-input-notes').value = entry.notes;
    }
  } else {
    if (title) title.innerHTML = `<i class="fa-solid fa-cloud-sun-rain text-cyan"></i> Log Weather & Microclimate Data`;
    document.getElementById('weather-form').reset();
    if (idInput) idInput.value = '';
    document.getElementById('weather-input-date').value = new Date().toISOString().split('T')[0];
    document.getElementById('weather-input-pitch').value = activeWeatherPitch === 'all' ? 'Pitch 1' : activeWeatherPitch;
    document.getElementById('weather-input-rainfall').value = '0.0';
    document.getElementById('weather-input-humidity').value = '70';
    document.getElementById('weather-input-wind-speed').value = '5.0';
    document.getElementById('weather-input-leaf-wetness').value = '5.0';
  }

  updateWeatherModalPreview();
  modal.classList.add('open');
}

function closeWeatherModal() {
  const modal = document.getElementById('weather-modal');
  if (modal) modal.classList.remove('open');
}

function updateWeatherModalPreview() {
  const tmin = Number(document.getElementById('weather-input-temp-min')?.value || 14);
  const tmax = Number(document.getElementById('weather-input-temp-max')?.value || 22);
  let tavg = Number(document.getElementById('weather-input-temp-avg')?.value);
  if (isNaN(tavg) || tavg === 0) {
    tavg = Number(((tmin + tmax) / 2).toFixed(1));
  }
  const rain = Number(document.getElementById('weather-input-rainfall')?.value || 0);
  let et0 = Number(document.getElementById('weather-input-et0')?.value);
  if (isNaN(et0) || et0 === 0) {
    et0 = calculateEt0Estimate(tmin, tmax, tavg, 19);
  }
  const rh = Number(document.getElementById('weather-input-humidity')?.value || 70);
  const wind = Number(document.getElementById('weather-input-wind-speed')?.value || 5);
  const leaf = Number(document.getElementById('weather-input-leaf-wetness')?.value || 5);

  const entry = processWeatherEntry({
    tempMin: tmin,
    tempMax: tmax,
    tempAvg: tavg,
    rainfall: rain,
    et0: et0,
    humidity: rh,
    windSpeed: wind,
    leafWetness: leaf
  });

  const gpEl = document.getElementById('modal-preview-gp');
  if (gpEl) gpEl.textContent = `${entry.gpPercent}%`;
  const gddEl = document.getElementById('modal-preview-gdd');
  if (gddEl) gddEl.textContent = `${entry.gdd0} GDD`;
  const wbEl = document.getElementById('modal-preview-wb');
  if (wbEl) wbEl.textContent = `${entry.waterBalance > 0 ? '+' : ''}${entry.waterBalance} mm`;
  const sprayEl = document.getElementById('modal-preview-spray');
  if (sprayEl) sprayEl.textContent = entry.sprayStatus.status;
  const disEl = document.getElementById('modal-preview-disease');
  if (disEl) disEl.textContent = `${entry.diseaseRisks.overall}% Risk`;
}

function saveWeatherEntry(e) {
  if (e) e.preventDefault();

  const id = document.getElementById('weather-entry-id').value;
  const date = document.getElementById('weather-input-date').value;
  const pitch = document.getElementById('weather-input-pitch').value;
  const tempMin = parseFloat(document.getElementById('weather-input-temp-min').value);
  const tempMax = parseFloat(document.getElementById('weather-input-temp-max').value);
  let tempAvg = parseFloat(document.getElementById('weather-input-temp-avg').value);
  if (isNaN(tempAvg)) tempAvg = Number(((tempMin + tempMax) / 2).toFixed(1));
  const soilTemp = parseFloat(document.getElementById('weather-input-soil-temp').value);
  const rainfall = parseFloat(document.getElementById('weather-input-rainfall').value || 0);
  let et0 = parseFloat(document.getElementById('weather-input-et0').value);
  if (isNaN(et0)) et0 = calculateEt0Estimate(tempMin, tempMax, tempAvg, 19);
  const humidity = parseFloat(document.getElementById('weather-input-humidity').value);
  const leafWetness = parseFloat(document.getElementById('weather-input-leaf-wetness').value || 5);
  const windSpeed = parseFloat(document.getElementById('weather-input-wind-speed').value);
  const windDir = document.getElementById('weather-input-wind-dir').value;
  const solarRad = parseFloat(document.getElementById('weather-input-solar').value || 19);
  const cloud = parseFloat(document.getElementById('weather-input-cloud').value || 30);
  const notes = document.getElementById('weather-input-notes').value;

  if (isNaN(tempMin) || isNaN(tempMax) || isNaN(soilTemp)) {
    showToast('Please fill in required temperature and soil values.', 'warning');
    return;
  }

  const processed = processWeatherEntry({
    id: id || `w-${Date.now()}`,
    date,
    pitch,
    tempMin,
    tempMax,
    tempAvg,
    soilTemp,
    rainfall,
    et0,
    humidity,
    leafWetness,
    windSpeed,
    windDir,
    solarRad,
    cloud,
    notes
  });

  if (id) {
    const idx = weatherLogs.findIndex(w => w.id === id);
    if (idx >= 0) weatherLogs[idx] = processed;
  } else {
    weatherLogs.push(processed);
  }

  saveWeatherData();
  closeWeatherModal();
  renderAll();
  showToast('Weather observation record saved successfully.', 'success');
}

function deleteWeatherEntry(id) {
  if (confirm('Are you sure you want to delete this weather record?')) {
    weatherLogs = weatherLogs.filter(w => w.id !== id);
    saveWeatherData();
    renderAll();
    showToast('Weather record deleted.', 'info');
  }
}

// PGR Spray Modal Handlers
function openPgrModal() {
  const modal = document.getElementById('pgr-spray-modal');
  if (!modal) return;
  document.getElementById('pgr-input-date').value = new Date().toISOString().split('T')[0];
  document.getElementById('pgr-input-pitch').value = 'All Pitches';
  document.getElementById('pgr-input-target-gdd').value = pgrSettings.targetGDD || 200;
  modal.classList.add('open');
}

function closePgrModal() {
  const modal = document.getElementById('pgr-spray-modal');
  if (modal) modal.classList.remove('open');
}

function savePgrSpray(e) {
  if (e) e.preventDefault();

  const date = document.getElementById('pgr-input-date').value;
  const pitch = document.getElementById('pgr-input-pitch').value;
  const product = document.getElementById('pgr-input-product').value;
  const rate = document.getElementById('pgr-input-rate').value;
  const targetGDD = parseInt(document.getElementById('pgr-input-target-gdd').value) || 200;
  const notes = document.getElementById('pgr-input-notes').value;

  pgrSettings = {
    ...pgrSettings,
    lastSprayDate: date,
    lastSprayPitch: pitch,
    product,
    rate,
    targetGDD,
    notes
  };

  savePgrSettings();
  closePgrModal();
  renderAll();
  showToast(`PGR application recorded (${product}). GDD accumulator reset from ${date}.`, 'success');
}

// CSV Export & Import Handlers
function exportWeatherCSV() {
  if (weatherLogs.length === 0) {
    showToast('No weather records to export.', 'warning');
    return;
  }

  const headers = ['Date', 'Pitch', 'TempMin', 'TempMax', 'TempAvg', 'SoilTemp', 'Rainfall', 'ET0', 'Humidity', 'WindSpeed', 'WindDir', 'LeafWetness', 'GrowthPotential', 'DailyGDD', 'Notes'];
  const rows = weatherLogs.map(r => [
    r.date,
    `"${r.pitch}"`,
    r.tempMin,
    r.tempMax,
    r.tempAvg,
    r.soilTemp,
    r.rainfall,
    r.et0,
    r.humidity,
    r.windSpeed,
    `"${r.windDir}"`,
    r.leafWetness,
    r.gpPercent,
    r.gdd0,
    `"${(r.notes || '').replace(/"/g, '""')}"`
  ]);

  const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
  const link = document.createElement('a');
  link.setAttribute('href', encodeURI(csvContent));
  link.setAttribute('download', `TurfTrack_Weather_Microclimate_${new Date().toISOString().split('T')[0]}.csv`);
  document.body.appendChild(link);
  link.click();
  link.remove();
  showToast('Weather records exported to CSV.', 'success');
}

function openWeatherImportModal() {
  const modal = document.getElementById('weather-import-modal');
  if (modal) modal.classList.add('open');
}

function closeWeatherImportModal() {
  const modal = document.getElementById('weather-import-modal');
  if (modal) modal.classList.remove('open');
}

function processWeatherCSVImport() {
  const text = document.getElementById('weather-csv-paste')?.value.trim();
  if (!text) {
    showToast('Please paste or upload CSV weather data.', 'warning');
    return;
  }

  const lines = text.split('\n').map(l => l.trim()).filter(l => l.length > 0);
  if (lines.length <= 1) {
    showToast('CSV content contains no data rows.', 'warning');
    return;
  }

  let imported = 0;
  // Check header
  const startIndex = lines[0].toLowerCase().includes('date') ? 1 : 0;

  for (let i = startIndex; i < lines.length; i++) {
    const parts = lines[i].split(',').map(p => p.replace(/^"|"$/g, '').trim());
    if (parts.length >= 4) {
      const entry = processWeatherEntry({
        date: parts[0],
        pitch: parts[1] || 'Pitch 1',
        tempMin: parseFloat(parts[2]),
        tempMax: parseFloat(parts[3]),
        tempAvg: parts[4] ? parseFloat(parts[4]) : undefined,
        soilTemp: parts[5] ? parseFloat(parts[5]) : 16.5,
        rainfall: parts[6] ? parseFloat(parts[6]) : 0,
        et0: parts[7] ? parseFloat(parts[7]) : undefined,
        humidity: parts[8] ? parseFloat(parts[8]) : 70,
        windSpeed: parts[9] ? parseFloat(parts[9]) : 5,
        notes: parts[10] || ''
      });
      weatherLogs.push(entry);
      imported++;
    }
  }

  saveWeatherData();
  closeWeatherImportModal();
  renderAll();
  showToast(`Successfully imported ${imported} weather records from CSV.`, 'success');
}

function downloadWeatherCSVTemplate() {
  const csvContent = 'data:text/csv;charset=utf-8,Date,Pitch,TempMin,TempMax,TempAvg,SoilTemp,Rainfall,ET0,Humidity,WindSpeed,Notes\n2026-08-10,Pitch 1,14.2,22.8,18.5,17.1,0.0,3.8,68,5.7,Clear sunny\n2026-08-11,Pitch 1,13.8,21.5,17.6,16.8,4.2,2.9,82,7.1,Afternoon rain\n';
  const link = document.createElement('a');
  link.setAttribute('href', encodeURI(csvContent));
  link.setAttribute('download', 'TurfTrack_Weather_Template.csv');
  document.body.appendChild(link);
  link.click();
  link.remove();
  showToast('Weather CSV template downloaded.', 'info');
}

/**
 * Setup All Weather Event Listeners
 */
function setupWeatherEventListeners() {
  // Toolbar Pitch Select
  const pitchSelect = document.getElementById('weather-pitch-select');
  if (pitchSelect) {
    pitchSelect.addEventListener('change', e => {
      activeWeatherPitch = e.target.value;
      renderWeatherTab();
  renderKnowledgeTab();
    });
  }

  // Fetch Live Weather Button (Fixed to Gresford, Wrexham)
  const btnLive = document.getElementById('btn-fetch-live-weather');
  if (btnLive) {
    btnLive.addEventListener('click', () => {
      fetchLiveWeather('gresford');
    });
  }

  // Close Live Banner Button
  const btnCloseBanner = document.getElementById('btn-close-live-banner');
  if (btnCloseBanner) {
    btnCloseBanner.addEventListener('click', () => {
      const banner = document.getElementById('live-weather-banner');
      if (banner) banner.style.display = 'none';
      liveWeatherActive = false;
      liveWeatherFeed = [];
      renderAll();
      showToast('Switched to pitch manual observation logs.', 'info');
    });
  }

  // Action Menu Dropdown Toggle
  const btnMenu = document.getElementById('btn-weather-actions-menu');
  const dropdown = document.getElementById('weather-dropdown-menu');
  if (btnMenu && dropdown) {
    btnMenu.addEventListener('click', e => {
      e.stopPropagation();
      dropdown.classList.toggle('show');
    });
    document.addEventListener('click', () => dropdown.classList.remove('show'));
  }

  // Dropdown Items
  document.getElementById('btn-log-weather')?.addEventListener('click', () => openWeatherModal());
  document.getElementById('btn-pgr-spray-open')?.addEventListener('click', openPgrModal);
  document.getElementById('btn-record-pgr-quick')?.addEventListener('click', openPgrModal);
  document.getElementById('btn-import-weather')?.addEventListener('click', openWeatherImportModal);
  document.getElementById('btn-export-weather')?.addEventListener('click', exportWeatherCSV);
  document.getElementById('btn-seed-weather-demo')?.addEventListener('click', seedDemoWeatherData);
  document.getElementById('btn-clear-weather')?.addEventListener('click', clearAllWeatherData);

  // Weather Modal Close & Submit
  document.getElementById('weather-modal-close-btn')?.addEventListener('click', closeWeatherModal);
  document.getElementById('btn-cancel-weather-modal')?.addEventListener('click', closeWeatherModal);
  document.getElementById('weather-form')?.addEventListener('submit', saveWeatherEntry);

  // Weather Modal Live Calculation Listeners
  const weatherCalcInputs = [
    'weather-input-temp-min', 'weather-input-temp-max', 'weather-input-temp-avg',
    'weather-input-rainfall', 'weather-input-et0', 'weather-input-humidity',
    'weather-input-wind-speed', 'weather-input-leaf-wetness'
  ];
  weatherCalcInputs.forEach(id => {
    document.getElementById(id)?.addEventListener('input', updateWeatherModalPreview);
  });

  // PGR Modal Close & Submit
  document.getElementById('pgr-spray-modal-close')?.addEventListener('click', closePgrModal);
  document.getElementById('btn-cancel-pgr-modal')?.addEventListener('click', closePgrModal);
  document.getElementById('pgr-spray-form')?.addEventListener('submit', savePgrSpray);

  // Import Modal Close & Submit
  document.getElementById('weather-import-modal-close')?.addEventListener('click', closeWeatherImportModal);
  document.getElementById('btn-cancel-weather-import')?.addEventListener('click', closeWeatherImportModal);
  document.getElementById('btn-process-weather-import')?.addEventListener('click', processWeatherCSVImport);
  document.getElementById('btn-download-weather-template')?.addEventListener('click', downloadWeatherCSVTemplate);
  document.getElementById('btn-load-sample-weather-csv')?.addEventListener('click', () => {
    const pasteArea = document.getElementById('weather-csv-paste');
    if (pasteArea) {
      pasteArea.value = `Date,Pitch,TempMin,TempMax,TempAvg,SoilTemp,Rainfall,ET0,Humidity,WindSpeed,Notes\n2026-08-16,Pitch 1,14.5,23.2,18.8,17.3,0.0,3.9,67,5.0,Optimal growth window\n2026-08-17,Pitch 1,15.0,24.0,19.5,17.8,0.0,4.2,64,4.7,High shoot activity\n2026-08-18,Pitch 1,13.5,20.0,16.7,16.5,5.8,2.4,85,7.5,Rainfall event`;
    }
  });

  // Table Search & Filters
  document.getElementById('weather-search-input')?.addEventListener('input', renderWeatherTable);
  document.getElementById('weather-table-pitch-filter')?.addEventListener('change', renderWeatherTable);
}


/* ==========================================================================
   Agronomic Knowledge Base & Learning Library Logic
   ========================================================================== */

function loadKnowledgeData() {
  const saved = localStorage.getItem('turf_knowledge_vault');
  if (saved) {
    try {
      knowledgeBase = JSON.parse(saved);
      // Ensure latest built-in seed items exist
      SEED_KNOWLEDGE_DATA.forEach(seedItem => {
        if (!knowledgeBase.some(k => k.id === seedItem.id)) {
          knowledgeBase.push(seedItem);
        }
      });
      saveKnowledgeData();
    } catch (e) {
      console.error('Error parsing saved knowledge base:', e);
      knowledgeBase = [...SEED_KNOWLEDGE_DATA];
    }
  } else {
    knowledgeBase = [...SEED_KNOWLEDGE_DATA];
    saveKnowledgeData();
  }
}

function saveKnowledgeData() {
  localStorage.setItem('turf_knowledge_vault', JSON.stringify(knowledgeBase));
}

function seedDemoKnowledgeData() {
  if (confirm('Restore the standard sports turf knowledge library? Any custom articles with duplicate IDs will be overwritten.')) {
    knowledgeBase = [...SEED_KNOWLEDGE_DATA];
    saveKnowledgeData();
    renderKnowledgeTab();
    showToast('Standard sports turf knowledge library restored.', 'success');
  }
}

function clearCustomKnowledge() {
  if (confirm('Are you sure you want to delete all custom knowledge articles? Standard library guides will remain.')) {
    knowledgeBase = knowledgeBase.filter(k => !k.isCustom);
    saveKnowledgeData();
    renderKnowledgeTab();
    showToast('Custom articles cleared.', 'info');
  }
}

/**
 * Filter & Render Knowledge Articles
 */
function filterKnowledgeArticles() {
  let filtered = [...knowledgeBase];

  // Category Filter
  if (activeKnowledgeCategory !== 'all') {
    filtered = filtered.filter(k => k.category === activeKnowledgeCategory);
  }

  // Tag Filter
  if (selectedKnowledgeTag) {
    filtered = filtered.filter(k => k.tags && k.tags.includes(selectedKnowledgeTag));
  }

  // Search Query
  if (knowledgeSearchQuery) {
    const q = knowledgeSearchQuery.toLowerCase().trim();
    filtered = filtered.filter(k => {
      const titleMatch = (k.title || '').toLowerCase().includes(q);
      const summaryMatch = (k.summary || '').toLowerCase().includes(q);
      const decisionMatch = (k.decisionImpact || '').toLowerCase().includes(q);
      const tagMatch = k.tags && k.tags.some(t => t.toLowerCase().includes(q));
      const authorMatch = (k.author || '').toLowerCase().includes(q);
      const stepsMatch = Array.isArray(k.actionSteps) ? k.actionSteps.some(s => s.toLowerCase().includes(q)) : (k.actionSteps || '').toLowerCase().includes(q);
      return titleMatch || summaryMatch || decisionMatch || tagMatch || authorMatch || stepsMatch;
    });
  }

  return filtered;
}

function renderKnowledgeTab() {
  const container = document.getElementById('kb-cards-grid');
  if (!container) return;

  updateKnowledgePillCounts();

  const filtered = filterKnowledgeArticles();
  
  // Update header summary
  const summaryEl = document.getElementById('kb-results-summary');
  if (summaryEl) {
    if (knowledgeSearchQuery) {
      summaryEl.textContent = `Search results for "${knowledgeSearchQuery}"`;
    } else if (selectedKnowledgeTag) {
      summaryEl.textContent = `Filtered by tag #${selectedKnowledgeTag}`;
    } else if (activeKnowledgeCategory !== 'all') {
      const catNames = {
        pgr: 'PGR Regulation & GDD',
        clipping: 'Clipping Yields & Pacing',
        weather: 'Weather & Growth Models',
        soil: 'Soil Chemistry & Agrovista',
        disease: 'Fungal Disease & IPM',
        nutrition: 'Nutrition & Fertilization',
        seed: 'Seed & Grass Anatomy',
        renovation: 'Renovation & Cultural Ops',
        custom: 'Custom Grounds Playbooks'
      };
      summaryEl.textContent = `Category: ${catNames[activeKnowledgeCategory] || activeKnowledgeCategory}`;
    } else {
      summaryEl.textContent = 'Showing all knowledge articles';
    }
  }

  const countBadge = document.getElementById('kb-total-count');
  if (countBadge) {
    countBadge.textContent = `${filtered.length} Guide${filtered.length === 1 ? '' : 's'}`;
  }

  // Active filter chips
  renderKnowledgeActiveFilterChips();

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full text-center py-5 text-muted">
        <i class="fa-solid fa-book-open text-4xl mb-3 text-muted"></i>
        <h4 class="text-white">No knowledge articles match your criteria</h4>
        <p class="text-sm">Try clearing your search query or selecting a different category pill.</p>
        <button class="btn btn-sm btn-outline mt-2" onclick="resetKnowledgeFilters()">Reset All Filters</button>
      </div>
    `;
    return;
  }

  const categoryMeta = {
    pgr: { label: 'PGR & GDD', badgeClass: 'badge-purple', icon: 'fa-stopwatch' },
    clipping: { label: 'Clipping Yields', badgeClass: 'badge-ideal', icon: 'fa-scissors' },
    weather: { label: 'Weather & GP', badgeClass: 'badge-cyan', icon: 'fa-cloud-sun' },
    soil: { label: 'Soil & Agrovista', badgeClass: 'badge-amber', icon: 'fa-flask-vial' },
    disease: { label: 'Disease & IPM', badgeClass: 'badge-high', icon: 'fa-shield-virus' },
    nutrition: { label: 'Nutrition & Pacing', badgeClass: 'badge-ideal', icon: 'fa-seedling' },
    seed: { label: 'Seed & Anatomy', badgeClass: 'badge-cyan', icon: 'fa-dna' },
    renovation: { label: 'Renovation & Ops', badgeClass: 'badge-amber', icon: 'fa-tractor' },
    custom: { label: 'Custom Playbook', badgeClass: 'badge-purple', icon: 'fa-user-pen' }
  };

  container.innerHTML = filtered.map(k => {
    const meta = categoryMeta[k.category] || { label: k.category, badgeClass: 'badge-intermediate', icon: 'fa-book' };
    const metricTags = (k.relatedMetrics || []).map(m => `<span class="kb-metric-badge">${m}</span>`).join('');
    const snippet = (k.summary || '').length > 130 ? (k.summary.slice(0, 130) + '...') : k.summary;
    const decisionSnippet = (k.decisionImpact || '').length > 115 ? (k.decisionImpact.slice(0, 115) + '...') : k.decisionImpact;

    return `
      <div class="kb-card" id="card-${k.id}">
        <div class="kb-card-header">
          <span class="badge ${meta.badgeClass}">
            <i class="fa-solid ${meta.icon} me-1"></i> ${meta.label}
          </span>
          <span class="text-xs text-muted">${k.date || '2026'}</span>
        </div>

        <h4 class="kb-card-title">${k.title}</h4>
        <p class="kb-card-snippet">${snippet}</p>

        <div class="kb-decision-snippet">
          <span class="text-xs text-amber font-weight-bold"><i class="fa-solid fa-lightbulb me-1"></i> Pitch Rule:</span>
          <span class="text-xs text-muted ms-1">${decisionSnippet}</span>
        </div>

        <div class="kb-card-metric-tags">
          ${metricTags}
        </div>

        <div class="kb-card-footer">
          <span class="kb-read-time"><i class="fa-regular fa-clock"></i> ${k.readTime || '3 min read'}</span>
          <div class="kb-card-actions">
            <button class="btn btn-xs btn-outline" onclick="openKnowledgeReaderModal('${k.id}')">
              <i class="fa-solid fa-book-open text-cyan"></i> Read Guide
            </button>
            <button class="btn-icon btn-edit" title="Edit Article" onclick="openKnowledgeModal('${k.id}')">
              <i class="fa-solid fa-pen-to-square"></i>
            </button>
            ${k.isCustom ? `
              <button class="btn-icon btn-delete" title="Delete Article" onclick="deleteKnowledgeEntry('${k.id}')">
                <i class="fa-solid fa-trash-can"></i>
              </button>
            ` : ''}
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function updateKnowledgePillCounts() {
  const counts = {
    all: knowledgeBase.length,
    pgr: 0, clipping: 0, weather: 0, soil: 0, disease: 0, nutrition: 0, seed: 0, renovation: 0, custom: 0
  };

  knowledgeBase.forEach(k => {
    if (counts[k.category] !== undefined) {
      counts[k.category]++;
    }
  });

  Object.keys(counts).forEach(cat => {
    const el = document.getElementById(`pill-count-${cat}`);
    if (el) el.textContent = counts[cat];
  });
}

function renderKnowledgeActiveFilterChips() {
  const container = document.getElementById('kb-active-filters-container');
  if (!container) return;

  const chips = [];
  if (activeKnowledgeCategory !== 'all') {
    chips.push(`<span class="badge badge-purple d-flex align-items-center gap-1">Category: ${activeKnowledgeCategory} <i class="fa-solid fa-xmark cursor-pointer" onclick="setKnowledgeCategory('all')"></i></span>`);
  }
  if (selectedKnowledgeTag) {
    chips.push(`<span class="badge badge-cyan d-flex align-items-center gap-1">#${selectedKnowledgeTag} <i class="fa-solid fa-xmark cursor-pointer" onclick="clearKnowledgeTagFilter()"></i></span>`);
  }
  if (knowledgeSearchQuery) {
    chips.push(`<span class="badge badge-intermediate d-flex align-items-center gap-1">"${knowledgeSearchQuery}" <i class="fa-solid fa-xmark cursor-pointer" onclick="clearKnowledgeSearch()"></i></span>`);
  }

  container.innerHTML = chips.join('');
}

function setKnowledgeCategory(cat) {
  activeKnowledgeCategory = cat;
  document.querySelectorAll('.kb-pill-btn').forEach(b => {
    b.classList.toggle('active', b.getAttribute('data-category') === cat);
  });
  const sel = document.getElementById('kb-category-select');
  if (sel) sel.value = cat;
  renderKnowledgeTab();
}

function clearKnowledgeTagFilter() {
  selectedKnowledgeTag = null;
  document.querySelectorAll('.kb-tag-filter').forEach(t => t.classList.remove('active'));
  renderKnowledgeTab();
}

function clearKnowledgeSearch() {
  knowledgeSearchQuery = '';
  const input = document.getElementById('kb-search-input');
  if (input) input.value = '';
  document.getElementById('btn-clear-kb-search')?.classList.add('hidden');
  renderKnowledgeTab();
}

function resetKnowledgeFilters() {
  activeKnowledgeCategory = 'all';
  selectedKnowledgeTag = null;
  knowledgeSearchQuery = '';
  const input = document.getElementById('kb-search-input');
  if (input) input.value = '';
  document.getElementById('btn-clear-kb-search')?.classList.add('hidden');
  document.querySelectorAll('.kb-pill-btn').forEach(b => b.classList.toggle('active', b.getAttribute('data-category') === 'all'));
  document.querySelectorAll('.kb-tag-filter').forEach(t => t.classList.remove('active'));
  const sel = document.getElementById('kb-category-select');
  if (sel) sel.value = 'all';
  renderKnowledgeTab();
}

/**
 * Knowledge Reader Modal
 */
function openKnowledgeReaderModal(articleId) {
  const article = knowledgeBase.find(k => k.id === articleId);
  if (!article) return;

  activeReadingArticleId = articleId;
  const modal = document.getElementById('knowledge-reader-modal');
  if (!modal) return;

  document.getElementById('reader-title').textContent = article.title;
  document.getElementById('reader-category-badge').textContent = article.category.toUpperCase();
  document.getElementById('reader-meta-info').textContent = `${article.author || 'Agronomy Team'} | ${article.date || '2026'} | ${article.readTime || '3 min read'}`;

  // Summary
  document.getElementById('reader-summary').innerHTML = `<p class="m-0">${article.summary}</p>`;

  // Decision Impact
  document.getElementById('reader-decision-impact').innerHTML = `
    <p class="m-0 font-weight-500">${(article.decisionImpact || '').replace(/\n/g, '<br>')}</p>
  `;

  // Action Steps Checklist
  const steps = Array.isArray(article.actionSteps) ? article.actionSteps : (article.actionSteps || '').split('\n').filter(s => s.trim().length > 0);
  document.getElementById('reader-action-steps').innerHTML = steps.map(s => `
    <div class="kb-checklist-item">
      <i class="fa-solid fa-circle-check"></i>
      <span>${s.replace(/^[0-9]+\.\s*/, '')}</span>
    </div>
  `).join('');

  // Target Threshold
  document.getElementById('reader-target-threshold').innerHTML = `
    <i class="fa-solid fa-bullseye me-2 text-amber"></i> <strong>Standard:</strong> ${article.targetThreshold || 'Refer to Agrovista & STRI benchmarks.'}
  `;

  // Related Metrics
  const metricNav = {
    clipVol: { label: 'Clipping Yields', tab: 'tracker', icon: 'fa-scissors' },
    estTotalL: { label: 'Total Liters', tab: 'tracker', icon: 'fa-bucket' },
    gdd0: { label: 'PGR GDD Accumulator', tab: 'weather', icon: 'fa-stopwatch' },
    tempAvg: { label: 'Weather Hub', tab: 'weather', icon: 'fa-cloud-sun' },
    soilTemp: { label: 'Rootzone Soil Temp', tab: 'weather', icon: 'fa-temperature-half' },
    rainfall: { label: 'Rainfall & Deficit', tab: 'weather', icon: 'fa-cloud-rain' },
    et0: { label: 'Evapotranspiration', tab: 'weather', icon: 'fa-droplet' },
    potassium: { label: 'Soil Potassium (K)', tab: 'soil', icon: 'fa-flask' },
    ph: { label: 'Soil pH', tab: 'soil', icon: 'fa-flask-vial' },
    diseaseRisks: { label: 'Disease Risk Matrix', tab: 'weather', icon: 'fa-shield-virus' }
  };

  const relMetrics = article.relatedMetrics || [];
  document.getElementById('reader-related-metrics').innerHTML = relMetrics.map(m => {
    const nav = metricNav[m] || { label: m, tab: 'dashboard', icon: 'fa-chart-pie' };
    return `
      <button class="btn btn-xs btn-outline" onclick="closeKnowledgeReaderModal(); switchTab('${nav.tab}');">
        <i class="fa-solid ${nav.icon} text-cyan me-1"></i> View ${nav.label}
      </button>
    `;
  }).join('');

  // Tags
  const tags = article.tags || [];
  document.getElementById('reader-tags').innerHTML = tags.map(t => `
    <span class="badge kb-tag-filter" onclick="closeKnowledgeReaderModal(); setKnowledgeTagFilter('${t}');">#${t}</span>
  `).join('');

  // Delete button visibility
  const delBtn = document.getElementById('btn-delete-current-article');
  if (delBtn) {
    delBtn.style.display = article.isCustom ? 'inline-flex' : 'none';
  }

  modal.classList.add('open');
}

function closeKnowledgeReaderModal() {
  const modal = document.getElementById('knowledge-reader-modal');
  if (modal) modal.classList.remove('open');
  activeReadingArticleId = null;
}

function setKnowledgeTagFilter(tag) {
  selectedKnowledgeTag = tag;
  document.querySelectorAll('.kb-tag-filter').forEach(t => {
    t.classList.toggle('active', t.getAttribute('data-tag') === tag);
  });
  renderKnowledgeTab();
}

/**
 * Knowledge Authoring & Edit Modal
 */
function openKnowledgeModal(articleId = null) {
  const modal = document.getElementById('knowledge-modal');
  if (!modal) return;

  const titleEl = document.getElementById('knowledge-modal-title');
  const idInput = document.getElementById('knowledge-entry-id');

  if (articleId) {
    const article = knowledgeBase.find(k => k.id === articleId);
    if (article) {
      if (titleEl) titleEl.innerHTML = `<i class="fa-solid fa-pen-to-square text-cyan"></i> Edit Knowledge Guide`;
      if (idInput) idInput.value = article.id;
      document.getElementById('kb-input-title').value = article.title;
      document.getElementById('kb-input-category').value = article.category;
      document.getElementById('kb-input-author').value = article.author || '';
      document.getElementById('kb-input-target-threshold').value = article.targetThreshold || '';
      document.getElementById('kb-input-summary').value = article.summary;
      document.getElementById('kb-input-decision-impact').value = article.decisionImpact || '';
      document.getElementById('kb-input-action-steps').value = Array.isArray(article.actionSteps) ? article.actionSteps.join('\n') : (article.actionSteps || '');
      document.getElementById('kb-input-related-metrics').value = (article.relatedMetrics || []).join(', ');
      document.getElementById('kb-input-tags').value = (article.tags || []).join(', ');
    }
  } else {
    if (titleEl) titleEl.innerHTML = `<i class="fa-solid fa-feather-pointed text-emerald"></i> Add Knowledge Base Guide`;
    document.getElementById('knowledge-form').reset();
    if (idInput) idInput.value = '';
    document.getElementById('kb-input-author').value = 'Grounds Management Team';
    document.getElementById('kb-input-category').value = 'custom';
  }

  updateKnowledgeModalPreview();
  modal.classList.add('open');
}

function closeKnowledgeModal() {
  const modal = document.getElementById('knowledge-modal');
  if (modal) modal.classList.remove('open');
}

function updateKnowledgeModalPreview() {
  const title = document.getElementById('kb-input-title')?.value || 'Guide Title';
  const category = document.getElementById('kb-input-category')?.value || 'custom';
  const summary = document.getElementById('kb-input-summary')?.value || 'Summary preview will appear here...';
  const decision = document.getElementById('kb-input-decision-impact')?.value || 'Decision rule preview...';
  const metricsRaw = document.getElementById('kb-input-related-metrics')?.value || 'clipVol, gdd0';

  const categoryMeta = {
    pgr: { label: 'PGR & GDD', badgeClass: 'badge-purple', icon: 'fa-stopwatch' },
    clipping: { label: 'Clipping Yields', badgeClass: 'badge-ideal', icon: 'fa-scissors' },
    weather: { label: 'Weather & GP', badgeClass: 'badge-cyan', icon: 'fa-cloud-sun' },
    soil: { label: 'Soil & Agrovista', badgeClass: 'badge-amber', icon: 'fa-flask-vial' },
    disease: { label: 'Disease & IPM', badgeClass: 'badge-high', icon: 'fa-shield-virus' },
    nutrition: { label: 'Nutrition & Pacing', badgeClass: 'badge-ideal', icon: 'fa-seedling' },
    seed: { label: 'Seed & Anatomy', badgeClass: 'badge-cyan', icon: 'fa-dna' },
    renovation: { label: 'Renovation & Ops', badgeClass: 'badge-amber', icon: 'fa-tractor' },
    custom: { label: 'Custom Playbook', badgeClass: 'badge-purple', icon: 'fa-user-pen' }
  };

  const meta = categoryMeta[category] || { label: category, badgeClass: 'badge-intermediate', icon: 'fa-book' };

  const previewTitle = document.getElementById('preview-title');
  if (previewTitle) previewTitle.textContent = title;
  const previewBadge = document.getElementById('preview-badge');
  if (previewBadge) {
    previewBadge.className = `badge ${meta.badgeClass}`;
    previewBadge.innerHTML = `<i class="fa-solid ${meta.icon} me-1"></i> ${meta.label}`;
  }
  const previewSummary = document.getElementById('preview-summary');
  if (previewSummary) previewSummary.textContent = summary.length > 110 ? (summary.slice(0, 110) + '...') : summary;
  const previewDecision = document.getElementById('preview-decision');
  if (previewDecision) previewDecision.textContent = decision.length > 95 ? (decision.slice(0, 95) + '...') : decision;

  const metricsTagsEl = document.getElementById('preview-metric-tags');
  if (metricsTagsEl) {
    const tags = metricsRaw.split(',').map(m => m.trim()).filter(m => m.length > 0);
    metricsTagsEl.innerHTML = tags.map(t => `<span class="kb-metric-badge">${t}</span>`).join('') || '<span class="kb-metric-badge">clipVol</span>';
  }
}

function saveKnowledgeEntry(e) {
  if (e) e.preventDefault();

  const id = document.getElementById('knowledge-entry-id').value;
  const title = document.getElementById('kb-input-title').value.trim();
  const category = document.getElementById('kb-input-category').value;
  const author = document.getElementById('kb-input-author').value.trim() || 'Grounds Management Team';
  const targetThreshold = document.getElementById('kb-input-target-threshold').value.trim();
  const summary = document.getElementById('kb-input-summary').value.trim();
  const decisionImpact = document.getElementById('kb-input-decision-impact').value.trim();
  const actionStepsRaw = document.getElementById('kb-input-action-steps').value.trim();
  const relatedMetricsRaw = document.getElementById('kb-input-related-metrics').value.trim();
  const tagsRaw = document.getElementById('kb-input-tags').value.trim();

  if (!title || !summary || !decisionImpact) {
    showToast('Please fill in required title, summary, and decision impact.', 'warning');
    return;
  }

  const actionSteps = actionStepsRaw.split('\n').map(s => s.trim()).filter(s => s.length > 0);
  const relatedMetrics = relatedMetricsRaw.split(',').map(m => m.trim()).filter(m => m.length > 0);
  const tags = tagsRaw.split(',').map(t => t.trim().replace(/^#/, '')).filter(t => t.length > 0);

  const entry = {
    id: id || `kb-custom-${Date.now()}`,
    title,
    category,
    author,
    date: new Date().toISOString().split('T')[0],
    readTime: '3 min read',
    summary,
    decisionImpact,
    actionSteps,
    targetThreshold,
    relatedMetrics,
    tags,
    isCustom: true
  };

  if (id) {
    const idx = knowledgeBase.findIndex(k => k.id === id);
    if (idx >= 0) {
      knowledgeBase[idx] = entry;
    }
  } else {
    knowledgeBase.unshift(entry);
  }

  saveKnowledgeData();
  closeKnowledgeModal();
  renderKnowledgeTab();
  showToast(`Knowledge guide '${title}' saved successfully.`, 'success');
}

function deleteKnowledgeEntry(id) {
  const article = knowledgeBase.find(k => k.id === id);
  if (!article) return;

  if (confirm(`Are you sure you want to delete '${article.title}'?`)) {
    knowledgeBase = knowledgeBase.filter(k => k.id !== id);
    saveKnowledgeData();
    closeKnowledgeReaderModal();
    renderKnowledgeTab();
    showToast('Knowledge article deleted.', 'info');
  }
}

/**
 * Knowledge Base JSON Export & Import
 */
function exportKnowledgeJSON() {
  if (knowledgeBase.length === 0) {
    showToast('No knowledge articles to export.', 'warning');
    return;
  }

  const jsonStr = JSON.stringify(knowledgeBase, null, 2);
  const blob = new Blob([jsonStr], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', `TurfTrack_Knowledge_Library_${new Date().toISOString().split('T')[0]}.json`);
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  showToast('Knowledge library exported to JSON.', 'success');
}

function openKnowledgeImportModal() {
  const modal = document.getElementById('knowledge-import-modal');
  if (modal) modal.classList.add('open');
}

function closeKnowledgeImportModal() {
  const modal = document.getElementById('knowledge-import-modal');
  if (modal) modal.classList.remove('open');
}

function processKnowledgeJSONImport() {
  const text = document.getElementById('kb-json-paste')?.value.trim();
  if (!text) {
    showToast('Please paste valid JSON content.', 'warning');
    return;
  }

  try {
    const parsed = JSON.parse(text);
    if (!Array.isArray(parsed)) {
      showToast('Import content must be an array of knowledge articles.', 'danger');
      return;
    }

    let mergedCount = 0;
    parsed.forEach(item => {
      if (item.title && item.summary) {
        const itemObj = {
          ...item,
          id: item.id || `kb-custom-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
          isCustom: true
        };
        const idx = knowledgeBase.findIndex(k => k.id === itemObj.id);
        if (idx >= 0) {
          knowledgeBase[idx] = itemObj;
        } else {
          knowledgeBase.unshift(itemObj);
        }
        mergedCount++;
      }
    });

    saveKnowledgeData();
    closeKnowledgeImportModal();
    renderKnowledgeTab();
    showToast(`Successfully imported and merged ${mergedCount} knowledge articles.`, 'success');
  } catch (err) {
    console.error('KB Import Error:', err);
    showToast(`Invalid JSON syntax: ${err.message}`, 'danger');
  }
}

function importKnowledgeJSON() {
  openKnowledgeImportModal();
}

/**
 * Setup All Knowledge Base Event Listeners
 */
function setupKnowledgeEventListeners() {
  // Search Input
  const searchInput = document.getElementById('kb-search-input');
  const clearBtn = document.getElementById('btn-clear-kb-search');
  if (searchInput) {
    searchInput.addEventListener('input', e => {
      knowledgeSearchQuery = e.target.value.trim();
      if (clearBtn) clearBtn.classList.toggle('hidden', knowledgeSearchQuery.length === 0);
      renderKnowledgeTab();
    });
  }
  if (clearBtn) {
    clearBtn.addEventListener('click', clearKnowledgeSearch);
  }

  // Category Select Dropdown
  const catSelect = document.getElementById('kb-category-select');
  if (catSelect) {
    catSelect.addEventListener('change', e => {
      setKnowledgeCategory(e.target.value);
    });
  }

  // Category Pills
  document.querySelectorAll('.kb-pill-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const cat = btn.getAttribute('data-category');
      setKnowledgeCategory(cat);
    });
  });

  // Popular Tag Filters
  document.querySelectorAll('.kb-tag-filter').forEach(tagEl => {
    tagEl.addEventListener('click', () => {
      const tag = tagEl.getAttribute('data-tag');
      if (selectedKnowledgeTag === tag) {
        clearKnowledgeTagFilter();
      } else {
        setKnowledgeTagFilter(tag);
      }
    });
  });

  // Quick Decision Matrix Toggle Button
  const btnMatrix = document.getElementById('btn-toggle-decision-matrix');
  const matrixCard = document.getElementById('kb-decision-matrix-card');
  if (btnMatrix && matrixCard) {
    btnMatrix.addEventListener('click', () => {
      const isHidden = matrixCard.style.display === 'none';
      matrixCard.style.display = isHidden ? 'block' : 'none';
      btnMatrix.classList.toggle('btn-primary', isHidden);
      btnMatrix.classList.toggle('btn-outline', !isHidden);
    });
  }

  // Add Knowledge Button
  document.getElementById('btn-add-knowledge')?.addEventListener('click', () => openKnowledgeModal());

  // Options Dropdown Menu Toggle
  const btnMenu = document.getElementById('btn-kb-options-menu');
  const dropdown = document.getElementById('kb-dropdown-menu');
  if (btnMenu && dropdown) {
    btnMenu.addEventListener('click', e => {
      e.stopPropagation();
      dropdown.classList.toggle('show');
    });
    document.addEventListener('click', () => dropdown.classList.remove('show'));
  }

  // Dropdown Items
  document.getElementById('btn-export-kb-json')?.addEventListener('click', exportKnowledgeJSON);
  document.getElementById('btn-import-kb-json')?.addEventListener('click', openKnowledgeImportModal);
  document.getElementById('btn-reset-default-kb')?.addEventListener('click', seedDemoKnowledgeData);
  document.getElementById('btn-clear-all-kb')?.addEventListener('click', clearCustomKnowledge);

  // Reader Modal Handlers
  document.getElementById('knowledge-reader-modal-close')?.addEventListener('click', closeKnowledgeReaderModal);
  document.getElementById('btn-close-reader-footer')?.addEventListener('click', closeKnowledgeReaderModal);
  document.getElementById('btn-edit-current-article')?.addEventListener('click', () => {
    if (activeReadingArticleId) {
      const idToEdit = activeReadingArticleId;
      closeKnowledgeReaderModal();
      openKnowledgeModal(idToEdit);
    }
  });
  document.getElementById('btn-delete-current-article')?.addEventListener('click', () => {
    if (activeReadingArticleId) {
      deleteKnowledgeEntry(activeReadingArticleId);
    }
  });

  // Authoring Modal Handlers
  document.getElementById('knowledge-modal-close')?.addEventListener('click', closeKnowledgeModal);
  document.getElementById('btn-cancel-knowledge-modal')?.addEventListener('click', closeKnowledgeModal);
  document.getElementById('knowledge-form')?.addEventListener('submit', saveKnowledgeEntry);

  // Live Authoring Preview Listeners
  const previewInputIds = ['kb-input-title', 'kb-input-category', 'kb-input-summary', 'kb-input-decision-impact', 'kb-input-related-metrics', 'kb-input-tags', 'kb-input-action-steps'];
  previewInputIds.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener('input', updateKnowledgeModalPreview);
      el.addEventListener('change', updateKnowledgeModalPreview);
    }
  });

  // Import Modal Handlers
  document.getElementById('knowledge-import-modal-close')?.addEventListener('click', closeKnowledgeImportModal);
  document.getElementById('btn-cancel-knowledge-import')?.addEventListener('click', closeKnowledgeImportModal);
  document.getElementById('btn-process-knowledge-import')?.addEventListener('click', processKnowledgeJSONImport);
  document.getElementById('btn-load-sample-kb-json')?.addEventListener('click', () => {
    const pasteArea = document.getElementById('kb-json-paste');
    if (pasteArea) {
      pasteArea.value = JSON.stringify([{
        title: "Winter Liquid Iron & Phosphite Hardening Protocol",
        category: "disease",
        author: "Head Groundsman Playbook",
        date: "2026-08-15",
        summary: "Applying low-rate soluble ferrous sulfate tank-mixed with potassium phosphite during autumn/winter suppresses Microdochium mycelium development while acidifying the phyllosphere.",
        decisionImpact: "When rootzone temperatures drop below 12°C and humidity exceeds 85%, foliar iron/phosphite increases cellular membrane thickness and reduces fungal penetration by 65%.",
        actionSteps: [
          "Apply 10–12 kg/ha soluble iron (FeSO4) in 500 L/ha water.",
          "Add 3.0 L/ha potassium phosphite elicitor.",
          "Spray when leaf blades are dry and rain is not forecast for 3 hours."
        ],
        targetThreshold: "Apply every 21 days between October and February",
        relatedMetrics: ["tempAvg", "humidity", "diseaseRisks"],
        tags: ["IronHardener", "Phosphite", "WinterCare", "Microdochium"]
      }], null, 2);
    }
  });
}

/* ==========================================================================
   TURF VISION OPTICS & HEALTH CAMERA HUB
   ========================================================================== */

let visionState = {
  activeLayer: 'original',
  inputMode: 'benchmarks',
  currentSampleId: 'elite_rye',
  imageSourceCanvas: null,
  rawPixelData: null,
  normalizedPixelData: null,
  metrics: null,
  calibration: {
    profile: 'overcast',
    ev: 0.0,
    gainR: 1.0,
    gainG: 1.0,
    gainB: 1.0,
    isSamplingRoi: false
  },
  thresholds: {
    hueMin: 55,
    hueMax: 115,
    satMin: 0.20,
    briMin: 0.15,
    briMax: 0.95
  },
  scannerActive: true,
  mediaStream: null,
  facingMode: 'environment',
  historyScans: []
};

// Seed Scans for History Log
const SEED_VISION_SCANS = [
  {
    id: 'vscan-1',
    timestamp: '2026-08-19 10:15',
    pitch: 'Pitch 1',
    zone: 'Center Circle',
    sampleNotes: 'Pre-Match Captains Inspection',
    coverPct: 97.4,
    dgci: 0.812,
    tissueN: 4.28,
    status: 'Optimal Emerald',
    thumbnail: ''
  },
  {
    id: 'vscan-2',
    timestamp: '2026-08-18 16:30',
    pitch: 'Pitch 1',
    zone: 'Goalmouth - South',
    sampleNotes: 'Post-Training High Wear Divot Survey',
    coverPct: 62.8,
    dgci: 0.584,
    tissueN: 3.42,
    status: 'Moderate Wear',
    thumbnail: ''
  },
  {
    id: 'vscan-3',
    timestamp: '2026-08-17 09:45',
    pitch: 'Pitch 2',
    zone: 'Left Wing',
    sampleNotes: 'Post-Fertilizer 48h Nitrogen Uptake',
    coverPct: 91.2,
    dgci: 0.745,
    tissueN: 4.03,
    status: 'High Tissue N',
    thumbnail: ''
  }
];

function initVisionModule() {
  loadVisionHistory();
  setupVisionEventListeners();
  loadBenchmarkSample('elite_rye');
}

function loadVisionHistory() {
  const saved = localStorage.getItem('turf_vision_scans');
  if (saved) {
    try {
      visionState.historyScans = JSON.parse(saved);
    } catch (e) {
      visionState.historyScans = [...SEED_VISION_SCANS];
    }
  } else {
    visionState.historyScans = [...SEED_VISION_SCANS];
    saveVisionHistoryStorage();
  }
}

function saveVisionHistoryStorage() {
  localStorage.setItem('turf_vision_scans', JSON.stringify(visionState.historyScans));
}

function setupVisionEventListeners() {
  // File Dropzone Listeners
  const dropzone = document.getElementById('vision-dropzone');
  const fileInput = document.getElementById('vision-file-input');

  if (dropzone && fileInput) {
    dropzone.addEventListener('dragover', (e) => {
      e.preventDefault();
      dropzone.classList.add('dragover');
    });

    dropzone.addEventListener('dragleave', () => {
      dropzone.classList.remove('dragover');
    });

    dropzone.addEventListener('drop', (e) => {
      e.preventDefault();
      dropzone.classList.remove('dragover');
      if (e.dataTransfer.files && e.dataTransfer.files[0]) {
        handleVisionFileUpload(e.dataTransfer.files[0]);
      }
    });

    fileInput.addEventListener('change', (e) => {
      if (e.target.files && e.target.files[0]) {
        handleVisionFileUpload(e.target.files[0]);
      }
    });
  }

  // Canvas Hover Loupe Inspector
  const canvas = document.getElementById('vision-canvas');
  if (canvas) {
    canvas.addEventListener('mousemove', handleCanvasPixelProbe);
    canvas.addEventListener('mouseleave', hidePixelLoupe);
    canvas.addEventListener('click', handleCanvasRoiClick);
  }

  // Save Scan Button
  document.getElementById('btn-save-vision-scan')?.addEventListener('click', saveCurrentVisionScan);
}

// --------------------------------------------------------------------------
// Input Mode & Benchmark Handling
// --------------------------------------------------------------------------

function setVisionInputMode(mode) {
  visionState.inputMode = mode;
  document.querySelectorAll('.capture-pill').forEach(p => p.classList.remove('active'));
  document.getElementById(`pill-mode-${mode}`)?.classList.add('active');

  document.querySelectorAll('.vision-input-panel').forEach(p => p.style.display = 'none');
  const activePanel = document.getElementById(`vision-panel-${mode}`);
  if (activePanel) activePanel.style.display = 'block';

  if (mode !== 'camera' && visionState.mediaStream) {
    stopCameraStream();
  }
}

function loadBenchmarkSample(sampleId) {
  visionState.currentSampleId = sampleId;
  document.querySelectorAll('.benchmark-card-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('onclick')?.includes(sampleId));
  });

  const canvas = generateBenchmarkCanvas(sampleId, 640, 480);
  visionState.imageSourceCanvas = canvas;
  processTurfImage();
}

function handleVisionFileUpload(file) {
  if (!file.type.startsWith('image/')) {
    showToast('Please upload a valid image file (JPG, PNG, WebP).', 'warning');
    return;
  }

  const reader = new FileReader();
  reader.onload = (e) => {
    const img = new Image();
    img.onload = () => {
      const offCanvas = document.createElement('canvas');
      offCanvas.width = 640;
      offCanvas.height = 480;
      const ctx = offCanvas.getContext('2d');
      ctx.drawImage(img, 0, 0, 640, 480);
      visionState.imageSourceCanvas = offCanvas;
      processTurfImage();
      showToast(`Uploaded ${file.name} successfully analyzed!`, 'success');
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
}

// --------------------------------------------------------------------------
// WebRTC Camera Management
// --------------------------------------------------------------------------

async function toggleCameraStream() {
  const video = document.getElementById('vision-video');
  const toggleText = document.getElementById('camera-toggle-text');

  if (visionState.mediaStream) {
    stopCameraStream();
    if (toggleText) toggleText.textContent = 'Start Camera';
    showToast('Camera stopped.', 'info');
  } else {
    try {
      const constraints = {
        video: {
          facingMode: visionState.facingMode,
          width: { ideal: 1280 },
          height: { ideal: 720 }
        },
        audio: false
      };
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      visionState.mediaStream = stream;
      if (video) {
        video.srcObject = stream;
        video.play();
      }
      if (toggleText) toggleText.textContent = 'Stop Camera';
      showToast('Live Camera Stream active. Align over turf canopy.', 'success');
    } catch (err) {
      console.error('Camera access error:', err);
      showToast('Camera access denied or unavailable. You can use benchmark samples or upload photos.', 'danger');
    }
  }
}

function stopCameraStream() {
  if (visionState.mediaStream) {
    visionState.mediaStream.getTracks().forEach(track => track.stop());
    visionState.mediaStream = null;
    const video = document.getElementById('vision-video');
    if (video) video.srcObject = null;
    const toggleText = document.getElementById('camera-toggle-text');
    if (toggleText) toggleText.textContent = 'Start Camera';
  }
}

function switchCameraFacing() {
  visionState.facingMode = visionState.facingMode === 'environment' ? 'user' : 'environment';
  if (visionState.mediaStream) {
    stopCameraStream();
    toggleCameraStream();
  } else {
    showToast(`Camera mode set to: ${visionState.facingMode === 'environment' ? 'Rear / Field Camera' : 'Front Camera'}`, 'info');
  }
}

function captureCameraSnapshot() {
  const video = document.getElementById('vision-video');
  if (!video || !visionState.mediaStream || video.videoWidth === 0) {
    showToast('Camera stream is not active. Please start camera first.', 'warning');
    return;
  }

  const offCanvas = document.createElement('canvas');
  offCanvas.width = 640;
  offCanvas.height = 480;
  const ctx = offCanvas.getContext('2d');
  ctx.drawImage(video, 0, 0, 640, 480);

  visionState.imageSourceCanvas = offCanvas;
  processTurfImage();
  showToast('Frame captured and processed through optical analysis engine!', 'success');
}

// --------------------------------------------------------------------------
// Procedural Benchmark Turf Image Generator
// --------------------------------------------------------------------------

function generateBenchmarkCanvas(scenario, width = 640, height = 480) {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');

  // Base background
  ctx.fillStyle = '#0f1711';
  ctx.fillRect(0, 0, width, height);

  const imgData = ctx.createImageData(width, height);
  const data = imgData.data;

  // Scenario parameters
  let targetH = 125, targetS = 0.75, targetV = 0.55;
  let noiseAmp = 0.15, soilProb = 0.02, thatchProb = 0.01, weedProb = 0.005;

  if (scenario === 'chlorotic_nitrogen') {
    targetH = 78; targetS = 0.62; targetV = 0.65;
    soilProb = 0.05; thatchProb = 0.08; weedProb = 0.03;
  } else if (scenario === 'goalmouth_wear') {
    targetH = 120; targetS = 0.68; targetV = 0.50;
    soilProb = 0.38; thatchProb = 0.06; weedProb = 0.02;
  } else if (scenario === 'poa_weed') {
    targetH = 98; targetS = 0.60; targetV = 0.70;
    soilProb = 0.03; thatchProb = 0.02; weedProb = 0.18;
  } else if (scenario === 'drought_stress') {
    targetH = 45; targetS = 0.42; targetV = 0.48;
    soilProb = 0.12; thatchProb = 0.25; weedProb = 0.01;
  } else if (scenario === 'calibrated_card') {
    targetH = 126; targetS = 0.76; targetV = 0.54;
    soilProb = 0.02; thatchProb = 0.01; weedProb = 0.005;
  }

  // Center wear bias for goalmouth
  const centerX = width / 2;
  const centerY = height / 2;

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * 4;
      const distFromCenter = Math.sqrt((x - centerX) ** 2 + (y - centerY) ** 2) / (width / 2);

      let h = targetH + (Math.sin(x * 0.15) + Math.cos(y * 0.15)) * 12 + (Math.random() - 0.5) * 16;
      let s = targetS + (Math.sin(y * 0.08)) * 0.1 + (Math.random() - 0.5) * noiseAmp;
      let v = targetV + (Math.cos(x * 0.08)) * 0.1 + (Math.random() - 0.5) * noiseAmp;

      let r = 0, g = 0, b = 0;

      // Local wear probability modifier
      let localSoilProb = soilProb;
      if (scenario === 'goalmouth_wear' && distFromCenter < 0.65) {
        localSoilProb = 0.72 - distFromCenter * 0.4;
      }

      const rand = Math.random();
      if (rand < localSoilProb) {
        // Bare soil / sand topdressing
        const soilH = 34 + Math.random() * 12;
        const soilS = 0.35 + Math.random() * 0.3;
        const soilV = 0.32 + Math.random() * 0.25;
        const rgb = hsvToRgb(soilH, soilS, soilV);
        r = rgb.r; g = rgb.g; b = rgb.b;
      } else if (rand < localSoilProb + thatchProb) {
        // Dead thatch / straw
        const thatchH = 48 + Math.random() * 10;
        const thatchS = 0.45 + Math.random() * 0.2;
        const thatchV = 0.50 + Math.random() * 0.2;
        const rgb = hsvToRgb(thatchH, thatchS, thatchV);
        r = rgb.r; g = rgb.g; b = rgb.b;
      } else if (rand < localSoilProb + thatchProb + weedProb) {
        // Poa annua / weed cluster
        const weedH = 92 + Math.random() * 14;
        const weedS = 0.55 + Math.random() * 0.25;
        const weedV = 0.68 + Math.random() * 0.22;
        const rgb = hsvToRgb(weedH, weedS, weedV);
        r = rgb.r; g = rgb.g; b = rgb.b;
      } else {
        // Green Turf Blade
        h = Math.max(0, Math.min(360, h));
        s = Math.max(0, Math.min(1, s));
        v = Math.max(0, Math.min(1, v));
        const rgb = hsvToRgb(h, s, v);
        r = rgb.r; g = rgb.g; b = rgb.b;
      }

      data[idx] = r;
      data[idx + 1] = g;
      data[idx + 2] = b;
      data[idx + 3] = 255;
    }
  }

  ctx.putImageData(imgData, 0, 0);

  // Overlay Grass Blade Fiber Details
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
  ctx.lineWidth = 1;
  for (let i = 0; i < 400; i++) {
    const bx = Math.random() * width;
    const by = Math.random() * height;
    ctx.beginPath();
    ctx.moveTo(bx, by);
    ctx.lineTo(bx + (Math.random() - 0.5) * 14, by - Math.random() * 18);
    ctx.stroke();
  }

  // For Calibrated Card Scenario: Draw 18% Gray Card and Dark Green Reference Disk
  if (scenario === 'calibrated_card') {
    // 18% Neutral Gray Card Box (Top Left)
    const cardX = 35, cardY = 35, cardW = 90, cardH = 70;
    ctx.fillStyle = 'rgb(118, 118, 118)'; // 18% neutral reflectance standard
    ctx.fillRect(cardX, cardY, cardW, cardH);
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 1.5;
    ctx.strokeRect(cardX, cardY, cardW, cardH);

    ctx.fillStyle = '#fff';
    ctx.font = '10px "JetBrains Mono", monospace';
    ctx.fillText('18% GRAY', cardX + 14, cardY + 38);

    // Dark Green Standard Reference Disk
    const diskX = 80, diskY = 150, diskR = 30;
    ctx.beginPath();
    ctx.arc(diskX, diskY, diskR, 0, Math.PI * 2);
    ctx.fillStyle = 'rgb(35, 92, 48)';
    ctx.fill();
    ctx.strokeStyle = '#fff';
    ctx.stroke();

    ctx.fillStyle = '#fff';
    ctx.font = '9px "JetBrains Mono", monospace';
    ctx.fillText('DG-REF', diskX - 18, diskY + 3);
  }

  return canvas;
}

// --------------------------------------------------------------------------
// Color Space Conversions & Index Formulas
// --------------------------------------------------------------------------

function rgbToHsv(r, g, b) {
  r /= 255; g /= 255; b /= 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const diff = max - min;
  let h = 0;
  const s = max === 0 ? 0 : diff / max;
  const v = max;

  if (diff !== 0) {
    if (max === r) {
      h = 60 * (((g - b) / diff) % 6);
    } else if (max === g) {
      h = 60 * (((b - r) / diff) + 2);
    } else {
      h = 60 * (((r - g) / diff) + 4);
    }
    if (h < 0) h += 360;
  }
  return { h, s, v };
}

function hsvToRgb(h, s, v) {
  const c = v * s;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = v - c;
  let r = 0, g = 0, b = 0;

  if (h >= 0 && h < 60) { r = c; g = x; b = 0; }
  else if (h >= 60 && h < 120) { r = x; g = c; b = 0; }
  else if (h >= 120 && h < 180) { r = 0; g = c; b = x; }
  else if (h >= 180 && h < 240) { r = 0; g = x; b = c; }
  else if (h >= 240 && h < 300) { r = x; g = 0; b = c; }
  else { r = c; g = 0; b = x; }

  return {
    r: Math.round((r + m) * 255),
    g: Math.round((g + m) * 255),
    b: Math.round((b + m) * 255)
  };
}

function rgbToLab(r, g, b) {
  // sRGB to linear XYZ (D65 standard)
  let R = r / 255, G = g / 255, B = b / 255;
  R = R > 0.04045 ? Math.pow((R + 0.055) / 1.055, 2.4) : R / 12.92;
  G = G > 0.04045 ? Math.pow((G + 0.055) / 1.055, 2.4) : G / 12.92;
  B = B > 0.04045 ? Math.pow((B + 0.055) / 1.055, 2.4) : B / 12.92;

  let X = (R * 0.4124 + G * 0.3576 + B * 0.1805) / 0.95047;
  let Y = (R * 0.2126 + G * 0.7152 + B * 0.0722) / 1.00000;
  let Z = (R * 0.0193 + G * 0.1192 + B * 0.9505) / 1.08883;

  X = X > 0.008856 ? Math.pow(X, 1/3) : (7.787 * X) + 16/116;
  Y = Y > 0.008856 ? Math.pow(Y, 1/3) : (7.787 * Y) + 16/116;
  Z = Z > 0.008856 ? Math.pow(Z, 1/3) : (7.787 * Z) + 16/116;

  const L = Math.round((116 * Y) - 16);
  const a = Math.round(500 * (X - Y));
  const bVal = Math.round(200 * (Y - Z));
  return { L, a, b: bVal };
}

function calculateDGCI(h, s, v) {
  // DGCI formula: [ ( (Hue - 60) / 60 ) + (1 - Saturation) + (1 - Brightness) ] / 3
  const hTerm = (h - 60) / 60;
  const sTerm = 1 - s;
  const vTerm = 1 - v;
  const rawDGCI = (hTerm + sTerm + vTerm) / 3;
  return Math.max(0, Math.min(1, rawDGCI));
}

function calculateExG(r, g, b) {
  // Excess Green Index: 2G - R - B
  return (2 * g) - r - b;
}

function calculateVARI(r, g, b) {
  // Visible Atmospherically Resistant Index: (G - R) / (G + R - B)
  const denom = (g + r - b);
  if (Math.abs(denom) < 0.001) return 0;
  return (g - r) / denom;
}

function calculateGLI(r, g, b) {
  // Green Leaf Index: (2G - R - B) / (2G + R + B)
  const denom = (2 * g + r + b);
  if (Math.abs(denom) < 0.001) return 0;
  return ((2 * g) - r - b) / denom;
}

// --------------------------------------------------------------------------
// Optical Calibration & Gain Normalization
// --------------------------------------------------------------------------

function updateCalibrationEV(val) {
  visionState.calibration.ev = parseFloat(val);
  const disp = document.getElementById('calib-ev-val');
  if (disp) disp.textContent = `${parseFloat(val) > 0 ? '+' : ''}${parseFloat(val).toFixed(1)} EV`;
  processTurfImage();
}

function applyCalibrationSettings() {
  const profile = document.getElementById('calib-light-profile')?.value || 'overcast';
  visionState.calibration.profile = profile;

  // Preset gain adjustments based on lighting standard profile
  if (profile === 'direct_sun') {
    // Reduce excess red/warmth from direct sunlight, increase blue/green response
    visionState.calibration.gainR = 0.92;
    visionState.calibration.gainG = 1.00;
    visionState.calibration.gainB = 1.08;
  } else if (profile === 'shadow') {
    // Compensate for blue shadow cast from stadium stands
    visionState.calibration.gainR = 1.12;
    visionState.calibration.gainG = 1.00;
    visionState.calibration.gainB = 0.88;
  } else if (profile === 'light_box') {
    // Controlled Turf-Set enclosure standard 5000K
    visionState.calibration.gainR = 1.00;
    visionState.calibration.gainG = 1.00;
    visionState.calibration.gainB = 1.00;
  } else {
    // Neutral Overcast standard (7500K)
    visionState.calibration.gainR = 1.00;
    visionState.calibration.gainG = 1.00;
    visionState.calibration.gainB = 1.00;
  }

  updateGainReadouts();
  processTurfImage();
}

function toggleRoiSamplingMode() {
  visionState.calibration.isSamplingRoi = !visionState.calibration.isSamplingRoi;
  const btn = document.getElementById('btn-pick-roi');
  const btnText = document.getElementById('roi-btn-text');

  if (visionState.calibration.isSamplingRoi) {
    btn?.classList.add('btn-emerald-solid');
    btn?.classList.remove('btn-outline');
    if (btnText) btnText.textContent = 'Click on 18% Gray Card / Disc';
    showToast('Click anywhere on the calibration target (e.g. 18% gray card) on the canvas to auto-balance.', 'info');
  } else {
    btn?.classList.remove('btn-emerald-solid');
    btn?.classList.add('btn-outline');
    if (btnText) btnText.textContent = 'Sample 18% Gray ROI';
  }
}

function handleCanvasRoiClick(e) {
  if (!visionState.calibration.isSamplingRoi || !visionState.imageSourceCanvas) return;

  const canvas = document.getElementById('vision-canvas');
  const rect = canvas.getBoundingClientRect();
  const scaleX = canvas.width / rect.width;
  const scaleY = canvas.height / rect.height;

  const clickX = Math.round((e.clientX - rect.left) * scaleX);
  const clickY = Math.round((e.clientY - rect.top) * scaleY);

  // Sample 20x20 window around click
  const ctx = visionState.imageSourceCanvas.getContext('2d');
  const startX = Math.max(0, clickX - 10);
  const startY = Math.max(0, clickY - 10);
  const sampleW = Math.min(20, canvas.width - startX);
  const sampleH = Math.min(20, canvas.height - startY);

  const sampleData = ctx.getImageData(startX, startY, sampleW, sampleH).data;
  let sumR = 0, sumG = 0, sumB = 0, count = 0;

  for (let i = 0; i < sampleData.length; i += 4) {
    sumR += sampleData[i];
    sumG += sampleData[i + 1];
    sumB += sampleData[i + 2];
    count++;
  }

  if (count > 0) {
    const avgR = sumR / count;
    const avgG = sumG / count;
    const avgB = sumB / count;

    // Standard 18% Neutral Gray target is 118 in sRGB
    const targetVal = (avgR + avgG + avgB) / 3 || 118;

    visionState.calibration.gainR = parseFloat((targetVal / Math.max(1, avgR)).toFixed(2));
    visionState.calibration.gainG = parseFloat((targetVal / Math.max(1, avgG)).toFixed(2));
    visionState.calibration.gainB = parseFloat((targetVal / Math.max(1, avgB)).toFixed(2));

    updateGainReadouts();
    toggleRoiSamplingMode();
    processTurfImage();
    showToast(`ROI Calibrated! Gains applied: kR=${visionState.calibration.gainR}, kG=${visionState.calibration.gainG}, kB=${visionState.calibration.gainB}`, 'success');
  }
}

function resetCalibrationGains() {
  visionState.calibration.gainR = 1.00;
  visionState.calibration.gainG = 1.00;
  visionState.calibration.gainB = 1.00;
  visionState.calibration.ev = 0.0;
  const slider = document.getElementById('calib-ev-slider');
  if (slider) slider.value = 0.0;
  const evVal = document.getElementById('calib-ev-val');
  if (evVal) evVal.textContent = '0.0 EV';
  updateGainReadouts();
  processTurfImage();
  showToast('Calibration gains reset to neutral 1.00.', 'info');
}

function updateGainReadouts() {
  const kr = document.getElementById('gain-kr');
  const kg = document.getElementById('gain-kg');
  const kb = document.getElementById('gain-kb');
  if (kr) kr.textContent = visionState.calibration.gainR.toFixed(2);
  if (kg) kg.textContent = visionState.calibration.gainG.toFixed(2);
  if (kb) kb.textContent = visionState.calibration.gainB.toFixed(2);
}

// --------------------------------------------------------------------------
// Dynamic Segmentation Threshold Controls
// --------------------------------------------------------------------------

function updateSegmentationThresholds() {
  const hMin = parseInt(document.getElementById('slider-hue-min')?.value || 55);
  const hMax = parseInt(document.getElementById('slider-hue-max')?.value || 115);
  const sMin = parseInt(document.getElementById('slider-sat-min')?.value || 20) / 100;
  const bMin = parseInt(document.getElementById('slider-bri-min')?.value || 15) / 100;
  const bMax = parseInt(document.getElementById('slider-bri-max')?.value || 95) / 100;

  visionState.thresholds.hueMin = hMin;
  visionState.thresholds.hueMax = hMax;
  visionState.thresholds.satMin = sMin;
  visionState.thresholds.briMin = bMin;
  visionState.thresholds.briMax = bMax;

  document.getElementById('val-hue-min').textContent = `${hMin}°`;
  document.getElementById('val-hue-max').textContent = `${hMax}°`;
  document.getElementById('val-sat-min').textContent = `${Math.round(sMin * 100)}%`;
  document.getElementById('val-bri-range').textContent = `${Math.round(bMin * 100)}% – ${Math.round(bMax * 100)}%`;

  processTurfImage();
}

function resetSegmentationThresholds() {
  visionState.thresholds = {
    hueMin: 55,
    hueMax: 115,
    satMin: 0.20,
    briMin: 0.15,
    briMax: 0.95
  };

  const shMin = document.getElementById('slider-hue-min');
  const shMax = document.getElementById('slider-hue-max');
  const ssMin = document.getElementById('slider-sat-min');
  const sbMin = document.getElementById('slider-bri-min');
  const sbMax = document.getElementById('slider-bri-max');

  if (shMin) shMin.value = 55;
  if (shMax) shMax.value = 115;
  if (ssMin) ssMin.value = 20;
  if (sbMin) sbMin.value = 15;
  if (sbMax) sbMax.value = 95;

  document.getElementById('val-hue-min').textContent = '55°';
  document.getElementById('val-hue-max').textContent = '115°';
  document.getElementById('val-sat-min').textContent = '20%';
  document.getElementById('val-bri-range').textContent = '15% – 95%';

  processTurfImage();
  showToast('Thresholds restored to agronomic standards (55°–115°, S>20%).', 'info');
}

// --------------------------------------------------------------------------
// Core Optical Analysis & Semantic Pixel Segmentation Engine
// --------------------------------------------------------------------------

function processTurfImage() {
  if (!visionState.imageSourceCanvas) return;

  const t0 = performance.now();
  const width = visionState.imageSourceCanvas.width;
  const height = visionState.imageSourceCanvas.height;
  const ctx = visionState.imageSourceCanvas.getContext('2d');
  const rawData = ctx.getImageData(0, 0, width, height);
  const src = rawData.data;

  // Normalized pixel buffers
  const totalPixels = width * height;
  const normData = new Uint8ClampedArray(src.length);
  const classification = new Uint8Array(totalPixels); // 1: Turf, 2: Soil, 3: Thatch, 4: Weed
  const dgciArray = new Float32Array(totalPixels);

  const evFactor = Math.pow(2, visionState.calibration.ev);
  const kR = visionState.calibration.gainR * evFactor;
  const kG = visionState.calibration.gainG * evFactor;
  const kB = visionState.calibration.gainB * evFactor;

  const { hueMin, hueMax, satMin, briMin, briMax } = visionState.thresholds;

  let greenTurfCount = 0;
  let soilCount = 0;
  let thatchCount = 0;
  let weedCount = 0;

  let sumDGCI = 0;
  let sumExG = 0;
  let sumVARI = 0;
  let sumGLI = 0;
  let sumHue = 0;
  let sumLabL = 0, sumLaba = 0, sumLabb = 0;

  for (let i = 0; i < src.length; i += 4) {
    const pxIdx = i / 4;

    // Apply optical gain & EV normalization
    const r = Math.min(255, Math.max(0, Math.round(src[i] * kR)));
    const g = Math.min(255, Math.max(0, Math.round(src[i + 1] * kG)));
    const b = Math.min(255, Math.max(0, Math.round(src[i + 2] * kB)));
    const a = src[i + 3];

    normData[i] = r;
    normData[i + 1] = g;
    normData[i + 2] = b;
    normData[i + 3] = a;

    const { h, s, v } = rgbToHsv(r, g, b);
    const dgci = calculateDGCI(h, s, v);
    dgciArray[pxIdx] = dgci;

    // Threshold Segmentation Filter
    const isGreenTurf = (h >= hueMin && h <= hueMax && s >= satMin && v >= briMin && v <= briMax);

    if (isGreenTurf) {
      classification[pxIdx] = 1; // Live Green Turf
      greenTurfCount++;
      sumDGCI += dgci;
      sumExG += calculateExG(r, g, b);
      sumVARI += calculateVARI(r, g, b);
      sumGLI += calculateGLI(r, g, b);
      sumHue += h;

      const lab = rgbToLab(r, g, b);
      sumLabL += lab.L;
      sumLaba += lab.a;
      sumLabb += lab.b;
    } else {
      // Non-turf classification
      if (h < 55 && s > 0.15 && v < 0.65) {
        classification[pxIdx] = 2; // Bare Soil / Sand
        soilCount++;
      } else if (h < 55 || s < satMin) {
        classification[pxIdx] = 3; // Dead Thatch / Straw
        thatchCount++;
      } else {
        classification[pxIdx] = 4; // Weed / Off-type
        weedCount++;
      }
    }
  }

  // Fractional Green Canopy Cover (FGCC %)
  const coverPct = Number(((greenTurfCount / totalPixels) * 100).toFixed(1));
  const soilPct = Number(((soilCount / totalPixels) * 100).toFixed(1));
  const thatchPct = Number(((thatchCount / totalPixels) * 100).toFixed(1));
  const weedPct = Number(((weedCount / totalPixels) * 100).toFixed(1));

  // Mean Indices
  const meanDGCI = greenTurfCount > 0 ? Number((sumDGCI / greenTurfCount).toFixed(3)) : 0;
  const meanExG = greenTurfCount > 0 ? Number((sumExG / greenTurfCount).toFixed(1)) : 0;
  const meanVARI = greenTurfCount > 0 ? Number((sumVARI / greenTurfCount).toFixed(3)) : 0;
  const meanGLI = greenTurfCount > 0 ? Number((sumGLI / greenTurfCount).toFixed(3)) : 0;
  const meanHue = greenTurfCount > 0 ? Number((sumHue / greenTurfCount).toFixed(1)) : 0;

  const meanLab = {
    L: greenTurfCount > 0 ? Math.round(sumLabL / greenTurfCount) : 0,
    a: greenTurfCount > 0 ? Math.round(sumLaba / greenTurfCount) : 0,
    b: greenTurfCount > 0 ? Math.round(sumLabb / greenTurfCount) : 0
  };

  // Uniformity (Standard Deviation)
  let sumSqDiff = 0;
  for (let i = 0; i < totalPixels; i++) {
    if (classification[i] === 1) {
      sumSqDiff += Math.pow(dgciArray[i] - meanDGCI, 2);
    }
  }
  const variance = greenTurfCount > 0 ? sumSqDiff / greenTurfCount : 0;
  const stdDev = Math.sqrt(variance);
  const cv = meanDGCI > 0 ? (stdDev / meanDGCI) : 0;
  const uniformityPct = Number((Math.max(0, 100 * (1 - cv * 0.8))).toFixed(1));

  // Estimated Tissue Nitrogen (N %)
  const estTissueN = Number((1.2 + 3.8 * meanDGCI).toFixed(2));

  visionState.normalizedPixelData = normData;
  visionState.classification = classification;
  visionState.dgciArray = dgciArray;
  visionState.metrics = {
    coverPct, soilPct, thatchPct, weedPct,
    greenTurfCount, soilCount, thatchCount, weedCount, totalPixels,
    meanDGCI, meanExG, meanVARI, meanGLI, meanHue, meanLab,
    uniformityPct, estTissueN
  };

  const t1 = performance.now();
  const renderTimeEl = document.getElementById('vision-render-time');
  if (renderTimeEl) renderTimeEl.innerHTML = `<i class="fa-solid fa-bolt"></i> ${Math.round(t1 - t0)} ms`;

  updateVisionUI();
  renderVisionCanvas();
}

// --------------------------------------------------------------------------
// Viewport Canvas Rendering Engine
// --------------------------------------------------------------------------

function setVisionLayer(layer) {
  visionState.activeLayer = layer;
  document.querySelectorAll('.layer-pill').forEach(p => {
    p.classList.toggle('active', p.dataset.layer === layer);
  });
  renderVisionCanvas();
}

function renderVisionCanvas() {
  const canvas = document.getElementById('vision-canvas');
  if (!canvas || !visionState.normalizedPixelData) return;

  const ctx = canvas.getContext('2d');
  const width = canvas.width;
  const height = canvas.height;
  const imgData = ctx.createImageData(width, height);
  const out = imgData.data;

  const norm = visionState.normalizedPixelData;
  const cls = visionState.classification;
  const dgci = visionState.dgciArray;
  const layer = visionState.activeLayer;

  for (let i = 0; i < norm.length; i += 4) {
    const px = i / 4;
    const r = norm[i], g = norm[i + 1], b = norm[i + 2];
    const isTurf = cls[px] === 1;

    if (layer === 'original') {
      out[i] = r; out[i + 1] = g; out[i + 2] = b; out[i + 3] = 255;
    } else if (layer === 'binary') {
      if (isTurf) {
        out[i] = 16; out[i + 1] = 185; out[i + 2] = 129; out[i + 3] = 255; // Vibrant Emerald
      } else {
        out[i] = 9; out[i + 1] = 14; out[i + 2] = 11; out[i + 3] = 255;   // Black Background
      }
    } else if (layer === 'segmentation') {
      const c = cls[px];
      if (c === 1) {
        out[i] = 16; out[i + 1] = 185; out[i + 2] = 129; out[i + 3] = 255; // Live Turf
      } else if (c === 2) {
        out[i] = 217; out[i + 1] = 119; out[i + 2] = 6; out[i + 3] = 255;  // Soil / Sand (Amber)
      } else if (c === 3) {
        out[i] = 202; out[i + 1] = 138; out[i + 2] = 4; out[i + 3] = 255;  // Thatch (Yellow)
      } else {
        out[i] = 6; out[i + 1] = 182; out[i + 2] = 212; out[i + 3] = 255;  // Weeds (Cyan)
      }
    } else if (layer === 'dgci') {
      const val = dgci[px];
      // Smooth 6-step false color heatmap
      if (val >= 0.75) {
        out[i] = 4; out[i + 1] = 120; out[i + 2] = 87; out[i + 3] = 255;   // Deep Emerald
      } else if (val >= 0.65) {
        out[i] = 16; out[i + 1] = 185; out[i + 2] = 129; out[i + 3] = 255; // Emerald Green
      } else if (val >= 0.55) {
        out[i] = 132; out[i + 1] = 204; out[i + 2] = 22; out[i + 3] = 255; // Lime Green
      } else if (val >= 0.45) {
        out[i] = 234; out[i + 1] = 179; out[i + 2] = 8; out[i + 3] = 255;  // Yellow
      } else if (val >= 0.35) {
        out[i] = 249; out[i + 1] = 115; out[i + 2] = 22; out[i + 3] = 255; // Orange / Amber
      } else {
        out[i] = 239; out[i + 1] = 68; out[i + 2] = 68; out[i + 3] = 255;  // Crimson
      }
    } else if (layer === 'exg') {
      const exg = calculateExG(r, g, b);
      const intensity = Math.max(0, Math.min(255, Math.round(exg * 2 + 100)));
      out[i] = 0; out[i + 1] = intensity; out[i + 2] = Math.round(intensity * 0.8); out[i + 3] = 255;
    } else if (layer === 'vari') {
      const vari = calculateVARI(r, g, b);
      const intensity = Math.max(0, Math.min(255, Math.round((vari + 0.5) * 200)));
      out[i] = intensity; out[i + 1] = 30; out[i + 2] = Math.round(intensity * 0.9); out[i + 3] = 255;
    }
  }

  ctx.putImageData(imgData, 0, 0);
}

// --------------------------------------------------------------------------
// UI Updates & Advisory Synthesis
// --------------------------------------------------------------------------

function updateVisionUI() {
  const m = visionState.metrics;
  if (!m) return;

  // 1. Top KPI Cards
  document.getElementById('vision-kpi-cover').innerHTML = `${m.coverPct} <small>%</small>`;
  const coverBadge = document.getElementById('vision-badge-cover');
  if (coverBadge) {
    if (m.coverPct >= 92) {
      coverBadge.textContent = 'Optimal Dense Sward';
      coverBadge.className = 'badge badge-optimal';
    } else if (m.coverPct >= 80) {
      coverBadge.textContent = 'Moderate Canopy Cover';
      coverBadge.className = 'badge badge-intermediate';
    } else {
      coverBadge.textContent = 'High Wear / Thin Cover';
      coverBadge.className = 'badge badge-struggling';
    }
  }

  document.getElementById('vision-kpi-dgci').textContent = m.meanDGCI.toFixed(3);
  const dgciBadge = document.getElementById('vision-badge-dgci');
  if (dgciBadge) {
    if (m.meanDGCI >= 0.70) {
      dgciBadge.textContent = 'Optimal High-N Emerald';
      dgciBadge.className = 'badge badge-optimal';
    } else if (m.meanDGCI >= 0.55) {
      dgciBadge.textContent = 'Adequate Green';
      dgciBadge.className = 'badge badge-intermediate';
    } else if (m.meanDGCI >= 0.42) {
      dgciBadge.textContent = 'Moderate Chlorosis';
      dgciBadge.className = 'badge badge-healthy';
    } else {
      dgciBadge.textContent = 'Severe Stress / Yellowing';
      dgciBadge.className = 'badge badge-struggling';
    }
  }

  document.getElementById('vision-kpi-indices').innerHTML = `${m.meanExG > 0 ? '+' : ''}${m.meanExG} <span style="font-size: 0.9rem; color: var(--text-muted); font-weight: normal;">| VARI: ${m.meanVARI > 0 ? '+' : ''}${m.meanVARI}</span>`;
  document.getElementById('vision-kpi-nitrogen').innerHTML = `${m.estTissueN} <small>% N</small>`;
  document.getElementById('vision-kpi-uniformity').textContent = `Uniformity: ${m.uniformityPct}%`;

  // 2. Stacked Canopy Breakdown Bar & Legend
  document.getElementById('bar-seg-turf').style.width = `${m.coverPct}%`;
  document.getElementById('bar-seg-soil').style.width = `${m.soilPct}%`;
  document.getElementById('bar-seg-thatch').style.width = `${m.thatchPct}%`;
  document.getElementById('bar-seg-weed').style.width = `${m.weedPct}%`;

  document.getElementById('legend-val-turf').textContent = `${m.coverPct}%`;
  document.getElementById('legend-px-turf').textContent = `${m.greenTurfCount.toLocaleString()} px`;
  document.getElementById('legend-val-soil').textContent = `${m.soilPct}%`;
  document.getElementById('legend-px-soil').textContent = `${m.soilCount.toLocaleString()} px`;
  document.getElementById('legend-val-thatch').textContent = `${m.thatchPct}%`;
  document.getElementById('legend-px-thatch').textContent = `${m.thatchCount.toLocaleString()} px`;
  document.getElementById('legend-val-weed').textContent = `${m.weedPct}%`;
  document.getElementById('legend-px-weed').textContent = `${m.weedCount.toLocaleString()} px`;

  // 3. Vegetation Indices Table
  document.getElementById('tbl-dgci').textContent = m.meanDGCI.toFixed(3);
  document.getElementById('tbl-exg').textContent = `${m.meanExG > 0 ? '+' : ''}${m.meanExG}`;
  document.getElementById('tbl-vari').textContent = `${m.meanVARI > 0 ? '+' : ''}${m.meanVARI}`;
  document.getElementById('tbl-gli').textContent = `${m.meanGLI > 0 ? '+' : ''}${m.meanGLI}`;
  document.getElementById('tbl-hue').textContent = `${m.meanHue}°`;
  document.getElementById('tbl-lab').textContent = `${m.meanLab.L}, ${m.meanLab.a}, ${m.meanLab.b}`;

  // 4. Groundskeeper Action Plan & Nitrogen Advisory
  synthesizeGroundskeeperAdvisory(m);
}

function synthesizeGroundskeeperAdvisory(m) {
  const alertBox = document.getElementById('advisory-alert-box');
  const alertIcon = document.getElementById('advisory-alert-icon');
  const alertTitle = document.getElementById('advisory-title');
  const alertDesc = document.getElementById('advisory-desc');
  const urgencyBadge = document.getElementById('advisory-urgency-badge');

  const dirN = document.getElementById('dir-nitrogen');
  const dirPgr = document.getElementById('dir-pgr');
  const dirWear = document.getElementById('dir-wear');

  if (m.meanDGCI >= 0.70 && m.coverPct >= 90) {
    // Optimal condition
    if (alertBox) alertBox.className = 'advisory-alert-box alert-optimal mb-3';
    if (alertIcon) alertIcon.className = 'fa-solid fa-circle-check text-emerald';
    if (urgencyBadge) { urgencyBadge.textContent = 'Optimal Sward Condition'; urgencyBadge.className = 'badge badge-optimal'; }
    if (alertTitle) alertTitle.textContent = 'Elite Canopy Vigor & High Tissue Nitrogen';
    if (alertDesc) alertDesc.textContent = `The sward exhibits a Dark Green Color Index of ${m.meanDGCI.toFixed(3)} with ${m.coverPct}% fractional canopy cover. Photosynthetic efficiency is maximized across visible green reflectance bands (~550nm).`;

    if (dirN) dirN.textContent = `Tissue N pool is optimal (~${m.estTissueN}% N). Maintain current spoon-feeding schedule at 10–12 kg N/ha monthly. No emergency urea required.`;
    if (dirPgr) dirPgr.textContent = `Canopy density is dense. Maintain Primo Maxx (Trinexapac-ethyl) @ 0.4 L/ha calibrated to GDD accumulation (200 GDD base 0°C).`;
    if (dirWear) dirWear.textContent = `Bare ground is minimal (< ${m.soilPct}%). No overseeding required in this zone. Continue post-match divoting and light grooming.`;

  } else if (m.meanDGCI < 0.55 && m.coverPct >= 75) {
    // Chlorosis / Nitrogen deficit
    if (alertBox) alertBox.className = 'advisory-alert-box alert-warning mb-3';
    if (alertIcon) alertIcon.className = 'fa-solid fa-triangle-exclamation text-amber';
    if (urgencyBadge) { urgencyBadge.textContent = 'Nitrogen Deficit / Action Recommended'; urgencyBadge.className = 'badge badge-healthy'; }
    if (alertTitle) alertTitle.textContent = 'Canopy Chlorosis & Nitrogen Stress Detected';
    if (alertDesc) alertDesc.textContent = `DGCI has dropped to ${m.meanDGCI.toFixed(3)} (Tissue N ~${m.estTissueN}% N). Visible green reflectance is suppressed, indicating active chlorophyll degradation and leaf yellowing.`;

    if (dirN) dirN.textContent = `Apply Foliar Nitrogen (Soluble Urea / Ammonium Nitrate) @ 15–20 kg N/ha + Chelated Iron (Fe-DTPA) @ 2.5 L/ha for rapid chlorophyll restoration.`;
    if (dirPgr) dirPgr.textContent = `Suspend or reduce PGR rates by 50% until leaf greenness rebounds above DGCI 0.65 to avoid excessive vegetative suppression.`;
    if (dirWear) dirWear.textContent = `Thatch/dead tissue is ${m.thatchPct}%. Light verticutting / scarification recommended to clear senescent leaves before fertilizing.`;

  } else if (m.coverPct < 75) {
    // High wear / Goalmouth damage
    if (alertBox) alertBox.className = 'advisory-alert-box alert-danger mb-3';
    if (alertIcon) alertIcon.className = 'fa-solid fa-circle-xmark text-danger';
    if (urgencyBadge) { urgencyBadge.textContent = 'High Wear & Thin Canopy Alert'; urgencyBadge.className = 'badge badge-struggling'; }
    if (alertTitle) alertTitle.textContent = 'Severe Ground Cover Loss & Cleat Wear Damage';
    if (alertDesc) alertDesc.textContent = `Fractional Green Canopy Cover is down to ${m.coverPct}% with ${m.soilPct}% exposed bare soil/sand. High wear and traction loss risk under competitive match play.`;

    if (dirN) dirN.textContent = `Apply Starter Nitrogen/Phosphorus blend (e.g. 10-15-10 @ 25 g/m²) to stimulate tillering and new seedling root anchorage.`;
    if (dirPgr) dirPgr.textContent = `Zero PGR in this wear zone. Allow ryegrass seedlings to establish without growth regulator inhibition.`;
    if (dirWear) dirWear.textContent = `Overseed immediately with 100% tetraploid/diploid Perennial Ryegrass mix @ 35–45 g/m² + light medium sand topdressing (2–3 mm) and germination sheet.`;

  } else {
    // Mixed / Poa / Moderate
    if (alertBox) alertBox.className = 'advisory-alert-box alert-warning mb-3';
    if (alertIcon) alertIcon.className = 'fa-solid fa-circle-info text-blue';
    if (urgencyBadge) { urgencyBadge.textContent = 'Active Monitoring Required'; urgencyBadge.className = 'badge badge-intermediate'; }
    if (alertTitle) alertTitle.textContent = 'Mixed Canopy & Off-Type Species Ingress';
    if (alertDesc) alertDesc.textContent = `Canopy cover is ${m.coverPct}% with DGCI ${m.meanDGCI.toFixed(3)}. Off-type/Poa annua ingress detected at ${m.weedPct}%.`;

    if (dirN) dirN.textContent = `Control nitrogen flushes. Favor slow-release potassium and iron to harden ryegrass without encouraging rapid Poa annua proliferation.`;
    if (dirPgr) dirPgr.textContent = `Targeted PGR regime with Primo Maxx or paclobutrazol to selectively suppress Poa annua seedhead formation.`;
    if (dirWear) dirWear.textContent = `Monitor rootzone depth and soil compaction in this zone. ProCore aerate with 8mm solid tines.`;
  }
}

// --------------------------------------------------------------------------
// Pixel Loupe Magnifier Tooltip Inspector
// --------------------------------------------------------------------------

function handleCanvasPixelProbe(e) {
  if (!visionState.normalizedPixelData) return;

  const canvas = document.getElementById('vision-canvas');
  const loupeCard = document.getElementById('vision-pixel-loupe');
  const zoomCanvas = document.getElementById('loupe-zoom-canvas');
  if (!canvas || !loupeCard || !zoomCanvas) return;

  const rect = canvas.getBoundingClientRect();
  const scaleX = canvas.width / rect.width;
  const scaleY = canvas.height / rect.height;

  const canvasX = Math.round((e.clientX - rect.left) * scaleX);
  const canvasY = Math.round((e.clientY - rect.top) * scaleY);

  if (canvasX < 0 || canvasX >= canvas.width || canvasY < 0 || canvasY >= canvas.height) {
    hidePixelLoupe();
    return;
  }

  const pxIdx = canvasY * canvas.width + canvasX;
  const i = pxIdx * 4;
  const r = visionState.normalizedPixelData[i];
  const g = visionState.normalizedPixelData[i + 1];
  const b = visionState.normalizedPixelData[i + 2];

  const hsv = rgbToHsv(r, g, b);
  const lab = rgbToLab(r, g, b);
  const dgci = visionState.dgciArray ? visionState.dgciArray[pxIdx] : calculateDGCI(hsv.h, hsv.s, hsv.v);
  const cls = visionState.classification ? visionState.classification[pxIdx] : 1;

  // Render 7x7 Magnified Zoom
  const zCtx = zoomCanvas.getContext('2d');
  zCtx.imageSmoothingEnabled = false;
  zCtx.clearRect(0, 0, zoomCanvas.width, zoomCanvas.height);

  const srcCanvas = visionState.imageSourceCanvas || canvas;
  const sX = Math.max(0, canvasX - 3);
  const sY = Math.max(0, canvasY - 3);
  zCtx.drawImage(srcCanvas, sX, sY, 7, 7, 0, 0, zoomCanvas.width, zoomCanvas.height);

  // Update Loupe Telemetry Text
  document.getElementById('loupe-coords').textContent = `(X: ${canvasX}, Y: ${canvasY})`;
  document.getElementById('loupe-rgb').textContent = `rgb(${r}, ${g}, ${b})`;
  document.getElementById('loupe-hsb').textContent = `H: ${Math.round(hsv.h)}°, S: ${Math.round(hsv.s * 100)}%, B: ${Math.round(hsv.v * 100)}%`;
  document.getElementById('loupe-lab').textContent = `L:${lab.L}, a:${lab.a}, b:${lab.b}`;
  document.getElementById('loupe-dgci').textContent = dgci.toFixed(3);

  const classBadge = document.getElementById('loupe-class');
  if (classBadge) {
    if (cls === 1) {
      classBadge.textContent = 'Live Green Turf';
      classBadge.style.color = '#10b981';
      classBadge.style.background = 'rgba(16, 185, 129, 0.2)';
    } else if (cls === 2) {
      classBadge.textContent = 'Bare Soil / Sand';
      classBadge.style.color = '#f59e0b';
      classBadge.style.background = 'rgba(245, 158, 11, 0.2)';
    } else if (cls === 3) {
      classBadge.textContent = 'Dead Thatch / Straw';
      classBadge.style.color = '#ca8a04';
      classBadge.style.background = 'rgba(202, 138, 4, 0.2)';
    } else {
      classBadge.textContent = 'Weed / Off-Type';
      classBadge.style.color = '#06b6d4';
      classBadge.style.background = 'rgba(6, 182, 212, 0.2)';
    }
  }

  // Position Loupe Card
  loupeCard.style.display = 'block';
  const parentRect = document.getElementById('vision-canvas-stage').getBoundingClientRect();
  let leftPos = e.clientX - parentRect.left + 15;
  let topPos = e.clientY - parentRect.top + 15;

  if (leftPos + 230 > parentRect.width) leftPos = parentRect.width - 240;
  if (topPos + 180 > parentRect.height) topPos = parentRect.height - 190;

  loupeCard.style.left = `${Math.max(10, leftPos)}px`;
  loupeCard.style.top = `${Math.max(10, topPos)}px`;
}

function hidePixelLoupe() {
  const loupeCard = document.getElementById('vision-pixel-loupe');
  if (loupeCard) loupeCard.style.display = 'none';
}

function toggleScannerAnimation() {
  visionState.scannerActive = !visionState.scannerActive;
  const bar = document.getElementById('hud-scanner-bar');
  if (bar) bar.style.display = visionState.scannerActive ? 'block' : 'none';
}

function downloadCurrentCanvasView() {
  const canvas = document.getElementById('vision-canvas');
  if (!canvas) return;
  const link = document.createElement('a');
  link.download = `TurfTrack_Optics_${visionState.activeLayer}_${new Date().toISOString().slice(0, 10)}.png`;
  link.href = canvas.toDataURL('image/png');
  link.click();
  showToast('Viewport PNG downloaded.', 'success');
}

// --------------------------------------------------------------------------
// Pitch Scan History & Side-by-Side Comparison
// --------------------------------------------------------------------------

function saveCurrentVisionScan() {
  const m = visionState.metrics;
  if (!m) {
    showToast('No active scan data to save.', 'warning');
    return;
  }

  const pitch = document.getElementById('vision-pitch-select')?.value || 'Pitch 1';
  const zone = document.getElementById('vision-zone-select')?.value || 'Center Circle';
  const notes = document.getElementById('vision-sample-notes')?.value || `${pitch} ${zone} Diagnostic`;

  const canvas = document.getElementById('vision-canvas');
  let thumb = '';
  if (canvas) {
    thumb = canvas.toDataURL('image/jpeg', 0.6);
  }

  const newScan = {
    id: `vscan-${Date.now()}`,
    timestamp: new Date().toISOString().replace('T', ' ').slice(0, 16),
    pitch,
    zone,
    sampleNotes: notes,
    coverPct: m.coverPct,
    dgci: m.meanDGCI,
    tissueN: m.estTissueN,
    status: m.meanDGCI >= 0.70 ? 'Optimal Emerald' : (m.coverPct < 75 ? 'High Wear' : 'Chlorotic / Stress'),
    thumbnail: thumb
  };

  visionState.historyScans.unshift(newScan);
  saveVisionHistoryStorage();
  renderVisionScanHistory();
  showToast(`Scan saved to history for ${pitch} (${zone})!`, 'success');
}

function renderVisionScanHistory() {
  const tbody = document.getElementById('vision-history-tbody');
  if (!tbody) return;

  const filterPitch = document.getElementById('filter-history-pitch')?.value || 'All';
  const scans = visionState.historyScans.filter(s => filterPitch === 'All' || s.pitch === filterPitch);

  if (scans.length === 0) {
    tbody.innerHTML = `<tr><td colspan="10" class="text-center text-muted p-4">No scan records found for ${filterPitch}. Capture or upload a photo and click "Save Scan to History".</td></tr>`;
    return;
  }

  tbody.innerHTML = scans.map(s => {
    let statusBadge = '<span class="badge badge-optimal">Optimal</span>';
    if (s.coverPct < 75) statusBadge = '<span class="badge badge-struggling">High Wear</span>';
    else if (s.dgci < 0.55) statusBadge = '<span class="badge badge-healthy">Chlorotic</span>';

    return `
      <tr>
        <td>
          <img src="${s.thumbnail || 'data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'44\' height=\'33\'><rect fill=\'%23121e17\' width=\'44\' height=\'33\'/><text fill=\'%2310b981\' x=\'10\' y=\'20\' font-size=\'10\'>SCAN</text></svg>'}" class="scan-thumb-mini" alt="Preview">
        </td>
        <td class="font-mono text-xs">${s.timestamp}</td>
        <td><b>${s.pitch}</b></td>
        <td><span class="badge badge-outline">${s.zone}</span></td>
        <td class="font-mono text-emerald"><b>${s.coverPct}%</b></td>
        <td class="font-mono text-emerald"><b>${s.dgci.toFixed(3)}</b></td>
        <td class="font-mono text-purple">${s.tissueN}% N</td>
        <td>${statusBadge}</td>
        <td class="text-xs text-muted" style="max-width: 180px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${s.sampleNotes || '—'}</td>
        <td>
          <div class="d-flex gap-1">
            <button class="btn btn-xs btn-outline" onclick="loadScanIntoStudio('${s.id}')" title="Analyze in Studio">
              <i class="fa-solid fa-eye"></i>
            </button>
            <button class="btn btn-xs btn-outline" onclick="openScanComparisonModal('${s.id}')" title="Compare Side-by-Side">
              <i class="fa-solid fa-code-compare"></i>
            </button>
            <button class="btn btn-xs btn-outline-danger" onclick="deleteVisionScan('${s.id}')" title="Delete Record">
              <i class="fa-solid fa-trash"></i>
            </button>
          </div>
        </td>
      </tr>
    `;
  }).join('');
}

function loadScanIntoStudio(scanId) {
  const scan = visionState.historyScans.find(s => s.id === scanId);
  if (!scan) return;

  if (scan.thumbnail) {
    const img = new Image();
    img.onload = () => {
      const offCanvas = document.createElement('canvas');
      offCanvas.width = 640;
      offCanvas.height = 480;
      const ctx = offCanvas.getContext('2d');
      ctx.drawImage(img, 0, 0, 640, 480);
      visionState.imageSourceCanvas = offCanvas;
      processTurfImage();
      showToast(`Loaded historical scan from ${scan.timestamp} (${scan.pitch} ${scan.zone}).`, 'success');
    };
    img.src = scan.thumbnail;
  }
}

function deleteVisionScan(scanId) {
  visionState.historyScans = visionState.historyScans.filter(s => s.id !== scanId);
  saveVisionHistoryStorage();
  renderVisionScanHistory();
  showToast('Scan record deleted.', 'info');
}

function exportVisionHistoryCSV() {
  if (visionState.historyScans.length === 0) {
    showToast('No scan history to export.', 'warning');
    return;
  }

  let csv = 'ID,Date,Pitch,Zone,Cover_FGCC_Pct,DGCI_Score,Tissue_Nitrogen_Pct,Status,Notes\n';
  visionState.historyScans.forEach(s => {
    csv += `"${s.id}","${s.timestamp}","${s.pitch}","${s.zone}",${s.coverPct},${s.dgci},${s.tissueN},"${s.status}","${(s.sampleNotes || '').replace(/"/g, '""')}"\n`;
  });

  const blob = new Blob([csv], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `TurfTrack_Optics_Scans_${new Date().toISOString().slice(0, 10)}.csv`;
  link.click();
  URL.revokeObjectURL(url);
  showToast('Scan history exported as CSV.', 'success');
}

// --------------------------------------------------------------------------
// Side-by-Side Scan Comparison Modal Logic
// --------------------------------------------------------------------------

function openScanComparisonModal(initialScanId = null) {
  const modal = document.getElementById('scan-compare-modal');
  const selectA = document.getElementById('compare-scan-a-select');
  const selectB = document.getElementById('compare-scan-b-select');
  if (!modal || !selectA || !selectB) return;

  const scans = visionState.historyScans;
  if (scans.length === 0) {
    showToast('Please save at least one scan to use side-by-side comparison.', 'warning');
    return;
  }

  const optionsHTML = scans.map(s => `
    <option value="${s.id}">${s.timestamp} - ${s.pitch} (${s.zone}) - ${s.coverPct}% Cover, ${s.dgci.toFixed(3)} DGCI</option>
  `).join('');

  selectA.innerHTML = optionsHTML;
  selectB.innerHTML = optionsHTML;

  if (initialScanId) {
    selectA.value = initialScanId;
    if (scans.length > 1) {
      selectB.value = scans[1].id !== initialScanId ? scans[1].id : scans[0].id;
    }
  } else if (scans.length > 1) {
    selectA.value = scans[1].id;
    selectB.value = scans[0].id;
  }

  modal.classList.add('active');
  updateScanComparisonView();
}

function closeScanComparisonModal() {
  document.getElementById('scan-compare-modal')?.classList.remove('active');
}

function updateScanComparisonView() {
  const selectA = document.getElementById('compare-scan-a-select');
  const selectB = document.getElementById('compare-scan-b-select');
  if (!selectA || !selectB) return;

  const scanA = visionState.historyScans.find(s => s.id === selectA.value);
  const scanB = visionState.historyScans.find(s => s.id === selectB.value);
  if (!scanA || !scanB) return;

  // Render Canvas A
  const canvasA = document.getElementById('compare-canvas-a');
  if (canvasA && scanA.thumbnail) {
    const imgA = new Image();
    imgA.onload = () => {
      const ctx = canvasA.getContext('2d');
      ctx.drawImage(imgA, 0, 0, canvasA.width, canvasA.height);
    };
    imgA.src = scanA.thumbnail;
  }

  // Render Canvas B
  const canvasB = document.getElementById('compare-canvas-b');
  if (canvasB && scanB.thumbnail) {
    const imgB = new Image();
    imgB.onload = () => {
      const ctx = canvasB.getContext('2d');
      ctx.drawImage(imgB, 0, 0, canvasB.width, canvasB.height);
    };
    imgB.src = scanB.thumbnail;
  }

  // Populate Stats A
  document.getElementById('compare-header-a').textContent = `Baseline (A): ${scanA.pitch} ${scanA.zone} (${scanA.timestamp})`;
  document.getElementById('compare-stats-a').innerHTML = `
    <div><span class="text-dim">Cover (FGCC):</span> <b class="text-emerald">${scanA.coverPct}%</b></div>
    <div><span class="text-dim">DGCI Score:</span> <b class="text-emerald">${scanA.dgci.toFixed(3)}</b></div>
    <div><span class="text-dim">Estimated N:</span> <b class="text-purple">${scanA.tissueN}% N</b></div>
    <div><span class="text-dim">Notes:</span> <i>${scanA.sampleNotes || '—'}</i></div>
  `;

  // Populate Stats B
  document.getElementById('compare-header-b').textContent = `Comparison (B): ${scanB.pitch} ${scanB.zone} (${scanB.timestamp})`;
  document.getElementById('compare-stats-b').innerHTML = `
    <div><span class="text-dim">Cover (FGCC):</span> <b class="text-blue">${scanB.coverPct}%</b></div>
    <div><span class="text-dim">DGCI Score:</span> <b class="text-blue">${scanB.dgci.toFixed(3)}</b></div>
    <div><span class="text-dim">Estimated N:</span> <b class="text-purple">${scanB.tissueN}% N</b></div>
    <div><span class="text-dim">Notes:</span> <i>${scanB.sampleNotes || '—'}</i></div>
  `;

  // Calculate Deltas (B - A)
  const deltaCover = (scanB.coverPct - scanA.coverPct).toFixed(1);
  const deltaDGCI = (scanB.dgci - scanA.dgci).toFixed(3);
  const deltaN = (scanB.tissueN - scanA.tissueN).toFixed(2);

  const getDeltaClass = (val) => parseFloat(val) > 0 ? 'delta-positive' : (parseFloat(val) < 0 ? 'delta-negative' : 'delta-neutral');
  const formatDelta = (val, unit = '') => `${parseFloat(val) > 0 ? '+' : ''}${val}${unit}`;

  document.getElementById('compare-deltas-list').innerHTML = `
    <div class="delta-item">
      <span class="text-dim text-xs">Δ Fractional Canopy Cover:</span>
      <span class="delta-val ${getDeltaClass(deltaCover)}">${formatDelta(deltaCover, '%')}</span>
    </div>
    <div class="delta-item">
      <span class="text-dim text-xs">Δ Dark Green Color (DGCI):</span>
      <span class="delta-val ${getDeltaClass(deltaDGCI)}">${formatDelta(deltaDGCI)}</span>
    </div>
    <div class="delta-item">
      <span class="text-dim text-xs">Δ Estimated Tissue Nitrogen:</span>
      <span class="delta-val ${getDeltaClass(deltaN)}">${formatDelta(deltaN, '% N')}</span>
    </div>
  `;
}
