// For Loop

// Print 1 to 5 
// for (let i = 1; i <= 5; i++) {
//     console.log("apna college");
// }

// Just Syntax is different Logic is same 
// So we'll Focus on Imp and new loops to us 




// For-of-loop 

for (let val of strVar) {
//do some work
}

 let str = "Hiten";
  for (let i of str) {
    console.log(i);
  }
// Will Print all the alphabets in Hiten one by one 




// For-in Loop

for (let key in objVar) {
//do some work 
}


 let student = { // cretaed a object 
    name : "Hiten",
    age :  20,
    city :"Delhi"
 };

 for (let i in student) {
    console.log(i);
 }




// For-Each Loop 

arr.forEach( callBackFunction )

// CallbackFunction : Here, it is a function to execute for each element in the array
// *A callback is a function passed as an argument to another function.

arr.forEach( ( val ) => {
console.log(val);

})






