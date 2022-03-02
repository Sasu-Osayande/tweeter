/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]

const createTweetElement = function(tweet) {
  let $tweetPost = `
  <article class="tweet-border">
  <header>
    <h5 class="user"><img class="avatar" src="${tweet.user.avatars}">${tweet.user.name}</h5>
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
return $tweetPost;
  };

  const renderTweets = function(tweetData) {
    // loops through tweets
    for(let tweet of tweetData) {
    // calls createTweetElement for each tweet
    let fakeTweet = createTweetElement(tweet);
    $('#tweet-container').append(fakeTweet);
    }
    }

$(document).ready(function() {
  renderTweets(data);
});

$("form").submit(function(e) {
  e.preventDefault()
  console.log("Hi there!")
});

const formData = $("form").serialize();
console.log("Hi there!", formData)

$.ajax({
  url: "/tweets",
  method: "POST",
  data: formData,
});