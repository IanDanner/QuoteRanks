var mongoose = require('mongoose');
var fs = require('fs');
var path = require('path');
mongoose.connect('mongodb://localhost/QuoteRanks');
var model_path = path.join(__dirname, './../models');
fs.readdirSync(model_path).forEach(function(file){
    if(file.indexOf('.js') >= 0){
        require(model_path + '/' + file);
    }
})