var webTestApp = angular.module('webTestApp', []);

webTestApp.controller('MainCtrl', function($scope, webtest) {
    webtest.fetch().then(function(data) {
        $scope.data = data;
    })
});


webTestApp.factory('webtest', function($q, $timeout, $http) {
    var Webtest = {
        fetch: function(callback) {
            return $timeout(function() {
                return $http.get('usuarios.json').then(function(response) {
                    return response.data;
                });
            }, 30);
        }
    };
    return Webtest;
});
