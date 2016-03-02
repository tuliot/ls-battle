
angular.module('ls_battle')
.controller('MainController', mainCtrl);

function mainCtrl($http,$timeout,$scope){



  var self = this;

  self.grabData = function(){
    console.log("gettingData")
    $http.get('../data.json').success(function(data){
      self.teams = data.contestants;
      self.votes0 = data.contestants[0].voteCount;
      self.votes1 = data.contestants[1].voteCount;
      self.votes2 = data.contestants[2].voteCount;
      self.votes3 = data.contestants[3].voteCount;
      console.log(data)
    })

    $http.get('../data.json').success(function(data){
      self.tweets = data.tweets;
      console.log(data)
    })
  }

      setInterval(self.grabData,1000);





}
