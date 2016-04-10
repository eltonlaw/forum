app.controller('Users', ['$scope', '$http','$log', function($scope, $http, $log) {
	

	var onLoginSuccess = function(response) {
		$scope.user = response.data
	}
	var onError = function(reason) {
		$scope.error = "Your password/username is incorrect"
	}
//LOGIN 

}]);