module.exports = function(){
	var express = require('express');
    var router = express.Router();
	
	function getSponsor(res, mysql, context, id, complete){
        var sql = "SELECT sponsorId, name, revenue FROM sponsor";
        var inserts = [id];
        mysql.pool.query(sql, inserts, function(error, results, fields){
            if(error){
                res.write(JSON.stringify(error));
                res.end();
            }
            context.person = results[0];
            complete();
        });
    }
	
	router.get('/', function(req, res){
        var callbackCount = 0;
        var context = {};
        var mysql = req.app.get('mysql');
        getSponsor(res, mysql, context, complete);
        function complete(){
            callbackCount++;
            if(callbackCount >= 1){		// Change to number of callbacks above (getSponsor = 1)
                res.render('update', context);
            }

        }
    });
	
	return router;
}();