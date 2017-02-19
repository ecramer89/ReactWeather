import React from 'react';

//nb: destructuring props is now so ommon, in es6 you can destructure diclty in the arguments
var WeatherMessage = ({city, temp})=>{
    let message=(city=='' || temp=='' ? "": "It's "+temp+" degrees in "+city);
    return (
      <div>{message}</div>
    );
  };

module.exports = WeatherMessage;
