$(function () {
    // aimation呼び出し
    if ($('.def').length) {
        defScrollAnimation();
    }
    if ($('.middle').length) {
        middleScrollAnimation();
    }
    if ($('.mahou').length) {
        mahouScrollAnimation();
    }

    // aimation関数
    function defScrollAnimation() {
        $(window).scroll(function () {
            $(".def").each(function () {
                let position = $(this).offset().top,
                    scroll = $(window).scrollTop(),
                    windowHeight = $(window).height();

                if(scroll > position - windowHeight + windowHeight*0.4) { //見える
                    $(this).addClass('is-visible');
                    $(this).removeClass('no-alpha');
                }else if(scroll > position - windowHeight) { //これから
                    $(this).removeClass('is-visible');
                    $(this).addClass('no-alpha');
                }
            });
        });
    }
    function middleScrollAnimation() {
        $(window).scroll(function () {
            
            $(".middle").each(function () {
                let position = $(this).offset().top,
                    scroll = $(window).scrollTop(),
                    windowHeight = $(window).height();

                if(scroll > position - windowHeight + windowHeight*0.5) { //見える
                    $(this).addClass('is-visible');
                    $(this).removeClass('no-alpha');

                    $(".def").removeClass('is-visible');
                    $(".def").addClass('no-alpha');

                }else if(scroll > position - windowHeight) { //これから
                    $(this).removeClass('is-visible');
                    $(this).addClass('no-alpha');
                }
            });
        });
    }
    function mahouScrollAnimation() {
        $(window).scroll(function () {
            $(".mahou").each(function () {
                let position = $(this).offset().top,
                    scroll = $(window).scrollTop(),
                    windowHeight = $(window).height();
                
                if(scroll > position - windowHeight + windowHeight*0.5) { //見える
                    $(this).addClass('is-visible');
                    $(this).removeClass('no-alpha');

                    $(".middle").removeClass('is-visible');
                    $(".middle").addClass('no-alpha');

                }else if(scroll > position - windowHeight) { //これから
                    $(this).removeClass('is-visible');
                    $(this).addClass('no-alpha');
                }
            });
        });
    }
    $(window).trigger('scroll');
});