import React from 'react';

/* any components that strictly define a render function and do not use state can be converted into stateless presentation components.
basically, they are demoted from being aclass (which can maintain state and define otherpropertiesor functions)into
a method. the props are an obligatory parameter here; it wont run otherwise. we no longer use this keyword to access propsbecause we are no longer a class.
weare just a dumb function */

var About = (props)=>(
  <div>
    <h3 className="text-center page-title">About</h3>
          <h4>About the site</h4>
            <p>
              This was created strictly to learn to use react.
            </p>
            <div>
            <h4>Links</h4>
              <ul className="dropdown menu" data-dropdown-menu="">
                <li><a href="https://github.com/facebook/react">React</a></li>
                <li><a href="http://openweathermap.org/api">Open Weather Map</a></li>
            </ul>
          </div>
        </div>
);

module.exports=About;
