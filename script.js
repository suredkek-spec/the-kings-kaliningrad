const levelButtons = document.querySelectorAll('[data-level]');
const priceNote = document.querySelector('.price-disclaimer');
levelButtons.forEach((button) => {
  button.addEventListener('click', () => {
    levelButtons.forEach((item) => {
      const active = item === button;
      item.classList.toggle('active', active);
      item.setAttribute('aria-pressed', String(active));
    });
    const level = button.dataset.level === 'senior' ? 'старшего барбера' : 'барбера';
    priceNote.textContent = `Актуальные цена и время для ${level} — в системе записи The Kings. Поля на сайте ждут подтверждённого прайса.`;
  });
});

const revealItems = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { rootMargin: '0px 0px 100px 0px', threshold: 0.05 });
  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('visible'));
}

const mobileMenu = document.querySelector('.mobile-menu');
mobileMenu?.querySelectorAll('nav a').forEach((link) => {
  link.addEventListener('click', () => { mobileMenu.open = false; });
});
