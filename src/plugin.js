import handleModal from './modules/handleModal';
import handleResizing from './modules/handleResizing';

const pluginScript = document.getElementById('idward-plugin');
const isRunning = pluginScript.getAttribute('isRunning');
const head = document.getElementsByTagName('HEAD')[0];

// // Add style.scsss to html file
// const link = document.createElement('link');
// link.rel = 'stylesheet'; 
// link.href = './style.scss'; 
// head.appendChild(link);

if (isRunning === 'true') {
  const btnModal = document.createElement('button');
  btnModal.classList.add('btn-modal');
  document.body.appendChild(btnModal);

  // creating modal window
  const mainModal = document.createElement('div');
  mainModal.classList.add('main-modal');
  mainModal.innerHTML = `
    <div class="main-modal__control">
      <div class="resizer se">&#8690;</div>
      <button type="button" class="main-modal__open">Accept</button>
      <button type="button" class="main-modal__close">Reject</button>
    </div>
  `;
  document.body.appendChild(mainModal);

  handleModal(btnModal, mainModal, head);
  handleResizing();
}
