$(document).ready(function() {
  console.log("composer.js ready");

  $('.new-tweet textarea').on("keyup", function() {
    var charsRemaining = 140 - $(this).val().length;
    $(".counter").html(charsRemaining);
    if (charsRemaining < 0) {
      $(".counter").addClass("overLimit");
    } else {
      $(".counter").removeClass("overLimit");
    }
  });
});