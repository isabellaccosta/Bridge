/* ================= MENU (APP DRAWER) ================= */
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.navbar nav');
const body = document.body;

toggle.addEventListener('click', () => {
  nav.classList.toggle('active');
  body.classList.toggle('menu-open');
});

/* Fecha o menu ao clicar em um link */
document.querySelectorAll('.navbar nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('active');
    body.classList.remove('menu-open');
  });
});

/* ================= SCROLL FADE ================= */
const faders = document.querySelectorAll('.fade');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  faders.forEach(el => observer.observe(el));
}

/* ================= TOUCH FE demonstrate APP FEEL ================= */
let startY = 0;

document.addEventListener('touchstart', e => {
  startY = e.touches[0].clientY;
});

document.addEventListener('touchend', e => {
  const endY = e.changedTouches[0].clientY;
  const diff = startY - endY;

  /* swipe up -> fecha menu (comportamento app) */
  if (diff > 80 && nav.classList.contains('active')) {
    nav.classList.remove('active');
    body.classList.remove('menu-open');
  }
});

/* ================= PREVENT BACKGROUND SCROLL WHEN MENU OPEN ================= */
const style = document.createElement('style');
style.innerHTML = `
  body.menu-open {
    overflow: hidden;
    touch-action: none;
  }
`;
document.head.appendChild(style);

/* ================= PAGE TRANSITION (APP FEEL) ================= */
document.querySelectorAll('a[href]').forEach(link => {
  const url = link.getAttribute('href');

  if (url && !url.startsWith('#') && !url.startsWith('http')) {
    link.addEventListener('click', e => {
      e.preventDefault();
      document.body.style.opacity = '0';
      setTimeout(() => {
        window.location.href = url;
      }, 200);
    });
  }
});

/* ================= SAFE INIT ================= */
console.log('Bridge app JS loaded');
/* MANIFESTO – DESKTOP + MOBILE */
const manifestoBox = document.querySelector('.manifesto-box');

if(manifestoBox){
  manifestoBox.addEventListener('click', ()=>{
    manifestoBox.classList.toggle('active');
  });
}

console.log('Bridge OK');
