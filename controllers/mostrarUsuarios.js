miAppAngular.controller('mostrarUsuarios', function($scope, $http){
	$http.get('/users')
		.then(function (response) {
			$scope.lista = response.data;
			$scope.cantidad = $scope.lista.length;
			$scope.sortType = 'id_mail';
			$scope.sortReverse = false;
			$scope.buscarUsuario = '';

			for(i=0; i<$scope.lista.length; i++){
				if($scope.lista[i].perfil == null)
					$scope.lista[i].perfil = '-';
				if($scope.lista[i].tipo == '0')
					$scope.lista[i].tipo = 'administrador';
				if($scope.lista[i].tipo == '1')
					$scope.lista[i].tipo = 'profesor';
				if($scope.lista[i].tipo == '2')
					$scope.lista[i].tipo = 'alumno';
				//$scope.lista[i].indice = i + 1;
			}
		}, function (error) {
		    console.log('an error occurred', error.data);
		});
});