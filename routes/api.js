var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Contacts = require('../db/Contacts');
var Mentors = require('../db/Mentors');
var News = require('../db/News');
var Courses = require("../db/Courses");
var SignUp = require("../db/SignUp");

///////////////////////
// api for contacts  //
///////////////////////
router.get('/contact', function(req, res, next){
    Contacts.find()
        .exec(function(err, doc){
        if(err){
            res.status(500).send("Something broke!");
        }
            res.send(doc);
        });
});

router.post('/contact', function(req, res, next){
    console.log(req.body);
    new Contacts(req.body)
    .save(function(err, docs){
        if(err){
            res.status(500).send({state : "fail"});
        }
        //res.json(docs);
        res.send({state : "success"});
    });
});

///////////////////////
// api for Mentors  //
///////////////////////
router.get('/mentors', function(req, res, next){
    Mentors.find()
        .exec(function(err, doc){
        if(err){
            res.status(500).send("Something broke!");
        }
            res.send(doc);
        });
})

///////////////////
// api for News  //
///////////////////
router.get('/news', function(req, res, next){
    News.find()
        .exec(function(err, doc){
        if(err){
            res.status(500).send("Something broke!");
        }
            res.send(doc);
        });
})

///////////////////////
// api for Courses   //
///////////////////////
router.get('/courses', function(req, res, next){
    Courses.find()
        .exec(function(err, doc){
        if(err){
            res.status(500).send("Something broke!");
        }
            res.send(doc);
        });
});

/////////////////////
// api for SignUp  //
/////////////////////
router.post('/signup', function(req, res, next) {
    new SignUp(req.body)
    .save(function(err, docs){
        if(err){
            res.status(500).send({state : "fail"});
        }
        //res.json(docs);
        res.send({state : "success"});
    });
});


module.exports = router;