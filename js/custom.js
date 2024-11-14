$(function () {
    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();

        if (sct > 0) {
            $('#header').addClass('on')
        } else {
            $('#header').removeClass('on')
        }
    });

    $('.mopen').on('click', function () {
        $('.gnb').toggleClass('on')
    });

    $('#header .gnb>ul>li>a').on('click', function (e) {
        if ($('.gnb').hasClass('on')) {
            e.preventDefault();
            $(this).next().slideToggle();
        }
    });

    $(window).on('resize', function () {
        $('.gnb').removeClass('on');
        $('#header .gnb>ul>li ul').removeAttr('style')
    });

    const collection = new Swiper(".collection_main", {
        slidesPerView: 1,
        spaceBetween: 8,

        breakpoints: {
            768: {
                slidesPerView: 4,
                spaceBetween: 8,
            },
        },
    });

    const official = new Swiper(".t1_official_unform .slide_area", {
        slidesPerView: 1,
        spaceBetween: 8,
        navigation: {
            nextEl: '#main_t1_official_unform .t1_official_unform_arrows .swiper-button-next',
            prevEl: '#main_t1_official_unform .t1_official_unform_arrows .swiper-button-prev',
        },

        breakpoints: {
            768: {
                slidesPerView: 3,
                spaceBetween: 8,
            },
        },
    });

    const t1 = new Swiper(".slide_swiper1", {
        slidesPerView: 1,
        spaceBetween: 8,
        navigation: {
            nextEl: '#main_product .slide_swiper1 .swiper-button-next',
            prevEl: '#main_product .slide_swiper1 .swiper-button-prev',
        },

        breakpoints: {
            768: {
                slidesPerView: 4,
                spaceBetween: 8,
            },
        },
    });
    const t2 = new Swiper(".slide_swiper2", {
        slidesPerView: 1,
        spaceBetween: 8,
        navigation: {
            nextEl: '#main_product .slide_swiper2 .swiper-button-next',
            prevEl: '#main_product .slide_swiper2 .swiper-button-prev',
        },

        breakpoints: {
            768: {
                slidesPerView: 4,
                spaceBetween: 8,
            },
        },
    });
    const t3 = new Swiper(".slide_swiper3", {
        slidesPerView: 1,
        spaceBetween: 8,
        navigation: {
            nextEl: '#main_product .slide_swiper3 .swiper-button-next',
            prevEl: '#main_product .slide_swiper3 .swiper-button-prev',
        },

        breakpoints: {
            768: {
                slidesPerView: 4,
                spaceBetween: 8,
            },
        },
    });

    $('#main_product .list li').on('click', function () {
        let num = $(this).index();

        $(this).addClass('on').siblings().removeClass('on')

        $('#main_product .con').eq(num).addClass('on').siblings().removeClass('on')
    });
})