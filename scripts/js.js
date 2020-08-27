$(document).ready(function() {
	$('#show_more').click(function(event) {
        $('.last_check').toggleClass('active');
    });
    $('.span_rotate, .filter__metro_title').click(function(event) {
        $('.span_rotate').toggleClass('rotate');
        $('.filter__metro_check, .filter__metro_check_all').toggleClass('visible');
        $('.filter__metro').toggleClass('height');
    });
    $('.span_rotate_data, .filter__data_title').click(function(event) {
        $('.span_rotate_data').toggleClass('rotate');
        $('.filter__data_radio').toggleClass('visible');
        $('.filter__data').toggleClass('height');
    });
    $('.span_rotate_opt, .filter__options_title').click(function(event) {
        $('.span_rotate_opt').toggleClass('rotate');
        $('.filter__options_check').toggleClass('visible');
        $('.filter__options').toggleClass('height');
    });
    $('label_checkbox input:checked').click(function(){
        $('filter__metro_check input:checkbox').prop('checked', false);
    });
const $block = $('.add').clone();

$('.catalog__show_circle').click(function() {
  $($block.clone()).appendTo('.catalog__body');
});
});
