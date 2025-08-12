
// let obj = {
//   name: "Vikram",
//   greet: function() {
//     console.log(this.name);
//   }
// };
// obj.greet(); // "Vikram"


function outer(){
  let username = "Vikram";
      // console.log(secret);  // ReferenceError: secret is not defined

  
  function inner(){
     console.log("Inner1 function");
    var secret=123;
    console.log(username);
   
  }

  function inner2(){
    console.log("Inner2 function");
    console.log(username);
    console.log(secret);
  }


  inner();
  inner2();
  console.log("Outer function");



}
outer(); // "Vikram"