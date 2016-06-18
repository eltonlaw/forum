(function() {
'use strict';

angular.module('app', [
	// ANGULAR
	"ngRoute",
	// CUSTOM
	"app.core",
	"app.forum",
	"app.topic",
	"app.discussion",
	"app.profile",
	"app.home",
	"app.register",
	"app.login"
]);

})();