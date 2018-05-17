var mongoose = require('mongoose');
var Author = mongoose.model('Author');

module.exports = {
    showAll: (req, res) => {
        Author.find({}).populate('quotes').exec(function(err, Authors){
            if(err){
                res.json(err);
            } else{
                res.json(Authors);
            }
        })
    },

    showOne: (req, res) => {
        Author.findOne({_id: req.params.id}).populate('quotes').exec(function(err, Author){
            if(err){
                res.json(err);
            } else{
                res.json(Author);
            }
        })
    },

    create: (req, res) => {
        var newAuthor = new Author({
            name: req.body.name,
        });
        newAuthor.save(function(err, newAuthor){
            if(err){
                res.json(err);
            } else{
                res.json(newAuthor);
            }
        })
    },

    update: (req, res) => {
        Author.findOneAndUpdate({_id: req.params.id}, req.body, {runValidators: true}, function(err, Author){
            if(err){
                res.json(err);                
            } else{
                res.json(Author);
            }
        })
    },

    delete: (req, res) => {
        Author.remove({_id: req.params.id}, function(err, data){
            if(err){
                res.json(err);
            } else{
                res.json(data);
            }
        })
    }
}