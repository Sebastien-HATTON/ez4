var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SignUpSchema = new Schema({
	"Name": {type: String},
	"Faculty": {type: String},
	"WeChat": {type: String},
	"Email": {type: String},
	"Ceil": {type: String},
	"Courses": [{type: String}],
	"Comments": {type: String}
});

var SignUp = mongoose.model('SignUp', SignUpSchema, "SignUp");
module.exports = SignUp;