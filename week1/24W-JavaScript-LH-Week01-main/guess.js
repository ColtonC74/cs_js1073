        // STEP 1: Initialize game variables
        // STEP 1a: Pick random number
        // Returns a random integer from 1 to 100:
        var randomNumber = Math.floor(Math.random() * 100) + 1;
        
        // STEP 1b: Create variables to represent the three paragraphs above that will contain user feedback
        var guesses = document.querySelector("#guesses");
        var lastResult = document.querySelector("#lastResult");
        var lowOrHi = document.querySelector("#lowOrHi");
        var userInput = document.querySelector("#guessField");
        var submitButton = document.querySelector("button");
        // STEP 1c: Create variables to represent the guessing form

        // STEP 1d: Create variables to initialize counter for number of guesses
        var count = 1;
        // STEP 1e: Create a variable to represent the game reset button

        // STEP 2: Put focus on the field that allows user to type in guesses
        userInput.focus();
        // STEP 3: Build a function to check the user's guess
        function checkUser() {
            // STEP 3a: Create a variable to contain what number the user entered
            var userNumber = Number(userInput.value);
            // STEP 3b: If this is the first guess, add some text to the screen as a label for listing previous guesses for reference
            if(count === 1){
                guesses.textContent = "Previous Guesses:";
            }
            // STEP 3c: Add the user's current guess to that list, plus a space
                guesses.textContent += userNumber + " "
            // STEP 3d: Conditional - the user guessed correctly
            if(userNumber === randomNumber){
                lastResult.textContent = "Congratulations You Win!";
            }
            // Output a success message, then end the game

            // STEP 3e: Conditional - the user is all out of guesses
            if(count === 10){
                lastResult.textContent = "Sorry You Lost :c";
            }
            // Output an appropriate message, then end the game


            // STEP 3f: Conditional - the user's guess is incorrect
            if(userNumber != randomNumber){
                
            // Output an appropriate message
                lastResult.textContent = "That is not correct";
            // If the guess is too low, let the user know
                if(userNumber < randomNumber){
                    lastResult.textContent = "Your guess is too low";
                }

            // Else if the guess is too high, let the user know
                else{
                    lastResult.textContent = "Your guess is too high";
                }
            }

            // STEP 3g: Increment the guess count, move focus to the guess field for the next guess, and clear out the old input
                count++
            // STEP 3h: Proceed to the bottom of this file, just before we close out the SCRIPT element

        }
        // STEP 4: Build a function to end the game
        function gameover() {
            // STEP 4a: Disable the guessing field and submit button

            // STEP 4b: Build a new button to start a new game
            // STEP 4c: Add a click event to the new button that calls resetGame function
        }
        // STEP 5: Build a function to start a new game

        // STEP 5a: Restore the guessCount variable to 1

        // STEP 5b: Clear out all the old messages in the paragraphs below the guessing form - this will need a loop

        // STEP 5c: Remove the reset button

        // STEP 5d: Re-enable the guessing form, clear out any old input, then put focus on the field

        // STEP 5e: Change background color of lastResult paragraph back to white

        // STEP 5f: Generate a new random number

        // STEP 3i: Add an event listener for the guess form button that calls the checkGuess function
        submitButton.addEventListener("click", checkUser)