miAppAngular.controller('navegacionControl', function($scope, $location) {
    $scope.isActive = function(routaActual) {
        return routaActual === $location.path();
    }
});