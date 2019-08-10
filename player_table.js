module.exports = function(){
	var express = require('express');
    var router = express.Router();
	
	var mysql = require('./dbcon.js');
	
	// Did this cause Justin's way with complete wouldn't work
	router.get('/', function(req, res){
		var context = {};
		mysql.pool.query('SELECT * FROM player', function(err, results, fields){
			if(err){
				next(err);
				return;
			}
			context.player = results;
			res.render('player_table', context);
		});
	});
	
	router.post('/', function(req, res){
		var mysql = req.app.get('mysql');
		var sql = "INSERT INTO player (teamId, fname, lname, position, appearances, goals, assists, height, birthdate, nationality, sponsorId) VALUES (?,?,?,?,?,?,?,?,?,?,?)";
		var inserts = [req.body.teamId, req.body.fname, req.body.lname, req.body.position, req.body.appearances, req.body.goals, req.body.assists, req.body.height, req.body.birthdate, req.body.nationality, req.body.sponsorId];
		sql = mysql.pool.query(sql,inserts,function(err, results, fields){
			if(err){
				res.write(JSON.stringify(err));
				res.end();
			}
			else{
				res.redirect('/player_table');
			}
		});
	});
	
	return router;
}();