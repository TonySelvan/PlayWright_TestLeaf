// "I Promise a Result!"
// "Producing code" is code that can take some time
// "Consuming code" is code that must wait for the result
// A Promise is an Object that links Producing code and Consuming code

let myPromise = new Promise(function(myResolve, myReject) {
    // "Producing Code" (May take some time)
    
      myResolve(); // when successful
      myReject();  // when error
    });
    
    // "Consuming Code" (Must wait for a fulfilled Promise)
    myPromise.then(
      function(value) { /* code if successful */ },
      function(error) { /* code if some error */ }
    );

    //ClassRoom Sample

    function login(userName){


        console.log("Check the UserName ")
          return new Promise((resolve,reject) =>{
        setTimeout(()=>{
        if(userName === "Dilip"){
            resolve("Valid usename")
        }else{
            reject("InValid username")
        }
        },5000)
           })
        }
        function Validatauser(user,login){
        
        
            login(user).then((result) => {
                console.log(result)
            }).catch((err) => {
                console.log(err)
            });
        
        
            console.log("click on button")
        }
        
        
        
        Validatauser("Vidya",login)

        //************************************ Asynchronous Promise ************************************//

        function login(userName){


          console.log("Check the UserName ")
            return new Promise((resolve,reject) =>{
          setTimeout(()=>{
          if(userName === "Dilip"){
              resolve("Valid usename")
          }else{
              reject("InValid username")
          }
          },5000)
             })
          }
          
          
           async function validateUser(user,login){
          const message= await login(user)
          console.log(message)
          }
          
          
          validateUser("Dilip",login)