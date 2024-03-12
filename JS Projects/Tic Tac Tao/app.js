// target html.
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");


// Declared & Intialised
let turnO = true; // playerX, player 0 // dono mai se ek ko track krenge // toh dusra miljyga
let count = 0; // to track draw

const winPatterns = [  // Use Const [] when numbers are there
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ];

// created two fn for enable & Disable  the buttons
  const disableBoxes = () => {
    for (let box of boxes) {
      box.disabled = true;
    }
  };
  
  const enableBoxes = () => {
    for (let box of boxes) {
      box.disabled = false;
      box.innerText = "";
    }
  };

  // If game draws
  const gameDraw = () => {
    msg.innerText = `Game was a Draw.`;
    msgContainer.classList.remove("hide");  // Dom Property Class List 
    disableBoxes();
  };

// Reset Fn Button
// Function resetGame:
// Resets the game by resetting variables, 
// enabling boxes for input, and hiding the message container.
 
const resetGame = () => {   
    turnO = true ;
    count = 0;
    enableBoxes(); // niche banaya hai 
    msgContainer.classList.add("hide"); // The Element.classList is a read-only property that returns a live DOMTokenList collection of the class attributes of the element. This can then be used to manipulate the class list
  };


// function for Inner Text of Box 
// Adds a click event listener to each box.
// Alternates between 'O' and 'X' depending on whose turn it is.
// Disables the box after it's clicked.
// Checks for a winner after each move and calls the checkWinner function.
boxes.forEach((box) => {
  box.addEventListener("click", () => {  
      
    if (turnO) { 
      //playerO
      box.innerText = "O";
      turnO = false; // ek ko target kiya hau smje 
    } else {
      //playerX
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    count++;

    let isWinner = checkWinner();

    if (count === 9 && !isWinner) {
      gameDraw();
    }
  });
});

 // Checking the Winner 
//  Iterates through winPatterns.
//  Checks if the values in the specified positions match ('O' or 'X').
//  If a winning pattern is found, calls showWinner function and returns true.

 const checkWinner = () => {
    for (let pattern of winPatterns) {

      let pos1Val = boxes[pattern[0]].innerText;
      let pos2Val = boxes[pattern[1]].innerText;
      let pos3Val = boxes[pattern[2]].innerText;
  
      if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
        if (pos1Val === pos2Val && pos2Val === pos3Val) {
          showWinner(pos1Val);
          return true;
        }
      }
    }
  };

// Show Winner 
  const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
  };

//   Event Listeners on Buttons:
// Adds event listeners to the reset button and new game button, both of which call the resetGame function when clicked.

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
