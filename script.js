const burger = document.getElementById('burger');
const menu = document.getElementById('menu');
burger.addEventListener('click', () => {
  const open = burger.getAttribute('aria-expanded') === 'true';
  burger.setAttribute('aria-expanded', String(!open));
  burger.setAttribute('aria-label', open ? 'Abrir menú' : 'Cerrar menú');
  menu.classList.toggle('open', !open);
});
menu.addEventListener('click', e => {
  if (e.target.tagName === 'A') {
    menu.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
  }
});
const caso = document.getElementById('case');
document.getElementById('open-case').addEventListener('click', () => caso.showModal());
document.getElementById('close-case').addEventListener('click', () => caso.close());
caso.addEventListener('click', e => { if (e.target === caso) caso.close(); });
