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

//************************************ Odd Even ************************************//

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

//************************************ Odd Even Function ************************************//

function isOddEven(fvalue){
    if(fvalue%2==0){
        console.log("The Number " + fvalue + " is Even")
    }
    else{
        console.log("The Number " + fvalue + " is Odd")
    }
}
isOddEven(108);