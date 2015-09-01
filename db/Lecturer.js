var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LecturerSchema = new Schema({
	"Name": {type: String},
	"Dep": {type: String},
	"short": {type: String},
	"long": {type: String},
	"photoUrl": {type: String}
});

var Lecturer = mongoose.model('Lecturer', LecturerSchema, "Lecturer");
module.exports = Lecturer;