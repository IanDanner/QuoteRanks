var mongoose = require('mongoose');
var Quote = mongoose.model('Quote');
var Author = mongoose.model('Author');

module.exports = {
    create: (req, res) => {
        var newQuote = new Quote({
            quote: req.body.quote,
            votes: req.body.votes,
        });
        Author.findOne({_id: req.params.id}, function(err, thisAuthor){
            if(err){
                res.json(err)
            }
            else{
                console.log("Stuff", newQuote)
                thisAuthor.quotes.push(newQuote);
                console.log("THINGS", thisAuthor)
                thisAuthor.save((err) => {
                    if(err)
                        console.log("Error attempting to save new Quote to Author:", err)});
                        res.json(err);
                newQuote.save((err, newQuote)=>{
                    if(err){
                        console.log("Error attempting to save Quote:", err);
                        res.json(err);
                    }
                    else{
                        console.log("Quote Saved");
                    }
                })
            }
        })
    },

    update: (req, res) => {
        Quote.findOneAndUpdate({_id: req.params.Qid}, req.body, {runValidators: true}, function(err, Quote){
            if(err){
                res.json(err);                
            } else{
                res.json(Quote);
            }
        })
    },

    delete: (req, res) => {
        Quote.remove({_id: req.params.Qid}, function(err, data){
            if(err){     
                res.json(err);
            } else{
                res.json(data);
            }
        })
    }
}