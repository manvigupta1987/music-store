$(function() {
  let menu = $('nav ul');
  $('#openup').on('click', function(e) {
    e.preventDefault();
    menu.slideToggle();
  })

  $(window).resize(function(){
    let width = $(this).width();
    if(width > 480 && menu.is(':hidden')) {
      menu.removeAttr('style');
    }
  })

  $('nav li').on('click', function(e) {
    var w = $(window).width();
    if (w < 480) {
      menu.slideToggle();
    }
  });
  $('.open-menu').height($(window).height());
});


