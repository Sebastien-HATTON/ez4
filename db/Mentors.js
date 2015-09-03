var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MentorsSchema = new Schema({
	"Name": {type: String},
	"Title": {type: String},
	"Dep": {type: String},
	"s1": {type: String},
	"s2": {type: String},
	"s3": {type: String},
	"long": {type: String},
	"photoUrl": {type: String},
	"BpUrl": {type: String},
	"rank": {type: Number}
});

var Mentors = mongoose.model('Mentor', MentorsSchema, "Mentor");
module.exports = Mentors;