$(function() {
    var large_times = 2;

    var $small_pic = $(".small-pic-wrapper");
    var $large_pic = $(".large-pic-wrapper");
    var $select_pic = $(".select-pic-wrapper");

    var small_pic_width = $small_pic.width();
    var small_pic_height = $small_pic.height();
    var select_pic_width = $select_pic.width();
    var select_pic_height = $select_pic.height();

    console.log($large_pic);

    $small_pic.hover(function() {
        $select_pic.show();
        $large_pic.show();

        $small_pic.mousemove(function(event) {
            let mouse_left = event.clientX;
            let mouse_top = event.clientY;

            let small_pic_left_offset = $small_pic.position().left;
            let small_pic_top_offset = $small_pic.position().top;

            let select_pic_left = mouse_left - small_pic_left_offset - select_pic_width / 2;
            let select_pic_top = mouse_top - small_pic_top_offset - select_pic_height / 2;

            if (select_pic_left < 0) {
                select_pic_left = 0;
            } else if (select_pic_left > small_pic_width - select_pic_width) {
                select_pic_left = small_pic_width - select_pic_width;
            }
            if (select_pic_top < 0) {
                select_pic_top = 0;
            } else if (select_pic_top > small_pic_height - select_pic_height) {
                select_pic_top = small_pic_height - select_pic_height;
            }

            $select_pic.css({
                left: select_pic_left,
                top: select_pic_top
            });

            large_pic_left = -select_pic_left * large_times;
            large_pic_top = -select_pic_top * large_times;
            var pos_str = large_pic_left + "px" + " " + large_pic_top + "px";
            $large_pic.css({
                "background-position": pos_str
            });

        });
    }, function() {
        $select_pic.hide();
        $large_pic.hide();
    });

});