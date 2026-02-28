$(document).ready(function(){

    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        arrows: false,
        fade: true,
        infinite: true,
        asNavFor: '.slider-nav'
    });

    $('.slider-nav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        centerMode: true,
        centerPadding: '0px',
        focusOnSelect: true,
        infinite: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                centerMode: true,
                centerPadding: '30px'
            }
            }
        ]
    });

    $('.slider-for').on('click', 'img', function () {

        let index = $(this).closest('.slick-slide').data('slick-index');

        let modal = new bootstrap.Modal(document.getElementById('galleryModal'));
        modal.show();

        $('#galleryModal').one('shown.bs.modal', function () {

            if (!$('.modal-slider').hasClass('slick-initialized')) {
                $('.modal-slider').slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                    infinite: true,
                    speed: 500,
                    autoplay: true,
                    autoplaySpeed: 3000,
                    pauseOnHover: false,
                    pauseOnFocus: false,
                });
            }

            $('.modal-slider').slick('setPosition');
            $('.modal-slider').slick('slickGoTo', index, true);

        });
    });

});