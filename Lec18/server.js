const http=require("http");

const server=http.createServer((req,res)=>{
  console.log("Request has been made from browser to server");
  res.end("This is my  1st response and I am able to send this resposnse to the client")

})


server.listen(9090, () => {
  console.log("Server is running on port 9090");
});



