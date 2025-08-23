

sending HTML tag as a response

 ---------------------------------------------


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
      res.end("<h1> File created successfully </h1>");

    }
  })

  console.log("Request Recieved");



})
server.listen(3033,()=>{
    console.log("Server started on port 3033");
});



sending JSON tag as a response
 --------------------------------------------------------


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


 -------------------------------------------------------------------------------------------

 Creating and Adding some content is the file


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


 -------------------------------------------------------------------------------------------


 IN realtime no one uses nodeJS directly ; we will use expressJS 


  -------------------------------------------------------------------------------------------

  Renaming a file


  fs.rename("old-file-name" , "new file name" ,(err)=>{
    ---------------
  })


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




 ---------------------------------------------------------------------------------------------

 To delete a file -----> fs.unlink

   fs.unlink("<fileName>",(err)=>{})



  ---------------------------------------------------------------------------------------------------

  fs.writeFile("<file-name>,"new-file-contents",(err)=>{
     ----------------------
  })


  Hence using fs module we can

  create file
  delete file
  rename file
  add content in file


  -------------------------------------------------------------------------------

  To read a file and display it to the browser


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



 --------------------------------------------------------------------------------------------


 




