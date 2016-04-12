app.controller("registerCtrl",['$scope', function($scope) {
	$scope.usernames = "d0nkrs";
	$scope.userName = '';
	$scope.usernameChecked = false;
	$scope.passwordChecked = false;
	$scope.emailChecked = false;

	$scope.availabilityMsg = "";
	$scope.checkAvailability = function(inputtedUsername) {
		var x = inputtedUsername.toString();
		var isValid = function(str) {
			return /[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/.test(str);
		}
		if(x === "") {
			$scope.availabilityMsg = "";
			return $scope.usernameChecked = false;
		} else if(isValid(x)) {
			$scope.availabilityMsg = "Username cannot have special characters"		
			return $scope.usernameChecked = false;
		}
		else if (x == $scope.usernames) {
			$scope.availabilityMsg = "That username has already been taken. Sorry!"
			return $scope.usernameChecked = false;
		} 
		else {
			$scope.availabilityMsg = "Awesome! That username is available"
			return $scope.usernameChecked = true;
		}
	}



}]);