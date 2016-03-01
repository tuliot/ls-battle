
angular.module('ls_battle')
.controller('MainController', mainCtrl);

function mainCtrl($http){

  var self = this;

  $http.get('').success(function(data){

    console.log(data)

  })

  self.openVoting = function(){
    
  }

}
