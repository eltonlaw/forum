(function() {
'use strict';
angular
	.module("app")
	.run(function($rootScope,$location,$route){
		// $rootScope.$on("$routeChangeStart",function(event,next,current){
		// 	if(sessionStorage["User-Data"] && $route.current.templateUrl == "/login") {
		// 		console.log("Switching path to /profile");
		// 		$location.path("/profile");
		// 	} else if(!sessionStorage["User-Data"] && $route.current.templateUrl == "/profile"){
		// 		console.log("Switching path to /login because...");
		// 		$location.path("/login");
		// 	} else {

		// 	};
		// });
	});
})();