app.controller("registerCtrl",['$scope','$window', function($scope,$window) {
	$scope.usernames = "d0nkrs";
	$scope.userName = '';

	// Three tests for Username/Password/Email have to be true
	$scope.usernameChecked = false;
	$scope.passwordChecked = false;
	$scope.emailChecked = false;

//USERNAME STUFF
	$scope.availabilityMsg = "";
	//Checks if the username fits 
	$scope.checkName = function(input) {
		var x = input.toString();
		var isValid = function(str) {
			return /[-!$%@^&*()_+|~=`{}\[\]:";'<>?,.\/]/.test(str);
		}
		if(x === "") {
			$scope.availabilityMsg = "";
			return $scope.usernameChecked = false;
		} 
		else if(x.length < 4 || x.length > 12) {
			$scope.availabilityMsg = "Username must be between 4-12 characters";
			return $scope.usernameChecked = false;
		}
		else if(isValid(x)) {
			$scope.availabilityMsg = "Hey numb nuts, no special characters"		
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

//PASSWORD STUFF
	//Password box starts off as hidden so, it should start with these settings below
	$scope.showPassword = false;
	$scope.showhide = "Show Password"
	//This function is invoked everytime "Show/Hide Password" is clicked. It changes the button message and also the input box type
	$scope.changePwType = function() {
		if ($scope.showPassword) {
			$scope.showhide = "Show Password"
			$scope.showPassword = false;
		} else {
			$scope.showhide = "Hide Password"
			$scope.showPassword = true;
		}
	}
	//Verify if password exists
	$scope.checkPw = function(input) {
		if (input) {
			$scope.passwordChecked = true;
		} else {
			$scope.passwordChecked = false;
		}
	}

//EMAIL STUFF
	$scope.checkEmail = function(input) {
		if(input.toString().indexOf("@") !== -1) {
			$scope.emailChecked = true;
		} else {
			$scope.emailChecked = false;
		}
	}

//SUBMIT BUTTON
	$scope.submitNew = function() {
		if ($scope.usernameChecked && $scope.passwordChecked && $scope.emailChecked) {
			$scope.newUser = {
				username: $scope.newUsername,
				password: $scope.newUserPw,
				email: $scope.newUserEmail
			}
			//TO ADD: Push this newly created object "newUser" into some sort of array in the server
			

			// Reroutes to a welcome/thank you page
			$window.location.href="#/welcome"
		} else {
			
		}
	}


}]);