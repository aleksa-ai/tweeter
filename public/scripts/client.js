/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Test / driver code (temporary). Eventually will get this from the server.
 const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
  "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
  "created_at": 1461116232227
}

const createTweetElement = function(tweet){
  const $tweet = (`
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
//Return structure to append to html
return $tweet;
};

const tweet = createTweetElement(tweetData);

// Test / driver code (temporary)
console.log(tweet); // to see what it looks like
//$('#tweets-container').append($tweet);