// import and create express app
var express = require('express');
var app = express();

// create hello world route
app.get('/', function(_req, res) {
      res.send('Hello World!');
})

// create server
var server = app.listen(3000, function() {
    var host = server.address().address;
      var port = server.address().port;
      console.log('Example app listening at http://%s:%s', host, port)
});