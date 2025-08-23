Indexing is used to fetch data from MongoDb at a very faster rate 

It saves a lot of time and improves performance 

Types of indexes in MongoDB :-
1) SINGLE FIELD INDEX
2) MULTI KEY INDEX
3) COMPOUND FIELD INDEX
4) TEXT INDEX
5) HASHED INDEX
6) GEOSPATIAL INDEX

syntax: db.<collectionName>.createIndex("index type)



==> To list out no. of indexes
syntax: db.<collectionName>.getIndexes()

====> To delete/remove collection
syntax: db.<collectionName>.dropIndex("index-name")


1) SINGLE FIELD INDEX

syntax: db.<collectionName>.createIndex({<fieldName>:})

syntax: db.<collectionName>.createIndex({price:1}) -----------------> Arrange all the documents in the ascending order in dataStructure based on the price field 

syntax: db.<collectionName>.getIndexes()


MongoDB provides a default index which cannot be deleted

 db.Products.find({price:{$gte:50000}}).explain("executionStat") ---------------> To check how many documnents got scanned 


2) MULTI FIELD  INDEX --------------> COMPOUND INDEX

db.<collection-name>.createIndex({<field1>:<order>, <field2>:<order2> })   --------------------> At max you can pass 32 fields

db.Products.createIndex({brand:1,price:-1})


db.Products.find({price:{$gte:50000},brand:"Apple"})



db.Products.find({price:{$gte:50000},brand:"Apple"}).explain("executionStat")        ----------> to verify documents scanned and returned




3) MULTI KEY INDEX ------------> Indexes on the  field whose value is array is called Multi key index


db.<collection-name>.createIndex({<field name whose value is array>: order})


db.Products.createIndex({orderIds:1})               (orderID value was an array )


db.Products.find({orderids:{$eq:[102,102,104]}})     

db.Products.find({orderids:{$eq:[102,102,104]}}).explain("executionStat")     






4) TEXT INDEX -------------------> Used to search certain text in a document 


db.Products.createIndex({<field-name>:"text-value"})


db.Products.createIndex({description:"text"})

db.Products.find(${text:{$search:"This"}})

