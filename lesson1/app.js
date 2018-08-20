var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send('Hello World');
    console.log('ok')
});

app.listen(3000, function() {
    console.log('app is listing at port 3000')
});