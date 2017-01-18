angular
	.module('app.profile')
	.controller("ProfileCtrl", ProfileCtrl);

	ProfileCtrl.$inject = [];

function ProfileCtrl() {
	var vm =this;
	vm.user = JSON.parse(sessionStorage["User-Data"])[0];
	//////////////////
	
};