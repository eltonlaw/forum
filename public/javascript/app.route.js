(function() {
'use strict';

angular
	.module('app')
	.config(function($routeProvider) {
	
	$routeProvider
		.when("/", {
			templateUrl:"../views/home.view.html",
			controller:"HomeCtrl",
			controllerAs:'vm'
		})
		.when("/forum", {
			templateUrl:"../views/forum.view.html",
			controller:"ForumCtrl",
			controllerAs:'vm'
		})
			.when("/forum/section1/topic1", {
				templateUrl:"../views/topic.view.html",
				controller:"TopicCtrl",
				controllerAs:'vm'
			})
			.when("/forum/section1/topic1/1", {
				templateUrl:"../views/discussion.view.html",
				controller:"DiscussionCtrl",
				controllerAs:'vm'
			})

		.when("/profile", {
			templateUrl:"../views/profile.view.html",
			controller:"ProfileCtrl",
			controllerAs:'vm'
		})
		.when("/register", {
			templateUrl:"../views/register.view.html",
			controller:"RegisterCtrl",
			controllerAs:'vm'
		})
			.when("/welcome", {
				templateUrl:"../views/welcome.view.html",
				controller:"RegisterCtrl",
				controllerAs:'vm'
			})
		.when("/profile", {
			templateUrl:"../views/profile.view.html",
			controller:"ProfileCtrl",
			controllerAs:'vm'
		})
		.when("/login", {
			templateUrl:"../views/login.view.html",
			controller:"LoginCtrl",
			controllerAs:'vm'
		})
		.when("/dashboard", {
			templateUrl:"../views/dashboard.view.html",
			controller:"DashboardCtrl",
			controllerAs:'vm'
		})
		.otherwise({redirectTo:"/"})
});

})();