// ── Tab switching ──────────────────────────────────
function showTab(name) {
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('tab-' + name).classList.add('active');
  event.target.classList.add('active');
}

// ── Highlight active tab from URL hash ─────────────
window.addEventListener('DOMContentLoaded', function () {
  const hash = window.location.hash.replace('#', '');
  const validTabs = ['about', 'research', 'services'];
  if (hash && validTabs.includes(hash)) {
    document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.getElementById('tab-' + hash).classList.add('active');
    document.querySelector(`[onclick="showTab('${hash}')"]`).classList.add('active');
  }
});
