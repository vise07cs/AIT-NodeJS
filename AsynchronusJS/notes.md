# What is Asynchronous JavaScript?

JavaScript normally runs single-threaded — meaning one task at a time.
If something takes a long time (e.g., fetching data from a server), it can block other tasks from running.

To avoid freezing the page, JavaScript uses asynchronous programming —
which means start a task, and when it’s done, you get notified (via a callback, promise, etc.) instead of waiting right there.



Real-Life Analogy
Imagine you go to a restaurant:

You place your order (start an async task).

The chef cooks your food in the kitchen (background work).

Meanwhile, you chat with friends or check your phone (other JS code runs).

When your food is ready, the waiter brings it to your table (callback / promise resolution).

If JavaScript was synchronous, you’d stand at the counter and do nothing until your food arrived — wasting time. 

Also , while your food is being prepared other persons can also order their food . You are not blocking the Queue




# callback functions




To avoid callback hellissues we use promises


# promises


Similar to real life promises

Promises can be ---> fulfilled or no fulfilled
In JS terms ---------> resolve or reject 


resolve and reject are 2 pre defined functions in JS . 
These are used to add data to promise object 

resolve ---> success data
reject ---> failure data 

if you dont pass anything -----> pending

you can store only one inside one promise object 

Promise object has 3 states 
1) Pending state---------->promise object is created but it doesnt have any data . waiting for async task to be finished
2) Fulfilled state ----------> data stored in promise object using resolve. The async task completed successfully. You now have the result
3) rejected state ------------> data stored in Promise state using reject function . async task failed. You now have the reason (error).

Once a promise is fulfilled or rejected, it becomes settled and cannot change state again.


We can say promise is a container which holds a future value

to handle promises we use then() and catch() block

const promise = new Promise ((resolve,reject)=>{
  setTimeout(() => {
    const bookFound=true;
    if (bookFound) {
      resolve("Book found");  
    } else {
      reject("Book not found");    }
  }, 2000);
  
});

console.log(promise)    ----------------> we will get pending as we have just created the promise but we haven't handled it


we will handle we use .then() and .catch() 

promise.then((message) => {
  console.log(message);
}).catch((error) => {
  console.log(error);
})




/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



# Dependent Promises


supppose promise  p1 is fulfilled ---> if resolved ---> make promise p2----> if resolved ---> make promise p3



chaining of promisies ---> makes the code very complex and readiblity decreases 

solution ---> create sequence of .then blocks 


= ========================================================================================
# Async Await 

 Problem with Promises

When we use .then() chaining (like in your task1 → task2 → allTasksCompleted example), the code works fine, but it can become harder to read if we have many steps.

Enter async/await

async/await makes asynchronous code look like synchronous code.

async → used to declare a function that works asynchronously.

await → pauses the function until the Promise is resolved (or rejected)









# REST API 

What is API ??

API stands for Application Programming Interface.
It is a set of rules and tools that allows one software application to talk to another.


In simple words:
An API is like a waiter in a restaurant 🍽️.

You (the client) give the waiter your order (request).

The waiter takes it to the kitchen (the server).

The kitchen prepares the food (processes data).

The waiter brings the food back to you (response).

You don’t need to know how the kitchen works; you just use the waiter (API) to get what you want.



Example

Google Maps API → lets apps embed maps without building them from scratch.

Payment Gateway API (Stripe, PayPal) → lets e-commerce apps process payments securely.

Twitter API → allows apps to fetch tweets, post tweets, or get user data.



✅ In short:
An API is a middleman that lets two applications talk to each other without exposing internal details.






What is REST API ?

A REST API (Representational State Transfer Application Programming Interface) is a way for different software systems to communicate with each other over the web using standard HTTP methods.

Think of it like a messenger between a client (e.g., your browser or mobile app) and a server (where data lives).


REST (Representational State Transfer)

It's an architectural style for designing networked applications.

Uses simple, stateless communication (usually over HTTP).



Everything is treated as a resource (like a user, order, product).

Each resource is identified by a URL (endpoint).
Example:

https://api.example.com/users → all users

https://api.example.com/users/1 → user with ID 1


Uses Standard HTTP Methods

GET → Retrieve data
POST → Create new data
PUT/PATCH → Update existing data
DELETE → Remove data


Stateless
Each request is independent. The server does not store client session info between requests.

Client must send all necessary data with each request.



Data Formats

Usually returns JSON (lightweight, human-readable), but can also use XML, HTML, etc.

xample

Suppose you have a Bookstore REST API:
GET /books → Get all books
GET /books/10 → Get details of book with ID 10
POST /books → Add a new book
PUT /books/10 → Update book with ID 10
DELETE /books/10 → Delete book with ID 10
And the server might respond in JSON like:

{
  "id": 10,
  "title": "I write Clean Code",
  "author": "Robert C. Martin"
}




In short:
A REST API is a set of rules that lets applications talk to each other using standard web protocols, making it easy for developers to build scalable and flexible applications.

------------------------------------------------------------------------------------------------------------



Postman is the best tool to practice APIs hands-on. We’ll use a dummy API service where you don’t need signup or backend setup.

Some Dummy Websites
1) JSON Placeholder
2) Reqres
3) CrudCrud 


Lets use POSTMAN with reqres

yt playlist ----> https://www.youtube.com/watch?v=lKz2Am4UI6c&list=PLhW3qG5bs-L9P22XSnRe4suiWL4acXG-g&index=7




  
communication between fromtend(client-side) and backend(server-side) happens via HTTP reques
(HTTP request braodly has 4 parts )
1)Method(get/post/delete/put)
2)URL ----> IP address of DB server     (in our case we will use crudcrud)
3) Headers -------> info about request(JSON/xml and get/post/delete/put)
4) Body -----> needed for POST / PUT

# AXIOS

HTTP client which makes communication possible between client side and server side 

similar libraries -----> fetch 

But AXIOS is more popular 

Axios is a promise-based HTTP Client for node.js and the browser.