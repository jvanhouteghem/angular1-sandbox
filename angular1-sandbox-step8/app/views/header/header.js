angular.module('myApp.header', [])

  .directive('appheader', function() {
    return {
      templateUrl: 'views/header/header.html',
      controller: "HeaderCtrl",
    };
  })

  .controller('HeaderCtrl', ['$window', '$scope', 'sharedProperties', 'authentification', function($window, $scope, sharedProperties, authentification) {

    // Don't use directly $scope.sharedVarReadInHeader = sharedProperties.getProperty(); if you want to update value when model is changed
    // sharedVarReadInHeader
    $scope.$watch(function(){return sharedProperties.getProperty()}, function(){
      $scope.sharedVarReadInHeader = sharedProperties.getProperty();
    });
    // authentificationReadInHeader
    $scope.$watch(function(){return authentification.validate()}, function(){
      $scope.authentificationReadInHeader = authentification.validate();
    });

    /* The (very) dirty way
    var timer = setInterval( test, 5000);
    function test (){
        console.log("Run interval");
        $scope.sharedVarReadInHeader = sharedProperties.getProperty();
        $scope.authentificationReadInHeader = authentification.validate('admin');
        $scope.$apply();
    };
    */
    
  }])

;