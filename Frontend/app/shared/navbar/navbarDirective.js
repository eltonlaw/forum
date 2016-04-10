app.directive('navbar',function() {
//If at index.html use this URL, if not use a different URL	
	if (window.location.href == "http://127.0.0.1:8080/")
		return {
			restrict:'E',
			templateUrl:"app/shared/navbar/navbarView.html"
		} 
	else {
		return {
			restrict:'E',
			templateUrl:"../../../app/shared/navbar/navbarView.html"
		} 
	}
});