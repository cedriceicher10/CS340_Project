module.exports = function(){
	var express = require('express');
    var router = express.Router();
	
	var mysql = require('./dbcon.js');
	
	// Did this cause Justin's way with complete wouldn't work
	router.get('/', function(req, res){
		var context = {};
		context.jsscripts = ["delete_sponsor.js"]; // Justin add
		mysql.pool.query('SELECT * FROM sponsor', function(err, results, fields){
			if(err){
				next(err);
				return;
			}
			context.sponsor = results;
			res.render('sponsor_table', context);
		});
	});

	router.post('/', function(req, res){
		var mysql = req.app.get('mysql');
		var sql = "INSERT INTO sponsor (name, revenue) VALUES (?,?)";
		var inserts = [req.body.name, req.body.revenue];
		sql = mysql.pool.query(sql,inserts,function(err, results, fields){
			if(err){
				res.write(JSON.stringify(err));
				res.end();
			}
			else{
				res.redirect('/sponsor_table');
			}
		});
	});
	
	// Justin Add [Start]
	router.delete('/:sponsorId', function(req, res){
        var mysql = req.app.get('mysql');
        var sql = "DELETE FROM sponsor WHERE sponsorId = ?";
        var inserts = [req.params.sponsorId];
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