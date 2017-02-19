/*
  Compare and contrast the classic "calllback" pattern to the new ES6 Promise pattern
  Callbacks and promises are used for asychronous function calls

 asynchronous functions (or 'non blocking'): they do not hold up the rest of the code while
 they wait for a response. instead they take a function (a "callback" or now a promise)to execute when
 the call they are waiting on is finished

 the main difference between callbacks and promises is:
 there is one callback, that handles both the fail and the success case and
 there are two promise callbacks, one for the success case (resolve) and one for the failure case (reject)
 this has the consequence that the code is a bit more robust to errors
 the handler of the promise (unlike the handler of te callback) doesn't need to write an if statement to differentiate between err and success case
 the handler of the promise is designed so that it will only execute the branch that handles the first case that matches
 so, you can't accidentially fire both the succeed and fail case, as is possible when writing a functionthat accepts a callback
 (could very easily accidentially call the callback twice)

*/

//to define a function that returns a promise.... just invoke the promise constructor!
function addPromise(a, b){
  return new Promise(function(resolve, reject){
    setTimeout(function(){
    if(isNaN(a) || isNaN(b)){
      reject("a and b must both be numbers");
    } else resolve(a+b);
    }, 1000); //simulate a true promise- normally the resolve and reject methods wouldn't be executed until after some operation had finished!
  });
}


//when we call a promise, we get back a promise.
//the promise exposes a 'then' method by which we can define
//anonymous handlers whose signtures match either the resolve or the reject functions that the promise eventualy returns
//the FIRST FUNCTION WHOSE SIGNTAURE MATCHES the result of the promise will be called, but NEVER both
//inthis way, it is actually not dissimilar from the "pattern matching" of elixir
addPromise(10, 20)
.then(
  function(sum){
      console.log("The sum is: "+sum)
}, function(err){
      console.log(err)
});

addPromise("a", 20).
then(function(sum){
  console.log(sum);
}, function(err){
   console.log(err);
});


//contrast this to the old way, using callbacks
function addCallback(a, b, callback){
    setTimeout(function(){
      if(isNaN(a) || isNaN(b)){
        callback("error, a and b must be numbers", undefined);
      }
      else callback(undefined, a+b);
    }, 400);
}


addCallback(10,3, function(err, result){

  if(err){
    console.log(err);
  } else {
    console.log(result);
  }
});

/*btw-- also not ethe cool thing. because you made the delay for the callback functin lesser, itactually rturned its result before the ther, despite the fact that thepromse version was called first */
