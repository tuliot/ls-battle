
angular.module('ls_battle')
.controller('MainController', mainCtrl);

function mainCtrl($http){

  var self = this;

  $http.get('../data.json').success(function(data){
    self.teams = data.contestants;
    self.votes1 = data.contestants[0].voteCount;
    self.votes2 = data.contestants[1].voteCount;
    self.votes3 = data.contestants[2].voteCount;
    console.log(data)

  })

  $http.get('../data.json').success(function(data){

    self.tweets = data.tweets;
    console.log(data)

  })

}
