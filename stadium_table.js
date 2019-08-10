module.exports = function(){
	var express = require('express');
    var router = express.Router();
	
	var mysql = require('./dbcon.js');
	
	// Did this cause Justin's way with complete wouldn't work
	router.get('/', function(req, res){
		var context = {};
		context.jsscripts = ["delete_stadium.js"]; // Justin add
		mysql.pool.query('SELECT * FROM stadium', function(err, results, fields){
			if(err){
				next(err);
				return;
			}
			context.stadium = results;
			res.render('stadium_table', context);
		});
	});

	router.post('/', function(req, res){
		var mysql = req.app.get('mysql');
		var sql = "INSERT INTO stadium (name, city, capacity, pitch, year) VALUES (?,?,?,?,?)";
		var inserts = [req.body.name, req.body.city, req.body.capacity, req.body.pitch, req.body.year];
		sql = mysql.pool.query(sql,inserts,function(err, results, fields){
			if(err){
				res.write(JSON.stringify(err));
				res.end();
			}
			else{
				res.redirect('/stadium_table');
			}
		});
	});
	
	// Justin Add [Start]
	router.delete('/:stadiumId', function(req, res){
        var mysql = req.app.get('mysql');
        var sql = "DELETE FROM stadium WHERE stadiumId = ?";
        var inserts = [req.params.stadiumId];
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

	