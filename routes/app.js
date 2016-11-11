var miAppAngular = angular.module ('navegacion', ['ngRoute']);

miAppAngular.config(['$routeProvider', function($routeProvider){
	$routeProvider.when('/', {
		templateUrl: '../views/plantillas/inicio.html',
		controller: 'inicio'
	})
	.when('/galeria', {
		templateUrl: '../views/plantillas/galeria.html',
		controller: 'inicio'
	})
	.when('/mapa', {
		templateUrl: '../views/plantillas/mapa.html',
		controller: 'inicio'
	})
	.when('/contacto', {
		templateUrl: '../views/plantillas/contacto.html',
		controller: 'inicio'
	})
}])