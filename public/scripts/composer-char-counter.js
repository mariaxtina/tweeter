$(document).ready(function() {
  $('.new-tweet textarea').on("keyup", function() {
    var charsRemaining = 140 - $(this).val().length;
    $(".counter").html(charsRemaining);
    if (charsRemaining < 0) {
      $(".counter").addClass("over-limit");
    } else {
      $(".counter").removeClass("over-limit");
    }
  });
});