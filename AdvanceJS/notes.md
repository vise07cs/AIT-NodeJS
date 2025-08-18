# Advance JS Notes 
This sectioin contains Advance JS topics alson with code implementation in seperate js file 

# (1) Execution Context in JS

 Everthing in JS happens inside the Execution Context . 


 Execution Context — this is the backbone of how JavaScript runs your code, so once you really get it, many other advanced topics will click naturally.

An Execution Context (EC) is the environment in which JavaScript code is evaluated and executed.

Whwnever we run a JS program , A Global EC is created 

JavaScript has 2 main types of execution contexts:

1)Global Execution Context (GEC) – created once when the script starts.

2)Function Execution Context (FEC) – created every time a function is called.

Each Execution Context goes through two phases:


Phase 1 – Creation Phase (Memory creation Phase)
Phase 2 – Execution Phase(code Execution Phase)

Phase1: Creation Phase (Memory creation Phase)
--> In this phase JS allocates memory to all the variables and functions 

variables: undefined   ---> a spl value , undefined is allocated
func: {......}  ----> the whole function is copied to the memory space

Phase 2 – Execution Phase(code Execution Phase)
Code runs line-by-line.
Variables get their assigned values.
Functions are executed

Whenever a function is invoked or called , a brand new EC is created (Function EC)

Memory is allocated to variables and functions 

As soon as the function is over , EC gets destroyed 
Once the whole program is finished , the whole Global Execution context gets destroyed

JS manages all of these tasks using a call Stack 

JavaScript is single-threaded → it uses one call stack.

GEC goes first.

When you call a function → a new FEC(Functional EC) is created and pushed on top.

When the function finishes → its context is popped from the stack.

Lets understand it better with few code examples :(e1.js)

//code 1

let n=2;
function sqr(num){
  let ans= num * num;
  return ans;
}
console.log(sqr(n));

console.log(sqr(5));



######################################### (For Code1)

Step 1 – Global Execution Context (GEC) Creation
When the script starts, JavaScript creates the GEC.

Memory Creation Phase (Hoisting)
n → undefined (variables declared with let are not accessible before initialization → Temporal Dead Zone (TDZ))

sqr → {........} ----> function object (functions are fully hoisted)



Execution Phase (line by line)


Line 1: let n = 2; → now n = 2   

Line 3–6: function sqr is already stored in memory (no execution yet, only definition)

Line 8: console.log(sqr(n));

sqr(n) → triggers Function Execution Context for sqr (first call)


A new EFC is created 

 Step 2 – Function Execution Context (FEC) for sqr(n)

Memory Creation Phase

num → undefined

ans → undefined

 Execution Phase

num = 2 (passed from n)

ans = num * num → 2 * 2 = 4

return ans → returns 4 to the calling place (console.log)
After return, FEC is popped.

output =4  (on the console)


SEcond call : console.log(sqr(5));

Same process as above:

📌 Memory Creation Phase

num → undefined

ans → undefined

📌 Execution Phase

num = 5

ans = 25

return 25

After return, FEC is popped.

final output 
4
25

# (2) Hoisting

Hoisting is a phenomenon in JS where variables and functions can be accessed even before initialization .

Hoisting happens for variables and functions, but the behavior differs between var, let, const, and function types.

 How Hoisting Works
When JavaScript runs your code:

Memory Creation Phase:

Variables are stored in memory (with different default values depending on var, let, const).
Function declarations are stored with their full body.

Execution Phase:

Code runs line-by-line, assigning values to variables.


 var 

console.log(a); // undefined
var a = 10;
console.log(a); // 10

Variables declared with var are initialized to undefined during hoisting

let and const 

console.log(b); // ❌ ReferenceError: Cannot access 'b' before initialization
let b = 20;

let and const are hoisted but stay in the Temporal Dead Zone (TDZ) from the start of the block until their declaration is executed.

Accessing them before initialization throws an error.

Same for const (but also requires an immediate assignment).


Hoisting with Function Declarations:

sayHi(); // "Hello"

function sayHi() {
  console.log("Hello");
}


Function declarations are fully hoisted with their definition, so you can call them before their definition appears.

Hoisting with Function Expressions

sayHello(); // ❌ TypeError: sayHello is not a function

var sayHello = function() {
  console.log("Hello");
};

The var sayHello is hoisted → initialized as undefined.

The assignment (function expression) happens during execution.

Calling before assignment → undefined() → TypeErro

==> Example with all the above contexts

console.log(x);    // undefined
// console.log(y); // ReferenceError
// console.log(z); // ReferenceError

var x = 5;
let y = 6;
const z = 7;

greet(); // "Hi from function declaration!"

function greet() {
  console.log("Hi from function declaration!");
}

// sayBye(); // ❌ TypeError
var sayBye = function() {
  console.log("Bye from function expression!");
};

Guess the output of the following code (h1.js)

console.log(printName);
console.log(a);
var a = 3;
var printName = (name) => {
console.log(name)
}

output => undefined undefined 

################################################################################

1)Memory Creation Phase (Hoisting) in Global Execution Context

During the Creation Phase:

var a → hoisted and initialized to undefined

var printName → hoisted and initialized to undefined
(because it’s a variable holding a function expression, not a function declaration)

Function expressions are not hoisted with their body, only the variable is hoisted.


 2)Execution Phase (Line by Line)

console.log(printName);
At this point, printName is still undefined (because assignment happens later).
console--> undefined

console.log(a);
a is also undefined at this moment.
console-> undefined

var a = 3;
Assigns value 3 to a in memory.

var printName = (name) => {
  console.log(name);
}
Now printName is assigned a function object (arrow function).


a = 3

printName = undefined


 a=3 , but at the moment you log a in your code, the value hasn’t been assigned yet. That’s the key point with hoisting:

