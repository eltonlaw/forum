(function() {
'use strict';
angular
	.module('app.core')
	.controller('NavbarCtrl', NavbarCtrl);

	NavbarCtrl.$inject = ['$http'];

	function NavbarCtrl($http) {
		var vm = this;
		// vm.getTweets = getTweets;

		//////////////////////////////////

		// function getTweets() {
		// 	console.log('running getTweets')
		// 	$http({
		// 		method:'JSONP',
		// 		url:'https://api.twitter.com/1.1/statuses/user_timeline.json?count=3&user_id=xprize&screen_name=xprize',
		// 		withCredentials:true
		// 	})
		// 		.then(function(data){
		// 			vm.tweets = data;
		// 			console.log('vm.tweets');
		// 		},function(error) {
		// 			console.log('Could not retrieve data. Error: '+ error);
		// 		});
		// };
		// getTweets();
	};
// 

})();