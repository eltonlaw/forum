app.controller('profileCtrl', ['$scope', '$http','$log', function($scope, $http, $log) {
	
//LOGIN 
	var onLoginSuccess = function(response) {
		$scope.user = response.data
	}

	
 
	var loginSubmit = function() {
		if (2) {
			$scope.loggedIn = true;
		} else {
			$scope.error = "Your password/username is incorrect"
			$scope.loggedIn = false;
		}
	}
}]);