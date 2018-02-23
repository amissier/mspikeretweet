const Twitter = require('twitter');
const config = require('./config.js');
const T = new Twitter(config);

const params = {
  q: '#india',  
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



T.post('statuses/retweet/:id', tweetid, (err2, response2) => {
                if (response2) {
                    console.log('Retweeted!!!');
                    
                }
                // if there was an error while tweeting
                if (err2) {
                    console.log('Something went wrong '+ err2[0]);
                }
            });
