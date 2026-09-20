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

});