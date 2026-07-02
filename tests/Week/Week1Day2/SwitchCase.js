// The switch statement is used to perform different actions based on different conditions.
// This is alternative for if elseif as it only executed based on conditions and saves time. 

// Example from W3

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
  console.log("Today it is : "+day) 

  //Classroom Exercise

let mark = 100
switch (mark){
    case 100:
        console.log("The Student has Passed")
        break;
    case (mark<80):
        console.log("The Student has Scored below")
        break;
    case (mark<50):
        console.log("The Student has Failed")
        break;
    }