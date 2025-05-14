//String is a colelction of characters
//String is Case-Sensitive
//String is a sequence of characters
//String is a primitive data type in JS
//String is immutable in JS
//String is a object in JS

//Can be created using single quotes, double quotes or backticks

let str1 = 'Hello World'; //single quotes
let str2 = "Hello World"; //double quotes
let str3 = `Hello World`; //backticks
let str4 = new String('Hello World'); //object

//length of string in JS
let str5 = 'Hello World';
console.log(str5.length); //11
console.log(str5[0]); //H
console.log(str5[1]); //e

//Various Index of string methods in JS
//Index startsf from 0
//indexOf() method returns the index of first occurrence of a specified text in a string
//If the text is not found, it returns -1
//The indexOf() method is case sensitive
//The indexOf() method starts searching from the left side of the string
//The indexOf() method can take a second parameter, which is the position to start the search from
//The indexOf() method returns the index of the first occurrence of the specified text in the string


let str6 = 'Hello World';
console.log(str6.indexOf('o')); //4 // First Occurence
console.log(str6.lastIndexOf('o')); //7
console.log(str6.indexOf('o', 5)); //7
console.log(str6.lastIndexOf('o', 5)); //4
console.log(str6.charAt(4)); // Not from Index , it ll be from actual positions
console.log(str6.indexOf("l",4));
console.log(str6.lastIndexOf("l"));

 //************************************ Sub String ************************************//

 //It prints based on index value.
 
 let myname ="Thamarai Selvan"
 console.log(myname.substring(2,8)) //if end index not given , it will print till the last index
 console.log(myname.substring(2,30)) // Even if index exceeds it will print last and not throw any error

  //************************************ Slice ************************************//

//   Same as Sub-String, but it will accept -ve index values

let slicename="Thamarai Selvan"
console.log(slicename.slice(2,8)) //(n,n-1)
console.log(slicename.slice(-8,-2)) // (n-1,n)
console.log(slicename.slice(-8))

  //************************************ Replace************************************//
  //It reaplaces old value with name

  let lname="Thamarai Selvan"
  console.log(lname.replace("Thamarai","Tony")) //It will replace the 1st occurence
  console.log(lname.replaceAll("a","b")) //Replaces all a with b
  console.log(lname.replaceAll(/[a-z]/g,"A")) // Regular Expression // Case sensitive so will not replace T & S
  console.log(lname.replaceAll(/[a-z A-Z]/g,"A")) // This will replace all
  console.log(lname.replaceAll(/[^a-z A-Z]/g,"A"))

 //************************************ Includes ************************************//
 //Similar to Containts menthods in Java - Returns Boolean

 let inname = "Test Leaf"
 console.log(inname.includes("Le"))

  //************************************ Concatenate ************************************//
  //Used to append the strings

  let area = "Kolathur"
  let newarea = area.concat("Perumbakkam").concat("C-Dot HospitalRoad").concat("Chennai 600100")
  console.log(newarea)

  //************************************ Repeat ************************************//
  //Used to repeat the same string n number of times

  let repname = "Thamarai Selvan"
  console.log(repname.repeat(2))