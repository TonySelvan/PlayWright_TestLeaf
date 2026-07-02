
//************************************ MATHEMATIC / Arithmatic Operators ************************************//

console.log(10+20)
console.log(10-20)
console.log(10*20)
console.log(20/10) //- Quotient
console.log(20%10) //- Remainder
console.log(5>7)
console.log(5<7)
console.log(5==7)
console.log(5!=7)
console.log((10>7)&&(5>7))
console.log((10>7)||(5>7))

//************************************ Conditional Stmts ************************************//

let num=0
if(num>0){
    console.log("The Given No " +num+ " is Positive")
}
else if(num==0){
    console.log("The Given No " +num+ " is Neutral")
}
else{
    console.log("The Given No " +num+ " is Negative")
}


switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
       day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";  
  }
  console.log(day) 