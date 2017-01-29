
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