
angular.module('myApp')

.factory('authentification', function($window, $http){

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
    };  
});

// add 403 http://stackoverflow.com/questions/25041929/angularjs-routeprovider-http-status-403