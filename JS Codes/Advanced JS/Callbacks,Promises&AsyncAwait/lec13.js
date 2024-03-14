//---------------------------------1. Synchronous---------------------------------

// Synchronous means the code runs in a particular sequence of instructions given in the program.
//Each instruction waits for the previous instruction to complete its execution.

document.write("Hi"); // First 
 
document.write("Mayukh");// Second 
 
document.write("How are you"); // Third


//------------------------------2. Asynchronous---------------------------------
// Due to synchronous programming, sometimes imp instructions get
// blocked due to some previous instructions, which causes a delay in the UI.
// Asynchronous code execution allows to execute next instructions
// immediately and doesn't block the flow

document.write("Hi");
 
setTimeout(() => {
    document.write("Let us see what happens");
}, 2000);  // 2 sec ke baad print hoga
 
document.write("End");

//------------------------------3. Callbacks---------------------------
// A callback is a function passed as an argument to another function.


function sum (a,b) {
    console.log (a+b);
}
function calc (a,b,callback){
    sum (callback,a,b);
}
calc(5,7,sum);   // Output: 12




//---------------------------4. Callback Hell------------------------------
// Callback Hell : Nested callbacks stacked below one another forming a pyramid structure.
// (Pyramid of Doom)
// This style of programming becomes difficult to understand & manage.

//---------Read Notes---------


//-----------------------------5. Promises----------------------------

// Promise is for “eventual” completion of task. It is an object in JS.
// It is a solution to callback hell.


let promise = new Promise( (resolve, reject) => { } )


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



    // EXAMPLE
    let mypromise = new Promise(function(myResolve, myReject) {
        setTimeout(function() { myResolve("I love You !!"); }, 3000);
      });
      
      myPromise.then(function(value) {
        document.getElementById("demo").innerHTML = value;
      });
      

      
// A JavaScript Promise object can be:
// Pending : the result is undefined
// Resolved : the result is a value (fulfilled)
// Rejected : the result is an error object

// resolve( result )
// reject( error )

// .then( ) & .catch( )
// promise.then( ( res ) => { .... } )
// promise.catch( ( err ) ) => { .... } )




// -----------------------------------6. Async-Await------------------------------
// async function always returns a promise.
// async function myFunc( ) { .... }
// await pauses the execution of its surrounding async function until the promise is settled.

async function myFunction() {
    return "Hello";
  }

// ----------------------------7. IIFE : Immediately Invoked Function Expression-----------------------------
// IIFE is a function that is called immediately as soon as it is defined.
(/*main code between this col*/)