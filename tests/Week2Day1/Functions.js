// A JavaScript function is a block of code designed to perform a particular task.

// A JavaScript function is executed when "something" invokes it (calls it).

// A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses ().

// Function names can contain letters, digits, underscores, and dollar signs (same rules as variables).

// The parentheses may include parameter names separated by commas:
// (parameter1, parameter2, ...)

// The code to be executed, by the function, is placed inside curly brackets: {}

// function name(parameter1, parameter2, parameter3) {
//   // code to be executed
// }


// Async - Ex Amazon is an Asyn application where every object loads randomly - Not in order


function addition(x,y){
    console.log(x+y);
}
addition(5,5);

function addition(x,y){
    z=x+y;
    console.log(x+y);
    return z;
}
addition(10,10);
console.log(z);

// JavaScript functions are executed in the sequence they are called. Not in the sequence they are defined.

// This example will end up displaying "Goodbye":

function myFirst() {
    console.log("Hello");
  }
  
  function mySecond() {
    console.log("Goodbye");
  }
  
  myFirst();
  mySecond();

//   This example will end up displaying "Hello":

// Example

mySecond();
myFirst();