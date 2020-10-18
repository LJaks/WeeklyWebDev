/* 
PART 2: STRETCH GOAL

1. Validate that it's an email the user has entered
2. Give feedback as to whether the form was successfully submitted or not
3. Go crazy with the error/success feedback (e.g. animations, sounds)

*/

const email = document.getElementById("email-input");
const form = document.getElementById("myForm");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    let myRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    console.log("email: ", email.value);
    email.value !== "" ? (!myRegex.test(email.value) ? window.alert("Wrongly entered email!") : window.alert("email: " + email.value + "\n" + "Successfully joined!"))
        : window.alert("Please join us!");
})

