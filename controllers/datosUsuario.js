miAppAngular.controller('datosUsuario', function($scope, $http){
	accessData = window.localStorage['Sesion'];
    $scope.alumno = angular.fromJson(accessData);
});