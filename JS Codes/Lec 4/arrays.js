// 1.  Creation of arrays  


// array of numbers
const numbers = [10, 20, 30, 40, 50];
let marks = [ 96, 75, 48, 83, 66 ];

// using new keyword
const number = new Array(10, 20, 30, 40, 50);

// array of strings
let fruits = ["Apple", "Orange", "Plum", "Mango"];
let heroes = [ "Ironman" , "Batman" , "Thor" , "Hulk" ];
let info = ["rahul" , 86 , "Ahm"];




// 2. Accessing array elements

let fruit = ["Apple", "Orange", "Plum", "Mango"];

fruits[0]; // Apple
fruits[fruits.length - 1] // Mango

// Iterate array elements
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}




//3. associative arrays in javascript

// Syntax -- const array_name = { key1: 'value1', key2: 'value2', key3: 'value3' }   

// object 
const employee = {
    id: 12345,
    name: "Sakshi Memon",
    email: "sakshi.memon@email.com"
  };
  
  // Accesing employee elements
  console.log(employee.id); // 12345
  console.log(employee.name); // Sakshi Memon
  
  // Array Length 
  console.log(Object.keys(employee).length); // 3
  
  // Retrieve the elements
  for (let key in employee) {
    console.log(key + " = " + employee[key]);
  }
  
  // Output
  id = 12345 
  name = "Sakshi Memon",
  email = "sakshi.memon@email.com"




  // 4. Difference between Array and Array of Objects in JavaScript


  // Arrays

  const num = [10, 20, 30];

// Iterating through loop
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// Pop an element from array
numbers.pop();
console.log("after pop(): " + num);



//  Array of Objects

const employees = [
    { id: 101, name: "Sakshi Memon", email: "sakshi.memon@email.com" },
    { id: 102, name: "Subhash Shukla", email: "subhash.shukla@email.com" },
    { id: 103, name: "Mohini Karpe", email: "mohini.karpe@email.com" }
  ];
  
  // Using DOT notation
  console.log(employees[0].name);
  
  // Using delete keyword
  delete employees[0];
  
  // Iterating using for..in loop
  for (let key in employees) {
    console.log(employees[key]);
  }



  


  // 5. Array Methods 


// Push( ) : add to end
//The push() method adds one or more elements to the end of an array and returns the new length of the array.

const animals = ['pigs', 'goats', 'sheep'];

const count = animals.push('cows');
console.log(count); // Output: 4
console.log(animals); // Output: Array ["pigs", "goats", "sheep", "cows"]




// Pop( ) : delete from end & return
// The pop() method removes the last element from an array and returns that element. This method changes the length of the array

var plants = ['broccoli', 'cauliflower', 'kale'];

console.log(plants.pop()); // Output: "kale"
console.log(plants); // Output: Array ["broccoli", "cauliflower"]
console.log(plants.pop()); // Output: "cauliflower"
console.log(plants.pop()); // Output: "broccoli"
console.log(plants.pop()); // Output: "undefined"


// toString( ) : converts array to string



// Read And Apply Differents Methods from Our Git Repo 