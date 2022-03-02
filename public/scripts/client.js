/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function () {
  const renderTweets = function (tweetData) {
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
      <p class="tweet-message">${tweet.content.text}</p>
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

    const formData = $("form").serialize();

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
