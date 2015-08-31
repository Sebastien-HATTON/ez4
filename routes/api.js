var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Contacts = require('../db/Contacts');

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
    new Contacts(req.body)
    .save(function(err, docs){
        if(err){
            res.status(500).send({state : "fail"});
        }
        //res.json(docs);
        res.send({state : "success"});
    });
})

module.exports = router;