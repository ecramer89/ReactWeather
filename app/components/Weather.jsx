import React from 'react';
var WeatherForm = require('WeatherForm');
import WeatherMessage from 'WeatherMessage';
import OpenWeatherMap from 'OpenWeatherMap';


var Weather = React.createClass({
  getInitialState: function(){
    //you don't -need- to define all of the state variables from the outset.
    //however, matt said it actually slows down the application is we don't so.. i will, but initialize tem withudnefined
    return {
      isLoading: false,
      temp: undefined,
      city: undefined
    }
  },

  handleNewCity: function(city){

    this.setState({isLoading: true});
   //note: the referent of this always refers to whichever object executes th function
   //the success callback for a promise would be executed by the promise object, not this object
   //(no atomatic this binding in js)
   //thus we use bind to create a new instance of handlenewtemp wherein this referent is bound to this componen

      OpenWeatherMap.getTemp(city).
      then(
        //note: you can also bind additional argument values to a functio with bind.
        //these arguments will be the first ONES in the function's list.
        //any other values that the caller passes in will come AFTERWARDS
        this.handleNewTemp.bind(this, city),
        function(err){
            alert(err.message);
            this.setState({isLoading: false});
        });
      //why must NEVER CALL FROM RENDER, without being contingent on an inout event or something
  },

   handleNewTemp: function(city, temp){
      this.setState({city, temp, isLoading: false}); //will trigger an automatic call to render.
    },

  render: function(){
    let {city, temp, isLoading} = this.state;

    //we can define a closure (function within a function) to encapsulate a piece of logic
    //that is local to the function (avoid cluttering up the code with one off helper methods, but give them
  //a name... better than comments!!!) clsures over comments. but beware, this binding is lost within closures
  //and var (but not let) cannot be ccessed anymore
    function renderMessage(){
      if(isLoading){
        return <h1>Fetching temperature data...</h1>;
      } else if(city && temp){
          return <WeatherMessage city={city} temp={temp}/>;
      }
    }

    return (
      <div>
        <h3>Get Weather</h3>
        <WeatherForm onNewCity={this.handleNewCity}/>
        {renderMessage()}
      </div>
      );
  }
});


module.exports=Weather;
