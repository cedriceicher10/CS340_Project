module.exports = function(){
	var express = require('express');
    var router = express.Router();
	
	var mysql = require('./dbcon.js');
	
	function getTeams(res, mysql, context, complete){
		mysql.pool.query("SELECT * FROM team", function(error, results, fields){
			if(error){
				res.write(JSON.stringify(error));
				res.end();
			}
			context.team = results;
			complete();
		});
	}

	function getStadiums(res, mysql, context, complete){
		mysql.pool.query("SELECT stadiumId, name FROM stadium", function(error, results, fields){
			if(error){
				res.write(JSON.stringify(error));
				res.end();
			}
			context.stadiums = results;
			complete();
		});
	}

	router.post('/', function(req, res){
		var mysql = req.app.get('mysql');
		var sql = "INSERT INTO team (name, city, stadium, standing, gamesPlayed, points) VALUES (?,?,?,?,?,?)";
		var inserts = [req.body.name, req.body.city, req.body.stadium, req.body.standing, req.body.gamesPlayed, req.body.points];
		sql = mysql.pool.query(sql,inserts,function(err, results, fields){
			if(err){
				res.write(JSON.stringify(err));
				res.end();
			}
			else{
				res.redirect('/team_table');
			}
		});
	});

	// Justin Add [Start]
	router.delete('/:teamId', function(req, res){
        var mysql = req.app.get('mysql');
        var sql = "DELETE FROM team WHERE teamId = ?";
        var inserts = [req.params.teamId];
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
		context.jsscripts = ["delete_team.js"]; // Justin add
		var mysql = req.app.get('mysql');
		getTeams(res, mysql, context, complete);
		getStadiums(res, mysql, context, complete);
		function complete(){
			callbackCount++;
			if (callbackCount >= 2){
				res.render('team_table', context);
			}
		}
	});
	
	return router;
}();