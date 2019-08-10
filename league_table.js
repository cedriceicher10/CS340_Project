module.exports = function(){
	var express = require('express');
    var router = express.Router();
	
	var mysql = require('./dbcon.js');
	
	// Did this cause Justin's way with complete wouldn't work
	router.get('/', function(req, res){
		var context = {};
		context.jsscripts = ["delete_league.js"]; // Justin add
		mysql.pool.query('SELECT * FROM league', function(err, results, fields){
			if(err){
				next(err);
				return;
			}
			context.league = results;
			res.render('league_table', context);
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
	
	return router;
}();