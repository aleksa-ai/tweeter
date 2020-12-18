//Get access at tweet-text id
$(document).ready(function() {
  $("#tweet-text").on('input', function (event) {
    //Store number of characters left
    const charLeft = 140 - $(this).val().length;
    const counter = $(this).siblings().find('.counter');
    //Set the text to be equal the value of charLeft
    counter.text(charLeft);
        
    //if character limit of 140 exceeded, add class responsible to change font colour to red
    if (charLeft < 0) {
      counter.addClass('fontRed');
    } else {
      counter.removeClass('fontRed');
    }

    const errorMessage = $(this).parent().parent().siblings('.error-message');

    if (charLeft >= 0 && charLeft <= 140 && errorMessage.is(':visible')) {
      errorMessage.slideUp('fast');
    }

  });
});