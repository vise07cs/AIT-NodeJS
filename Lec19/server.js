const http=require("http");

const fs=require("fs");
const server=http.createServer((req,res)=>{
  // res.end("Hello World ; request recieved ");
  fs.open("docs.txt","w",(err)=>{
    if(err){
      console.log("Error in creating file");
      res.end("Error in creating file");
    }
    else{
      console.log("File created successfully");
      // res.end("File created successfully");
      res.end(
        JSON.stringify({status:"true",message:"File created successfully",data:[{id:1,name:"John Doe"},{id:2,name:"sunny"},{id:3,name:"peter"},{id:4,name:"sandy"}]})
      )

    }
  })

  console.log("Request Recieved");



})
server.listen(3033,()=>{
    console.log("Server started on port 3033");
});