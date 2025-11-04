 // over here we are setting up a function that listens for all the pages
// content to be loaded 
document.addEventListener('DOMContentLoaded', function() {
    // we load in our form and our error message
    const EnquiryForm = document.getElementById('EnquiryForm');
    const errorMessage = document.getElementById('validationError');

    // now we tell it what to do when the form is submitted
    // we pass "event" through to the new funtion we're making
    // so that we can use some of its properties
    EnquiryForm.addEventListener('submit', function(event) {
        //this prevents the form from being submitted if there are errors
        event.preventDefault();

        // we clear all of the errors first (in case they are resubmitting)
        // first we load the form elements
        const firstname = document.getElementById('firstname');
        const lastname = document.getElementById('lastname');
        const email = document.getElementById('email');
        const password = document.getElementById('password');
        // then we change them
        errorMessage.textContent = ""; // blanking the error message
        firstname.style.borderColor = ""; // removing colour
        lastname.style.borderColor = "";
        email.style.borderColor = "";
        password.style.borderColor = "";

        // we create a variable to hold whether or not the form submission is valid
        let valid = true;

        // we start by checkimg if they've entered something in the username box.
        if (firstname.value.trim() === ""){
            // highlight the box red 
            firstname.style.borderColor = "red";
            //update our error message
            errorMessage.textContent = "Username is required!";
            // and set that the form is no longer valid
            valid = false;
        } else {
            // otherwise, highlight in green to show it is valid and good
            firstname.style.bordercolor = "green";
        }

        if (lastname.value.trim() === ""){
            // highlight the box red 
            lastname.style.borderColor = "red";
            //update our error message
            errorMessage.textContent = "Full name is required!";
            // and set that the form is no longer valid
            valid = false;
        } else {
            // otherwise, highlight in green to show it is valid and good
            lastname.style.borderColor = "green";
        }

        // getting the entered email address from the form field, and extracting where "@" and the last "." are
        enteredEmail = email.value.trim();
        positionOfAt = enteredEmail.indexOf('@');
        positionOfDot = enteredEmail.lastIndexOf('.');

        // first we check if there is actually something entered
        if(enteredEmail === "") {
            email.style.borderColor = "red";
            errorMessage.textContent = "Email address is required!";
            valid = false;

            // checking whether there is an @ and at least one . 
            // then making sure that @ isnt the first character, and the . isnt the last
            // and then the last . needs to come after the @
        } else if (!enteredEmail.includes('@') || !enteredEmail.includes('.')
            || positionOfAt < 1 || positionOfDot < positionOfAt || positionOfDot >= enteredEmail.length) {
                email.style.borderColor = "red";
                errorMessage.textContent = "Email address is not valid!";
                valid = false;
            } else {
                email.style.borderColor = "green";
            }

            //password validation
            if (password.value.trim() === "") {
                password.style.borderColor = "red";
                errorMessage.textContent = "Password is required!";
                valid = false;
            } else if (password.value.length < 6) {
                password.style.borderColor = "red";
                errorMessage.textContent = "Password must be longer than 6 characters!";
                valid = false;
            } else {
                password.style.borderColor = "green";
            }
            // if the user has passed all of the validation checks
            if (valid) {
                // let them know
                errorMessage.style.color = "green";
                errorMessage.textContent = "Form submitted successfully!";

                // and clear the form for the next entry
                EnquiryForm.reset();

                // after waiting 2 secs reset colours and error message
                setTimeout(() => {
                    firstname.style.borderColor = "";
                    lastname.style.borderColor = "";
                    email.style.borderColor = "";
                    password.style.borderColor = "";
                    errorMessage.style.color = "red";
                    errorMessage.textContent = "";
                }, 2000);
            }

    });
});

