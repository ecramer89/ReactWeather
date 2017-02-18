var express = require('express');

//create application
var app=express();

//tell it which folder we want to serve.
//app.use lets you add functionality to your express application.
app.use(express.static('public')); /*express.static specifies a folder name that we want to expose to the web server
*/
//callback executes when the server is up
app.listen(3000, function(){
  console.log('express server is up on port 3000');
});
