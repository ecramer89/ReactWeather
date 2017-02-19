var express = require('express');

//create application
var app=express();
//if no port is availale, use 3000
//i think the process.env will actually -- be using heroku.
//yeah, heroku is the process so when heroku is running, it will give us whatevr port its using and otherwise, if we're running locally, not n heroku, we just use 3000
const PORT = process.env.PORT || 3000; //need to use the node js variable rocess.env in order to get the available otherpropertiesor//for deploy to herok
//tell it which folder we want to serve.
//app.use lets you add functionality to your express application.

//the open map api cannot handle http requests.
//whichmeans that whenever we intercept a request we must transform it
//we can intercept requests by attachung express middleware
//the middleware functions are invoked in order
app.use(function(req, res, next){//maybe check what would happen if your app intercepted an https request- the weather app should crash but the error messsage would be useful to see
  if(req.headers['x-forwarded-proto'] === 'http'){ //if the request is http
    next(); //process the request normally
  }else {
    //else, redirect to the http version of the url
    res.redirect('https://'+req.hostname+req.url);

  }
});


app.use(express.static('public')); /*express.static specifies a folder name that we want to expose to the web server
*/
//callback executes when the server is up
app.listen(PORT, function(){
  console.log('express server is up on port '+PORT);
});
