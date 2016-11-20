var miAppAngular = angular.module ('navegacion', ['ngRoute']);

miAppAngular.config(['$routeProvider', function($routeProvider){
	$routeProvider.when('/', {
		templateUrl: '/perfiles/plantillas/adaptador.html'
	})
	.when('/404', {
		templateUrl: 'plantillas/404.html'
	})
	.when('/editarPerfil', {
		templateUrl: '/perfiles/plantillas/editarPerfil.html',
		controller: 'editarOk'
	})
	.otherwise({
        redirectTo: '/404'
    });
}])

// miAppAngular.controller('mainCtrl', function($scope) {
//     accessData = window.localStorage['Sesion'];
//     //console.log(alumno);
//     $scope.alumno = angular.fromJson(accessData);
// })