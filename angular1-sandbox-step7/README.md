## Common part

In this example we want to hide view2 link if we have no jwt in local storage.

1- Create new view folder called header with 2 files : header.html and header.js
2- header.js : 
```
angular.module('myApp.header', [])

  .directive('appheader', function() {
    return {
      templateUrl: 'views/header/header.html',
      controller: "HeaderCtrl"
    };
  })

  .controller('HeaderCtrl', ['$window', '$scope', 'sharedProperties', 'authentification', function($window, $scope, sharedProperties, authentification) {
    $scope.headerVar = sharedProperties.getProperty() + " - from HeaderCtrl";
  }])

;
```
3- Add myApp.header in app.js : 
```
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version',
  'myApp.header', // update
])
```
4- Add content inside header.html
```
<div class="fromcommon">
    <ul class="menu">
        <li><a href="#!/view1">view1</a></li>
        <li><a href="#!/view2">view2</a></li>
    </ul>
    <p>{{headerVar}}</p>
    <p>{{headerVar}}</p>
</div>
```
5- Insert new directive "<div appheader>" inside index.html

// The var don't change dynamically
http://stackoverflow.com/a/17558885