final output ==  undefined undefined




# window object 
In browsers, the window object is the global object.
All global variables and functions you create with var become properties of window.
It also provides built-in browser APIs (alert, prompt, fetch, etc.).

in browser console
var x = 10;
console.log(window.x); // 10

let y = 20;
console.log(window.y); // undefined (let/const don't attach to window)

wont work in nodeJS ---> In Node.js, there’s no window — the global object is global.


# 2️⃣ this Keyword
this refers to the execution context’s owner — it depends on how a function is called, not where it’s defined.

console.log(this); // window object


let obj = {
  name: "Vikram",
  greet: function() {
    console.log(this.name);
  }
};
obj.greet(); // "Vikram"

Here this → the object that owns the method.

Arrow Functions and this
Arrow functions do not have their own this — they inherit it from their lexical scope (the scope where they are defined).

let obj = {
  name: "Vikram",
  greet: () => {
    console.log(this.name);
  }
};
obj.greet(); // undefined (this comes from global scope here)



# Lexical Scoping

Lexical scope means the scope is determined by the position of code when it’s written (not when it’s executed).
A function can access variables from:

Its own scope
Parent scope
Global scope

Ex: 

let a = 10;

function outer() {
  let b = 20;

  function inner() {
    let c = 30;
    console.log(a, b, c); // 10 20 30
  }

  inner();
}

outer();

inner → can access b (from outer) and a (global) because of lexical scope.


window → The global object in browsers.
this → Refers to whoever owns the current execution context (varies by how it’s called).
Lexical scoping → Decides how variables are found (where function is written, not who calls it).

var a = 2;

var c = 2;



# Closures
Function along with its Lexical Scope

A closure happens when a function “remembers” variables from the scope in which it was created, even after that outer scope is gone.

function outer() {
    let counter = 0;

    function inner() {
        counter++;
        console.log(counter);
    }

    return inner;
}

const fn = outer(); // outer() finishes, but 'counter' is remembered
fn(); // 1
fn(); // 2
fn(); // 3
 
#############################################


inner() still has access to counter because of closure.
Even though outer() execution is done, its lexical environment is kept alive in memory for inner().

Common uses:

Data privacy
Function factories
Maintaining state without global variables


Best example of closure


function outer(){
  let username = "Vikram";
      // console.log(secret);  // ReferenceError: secret is not defined

  
  function inner(){
     console.log("Inner1 function");
    let secret=123;
    console.log(username);
   
  }

  function inner2(){
    console.log("Inner2 function");
    console.log(username);
    // console.log(secret); ----> error: secret is not defined
  }

  
  inner();
  inner2();
  console.log("Outer function");



}
outer(); 

output:
Inner1 function
Vikram
Inner2 function
Vikram

Best way to understand closure ---> In the above exapmle inner and inner2 are siblings , inner2 is not able to access secret variable of inner1 . This means here siblings cannot share property among them .


The parent (outer) can also not access the property of child inner (secret variable is not accessible )

However both inner and inner2 can access property of parent outer (username is accessible by both )  



# setTimeout
The setTimeout function schedules a function to run after a delay (in ms).
It doesn’t block code — JS will continue executing the next lines while waiting.

console.log("Start");

setTimeout(() => {
    console.log("Inside setTimeout");
}, 2000); // Runs after ~2s

console.log("End");

output:
Start
End
Inside setTimeout



JS is single-threaded but uses the Event Loop.
setTimeout puts the callback in the Callback Queue, and it runs only when the call stack is empty.



for (var i = 1; i <= 3; i++) {
    setTimeout(() => console.log(i), 1000);
}
// Output after 1s: 4, 4, 4  (not 1, 2, 3)

var is function-scoped, so all timeouts share the same i (which is 4 after the loop).



for (let i = 1; i <= 3; i++) {
    setTimeout(() => console.log(i), 1000);
}
// Output: 1, 2, 3


# Block Scope

Block scope means a variable is only accessible inside the {} block where it is defined.

let and const are block-scoped.

var is function-scoped, not block-scoped.

{
    let x = 10;
    const y = 20;
    var z = 30;
}

console.log(typeof x); // "undefined" (Error if directly accessed)
console.log(typeof y); // "undefined" (Error if directly accessed)
console.log(z);        // 30 ✅ (var is NOT block scoped)



#  Shadowing

let a = 100;

{
    let a = 50;  // Shadows outer 'a'
    console.log(a); // 50
}

console.log(a); // 100

If you shadow a variable declared with let or const using var in the same scope, it’s illegal.

let b = 10;

{
    var b = 20; // ❌ SyntaxError: Identifier 'b' has already been declared
}



You can shadow let with another let, or var with another var, in different scopes.

var c = 10;

{
    let c = 20; // ✅ Legal (different scope)
    console.log(c); // 20
}

console.log(c); // 10




# Call apply and bind

They all let you explicitly set the value of this when calling a function.

call()

Calls the function immediately.

Pass arguments individually (comma-separated).

function greet(city, country) {
    console.log(`Hello, my name is ${this.name} and I live in ${city}, ${country}.`);
}

const person = { name: "Vikram" };

greet.call(person, "Delhi", "India");

// Output: Hello, my name is Vikram and I live in Delhi, India.


. apply()
Same as call(), but arguments are passed as an array.

Useful when you already have arguments in an array.

greet.apply(person, ["Delhi", "India"]);

// Output: Hello, my name is Vikram and I live in Delhi, India.

 bind()

Returns a new function with this permanently set.

Does not call immediately — you must invoke the returned function yourself.

const boundGreet = greet.bind(person, "Delhi", "India");
boundGreet();
// Output: Hello, my name is Vikram and I live in Delhi, India.

