


# module Pattern in JS 

Scope in JS 

3 scopes --------------> 


1) Module Scope 
2) Global Scope
3) Function Scope 

Scope defines the accessiblity of a variable or function 

(1) Module Scope -------> to give accessiblity to functions and variables across differnet files using module pattern

2 types of module pattern in JS  :-

1-> common js(Enabled by default in node JS )  (module.export)
2-> es6    ---> ( es6 is used by ReactJS by Defaullt)

You can use any pattern

In JS , 1 file = 1 moduke

we will use common JS in nodeJS , its enabled by default
It provides us Global Object called module ----> pre defined object ---> set of properties present in global object---> exports:{}

Suppose we crated a file1 in which we created 5 functions --   fn1(),fn2(),fn3(),fn4(),fn5()
we want to export only 3 -->(fn1,fn2,fn5)

we will add them in exports ---> exports{fn1,fn2,fn5}

Lets see practically 



in file 2 we will use require which is a predefined function which will import the exported module of file1



in file2

let file1=require("./file1.js");
console.log(file1)----------------------------------> will return an object

file1.f1();-----------------> calling function f1() of file 1  from f2 file

or 

we can also use destructure (file2)

let {f1,f2,f5}=require("./file1.js");

f1()

f2()

f5()


All the above functions will be called 

------------------------------------------------------------------------
Explore Lec5/  file1 , file2 , file3 



=================================================================

In es6 , (used in ReactJS by default )  , to enable es6 module in nodeJS we have to configure and enable it 

to export ---->  default export or named import
to import  ---> default import or named import

