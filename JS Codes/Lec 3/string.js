let str = "Hiten";

console.log(str[4]); // n 

// Template Literals in Js 

// A way to have embedded expressions in strings
// `this is a template literal`

// String Interpolation
// To create strings by doing substitution of placeholders

`string text ${expression} string text`


// String Substitution
let name = `Abhinav Sharma`;
console.log(`Hi, ${name}`); // Output: "Hi, Abhinav Sharma"

// Multiline String
let msg = `Hello \n
World`;
console.log(`${msg}`); // Output: "Hello World"



// String Methods

// 1. slice():
// The slice() method returns a new array with a copied slice from the original array. The first optional argument is the beginning index and the second optional argument is the ending index (non-inclusive).

// Example:

let languages = [ "JavaScript", "Python", "Java", "PHP" ];

languages.slice(1,3); // ["Python", "Java"]
languages.slice(2); // (from index 2 until the end of the array).
// ["Java", "PHP"]

console.log(languages); // the original array is not mutated.
// [ "JavaScript", "Python", "Java", "PHP" ]



// 2. splice():

// The splice() method changes the content of the array in place and can be used to add or remove items from the array. When only one argument is provided, all the items after the provided starting index are removed from the array.

// Example:

let numbers = [10, 20, 30];

numbers.splice(2, 1, 40, 50); // returns removed array:[30]

console.log(numbers); // Original array is mutated.
// returns: [10, 20, 40, 50]


// Read Notes for Different String Methods in JavaScript