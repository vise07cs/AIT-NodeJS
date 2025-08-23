const http=require("http");
const fs=require("fs")

const myServer=http.createServer((req,res)=>{
  fs.readFile("docs.txt","utf-8",(err,data)=>{
    if(err){
      res.end("Error while creatinf file")

    }
    else{
      console.log("Successfully read the file ")
      res.end(
       data
      )
    }
  })
})


myServer.listen(3033,()=>{
  console.log("Server Started")
})