/*Use private fields and methods to encapsulate account details.*/
// Create a BankAccount class with the following features:
// - Private balance property
// - deposit(amount) method
// - withdraw(amount) method
// - getBalance() method

// ➤ Use `#balance` to make the balance private
class BankAccount {
  #balance;

  constructor(initialBalance) {
    if (typeof initialBalance !== "number" || initialBalance < 0) {
      throw new Error("Invalid initial balance");
    }
    this.#balance = initialBalance;
  }

  deposit(amount) {
    if (typeof amount !== "number" || amount <= 0) {
      return;
    }
    this.#balance += amount;
  }

  withdraw(amount) {
    if (typeof amount !== "number" || amount <= 0 || amount > this.#balance) {
      return;
    }
    this.#balance -= amount;
  }

  getBalance() {
    return this.#balance;
  }
}

// Test:
const account = new BankAccount(100);
account.deposit(50); // balance = 150
account.withdraw(70); // balance = 80
console.log(account.getBalance()); // Should return 80

/*Create a base Shape class with abstract behavior.*/
// Create an abstract class Shape with a method getArea()
// Create subclasses: Circle and Rectangle that implement getArea()

// ➤ Use throw new Error() in base class to enforce abstraction
class Shape {
  constructor() {
    if (new.target === Shape) {
      throw new Error("Cannot instantiate abstract class Shape directly");
    }
  }
  getArea() {
    throw new Error("getArea() must be implemented by subclass");
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }
  getArea() {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }
  getArea() {
    return this.width * this.height;
  }
}

// Test:
const c = new Circle(5);
const r = new Rectangle(4, 6);
console.log(c.getArea()); // Should return area of circle
console.log(r.getArea()); // Should return area of rectangle

/*Use method overriding to demonstrate polymorphism.*/
// Create a base class Animal with a method speak()
// Subclasses Dog, Cat override speak() to return different sounds

class Animal {
  constructor() {}
  speak() {
    return "Generic animal sound";
  }
}

class Dog extends Animal {
  speak() {
    return "Woof";
  }
}
class Cat extends Animal {
  speak() {
    return "Meow";
  }
}
// Test:
const animals = [new Dog(), new Cat()];
animals.forEach((animal) => console.log(animal.speak()));

Output: "Woof", "Meow";

/*Create a class that uses getters/setters to convert between Celsius and Fahrenheit.*/
// Create a class Temperature with a celsius property
// Add:
// - get fahrenheit() to return converted value
// - set fahrenheit(value) to update celsius accordingly

class Temperature {
    constructor(celsius) {
        this._celsius = celsius
    }

    get celsius() {
        return this._celsius
    }

    set celsius(value) {
        this._celsius = value;
    }

    get fahrenheit() {
        return (this._celsius * 9) / 5 + 32
    }

    set fahrenheit(value) {
        this._celsius = ((value - 32) * 5) / 9
    }
}
// Test:
 const temp = new Temperature(0);
 console.log(temp.fahrenheit); // 32
 temp.fahrenheit = 212;
 console.log(temp.celsius); // 100

/*Use encapsulation, getters/setters, and abstraction in a real-world use case.*/
// Create a base class Person with name, age
// Create Student subclass with private grades array
// Add:
// - addGrade(grade)
// - get averageGrade (getter)
// - Override toString() method

class Person{
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }

    get name() {
      return this._name;
    }

    get age() {
      return this._age
    }

    set name(newName) {
      if (typeof newName === 'string' && newName.length > 0) {
        this._name = newName
      }
    }

    set age(newAge) {
      if (typeof newAge === 'number' && newAge > 0){
        this._age = newAge
      }
    }

    toString() {
      return `${this.name} (${this.age})`;
    }
}


class Student extends Person {
  #grades;

  constructor(name, age) {
    super(name, age)
    this.#grades= []
  }

  addGrade(grade) {
    if (typeof grade === 'number' && grade >= 0 && grade <= 100) {
      this.#grades.push(grade)
    }
  }

  get averageGrade() {
    if (this.#grades.length === 0) return 0;
    const sum = this.#grades.reduce((acc, val) => acc + val, 0)
    return sum / this.#grades.length
  }

  toString() {
    return `${super.toString()} - Avg Grade: ${this.averageGrade}`
  }
}

// Test:
 const student = new Student('Alice', 20);
 student.addGrade(90);
 student.addGrade(80);
 console.log(student.averageGrade); // 85
 console.log(student.toString()); // Alice (20) - Avg Grade: 85
