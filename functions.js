/*Create a function multiplyNumbers(a, b) that takes two numbers as arguments and returns their product.*/

function multiplyNumbers(a, b) {
    return a * b
}
console.log(multiplyNumbers(5, 5));

/*Write an arrow function sumOfSquares that takes an array of numbers and returns the sum of the squares of all the elements in the array.*/

const sumOfSquares = arr => arr.reduce((sum, num) => sum + num * num, 0)
console.log(sumOfSquares([1,2,3,4]));

/*Define an object car that has the following properties: make, model, and year. Then, add a method carInfo() that returns a string using this to reference the object properties.*/

const car = {
    make: 'Tesla',
    model: 'Cybertruck',
    year: 2020,
    carInfo: function() {
        return `Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`
    }
}
console.log(car.carInfo());

/*Create an object counter with two properties: count (initial value 0) and a method increment. The increment method should use an arrow function that increases count by 1 each time it is called.*/

const counter = {
    count: 0,
    increment: () => {
        this.count++;
    }
}
counter.increment()
console.log(counter.count)
// arrow function won't work because they capture this from surrounding scope (lexical this)

/*Create an object person with a method greet() that uses this to refer to the object’s name. Then, create a function delayedGreet() that will use setTimeout to call greet() after a delay of 1000ms. Ensure that the this context inside setTimeout is still referring to person by using bind().*/

const person = {
    name: "Clark Kent",
    greet: function() {
        console.log(`Hello ${this.name}`);
        
    }
}

function delayedGreet() {
    setTimeout(this.greet.bind(person), 1000)
}

delayedGreet.call(person)