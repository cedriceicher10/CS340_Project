module.exports = function(){
	var express = require('express');
  var router = express.Router();
	var mysql = require('./dbcon.js');

	function getPlayers(res, mysql, context, complete){
		mysql.pool.query("SELECT * FROM player", function(error, results, fields){
			if(error){
				res.write(JSON.stringify(error));
				res.end();
			}
			context.player = results;
			complete();
		});
	}

	function getPlayersFiltered(res, mysql, context, complete){
		mysql.pool.query("SELECT * FROM player WHERE playerId = " + context.playerFiltered, function(error, results, fields){
			if(error){
				res.write(JSON.stringify(error));
				res.end();
			}
			context.player = results;
			complete();
		});
	}

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

	function getSponsors(res, mysql, context, complete){
		mysql.pool.query("SELECT sponsorId, name FROM sponsor", function(error, results, fields){
			if(error){
				res.write(JSON.stringify(error));
				res.end();
			}
			context.sponsors = results;
			complete();
		});
	}

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

	// Did this cause Justin's way with complete wouldn't work
	router.get('/', function(req, res){
		var callbackCount = 0;
		var context = {};
		context.jsscripts = ["delete_player.js"]; // Justin add
		var mysql = req.app.get('mysql');
		var resSize = Object.keys(req.query).length;
		// Filter has been triggered
		if (resSize > 0) {
			context.playerFiltered = req.query.playerId;
			getPlayersFiltered(res, mysql, context, complete);
			getTeams(res, mysql, context, complete);
			getSponsors(res, mysql, context, complete);
			function complete(){
				callbackCount++;
				if (callbackCount >= 3){
					res.render('player_table', context);
				}
			}
		}
		// Display as normal
		else {
			getPlayers(res, mysql, context, complete);
			getTeams(res, mysql, context, complete);
			getSponsors(res, mysql, context, complete);
			function complete(){
				callbackCount++;
				if (callbackCount >= 3){
					res.render('player_table', context);
				}
			}
		}
	});

	return router;
}();
