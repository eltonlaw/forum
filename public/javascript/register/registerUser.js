(function(){
'use strict';
	angular
		.module('app.register')
		.factory('registerUser', registerUser);

registerUser.$inject = ['$http'];

function registerUser($http) {
		var service = {
			createUser:createUser,
			checkName:checkName,
			checkPassword:checkPassword,
			checkEmail:checkEmail
		};
		return service;
	/////////////////////////////////
	function checkName(name) {
		var x = name.toString();
		var usernames = "d0nkrs";
		var isNotValid = function(str) {
			return /[-!$%@^&*()_+|~=`{}\[\]:";'<>?,.\/]/.test(str);
		}
		// If any of these fail, return a object with a valid property and either a specific error message or a success message
		if(x === "") {
			return {
				valid: false,
				msg: "Please input a username"
			};
		} else if(x.length < 4 || x.length > 12) {
			return {
				valid: false,
				msg:"Username must be between 4-12 characters"
			};
		} else if(isNotValid(x)) {
			return {
				valid:false,
				msg: "No special characters"
			};
		} else if (x == usernames) {
			return {
				valid:false,
				msg: "That username has already been taken"
			};
		} else {
			return {
				valid:true,
				msg:"Awesome, that usernames available"
			};
		}
		
	};

	function checkPassword(password) {
		var x = password.toString();
		if (x.length < 4) {
			return {
				valid:false,
				msg:"Password must be greater than 4 characters"
			}
		} else {
			return {
				valid:true,
				msg:"Great password"
			}
		}
	};

// Need to add a test here to check if the email is already registed in the database
	function getEmailList() {
		$http.get("/api/users").then(function(response){
			var emailList = [];
			for(var i=0;i<response.data.length;i++) {
				 emailList.push(response.data[i].email);
			};
		});
	};
	function checkEmail(email) {
		console.log(emailList);
		if (email.toString().indexOf("@") == -1) {
			return {
				valid:false,
				msg:"That's not an email!"
			};
		} else if(false/*emailList.indexOf(email)*/){
			return {
				valid: false,
				msg:"That email is already in use"
			};
		} else {
			return {
				valid: true,
				msg:"That email checks out!"
			};
		}
	};

	function createUser(name, password, email) {
		var newUserData = {
			name: name,
			password: password,
			email:email
		};
		$http.post("/api/users",newUserData);
	};
};


})();