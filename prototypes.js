/*Objective: Add a method to a constructor function's prototype.*/

function Person(name, age) {
  this.name = name;
  this.age = age;
}

// TODO: Add a method to the prototype that returns the person's info as a string
Person.prototype.getInfo = function () {
  return `${this.name} is ${this.age} years old.`;
};

const p1 = new Person("Alice", 25);
console.log(p1.getInfo()); // should print: "Alice is 25 years old."

/*Objective: Make one constructor inherit from another using prototypes.*/

function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function () {
  return `${this.name} makes a noise.`;
};

function Dog(name, breed) {
  Animal.call(this, name);
  this.breed = breed;
}

// TODO: Set up prototype inheritance from Animal
// TODO: Override the speak method to say: "Buddy the Labrador barks."
Dog.prototype = Object.create(Animal.prototype);

Dog.prototype.constructor = Dog;

Dog.prototype.speak = function () {
  return `${this.name} the ${this.breed} barks`;
};

const d1 = new Dog("Buddy", "Labrador");
console.log(d1.speak()); // should print: "Buddy the Labrador barks."

/*Objective: Add a custom method to a built-in type (like Array).*/

// TODO: Add a method to Array.prototype called `sum`
// It should return the sum of numeric elements in the array
Array.prototype.sum = function () {
  return this.reduce((acc, val) => {
    if (typeof val === "number") {
      return acc + val;
    }
    return acc;
  }, 0);
};
const nums = [1, 2, 3, 4];
console.log(nums.sum()); // should print: 10

/*Objective: Distinguish between own properties and inherited ones.*/

function Car(make, model) {
  this.make = make;
  this.model = model;
}

Car.prototype.getDetails = function () {
  return `${this.make} ${this.model}`;
};

const myCar = new Car("Toyota", "Corolla");

// TODO: Write a function that logs only the object's *own* properties
function logOwnProperties(obj) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      console.log(`${key}: ${obj[key]}`);
    }
  }
}
logOwnProperties(myCar);

// Expected Output:
// make: Toyota
// model: Corolla

/*Build a prototype chain with more than one level.*/

function LivingBeing() {}

LivingBeing.prototype.isAlive = function () {
  return true;
};

function Mammal() {}
Mammal.prototype = Object.create(LivingBeing.prototype);
Mammal.prototype.constructor = Mammal;

function Human(name) {
  this.name = name;
}
Human.prototype = Object.create(Mammal.prototype);
Human.prototype.constructor = Human;

// TODO: Add a method to Human.prototype that says hello using the name
// Ensure the prototype chain works for isAlive()
Human.prototype.sayHello = function() {
    return `Hello, I'm ${this.name}`
}

const john = new Human("John");
console.log(john.sayHello()); // "Hello, I'm John"
console.log(john.isAlive());  // true (inherited from LivingBeing)
