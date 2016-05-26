(function() {
'use strict';

angular
	.module('app')
	.config(function($routeProvider) {
	
	$routeProvider
		.when("/", {
			templateUrl:"app/components/home/homeView.html",
			controller:"HomeCtrl",
			controllerAs:'vm'
		})
		.when("/forum", {
			templateUrl:"app/components/forum/forumView.html",
			controller:"ForumCtrl",
			controllerAs:'vm'
		})
			.when("/forum/section1/topic1", {
				templateUrl:"app/shared/topic/topicView.html",
				controller:"TopicCtrl",
				controllerAs:'vm'
			})
			.when("/forum/section1/topic1/1", {
				templateUrl:"app/shared/discussion/discussionView.html",
				controller:"DiscussionCtrl",
				controllerAs:'vm'
			})

		.when("/profile", {
			templateUrl:"app/components/profile/profileView.html",
			controller:"ProfileCtrl",
			controllerAs:'vm'
		})
		.when("/register", {
			templateUrl:"app/components/register/registerView.html",
			controller:"RegisterCtrl",
			controllerAs:'vm'
		})
			.when("/welcome", {
				templateUrl:"app/components/register/welcomeView.html",
				controller:"RegisterCtrl",
				controllerAs:'vm'
			})
		.when("/profile", {
			templateUrl:"app/components/profile/profile.html",
			controller:"ProfileCtrl",
			controllerAs:'vm'
		})
		.when("/login", {
			templateUrl:"app/components/login/loginView.html",
			controller:"ProfileCtrl",
			controllerAs:'vm'
		})
		.when("/dashboard", {
			templateUrl:"app/components/dashboard/dashboardView.html",
			controller:"DashboardCtrl",
			controllerAs:'vm'
		})
		.otherwise({redirectTo:"/"})
});

})();