var express = require('express');
var app = express();
var port = 3000;

var middleware = {
  requireAuthentication: function(req,res,next){
    console.log('private route hit!')
    next();
  },
  logger: function(req,res,next){
    console.log('Request: '+ new Date().toString() + '  '+ req.method + ' ' +req.originalUrl);
    next();
  }
}

app.use(middleware.logger);

// app.get('/', function(req,res){
//     res.send('Hello Express!');
// });

//app.use(middleware.requireAuthentication);

app.get('/about',middleware.requireAuthentication,function(request,response){
  response.send('About Us');
})

// To show our app inside node js server
 app.use(express.static(__dirname + '/public'));
//console.log(__dirname);

app.listen(port, function(){
  console.log('Express server started on '+ port +'!');
});
