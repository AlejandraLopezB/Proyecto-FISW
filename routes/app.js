var miAppAngular = angular.module ('navegacion', ['ngRoute']);

miAppAngular.config(['$routeProvider', function($routeProvider){
	$routeProvider.when('/', {
		templateUrl: 'plantillas/inicio.html',
		controller: 'inicio'
	})
	.when('/registrar', {
		templateUrl: 'plantillas/registrar.html',
		controller: 'registrarOK'
	})
	.when('/iniciarSesion', {
		templateUrl: 'plantillas/iniciarSesion.html',
		controller: 'ingresarOK'
	})
	.when('/404', {
		templateUrl: 'plantillas/404.html'
	})
	.otherwise({
        redirectTo: '/404'
    });
}])

miAppAngular.controller('mainCtrl', function($scope) {
    accessData = window.localStorage['Sesion'];
    //console.log(alumno);
    $scope.alumno = angular.fromJson(accessData);
})