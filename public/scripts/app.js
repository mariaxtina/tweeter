function createTweetElement(tweet) {
    return $(
      `<article class='tweet'>
      <header>
        <img class='avatar' src=${tweet.user.avatars.small}>
        <h1>${tweet.user.name}</h1>
        <span class="handle">${tweet.user.handle}</span>
      </header>
      <div>
       ${tweet.content.text}
      </div>
      <footer>
        <span> ${tweet.created_at} </span>
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

$(document).ready(function() {

  getAndRenderAllTweets();

    $("form").on( "submit", function(event) {
      event.preventDefault();
      var newTweet = ($(this).serialize());
      $.ajax({
          url: '/tweets/',
          method: 'POST',
          data: newTweet,
          dataType: "json",
          success: onTweetSuccess
        });
        // error.function() {
        //   alert('error')
        // }
    });
  });

  var onTweetSuccess = function(data) {
    getAndRenderAllTweets();
  }

  var getAndRenderAllTweets = function() {
    $.ajax({
        url: '/tweets/',
        method: 'GET',
        success: function (data) {
          renderTweets(data);
        }
      });
}