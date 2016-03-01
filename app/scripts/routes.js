angular.module('ls_battle')
.config(function($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('home',
        {
          controller: 'MainController',
          controllerAs: 'mainCtrl',
          url: "/",
          templateUrl: 'views/main.html'
        })
       .state('/admin',
        {
          controller: 'MainController',
          controllerAs: 'mainCtrl',
          url: "/admin",
          templateUrl: 'views/admin.html'
        });

      $urlRouterProvider.otherwise('/');

      });
