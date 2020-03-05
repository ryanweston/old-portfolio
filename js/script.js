$('.imagehover').mousemove(function(e){
  $(this).find('img').addClass('visible');
  $(this).find('img').css({
      left: e.clientX/2, top: e.clientY/6
    });
}).mouseleave(function(){
  $(this).find('img').removeClass('visible');
});