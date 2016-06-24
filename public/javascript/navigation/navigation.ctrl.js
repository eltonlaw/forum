(function(){
'use strict';
	angular
		.module("app")
		.controller("NavigationCtrl",NavigationCtrl);

	NavigationCtrl.$inject = ["$scope","$location"];

	function NavigationCtrl($scope,$location) {
		var vm = this;
		vm.logOut = clearCredentials;

		///////////////////////////////
		$scope.$watch(checkUserData,function(newVal,oldVal){
			vm.loggedIn = newVal;
		});

		function checkUserData() {
			if(sessionStorage["User-Data"]) {
				return true;
			} else {
				return false;
			}
		}
		function clearCredentials() {
			sessionStorage.removeItem("User-Data");
			$location.path("/login");
		};
		
	};
})();