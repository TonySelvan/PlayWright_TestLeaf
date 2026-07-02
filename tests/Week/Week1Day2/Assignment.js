const browserversion = "chrome"

function getbrowserversion(){

    if(browserversion==="chrome"){  //== in JS in loose equality. === means strict equality which compares data type and also case sensitive
        let browserversion = 'edge';
        console.log(browserversion);
    }
    console.log(browserversion);
}
getbrowserversion();
console.log(browserversion);

function addition(x,y){
    console.log(x+y);
}
addition(5,5);

function addition(x,y){
    z=x+y;
    console.log(x+y);
    return z;
}
addition(10,10);
console.log(z);