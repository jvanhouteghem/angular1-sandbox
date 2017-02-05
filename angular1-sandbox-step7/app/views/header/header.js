angular.module('myApp.header', [])

  .directive('appheader', function() {
    return {
      templateUrl: 'views/header/header.html',
      controller: "HeaderCtrl"
    };
  })

  .controller('HeaderCtrl', ['$window', '$scope', 'sharedProperties', 'authentification', function($window, $scope, sharedProperties, authentification) {
    
    $scope.headerVar = sharedProperties.getProperty() + " - from HeaderCtrl";

    $scope.auth = authentification.validate('admin');
    
  }])

;