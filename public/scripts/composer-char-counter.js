$(document).ready(function() {

  $('.new-tweet textarea').on("keyup", function() {

    let charsRemaining = TWEET_CHAR_LIMIT - $(this).val().length;

    $(".counter").html(charsRemaining);
    if (charsRemaining < 0) {
      $(".counter").addClass("over-limit");
    } else {
      $(".counter").removeClass("over-limit");
    }

  });

});