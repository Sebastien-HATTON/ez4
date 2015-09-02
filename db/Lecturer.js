var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LecturerSchema = new Schema({
	"Name": {type: String},
	"Title": {type: String},
	"Dep": {type: String},
	"s1": {type: String},
	"s2": {type: String},
	"s3": {type: String},
	"long": {type: String},
	"photoUrl": {type: String},
	"rank": {type: Number}
});

var Lecturer = mongoose.model('Lecturer', LecturerSchema, "Lecturer");
module.exports = Lecturer;