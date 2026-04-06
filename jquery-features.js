$(document).ready(function() {

    // JQUERY FEATURE 1: Smooth scroll navigation
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        const target = $(this.getAttribute('href'));
        if(target.length) {
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 50
            }, 1000);
        }
    });

    // JQUERY FEATURE 2: Form input styling on focus
    $('input, textarea').on('focus', function() {
        $(this).css('box-shadow', '0 0 5px #3498db');
    }).on('blur', function() {
        $(this).css('box-shadow', 'none');
    });

    console.log('jQuery features loaded');
});
