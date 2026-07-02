//************************************ Conditional Stmts ************************************//

function numberType(num) {
    if (num > 0) {
        console.log("The Given No " + num + " is Positive")
    }
    else if (num == 0) {
        console.log("The Given No " + num + " is Neutral")
    }
    else if (num<0) {
        console.log("The Given No " + num + " is Negative")
    }
}

numberType(10)
numberType(-5)
numberType(0)