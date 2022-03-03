const form = document.querySelector("form");
const fullName = document.querySelector(".name");
const username = document.querySelector(".username");
const email = document.querySelector(".email");
const phone = document.querySelector(".phone");

// * Version 1. "Traditional" Promise syntax function

const doFetchPostRequest = event => {
    // Prevent the default behaviour of the button, so the page is not automatically refreshed
    event.preventDefault();
    
    let url = "https://jsonplaceholder.typicode.com/users";

    // Only when the "submit" event has been detected on the form by the event listener...
    //... take the user data from your inputs and create a user object
    let userData = {
        name: fullName.value,
        username: username.value,
        email: email.value,
        phone: phone.value
    }
    
    // Settings object to further define your fetch request
    let settings = {
        method: "POST",  // Make a POST request
        body: JSON.stringify(userData),  // Convert the userData object into a JSON string, ready to send to the server
        headers: {
            "Content-Type": "application/json"  // Tell the server your request contains JSON data
        }
    };

    fetch(url, settings)  // Step 1: returns a Promise - we must *wait* for this to resolve with a Response object from the server
    .then(response => { 
        return response.json();  // Step 2: returns another Promise - we must *wait* for this to resolve with a "translated" version of the data in the Response object's body
    })
    .then(message => {
        console.log(message); // Print the data sent by the server to the browser console
    })
}

// ===========================================================================================

// * Version 2: async/await syntax

const doFetchPostRequestAsyncAwait = async event => {
    // Prevent the default behaviour of the button, so the page is not automatically refreshed
    event.preventDefault();
    
    let url = "https://jsonplaceholder.typicode.com/users";

    // Only when the "submit" event has been detected on the form by the event listener...
    //... take the user data from your inputs and create a user object
    let userData = {
        name: fullName.value,
        username: username.value,
        email: email.value,
        phone: phone.value
    }
    
    // Settings object to further define your fetch request
    let settings = {
        method: "POST",  // Make a POST request
        body: JSON.stringify(userData),  // Convert the userData object into a JSON string, ready to send to the server
        headers: {
            "Content-Type": "application/json"  // Tell the server your request contains JSON data
        }
    };

    let response = await fetch(url, settings);  // Step 1: returns a Promise - we must *wait* for this to resolve with a Response object from the server
    let message = await response.json();  // Step 2: returns another Promise - we must *wait* for this to resolve with a "translated" version of the data in the Response object's body
    console.log(message);  // Print the data sent by the server to the browser console
    
}

// form.addEventListener("submit", doFetchPostRequest);
form.addEventListener("submit", doFetchPostRequestAsyncAwait);