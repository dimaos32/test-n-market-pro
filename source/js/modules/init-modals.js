import {setupModal} from '../utils/modal';

const modals = document.querySelectorAll('.modal');
const modalFlat = document.querySelector('.modal--flat');
const modalFlatBtns = document.querySelectorAll('[data-modal="flat"]');

// аргументы setupModal(modal, closeCallback, modalBtns, openCallback, noPrevDefault, preventScrollLock)
// возможна инициализация только с первыми аргументом,
// если вам нужно открывать модалку в другом месте под какими-нибудь условиями
const initModals = () => {
  // фикс для редких случаев, когда модалка появляется при загрузке страницы
  window.addEventListener('load', () => {
    if (modals.length) {
      modals.forEach((el) => {
        setTimeout(() => {
          el.classList.remove('modal--preload');
        }, 100);
      });
    }
  });

  if (modalFlat && modalFlatBtns.length) {
    setupModal(modalFlat, false, modalFlatBtns, false, false);
  }
};

export {initModals};
