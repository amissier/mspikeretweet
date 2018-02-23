const Twitter = require('twitter');
const config = require('./config.js');
const T = new Twitter(config);

// Set up your count and search parameters
const params = {
  q: '#gre',  
  result_type: 'recent',
  lang: 'en'
}

var tweetid=0;
// Initiate your search using the above paramaters
T.get('search/tweets', params, (err, data, response) => {
  // If there is no error, proceed
  if(err){
    return console.log(err);
  }

  // Loop through the returned tweets
  tweetid = data.statuses[0].id_str;
});

T.post('statuses/retweet', tweetid, (err, response) => {
      if(err){
        return console.log(err[0].message);
      }

const username = response.user.screen_name;      
console.log(`Retweeted: ${username}`);
});
