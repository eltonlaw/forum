(function() {
'use strict';

angular
	.module('app.register')
	.controller("RegisterCtrl", RegisterCtrl);
	
	RegisterCtrl.$inject = ['$window','registerUser'];

function RegisterCtrl ($window,registerUser) {
	var vm = this;
	// New User Info Test
	vm.checkName = checkName;
	vm.checkPassword = checkPassword;
	vm.checkEmail = checkEmail;
	vm.submitNew= submitNew;
	// Password Show/Hide Button
	vm.showPassword = false;
	vm.showhide="show";
	vm.changePwType=changePwType;
	// Verifies that new user info conforms to standards
	vm.pwOk = false;
	vm.emailOk = false;
	vm.nameOk = false;
	///////////////////

	function checkPassword(input) {
		vm.pwOk = registerUser.checkPassword(input).checked;
		vm.pwMsg = registerUser.checkPassword(input).msg;
	};
	function checkEmail(input) {
		vm.emailOk = registerUser.checkEmail(input).checked;
		vm.emailMsg = registerUser.checkEmail(input).msg;
	};
	function checkName(input) {
		vm.nameOk = registerUser.checkName(input).checked;
		vm.nameMsg = registerUser.checkName(input).msg;
	};


	function submitNew(name, password, email) {
		if (vm.nameOk && vm.emailOk && vm.pwOk) {
		// if (true) {
			registerUser.createUser(name,password,email);
			// registerUser.createUser("eltonlaw","mypassword123","eltonlaw296@gmail.com");
			$window.location.href="#/welcome"
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

};

})();


