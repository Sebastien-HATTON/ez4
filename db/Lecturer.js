var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LecturerSchema = new Schema({
	"Name": {type: String},
	"Dep": {type: String},
	"Url": {type: String}
});

var Lecturer = mongoose.model('Lecturer', LecturerSchema, "Lecturer");
module.exports = Lecturer;