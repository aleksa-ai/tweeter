/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {
// Fake data taken from initial-tweets.json
  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ];

  // Returns object to append to html
  const createTweetElement = function(tweet) {
    const $tweet = $(`
<article class="tweet-containers">
  <header>
    <div>
      <div>
        <img src="${tweet.user.avatars}">
      </div>
      <span>${tweet.user.name}</span>
    </div>
    <span class="handle">${tweet.user.handle}</span>
  </header>
  <p>
    ${tweet.content.text}
  </p>
  <footer>
    <span class="tweet-age">${tweet.created_at} days ago</span>
    <div class="engagement">
      <div class="flag"></div>
      <div class="retweet"></div>
      <div class="like"></div>
    </div>
  </footer>
</article>
`);
    return $tweet;
  };

  const renderTweets = function(tweets) {
    tweets.forEach(element => {
      const $newTweet = createTweetElement(element)[0];
      $('#tweets-container').prepend($newTweet);
    });
  };

  //Prevent submit from redirecting to /tweet  which has no POST & generates a 400 error
  $('#tweet-form').on('submit', function(event) {
    event.preventDefault();
    //console.log($(this).serialize());

    $.ajax({
      method: 'POST',
      url: '/tweets',
      data: $(this).serialize()
    })
      .then(function(data) {
        $('#tweets-container').prepend(data);
      })
      .catch(error => console.log(error));

      // $.ajax({
      //   method: 'GET',
      //   url: '/tweets'
      // })
      // .done((data) => {
      //   renderTweets(data);
      // })
      // .fail((error) => console.log(error));
  });
  
  //start the app showing the tweets
  renderTweets(data);
});
