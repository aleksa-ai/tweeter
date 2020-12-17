/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function() {
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

  //Create tweet element for each tweet & append it to tweets container
  const renderTweets = function(tweets) {
    //$('#tweets-container').empty();
    tweets.forEach(element => {
      const $newTweet = createTweetElement(element)[0];
      $('#tweets-container').prepend($newTweet);
    });
  };

  //Event listener to submit button
  $('#tweet-form').on('submit', function(event) {
    //Prevent submit from redirecting to /tweet
    event.preventDefault();
    
    const charLeft = 140 - $("#tweet-form textarea").val().length;

    const data = $(this).serialize();

    if (charLeft === 140) {
      alert('Your tweet is empty. ');
    } else if (charLeft < 0) {
      alert('Your tweet exceeds the character limit.');
    } else {

      //Send tweets to database
      $.ajax({
        method: 'POST',
        url: '/tweets',
        data: data
      })
        .then(function(data) {
          $('#tweets-container').prepend(data);
          loadTweets();
        })
        .catch(error => console.log(error));
    }
    
  });

  //Gets tweets from database to be able to display on page
  const loadTweets = () => {
    $.ajax({
      method: 'GET',
      url: '/tweets'
    })
    
      .done((data => {
        renderTweets(data);
      }))
      
      .fail((error) => console.log(error));
  };
  //Load the tweets
  loadTweets();
});
