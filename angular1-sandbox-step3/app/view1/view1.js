'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', 'sharedProperties', function($scope, sharedProperties) {
  $scope.varfromcontroller1 = 'Value of varfromcontroller1';
  
  $scope.sharedVar = sharedProperties.getProperty();
  $scope.inputSharedVar = function(){
    sharedProperties.setProperty($scope.sharedVar);
  }; // NB : We use function because we can't do directly $scope.inputSharedVar = sharedProperties.setProperty($scope.sharedVar); cuz it not update value between controllers.

  // $scope.jsonFromHttpget
  sharedProperties.getPropertyFromJson().then(function(d){
    $scope.jsonFromHttpget = d;
  });

}]);