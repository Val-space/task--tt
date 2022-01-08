const handleResizing = () => {
  const resizer = document.getElementsByClassName('resizer')[0];
  const modalWindow = document.getElementsByClassName('main-modal__control')[0];
  let currentResizer;

  function mousedown(e) {
    currentResizer = e.target;
    let prevX = e.clientX;
    let prevY = e.clientY;

    function mousemove(e) {
      const rect = modalWindow.getBoundingClientRect();

      if (currentResizer.classList.contains('se')) {
        modalWindow.style.width = rect.width - (prevX - e.clientX) + 'px';
        modalWindow.style.height = rect.height - (prevY - e.clientY) + 'px';
      }

      prevX = e.clientX;
      prevY = e.clientY;
    }

    function mouseup(e) {
      window.removeEventListener('mousemove', mousemove);
    }

    window.addEventListener('mousemove', mousemove);
    window.addEventListener('mouseup', mouseup);
  }

  resizer.addEventListener('mousedown', mousedown);
};

export default handleResizing;
