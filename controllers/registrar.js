miAppAngular.controller('registrarOK', function($scope, $http){
	
	$scope.validarRegistro = function(){
		if($scope.formulario.$valid){
			$scope.registrarOK = true;
    	}
	}

	$scope.registrarUsuario = function(){
		$scope.usuario.tipo = '2';
		$http.post('/users', $scope.usuario)
		.then(function (response) {
		    console.log('all is good', response.data);
		}, function (error) {
		    console.log('an error occurred', error.data);
		});
    }
})