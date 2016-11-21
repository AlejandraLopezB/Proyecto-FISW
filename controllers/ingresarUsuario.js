miAppAngular.controller('ingresarUsuarioOk', function($scope, $http){
    $scope.ingresarUsuario = function() {
		if($scope.formulario.$valid){
			$scope.usuario.tipo = '1';
			$http.post('/users', $scope.usuario)
			.then(function (response) {
			    console.log('all is good', response.data);
			    $scope.ingresarUsuarioOk = true;
			}, function (error) {
			    console.log('an error occurred', error.data);
			});
    	}	
	}
})