const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close'),
      PromoBTNS = document.querySelector('.promo__btns');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');

});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');

});

const counters = document.querySelectorAll('.skills__ratings-counter'),
      lines = document.querySelectorAll('.skills__ratings-line span');

counters.forEach((item, i) => {
    console.log(item.innerHTML )
    lines[i].style.width = item.innerHTML;
});





