var swiper = new Swiper('.reviews__swiper', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  keyboard: { enabled: true, onlyInViewport: true, pageUpDown: true },

  mousewheel: {
    sensitivity: 1,
    eventsTarget: '.reviews__swiper',
  },

  loop: true,
});