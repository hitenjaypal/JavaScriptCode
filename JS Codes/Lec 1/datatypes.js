// Primitive Types : Number, String, Boolean, Undefined, Null, BigInt, Symbol

// STRING
// String is used to store text. In JavaScript, strings are surrounded by quotes:
// Single quotes: 'Hello'
// Double quotes: "Hello"
// Backticks: `Hello`

const firstName = "Mukul";
const lastName = "Mittal";
// below was wriiten using Template Strings

const result = `Name: ${firstName}${lastName}`; 
console.log(result); // Name: Mukul Mittal




// BIGINT
// In JavaScript, Number type can only represent numbers less than (253 - 1) and more than -(253 - 1). However, if you need to use a larger number than that, you can use the BigInt data type.
// A BigInt number is created by appending n to the end of an integer.

// BigInt value
const num1 = 100000000000000000n;
const num2 = 1000000000000000000n;
const num3 = 10;

// Adding two big integers
const result1 = num1 + num2;
console.log(result1); // "1100000000000000000n"

// Error! BitInt and number cannot be added
const result2 = num1 + num2 + num3;
console.log(result2); // Uncaught TypeError: Cannot mix BigInt and other types


// Other's Variables read from Repo 


let a;
console.log(typeof a); // "undefined"

const b = "Hello World";
console.log(typeof b); // "string"

const c = 42;
console.log(typeof c); // "number"

const d = 3.1415;
console.log(typeof d); // "number"

const e = true;
console.log(typeof e); // "boolean"

const f = null;
console.log(typeof f); // "object"

const g = undefined;
console.log(typeof g); // "undefined"

const h = { b: "c" };
console.log(typeof h); // "object"

const i = function () {
  return 10;
};