(function(){
	'use strict';

	angular
		.module('app')
		.factory('AuthenticationService', AuthenticationService);

	AuthenticationService.$inject = ['$http', '$rootScope','$cookies']
	function AuthenticationService($http,$rootScope,$cookies){
		var service = {
			login:login,
			setCredentials:setCredentials,
			clearCredentials:clearCredentials
		};
		return service;

		function login(name, password) {
			$http.post('/api/authenticate',{name:name,password:password})
				.then(function(response){
					localStorage.setItem("User-Data", JSON.stringify(response.data));
					console.log("Logged in");
					console.log(localStorage);
					setCredentials(response.data);
					console.log("$rootScope.globals");
					console.log($rootScope.globals);
				},function(response){
					console.log(response);
				});
		};
		function setCredentials (data) {
			$rootScope.globals = {
				currentUser: {
					username: data.name
				}
			}
			$cookies.put('globals', $rootScope.globals)
		};
		function clearCredentials() {
			$rootScope.globals = {};
			$cookies.remove('globals')
		};
	};




})();