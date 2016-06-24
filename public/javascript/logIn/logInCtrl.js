(function(){
'use strict';
angular
	.module('app.login')
	.controller("LoginCtrl", LoginCtrl);

	LoginCtrl.$inject = ["AuthenticationService","$window"];

function LoginCtrl(AuthenticationService,$window) {
	var vm =this;
	vm.login = login;
	//////////////////
	function login() { 
		AuthenticationService.login(vm.loginName,vm.loginPw);
	};
};

})();