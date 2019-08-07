var express = require('express');
var mysql = require('./dbcon.js');
var bodyParser = require('body-parser');

var app = express();
var handlebars = require('express-handlebars').create({defaultLayout:'main'});

app.engine('handlebars', handlebars.engine);
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));
app.set('view engine', 'handlebars');
app.set('port', process.argv[2]);
app.set('mysql', mysql);

// Home page
app.get('/home',function(req,res,next){
  res.render('home');
});

// Search page
app.get('/search',function(req,res,next){
  res.render('search');
});

// Tables
app.use('/sponsor_table', require('./sponsor_table.js'));
app.use('/player_table', require('./player_table.js'));
app.use('/team_table', require('./team_table.js'));
app.use('/league_table', require('./league_table.js'));
app.use('/stadium_table', require('./stadium_table.js'));

app.use('/update', require('./update.js'));

app.get('/insert',function(req,res,next){
  res.render('insert');
});

app.get('/delete',function(req,res,next){
  res.render('delete');
});

app.use(function(req,res){
  res.status(404);
  res.render('404');
});

app.use(function(err, req, res, next){
  console.error(err.stack);
  res.status(500);
  res.render('500');
});

app.listen(app.get('port'), function(){
  console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});
