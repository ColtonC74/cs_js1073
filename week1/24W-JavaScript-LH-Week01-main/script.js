
    /*
    STEP 1: What is JavaScript?

    JavaScript is an interpreted language, rather than a compiled language like C/C++. That is - the code is run in a
    linear
    way, then the result is returned as output of some kind.

    JavaScript can be run either on a server or on a client (like a desktop or phone browser). We will be focused on
    client-side JavaScript.

    JavaScript can do a number of things:
    1. Store information in variables or arrays
    2. Manipulate blocks of text known as 'strings'
    3. Respond to user events
    4. Change content on the page
    5. Modify the CSS styles
    …and much more!

    But it is JavaScript's interaction with Application Programming Interfaces (APIs), that really make things
    interesting
    (and powerful).

    There are two main categories of APIs:
    1. Browser APIs
    2. Third-Party APIs

    Browser APIs allow JavaScript to do things like update the Document Object Model (DOM API), locate the user
    (Geolocation
    API), generate 2D and 3D graphics (Canvas and WebGL APIs), and work with audio and video (Multimedia APIs).
    */

    // STEP 2: Get the EM element and store as a variable
    var em = document.querySelector("em");

    // STEP 3: Assign a click event listener to the above element, and call function
    em.addEventListener("click", displayName);
    // STEP 4: Creat a function that waits for click event above
    function displayName(){
        console.log("im in the fucntion");

    
    // STEP 4a: Display a prompt asking for input, and assign the input to a variable
        var userInput = prompt("Enter your name:");
        console.log(userInput);
    // STEP 4b: Grab the input from the variable and build a new string, then change the text inside the EM element
        em.textContent = userInput;
    }
    // STEP 5: Comment out the addEventListener above, and replace it with an ONCLICK attribute typed directly into the EM
    // element in the HTML - note that this is common, but it is considered to be bad practice - separate your HTML and your JS

    // STEP 6: Move the above JavaScript into an external file and reference it with an empty SCRIPT element just before
    // closing out the BODY

    // This page inspired by and adapted from https: //developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript
