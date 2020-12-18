/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function() {
  //Escapes user input that could be sent to server
  const escape =  function(str) {
    let safeHtml = document.createElement('div');
    safeHtml.appendChild(document.createTextNode(str));
    return safeHtml.innerHTML;
  };


  // Returns object to append to html
  const createTweetElement = function(tweet) {
    const $tweet = $(`
      <article class="tweet-containers">
        <header>
          <div>
            <div>
              <img src="${tweet.user.avatars}">
            </div>
            <span>${escape(tweet.user.name)}</span>
          </div>
          <span class="handle">${escape(tweet.user.handle)}</span>
        </header>
        <p>
          ${escape(tweet.content.text)}
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
   
    const errorMessage = $(this).parent().siblings('.error-message');

    if (charLeft === 140) {
      errorMessage.text('❗ Your tweet is empty. ❗').slideDown('fast');
    } else if (charLeft < 0) {
      errorMessage.text('❗ Your tweet exceeds the character limit. ❗').slideDown('fast');
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

  $('#toggle-header').on('click', function(event) {
    const tweetForm = $(this)
      .parent()
      .parent()
      .siblings('.container')
      .children('.new-tweet');
    tweetForm.slideToggle('fast');
  });

  //Load the tweets
  loadTweets();
});
