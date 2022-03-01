$(document).ready(function() {
  // console.log("document is ready :)");
  $("#tweet-text").on('input', characterCount)
    console.log(this);
  });
  function characterCount() {
    const input = $(this).val().length;
    const count = 140 - input;

    // let parent = $(this).parent();
    // $(parent).children("output").text(count);
    $(".counter").text(count);

    if(count < 0) {
      $(".counter").css("color", "red");
    } else {
      $(".counter").css("color", "black");
    }
};