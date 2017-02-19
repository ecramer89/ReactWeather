import React from 'react';

const PLACE_HOLDER = "Enter your city";

var WeatherForm = React.createClass({
  //need to place variable defs within functions... would have to define the class different i think otherwise
  handleSubmit: function(event){
    event.preventDefault();
    let city=this.refs.city.value;

    if(typeof city === 'string' && city.length > 0 && city!== PLACE_HOLDER){
      this.refs.city.value=PLACE_HOLDER;
      this.props.onNewCity(city);
    }
  },
  //prefer to define as custom classes... makes it easier to have local variables/constands
  render: function(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <textarea ref="city" defaultValue={PLACE_HOLDER}/>
          <button>Check weather</button>
       </form>
      </div>
    );
  }
});

module.exports=WeatherForm;
