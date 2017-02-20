/* the cause of your silly problem was putting a semicolon after the argument call to document get element by id*/
var React = require('react');
var ReactDOM = require('react-dom'); //we have to explicitly import the modules when we remove them from the script tags for these dependencies in index, which otherwise makes stuff globally available
//"destruturing syntax" applied to the object that is returned by the require command
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');


//in react, we divide responsibiities functionally... not by syntax
//so we require all the css we need for thi component direclty in here
//inseadof usign sep stylesheets.
//prefix with the two loaders firtst
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();


//the files that we load here- such as stylesheets and other assets-- are available to the entire application
//possibly because this is the top level component or also possibly because we defined this file as the entry (or one of them
//in our webpack config)

//when using webpack,we need to load in our assets using the require statemnt
require('style!css!applicationStyles'); //style! and css! are both specialized webpack loaders that we installed to handle these file types

//router has one prop, history

ReactDOM.render(
    <Router history={hashHistory}>
      <Route path='/' component={Main}>
        <IndexRoute component={Weather}/>
        <Route path="about" component={About}/>
        <Route path="examples" component={Examples}/>
      </Route>
    </Router>,
    document.getElementById('app')
);
//the route whose path is / will provide a component that we want to be dislayed for every single page
//defines the ROOT component to show for the root PATH.
//means also, that since every path includes /, the main compone t wll be rendered for every single page

/*
  nesting routes:
     each nested route adopts the address of te rute in which it is nested
     nested routes are available to the top level component route when those children are visited.
     to define a default child component to be rendered when the user visits the route that matches JUST the top level route and nothing else
     define an indexroute component.
     examples:
     visit /about
     <route path="/" component={main}/>
      <route path="about" component={about}/>
   </route>

   both main and about would be available for rendering. main would be rendered because
   main matches the / of /about.
   about would also be available to main in this.props.children, because /about matches the combined path
   / and about.

if we want to define a defualt child component to be rendered when the user visits the route / (or whiceer route matces the top level)
then define it as the component prop of an inderoute component from react router
note-- a component that you provide to the outer component as a nested child wont be displayed by default.
in this example, the weather component isn't shown when the user goes to the index despite being set as the indexroute componentthe top

level comonent (main in this example) needs to explicitly rende rit


*/
