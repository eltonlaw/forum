(function() {

angular
	.module('app.forum')
	.controller('ForumCtrl', ForumCtrl);

	function ForumCtrl() {
		var vm = this;
		vm.section1 = [];
		vm.section2 = [];

		///////////////////
		vm.section1 = [
		{
			name:"Topic 1",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tristique fermentum feugiat. Donec non libero augue. Nunc ut tincidunt quam. Duis pretium urna laoreet nisl sollicitudin, a scelerisque sem blandit. Duis pulvinar malesuada elementum. Mauris vel massa id nulla consectetur ullamcorper. Donec lorem nunc, posuere sed venenatis quis, pharetra eu arcu. Phasellus ac facilisis arcu, placerat eleifend lacus. Pellentesque ornare, eros vitae tincidunt interdum, sapien ipsum vehicula massa, ac aliquet mauris ligula ac lacus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae",
			link:"section1/topic1"
		},
		{
			name:"Topic 2",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tristique fermentum feugiat. Donec non libero augue. Nunc ut tincidunt quam. Duis pretium urna laoreet nisl sollicitudin, a scelerisque sem blandit. Duis pulvinar malesuada elementum. Mauris vel massa id nulla consectetur ullamcorper. Donec lorem nunc, posuere sed venenatis quis, pharetra eu arcu. Phasellus ac facilisis arcu, placerat eleifend lacus. Pellentesque ornare, eros vitae tincidunt interdum, sapien ipsum vehicula massa, ac aliquet mauris ligula ac lacus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae",
			link:"section1/topic2"
		},
		{
			name:"Topic 3",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tristique fermentum feugiat. Donec non libero augue. Nunc ut tincidunt quam. Duis pretium urna laoreet nisl sollicitudin, a scelerisque sem blandit. Duis pulvinar malesuada elementum. Mauris vel massa id nulla consectetur ullamcorper. Donec lorem nunc, posuere sed venenatis quis, pharetra eu arcu. Phasellus ac facilisis arcu, placerat eleifend lacus. Pellentesque ornare, eros vitae tincidunt interdum, sapien ipsum vehicula massa, ac aliquet mauris ligula ac lacus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae",
			link:"section1/topic3"
		}];
		vm.section2 = [
		{
			name:"Topic 1",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tristique fermentum feugiat. Donec non libero augue. Nunc ut tincidunt quam. Duis pretium urna laoreet nisl sollicitudin, a scelerisque sem blandit. Duis pulvinar malesuada elementum. Mauris vel massa id nulla consectetur ullamcorper. Donec lorem nunc, posuere sed venenatis quis, pharetra eu arcu. Phasellus ac facilisis arcu, placerat eleifend lacus. Pellentesque ornare, eros vitae tincidunt interdum, sapien ipsum vehicula massa, ac aliquet mauris ligula ac lacus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae",
			link:"section2/topic1"
		},
		{
			name:"Topic 2",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tristique fermentum feugiat. Donec non libero augue. Nunc ut tincidunt quam. Duis pretium urna laoreet nisl sollicitudin, a scelerisque sem blandit. Duis pulvinar malesuada elementum. Mauris vel massa id nulla consectetur ullamcorper. Donec lorem nunc, posuere sed venenatis quis, pharetra eu arcu. Phasellus ac facilisis arcu, placerat eleifend lacus. Pellentesque ornare, eros vitae tincidunt interdum, sapien ipsum vehicula massa, ac aliquet mauris ligula ac lacus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae",
			link:"section2/topic2"
		},
		{
			name:"Topic 3",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tristique fermentum feugiat. Donec non libero augue. Nunc ut tincidunt quam. Duis pretium urna laoreet nisl sollicitudin, a scelerisque sem blandit. Duis pulvinar malesuada elementum. Mauris vel massa id nulla consectetur ullamcorper. Donec lorem nunc, posuere sed venenatis quis, pharetra eu arcu. Phasellus ac facilisis arcu, placerat eleifend lacus. Pellentesque ornare, eros vitae tincidunt interdum, sapien ipsum vehicula massa, ac aliquet mauris ligula ac lacus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae",
			link:"section2/topic3"
		}];
	};
})();