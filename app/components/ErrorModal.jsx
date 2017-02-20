var React = require('react');


var ErrorModal = React.createClass({

//this method is called just after a component is loaded to the DOM.
//here, you can make changes to the DOM elements themselves
componentDidMount: function(){
  //create  anew instance f OUR modal class
  //this lie basically converts our component into a special "modal" element
 var modal = new Foundation.Reveal($('#errorModal')); //create a new instance f the foundation reveal class
 //the $ is a jQuery selector operator. it selectes an element THAT IS ALREADY IN THE DOM and it passes it in as an arguments
 //the element we are selecting is the error modal component which is"rendered" (and inthedom) but doesn't appear by defaultValue

 //we actually open the modal by calling
 modal.open();
 //so, note the lifeycle:
 /*
 weather component: commands the virtual dom to render the modal by returning it as the argument to the react dom render function
 component will mount- called befrore this error modal is inserted into the dom
 component is inserted into the dom because it was retueed as part of its parent render method
 component did mount is called; we know for sure that the modal has been put into the dom and we can now open it to activate it


 */

},

/* by default modals are hidden. thus, invoking the render method of a modal should not result in it appearing to the screen!!!*/
  render: function(){
    return (
      <div id="errorModal" className="reveal text-center" data-reveal="">
        <h1>Error!</h1>
        <p>Something isn't right...</p>
        <p><button className="button hollow" data-close="">Okay</button></p>
      </div>
    );
  }
});

module.exports=ErrorModal;
