const modalWindow = document.querySelector('#modal');
const closeBtn = document.querySelector('[data-close-modal]');

export function modalWindowOpen() {
  modalWindow.classList.add('is-open');

  document.addEventListener('keydown', modalWindowClose);
  modalWindow.addEventListener('click', modalWindowClose);
  closeBtn.addEventListener('click', modalWindowClose);
}

function modalWindowClose(event) {
  if (
    event.target === modalWindow ||
    event.target.closest('.btn-close') === closeBtn ||
    event.key === 'Escape'
  ) {
    modalWindow.classList.remove('is-open');
    document.body.style.overflow = '';

    document.removeEventListener('keydown', modalWindowClose);
    modalWindow.removeEventListener('click', modalWindowClose);
    closeBtn.removeEventListener('click', modalWindowClose);
  }
}
