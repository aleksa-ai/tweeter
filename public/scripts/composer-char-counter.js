$(document).ready(function() {
  $("#tweet-text").on('input', function (event) {
    //get the input value of the text entered in a textarea by its tweet-text id
    let charLeft = 140 - $(this).val().length;
    //store in variable character left count by substracting to 140 the length i.e. number of character
    
    var counter = $(this).siblings().find('.counter')
    //define counter & traverse into siblings and find element with counter class
    counter.text(charLeft);
    //set the text to be equal the value of charLeft
    
    //if character limit of 140 exceeded, add class responsible to change font colour to red
    if (charLeft < 0) {
      counter.addClass('fontRed');
    } else {
      counter.removeClass('fontRed');
    }

  });
});