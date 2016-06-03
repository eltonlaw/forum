angular
	.module('app.profile')
	.controller("ProfileCtrl", ProfileCtrl);

	ProfileCtrl.$inject = ['$http'];

function ProfileCtrl($http) {
	var vm =this;
	vm.onLoginSuccess = onLoginSuccess;
	vm.loginSubmit = loginSubmit;
	//////////////////

	function onLoginSuccess(response) {
		vm.user = response.data
	};

	function loginSubmit() {
		if (2) {
			vm.loggedIn = true;
		} else {
			vm.error = "Your password/username is incorrect"
			vm.loggedIn = false;
		}
	};


};