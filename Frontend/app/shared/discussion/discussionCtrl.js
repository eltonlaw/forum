(function() {
	'use strict';
	angular
		.module("app.discussion")
		.controller('DiscussionCtrl',DiscussionCtrl);

	DiscussionCtrl.$inject=[];

	function DiscussionCtrl() {
		var vm = this;
		vm.title = "HELP! Nothing Works"
		vm.posts = [];
		/////////////////////

		vm.posts = [
		{
			poster: {
				name:"d0nkrs",
				image:"",
				dateJoined: new Date()
			},
			content:"The stuff I gotta make still: Buttons for topic. Integration with backend for registration and login and posts. Login tool. Make activity time thingy actually work. Controls for admins and moderators of the forum. Ex. Blocking off a discussion/deleting posts/banning users"
		},
		{
			poster: {
				name:"john123",
				image:"",
				dateJoined: new Date()
			},
			content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec risus dui, eleifend ut iaculis interdum, iaculis sed orci. Fusce in ex porttitor justo bibendum faucibus. Morbi iaculis ante eu dapibus dictum. Fusce sit amet rhoncus purus, nec molestie metus. Sed ultrices, ex in semper ullamcorper, dui risus rhoncus felis, ac ullamcorper justo libero sed magna. Duis consequat luctus nunc, ut fringilla enim feugiat ut. Mauris semper volutpat velit, in mollis ex accumsan nec. Ut elementum vestibulum justo, sed varius erat interdum sed. Integer bibendum convallis congue. Nam non dolor efficitur, ultrices orci vel, dignissim lacus. Nullam congue luctus libero, vitae bibendum massa laoreet eu. Phasellus suscipit malesuada finibus. Sed enim est, scelerisque nec risus quis, sagittis bibendum dolor. Vestibulum id urna eget mauris imperdiet laoreet nec id nulla. Phasellus sed orci ligula."
		}



		];
	};

})();