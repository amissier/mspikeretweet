const Twitter = require('twit');
const config = require('./config.js');
const T = new Twitter({
	consumer_key: 'EeoJusVzPqAWMriZ1eADrYb39',
	consumer_secret: 'izauqcA2zYHbIci1YofPoTlXM9oVOGaHM7tJSowcGgLLuc4uQ8',
	access_token: '57567113-OZVNjGKQW91SV8YxHCxLT1Fh70e6QKbWyD3tnAkkz', 
	access_token_secret: 'VhjJBWXToj7vYTxUoyFetWInUR4T6FQMY3osdkbC7aw9d'});

// Set up your count and search parameters
const params = {
  q: '#toefl',  
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
console.log(`Reweeted: ${username}`);
});
