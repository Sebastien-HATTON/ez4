var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ArticlesSchema = new Schema({
	"Title": {type: String},
	"Author": {type: String},
	"Time": {type: Date},
	"Url": {type: String}
});

var Articles = mongoose.model('Articles', ArticlesSchema, "Articles");
module.exports = Articles;