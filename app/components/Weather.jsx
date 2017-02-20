import React from 'react';
var WeatherForm = require('WeatherForm');
import WeatherMessage from 'WeatherMessage';
import OpenWeatherMap from 'OpenWeatherMap';
import ErrorModal from 'ErrorModal';

var Weather = React.createClass({
  getInitialState: function(){
    //you don't -need- to define all of the state variables from the outset.
    //however, matt said it actually slows down the application is we don't so.. i will, but initialize tem withudnefined
    return {
      isLoading: false,
      errorMessage: undefined,
      temp: undefined,
      city: undefined
    }
  },

  handleNewCity: function(city){

  //  debugger; //analogous to setting a breakpoint. allows us to inspect the current values of state and other global variables in the developmen tool
    this.setState({isLoading: true});
   //note: the referent of this always refers to whichever object executes th function
   //the success callback for a promise would be executed by the promise object, not this object
   //(no atomatic this binding in js)
   //thus we use bind to create a new instance of handlenewtemp wherein this referent is bound to this componen
      debugger;
      OpenWeatherMap.getTemp(city).
      then(
        //note: you can also bind additional argument values to a functio with bind.
        //these arguments will be the first ONES in the function's list.
        //any other values that the caller passes in will come AFTERWARDS
        this.handleNewTemp.bind(this, city),
        this.handleError);
      //why must NEVER CALL FROM RENDER, without being contingent on an inout event or something
  },

   handleNewTemp: function(city, temp){
      this.setState({city, temp, isLoading: false}); //will trigger an automatic call to render.
    },

  handleError: function(err){
    this.setState(
      { isLoading: false,
        errorMessage: err.message
      });
  },

  render: function(){
    let {city, temp, isLoading, errorMessage} = this.state;

    function renderError(){
      if(errorMessage){
        return <ErrorModal title="No data found for that city." message={errorMessage}/>;
      }
    }


    //we can define a closure (function within a function) to encapsulate a piece of logic
    //that is local to the function (avoid cluttering up the code with one off helper methods, but give them
  //a name... better than comments!!!) clsures over comments. but beware, this binding is lost within closures
  //and var (but not let) cannot be ccessed anymore
    function renderMessage(){

      if(isLoading){
        return <h1 className="text-center">Fetching temperature data...</h1>;
      } else if(city && temp){
          return <WeatherMessage city={city} temp={temp}/>;
      }
    }

    return (
      <div>
        <h2 className="text-center">Get Weather</h2>
        <WeatherForm onNewCity={this.handleNewCity}/>
        {renderMessage()}
        {renderError()}
      </div>
      );
  }
});


module.exports=Weather;
