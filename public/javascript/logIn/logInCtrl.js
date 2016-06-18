(function(){
'use strict';

angular
	.module('app.login')
	.controller("LoginCtrl", LoginCtrl);

	LoginCtrl.$inject = ["AuthenticationService"];

function LoginCtrl(AuthenticationService) {
	var vm =this;
	vm.login = login;
	//////////////////
	function login() { 
		console.log("Logging in name: "+vm.loginName+" password: "+vm.loginPw);
		AuthenticationService.login(vm.loginName,vm.loginPw);
	}
};

})();