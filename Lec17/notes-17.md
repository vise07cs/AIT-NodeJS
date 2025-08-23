What is NodeJS ?

NodeJS is not a framework like Spring/SpringBoot 

NodeJS is  is a Javascript  runtime or  Environment of JS

It helps to execute JS code outside the browser


Browser is also a runtime of JS . We can run JS on browser -------> Browser contains JS Engine (written in C++)---> we can run js code on browser due to JS Engine
(Google --> v8 engine)
(Mozilla --> SpiderMonkey)
(Edge --->Chakra (but  now uses v8 engine))

NodeJS internally uses v8 engine only

Before 2010 JS was exxecuted only in browser
2010---> nodeJS was invented 

Now JS can be used outside the browser also

Now its possible to develop any type of Application using JS
 ---------------------------------

NodeJS uses callback mecahnism ; it is event based model 
it uses eventQueue / eventLoop / threadPool



nodeJS architecture

EventQueue ------------------> eventLoop -----------------------> threadPool


Browser provides DOM / BOM APis -----> we can maipulate the documents andb rowser



NodeJS Environment provides us in built APIs (pre defined functions callled  modules / in built modules )


Ex: OS modules / fileSystem Module / Events / HTTP module 


In NodeJS there are 3 types of module 
1) core / inbuilt module -------> given by NodeJS people  Ex: (FSmodule / os/ http/stream/event )
2) npm module ---> 3rd party modeule(Ex: jwt / mongoose / nodemon/ payment / nodemail  )
3) Custom modules ( we can create our own module)


In next session we will cerate :----> webServer using NodeJS inbuilt module called HTTP
and also explore fs module  (to read write and delete content from a file)






