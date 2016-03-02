
angular.module('ls_battle')
.controller('MainController', mainCtrl);

function mainCtrl($http){

  var self = this;

  $http.get('../data.json').success(function(data){
    self.teams = data.contestants;
    console.log(data)

  })

  self.openVoting = function(){

  }

}
