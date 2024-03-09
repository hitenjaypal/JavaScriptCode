// -------------1. Prototypes in JS-----------------

// A javaScript object is an entity having state and behavior (properties and method).
// JS objects have a special property called prototype.
// We can set prototype using _ _ proto _ _

// *If object & prototype have same method,
// object’s method will be used.



//----------2.BASIC INFORMATION------------

//---------------------OBJECTS----------------------
// An object is a collection of properties, and a property is an association between a name (or key) and a value. 
 let object = new Object();

 class Person {
    constructor(name) {
       this.name = name;
    }
   }
   
   let person = new Person("Alex");

//-----------------CONSTRUCTOR----------------
// Constructors are methods that are automatically executed every time you create an object.

//Constructor( ) method is :
// -> automatically invoked by new
// ->initializes object

class MyClass {
    constructor( ) { ... }
    myMethod( ) { ... }
}


// ----------------CLASSES------------------
// Classes are a template for creating objects. They encapsulate data with code to work on that data. Classes in JS are built on prototypes but also have some syntax and semantics that are unique to classes.
class MyClass {
    constructor( ) { .. }
    myMethod( ) { ... }
    }
    let myObj = new MyClass( ) ;
    //Class is a program-code template for creating objects.
    // Those objects will have some state (variables) & some behaviour (functions) inside it.

    // Classes obj ke blueprint hote hai 


// ----------------NEW KEYWORD----------------------
//JavaScript new keyword is used to create an instance of an object that has a constructor function

// ----------------THIS KEYWORD----------------------
//the this keyword refers to an object. Which object depends on how this is being invoked (used or called). The this keyword refers to different objects depending on how it is used: I

// ------------------SUPER KEYWORD---------------------
// The super keyword is used to call the constructor of its parent class to access the parent's properties and methods
super( args ) // calls Parent‘s constructor
super.parentMethod( args )


// ---------------- Inheritance ---------------------
// inheritance is passing down properties & methods from parent class to child class.
class Parent {
}
class Child extends Parent {
}

// ------------------*If Child & Parent have same method, child’s
// method will be used. [Method Overriding]---------------------------------

// ---------------QN---------------
// Qs. You are creating a website for your college. Create a class User with 2 properties, name &
// email. It also has a method called viewData( ) that allows user to view website data.
// Qs. Create a new class called Admin which inherits from User. Add a new method called
// editData to Admin that allows it to edit website data.


let DATA = "secret info";

class User {
    constructor(name,email) {
        this.name = name ;
        this.email = email;
    }


viewDATA () {
    console.log("data =" , DATA);
}
}

class admin extends user{
    constructor(name,email){ // jbhi child mai constr ko use krte hai toh parent ko call lrna pdta hai or // uske liye SUPER Keyword use hota hai 
        super(name,email);
    }
    editDATA(){
    DATA = "some new value";
    }
}


let student1 = new User("hiten", "abc@123gmail.com")
let student2 = new User("hit", "abc@12gmail.com")

let teacher1 = new User("dean", "deac@12gmail.com")

let admin1 = new User("admin", "admin@12gmail.com")


// ------------------Error Handling-----------------

//try-catch


try {
    //normal code
    }
     catch ( err ) { //err is error object
    //handling error
    }
