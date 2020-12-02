import { testPurses } from "./shortChangeTests.js";
/* 
    Write a function enoughChange

    https://scrimba.com/scrim/co20d464e9fcad30b0d8781c3
    
    Given an object representing a coin purse, and a price
        it should return true/false depending on whether 
        or not you have enough change to complete a 
        purchase at the given price
    
    The function should also update the "counters"
        such that they reflect the quantities in
        the test case
        
    You should then use this function to update the 
        purchaseConfirmation div to display whether
        or not you can afford the purchase with the
        coin quantities provided
        
    Finally, create nextCase and previousCase 
        buttons to cycle through the test cases 
    
    Refresh the mini-browser or save this file to
        load new test cases!
*/

const purchaseConfirmation = document.getElementById("purchase-confirmation");
const quarterCounter = document.getElementById("quarter-count");
const dimeCounter = document.getElementById("dime-count");
const nickelCounter = document.getElementById("nickel-count");
const pennyCounter = document.getElementById("penny-count");

let sampleTest = testPurses[0];
console.log(sampleTest);

let array = Object.values(sampleTest);

let sum = 0;
for (let i = 0; i < array.length - 1; i++) {
  sum += array[i] * document.querySelectorAll(".coin")[i].innerHTML;
}
sum = sum.toFixed(2);

if (sum >= sampleTest.price) {
  purchaseConfirmation.innerText =
    "You have $" +
    sum +
    ". You can buy it for the price of $" +
    sampleTest.price;
  purchaseConfirmation.classList.add("true");
} else {
  purchaseConfirmation.innerText =
    "You have $" +
    sum +
    ". Not enough coins for the price of $" +
    sampleTest.price;
  purchaseConfirmation.classList.add("false");
}

quarterCounter.innerText = sampleTest.quarters;
dimeCounter.innerText = sampleTest.dimes;
nickelCounter.innerText = sampleTest.nickels;
pennyCounter.innerText = sampleTest.pennies;

// Your code here 👇

const nextbtn = document
  .getElementById("next-case")
  .addEventListener("click", function () {});
const prevbtn = document
  .getElementById("previous-case")
  .addEventListener("click", function () {});
