function appearanceBtn() {
  const lengthScroll = document
    .querySelector('#hero')
    .getBoundingClientRect().width;
  const scrollBtn = document.querySelector('.scroll-to-top');

  if (window.scrollY > lengthScroll + 100) {
    scrollBtn.classList.add('is-open');
    scrollBtn.addEventListener('click', topScroll);
  } else {
    scrollBtn.classList.remove('is-open');
    scrollBtn.removeEventListener('click', topScroll);
  }
}

function topScroll() {
  window.scroll({ top: 0, left: 0, behavior: 'smooth' });
}

window.addEventListener('scroll', appearanceBtn);
