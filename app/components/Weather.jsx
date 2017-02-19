import React from 'react';
var WeatherForm = require('WeatherForm');
import WeatherMessage from 'WeatherMessage';
import OpenWeatherMap from 'OpenWeatherMap';


var Weather = React.createClass({
  getInitialState: function(){
    return {
      city: "",
      temp: ""
    }
  },

  handleNewCity: function(city){
   //note: the referent of this always refers to whichever object executes th function
   //the success callback for a promise would be executed by the promise object, not this object
   //(no atomatic this binding in js)
   //thus we use bind to create a new instance of handlenewtemp wherein this referent is bound to this component
      OpenWeatherMap.getTemp(city).
      then(
        //note: you can also bind additional argument values to a functio with bind.
        //these arguments will be the first ONES in the function's list.
        //any other values that the caller passes in will come AFTERWARDS
        this.handleNewTemp.bind(this, city),
        function(err){
            alert(err.message);
        });
      //why must NEVER CALL FROM RENDER, without being contingent on an inout event or something
  },

   handleNewTemp: function(city, temp){
      this.setState({city, temp}); //will trigger an automatic call to render.
    },

  render: function(){
    return (
      <div>
        <h3>Get Weather</h3>
        <WeatherForm onNewCity={this.handleNewCity}/>
        <WeatherMessage city={this.state.city} temp={this.state.temp}/>
      </div>
      );
  }
});


module.exports=Weather;
