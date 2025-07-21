
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