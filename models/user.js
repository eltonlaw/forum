var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/forum');

var UserSchema = new mongoose.Schema({
	name:String,
	password:String,
	email:String,
	created:{type:Date,default:Date.now},
	comments:[{body:String,inPost:String,date:Date}],
	reputation:{type:Number,default:0}
},{collection:"users"});

var User = mongoose.model("User",UserSchema);

module.exports = User;