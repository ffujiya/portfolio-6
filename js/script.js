const indexEl = document.querySelector('.swiper-index');
const burgerMenu = document.querySelector('.menu-icon');
const headerMenu = document.querySelector('.header__menu');
const welcomeCard = document.querySelector('.welcome__card');
const menuItems = document.querySelectorAll('.menu__item');

const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

indexEl.innerHTML = `${swiper.realIndex + 1} | ${swiper.slides.length - 2}`;

swiper.on('slideChange', function () {
    indexEl.innerHTML = `${swiper.realIndex + 1} | ${swiper.slides.length - 2}`;
});

burgerMenu.addEventListener('click', function () {
    welcomeCard.classList.toggle('hidden');
    headerMenu.classList.toggle('menu-visible');
    burgerMenu.classList.toggle('active')
})

for(const menuItem of menuItems){
    menuItem.addEventListener('click', () => {
        if(burgerMenu.classList.contains('active')){
            welcomeCard.classList.remove('hidden');
            headerMenu.classList.remove('menu-visible');
            burgerMenu.classList.remove('active');
        }
    })
}