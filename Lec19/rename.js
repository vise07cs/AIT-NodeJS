const http=require("http");

const fs=require("fs");
const server=http.createServer((req,res)=>{
  // res.end("Hello World ; request recieved ");
  fs.rename("docs.txt","docs.html",(err)=>{
    if(err){
      console.log("Error in renameing file");
      res.end("Error in renaming file");
    }
    else{
      console.log("File renameed successfully");
      // res.end("File created successfully");
      res.end(
        "File renameed successfully"
      )

    }
  })

  console.log("Request Recieved");



})
server.listen(3033,()=>{
    console.log("Server started on port 3033");
});