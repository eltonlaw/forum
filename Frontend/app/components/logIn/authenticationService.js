(function(){
	'use strict';

	angular
		.module('app')
		.factory('AuthenticationService', AuthenticationService);

	AuthenticationService.$inject = ['$http', '$rootScope','$timeout','$cookies']
	function AuthenticationService($http,$rootScope,$timeout,$cookies){
		var service = {};

		service.Login = Login;
		service.SetCredentials = SetCredentials;
		service.ClearCredentials = ClearCredentials

		return service;

		function Login(username, password) {

		}

		function SetCredentials (username,password) {
			$rootScope.globals = {
				currentUser: {
					username: username,
				}
			}
			$cookies.put('globals', $rootScope.globals)
		}
	};




})();