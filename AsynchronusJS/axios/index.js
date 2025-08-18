const getBtn = document.getElementById("get-btn");
const postBtn = document.getElementById("post-btn");
const putBtn = document.getElementById("put-btn");
const deleteBtn = document.getElementById("delete-btn");

getBtn.addEventListener("click", getTodos);
postBtn.addEventListener("click", postTodo);
putBtn.addEventListener("click", putTodo);
deleteBtn.addEventListener("click", deleteTodo);

let url="https://crudcrud.com/api/d802ccb651f84c20be1933671b536f4a/todo"

function getTodos() {
  // Write your code here
  // console.log("get")
   axios.get(url).then((res) => {
    console.log(res)
  }).catch((err) => {
    console.log(err)
  })
  
}

function postTodo() {
  // Write your code here
  axios.post("https://crudcrud.com/api/d802ccb651f84c20be1933671b536f4a/todo", {
    title: "Learn Axios",
    completed: false
  }).then((res) => {
    console.log(res)
  }).catch((err) => {
    console.log(err)
  })
}


function putTodo() {
  // Write your code here
  // console.log("put")
    axios.put(url + "/68a2ef8e5f3bb303e89bddc0", {
    title: "Learn Axios",
    completed: true
  }).then((res) => {
    console.log(res)
  }).catch((err) => {
    console.log(err)
  })





}

function deleteTodo() {
  // Write your code here
  // console.log("delete")
    axios.delete(url + "/68a2ef8e5f3bb303e89bddc0").then((res) => {
    console.log(res)
  }).catch((err) => {
    console.log(err)
  })


}
