(function() {
'use strict';

angular
	.module('app')
	.directive('navbar',function() {
	return {
		restrict:'E',
		templateUrl:"app/shared/navbar/navbarView.html"
	} 
});

})();