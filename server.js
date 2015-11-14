var express = require('express');
var app = express();
var port = process.env.PORT || 3500;
var middleware = require('./middleware.js');

app.use(middleware.logger);

app.get('/about',middleware.requireAuthentication,function(request,response){
  response.send('About Us!');
})

// To show our app inside node js server
 app.use(express.static(__dirname + '/public'));
//console.log(__dirname);

app.listen(port, function(){
  console.log('Express server started on '+ port +'!');
});



// app.get('/', function(req,res){
//     res.send('Hello Express!');
// });

//app.use(middleware.requireAuthentication);
