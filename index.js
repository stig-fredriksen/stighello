var express = require('express')
var app = express()

app.get('/', function(req, res){
	res.send('hello world')
})

console.log('starting...')

app.listen(3000);