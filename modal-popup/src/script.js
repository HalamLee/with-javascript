(function () {
  'use strict';
  const get = (target) => {
    return document.querySelector(target);
  };

  const $button = get('.modal_open_button');
  const $modal = get('.modal');
  const $body = get('body');

  const toggleModal = () => {
    $modal.classList.toggle('show');
    $body.classList.toggle('scroll_lock');
  };

  $button.addEventListener('click', () => {
    toggleModal();
  });
})();
