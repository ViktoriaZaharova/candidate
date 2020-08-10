$('[data-fancybox="gallery"]').fancybox({
    thumbs          : false,
    arrows          : true,
    infobar: false,
    buttons: [
        "close"
    ],
});

$('[name=phone]').mask("+7(999) 999-99-99");


$('.about-content__box').each(function () {

    var heightText = $(this).find('.box-text').height();

    if (heightText > 384) {

        $(this).addClass('collapsed').append('<a href="#" class="links-load">Читать далее..</a>');
    }

});

$('.links-load').on('click', function(e){
    e.preventDefault();

    var
        $this = $(this),
        content = $(this).parents('.about-content__box');


    if(!$this.hasClass('trigger')){
        $this.addClass('trigger');
        $this.html('Скрыть текст');

        content.removeClass('collapsed');
    } else {
        $this.removeClass('trigger');
        $this.html('Читать далее..');

        content.addClass('collapsed');
    }
});