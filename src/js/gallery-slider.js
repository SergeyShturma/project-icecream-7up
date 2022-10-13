var swiper = new Swiper('.gallery__swiper', {
  centeredSlides: true,
  
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  keyboard: { enabled: true, onlyInViewport: true, pageUpDown: true },

  mousewheel: {
    sensitivity: 1,
    eventsTarget: '.gallery__swiper',
  },

  loop: true,
});
