const Twitter = require('twitter');
const config = require('./config.js');
const T = new Twitter(config);

const params = {
  q: '#elonmusk',  
  result_type: 'recent',
  lang: 'en'
}


var tweetid=0;

// Initiate your search using the above paramaters
T.get('search/tweets', params, (err, data, response) => {
    

if(err){
    return console.log('Search error is '+err);
  }

  // If there is no error, proceed
// Check returned tweets  
tweetid = data.statuses[0].id_str;
  console.log('Tweet id is '+tweetid);
});



T.post('statuses/retweet', tweetid, (err, response) => {
      if(err){
        return console.log(err[0].message);
      }


const username = response.user.screen_name;
console.log(`Reweeted: ${username}`);
});
