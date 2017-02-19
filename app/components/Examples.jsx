import React from 'react';
import {Link} from 'react-router';
/* remember, the main rationale for using link to are:
1. can use the special react classes such as active and active styles
2. can easily disambiguate index routes rom regular routes and revent cascading styles by using the index route and index link tag tag*/
var Examples = (props)=>(
  <div>
    <h4 class="text-center">Some example cities to try:</h4>
    <ol>
      <li>
        {/*you can always append specific QUERY PARAMETERS to a url in a route that would make use ofthem!*/}
        <Link to='/?location=vancouver'>Vancouver, BC</Link>
      </li>
      <li>
        <Link to='/?location=austin'>Austin, TX</Link>
      </li>
    </ol>
  </div>
);

module.exports=Examples;
