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

	function getLeagues(res, mysql, context, complete){
		mysql.pool.query("SELECT leagueId, name FROM league", function(error, results, fields){
			if(error){
				res.write(JSON.stringify(error));
				res.end();
			}
			context.leagues = results;
			complete();
		});
	}

	function getTeamLeagues(res, mysql, context, complete){
		mysql.pool.query("SELECT * FROM team_league", function(error, results, fields){
			if(error){
				res.write(JSON.stringify(error));
				res.end();
			}
			context.team_league = results;
			complete();
		});
	}

	router.post('/', function(req, res){
		var mysql = req.app.get('mysql');
		var sql = "INSERT INTO team_league (teamId, leagueId) VALUES (?,?)";
		var inserts = [req.body.teamId, req.body.leagueId];
		sql = mysql.pool.query(sql,inserts,function(err, results, fields){
			if(err){
				res.write(JSON.stringify(err));
				res.end();
			}
			else{
				res.redirect('/team-league_table');
			}
		});
	});
	
	// Justin Add [Start]
	router.delete('/:team_leagueId', function(req, res){
        var mysql = req.app.get('mysql');
        var sql = "DELETE FROM team_league WHERE team_leagueId = ?";
        var inserts = [req.params.team_leagueId];
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

	router.get('/', function(req, res){
		var callbackCount = 0;
		var context = {};
		context.jsscripts = ["delete_team-league.js"]; // Justin add
		var mysql = req.app.get('mysql');
		getTeamLeagues(res, mysql, context, complete);
		getTeams(res, mysql, context, complete);
		getLeagues(res, mysql, context, complete);
		function complete(){
			callbackCount++;
			if (callbackCount >= 3){
				res.render('team-league_table', context);
			}
		}
	});
	
	return router;
}();