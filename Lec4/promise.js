function createPromise(){
  return new Promise(function(resolve,reject){
    resolve({
      status: "success",
      message: "Promise resolved successfully", 

    })
  })
}

createPromise().then(function(res){
  console.log(res);
}).catch(function(err){
  console.log("Error: " + err);
});