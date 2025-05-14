function batch(EmpName,EmpAge){
    console.log("Name of the Employee is " + EmpName + " And thier Age is " + EmpAge)
    console.log(`Name of the Employee is ${EmpName} And thier Age is ${EmpAge}`) // Template Return
}

batch("Thamarai",35); // String needs to be passed inside quotes and number can be defined directly.

//Function with Return Functions 

function addition(x,y){
    z=x+y;
    return z; // Or can be return x+y
}
addition(10,10);
console.log(z)
console.log(addition(10,20));