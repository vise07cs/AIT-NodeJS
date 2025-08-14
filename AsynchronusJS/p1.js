const promise = new Promise ((resolve,reject)=>{
  setTimeout(() => {
    const bookFound= true; // Simulating a book search result
    if (bookFound) {
      resolve("Book found");  
    } else {
      reject("Book not found");    }
  }, 2000);
  
});

// console.log(promise)


promise.then((message) => {
  console.log(message);
}).catch((error) => {
  console.log(error);
})


// console.log(promise)