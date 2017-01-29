##1 Our first angular var in view1
NB : Be careful about syntax error, $scope is first with simple quote then without quote.

Replace

```js
.controller('View1Ctrl', [function() {


}]);
```
By

```js
.controller('View1Ctrl', ['$scope', function($scope, sharedProperties) {
  $scope.varfromcontroller1 = 'Value of varfromcontroller1';
  $scope.sharedVar = sharedProperties.getProperty();
}]);
```

##2 Display varfromcontroller1 from view1 to view2
We have to create a service to share a variable between several controllers.
- Create a repository app/services then add service1.js : 

```js
angular.module('myApp')

.service('sharedProperties', function () {
  var property = 'Value of varFromService1';

  return {
      getProperty: function () {
          return property;
      },
      setProperty: function(value) {
          property = value;
      }
  };
});
```
- Add ```<script src="services/service1.js"></script> in index.html```
- Update the controller : 
```js
.controller('View1Ctrl', ['$scope', 'sharedProperties', function($scope, sharedProperties) {
  $scope.varfromcontroller1 = 'Value of varfromcontroller1';
  $scope.sharedVar = sharedProperties.getProperty();
}]);
```

##3 Add some color
Grey for general information in html
Violet for var from controller
Blue for var from service