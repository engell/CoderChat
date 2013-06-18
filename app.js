
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path')
  , faye = require('faye');

var app = express();
var port = 3000;
var server = app.listen(port);
var bayeux = new faye.NodeAdapter({mount: '/faye', timeout: 45});
bayeux.attach(server);

var yaml_config = require('node-yaml-config');
var config = yaml_config.load(__dirname + '/views/config.yml');
//console.log(config.password); 

// all environments
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);

http.createServer(app).listen(app.get(port), function(){
  console.log('Express server listening on port ' + port);
});
