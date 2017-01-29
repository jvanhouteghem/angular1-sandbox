
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