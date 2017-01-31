'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'views/view2/view2',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['$window', '$scope', 'sharedProperties', 'authentification', function($window, $scope, sharedProperties, authentification) {

  authentification.validate('admin');

  $scope.sharedVar = sharedProperties.getProperty();

}]);