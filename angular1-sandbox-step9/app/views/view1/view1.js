'use strict';

angular.module('myApp.view1', ['ngRoute', 'ngMaterial'])
.config(['$routeProvider', function($routeProvider) {


$routeProvider
    .when('/view1', {
      templateUrl: 'views/view1/view1.html', // (better way to redirect? No, The parameters coming to templateUrl are fixed. See http://stackoverflow.com/a/33840304 and use templateProvider)
      controller: 'View1Ctrl'
    });
}])

.controller('View1Ctrl', ['$window', '$scope', 'sharedProperties', 'authentification', function($window, $scope, sharedProperties, authentification) {

  $scope.authentification = authentification.validate('admin');

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

}])

;