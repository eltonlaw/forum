(function() {
'use strict';

angular
	.module('app.register')
	.controller("RegisterCtrl", RegisterCtrl);
	
	RegisterCtrl.$inject = ['$window','registerUser',"$http"];

function RegisterCtrl ($window,registerUser,$http) {
	var vm = this;
	// New User Info
	vm.newUserName = "";
	vm.newUserPw = "";
	vm.newUserEmail = "";
	// New User Info Test
	vm.checkName = checkName;
	vm.checkPassword = checkPassword;
	vm.checkEmail = checkEmail;
	vm.createUser = createUser;
	// Password Show/Hide Button
	vm.showPassword = false;
	vm.showhide="show";
	vm.changePwType=changePwType;
	// Verifies that new user info conforms to standards
	vm.pwValid = false;
	vm.emailValid = false;
	vm.nameValid = false;

	vm.userlist = getUsers();
	///////////////////

	function checkPassword(input) {
		var test = registerUser.checkPassword(input)
			vm.pwValid = test.valid;
			vm.pwMsg = test.msg;
	};
	function checkEmail(input) {
		var test= registerUser.checkEmail(input);
			vm.emailValid = test.valid;
			vm.emailMsg = test.msg;
	};
	function checkName(input) {
		var test = registerUser.checkName(input);
			vm.nameValid = test.valid;
			vm.nameMsg = test.msg;
	};
	function createUser	() {
		if (vm.nameValid && vm.emailValid && vm.pwValid) {
			registerUser.createUser(vm.newUserName,vm.newUserPw,vm.newUserEmail);
			// $window.location.href="#/welcome"
		} else {
			alert('One or more fields are incorrectly filled out');
		}
	};
	function changePwType() {
		if (vm.showhide =="show") {
			vm.showhide = "hide";
			vm.showPassword = true;
		} else {
			vm.showhide = "show";
			vm.showPassword = false;
		};
	};
	function getUsers() {
		$http.get("/api/users").then(function(response) {
			vm.userlist = response.data;
		});
	};
};
})();


