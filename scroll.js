// bottomの初期スクロール位置を下部に移動
// bottom.scrollLeft = bottom.scrollWidth - bottom.clientWidth;

function updateScroll(event) {
    const dot = document.querySelector(".scroll-dot");
    let windowHeight = 738/$(window).height();
    console.log(windowHeight);
    
    let scroll = $(window).scrollTop();
    const sakura = document.querySelector(".scroll-sakura");
    if ($('.scroll-rect').length) {
        const rect = document.querySelector(".scroll-rect");
        const rect_small = document.querySelector(".scroll-rect-small");
        rect.style.top = `-${scroll*0.02 *windowHeight}vh`;
        rect_small.style.top = `-${scroll*0.012 *windowHeight}vh`;
    }

    // 738 
    // ここ時間あれば修正

  
    sakura.style.top = `-${scroll*0.05 *windowHeight}vh`;
    dot.style.top = `-${scroll*0.005 *windowHeight}vh`;
  
}

document.body.onscroll = updateScroll;