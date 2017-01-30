'use strict';

angular.module('myApp.view1', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {


$routeProvider
    .when('/view1', {
      templateUrl: 'view1/view1.html', // (better way to redirect? No, The parameters coming to templateUrl are fixed. See http://stackoverflow.com/a/33840304 and use templateProvider)
      controller: 'View1Ctrl'
    });
}])

.controller('View1Ctrl', ['$window', '$scope', 'sharedProperties', 'authentification', function($window, $scope, sharedProperties, authentification) {

  $scope.varfromcontroller1 = 'Value of varfromcontroller1';
  
  $scope.sharedVar = sharedProperties.getProperty();
  $scope.inputSharedVar = function(){
    sharedProperties.setProperty($scope.sharedVar);
  }; // NB : We use function because we can't do directly $scope.inputSharedVar = sharedProperties.setProperty($scope.sharedVar); cuz it not update value between controllers.

  // $scope.jsonFromHttpget
  sharedProperties.getPropertyFromJson().then(function(d){
    $scope.jsonFromHttpget = d;
  });

  $scope.readToken = authentification.readToken();
  $scope.setToken = function(){
      authentification.setToken();
      $scope.readToken = authentification.readToken();
  };
  $scope.deleteToken = function(){
      authentification.deleteToken();
      $scope.readToken = authentification.readToken();
  };

}]);

// voir http://embed.plnkr.co/gfF8c0ggklNh9F1c71sF/preview
// http://stackoverflow.com/a/38297944
// https://www.theodo.fr/blog/2015/08/handling-basic-route-authorization-in-angularjs/
// https://coderwall.com/p/f6brkg/angularjs-access-control-and-authentication
// https://code.ciphertrick.com/2014/12/14/check-condition-before-loading-route-in-angular-js/
// http://www.frangular.com/2012/12/initialisations-avant-routage-avec-resolve.html
// http://stackoverflow.com/questions/13681116/angularjs-dynamic-routing
// https://www.youtube.com/watch?v=CgXj0_pAQDI