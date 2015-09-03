var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var NewsSchema = new Schema({
	"Title": {type: String},
	"Author": {type: String},
	"Time": {type: Date},
	"Url": {type: String},
	"CoverPhoto": {type: String},
	"Top": {type: Boolean}
});

var News = mongoose.model('News', NewsSchema, "News");
module.exports = News;