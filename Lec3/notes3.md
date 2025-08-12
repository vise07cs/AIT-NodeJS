Promises in JS 

What is Promise and its purpose
How to create Promise
State of Promise
resolve
reject
How to handle promise using .then()


===========================================================

Promise is a special object in JS , which contains success/failure information .

There is a special way to create pormise object ---> it is created using a special constructor called promise constructor called Promise

p1.js


let promiseObj =new Promise()

There is a special way to add data inside the prmosie object 
we can add success data or failure/error data 

Promise constructor will take one callback function with 2 parameters 

let promiseObj =new Promise(function (resolve,reject){
  resolve("data resolved")
})



resolve and reject are 2 pre defined functions in JS . 
These are used to add data to promise object 

resolve ---> success data
reject ---> failure data 

if you dont pass anything -----> pending

you can store only one inside one promise object 

Promise object has 3 states 
1) Pending state---------->promise object is created but it doesnt have any data 
2) Fulfilled state ----------> data stored in promise object using resolve
3) rejected state ------------> data stored in Promise state using reject function 

This part is not taken care by frontend developer ---> they only consume the promise data


How to access the data from promise object ?

1) using then() and catch()

2) async await 

-------> Handling promise object using then and catch 

<promiseObject>.then(function(){}).catch(function(){})

between then() and catch() only one function will execute  

then()------> will execute if you have success data (resolve)
catch()-------> will execute if you have failure data (reject)

Lets see practically       (p1.js)

let promiseObj =new Promise(function (resolve,reject){
  // resolve("Promise resolved successfully");
  // reject("Promise rejected");
  resolve({
    status: "success",
    message: "Promise resolved successfully",
    data:[{},{},{}]
  })


  
})
// console.log(promiseObj);

promiseObj.then(function (result){
  console.log(result);
})
.catch(function (error){
  console.log("catch : "+ error);
});


if reject ---------> catch will be executed
if resolve ----------> then will be executed  




Suppose you created a login form ---->username,pw ----> when login button is clicked ---->server will verify if credentials are correct ------->if correct ------> send data back (.then(success data )) 

if pw/username is wrong ------------> error data (.catch(error msg))


Think of it like a container for a future value.




(2)------------> Handling promise object using async await   (p2.js)

function createPromise(){

  return new Promise(function (resolve,reject){
    resolve({
      status: "success",
      message: "Promise resolved successfully",
      data:[{name:"Rohit"},{name:"Rohan"},{name:"akash"}]
    });
  })

}

async function handlePromise(){
  try{
  let responseData=await createPromise();
  console.log(responseData)

  }
  catch(error){
    console.log("Error: " + error);
  }
}

handlePromise();

================================================================================================================

fetch()

Earlier AJAX was used , now fetch is being used

fetch ("url" )
---------------> the url will be provided byu server side people 

fetch will return one promise object 

Lets fetch a data from a 3rd party Application (JSON Placeholder)



Why use Promises?
---------->To handle asynchronous operations like network requests, file reading, timers, etc.

To avoid "callback hell" (nested callbacks)



h/w ---------> => Explore Promise Chain
