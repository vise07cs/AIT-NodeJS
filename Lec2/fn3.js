
// Difference between for of and for in loops

// for of loops are used to iterate over arrays,strings:

let arr=[1,2,3,4,6,7,8,9,10];

// for(let i=0; i<arr.length; i++){
//   console.log(arr[i]);
// }

for (let nums of arr){
  console.log(nums);
}


// for in loops are used to iterate over objects:

let obj1={
  name: "Object 1",
  value: 100,
  address:"123 Main St",
  city: "Anytown",
  
}

for (let key in obj1) {
  console.log(key,obj1[key]);
}