console.log("Hello World")
alert (" AAGYE ")




// The DOM defines a standard for accessing documents:
// "The W3C Document Object Model (DOM) is a platform and language-neutral interface that allows programs and scripts to
// dynamically access and update the content, structure, and style of a document.


// Prefer Slides Notes



// 1.Selecting with id
// # hmesha ID Ka Symbol hota hai 

// When Id not found then NUll
// When Class Not Found then EMpty aayga 

let heading = document.getElementById("heading"); // h1
console.log(heading);



// 2.Selecting with class
// ise kya hoga ki hm Html mai hm different things ko same class de skte hai or usse ek sath change kr skte hai

let head = document.getElementsByClassName("heading")
console.log(heading);



// 3. Selecting with tag

let para = document.getElementsByTagName("p") // paragraph dega 
comsole.dir(para); // dir() is the way to see all the properties of a specified JavaScript object in console by which the developer can easily get the properties of the object
comsole.log(para);



// 4. Query Selector // ISme hm ek sath upr ki TEENO CHIZE PASS KR SKTE HAI 

// document.querySelector(“#myId / .myClass / tag”)
let firstEL = document.querySelector("p");  // give 1st Element
console.dir(firstEL);

// document.querySelectorAll(“#myId / .myClass / tag”)
let allEL = document.querySelectorAll("p");  // All Elements 
console.dir(allEL);



//5.PROPERTIES 

//--> We Can Get,Set,Change,Update by this Properties in our Code
// We Can Change Our code Dynamically  By Using This Properites at RunTime 

// 1.tagName : returns tag for element nodes

// 2.innerText : returns the text content of the element and all its children

// 3.innerHTML : returns the plain text or HTML contents in the element    // We Can Write Code Or Tag ... in it 

// 4.textContent : returns textual content even for hidden elements

//Solving any Problems 
// 1. Access the Element
// 2. Apply Properties  

// Read Excercise From Slides Notes 




//6.Attributes

  getAttribute( attr ) //to get the attribute value

  setAttribute( attr, value ) //to set the attribute value



//7.Style  // Change  Style Of The HTML Elements by JavaScript 

    let e = document.createElement("Div")
    div.style.backgroundColor="red";

    node.style  // css change from node  
    // eg div.style.bgcolor



//8.Insert Elements

let el = document.createElement("Div")
    // button pOsitioning Changing
    node.append( el ) //adds at the end of node (inside)
    node.prepend( el ) //adds at the start of node (inside)
    node.before( el ) //adds before the node (outside)
    node.after( el ) //adds after the node (outside)



//9.Delete Element

    node.remove( ) //removes the node



    // Excercise 

    //Qs. Create a H2 heading element with text - “Hello JavaScript” Append “from Apna College students” to this text using JS

    let h2 = document.querySelector("h2")
    console.dir(h2.innerText);

    h2.innerText = h2.innerText + "from Apna College students"
    

    // Only use Javascript 
    // Qs. Create a new button element. Give it a text “click me”, background color of red & text colorof white.
    // Insert the button as the first element inside the body tag

    let newBtn = document.createElement("button");
    newBtn.innerText ="Click Me!";

    newBtn.style.color = "White";
    newBtn.style.backgroundColor = "red";

    document.querySelector( "body" ).prepend("newBtn");

    // We Have Use Inner Html or DOM for Creating this 