var miAppAngular = angular.module ('navegacion', ['ngRoute']);

miAppAngular.config(['$routeProvider', function($routeProvider){
	$routeProvider.when('/', {
		templateUrl: '/plantillas/inicio.html'
	})
	.when('/404', {
		templateUrl: '/plantillas/404.html'
	})
	.when('/editarPerfil', {
		templateUrl: '/plantillas/editarPerfil.html',
		controller: 'editarOk'
	})
	.when('/listaUsuarios', {
		templateUrl: '/plantillas/listaUsuarios.html',
		controller: 'mostrarUsuarios'
	})
	.when('/ingresarUsuario', {
		templateUrl: '/plantillas/ingresarUsuario.html',
		controller: 'ingresarUsuarioOk'
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