//An array is a special variable, which can hold more than one value:

// In JS Arrays it can contain any datatype and values in a single array. This is contarty to Java

//Java array size can't be modified, but in JS dynamically we can change

//Array out of bound exception will not throw in JS. It will come as 'Undefined'

// If we add out of box limit, inbetween values will be empty


let browsernames = ["chrome",'edge',123] // Both '' or "" can be used for String. For No's direct. 
console.log(typeof(browsernames)); //This is come as Object as its combination of all data types
console.log(browsernames[1]);
console.log(typeof(browsernames[1]));


let browsernames1 = ["chrome",'edge',123]
browsernames1[5] = "Safari";
console.log(browsernames1);
console.log(browsernames1.length);
browsernames1[5] = "Webkit"; //This will reassign the value 
console.log(browsernames1);
console.log(browsernames1.length);

//***************************  Array Methods  *******************//

// Unshift - Inserts new elements at the start of an array, and returns the new length of the array

let browserunshift = ["Chrome","Edge","Firefox"]
browserunshift.unshift("Webkit")
console.log(browserunshift);

// Push - Appends new elements to the end of an array, and returns the new length of the array.

let browserpush = ["Chrome","Edge","Firefox"]
browserpush.push("Webkit")
console.log(browserpush);

// Shift - Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modif

let browsershift = ["Chrome","Edge","Firefox"]
browsershift.shift();
console.log(browsershift);

// Pop - Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.

let browserpop = ["Chrome","Edge","Firefox"]
browserpop.pop();
console.log(browserpop);

// Adding Arrays - Achieved using Spread Syntaax concept - ...

let browser1 = ["Chrome","Edge","Firefox"]
let browser2 = ["Safari","Opera",...browser1]
console.log(browser2);

// Nested Arrays - An Array insided another array

let browser3 = ["Chrome","Edge","Firefox",["Safari","Opera"]]
console.log(browser3);
console.log(browser3.length);
console.log(browser3[3]);

// Slicing in  Arrays
// slice(): This method extracts a section of an array and returns a new array containing the extracted elements. 
// The original array remains unchanged. slice() takes two optional arguments: start and end, representing the starting and ending indices of the selection. 
// If end is omitted, it extracts to the end of the array.

const arr = [1, 2, 3, 4, 5];
const newArr = arr.slice(1, 4); // Returns [2, 3, 4]
console.log(arr); // Output: [1, 2, 3, 4, 5] (original array unchanged)

// Splicing  in  Arrays
// splice(): This method modifies the original array by removing or replacing existing elements and/or adding new elements. 
// It returns an array containing the removed elements. splice() takes at least one argument, the starting index, and optionally a delete count and new elements to add. 

const arr1 = [1, 2, 3, 4, 5];
const removedElements = arr1.splice(1, 3, 6, 7); // Returns [2, 3, 4]
console.log(arr1); // Output: [1, 6, 7, 5] (original array modified)
console.log(removedElements); // Output: [2, 3, 4]