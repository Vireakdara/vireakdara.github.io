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

// ── Copy email on click ────────────────────────────
function copyEmail(e) {
  e.preventDefault();
  const email = 'lyvireakdara@gmail.com';
  navigator.clipboard.writeText(email).then(() => {
    showCopyToast();
  });
}

function showCopyToast() {
  // Remove existing toast if any
  const existing = document.getElementById('copy-toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.id = 'copy-toast';
  toast.textContent = '✓ Email copied to clipboard';
  toast.style.cssText = `
    position: fixed;
    bottom: 32px;
    left: 50%;
    transform: translateX(-50%) translateY(20px);
    background: #1c1917;
    color: #fff;
    padding: 10px 20px;
    border-radius: 999px;
    font-size: 0.82rem;
    font-weight: 500;
    font-family: 'Outfit', sans-serif;
    box-shadow: 0 4px 20px rgba(0,0,0,0.2);
    z-index: 9999;
    opacity: 0;
    transition: all 0.25s cubic-bezier(0.4,0,0.2,1);
    pointer-events: none;
  `;
  document.body.appendChild(toast);

  // Animate in
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      toast.style.opacity = '1';
      toast.style.transform = 'translateX(-50%) translateY(0)';
    });
  });

  // Animate out after 2.5s
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(-50%) translateY(10px)';
    setTimeout(() => toast.remove(), 300);
  }, 2500);
}