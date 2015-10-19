var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/store', function(req, res, next) {
  res.render('store', { title: 'Store' });
});

router.route('/message')
		.post(function(req,res,next){
			console.log('received message: ' + req.body.message);
			res.send("Message was: " + req.body.message);
});



module.exports = router;
