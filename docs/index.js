$(function () {
    function scrollAnimation() {
        $(window).scroll(function () {
            let defPosition = $(".def").offset().top,
                middlePosition = $(".middle").offset().top,
                mahouPosition = $(".mahou").offset().top,
                scroll = $(window).scrollTop(),
                windowHeight = $(window).height();
            $(".def").each(function () {
                if (scroll <= defPosition - windowHeight + windowHeight * 0.4) {
                    $(this).removeClass('is-visible');
                    $(this).addClass('no-alpha');
                } else if (scroll <= middlePosition - windowHeight + windowHeight * 0.5) {
                    $(this).addClass('is-visible');
                    $(this).removeClass('no-alpha');
                } else {
                    $(this).removeClass('is-visible');
                    $(this).addClass('no-alpha');
                }
            });
            $(".middle").each(function () {
                if (scroll <= middlePosition - windowHeight + windowHeight * 0.5) {
                    $(this).removeClass('is-visible');
                    $(this).addClass('no-alpha');
                } else if (scroll <= mahouPosition - windowHeight + windowHeight * 0.5) {
                    $(this).addClass('is-visible');
                    $(this).removeClass('no-alpha');
                } else {
                    $(this).removeClass('is-visible');
                    $(this).addClass('no-alpha');
                }
            });
            $(".mahou").each(function () {
                if (scroll <= mahouPosition - windowHeight + windowHeight * 0.5) {
                    $(this).removeClass('is-visible');
                    $(this).addClass('no-alpha');
                } else { //最後なので消えないことにしてる
                    $(this).addClass('is-visible');
                    $(this).removeClass('no-alpha');
                }
            });
        });
    }
    scrollAnimation()
    $(window).trigger('scroll');
});