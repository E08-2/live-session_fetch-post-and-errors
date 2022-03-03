const input = document.querySelector("input");
const button = document.querySelector("button");
const div = document.querySelector("div");

// ==============================================

// * Error Handling 1 - Traditional Syntax

// ? Problem: how do we get to the catch block immediately when the request fails? (Not going to the next then block first!)

// * What is an error object in JS?

// In cases where something has gone wrong in our program, we can create an Error object.
// To make an error object, we can call the constructor function:

//                          Message
// let err = new Error("Something went wrong!");

// console.log(err.message);
// console.log(err.toString());
// console.log(err);

// ================================

// * Fetch and throwing errors!

// To stop your program at the point where something went wrong, and immediately deal with the problem, we can THROW an error.
// * The "throw" statement is powerful!
// Using a "throw" statement immediately stops all code execution after the "throw" statement...
// ... and control is passed to the next available catch block!

// ================================

// ? But why throw an error? Why not automatically catch the bug when response.ok === false?

// As we just saw, a fetch request will return a response object - even if the request is not successful...
// So the fetch request will resolve() with the response object, whether the request itself was successful or not!
// * fetch will only go into the catch block if the request itself is interrupted (e.g. if there is a network error)
// So if the fetch request gives us a response object (successful or not), we will not go to the catch block!
// * It makes more sense to treat an unsuccessful request as an ERROR. We can then "catch" it and deal with it immediately.

const getDataFromServer = () => {
    const userInput = input.value;

    // Make a HTTP GET request using fetch() to the URL. This returns a promise..
    fetch(`https://jsonplaceholder.typicode.com/todos/${userInput}`)
        // * Step 1: THEN, when the promise returned by fetch() resolves we get a response object...
        .then(response => {
            // If the request succeeded...
            if (response.ok) {
                console.log("Successful request!");
                console.log("Response object", response);
                // * Step 2: "Translate" the data in our successful request...
                // This returns a Promise, so WAIT until it resolves with the data, THEN go to the next then() block
                return response.json();
            // If the request did not succeed...
            // Throw an error and go straight to the catch() block!
            // The next then() block will be ignored as we immediately "catch" the error we threw
            } else {
                throw new Error("Resource was not found!");
            }
        })
        // THEN, when the data has been "translated", use it in some helpful way...
        .then(data => {
            console.log("Data from response object", data);
            div.textContent = data.title;
        })
        // CATCH the error we threw, and handle it
        .catch(err => {
            console.log("We are in the catch block!");
            console.log(err.message);
        });
}

// button.addEventListener("click", getDataFromServer);

// ==================================================================

// * Error Handling 2 - async/await

// As we have no chaining of .then() and .catch() handlers with async/await, we can use a different approach.
// * A "try-catch" statement allows you to "try" to execute a block of statements.
// * If there is an error at any stage, the "catch" block immediately catches the error, and deals with it.
// ? You want the "try" block to succeed, but if it doesn't, you can immediately pass control to the "catch" block
// We can - and will! - use this in lots of different contexts as we go through the course!

// * Syntax

/* 

try {
    ? some code we want to run
} catch {
    ? handle any errors in the "try" block
    ? if the "try" block executes with no errors, we never get to the "catch" block
}

*/

const getDataFromServerAsyncAwait = async () => {
    try {
        const userInput = input.value;

        // Step 1
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${userInput}`);

        console.log("Value of response.ok", response.ok); // true = request succeeded; false = request was unsuccessful

        if (response.ok) {
            // Step 2
            const data = await response.json();
            div.textContent = data.title;
        } else {
            console.log("The request did not succeed!");
            console.log("Now we have to throw an error, because we don't want to keep running our code when something went wrong...")
            console.log("Now we will throw the error, and go immediately to the catch block");
            // Throw an error if the request was unsuccessful
            throw new Error("Resource not found!");
        }
    // If we threw an error, catch it
    } catch (err) {
        console.log("We are in the catch block!");
        console.log(err.message);
    }
}

button.addEventListener("click", getDataFromServerAsyncAwait);