;(function($){
    $('.back-1').on('mouseenter', function () {
        console.log('hover 1');
        var width = $(this).width(),
            height = $(this).height(),
            w1 = width*0.95,
            w2 = width*0.965,
            w3 = width*0.98,
            w4 = width*0.99,
            h1 = height*0.95;
        $(this)
            .removeClass('passive')
            .addClass('active')
            .siblings()
            .removeClass('active')
            .addClass('passive');



    //     $(this)
    //         .animate({
    //             'width': w1,
    //             'height': h1,
    //     'z-index': '1',
    //     'left': '35px'
    // }, 100, 'swing')
        //     .animate({
        //         'transform': 'scale(0.96, 0.96) rotateY(5deg)',
        //         'z-index': '1',
        //         'left': '15px'
        //     }, 100, 'swing')
        // .animate({
        //         'transform': 'scale(0.975, 0.975) rotateY(0)',
        //         'z-index': '1',
        //         'left': '0'
        //     }, 100, 'swing')
        // .animate({
        //         'transform': 'scale(0.99, 0.99) rotateY(-5deg)',
        //         'z-index': '2',
        //         'left': '15'
        //     }, 100, 'swing')
        // .animate({
        //         'transform': 'scale(1, 1) rotateY(0)',
        //         'z-index': '2',
        //         'left': '35'
        //     }, 100, 'swing')


    });
    $('.back-2').on('mouseenter', function () {
        console.log('focus 2');
        $(this)
            .removeClass('passive')
            .addClass('active')
            .siblings()
            .removeClass('active')
            .addClass('passive');
    });
})(jQuery);