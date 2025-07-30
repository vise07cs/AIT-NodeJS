Install MongoDB server 
link --> https://www.mongodb.com/try/download/community-kubernetes-operator

c/progfilr/mongoDb/server/version/bin
setup path in env variable 



open cmd -------> mongod-----> servr runnig 


3 ways to connect to mongoDb server 

(1) Mongo Shell
(2) Node/Express/java/python
(3) Tool (MongoDb compass)  -----> ( GUI )



1) shell ---> link ---> https://www.mongodb.com/try/download/shell

extract 

add env variable --> C:\Users\HP\Downloads\mongosh-2.5.6-win32-x64\mongosh-2.5.6-win32-x64\bin

open cmd ---> mongosh 

hence we connected mongo shell to mongoDb server using command mongosh 
(note --> the mongodb server must be up and running for mongosh to be run )



Using pre defined js fucntions and properties we can perform so many operations on mongoDB 

Ex: creating a DB ---> use <dbname>

create DB myuserdb ---> 

use myuserdb
it will automatically switch to db myuserdb


create a collection in myuserdb 

db.createCollection(<'collection_name'>)

myuserdb> db.createCollection('myusercollection1')
{ ok: 1 }
myuserdb> db.createCollection('myusercollection2')
{ ok: 1 }
myuserdb> db.createCollection('myusercollection3')
{ ok: 1 }
myuserdb>  show collections ---------> will list out the collections 


all the commands are being executed via mongo shell 


