
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , path = require('path')
  , faye = require('faye');

var port = process.env.PORT || 5000;
var app = express();
var server = app.listen(port);
var bayeux = new faye.NodeAdapter({mount: '/faye', timeout: 45});
bayeux.attach(server);

// all environments
//app.use(express.basicAuth('username', 'password'));
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon(__dirname + '/public/favicon.ico'));
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

//http.createServer(app).listen(app.get(port), function(){
//  console.log('Express server listening on port ' + port);
//});
console.log('Corriendo correctamente en el puerto: ' + port);