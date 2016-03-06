var db = require('../database');
// var asyncJS = require('async');
var resultsRouter = module.exports = require('express').Router();

resultsRouter.get('/', function(req, res) {

  // asyncJS.parallel([
  //   db.getContestants,
  //   db.getVoteTweets
  // ], function(results) {
  //   console.log('Results', results);
  //   var allContestants = results;
  //   var allTweets = results[1];
  //
  //   var clientFriendlyContestants = allContestants.map(function(contestant) {
  //     return {
  //       id: contestant.id,
  //       name: contestant.name,
  //       voteCount: contestant.voteCount,
  //       hashtag: contestant.hashtag
  //     };
  //   });
  //
  //   res.json({
  //     contestants: clientFriendlyContestants,
  //     // tweets: allTweets
  //   }).end();
  //
  // });

  db.getContestants(function(allContestants) {

    db.getVoteTweets(function(tweets) {
      var clientFriendlyTweets = [];
      if (tweets) {
        clientFriendlyTweets = tweets.reverse();
      }

      var clientFriendlyContestants = allContestants.map(function(contestant) {
        return {
          id: contestant.id,
          name: contestant.name,
          voteCount: contestant.voteCount,
          hashtag: contestant.hashtag
        };
      });


      res.set('Access-Control-Allow-Origin', '*');
      res.json({
        contestants: clientFriendlyContestants,
        tweets: clientFriendlyTweets
      });

      res.end();

    });

  });
});
