var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var expressSession = require("express-session");
var path = require('path');
var api = require('./routes/api');

var app = express();

//database setup
var mongoose = require('./node_modules/mongoose');
mongoose.connect('mongodb://csc309:banana@ds047722.mongolab.com:47722/heroku_v51bxlrz');  // not connected yet.. 

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'public/views'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api', api);


/* setups above*/
app.get('/', function(req, res){
    res.render('index');
});


var port = process.env.PORT || 1337;

app.listen(port, function() {
    console.log(port);
});


module.exports = app;