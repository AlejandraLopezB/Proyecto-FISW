miAppAngular.controller('registrarOK', function($scope){

	$scope.registrarUsuario = function(){
		if($scope.formulario.$valid){
			$scope.registrarOK = true;
		}
	}

})