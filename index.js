$('.box').mousemove(function(e){
  let window = $(this);
  let x_axis = e.pageX - window.offset().left;
  $('.mask').css({
    left: x_axis,
    backgroundPosition: '-' + x_axis + 'px -'
  })
})