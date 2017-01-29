
angular.module('myApp')

.service('sharedProperties', function ($http) {
  var property = 'Value of varFromService1';
  var jsonProperty = 'vide';

  return {
      getProperty: function () {
          return property;
      },
      setProperty: function(value) {
          property = value;
      },
      getPropertyFromJson: function () {
        $http.get("https://jsonplaceholder.typicode.com/users")
        .then(function(response) {
           jsonProperty = response.data;
        });
        return jsonProperty;
      }
  };
});