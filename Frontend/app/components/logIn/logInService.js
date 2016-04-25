app.factory('logIn', function($http) {



	var verify = function(username,password) {
		
		if(user.name == username   && user.password == password) {
			$http.get( USER INFORMATION )
				.then(onLoginSuccess)
		} else {
			display onError
		}
	}
});