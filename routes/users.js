var User = require("./../models/user.js");

function getAll(req,res) {
	User.find(function(err,data) {
		res.json(data);
	});
};

function getById(req,res) {
	console.log("getting by id");
};

function post(req,res) {
	if(true){
		var newUser = new User({
			name:req.body.name,
			password:req.body.password,
			email:req.body.email,
		});
		newUser.save();
	} else {

	};
};

function update(req,res) {
	db.users.update({_id:req.body._id},{
		name:req.body.name,
		password:req.body.password,
		email:req.body.email

	});
};

function deleteById(req,res) {
	console.log("deleting by id");
};

module.exports = {
	getAll:getAll,
	getById:getById,
	post:post,
	update:update,
	deleteById:deleteById
};
