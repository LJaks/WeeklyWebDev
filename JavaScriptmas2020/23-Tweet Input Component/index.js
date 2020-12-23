/*
DESCRIPTION:
We are making a Social Media Character Counter! We want to display the available characters LEFT.
Using the Keydown event should help you here. When the characters reach 20 and below, we want them to turn red. So we will use Javascript to add that styling to it. If the characters drop below 0, we want the button to be disabled BUT if there are only 0 characters left, we should still be able to tweet.

Keydown, addEventListeners, add and remove a class

Tips:
1. We want to create our variables first
2. Add the event listener
3. Look in the CSS to see what could be used to disable the button
4. Create conditions to check the count of the characters

Let your imagination run wild! You can use the provided styling or you can take it to another level!
Make sure you share your solution using the "Share solution!" button at the top!
There will be multiple winners that I select!

Follow me on twitter @DThompsonDev so you can find who who is selected! I hope it's YOU!

*/
const counter = document.getElementById("counterFooter");
const button = document.getElementById("btn");
const text = document.getElementById("string");

text.addEventListener("keydown", textInput);
text.addEventListener("keyup", textInput);

function textInput(e) {
  const textLength = e.target.value.length;
  const remainingChar = 140 - textLength;
  counter.innerHTML = remainingChar + "/140";

  if (remainingChar < 20) {
    counter.style.color = "red";
    button.className = "button";
    button.disabled = false;

    if (remainingChar < 0) {
      button.className = "buttonDisabled";
      button.disabled = true;
    }
  } else if (remainingChar >= 0) {
    counter.style.color = "white";
    button.className = "button";
    button.disabled = false;
  }
}

button.addEventListener("click", (e) => {
  e.preventDefault();
  window.open(`https://twitter.com/intent/tweet?text=${text.value}`);
});
