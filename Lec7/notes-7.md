fetch function in JS 

What is fetch and its purpose in JS ?

fetch() is one of the pre defind function given by Browser .
We can do network calls (gte/post/put/delete) using fetch 

Before fetch AJAX was used 


Suppose , we hava a db (mongo) which contains data about the users 

Whenever we click a button , a request must be sent to an api --> which will fetch users info from the DB 

Backend people have created 3 different URLs 

url1 --> to get users data
url2 ---> to post (add new users )
url3 ---> to delete


Suppose we want to get the users info ---> (url1) 

onClick --->send req to  API (url1)  -------> backend will birng the data from DB to us

data will be available to us in a promise object 

For this usecase we will use fetch function 


fetch (URL)
 we will use dummy urls which will send some users data ()

json placeholder ---> provides fake APIs

fetch will always return a promise object

the data inside the promise ,   will be in binary format ==> we need to convert to json format ---> we can do this using a pre defined function json

json will create one more promise object and reutrn the data ---> the data returned will be kept in the promise object ---> it will return us the promise 

refer Lec7/user.html, user.js 

In React we will use AXIOS 