We were able to successfully start mondodb server and mongo shell
mongod
mongosh

to clear the screen --> cls
by default you are in test db


to create new  db --> use <dbname>

to create collection ---> db.createCollection('collection-name')   ----> you can create any number of collection

to list out all the db ---> show dbs

to list out all the collection in the db ---> show collections


to swich from one db to another -------> use <dbname>



cls


now we wnat to store data/documents inside our collection

insertOne()
insertMany()

db.collectoinName.insertOne({name:"Raj Sinha",city:"Delhi"})


 db.myusercollection1.insertOne({name:"neha",age:34,city:"Pune"})



 to delete a collection 


 db.collection-name.drop



 never create collection name ending with numbers , it might lead to errors (collection4,coll5)


 list out the documents from collection ----> db.collection-name.find()


----------------------
myuserdb> db.myusercollection1.find()   ----------------> will return array of documents

[
  { _id: ObjectId('689ae3a0ecdbf52f59eec4a9') },
  { _id: ObjectId('689ae3bdecdbf52f59eec4aa'), name: 'Raj', age: 23 },
  { _id: ObjectId('689ae3f1ecdbf52f59eec4ab'), name: 'sneha', age: 24 },
  {
    _id: ObjectId('689ae414ecdbf52f59eec4ac'),
    name: 'neha',
    age: 34,
    city: 'Pune'
  }
]

mongodb will by default allocates an id to all the documents, which acts as a unique key 

Hence in mongodb doccument can have dynamic number of fields  (some document can have 2 field, some document can contain 10 fields also  )


insertMany() ----------> to add multiple docs at same time

db.collection-name.insertMany([{},{},{}])


db.myusercollection1.insertMany([{name:"Vikram" , city:"Patna" }, {name:"manish",age:24} ])

We can add nested documents also
db.myusercollection1.insertOne{name:"john",address:{city:"ny",country:"USA"}}