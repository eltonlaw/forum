(function(){
	angular
		.module("app")
		.controller("FooterCtrl",FooterCtrl);

	FooterCtrl.$inject = ["$http"];

	function FooterCtrl($http) {
		var vm = this;
		vm.getTweets = getTweets;
		vm.tweets = [];
		//////////////////////////
		function getTweets() {
			// var config = {
			// 	headers: {
			// 		oauth_consumer_key:"DC0sePOBbQ8bYdC8r4Smg",
			// 		oauth_signature_method:"HMAC-SHA1",
			// 		oauth_timestamp:"1466447010",
			// 		oauth_nonce:"1995415097",
			// 		oauth_version:"1.0",
			// 		oauth_token:"2920781327-vqqmQAbxJxQHvj9pTAAC1ogW2kmS4ZyMBp6Hwdp",
			// 		oauth_signature:"Z74zNYAXOqdSpYuhTTgLFEOtZBU%3D"
			// 	}
			// };
			// $http.get("https://api.twitter.com/1.1/statuses/user_timeline.json",config)
			// 	.then(function(response){
			// 		console.log("Success");
			// 		console.log(response.data);
			// 	},function(response){
			// 		console.log("Error");
			// 		console.log(response);
			// 	});
		};
		getTweets();
	};
})();