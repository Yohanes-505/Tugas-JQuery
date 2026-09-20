$(document).ready(function() {    
    // ketika class faq-question diklik maka
    $('.faq-question').click(function() {
        // answer = isi dari class faq-answer yang berada di faq-question yang diklik
        let answer = $(this).next('.faq-answer');
        answer.slideToggle(100);
        $(this).toggleClass('active');

        // hanya salah satu faq yang terbuka
        $('.faq-answer').not(answer).slideUp(100);
        $('.faq-question').not(this).removeClass('active');
    });
  
    // untuk DOM fitur like
    $('.btn-like').click(function() {
        $(this).toggleClass('liked');
        let counterSpan = $(this).find('.like-count');
        let currentCount = parseInt(counterSpan.text());

        if ($(this).hasClass('liked')) {
            counterSpan.text(currentCount + 1);
        } else {
            counterSpan.text(currentCount - 1);
        }
    });

    let tombolAtas = $('#back-to-top');

    // muncul kalau sudah scroll lebih dari 300px, hilang kalau di atas
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            tombolAtas.fadeIn(300);
        } else {
            tombolAtas.fadeOut(300);
        }
    });

    // saat diklik, halaman naik ke atas dengan halus
    tombolAtas.click(function() {
        $('html').css('scroll-behavior', 'auto');
        $('html, body').animate({ scrollTop: 0 }, 600, function() {
            $('html').css('scroll-behavior', '');
        });
    });

});

// judul, paragraf, dan tombol muncul bergantian saat halaman dibuka

    let kurangiAnimasi = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!kurangiAnimasi) {
        $('.hero-content').children().each(function(index) {
            $(this)
                .css({ opacity: 0, position: 'relative', top: '20px' }) // mulai transparan & agak turun
                .delay(index * 250)                                      // tiap elemen jeda 250ms
                .animate({ opacity: 1, top: 0 }, 700);                   // lalu naik & muncul
        });
    }

 // setelah link di navbar diklik, checkbox hamburger diuncheck
    $('.nav-list a').click(function() {
        $('#nav-toggle').prop('checked', false);
    });