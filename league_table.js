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
		mysql.pool.query("SELECT * FROM league", function(error, results, fields){
			if(error){
				res.write(JSON.stringify(error));
				res.end();
			}
			context.league = results;
			complete();
		});
	}

	router.post('/', function(req, res){
		var mysql = req.app.get('mysql');
		var sql = "INSERT INTO league (name, location, champ, totalGames) VALUES (?,?,?,?)";
		var inserts = [req.body.name, req.body.location, req.body.champ, req.body.totalGames];
		sql = mysql.pool.query(sql,inserts,function(err, results, fields){
			if(err){
				res.write(JSON.stringify(err));
				res.end();
			}
			else{
				res.redirect('/league_table');
			}
		});
	});

	// Justin Add [Start]
	router.delete('/:leagueId', function(req, res){
        var mysql = req.app.get('mysql');
        var sql = "DELETE FROM league WHERE leagueId = ?";
        var inserts = [req.params.leagueId];
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
		context.jsscripts = ["delete_league.js"]; // Justin add
		var mysql = req.app.get('mysql');
		getTeams(res, mysql, context, complete);
		getLeagues(res, mysql, context, complete);
		function complete(){
			callbackCount++;
			if (callbackCount >= 2){
				res.render('league_table', context);
			}
		}
	});

	return router;
}();
