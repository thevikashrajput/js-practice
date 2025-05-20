/*Create a class called Car with properties make, model, and year. Add a method getDetails() that returns a string with all the car details.*/

class Car {
    constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    }
    getDetails() {
        return `${this.make} ${this.model} (${this.year})`
    }
}

const myCar = new Car("Tesla", "Model 3", 2020);
console.log(myCar.getDetails());

/*Create a class Rectangle that takes width and height. Add methods area() and perimeter() to calculate the area and perimeter.*/

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    area () {
        return this.width * this.height
    }

    perimeter () {
        return 2*(this.height + this.width)
    }
}

const rect = new Rectangle(10, 5)
console.log(rect.area());
console.log(rect.perimeter());

/*Create a base class Animal with a method makeSound(). Then create a subclass Dog that overrides makeSound() to return "Woof!".*/

class Animal {
    makeSound() {
        return "foo bar"
    }
}
class Dog extends Animal {
    makeSound() {
        return "woof!"
    }
}

const foobarAnimal = new Animal()
const myDog = new Dog()

console.log(foobarAnimal.makeSound());
console.log(myDog.makeSound());

/*Create a class MathHelper with a static method square(num) that returns the square of a number.*/

class MathHelper {
    static square(num) {
        return num*num
    }
}

console.log(MathHelper.square(4));

/*Create a class Person with name and age, and a method introduce(). Then, create a class Student that extends Person and adds a grade property. Override introduce() to include the grade.*/

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    introduce() {
        return `Hi, I'm ${this.name} and ${this.age} years old`
    }
}

class Student extends Person {
constructor(name, age, grade) {
    super(name, age)
    this.grade = grade;
}
introduce() {
    return `Hi, I'm ${this.name}, ${this.age} years old and my grade is ${this.grade}`;
}
}

const student = new Student("Elon", 22, "F")
console.log(student.introduce());
