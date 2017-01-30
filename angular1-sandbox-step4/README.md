## 1. Lets store a jwt in localstorage
- Create localstorage.js
```
angular.module('myApp')

.factory('localStorage', function($window, $http){

    return {
        readToken: function () {
            return $window.localStorage.getItem('token');
        },
        setToken: function() {
            var value = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ';
            $window.localStorage.setItem('token', value);
        },
        deleteToken: function() {
            $window.localStorage.removeItem('token');
        },
        verrifyToken: function(){

        }
    };  
});
```
- Add localstorage.js in index.html
- Update view1.js
```
  $scope.readToken = localStorage.readToken();
  $scope.setToken = function(){
      localStorage.setToken();
      $scope.readToken = localStorage.readToken();
  };
  $scope.deleteToken = function(){
      localStorage.deleteToken();
      $scope.readToken = localStorage.readToken();
  };

```

## 2. Update routeprovider
We want to redirect view2 to view1 if there is no token in localstorage.

Rename locastorage to authentification.

add into localstorage.js :
```
        verrifyToken: function(){
            return this.readToken() == null ? false : true;
        },
        validate: function(requiredRole){
            if (this.verrifyToken() == false){
                if (requiredRole == 'admin'){
                    //console.log('Token error. You are not ' + right);
                    $window.location.href = 'index.html#!/view1';
                }
            }
        }
```
update view2 :
```
.controller('View2Ctrl', ['$window', '$scope', 'sharedProperties', 'authentification', function($window, $scope, sharedProperties, authentification) {

  authentification.validate('admin'); // new

  $scope.sharedVar = sharedProperties.getProperty();

}]);
```