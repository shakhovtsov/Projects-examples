

document.querySelector(".menu--dropdown").onclick = () => {
    document.querySelector(".menu__select").classList.toggle("act");
};

document.querySelector(".menu--dropdown-blog").onclick = () => {
    document.querySelector(".menu__blog").classList.toggle("act");
};

document.querySelector(".header__btn").onclick = () => {
    document.querySelector(".header__inner").classList.toggle("act-menu");
};

let offset = 0; // Смещение от левого края
const sliderLine = document.querySelector('.box__items');

document.querySelector('.slider__inner-next').addEventListener('click', function () {
    offset += 336;
    if (offset > 1008) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
})

document.querySelector('.slider__inner-prew').addEventListener('click', function () {
    offset = offset - 336;
    if (offset < 0) {
        offset = 1008;
    }
    sliderLine.style.left = -offset + 'px';
})