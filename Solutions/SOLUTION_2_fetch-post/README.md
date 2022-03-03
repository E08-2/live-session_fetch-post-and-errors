# Using fetch to make POST requests

### Instructions

* Create a `<form>` in `index.html`. Inside the form you should create `labels` and `input` fields for the following categories: (1) name, (2) username, (3) email, (4) phone.
* You should also create a `button` (also inside the `<form>`) which the user can click once they have filled in their data.
* In `index.js` you should use the `fetch` API to extract the user's data from the `input` fields, and send a POST request to the following URL:

>- https://jsonplaceholder.typicode.com/users. 

* **Hint:** As you are using a HTML `form`, remember the event object's **preventDefault** method may be helpful to stop the form's **default** behaviour of trying to make a HTTP request **as soon as** the `button` is clicked!
* Feel free to use either traditional "Promise" syntax or `async await` syntax.
* If your POST request is successful, you will receive a response object from the server with some data attached. You should use the same logic as a GET request to take the data from the response object, and print it to the console. What is the data you got back from the server?

### Extras

* If you have some extra time, you should try to add some validation to your `form` using HTML validation. For example, you could make sure all `input` fields have been filled in by the user, before clicking the `button` will work.
* You could also practice by using the alternative `fetch` syntax to the one you already used to achieve the same result.
* Finally, you are also welcome to style your page so it looks more appealing. :-)
