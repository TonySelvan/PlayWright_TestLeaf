//It is used to iterate over a range of values or repeat a blcok of code until the iteration ends. 
// Syn - for(Initialization;condition;update){//Block of Code//}
// i++ - Post increment  ---->>> i+1
// ++i - Pre increment   ---->>> 1+i
// i-- - Post decrement  ---->>> i-1
// --i - Pre decrement   ---->>> i-1
// for loop is used when the number of iterations is known in advance.
// while loop is used when the number of iterations is not known in advance.
// do while loop is used when the block of code needs to be executed at least once before the condition is checked.

// only use let

//Post & Pre Increment Differences

let a=3;
console.log(a++)  //3
console.log(a) //4

let b=3;
console.log(++b) //4

for(let i=0;i<=5;i++){
    console.log("The Value of i is = " +i)
}

for(let i=0;i<=5;++i){
    console.log("The Value of i is = " +i)
}

// To print in the reverse order

for(let j=10;j>=1;j--){
    console.log("Number in Reverse Order is : " +j)
}

let price = 5
for(let i=0;i<=price;i++){
    console.log("Number # " +i)
}

//Print Even or Odd

let value=20
for(i=0;i<=value;i++){
    if(i%2==0){
        console.log("The Number " + i + " is Even")
    }
    else{
        console.log("The Number " + i + " is Odd")
    }
}

//***************************  For - Each *******************//

let sassignfor = "Hello World - This is my Automation Practice";
let ssplitfor = sassignfor.split(" ");

ssplitfor.forEach(word => {
    console.log(word);
});