$(document).ready(function() {
  console.log("composer.js ready");

  $('.new-tweet textarea').on( "keyup", function() {
    var val = $(this).val().length;
    var newVal = 140 - val;
    $(".counter").html(newVal);
    if (newVal < 0) {
      $(".counter").css({ 'color': 'red'});
    } else {
      $(".counter").css({ 'color': 'black'});
    }
  });
});