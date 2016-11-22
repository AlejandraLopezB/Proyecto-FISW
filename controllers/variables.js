miAppAngular.controller('variables', function($scope, $http){
	accessData = window.localStorage['Variables'];
    $scope.variables = angular.fromJson(accessData);
    // $scope.extension = /[^.]*$/.exec($scope.variables)[0];
    // $scope.extension = $scope.extension.substring(0, $scope.extension.indexOf('<'));
    // console.log($scope.extension)
    // if($scope.extension == 'png' || $scope.extension == 'jpg' || $scope.extension == 'jpeg'){
    // 	console.log('entro')
    // 	$scope.icono = 'pe-7s-photo';
    // }
});