function burgerMenu(selector) {
   let menu = $(selector);
   let button = menu.find('.header-burger__btn');
   let links = menu.find('.header__nav-link');
   let overlay = menu.find('.header-burger__overlay');

   button.on('click', (e) => {
      e.preventDefault();
      toggleMenu();
   });

   links.on('click', () => toggleMenu());

   overlay.on('click', () => toggleMenu());

   function toggleMenu() {
      menu.toggleClass('header__navigation-active');
   }
}

burgerMenu('.header__navigation');