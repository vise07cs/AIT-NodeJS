If the collection name ends with num or contains special character 
coll-2

you have to use a function called db.getCollection("collection-name").<action-name>


Ex: Delete a collection whixh contains special character 

db.getCollection("coll-2").drop()


> db.myusercollection1.dataSize()  -----------------> showa the size of collection

To find the no. of documents inside a collection


To find a specific document --> you need to pass an object as an arguement ()

db.<collection-name>.findOne({key:"value"})

 db.myusercollection1.findOne({name: 'Bhanu'})



Suppose we have 2 documents with same name , in that case if we search with name field insted of returning 2 value it will only show the output of the 1st created field (obviously its findOne)

This becomes a problem


IN that case we can use find() function instead of findOne

db.<collection-name>.find({key:"value"})
 db.myusercollection1.find({name: 'john'})


 will list out all the documents with name:'john'

Hence mongoDB provides us unique ID field





To delete a specefic document from your collection

db.<collection-name>.deleteOne({key:"value"})



