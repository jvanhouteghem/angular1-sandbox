## Angular Material

In this part we will add some google material in our view 1.

## Install (the almost way)

Add css : 
  <link rel="stylesheet" href="http://ajax.googleapis.com/ajax/libs/angular_material/1.1.0/angular-material.min.css">

Add js in main html : 
  <script src="bower_components/angular/angular.js"></script>
  <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular-animate.min.js"></script>
  <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular-aria.min.js"></script>
  <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular-messages.min.js"></script>

  <script src="http://ajax.googleapis.com/ajax/libs/angular_material/1.1.0/angular-material.min.js"></script>

Update module by adding ngMaterial : 
```
angular.module('myApp.view1', ['ngRoute', 'ngMaterial'])
```

## Install (the nice way)

Update bower.json
```
{
  "name": "angular-seed",
  "description": "A starter project for AngularJS",
  "version": "0.0.0",
  "homepage": "https://github.com/angular/angular-seed",
  "license": "MIT",
  "private": true,
  "dependencies": {
    "angular": "~1.5.9",
    "angular-route": "~1.5.9",
    "angular-loader": "~1.5.9",
    "angular-mocks": "~1.5.9",
    "html5-boilerplate": "^5.3.0",
    "angular-animate": "^1.5.9",
    "angular-aria": "^1.5.9",
    "angular-messages": "^1.5.9",
    "angular-material": "^1.1.0"
  },
  "resolutions": {
    "angular": "1.6.1"
  }
}

```

Update html by adding
```
  <script src="bower_components/angular/angular.js"></script>
  <script src="bower_components/angular-animate/angular-animate.min.js"></script>
  <script src="bower_components/angular-aria/angular-aria.min.js"></script>
  <script src="bower_components/angular-messages/angular-messages.min.js"></script>

  <script src="bower_components/angular-material/angular-material.min.js"></script>

  <script src="bower_components/angular-route/angular-route.js"></script>
  <script src="app.js"></script>
  <script src="views/view1/view1.js"></script>
  <script src="views/view2/view2.js"></script>
  <script src="services/service1.js"></script>
  <script src="services/authentification.js"></script>
  <script src="components/version/version.js"></script>
  <script src="components/version/version-directive.js"></script>
  <script src="components/version/interpolate-filter.js"></script>
```

Don't forget css : 
```
<link rel="stylesheet" href="bower_components/angular-material/angular-material.min.css">
```

## First try 
Lets update input from view1.html which display value from service1

```
<p class="generalinfos">This is the partial for view 1.</p>
<p class="fromcontroller">{{varfromcontroller1}}</p>
<p class="fromservice">{{sharedVar}}</p>

<!--<input class="fromservice" type="text" ng-model="sharedVar" ng-change="inputSharedVar(sharedVar)">-->

<md-input-container flex="50">
    <label>Service shared value</label>
    <input class="fromservice" type="text" ng-model="sharedVar" ng-change="inputSharedVar(sharedVar)">
    <div ng-messages="projectForm.clientName.$error">
    <div ng-message="required">This is required.</div>
    </div>
</md-input-container>

<p class="fromservicetoken">{{readToken}}</p>
<button class="fromservicetoken" ng-click="setToken()">Create Token</button><button class="fromservicetoken" ng-click="deleteToken()">Delete Token</button> 
<p class="fromserviceHttp">{{jsonFromHttpget}}</p>
```