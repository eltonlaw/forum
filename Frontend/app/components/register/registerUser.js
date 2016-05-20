(function(){
'use strict';
	angular
		.module('app.register')
		.factory('registerUser', registerUser);

function registerUser() {
		var service = {
			checkRegistration:checkRegistration,
			checkName:checkName,
			checkPassword:checkPassword,
			checkEmail:checkEmail,
			createUser:createUser
		};
		return service;
	/////////////////////////////////
	function checkRegistration(name,password,email) {	
		// Three tests for username, pw and email
			var nameTest = checkName(name);
			var passwordTest = checkPassword(password);
			var emailTest = checkEmail(email);

		// Creates new user and returns true if all tests are good
		if (nameOk && passwordOk && emailOk) {
			createUser(name,password,email);
			return true
		} else {
			// Need to elaborate, explain what went wrong
			return false
		}
	};

	function checkName(name) {
		var x = name.toString();
		var usernames = "d0nkrs";
		var isNotValid = function(str) {
			return /[-!$%@^&*()_+|~=`{}\[\]:";'<>?,.\/]/.test(str);
		}
		// If any of these fail, return a object with a checked property and either a specific error message or a success message
		if(x === "") {
			return {
				checked: false,
				msg: "Please input a username"
			}
		} 
		else if(x.length < 4 || x.length > 12) {
			return {
				checked: false,
				msg:"Username must be between 4-12 characters"
			}
		}
		else if(isNotValid(x)) {
			return {
				checked:false,
				msg: "No special characters"
			}
		}
		else if (x == usernames) {
			return {
				checked:false,
				msg: "That username has already been taken"
			}
		} 
		else {
			return {
				checked:true,
				msg:"Awesome, that usernames available"
			}
		}
	};

	function checkPassword(password) {
		var x = password.toString();
		if (x.length < 4) {
			return {
				checked:false,
				msg:"Password must be greater than 4 characters"
			}
		} else {
			return {
				checked:true,
				msg:"Great password"
			}
		}
	};

// Need to add a test here to check if the email is already registed in the database
	function checkEmail(email) {
		if (email.toString().indexOf("@") == -1) {
			return {
				checked:false,
				msg:"That's not an email!"
			}
		} else {
			return {
				checked: true,
				msg:"That email checks out!"
			}
		}
	};


	function createUser(name, password, email) {
		var newUser = {
			username: name,
			password: password,
			email:email
		}
		return newUser;
		// Push new user object to node API
	};
};

})();