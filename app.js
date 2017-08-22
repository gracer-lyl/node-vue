const hostname = '172.19.42.3'
const port = 80

var express = require('express')
var app = express()

app.get('/', function(req, res) {
    res.send('Test')
})

var server = app.listen(port, hostname, function() {
    var host = server.address().address
    var port = server.address().port
    console.log('Example app listening at http://%s:%s', host, port)
})