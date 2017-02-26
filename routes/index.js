var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/*login*/
router.get('/login', function(req, res, next) {
  res.render('login', {});
});

router.post('/login', function(req, res, next) {
	console.log(req.body);

	var mysql      = require('mysql');
	var connection = mysql.createConnection({
	  	host     : 'localhost', /* port :3305 ถ้าเปลี่ยน port มัน*/
	  	user     : 'root',
	  	password : '',
	  	database : 'learn_node_mysql_class06'
	});
	 
	connection.connect();
	 
	connection.query('SELECT * FROM user WHERE username = ? AND password = ?',
	[req.body.username, req.body.password],
	function (error, results, fields) { /*การ query ข้อมูลด้วยคำสั่ง sql*/
	  	if (error) throw error;
	  	console.log(results);
	});
 
connection.end();

  res.render('login', {});
});

module.exports = router;
