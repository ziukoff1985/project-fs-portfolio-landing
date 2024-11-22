const mobileMenu = document.querySelector('.mob-menu');
const openMenuBtn = document.querySelector('#header .js-open-menu');
const arrCloseBtn = document.querySelectorAll('.mob-menu [data-close="true"]');

function openMenu() {
  mobileMenu.classList.add('is-open');
  document.body.style.overflow = 'hidden';
}

function closeMenu() {
  document.body.style.overflow = '';
  mobileMenu.classList.remove('is-open');
}

openMenuBtn.addEventListener('click', openMenu);
arrCloseBtn.forEach(e => {
  e.addEventListener('click', closeMenu);
});
