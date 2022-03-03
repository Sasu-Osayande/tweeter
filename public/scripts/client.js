/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const escape = function (str) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

$(document).ready(function () {
  $("#empty-error").hide();
  $("#too-long-error").hide();

  const renderTweets = function (tweetData) {
    $("#tweet-container").empty();
    // loops through tweets
    for (let tweet of tweetData) {
      // calls createTweetElement for each tweet
      createTweetElement(tweet);
    }
  };
  // renderTweets(data);

  const createTweetElement = function (tweet) {
    let $tweetPost = `
    <article class="tweet-border">
    <header>
      <h5 class="user"><img class="avatar" src="${tweet.user.avatars}">${
      tweet.user.name
    }</h5>
      <p class="handle">${tweet.user.handle}</p>
      <p class="tweet-message">${escape(tweet.content.text)}</p>
    </header>
      <footer>
        <p class="time">${timeago.format(tweet.created_at)}</p>
        <i class="fa-solid fa-flag"></i>
        <i class="fa-solid fa-retweet"></i>
        <i class="fa-solid fa-heart"></i>
      </footer>
  </article>
  `;
    return $("#tweet-container").prepend($tweetPost);
  };

  $("form").submit(function (e) {
    e.preventDefault();

    const input = $("#tweet-text").val();

    if (!input) {
      // toggles if error. Then slides down again if error persists after submission
      $("#empty-error").slideToggle();
      $("#empty-error").slideDown();
      $("#too-long-error").hide();
      return;
    }

    if (input.length > 140) {
      // toggles if error. Then slides down again if error persists after submission
      $("#too-long-error").slideToggle();
      $("#too-long-error").slideDown();
      $("#empty-error").hide();
      return;
    }

    const formData = $("form").serialize();
    // clears the input field after a submission
    $(".submission").trigger("reset");
    // returns the counter back to 140
    $(".counter").val(140);

    $.ajax({
      url: "/tweets",
      method: "POST",
      data: formData,
    })
      .then(loadTweets)
      .catch((err) => console.log(err));
  });

  const loadTweets = function () {
    $.ajax({
      url: "/tweets",
      method: "GET",
    })
      .then((res) => renderTweets(res))
      .catch((err) => console.log(err));
  };
  loadTweets();
});
