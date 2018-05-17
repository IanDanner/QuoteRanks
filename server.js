var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var path = require('path');
var app = express();


app.use(bodyParser.json());
app.use(express.static( __dirname + '/QuoteRanksApp/dist/QuoteRanksApp' ));

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.listen(8000, function(){
    console.log('Listen on port 8000');
})