const handleModal = (btnModal, mainModal, head) => {
  const mainModalReject = mainModal.getElementsByClassName("main-modal__close")[0];
  const mainModalAccept = mainModal.getElementsByClassName("main-modal__open")[0];

  function scriptExists(url) {
    return document.querySelectorAll(`script[src='${url}']`).length > 0;
  }
  
  function bindModal(trigger, modal, rejectTrigger, acceptTrigger) {
    const closeModal = () => {
      modal.classList.remove('main-modal--open');
      document.getElementsByTagName('html')[0].style.overflow = '';
      trigger.classList.remove('btnModal--pressed');
    };

    const openModal = () => {
      modal.classList.add("main-modal--open");
      document.getElementsByTagName('html')[0].style.overflow = 'hidden';
      trigger.classList.add('btn-modal--pressed');
    };

    trigger.addEventListener('click', (e) => {
      if (e.target) {
        e.preventDefault();
      }

      if (modal.classList.contains('main-modal--open')) {
        closeModal();
      } else {
        openModal();
      }
    });

    rejectTrigger.addEventListener('click', () => closeModal());

    acceptTrigger.addEventListener('click', () => {
      closeModal();

      if (!scriptExists('./collect.js')) {
        const fileref = document.createElement('script');
        fileref.src = './collect.js';
        head.appendChild(fileref);
      }
    });

    // modal.addEventListener('click', (e) => {
    //   if (e.target === modal) {
    //     closeModal();
    //   }
    // });
  }

  bindModal(btnModal, mainModal, mainModalReject, mainModalAccept);
};

export default handleModal;
