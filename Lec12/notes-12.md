
To delete a specefic document from your collection

db.<collection-name>.deleteOne({key:"value"})


 db.myusercollection1.deleteOne({city: 'Patna'})
---->{ acknowledged: true, deletedCount: 1 }

To delete multiple documents at a time


db.<collection-name>.deleteMany({key:"value"})

  db.myusercollection1.deleteMany({city: 'Patna'})


  To update a certain document


  db.<collection-name>.updateOne({<field>},{$set:{<field>}})


   db.myusercollection1.updateOne({name:'neha'},{$set:{city:'Mumbai'}})


using object id

   db.myusercollection1.updateOne({_id:'435354534'},{$set:{city:'Nagpur'}})

we can also add fields using the same property , whatever we need topa dd we have to pass in set 




db.myusercollection1.updateOne({_id: ObjectId('689ae780ecdbf52f59eec4af')},{$set:{city:'Nagpur'}})



to update multiple documents at the same time

db.<collection-name>.updateMany({<common-field>},{$set:{<field>}})




------------------------------------------------------------------------------------------------------

3 ways to connect to mongoDb server 

(1) Mongo Shell
(2) Node/Express/java/python
(3) Tool (MongoDb compass)  -----> ( GUI )



Now we will connect using  Node/Express/-------- for this we need certain package/module/libraray

One of the most popular package is mongoose

Same happens with other prog language also 

Ex:

JAVA/Python <----> package <---------> mongoDB  

Every pacakge will have officail documentation ---> reading that documentation we can implement the functionality


google ------> mongoDb docs