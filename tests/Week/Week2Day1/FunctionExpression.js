// A function expression in JavaScript defines a function within an expression, rather than as a statement. 
// It can be anonymous or named. Unlike function declarations, function expressions are not hoisted, 
// meaning they must be defined before they are called. 
// They are often used in situations where a function is needed as a value, 
// such as in callbacks or immediately invoked function expressions (IIFEs).

// A JavaScript function can also be defined using an expression.

// A function expression can be stored in a variable: Only Let and Const can be used

// Example
const x = function (a, b) {
    return a * b
};
console.log(x)

// After a function expression has been stored in a variable, the variable can be used as a function:

// Example
const y = function (a, b) {
    return a * b
};
let z = y(4, 3);
console.log(z);