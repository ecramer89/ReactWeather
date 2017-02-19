import React from 'react';



var WeatherMessage = React.createClass({

  render: function(){
    let {city, temp} = this.props;
    let message=(city=='' || temp=='' ? "": "It's "+temp+" degrees in "+city);
    return (
      <div>{message}</div>
    );
  }
});

module.exports = WeatherMessage;
