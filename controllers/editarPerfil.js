	// miAppAngular.factory('editar', function($http, $q) {
	// 	return {
	// 		editarPerfil: function(perfil, id_mail) {
	// 			var path = 'users/' + id_mail;
	// 			console.log('hola')
	// 			return $http.put(path, perfil);
	// 				.then(function(response) {
	// 					if(typeof response.data ==='object') {
	// 						return response.data;
	// 					} else{
	// 						//response invalida
	// 						return $q.reject(response.data);
	// 					}
	// 				}, function(response) {
	// 					//algo salio mal
	// 					return $q.reject(response.data);
	// 				});
	// 		}
	// 	};
	// });

miAppAngular.controller('editarOk', function($scope, $http){

	// $scope.editarUsuario = function(){
	// 	if($scope.formulario.$valid){
	// 		$scope.ingresarOK = true;
	// 	}
	// }

	accessData = window.localStorage['Sesion'];
    $scope.alumno = angular.fromJson(accessData);

	$scope.editarPerfil = function(){
		if($scope.nombre == null)
			nombre = $scope.alumno.nombre
		else
			nombre = $scope.nombre
		if($scope.apellido == null)
			apellido = $scope.alumno.apellido
		else
			apellido = $scope.apellido
		if($scope.pass == null)
			pass = $scope.alumno.pass
		else
			pass = $scope.pass

		var perfil = {
			// id_mail: $scope.alumno.id_mail,
			'nombre': nombre,
			'apellido': apellido,
			'pass': pass
			
		};

		window.localStorage['Sesion'] = angular.toJson(perfil);

		//perfil = JSON.parse('{"' + decodeURI(JSON.stringify(perfil)).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"').replace(/%40/g, '@') + '"}')
		
		//para transformarlo a JSON
		// perfil = getUrlVars(perfil);
		// function getUrlVars(url) {
		//     var hash;
		//     var myJson = {};
		//     var hashes = url.slice(url.indexOf('?') + 1).split('&');
		//     for (var i = 0; i < hashes.length; i++) {
		//         hash = hashes[i].split('=');
		//         myJson[hash[0]] = hash[1];
		//     }
		//     return myJson;
		// }
		// editar.editarUsuario(perfil, $scope.alumno.id_mail)
		// 	.then(function(data) {
		// 		if(data)
		// 			$scope.msg = "Actualizado!";
		// 	})

		var path = '/users/' + $scope.alumno.id_mail;
		$http.post(path, perfil)
			.then(function (response) {
			    console.log('all is good', response.data);
			    $scope.editarOk = true;
			}, function (error) {
			    console.log('an error occurred', error.data);
			});

		// $scope.volver = function() {
		// 	$scope.editarOk = false;
		// }
	}

})