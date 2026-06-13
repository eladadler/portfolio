const layers = document.querySelectorAll('[data-speed]');
let ticking = false;

function updateParallax() {
  const hero = document.querySelector('.hero-parallax');
  const rect = hero.getBoundingClientRect();
  const scrollInsideHero = -rect.top;

  layers.forEach((layer) => {
    const speed = Number(layer.dataset.speed || 0);
    const y = scrollInsideHero * speed;
    layer.style.transform = `translate3d(0, ${y}px, 0)`;
  });

  ticking = false;
}

function onScroll() {
  if (!ticking) {
    window.requestAnimationFrame(updateParallax);
    ticking = true;
  }
}

window.addEventListener('scroll', onScroll, { passive: true });
window.addEventListener('resize', updateParallax);
updateParallax();
