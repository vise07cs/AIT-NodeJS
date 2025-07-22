ES6 module pattern 

To enable --> create package.json file ---> add 1 property ---> type:"module"


{
  "type":"module"
}

Suppose in some project ES6 module pattern is enabled and we want to enable commonJS module pattern 

{
  "type":"commonjs"
}

In ES6 module pattern there are 2 ways to export and import 

to export ---->  default export or named export
to import  ---> default import or named import


named export ---> prefix the function/variable with export keyword 
named import -----> import {fB,city} from "./fileA.js"


refer to ------------> Lec6/fileA, fileB

------------------------------------------------------------


for default export 

in one file it can be done only once 

export default main;          --> we created a main() function above

to import 
import m from "./fileA.js"
m(); ----------------------------------> main function will be called

we can also import  default exports with named exports

import X, {fB,city} from "./fileA.js"   //X refers to default export


---------------------------------------------------------------------------------

we can use ES6 module patterns without modifying package.json file also

======> change the extension of the files from .js to .mjs  ------------> this way is never used
in the import statement also change to .mjs -----> import m from "./fileA.mjs"