##1 Our first factory
add 
```
.factory('sharedProperties', function($http){

    var property = 'Value of varFromService1';

    return {
        getProperty: function () {
            return property;
        },
        setProperty: function(value) {
            property = value;
        },
        getPropertyFromJson: function(){
            return $http.get('https://jsonplaceholder.typicode.com/users');
        }
    };  
});
```

Then in controller : 
  sharedProperties.getPropertyFromJson().then(function(d){
    $scope.jsonFromHttpget = d;
  });

  It will display httpget result

##2 Add cache
Add { cache: true}, now the json isn't load everytime you come back to view 1.

##3 Update shared var
We stored a variable in our service1. Now we want to update this var in view1 and then verify that the variable changed in view2.
- In view1.js add : 
```
  $scope.inputSharedVar = function(){
    sharedProperties.setProperty($scope.sharedVar);
  }; // NB : We use function because we can't do directly $scope.inputSharedVar = sharedProperties.setProperty($scope.sharedVar); cuz it not update value between controllers.

```
- In view1.html add 
```
<input type="text" ng-model="sharedVar" ng-change="inputSharedVar(sharedVar)">
```