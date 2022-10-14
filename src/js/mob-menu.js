(() => {
    const mobileMenu = document.querySelector('.js-menu-container'); // в середині клас контейнера меню
    const openMenuBtn = document.querySelector('.js-open-menu'); // в середині клас кнопки бургера
    const closeMenuBtn = document.querySelector('.js-close-menu'); // в середині клас кнопки закриття меню
    openMenuBtn.addEventListener('click', () => {
      openMenuBtn.classList.toggle('is-open');
      mobileMenu.classList.toggle('is-open');
      document.body.classList.toggle('no-scroll');
    });
    closeMenuBtn.addEventListener('click', () => {
      openMenuBtn.classList.toggle('is-open');
      mobileMenu.classList.remove('is-open');
      closeMenuBtn.classList.remove('is-open');
      document.body.classList.remove('no-scroll');
    });
    document.querySelectorAll('.menu__navigation').forEach(n =>
        n.addEventListener('click', () => {
          openMenuBtn.classList.remove('is-open');
          mobileMenu.classList.remove('is-open');
          document.body.classList.remove('no-scroll');
        })
      );
  })();