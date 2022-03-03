// * Using fetch() to make a HTTP POST request

// ? 1. What is a HTTP POST request?

// To send data to a server, e.g. to tore it in a database, we use a HTTP POST request.
// * "A POST request is used to send data to a server to create or update a resource."
// For example, to create a new user record in a database.
// The data sent to the server is stored in the "body" of the HTTP request.

// ====================================================================================

// ? Before we go any further, a quick word about forms...

// One thing we need to know about events is that it is possible to prevent the default behaviour of an element.
// E.g. If we have a form, when we "submit" the form (e.g. by clicking a "submit" button)...
// ... It tries to send the form, and then REFRESHES the page by default.
// * We can prevent this default form behaviour by using the event object, and its "preventDefault()" method.

// ====================================================================================

// * 2. How to make a HTTP POST request:

// The default HTTP method for fetch() is GET.
// If you only give your fetch request one argument - the URL - you will automatically make a GET request.
// * To specify a different type of HTTP request, you have to give fetch() a second argument!
// This second argument should be an OBJECT...




const form = document.querySelector("form");
const firstName = document.querySelector(".firstName");
const lastName = document.querySelector(".lastName");
const age = document.querySelector(".age");
const button = document.querySelector("button");

const fetchPostExample = event => {
    // * Important - this method of the event object stops the default form behaviour of refreshing the page!
    event.preventDefault();
    
    const user = {
        name: `${firstName.value} ${lastName.value}`,
        age: Number(age.value)
    }

    // * The settings object:
    // 1st property - "method" - takes a string - specifies the type of request to send
    // 2nd property - "body" - contains the JSON data we want to send
    //                       - we can use JSON.stringify to translate our data into a JSON string!
    // 3rd property - "headers":
    //   * A header is metadata passed to the API to help the server understand what type of request it is dealing with
    //   An important header is "Content-Type". This clarifies the type of data you are sending - in this case, JSON data.
    const settings = {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
            "Content-Type": "application/JSON"
        }
    };

    let url = "https://jsonplaceholder.typicode.com/users/";

    // * Step 1
    // fetch() returns a Promise
    // Wait for the promise to resolve (when we receive a response object from the server)...
    fetch(url, settings)
    // THEN, when we get the response object, 
    .then(response => {
        console.log("Step 1 - Response object", response);
        
        if (response.ok) {
            // * Step 2:
            // Take the response and call its .json() method to "translate" it into JS we can use.
            // Calling this function also returns a promise... 
            // So we must wait until the promise resolves with a "translated" version of what the server sent us..
            return response.json();
        }
        
    })
    // THEN, when the last promise has been resolved, do something with what the server sent us.
    .then(message => {
        console.log("Step 2 - Message", message);
    })
}

// ================================================

// * Let's see the same thing with async/await syntax:

const fetchPostExampleAsyncAwait = async event => {
    // Stop the default form behaviour of refreshing the page when submitted
    event.preventDefault();

    const user = {
        name: `${firstName.value} ${lastName.value}`,
        age: Number(age.value)
    }

    const settings = {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
            "Content-Type": "application/JSON"
        }
    };

    const response = await fetch("https://jsonplaceholder.typicode.com/users/", settings)

    console.log("Step 1", response);

    if (response.ok) {
        const message = await response.json()
        console.log("Step 2", message);
    }
}

// form.addEventListener("submit", fetchPostExample);
form.addEventListener("submit", fetchPostExampleAsyncAwait);