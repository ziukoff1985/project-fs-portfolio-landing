const scrollBtn = document.querySelector('.scroll-to-top');

function appearanceBtn() {
  const lengthScroll = document
    .querySelector('#hero')
    .getBoundingClientRect().height;
  console.log(lengthScroll);

  window.scrollY > lengthScroll ? openScrollBtn() : closeScrollBtn();
}

export function openScrollBtn() {
  scrollBtn.classList.add('is-open');
  scrollBtn.addEventListener('click', topScroll);
}

export function closeScrollBtn() {
  scrollBtn.classList.remove('is-open');
  scrollBtn.removeEventListener('click', topScroll);
}

function topScroll() {
  window.scroll({ top: 0, left: 0, behavior: 'smooth' });
}

window.addEventListener('scroll', appearanceBtn);
