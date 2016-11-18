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
		controller: 'iniciarSesion'
	})
	.otherwise({
        redirectTo: '/'
      });
}])