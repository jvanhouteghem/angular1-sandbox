
angular.module('myApp')

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
            return $http.get('https://jsonplaceholder.typicode.com/users', { cache: true});
        }
    };  
});