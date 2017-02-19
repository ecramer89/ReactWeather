var axios = require('axios'); //a useful npm module for making api calls

const OPEN_WEATHER_MAP_URL="http://api.openweathermap.org/data/2.5/weather?appid=ad972a421a6a99a2d887b70d3a091be2&units=imperial";


module.exports.getTemp=function getTemp(location){
  let encodedLocation=encodeURI(location); //encode special characters such as spaces, %, $, etc., into their URI code equivalents (e.g., %20)
  let url = `${OPEN_WEATHER_MAP_URL}&q=${location}`; //cool string interpolation in es6. use the back quotws

//axios get returns a promise, but we return the result of invoking the "then" method on the promise that axios returns/
//the result of invoking then on a promise is also a promise.
//the returned promise will behave in the same way as the one in then; it will supply as the result parameter for the first callback//whatevr
//we return, and it will supply the err parameter as the error for whatevr we retur...

//the usefulness of chaining promises like this is that we can define "middleware" to process interediate results.
//for example, we need to handle the api call that returns a promise and what we can do is (if it's a success) then have the success callback//
//(or resolve) callback return the parsed out temperature (makes sense since this class' responsibility is managing the open maps api)
//and we can run an aditional check on the result callback to see if it's REALLY a true result

  return axios.get(url). //use axios module to actually make the request. axios returns a promise. we want to return the result of the promise. also, resolving a promise returns a promise (so promises can be chained)
    then(
      function(result){
        debugger;
        if(result.ord!=200){
          return result.data.main.temp;
        } else throw new Error(err.message);
      },
      function(err){
        throw new Error(err.message);
      }
    );
}
