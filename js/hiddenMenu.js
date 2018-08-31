$(document).ready(function() {
  $('.hiddenMenu img').click(function() {
    $('.hiddenMenu > div').toggle('.hiddenMenuCondition');
  });
  $('.infoBlock').click(function() {
    $(this).toggleClass('activeInfoBlock');
  });


});
