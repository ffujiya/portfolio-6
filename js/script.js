
let burger = document.querySelector('.burger');

burger.addEventListener('click', function () {
  document.querySelector('.burger').classList.toggle('active');
  document.querySelector('.menu').classList.toggle('active');
  document.querySelector('body').classList.toggle('lock');
})

function ibg() {

  let ibg = document.querySelectorAll(".ibg");
  for (var i = 0; i < ibg.length; i++) {
    if (ibg[i].querySelector('img') && ibg[i].querySelector('img').getAttribute('src') != null) {
      ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
    }
  }

}

ibg();

var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  //   direction: 'vertical',
  //   loop: true,

  //   If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  //   // Navigation arrows
  //   navigation: {
  //     nextEl: '.swiper-button-next',
  //     prevEl: '.swiper-button-prev',
  //   },

  // And if we need scrollbar
  //   scrollbar: {
  //     el: '.swiper-scrollbar',
  //   },
})