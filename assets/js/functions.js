//$(function(){});

$(window).scroll(function() {
    servicesVidScroll();
});

function servicesVidScroll() {

  var wScroll = $(window).scrollTop();

  $('.services-strip').css('background-position','center -'+ wScroll +'px');
}
