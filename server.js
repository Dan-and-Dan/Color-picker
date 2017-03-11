var express = require('express'); 
var app = express(); 
var bodyParser = require('body-parser');
var port = process.env.PORT || 8000; 
var path = require('path');

app.use(express.static(path.join(__dirname, "public")));




app.listen(port, function() { 
    console.log('listening on port ' + port);
});