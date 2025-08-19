$lte
$gte


List documents with price 50000
db.<collection-name>.find({PropertyKey:{$eq:"<value>"}})

 db.Products.find({price:{$eq:50000}})




 $lte


List documents with price less than eq to 50000
  db.Products.find({price:{$lte:50000}})


List documents with price greater than eq to 50000

  db.Products.find({price:{$gte:50000}})


Whenever we are scanning or writing a query MongoDB scans the entire firlds of  collection . If there are 10 fields , it will scan all the 10 firlds and return the data accordingly . For smaller collections its fine but as the size of the collection grows, it becomes very time taking . Hence this appraoch is not recommended for larger collection 


To overcome this problem MongoDB uses the concept of indexes

indexes are special data structure in MongoDB 


To find out how many documents are being scanned by MongoDB , it has given us a special function called explain 

Ex:    db.Products.find({price:{$gte:50000}}).explain("executionStat")

look at the details (scroll up)

total docs examined  =7
returned =1 


We will use indexes 

syntax: db.<collectionName>.createIndex({price:1}) -----------------> Arrange all the documents in the ascending order in dataStructure based on the price field 

After you execute this , a special index will be created 

Now if you run 

Ex:    db.Products.find({price:{$gte:50000}}).explain("executionStat")

Now it will not scan all the documents , it will jsut return us :-

total docs examined  =1
returned =1 

It is possible due to indexing 

It saves a lot of time and improves performance  


syntax: db.<collectionName>.createIndex({price:-1}) -----------------> Arrange all the documents in the desscending order in dataStructure based on the price field 


We can create indexes on multiple fields also 

Types of indexes in MongoDB :-
1) SINGLE FIELD INDEX
2) MULTI KEY INDEX
3) COMPOUND FIELD INDEX
4) TEXT INDEX
5) HASHED INDEX
6) GEOSPATIAL INDEX


The above example was a part of  SINGLE FIELD INDEX


==> To list out all the indexes created on the collection ---> db.Products.getIndexes()

==> To remove/delete index from the collection

db.Products.dropIndex("index-name")



