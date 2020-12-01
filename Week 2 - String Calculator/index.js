const mainContainer = document.getElementById("main-container");
const equationField = document.getElementById("equation-field");
const solveButton = document.getElementById("solve-button");
const solutionDisplay = document.getElementById("solution-display");
const equationComponent = document.getElementById("equation-component")

solveButton.addEventListener("click", function() {
    // Clears the solution contents on each click
    solutionDisplay.innerHTML = ``;
    equationComponent.innerHTML = ``;
    
    // Write your code here 👇
    let equationString = equationField.value;
    let regex = /\d/;
    console.log(regex.test(equationString));
    
    if (regex.test(equationString)) {
    let arr = equationString.split(" ");
    console.log(equationString.split(" "));
    let solve = 0;
    
    let a = parseInt(arr[0]);
    let b = parseInt(arr[2]);
    let sign = (arr[1])
    console.log(a + b);
    
        switch(sign) {
            case "+":
            solve = a + b;
            solutionDisplay.textContent = equationString + " = " + solve;
                break;
            case "-":
            solve = a - b;
            solutionDisplay.textContent = equationString + " = " + solve;
                break;
            case "*":
            solve = a * b;
            solutionDisplay.textContent = equationString + " = " + solve;
                break;
            case "/":
            solve = a / b;
            solutionDisplay.textContent = equationString + " = " + solve;
                break;
            default:
                solutionDisplay.textContent = "try again";
                break;
        }
        console.log(equationComponent.textContent = "hello")
        return equationComponent.textContent = "hello"
    }
    else {
        return solutionDisplay.textContent = "letters not work"
    }
    });

/*
Part 1 (Calculation): 
    +Your first goal is to solve a simple text-based
        math problem entered in the input field
    +The problem can be add/sub/multiply/divide
    +Here are few examples: 
        "3 + 3" -> 6
        "10 - 3" -> 7
        "44 / 2" -> 22
        "2 * 8" -> 16 
    +When the 'Solve' button is clicked
        -Create a new div with the
            class 'equation-component'
            its text value should be the solution
            to the input equation
        -This element should be added as a child of 
            the `solutionDisplay` div

    Note: You can assume there will always only be 2 values, 
        both whole integers, and always a space between each 
        integer and the operator as in the above examples


Part 2 (Flex Display): 
    Then, you'll Flex your Flexbox skills!
    + Vertically stack the contents of the mainContainer
    + Center the content horizontally
    + Display all components of the equation 
        in the solutionDisplay using a horizontal Flexbox
        with `space around` each component
    
Skills: 
    Event Listeners, String Manipulation, Array Manipulation, 
Arithmetic, DOM Manipulation, Flexbox



STRETCH GOALS:
    +Accept and solve more complex problems with more than 2 inputs
    +Signal the different types of components (operator/value/solution) with different colors
    +Accept strings without spaces
    +Can you improve the overall design?
*/