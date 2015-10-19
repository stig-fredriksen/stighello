var express = require('express')
var app = express()

app.get('/', function(req, res){
	res.send('hello world')
})

console.log('starting...')

var port = (process.env.PORT || '3000')

app.listen(port);