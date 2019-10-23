var express = require('express');
var app = express();
app.use(express.static('./public'));
app.get('/getData', function(req, res) {
    res.json({username: req.query.name, age: 30})
})
app.post('/getPost', function(req, res) {
    res.json({id: 5}) 
})
app.listen(3000);