//Popup header
$(document).ready(function() {
    alert('123123');
})
$('.header__help').on('click', function (event) {
    event.preventDefault();
    let popup = $('.header__popup');
    $(popup).toggle('slow');
});


$('.header__burger').on('click', function (event) {
    event.preventDefault();
    let popup = $('.header__popup');
    $(popup).toggle('slow');
});

//Burger
(function () {
    let burger = document.querySelector('.header__burger');
    burger.addEventListener('click', () => {
        burger.classList.toggle('header__burger-active');
    });
}());

//Share
$('.paying__share').on('click', function (event) {
    event.preventDefault();
    let share = $('.ya-share2');
    $(share).toggle('slow');
});

//Scroll
$("a[href^='#']").click(function () {
    var href = $(this).attr("href");
    $("html, body").animate({
        scrollTop: $(href).offset().top - 195 + "px"
    });
    return false;
});

//Icons footer
(function () {
    if (window.pluso)
        if (typeof window.pluso.start == "function") return;
    if (window.ifpluso == undefined) {
        window.ifpluso = 1;
        var d = document,
            s = d.createElement('script'),
            g = 'getElementsByTagName';
        s.type = 'text/javascript';
        s.charset = 'UTF-8';
        s.async = true;
        s.src = ('https:' == window.location.protocol ? 'https' : 'http') + '://share.pluso.ru/pluso-like.js';
        var h = d[g]('body')[0];
        h.appendChild(s);
    }
})();

//Menu-small
$(document).ready(function () {
    $('.accord').click(function (e) {
        e.preventDefault();
         $('.accordeon__title').toggleClass('rotate').next();
         $(this).next().slideToggle();
    });
});
