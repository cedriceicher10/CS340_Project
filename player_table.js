module.exports = function(){
	var express = require('express');
    var router = express.Router();
	
	var mysql = require('./dbcon.js');

	function getTeams(res, mysql, context, complete){
		mysql.pool.query("SELECT teamId, name FROM team", function(error, results, fields){
			if(error){
				res.write(JSON.stringify(error));
				res.end();
			}
			context.teams = results;
			complete();
		});
	}
	
	// Did this cause Justin's way with complete wouldn't work
	router.get('/', function(req, res){
		var context = {};
		context.jsscripts = ["delete_player.js"]; // Justin add
		mysql.pool.query('SELECT * FROM player', function(err, results, fields){
			if(err){
				next(err);
				return;
			}
			getTeams(res, mysql, context, complete);
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
	
	// Justin Add [Start]
	router.delete('/:playerId', function(req, res){
        var mysql = req.app.get('mysql');
        var sql = "DELETE FROM player WHERE playerId = ?";
        var inserts = [req.params.playerId];
        sql = mysql.pool.query(sql, inserts, function(error, results, fields){
            if(error){
                res.write(JSON.stringify(error));
                res.status(400);
                res.end();
            } else{
                res.status(202).end();
            }
        })
    })
	// Justin Add [End]
	
	return router;
}();