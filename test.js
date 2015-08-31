var app = require('./app');
var should = require('should');
var request = require('supertest');
var server = request.agent(app);

describe('mock test', function(){
    
   it('test mock put', function(done){
       server
       .post('/mock/post')
       .expect(200)
       .end(function(err, res){
           res.status.should.equal(200);
           res.text.should.equal('this is the mocking post');
           done();
       })
   });
   
   
   it('test mock post', function(done){
       server
       .put('/mock/post')
       .expect(200)
       .end(function(err, res){
           res.status.should.equal(200);
           res.body.alice.should.equal('aaa');
           done();
       })
   });
   
   it('check no login', function(done){
       server
       .get('/foo')
       .expect(302)
       .end(function(err, res){
           res.status.should.equal(302);
           res.text.should.equal('Moved Temporarily. Redirecting to /');
           done();
       });
   });
   
   it('Check post without logged in', function(done){
       server
       .post('/api/projects/55b26d88483e267619bef085')
       .expect(302)
       .end(function(err, res){
           res.status.should.equal(302);
           res.text.should.equal('Moved Temporarily. Redirecting to /');
       });
   });
   
   it('should logged in', function(done){
       server
       .post('/login')
       .type('form')
       .send({username: "abc", password: "abc"})
       .expect(302)
       .end(function(err, res){
           res.status.should.equal(302);
           res.text.should.equal('Moved Temporarily. Redirecting to /');
           done();
       });
   });
});