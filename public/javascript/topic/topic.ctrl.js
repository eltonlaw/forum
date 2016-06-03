(function() {
'use strict';
	angular
		.module('app.topic')
		.controller('TopicCtrl',TopicCtrl);

	TopicCtrl.$inject = [];

	function TopicCtrl() {
		var vm = this;
		vm.posts = data();
		// Value to sort by categories, default of all categories
		vm.sortCategoryOrder="";
		vm.sortByTh = sortByTh;
		// Value to sort by table head
		vm.sortThOrder='activity';
		//Value to reverse table head sorting: descending to ascending or vice versa
		vm.sortReverse = false;
		vm.sortByButton = sortByButton;
		//Value to sort by button orders - Latest, Trending Now, Hall of Fame
		vm.sortButtonOrder = '';
		///////////////////

		function data() { 
			var mockData = 
			[
				{
					name:"Tell me if this funny?",
					category:"General Discussion",
					replies:567,
					views:20123,
					activity:"4 hours ago",
					link:2
				},
				{
					name:"HELP! Nothing works",
					category:"Technical Support",
					replies:2,
					views:56,
					activity:"1 hour ago",
					link:1
				},
				{
					name:"I really love cats and dogs and turtles and giraffes and koalas and gorillas and penguins and penguins and penguins and penguins. I love the shit out of penguins. Fish are creepy as fuck though",
					category:"Random",
					replies:15,
					views:25,
					activity:"5 hours ago",
					link:3
				},
				{
					name:"PATCH 3.14 AND May 2016 UPDATES",
					category:"Announcements",
					replies:40,
					views:90,
					activity:"24 hours ago",
					link:4
				},
				{
					name:"All Categories, do we really actually need it?",
					category:"General Discussion",
					replies:1002,
					views:5606,
					activity:"4 hours ago",
					link:5
				},
			];
			return mockData;
			};

			function sortByTh(th) {
				vm.sortThOrder = th;
				vm.sortReverse = !vm.sortReverse
			};

			function sortByCategory() {
				switch(vm.sortCategoryOrder) {
					case "General Discussion":
					case "Technical Support":
					case "Random":
					case "Announcements":
					default: 
				};
			};

			function sortByButton(button) {
				console.log(button);
			};

	};

})();