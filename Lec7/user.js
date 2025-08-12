function getUsers(){
  console.log("hello")
  let promiseObj= fetch("https://jsonplaceholder.typicode.com/users")

  promiseObj.then(function(res){
    let data =res.json()

    data.then(function(success){

      console.log(success)
      
      // console.log(success[0].name)
      // console.log(success.length)

      document.createElement('ol')
      for(let i=0;i<success.length;i++){
        let li=document.createElement('li')
        li.innerText=success[i].name;
        document.body.appendChild(li);
      }


    })
  })
  
  .catch(function(err){
    console.log(err)
  })
}