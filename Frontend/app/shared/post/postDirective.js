(function(){
'use strict';

angular
	.module('app.forum')
	.directive('post',function() {
	return {
		restrict:'E',
		scope: {
			info:'='
		},
		templateUrl:"js/directives/post.html"
	}
});

})();