'use strict';
describe('registerUser service', function() {
	var registerUser;
	beforeEach(function() {
		module('app.register');
		inject(function(_registerUser_){
			registerUser = _registerUser_;
		});
	});

	it('hello test', function() {
		expect('hello').toEqual('hello'); 
	});

	it('checkName test should only return true if it fits the requirements',function() {
		// Can't equal users array
		expect(registerUser.checkName("d0nkrs").checked).toEqual(false);
		// Can't be too short
		expect(registerUser.checkName("1").checked).toEqual(false);
		// Can't be too long
		expect(registerUser.checkName("superlongusername").checked).toEqual(false);
		// Can only use letters/numbers
		expect(registerUser.checkName("/@").checked).toEqual(false);
		// Fits the criteria
		expect(registerUser.checkName("goodUser123").checked).toEqual(true);
	});

	it('checkEmail test should only return true if there is an @ in the input', function() {
		// A @ was found
		expect(registerUser.checkEmail('eltonlaw296@hotmail.com').checked).toEqual(true);
		// A @ was not found
		expect(registerUser.checkEmail('eltonlaw296hotmail.com').checked).toEqual(false);
	});

	it('checkPassword test should check to see if the password is > 4', function() {
		//Password less than 4
		expect(registerUser.checkPassword('pw').checked).toEqual(false)
		// Password greater than 4
		expect(registerUser.checkPassword('password').checked).toEqual(true)
	});
});