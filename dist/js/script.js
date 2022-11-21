window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
        document.querySelector(".header__content").classList.add('header__content-scroll');
    } else {
        document.querySelector(".header__content").classList.remove('header__content-scroll');
    }
}
