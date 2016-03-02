var db = require('../database');
var resultsRouter = module.exports = require('express').Router();

resultsRouter.get('/', function(req, res) {

  db.getContestants(function(allContestants) {

    // {
		// 	id: ‘some-id’,
		// 	name: ’Darin’,
		// 	voteCount: 21
		// }

    var clientFriendlyContestants = allContestants.map(function(contestant) {
      return {
        id: contestant.id,
        name: contestant.name,
        voteCount: contestant.voteCount,
        hashtag: contestant.hashtag
      };
    });

    res.json({
      contestants: clientFriendlyContestants
    });

    res.end();
  });
});
