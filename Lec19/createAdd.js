const http=require("http");

const fs=require("fs");
const server=http.createServer((req,res)=>{
  // res.end("Hello World ; request recieved ");


fs.appendFile("myfiles.txt","This is my 1st file content",(err)=>{
    if(err){
      console.log("Error in creating file");
      res.end("Error in creating file");
    }
    else{
      console.log("File created successfully");
      res.end("File created successfully");
    

    }
  })
})

  console.log("Request Recieved");




server.listen(3001,()=>{
    console.log("Server started on port 3001");
});