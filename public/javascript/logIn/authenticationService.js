(function(){
'use strict';
	angular
		.module('app')
		.factory('AuthenticationService', AuthenticationService);

	AuthenticationService.$inject = ['$http', '$route','$window']
	function AuthenticationService($http,$route,$window){
		var service = {
			login:login
		};
		return service;

		function login(name, password) {
			$http.post('/api/authenticate',{name:name,password:password})
				.then(function(response){
					setCredentials(response.data);
					$window.location.href="#/profile";
				},function(response){
					console.log(response);
				}
			);
		};
		function setCredentials (data) {
			sessionStorage.setItem("User-Data", JSON.stringify(data));
			console.log("Logged in - SessionStorage:");
			console.log(sessionStorage);
		};
	};
})();