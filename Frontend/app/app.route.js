app.config(function($routeProvider) {
	$routeProvider
		.when("/forum", {
			templateUrl:"app/components/forum/forumView.html",
			controller:"forumCtrl"
		})
		.when("/profile", {
			templateUrl:"app/components/profile/profileView.html",
			controller:"profileCtrl"
		})
		.when("/register", {
			templateUrl:"app/components/register/registerView.html",
			controller:"registerCtrl"
		})
		.when("/profile", {
			templateUrl:"app/components/login/loginView.html",
			controller:"loginCtrl"
		})
		.when("/dashboard", {
			templateUrl:"app/components/dashboard/dashboardView.html",
			controller:"dashboardCtrl"
		})
		.otherwise({redirectTo:"/"})
});