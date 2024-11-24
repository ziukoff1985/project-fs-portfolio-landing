const modalWindow = document.querySelector('#modal');
const closeArr = document.querySelectorAll('[data-close-modal]');

export function modalWindowOpen() {
  modalWindow.classList.add('is-open');
  document.addEventListener('keydown', modalWindowClose);

  closeArr.forEach(elm => {
    elm.addEventListener('click', modalWindowClose);
  });
}

function modalWindowClose(event) {
  closeArr.forEach(closeElm => {
    if (
      event.target === closeElm ||
      event.target.closest('.btn-close') === closeElm ||
      event.key === 'Escape'
    ) {
      modalWindow.classList.remove('is-open');
      document.body.style.overflow = '';
      document.removeEventListener('keydown', closeEsc);

      closeArr.forEach(elm => {
        elm.removeEventListener('click', modalWindowClose);
      });
    }
  });
}
