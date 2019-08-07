module.exports = function(){
	var express = require('express');
    var router = express.Router();
	
	var mysql = require('./dbcon.js');
	
	/*
	function getSponsor(res, mysql, context){
        mysql.pool.query("SELECT sponsorId, name, revenue FROM sponsor", function(error, results, fields){
            if(error){
                res.write(JSON.stringify(error));
                res.end();
            }
            context.sponsors = results;
			//console.log(context);
        });
    }
	
	router.get('/', function(req, res){
        var callbackCount = 0;
        var context = {};
        var mysql = req.app.get('mysql');
        getSponsor(res, mysql, context); //Removed ...context, complete) from line
        /*function complete(){
            callbackCount++;
            if(callbackCount >= 1){		// Change to number of callbacks above (getSponsor = 1)
                res.render('update', context);
            }

        }
		console.log(context);
		res.render('update', context);
    });
	*/
	
	// Did this cause above wouldn't work
	router.get('/', function(req, res){
		var context = {};
		mysql.pool.query('SELECT * FROM sponsor', function(err, results, fields){
			if(err){
				next(err);
				return;
			}
			context.sponsor = results;
			res.render('update', context);
		});
	});
	/*
	router.get('/', function(req, res){
		var context = {};
		mysql.pool.query('SELECT * FROM player', function(err, results, fields){
			if(err){
				next(err);
				return;
			}
			context.player = results;
			res.render('update', context);		
		});
	});
	*/
	
	
	return router;
}();