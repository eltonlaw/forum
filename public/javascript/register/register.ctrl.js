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
		vm.pwValid = registerUser.checkPassword(input).valid;
		vm.pwMsg = registerUser.checkPassword(input).msg;
	};
	function checkEmail(input) {
		vm.emailValid = registerUser.checkEmail(input).valid;
		vm.emailMsg = registerUser.checkEmail(input).msg;
	};
	function checkName(input) {
		vm.nameValid = registerUser.checkName(input).valid;
		vm.nameMsg = registerUser.checkName(input).msg;
	};
	function createUser	() {
		if (vm.nameValid && vm.emailValid && vm.pwValid) {
			registerUser.createUser(vm.newUserName,vm.newUserPw,newUserEmail);
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
	function getEmailList() {
		$http.get("/api/users").then(function(response){
			vm.emailList = [];
			for(var i=0;i<response.data.length;i++) {
				 vm.emailList.push(response.data[i].email);
			};
		});
	};
};

})();


