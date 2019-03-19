$(document).ready(function() {
  $('.menu-toggle').click(function() {
    if ($(this).hasClass('open')) {
      $(this).removeClass('open');
      $('.nav-menu').removeClass('open');
    }
    else {
      $(this).addClass('open');
      $('.nav-menu').addClass('open');
    }
  });

$('.lnk-toggle').click(function(e){
  e.preventDefault();
    $(this).next().toggleClass("collapsed");
});

});
