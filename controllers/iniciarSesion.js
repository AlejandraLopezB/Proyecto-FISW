miAppAngular.factory('login', function($http, $q) {
	return {
		getUsuario: function(id_mail) {
			var path = 'users/' + id_mail;
			return $http.get(path)
				.then(function(response) {
					if(typeof response.data ==='object') {
						return response.data;
					} else{
						//response invalida
						return $q.reject(response.data);
					}
				}, function(response) {
					//algo salio mal
					return $q.reject(response.data);
				});
		}
	};
});

miAppAngular.controller('ingresarOK', function($scope, $window, login, $location){

	$scope.ingresarUsuario = function(){
		if($scope.formulario.$valid){
			$scope.ingresarOK = true;
		}
	}

	$scope.ingresarUsuario = function(){
		login.getUsuario($scope.id_mail)
			.then(function(data) {
				if(data.pass == $scope.pass){
					window.localStorage['Sesion'] = angular.toJson(data);
					//para sacar los datos
					// accessData = window.localStorage['Sesion'];
					if(data.tipo == '0')
						$window.location.href = '/perfiles/admin.html';
					if(data.tipo == '1')
						$window.location.href = '/perfiles/profesor.html';
					if(data.tipo == '2'){
						if(data.perfil == 'adaptador')
							$window.location.href = '/perfiles/adaptador.html';
							//$location.path('/adaptador')
						if(data.perfil == 'asimilador')
							$window.location.href = '/perfiles/asimilador.html';
						if(data.perfil == 'convergente')
							$window.location.href = '/perfiles/convergente.html';
						if(data.perfil == 'divergente')
							$window.location.href = '/perfiles/divergente.html';
					}
				}
			})
	}

})