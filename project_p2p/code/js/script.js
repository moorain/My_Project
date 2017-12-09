   // 小屏切换
   ;(function () {
    var flag = "false";
    $(".offcanvas-btn").on("click", function (event, touchflag) {
        if (touchflag) {
            flag = touchflag;
        }
        if (flag == "false") {
            $(".offcanvas").addClass("activeside");
            flag = "true";
            $(this).html('<i class="fa fa-angle-double-left" aria-hidden="true"></i>')
        } else {
            $(".offcanvas").removeClass("activeside");
            flag = "false";
            $(this).html('<i class="fa fa-angle-double-right" aria-hidden="true"></i>')
        }
    })
})()

// 移动端侧栏滑动
;(function () {
    var startX, endX;
    minMove = 30;
    minMove1 = -30;
    $(document).on("touchstart", function (e) {
        startX = e.originalEvent.changedTouches[0].pageX;//获取当前触摸坐标
    })
    $(document).on("touchend", function (e) {
        endX = e.originalEvent.changedTouches[0].pageX;
        if (endX - startX > minMove) {
            // 注册一个事件
            $(document).trigger("leftToRight");
        }
        if (endX - startX < minMove1) {
            $(document).trigger("rightToLeft");
        }
    });
    //从左到右滑动
    $(document).on("leftToRight", function () {
        // 执行事件
        $(".offcanvas-btn").trigger("click", ["false"]);
    })
    // 从右到左滑动
    $(document).on("rightToLeft", function () {
        $(".offcanvas-btn").trigger("click", ["true"]);
    })
})();