$('.tagBtn').on('click', function() {
  var isHasClass = $(this).hasClass('view');

  if(isHasClass) {
    $(this).removeClass('view');
    $('.layerWrap').hide();
  } else {
    $(this).addClass('view');
    $('.layerWrap').show();
  }
});