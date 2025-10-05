// Small helper: insert current year in footer
document.addEventListener('DOMContentLoaded', function () {
  const y = new Date().getFullYear();
  const el = document.getElementById('year');
  if (el) el.textContent = y;
});

// Optional: highlight active nav link on click (demo)
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function () {
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    this.classList.add('active');
  });
});
