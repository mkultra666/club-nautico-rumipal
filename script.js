const loader = document.querySelector('.page-loader');
const header = document.querySelector('.site-header');
const progress = document.querySelector('.header-progress');
const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
const backToTop = document.querySelector('.back-to-top');
const form = document.querySelector('#contactForm');

window.addEventListener('load', () => {
  if (loader) window.setTimeout(() => loader.classList.add('hidden'), 350);
});

function updateScrollUI() {
  const scrollTop = window.scrollY;
  const height = document.documentElement.scrollHeight - window.innerHeight;
  const percentage = height > 0 ? (scrollTop / height) * 100 : 0;

  if (header) header.classList.toggle('scrolled', scrollTop > 20);
  if (backToTop) backToTop.classList.toggle('visible', scrollTop > 600);
  if (progress) progress.style.width = `${percentage}%`;
}

window.addEventListener('scroll', updateScrollUI, { passive: true });
updateScrollUI();

menuButton?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuButton.classList.toggle('active', isOpen);
  menuButton.setAttribute('aria-expanded', String(isOpen));
  document.body.classList.toggle('menu-open', isOpen);
});

nav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton.classList.remove('active');
    menuButton.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('menu-open');
  });
});

backToTop?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  });
}, { threshold: 0.14 });

document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));

const counters = document.querySelectorAll('[data-counter]');
let countersStarted = false;

const counterObserver = new IntersectionObserver((entries) => {
  if (countersStarted || !entries.some((entry) => entry.isIntersecting)) return;
  countersStarted = true;

  counters.forEach((counter) => {
    const target = Number(counter.dataset.counter);
    const duration = 1000;
    const start = performance.now();

    function animate(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      counter.textContent = Math.floor(target * eased);
      if (progress < 1) requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
  });
}, { threshold: 0.5 });

const metricBlock = document.querySelector('.hero-metrics');
if (metricBlock) counterObserver.observe(metricBlock);

form?.addEventListener('submit', (event) => {
  event.preventDefault();
  const status = form.querySelector('.form-status');
  const data = new FormData(form);
  const name = data.get('nombre');

  status.textContent = `Gracias, ${name}. El formulario está listo para conectarse con tu correo o WhatsApp.`;
  form.reset();
});

document.querySelectorAll('.current-year, #year').forEach((year) => {
  year.textContent = new Date().getFullYear();
});

// Profundidad sutil: sigue el puntero sin interferir con la navegación.
const ambientCursor = document.querySelector('.ambient-cursor');
const heroVisual = document.querySelector('.hero-visual');

window.addEventListener('pointermove', (event) => {
  document.documentElement.style.setProperty('--pointer-x', `${event.clientX}px`);
  document.documentElement.style.setProperty('--pointer-y', `${event.clientY}px`);

  if (!ambientCursor || !heroVisual || window.innerWidth < 900) return;
  const x = (event.clientX / window.innerWidth - 0.5) * 12;
  const y = (event.clientY / window.innerHeight - 0.5) * 12;
  heroVisual.style.setProperty('--tilt-x', `${x}px`);
  heroVisual.style.setProperty('--tilt-y', `${y}px`);
});

document.querySelectorAll('.discipline-card, .news-card, .value-card').forEach((card) => {
  card.addEventListener('pointermove', (event) => {
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--card-x', `${event.clientX - rect.left}px`);
    card.style.setProperty('--card-y', `${event.clientY - rect.top}px`);
  });
});
