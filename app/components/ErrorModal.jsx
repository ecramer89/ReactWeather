var React = require('react');


var ErrorModal = React.createClass({

//this method is called just after a component is loaded to the DOM.
//here, you can make changes to the DOM elements themselves.
//notice that it doesn't even work if you change the function to component will mount.
//this is because component will mount is invoked before the component is actually inserted into the dom
//as such, there ISN'T ANYTHING TO SELECT and so NOTHING actually happens.
//if you want to select elements and do stuff to them, then write that code (typically i guess this will involve jquery because it makes it easier for usto get them?)
//here.

/*its worth emphasizing that we only get the MODAL in virtue of the css framework we've applied. remembe this because modals are a pretty common thing... so it's worth considering which one we will use*/
componentDidMount: function(){
  //create  anew instance f OUR modal class
  //note: this is an example of jQuery selector syntax:
  //$(elementselector)  in this case, the selector is #errorModal because # stands for id and errorModal is the id value.
  //note, after retrieving a dom element with the jquery slector you can do stuff to it using thne jquery actions
  //this lie basically converts our component into a special "modal" element
 var modal = new Foundation.Reveal($('#errorModal')); //create a new instance f the foundation reveal class
 //the $ is a jQuery selector operator. it selectes an element THAT IS ALREADY IN THE DOM and it passes it in as an arguments
 //the element we are selecting is the error modal component which is"rendered" (and inthedom) but doesn't appear by defaultValue
//you cant just use document getelement by id... have to use jQuery
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

/*important note about proptypes. although you can specify custom validations and such failing the validayions just throws an error
that appears in the console and the checks dont even happen in production. so you couldn't therefore offload actual validations onto the proptypes object.
ike you couldnt put the "if the length isn't enoguh then..." dont appear because the components will try and appear even if the prop types vlidaions dont pass */
propTypes: {
  message: React.PropTypes.string.isRequired //prop types is just an object, not a function
},

getDefaultProps: function(){
  return {
    title: "Error!",
    message: "Something bad happened."
  }
},
/*the two attributes data-reveal and data-close, which dont' have a value by default, must be given an empty string value to work. note they dont have these in the foundation docs so be careful*/
/* by default modals are hidden. thus, invoking the render method of a modal should not result in it appearing to the screen!!!*/
  render: function(){
    return (

      <div id="errorModal" className="reveal tiny text-center" data-reveal="">
        <h4>{this.props.title}</h4>
        <p>{this.props.message}</p>
        <p><button className="button hollow" data-close="">Okay</button></p>
      </div>
    );
  }
});
/* foundation only specifies classes not new elements. so you need to apply the foundation button class.*/
module.exports=ErrorModal;
