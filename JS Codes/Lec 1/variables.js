// CONCEPT 1


// Differences between variables created using let, var or const?

// It was using before let is discovered (2015)
// var : Variable can be re-declared & updated. A global scope variable.

// we'll Use Let more
// let : Variable cannot be re-declared but can be updated. A block scope variable.

// It is const variabale cant be re-update&Decalre
// const : Variable cannot be re-declared or updated. A block scope variable


//   All variables are accessible within functions.
 
function variableScope() {

    var x = 10;
    let y = 20;
    const z = 30;
  
    console.log(x); // 10
    console.log(y); // 20
    console.log(z); // 30
  }
  
  console.log(x); // ReferenceError: x is not defined
  console.log(y); // ReferenceError: y is not defined
  console.log(z); // ReferenceError: z is not defined
  
  variableScope();



  // CONCEPT 2


// <!---  VAR ---->

//   Redeclaring a variable with var will not throw an error, but 'let' and 'const' will.
var a = 'foo';
var a = 'bar';
console.log(a); // "bar"





// <!---  LET ---->

// Redeclaring by Let Variable,
let a = 'foo';
a = 'bar';
console.log(a); // bar





// <!---  CONST ---->

// Redeclaring  by Const Variable, it will give an Error
// This causes an exception.
const b = 'baz';
b = 'qux';
console.log(b) // TypeError: Assignment to constant variable.