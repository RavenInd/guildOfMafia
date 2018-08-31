$(document).ready(function() {

  var n = [];
  var number = 0;
  for (var i = 0; i < $('.small').length; i++) {
    n[i] = $('.small')[i];
  }
  console.log(n);

    $('.small').click(function() {
        var source = $(this).attr('src');
        $('.popUp #popUpImage').attr('src', source);
        $('.popUpBox').css('display', 'block');
        $('.popUp').css('display', 'block');
        number = n.indexOf(this);
    });
    $('.popUpBox').click(function() {
        $('.popUpBox').css('display', 'none');
        $('.popUp').css('display', 'none');
    });
    $('.close').click(function() {
        $('.popUpBox').css('display', 'none');
        $('.popUp').css('display', 'none');
    });
    $('.next').click(function() {
      if (number < $('.small').length - 1) {
          var source = $('.small:nth-child(' + (number + 2) + ')' ).attr('src');
          $('.popUp #popUpImage').attr('src', source);
          number++;
    } else {
      number = 1;
      var source = $('.small:nth-child(' + number + ')' ).attr('src');
      $('.popUp #popUpImage').attr('src', source);
      number--;
    }
    });

    $('.prev').click(function() {
      if (number > 0) {
      var source = $('.small:nth-child(' + number + ')' ).attr('src');
      console.log(source);
      $('.popUp #popUpImage').attr('src', source);
      number--;
    } else {
      number = $('.small').length;
      var source = $('.small:nth-child(' + number + ')' ).attr('src');
      $('.popUp #popUpImage').attr('src', source);
      number--;
    }
    });
//Slider end//
});
