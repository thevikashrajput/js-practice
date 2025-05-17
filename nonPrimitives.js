/*1. Accessing Object Properties
Objective: Learn to access and modify properties in an object.*/

let person = {
  name: "John",
  age: 30,
  city: "New York"
};

// Access the "name" and "city" properties and log them

personName = person.name
personCity = person.city

console.log(personName);  // Expected output: "John"
console.log(personCity);  // Expected output: "New York"

/*2. Modifying Object Properties
Objective: Practice adding or modifying properties within an object.*/

let car = {
  make: "Toyota",
  model: "Corolla",
  year: 2020
};

// Change the "year" of the car to 2022
// Add a new property "color" with the value "blue"

car.year = 2022
car.color = "blue"

console.log(car.year);   // Expected output: 2022
console.log(car.color);  // Expected output: "blue"

/*3. Array Manipulation
Objective: Learn how to work with arrays by adding, removing, and accessing elements.*/

let fruits = ["apple", "banana", "cherry"];

// Add "orange" to the end of the array
// Remove the first element (hint: use shift())
// Access the second element and store it in a variable

fruits.push("orange")
fruits.shift()
secondFruit = fruits[1]

console.log(fruits);        // Expected output: ["banana", "cherry", "orange"]
console.log(secondFruit);   // Expected output: "cherry"

/*4. Iterating Over an Object
Objective: Use a for...in loop to iterate through the properties of an object.*/

let user = {
  username: "jane_doe",
  email: "jane@example.com",
  age: 28
};

// Iterate through the object and log both the property name and its value

for (const property in user) {
    console.log(`${property}: ${user[property]}` );
    
}

/*
Expected Output:
username: jane_doe
email: jane@example.com
age: 28
*/

/*5. Flatten an Array of Arrays
Task:
Write a function flattenArray(arr) that takes an array of arrays and flattens it into a single array. The function should handle arrays nested at any level of depth.*/

function flattenArray(arr) {
  let result = []

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
        result = result.concat(flattenArray(arr[i]))
    } else {
        result.push(arr[i])
    }

  }
  return result
}

console.log(flattenArray([1, [2, [3, [4]]]]));
// Expected output: [1, 2, 3, 4]
