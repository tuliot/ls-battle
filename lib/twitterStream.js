// config.twitter.consumer_key = 'scIiYOyrXsSZ4SdrhgAXUcOhg';
// config.twitter.consumer_secret = 'k8LvskTPGiRC1x1n2TeGTjeXtYcMmruigOKzZ9RM3RuBdUnMws';
// config.twitter.access_token = '2823432781-8RtigY9qmhfo8lCZAxK1slqEoi0bVCEg4QFauGP';
// config.twitter.access_token_secret = 'S1TeYt5QR5cGOTPmNiTyIyvvJJKxhmadkAx2CYzjja0JI';
// config.twitter.base_url = 'https://api.twitter.com/1.1';

var TweetStream = require('node-tweet-stream');
var db = require('./database');
var stream = new TweetStream({
  consumer_key: 'scIiYOyrXsSZ4SdrhgAXUcOhg',
  consumer_secret: 'k8LvskTPGiRC1x1n2TeGTjeXtYcMmruigOKzZ9RM3RuBdUnMws',
  token: '2823432781-8RtigY9qmhfo8lCZAxK1slqEoi0bVCEg4QFauGP',
  token_secret: 'S1TeYt5QR5cGOTPmNiTyIyvvJJKxhmadkAx2CYzjja0JI'
});

// stream.on('tweet', function (tweet) {
//   console.log('tweet received', tweet);
//   console.log('------------');
//   console.log();
//   console.log();
//   console.log();
//   console.log('hashtags', tweet.entities.hashtags);
// });

stream.on('tweet', trackVote);

stream.on('error', function (err) {
  console.log('Oh shit');
});

db.getHashtags(function(allHashtags) {
  allHashtags.forEach(function(hashtag){
    stream.track(hashtag);
    console.log('tracking ' + hashtag);
  })
});

module.exports = stream;

function trackVote(tweet) {
  // check who user is voting for
  // check if that user already voted
  // if not, get contestant.voteCount++
  var hashtagsInTweet = tweet.entities.hashtags;
  var twitterUser = tweet.user;

  console.log('Found tweet by %s', twitterUser.name);

  db.getContestants(function(allContestants) {
    var possibleTags = allContestants.map(function(contestant) {
      return contestant.hashtag;
    });

    console.log('Possible tags', possibleTags);

    var validTags = hashtagsInTweet.filter(function(hashtag) {
      return possibleTags.indexOf(hashtag.text) > -1;
    }).map(function(hashtag) {
      return hashtag.text;
    });

    console.log('Valid tags', validTags);

    // validTags should only have one tag, but just in case get only get the first one
    var winningHastag = null;
    var winningUser = null;

    if (validTags.length) {
      winningHastag = validTags[0];
      winningUser = allContestants[possibleTags.indexOf(winningHastag)];

      if (winningUser.votees.indexOf(twitterUser.id) === -1) {
        winningUser.voteCount = (winningUser.voteCount || 0) + 1;
        winningUser.votees.push(twitterUser.id);
      } else {
        console.log('User %s already voted, bitch', twitterUser.name);
      }

      winningUser.save(function(error, savedContestant) {
        console.log('User: %s voted for %s', tweet.user.name, savedContestant.name);
      });
    }

    if (winningHastag === null) {
      console.log('Unable to find hashtag from tweet with id: %s', tweet.id);
    }

  });
}
