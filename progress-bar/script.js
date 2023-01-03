(function () {
  'use strict';

  let timerId;
  const get = (target) => {
    return document.querySelector(target);
  };

  // throttling을 통해 연속적인 스크롤 이벤트가 일어날 때 특정 시간에 한 번씩만 실행되게 제한을 한다.
  const throttle = (callback, time) => {
    if (timerId) return;
    timerId = setTimeout(() => {
      callback();
      timerId = undefined;
    }, time);
  };

  const $progressBar = get('.progress-bar');

  const onScroll = () => {
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrollTop = document.documentElement.scrollTop;

    const width = (scrollTop / height) * 100;
    $progressBar.style.width = width + '%';
  };

  window.addEventListener('scroll', () => throttle(onScroll, 100));
})();
