var express = require('express');
var app = express();

app.use(express.static('client'))
// Listen for requests
var server = app.listen(3000, function() {
  
});