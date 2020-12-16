$(document).ready(function() {
  $("#tweet-text").on('input', function (event) {
    //get the input value of the text entered in a textarea by its tweet-text id
    let charLeft = 140 - $(this).val().length;
    //store in variable character left count by substracting to 140 the length i.e. number of character
    $(this)
      .siblings()
      .children('.counter')
      //traversed
      .text(charLeft);
      //set text contents of the matched elements
  });
});