var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ContactSchema = new Schema({
	"FirstName": {type: String},
	"LastName": {type: String},
	"EmailAddress": {type: String},
	"Phone": {type: String},
	"Content": {type: String}
});

var Contact = mongoose.model('Contact', ContactSchema, "Contact");
module.exports = Contact;