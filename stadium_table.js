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