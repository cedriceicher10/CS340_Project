module.exports = function(){
	var express = require('express');
    var router = express.Router();
	
	var mysql = require('./dbcon.js');
	
	// Did this cause Justin's way with complete wouldn't work
	router.get('/', function(req, res){
		var context = {};
		mysql.pool.query('SELECT * FROM stadium', function(err, results, fields){
			if(err){
				next(err);
				return;
			}
			context.stadium = results;
			res.render('stadium_table', context);
		});
	});
	return router;
}();

router.post('/', function(req, res){
	var mysql = req.app.get('mysql');
	var sql = "INSERT INTO stadium (name, city, capacity, pitch, year) VALUES (?,?,?,?,?)";
	var inserts = [req.body.name, req.body.city, req.body.capacity, req.body.pitch, req.body.year];
	sql = mysql.pool.quer(sql,inserts,function(err, results, fields){
		if(err){
			next(err);
			return;
		}
		else{
			res.redirect('/stadium_table');
		}
	});
});
	