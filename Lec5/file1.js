function f1(){
  let price=100;
  let qty=5;
  console.log(price*qty);
  console.log("f1 is called")
};

function f2(){
  console.log("f2 is called")
};
function f3(){
  console.log("f3 is called")
} ;
function f4(){
  console.log("f4 is called")
};

function f5(){
  console.log("f5 is called")
};


f3();

f4();

console.log("I am in file 1")

let city="patna";
let country="India"
module.exports = {f1,f2,f5,city,country};