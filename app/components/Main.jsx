import React from 'react';
import Navigation from 'Navigation';


var Main = (props)=>(
    <div>
      <Navigation/>
      <div className="row">
        <div className="columns medium-6 large-4 small-centered">
          {props.children}
        </div>
      </div>
    </div>
);
//the call to render all the children of this component in tihis examples//thank
//thanks to the react route nested, will render all of the components whose routes EXACTLY match the route we went to
module.exports=Main; //set the exports object to be the entire component
