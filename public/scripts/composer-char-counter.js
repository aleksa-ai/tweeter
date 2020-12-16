$(document).ready(function() {
  $("#tweet-text").on('input', function (event) {
    //get the input value of the text entered in a textarea by its tweet-text id
    console.log(140 - $(this).val().length);
    //print character left count by substracting to 140 the length i.e. number of character
  })
}); 