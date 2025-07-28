# Databases

Database is a software which is used to store and manipulate the data 

There are 2 types of DB

1) Relational DB (RDBMS) / SQL DATABASE---(ORACLE , MYSQL , MSSQL , POSTGRESSQL)
2) NO SQL DB ------> MONDODB ,CASSENDRA, REDIS


 RELATIONAL DB
 ---------------

 All the relational Databases have fixed schema --> structure of DB is fixed 
 Data is stored in the Tables 
Relational database are the collection of Tables
SQL language is used to perform operations on the Relational Database

In Reltional Database we can create any number of tables and each table we can add any number of rows 


 NO SQL DB
  ----------

  It does not use SQL Language to perform the operation on DB

  Schema is not fixed in noSQL DB

  In noSQL DB we can store any type of data 
  Structured Data, semi structured data , no structured

  in NoSQL Database we store the data in the Document Format (Object Format)

  NoSQL DB contains something called collections . Collections are like container to hold the documents 


MongoDB Databse can contain any number of collection . Each collection can store any number of Documents . Each Document can Store any number of fields .

 MongoDB stores data in JSON-like documents called BSON (Binary JSON), which makes it flexible and scalable.

🗃️ MongoDB Structure Overview
Database---------->Collection (like a table)--------------------> Document (like a row, but in JSON format)

Ex: 

{
  title: "The Alchemist",
  author: "Paulo Coelho",
  price: 399,
  inStock: false,
  publisher: {
    name: "HarperOne",
    year: 1988
  }
}

to work with mongoDB , mongoDB server must be installed , 
--->inside mongoDB server we can create any number of database 

---> in each Database we cann create any number of collection

---> In each collection we can create any number of Document 

---> In each Document we can have any number of fields 



3 ways to connect with mongo server
Mongo Shell
Node/Express/java/python
Tool (MongoDb compass)  -----> ( GUI )


Internally MongoDB uses JS language 

Hence to perform any action(add/delete/update/access) we will use JS


