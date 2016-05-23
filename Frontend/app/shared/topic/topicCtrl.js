(function() {
'use strict';
	angular
		.module('app.topic')
		.controller('TopicCtrl',TopicCtrl);

	TopicCtrl.$inject = [];

	function TopicCtrl() {
		var vm = this;
		vm.posts = mockData();
		vm.sortOrder='activity';
		vm.sortReverse = false;
		vm.categoryOrder="";
		vm.sortByTh = sortByTh;
		///////////////////




		function mockData() { 
			var data = 
			[
				{
					name:"Tell me if this funny?",
					category:"General Discussion",
					replies:567,
					views:20123,
					activity:"4 hours ago"
				},
				{
					name:"HELP! Nothing works",
					category:"Technical Support",
					replies:2,
					views:56,
					activity:"1 hour ago"
				},
				{
					name:"I really love cats and dogs and turtles and giraffes and koalas and gorillas and penguins and penguins and penguins and penguins. I love the shit out of penguins. Fish are a whole nother ball game, creepy as fuck. AMA",
					category:"Random",
					replies:15,
					views:25,
					activity:"5 hours ago"
				},
				{
					name:"PATCH 3.14 AND May 2016 UPDATES",
					category:"Announcements",
					replies:40,
					views:90,
					activity:"24 hours ago"
				},
				{
					name:"All Categories, do we really actually need it?",
					category:"General Discussion",
					replies:1002,
					views:5606,
					activity:"4 hours ago"
				},
			];
			return data;
			};

			function sortByTh(th) {
				vm.sortOrder = th;
				vm.sortReverse = !vm.sortReverse
			};

			function sortByCategory() {
				switch(vm.categoryOrder) {
					case "General Discussion":
					case "Technical Support":
					case "Random":
					case "Announcements":
					default: 
			};
		};

	};

})();