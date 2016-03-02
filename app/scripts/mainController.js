
angular.module('ls_battle')
.controller('MainController', mainCtrl);

function mainCtrl($http,$timeout,$scope){



  var self = this;

  self.grabData = function(){
    console.log("gettingData")
    $http.get('http://localhost:8080/api/v1/results').success(function(data){
      self.teams = data.contestants;

       self.votes = [];
       data.contestants.forEach(function(contestant){
       self.votes.push(contestant.voteCount);
       })
      // self.votes1 = data.contestants[1].voteCount;
      // self.votes2 = data.contestants[2].voteCount;
      // self.votes3 = data.contestants[3].voteCount;
      console.log('from grab data', data)
    })

    $http.get('http://localhost:8080/api/v1/results').success(function(data){
      // self.tweets = data.tweets;
      console.log('from tweets', data.tweets)
    })

    $http.get('../data.json').success(function(data){
      self.pics = data.contestants[0].pic;
      self.tweets = data.tweets;
      // console.log(data)
    })


  }

      setInterval(self.grabData,1000);





}
