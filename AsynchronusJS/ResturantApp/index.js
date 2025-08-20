

let url="https://crudcrud.com/api/92f5a3f305c5412eb9b94302dac91c13/restaurantData"

function handleFormSubmit(event) {
  event.preventDefault();
  const tableDetails = {
    foodname: event.target.foodname.value,
    price: event.target.price.value,
    table: event.target.tables.value,
  };


  axios
    .post(
      url,
      tableDetails
    ).then((res)=>{
      console.log(res.data)
      displayUserOnScreen(res.data);

    }).catch((error) => console.log(error));
  





  // Clearing the input fields
  document.getElementById("foodname").value = "";
  document.getElementById("price").value = "";
  document.getElementById("tables").value = "";
}


window.addEventListener("DOMContentLoaded", () => {
  //  let url="https://crudcrud.com/api/d802ccb651f84c20be1933671b536f4a/appointmentData"

 let data= axios
    .get(url).then((res)=>{
      console.log(res.data);
      for(let i = 0; i < res.data.length; i++) {
        displayUserOnScreen(res.data[i]);
      }
    }).catch((err)=>{
      console.log(err);
    })
    console.log(data)
    
})










function displayUserOnScreen(tableDetails) {


  const userItem = document.createElement("li");
  userItem.appendChild(
    document.createTextNode(
      `${tableDetails.foodname} - ${tableDetails.price} - ${tableDetails.table}`
    )
  );

    const deleteBtn = document.createElement("button");
  deleteBtn.appendChild(document.createTextNode("Delete"));
  userItem.appendChild(deleteBtn);


  const myTable = document.getElementById(`${tableDetails.table}-orders`);
  myTable.appendChild(userItem);

  deleteBtn.addEventListener("click", function (event) {
    // userList.removeChild(event.target.parentElement);
    // localStorage.removeItem(userDetails.email);
    axios.delete(`${url}/${tableDetails._id}`).then(()=>{
      userItem.remove();
        console.log(`Deleted user with id: ${tableDetails._id}`);
    }).catch((err)=>{
      console.log(err);
    })
  });
}


