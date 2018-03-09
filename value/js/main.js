;(function($){
    $('.back-1').on('mouseenter', function () {
        $(this)
            .removeClass('passive')
            .addClass('active')
            .siblings()
            .removeClass('active')
            .addClass('passive');
    });
    $('.back-2').on('mouseenter', function () {
        $(this)
            .removeClass('passive')
            .addClass('active')
            .siblings()
            .removeClass('active')
            .addClass('passive');
    });
})(jQuery);