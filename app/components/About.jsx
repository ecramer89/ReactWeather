import React from 'react';

/* any components that strictly define a render function and do not use state can be converted into stateless presentation components.
basically, they are demoted from being aclass (which can maintain state and define otherpropertiesor functions)into
a method. the props are an obligatory parameter here; it wont run otherwise. we no longer use this keyword to access propsbecause we are no longer a class.
weare just a dumb function */

var About = (props)=>(<h3>About</h3>);

module.exports=About;
