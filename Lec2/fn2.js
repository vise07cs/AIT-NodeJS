// Constructor function
class Person{
  constructor(name, age) {
  this.name = name;
  this.age = age;
  this.sayHello = function () {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  };
}

}

// Creating an object
const person1 = new Person("Vikram", 22);
const person2 = new Person("Aron", 25);

// Using the object
person1.sayHello();  // Output: Hello, my name is Vikram and I am 22 years old.
person2.sayHello();  // Output: Hello, my name is Aron and I am 25 years old.
