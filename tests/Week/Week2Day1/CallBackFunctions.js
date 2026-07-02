// "I will call back later!"
// A callback is a function passed as an argument to another function
// This technique allows a function to call another function
// A callback function can run after another function has finished



//Class Example

function launch(callLogin){
console.log("Browser should be Launched")
callLogin(); //Here callback happens // callLogin === login()
}

function login(){
    console.log("Here Login will Happen")
}

launch(login);

function addition(a,b,callsub){
    c=a+b
    console.log("The Addition Fucntion Output is " +c);
    callsub(20,10,5)
}

function subtract(a,b,c){
    c=a-b-c
    console.log("The Subtract Fucntion Output is " +c);
}

addition(10,20,subtract)