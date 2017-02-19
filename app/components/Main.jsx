import React from 'react';
import Navigation from 'Navigation';


var Main = (props)=>(
    <div>
      <Navigation/>
      <h2>Main</h2>
      {props.children}
    </div>
);
//the call to render all the children of this component in tihis examples//thank
//thanks to the react route nested, will render all of the components whose routes EXACTLY match the route we went to
module.exports=Main; //set the exports object to be the entire component
