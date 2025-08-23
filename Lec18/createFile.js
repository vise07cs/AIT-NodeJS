const http=require("http");
const fs=require("fs")

const myServer=http.createServer((req,res)=>{
  fs.open("documnent.html","w",function(err){
    if(err){
      res.end("Error while creatinf file")

    }
    else{
      res.end("Successfully created the file ")
    }
  })
})


myServer.listen(7070,()=>{
  console.log("Server Started")
})