var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CoursesSchema = new Schema({
	"Code": {type: String},
	"Dept": {type: String},
	"Mentor": {type: String},
	"Times": [{type: String}],
});

var Courses = mongoose.model('Course', CoursesSchema, "Course");
module.exports = Courses;