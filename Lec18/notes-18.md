

In NodeJS there are 3 types of module (package/library) in
1) core / inbuilt module -------> given by NodeJS people  Ex: (FSmodule / os/ http/stream/event )
2) npm module ---> 3rd party modeule  (Ex: jwt / mongoose / nodemon/ payment / nodemail  )
3) Custom modules ( we can create our own module)



Core modules in NodeJS


Lets create web server using nodeJS


server ??

Web apps are hosted inside a server


Server is a software which is used to accept the request from the client , process it and sends request back to the client 
Lets create web server using nodeJS
 we will use http module 

 http module --> create server 



what are port numbers ?


 what are the different numbers we can use for assigning port numbers ?




creatig server
 --------------------
const http=require("http");

const server=http.createServer((req,res)=>{
  console.log("Request has been made from browser to server");
  res.end("This is my  1st response whic I am sending to the client")

})


server.listen(9090, () => {
  console.log("Server is running on port 9090");
});




fs module in nodeJS

Helps us to create new file ; modify file ; read file ; rename file ; rename folders

creating a file

open("File Name with extension" , "w", function(err){...actions after creating the file..} )


 -----------------------------------------------------------------------------------------------------------------------

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




using the above fs module we are able to create an empty file .(document.html)