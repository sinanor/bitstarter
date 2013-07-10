var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());

var content;
fs.readFile('index.html', function (err, data) {
  if (err) throw err;
  content = data.toString();
//  console.log(data);
});

app.get('/', function(request, response) {
  response.send(content);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
