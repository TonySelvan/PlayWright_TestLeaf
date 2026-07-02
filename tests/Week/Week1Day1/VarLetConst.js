//************************************ VAR ************************************//

//VAR can be Re-Declared and Re-Assigned

var myname="Thamarai"
var myname ="Selvan"
console.log(myname)

//************************************ LET ************************************//

//LET can be Re-assigned but cannot be Re-Declared
let dosa=1
//let dosa=2  ->>> This will throw error as Re-Declaring
dosa =2
console.log(dosa)

let dosa1="Tony"
dosa1=3
// We can change the data type as well i.e from string to numbers
console.log(dosa1)



//************************************  CONST ************************************//

//CONST is FINAL. Cannot Re-Declare or Re-Assign
const pi=3.14
// pi=3.00 ->> This will throw error as Re-Declaring a Final Value
console.log(pi)

//if not declared, by default VAR will declared

TestName = "Selvan"
console.log(TestName)

//************************************  Var Vs Let ************************************//
{
    //Blocked level Scoping 
}