## Watchers

Update the controller in header.js 

```js
    // Don't use directly $scope.sharedVarReadInHeader = sharedProperties.getProperty(); if you want to update value when model is changed
    // sharedVarReadInHeader
    $scope.$watch(function(){return sharedProperties.getProperty()}, function(){
      $scope.sharedVarReadInHeader = sharedProperties.getProperty();
    });
    // authentificationReadInHeader
    $scope.$watch(function(){return authentification.validate()}, function(){
      $scope.authentificationReadInHeader = authentification.validate();
    });
```