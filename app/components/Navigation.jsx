import React from 'react';
//destructuring is useful when you have a big object (e.g., the react-router module exports object)
//and you just want to save a select few of its properties ina  file. destructuring alows us to grab only those properties that we want
var {Link, IndexLink} = require('react-router'); //require('react-router') resolves to an object

//the Link component from react rouer enables us to create links to other pages in our app that we defined using react-router route component

/* notice the use of an object in jsx inction syntax-- its just double {{}}. also notice that we pass in styles via ajobject*/

/*since class is a reserved jsx keyword, need to call the css classes className. the webpack compiler will convert it to class for rendering to the browser*/
var Navigation = React.createClass({

  handleSearch: function(event){
    event.preventDefault();
    alert("not wired up yet!");
  },

  render: function(){
      return (
        <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Weather App</li>
            <li><IndexLink to ='/' activeClass="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink></li>
            <li><Link to='/about' activeClass="active" activeStyle={{fontWeight: 'bold'}}>About</Link></li>
            <li><Link to='/examples' activeClass="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link></li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit={this.handleSearch}>
            <ul className="menu">
                {/*be sure to specify 'placeholder' not 'value' or else it will prevent you from entering data into the search bar */}
              <li><input type="search" placeholder="Lookup the weather in a city"/></li>
              <li><input type="submit" className="button" value="Get Weather"/></li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
});
//link versus a href: link allows you to add some custom styles and classes that change the appearance of the links depending on which page the user is on
//via the special activeclass and activestyle PROPS that are not otherwise aailable as html tag attributes.
/*
 indexlink versus regularlink:
 although the routes appear smart enough to do an exact match on the user's path before deciding which component to render,
 the active styles dont. react figures out which links to apply the active stles to by checking the router routes. any LINK whose route matches any of the url we followed will have the active style applied,
 even if the whole link doesnt match. so for instance, the indexroute will typically always mach.
 the weather route which is / would match /about also for instance
 so to prevent this, specify that the indexroute is an indexlink. then it understands that it shouldn't apply the style if the url user chose matches justg the / but not the rest of theurl
*/

module.exports=Navigation;
/*<IndexLink to ='/' activeClass="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
<Link to='/about' activeClass="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
<Link to='/examples' activeClass="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>*/
