// 1.function
// see how Function works in js 

function sum(num1, num2){ // function definition
    return num1 + num2;
    }

    add = sum(2, 3); // function call
    console.log(add);
    // Output 5




//2. Function ke Parameters are like Local Variables of Fn and their scope is within the function only.
    function sum(num1, num2){ // function definition
        console.log(num1);
        return num1 + num2;
    }
    
        add = sum(2, 3); // function call
        console.log(num1);
        console.log(add);
    // Output 2




 // 3.Arrow Functions 
 //Arrow functions were introduced in ES6.
// Arrow functions allow us to write shorter function syntax


// Syntax

 const functionName = ( param1, param2) => {

    // work 
 }



// Before arrow 
hello = function() {
    return "Hello World!";
  }
  
  // After Arrow 
  hello = () => {
    return "Hello World!";
  }
  

// Read some Example from repo 
    


// Higher-Order function 
// function that receives a function as an argument or returns the function as output.
// For example, Array.prototype.map(), Array.prototype.filter() , Array.prototype.forEach() and Array.prototype.reduce() are some of the Higher-Order functions in javascript.

// Example 01: .map()

const array = [10, 20, 30];

const result = array.map(function (item) {
  return item * 2;
});
console.log(result); // [20, 40, 60]


// read differnts methods from repo 