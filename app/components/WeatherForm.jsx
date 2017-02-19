import React from 'react';

//note: i think you could obviously take the function out... but i think the idea is why?
//it makes more sense to package all the fnctionality together into one module; so if the module//depends on
//additional functionalities then just define it this way.
//note: weatherform cant be turned into a presentation function because it needs to define an additional propety, a function.
//anything that must define an additional function in this fashion- has to be a proper class.
var WeatherForm = React.createClass({
  //need to place variable defs within functions... would have to define the class different i think otherwise
  PLACE_HOLDER: "Enter your city", //of course you can define other variables within aclass... justas propeties

  handleSubmit: function(event){
    event.preventDefault();
    let city=this.refs.city.value;
     //have to use this to access
    if(typeof city === 'string' && city.length > 0 && city!== this.PLACE_HOLDER){
      this.refs.city.value=this.PLACE_HOLDER;
      this.props.onNewCity(city);
    }
  },
  //prefer to define as custom classes... makes it easier to have local variables/constands
  render: function(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref="city" placeholder={this.PLACE_HOLDER}/>
          <input type="submit" className="button" value="Check Weather"/>
       </form>
      </div>
    );
  }
});

module.exports=WeatherForm;
