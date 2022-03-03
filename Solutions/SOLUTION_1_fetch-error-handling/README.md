# Fetch - Error Handling

In this repo you will find a potential solution to the **fetch()** exercise you looked at on Tuesday. 

---

**Remember:** The `index.js` file contains two functions which `fetch` data from a server. Both functions do the same thing, but one uses "traditional" Promise syntax, the other uses `async await` syntax.

>- If you enter a number from 1-200 in the `input` and click the `button`, you will receive a successful `Response` object from the server. This will contain a "to-do" object with the same `id` as the number you typed. The "title" value of this object (some Latin text) will then populate the `div`.
>- If you enter anything else and click the `button`, you will receive an unsuccessful `Response` object from the server. A message to confirm this will be logged to the browser console.

---

**Your job:** Implement better error handling for **one** of the `fetch` requests!

If the server's response shows your request was unsuccessful, use either... 

>- the `.catch()` handler (for traditional syntax), or 
>- the `catch {}` block (for `async await` syntax)

... to create and throw an `Error` with a relevant message. You should then display an `alert()`, using the message you gave your `Error`, informing the user that something went wrong.

### Bonus

If you finish early, you should implement the same error handling process for the other `fetch` request, and test it. You can then spend any extra time improving the page's styling. :-)