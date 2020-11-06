/*
https://scrimba.com/scrim/crqwK6tv?utm_source=wwdc&utm_medium=scrim&utm_campaign=wwdc&utm_content=wwdc_ania_logoEditor

DESCRIPTION:
In this challenge you are asked to change how the logo looks when you click 
the three buttons. This is an excellent challenge for styling elements in 
JavaScript, not CSS.

If the user clicks the first button, I want the text on the 
logo to become black. If the user clicks the second button, 
I want the logo background to become red. If the user clicks the third button,
I would like you to add a shadow to the logo.

event listeners, getElementById, operators

*/

// Write your code here 👇

document
  .getElementById("button-one")
  .addEventListener("click", firstButton, false);

document
  .getElementById("button-two")
  .addEventListener("click", secondButton, false);
document
  .getElementById("button-three")
  .addEventListener("click", thirdButton, false);

let toggle = true;
function firstButton() {
  const text = document.getElementById("text");
  if (toggle) {
    text.style.cssText = "color: black";
  } else {
    text.style.cssText = "color: #F1F2F6";
  }
  toggle = !toggle;
}

function secondButton() {
  const logo = document.getElementsByClassName("logo")[0];
  if (toggle) {
    logo.style.background = "red";
  } else {
    logo.style.background = "#FF8600";
  }
  toggle = !toggle;
}
function thirdButton() {
  var logo = document.getElementsByClassName("logo")[0];
  if (toggle) {
    logo.style.boxShadow = "10px 20px 30px black";
  } else {
    logo.style.boxShadow = "none";
  }
  toggle = !toggle;
}

/*

DETAILED INSTRUCTIONS
1. pick out the neccesary elements from the HTML
2. use eventlisteners on the buttons to envoke functions
3. change the properties of the logo using JavaScript

STRETCH GOALS:
- If any of the buttons are clicked a second time, I want the change they 
  are responsible for to be reversed.
- Can you improve the overall design?

*/
