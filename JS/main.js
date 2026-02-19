(function(){
  const header = document.querySelector('header');
  window.onscroll = () =>{
    if(window.pageYOffset > 0){
      header.classList.add('header_active');
    }
    else{
      header.classList.remove('header_active');
    }
  };
}
());
//Burger start//
(function (){
const burgerItem = document.querySelector('.burger');
const menu = document.querySelector('.header_nav');
const menuCloseItem = document.querySelector('.header_nav-close');
const menuLinks = document.querySelectorAll('.header_link');
burgerItem.addEventListener('click', () => {
menu.classList.add('header_nav_active');
});
menuCloseItem.addEventListener('click', () => {
  menu.classList.remove('header_nav_active');
});
if(window.innerWidth < 768){
for (let i = 0; i < menuLinks.length; i += 1){
  menuLinks[i].addEventListener('click', () => {
  menu.classList.remove('header_nav_active');
  })
}
}
}());
//Burger end//

//Scroll to anchos start//
// Smooth scroll start
(function () {

  const links = document.querySelectorAll('.js-scroll');
  const header = document.querySelector('.header');

  if (!links.length || !header) return;

  const smoothScroll = (target, duration = 800) => {
    const headerHeight = header.offsetHeight;
    const element = document.querySelector(target);

    if (!element) return;

    const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - headerHeight;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    const animation = currentTime => {
      if (!startTime) startTime = currentTime;

      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);

      window.scrollTo(0, startPosition + distance * progress);

      if (progress < 1) requestAnimationFrame(animation);
    };

    requestAnimationFrame(animation);
  };

  links.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      smoothScroll(link.getAttribute('href'));
    });
  });

})();
// Scroll to anchos end//