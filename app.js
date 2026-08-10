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
  sampleRuns: 1,
  pitch1Area: 7140,
  pitch2Area: 7140
};

// Global Logs Data State
let clippingLogs = [];

// Chart Instances Storage
let charts = {};

// Sort State
let currentSort = { column: 'date', direction: 'asc' };

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
  loadSettings();
  loadData();
  setupNavigation();
  setupEventListeners();
  renderAll();
});

/* ==========================================================================
   Data Calculation Engine
   ========================================================================== */

function getSampleArea() {
  return Number((settings.mowerWidth * settings.sampleDistance * settings.sampleRuns).toFixed(1)); // 651.2
}

function processLogEntry(raw) {
  const left = Number(raw.left || 0);
  const center = Number(raw.center || 0);
  const right = Number(raw.right || 0);
  const totalL = Number((left + center + right).toFixed(1));
  
  const sampleArea = getSampleArea();
  
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
      openModal();
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
    analytics: { title: 'Analytics & Trends', sub: 'Visual growth curves, sectional balance & pitch comparison' },
    advisory: { title: 'Agronomic Insights', sub: 'Automated turf diagnostic report & groundskeeper recommendations' },
    settings: { title: 'Pitch Settings', sub: 'Configure mower dimensions & pitch surface parameters' }
  };

  if (titles[tabId]) {
    document.getElementById('page-title').textContent = titles[tabId].title;
    document.getElementById('page-subtitle').textContent = titles[tabId].sub;
  }

  // Re-render charts when switching to tabs with canvas to fix sizing
  if (tabId === 'dashboard' || tabId === 'analytics') {
    setTimeout(renderCharts, 50);
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
  renderDirectionComparisonChart();
  renderComparisonStackedChart();
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
      labels: ['Left Swath (L)', 'Center Swath (L)', 'Right Swath (L)'],
      datasets: [
        {
          label: 'Pitch 1 Avg Sectional',
          data: [p1Left.toFixed(1), p1Center.toFixed(1), p1Right.toFixed(1)],
          backgroundColor: 'rgba(59, 130, 246, 0.25)',
          borderColor: '#3b82f6',
          pointBackgroundColor: '#3b82f6'
        },
        {
          label: 'Pitch 2 Avg Sectional',
          data: [p2Left.toFixed(1), p2Center.toFixed(1), p2Right.toFixed(1)],
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

function renderDirectionComparisonChart() {
  const ctx = document.getElementById('chart-direction-comparison');
  if (!ctx) return;

  const widthCuts = clippingLogs.filter(d => d.direction === 'Width' && d.totalL > 0);
  const lengthCuts = clippingLogs.filter(d => d.direction === 'Length' && d.totalL > 0);

  const avgWidthCV = widthCuts.length > 0 ? widthCuts.reduce((a, b) => a + b.clipVol, 0) / widthCuts.length : 0;
  const avgLengthCV = lengthCuts.length > 0 ? lengthCuts.reduce((a, b) => a + b.clipVol, 0) / lengthCuts.length : 0;

  const activeAll = clippingLogs.filter(d => d.totalL > 0);
  const totalAvgCV = activeAll.length > 0 ? activeAll.reduce((a, b) => a + b.clipVol, 0) / activeAll.length : 0;

  if (charts.dirComp) charts.dirComp.destroy();

  charts.dirComp = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Width Mowing Pass', 'Length Mowing Pass'],
      datasets: [
        {
          label: 'Average ClipVol Intensity (mL/m²)',
          data: [avgWidthCV.toFixed(3), avgLengthCV.toFixed(3)],
          backgroundColor: ['#8b5cf6', '#f59e0b'],
          borderRadius: 8,
          barThickness: 50
        },
        {
          type: 'line',
          label: `Overall Benchmark Avg (${totalAvgCV.toFixed(3)} mL/m²)`,
          data: [totalAvgCV.toFixed(3), totalAvgCV.toFixed(3)],
          borderColor: '#10b981',
          borderWidth: 2,
          borderDash: [5, 4],
          pointRadius: 0,
          fill: false
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { labels: { color: '#9ca3af' } } },
      scales: {
        x: { grid: { display: false }, ticks: { color: '#f3f4f6', font: { size: 13 } } },
        y: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#9ca3af' } }
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
  const p1Active = clippingLogs.filter(d => d.pitch === 'Pitch 1' && d.totalL > 0);
  const p2Active = clippingLogs.filter(d => d.pitch === 'Pitch 2' && d.totalL > 0);

  const p1CV = p1Active.length > 0 ? (p1Active.reduce((a, b) => a + b.clipVol, 0) / p1Active.length) : 0;
  const p1Tot = p1Active.length > 0 ? (p1Active.reduce((a, b) => a + b.estTotalL, 0) / p1Active.length) : 0;

  const p2CV = p2Active.length > 0 ? (p2Active.reduce((a, b) => a + b.clipVol, 0) / p2Active.length) : 0;
  const p2Tot = p2Active.length > 0 ? (p2Active.reduce((a, b) => a + b.estTotalL, 0) / p2Active.length) : 0;

  document.getElementById('adv-p1-clipvol').textContent = `${p1CV.toFixed(3)} mL/m²`;
  document.getElementById('adv-p1-total').textContent = `${p1Tot.toFixed(1)} L / cut`;

  document.getElementById('adv-p2-clipvol').textContent = `${p2CV.toFixed(3)} mL/m²`;
  document.getElementById('adv-p2-total').textContent = `${p2Tot.toFixed(1)} L / cut`;

  // Dynamic status badges
  const p1Tier = getPitchTotalTier(p1Tot);
  const p1Badge = document.getElementById('pitch1-status-badge');
  p1Badge.className = `badge ${p1Tier.badgeClass}`;
  p1Badge.textContent = p1Tier.label;

  const p2Tier = getPitchTotalTier(p2Tot);
  const p2Badge = document.getElementById('pitch2-status-badge');
  p2Badge.className = `badge ${p2Tier.badgeClass}`;
  p2Badge.textContent = p2Tier.label;

  // Dynamic recommendations
  const p1List = document.getElementById('adv-p1-list');
  p1List.innerHTML = '';
  if (p1Tot > 150) {
    p1List.innerHTML += `<li><i class="fa-solid fa-triangle-exclamation text-amber"></i> <strong>SURGE ALERT (>150L):</strong> Pure PRG (Johnsons J Premier Pitch) in overdrive. Risk of root mass depletion & shear strength loss. Cut N dosing by 15-20%.</li>`;
    p1List.innerHTML += `<li><i class="fa-solid fa-scissors text-emerald"></i> Tighten PGR (Attraxor / Trinexapac-ethyl) intervals guided by GDD to suppress biomass flushes.</li>`;
    p1List.innerHTML += `<li><i class="fa-solid fa-cloud-sun-rain text-amber"></i> Dense canopy traps humidity; monitor for Leaf Spot & Fusarium infection.</li>`;
  } else if (p1Tot < 70) {
    p1List.innerHTML += `<li><i class="fa-solid fa-circle-exclamation text-amber"></i> <strong>LOW YIELD ALERT (<70L):</strong> Turf under-recovering or over-regulated. Spoonfeed foliar N.</li>`;
    p1List.innerHTML += `<li><i class="fa-solid fa-seedling text-emerald"></i> Check soil compaction & moisture. Back off PGR applications until recovery resumes.</li>`;
  } else {
    p1List.innerHTML += `<li><i class="fa-solid fa-circle-check text-emerald"></i> <strong>OPTIMAL RANGE (70-150L):</strong> Growth balanced with carbohydrate reserves & root retention.</li>`;
  }

  const p2List = document.getElementById('adv-p2-list');
  p2List.innerHTML = '';
  if (p2Tot > 150) {
    p2List.innerHTML += `<li><i class="fa-solid fa-triangle-exclamation text-amber"></i> <strong>SURGE ALERT (>150L):</strong> Rapid biomass surge in pure PRG sward. Apply Attraxor / PGR & trim N input.</li>`;
  } else if (p2Tot < 70) {
    p2List.innerHTML += `<li><i class="fa-solid fa-triangle-exclamation text-amber"></i> <strong>UNDER-RECOVERY:</strong> Growth suppressed below 70L threshold. Light N spoonfeed recommended.</li>`;
  } else {
    p2List.innerHTML += `<li><i class="fa-solid fa-circle-check text-emerald"></i> <strong>OPTIMAL RANGE (70-150L):</strong> Ideal sward equilibrium for Johnsons J Premier Pitch (100% PRG).</li>`;
    p2List.innerHTML += `<li><i class="fa-solid fa-arrows-spin text-emerald"></i> Alternate mowing direction (Width/Length) to prevent leaf blade lean & maintain pitch speed.</li>`;
    p2List.innerHTML += `<li><i class="fa-solid fa-scissors text-emerald"></i> Perform light verti-grooming to manage high-density PRG leaf canopy & organic thatch build-up.</li>`;
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

  // Settings Form Submit
  document.getElementById('settings-form').addEventListener('submit', (e) => {
    e.preventDefault();
    settings.mowerWidth = Number(document.getElementById('set-mower-width').value);
    settings.sampleDistance = Number(document.getElementById('set-sample-dist').value);
    settings.sampleRuns = Number(document.getElementById('set-sample-runs').value);
    settings.pitch1Area = Number(document.getElementById('set-p1-area').value);
    settings.pitch2Area = Number(document.getElementById('set-p2-area').value);
    
    saveSettings();
    updateSettingsInputs();
    
    // Re-process all logs with new settings
    clippingLogs = clippingLogs.map(processLogEntry);
    saveData();
    renderAll();
    alert('Settings updated successfully!');
  });

  // Reset to Prompt Default Data
  document.getElementById('btn-reset-default').addEventListener('click', () => {
    if (confirm('Reset dataset back to original prompt values? Custom changes will be overwritten.')) {
      clippingLogs = SEED_DATA.map(processLogEntry);
      saveData();
      renderAll();
    }
  });

  // Clear All Data
  document.getElementById('btn-clear-data').addEventListener('click', () => {
    if (confirm('Are you sure you want to clear ALL clipping logs?')) {
      clippingLogs = [];
      saveData();
      renderAll();
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

  // CSV Export
  document.getElementById('btn-export').addEventListener('click', exportCSV);
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
  const sampleArea = getSampleArea();
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
  document.getElementById('set-sample-dist').value = settings.sampleDistance;
  document.getElementById('set-sample-runs').value = settings.sampleRuns;
  document.getElementById('set-p1-area').value = settings.pitch1Area;
  document.getElementById('set-p2-area').value = settings.pitch2Area;
  document.getElementById('calc-sample-area-display').textContent = `${getSampleArea().toFixed(1)} m²`;
}

/* ==========================================================================
   Export Functionality
   ========================================================================== */

function exportCSV() {
  if (clippingLogs.length === 0) {
    alert('No data available to export.');
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
}
