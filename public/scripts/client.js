/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

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

const createTweetElement = function(tweetObject) {
  return (`
  <article>
  <header>
    <h5 class="user"><img class="avatar" src="${tweetObject.user.avatars}">${tweetObject.user.name}</h5>
    <p class="handle">${tweetObject.user.handle}</p>
    <p class="tweet-message">${tweetObject.content.text}</p>
  </header>
    <footer>
      <p class="time">${timeago.format(tweetObject.created_at)}</p>
      <i class="fa-solid fa-flag"></i>
      <i class="fa-solid fa-retweet"></i>
      <i class="fa-solid fa-heart"></i>
    </footer>
</article>
`);
  };

const $tweet = createTweetElement(tweetData);
$(document).ready(function() {
  console.log($tweet); // to see what it looks like
  $('#tweets-container').append($tweet);
});