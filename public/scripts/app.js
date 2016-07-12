function createTweetElement(tweet) {
  return $(
    `<article class='tweet'>
      <header>
        <img class='avatar' src=${tweet.user.avatars.small}>
        <h1>${tweet.user.name}</h1>
        <span class="handle">${tweet.user.handle}</span>
      </header>
      <div class="tweet-body">${$('<div/>').text(tweet.content.text).html()}</div>
      <footer>
        <span class="date"> ${tweet.created_at} </span>
        <a href="#" class="button"><i class="fa fa-flag" aria-hidden="true"></i></a>
        <a href="#" class="button"> <i class="fa fa-retweet" aria-hidden="true"></i> </a>
        <a href="#" class="button"><i class="fa fa-heart" aria-hidden="true"></i></a>
      </footer>
    </article>`);
}

function renderTweets(tweets) {
  tweets.forEach(function(tweet) {
    createTweetElement(tweet).appendTo('#all-tweets');
  });
}

window.TWEET_CHAR_LIMIT = 140;

$(document).ready(function() {

  getAndRenderAllTweets();

  $("form").on( "submit", function(event) {
    event.preventDefault();
    let newTweet = ($(this).serialize());

    if ($('textarea').val() == "" || null) {
      alert("Please enter text!");
      return false;
    } else if ($('textarea').val().length > TWEET_CHAR_LIMIT) {
      alert("Too long!");
      return false;
    }

    let inputText = $("form").find("input[type=text], textarea").val("");

    $.ajax({
        url: '/tweets/',
        method: 'POST',
        data: newTweet,
        dataType: "json",
        success: getAndRenderAllTweets()
    });

  });

});


const getAndRenderAllTweets = function() {
  $.ajax({
    url: '/tweets/',
    method: 'GET',
    success: function (data) {
      $(".tweet").remove();
      renderTweets(data);
    }
  });
}