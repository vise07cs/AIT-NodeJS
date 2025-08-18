Operators in mongoDB

$gt--> greater than

$lt---> less than

$in-----> to match all the documents with multiple values ()----> list all the documents with apple and samsung
$nin ----------> opposite of in
$eq---> equal to 
$ne ----> not equal
$gte--> >=
$lte ---> <=


createDB--> myproductDB ---> products----> 5 docs(brandName,modelName,price,rate,orderIds)


use myProductsDB

 show collections

myProductsDB> db.Products.insertOne({brand:'Apple',model:'Iphone15',price:90000,oid:[101,102,103],rating:4})

$eq--> equal to

db.<collection-name>.find({PropertyKey:{$eq:"<value>"}})



 db.Products.find({brand:{$eq:"Apple"}}) ------------> will list out all the documents with brand "Apple"

 you can easily check all the operators on docummentation or using chatGPT , no need to waste so much time here ; when the usecase comes we will us it

$in ----> similar to $eq but for multiple values(["value1" , "value2"])
db.<coll-name>.find({propertyKey:{$in:[<value>,value]}})