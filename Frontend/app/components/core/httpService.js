(function(){
	angular
		.module('app.core')
		.service('httpService', httpService);

	httpService.$inject = ['$http','$q'];

	function httpService($http, $q) {
		var service = {
 			// getTweets: getTweets
		};
		return service;
		////////////////////////
	
		// function getTweets(link,successCall) {
		// 	$http.get(link)
		// 		.then(function(data){
		// 			successCall();
		// 		},function(error) {
		// 			console.log('Could not retrieve data. Error: '+ error);
		// 		});

		// };
	};
})();