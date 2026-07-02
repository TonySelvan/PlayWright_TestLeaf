//Find a target character in a string

let myname = "Thamarai Selvan"
let target = "a"
let len = myname.length
let counter = 0

for (i = 0; i < len; i++) {
    if (myname.charAt(i) == target) {
        counter++;
        console.log(`The Occurence of the target Charecter ${target} is at the position ${i}`)
        console.log(`The Total Occurence of the target Charecter ${target} is ${counter}`)
    }
}

//***************************  Class Room Assignment *******************/
//***************************  Reverse the String *******************//

let Assignment = "Thamarai Selvan"; // 15 letters but index will start at 0 , so Str[14] will be the last letter
let Aslen = Assignment.length; // 15 letters but index will start at 0 , so Str[14] will be the last letter
let ReversedString = "";
let ReversedString1 = "";
console.log("The Total Charecters in the String " + Assignment + " is " + Aslen)
counter = Aslen - 1;

console.log(Assignment.split(' ').reverse)  // Will not work

// for(i=0;i<Aslen;i++){
//     console.log(Assignment.charAt(counter))
//     counter--;
// }

for (i = Aslen; i <= 0, i--;) {
    ReversedString = ReversedString + Assignment[i];
    //console.log(Assignment[i]);
}
console.log("The Reversed String is " + ReversedString)

for (i = Aslen - 1; i >= 0; i--) {
    ReversedString1 = ReversedString1 + Assignment[i];
    // ReversedString1 +=Assignment[i]; // Same output as above 
    //console.log(Assignment[i]);
}
console.log("The Reversed String1 is " + ReversedString1)

let mysplit = myname.split("a");
console.log(mysplit);
console.log(mysplit.length);
console.log(mysplit[0]);
console.log(mysplit[1]);
console.log(mysplit[2]);  // Output will be undefined
for (i = mysplit.length - 1; i >= 0; i--) {
    console.log(mysplit[i])
}

//***************************  Reverse the String Using Split *******************//

let namesplit = "Learning Reversing using Split Function"

let splitname = namesplit.split(" ")
for (let i = splitname.length - 1; i >= 0; i--) {
    console.log(splitname[i])
}

//***************************  String EdTech Assignments *******************//

let sassign = "Hello World - This is my Automation Practice";
let ssplit = sassign.split(" ");
// for (let i=0;ssplit.length-1;i++){ // This loop will go undefinite
for (let i = 0; i < ssplit.length; i++) {
    console.log(ssplit[i])
    console.log("The " + i + " Letter of the Word is " + ssplit[i] + " and its length is " + ssplit[i].length)
}
console.log(ssplit[ssplit.length-1]);
console.log((ssplit[ssplit.length-1]).length);

let sassignfor = "Hello World - This is my Automation Practice";
let ssplitfor = sassignfor.split(" ");

ssplitfor.forEach(word => {
    console.log(word);
});


//***************************  String EdTech Assignments - ANAGRAM *******************//
// Write a function to check if two strings are anagrams. 
//  Input: isAnagram('listen', 'silent') 
//  Output: true 
//  Input: isAnagram('hello', 'world')  
//  Output: false 
//  Explanation: An anagram is when you mix up the letters of a word to make a new one, using all the letters
