/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

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
]

// const renderTweets = function(tweets) {
//   // loops through tweets
//   // calls createTweetElement for each tweet
//   // takes return value and appends it to the tweets container
// }

// Returns object to append to html
const createTweetElement = function(tweet) {
  const $tweet = $(`
<article>
  <header>
    <div>
      <div>
        <img src="${tweet.user.avatars}">
      </div>
      <span>Newton</span>
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

const $tweet = createTweetElement(tweetData);

$(document).ready(function() {
  $(document).on('dblclick', function(event) {
    $('#tweets-container').append(createTweetElement(tweetData)[0]);
  });
});

// renderTweets(data);
