var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Contacts = require('../db/Contacts');
var Lecturer = require('../db/Lecturer');

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

router.get('/lecturer', function(req, res, next){
    
})

module.exports = router;