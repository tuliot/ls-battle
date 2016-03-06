
angular.module('ls_battle')
.controller('MainController', mainCtrl);

function mainCtrl($http,$timeout,$scope){

  var self = this;

  self.grabData = function() {
    console.log("Getting Data")
    $http.get('http://localhost:8080/api/v1/results').success(function(data){
      self.teams = data.contestants;
      self.tweets = data.tweets;

      console.log('Teams: ', self.teams);
      console.log('Tweets: ', self.tweets);
    })

    $http.get('../data.json').success(function(data){
      self.pics = data.contestants[0].pic;
    })
  }

  // run once immediately then start interval
  self.grabData();
  setInterval(self.grabData, 5000);
}
