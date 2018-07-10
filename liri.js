require('dotenv').config();
// Global Variables 
var keys = require("./keys");

var spotify = new Spotify(keys.spotify);

var Twitter = require('twitter');
var client = new Twitter(keys.twitter);

var input = process.argv[2];

switch (input) {
  //Twitter Case
  case 'my-tweets':
    client.get('statuses/user_timeline', {screen_name: 'dukethedog12',count: 20}, function (error, tweets, response) {
      if (!error) {
        for (i = 0; i < tweets.length; i++) {
          console.log('--------------------');
          console.log([i+1] + '. ' + tweets[i].text);
          console.log('Tweeted on: ' + tweets[i].created_at);
          console.log('--------------------');
        }
      }
    });
  break;
  //Spotify Case
  
  default:
    console.log('Not a valid operation!')
}

