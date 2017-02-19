/*
  arrow functions can be used any place you would use an anonymous function
  arrow functions can have multiple lines. if they havemultiple lines, must enclose them in the {}
  however, like with if blocks and such, if the arrow function def has only one line, you can just provide the exression

  in the case where you provide just one line for the arrow function, you do not specify the return statement as the expression is implicitly returned

  THE MOST CRUCIAL DIFFERENCE between the arrow function and the anonymou function is that the anonymous function has
  first class citizen status and ASSUMES THE REFERENCE OF THIS when itis called, thus necessitating the use of
  bind or apply (depending on whether you are passing without calling or calling) to glue the reference of this to the parent function object

  anonymous functions DO NOT take way the reference of this. the this keyword will be automatically bound t theenclosing object
  without needing to use bind (like in c#)


*/



var cats = ['Vesper', 'Chase', 'George', 'Lily', 'Shadow', 'Pickles'];
var numbers = [1, 7, 8, 9, 10, 11];

//example a: reduce using an anonymous function

console.log(numbers.reduce(function(acc, nxt){
  return acc+nxt;
}, 0));

//example b: reduce using an arrow function
console.log(numbers.reduce((acc, nxt)=>acc+nxt));
//example c: reduce using an arrow function; with curly braces for multiple lines
console.log(numbers.reduce((acc, nxt)=>{
  if(nxt%2==0) return acc+nxt;
  return acc;
},0));

//example c: demonstrating that the 'this' keyword is taken over by the function object within the body of the executin ganonymous function
function Owner(name){
  this.name=name;
  examineCats: undefined;
}


var owner = new Owner("Emily");

owner.examineCats=function(){
    cats.forEach(function(cat){
      console.log(this.name+" is considering "+cat);
    });
  }


//example d: demonstrating that the third keyword is NOT TAKEN over by the function when the function is an anonymous ARROW function
var ownerB=new Owner("Lucas");
ownerB.examineCats= function(){
    cats.forEach((cat)=>console.log(this.name+" is considering "+cat));
  }


owner.examineCats();
ownerB.examineCats();

//a workaround for owner, if the function were to be used
var check = function(cat){
  console.log(this.name+" is considering "+cat);
};

owner.examineCats=cats.forEach.bind(cats,check.bind(owner));
owner.examineCats();


//and the official challenge...
function add(a, b){
  return a+b;
}

//as an anonymous function
var add = function(a, b){
  return a+b;
}

//as an arrow function
var addArrow = (a, b) => a+b;

//with brackets
var addArrowBraced = (a, b) =>{return a+b};


console.log(add(2, 3));
console.log(add(4, 3));
console.log(add(10,1));
