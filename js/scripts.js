$(document).ready(function () {
  var clickEvent = function() {
    $('.contact h4:first-child').click(function () {
      if ($(this).siblings('.details').css('opacity') === "1") {
        $(this).siblings('.details').animate({opacity: 0}, 200);
      } else {
        $(this).siblings('.details').animate({opacity: 1}, 200);
      }
    });
  };

  $("#new-contact-form").submit(function(e) {
    e.preventDefault();

    var name = $('#name').val();
    var street = $('#street').val();
    var city = $('#city').val();
    var state = $('#state').val();
    var zip = $('#zip').val();
    var email = $('#email').val();
    var phone = $('#phone').val();

    var html = '<div class="contact pull-left well">';
    html += '<h4 class="name">' + name + '</h4>';
    html += '<div class="details">';
    html += '<p>' + street + '</p>';
    html += '<p>' + city + ', ' + state + ' ' + zip + '</p>';
    html += '<p>E-mail: ' + email + '</p>';
    html += '<p>Phone Number: ' + phone + '</p>';

    $('#contact-cards').prepend(html);

    clickEvent();

    $('input').val('');
  });
});
