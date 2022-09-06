document.querySelector('.footer__stories-active').addEventListener('click', ()=> {
    document.querySelector('.footer__subblock-stories').classList.toggle("active");
})

document.querySelector('.footer__shop-active').addEventListener('click', ()=> {
    document.querySelector('.footer__subblock-shop').classList.toggle("active");
})

document.querySelector('.header__shop-active').addEventListener('click', ()=> {
    document.querySelector('.header__subblock-shop').classList.toggle("active");
})

document.querySelector('.header__stories-active').addEventListener('click', ()=> {
    document.querySelector('.header__subblock-stories').classList.toggle("active");
})

document.querySelector('.header__btn').addEventListener('click', ()=> {
    document.querySelector('.header__list').classList.toggle("active");
})