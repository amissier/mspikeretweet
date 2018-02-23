const Twitter = require('twitter');
const config = require('./config.js');
const T = new Twitter(config);

const params = {
  q: '#Melbourne',  
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



T.post('statuses/retweet/:id', {id:tweetid}, function(err, response) {
                if (response) {
                    console.log('Retweeted!!!');
                    const username = response.user.location;
                     console.log(`Reweeted: ${username}`);
                }
                // if there was an error while tweeting
                if (err) {
                    console.log('Something went wrong while RETWEETING... Duplication maybe...');
                }
            });
