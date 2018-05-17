var Authors = require('../controllers/authors.js');
var Quotes = require('../controllers/quotes.js');

module.exports = function(app){

    //Author Routes
    app.get('/Authors', function(req, res){
        Authors.showAll(req, res);
    }),
    app.get('/Authors/:id', function(req, res){
        Authors.showOne(req, res);
    }),
    app.post('/Authors/', function(req, res){
        Authors.create(req, res);
    }),
    app.put('/Authors/:id', function(req, res){
        Authors.update(req, res);
    }),
    app.delete('/Authors/:id', function(req, res){
        Authors.delete(req, res);
    })

    //Quote Routes
    app.post('/Authors/:id/newQuote', function(req, res){
        Quotes.create(req, res);
    }),
    app.put('/Authors/:Aid/Edit/:Qid', function(req, res){
        Quotes.update(req, res);
    }),
    app.delete('/Authors/:Aid/Delete/:Qid', function(req, res){
        Quotes.delete(req, res);
    })
}