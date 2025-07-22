console.log("hello")

// function getData(){
//   // console.log("Fetching data...");

//   fetch("https://jsonplaceholder.typicode.com/users").then(function(succes){
//     return succes.json()

//   }).then(function(data){
//     console.log(data);
//     document.createElement("ol");
//     data.forEach(function(user){
//       let li = document.createElement("li");
//       li.innerText = user.name;
//       document.body.appendChild(li);
//     });
//   }).catch(function(error){
//     console.log("Error fetching data: " + error);
//     document.body.innerHTML = "<h1>Error fetching data</h1>";
//   })
// }

// same code using async/await

async function getData() {
  try {
    // console.log("Fetching data...");
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();

    document.createElement("ol");
    data.forEach(user => {
      let li = document.createElement("li");
      li.innerText = user.name;
      document.body.appendChild(li);
    });

  } catch (error) {
    console.log("Error fetching data: " + error);
    document.body.innerHTML = "<h1>Error fetching data</h1>";
  }
}
