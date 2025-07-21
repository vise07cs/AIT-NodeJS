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
  let responseData=await createPromise();
  console.log(responseData);
}

handlePromise();

