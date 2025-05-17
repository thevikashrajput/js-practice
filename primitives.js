/*1. Type Conversion with Numbers
Objective: Practice converting strings to numbers and performing arithmetic operations.*/

let str1 = "42";
let str2 = "8.5";

// Convert both strings to numbers and calculate the sum

let sum = parseFloat(str1) + parseFloat(str2)

console.log("Sum:", sum); // Expected output: 50.5

/*2. String Length and Concatenation
Objective: Work with string properties and the + operator.*/

let firstName = "Alice";
let lastName = "Johnson";

// Concatenate the full name and calculate the length of the full name string

fullName = `${firstName} ${lastName}`
fullNameLength = fullName.length

console.log("Full name:", fullName); // Expected output: "Alice Johnson"
console.log("Length of full name:", fullNameLength); // Length of the concatenated name

/*3. Boolean Logic
Objective: Practice with boolean values and logical operators (&&, ||, !).*/

let isRaining = true;
let hasUmbrella = false;

// Use boolean logic to determine if you can go outside (you can go if it's not raining or if you have an umbrella)

// Your code here
canGoOutside = !isRaining || hasUmbrella

console.log("Can go outside:", canGoOutside); // Expected output: false

/*4. Null and Undefined Comparison
Objective: Understand the differences between null and undefined.*/

let a = null;
let b = undefined;

// Compare both values using strict equality (===) and loose equality (==)

strictComparison = a ===b
looseComparison = a == b

console.log("a === b:", strictComparison); // Expected output: false
console.log("a == b:", looseComparison); // Expected output: true

/*5. Checking NaN (Not a Number)
Objective: Use isNaN() function to check if a value is NaN.*/

let num1 = "hello";
let num2 = 42;

// Check if num1 and num2 are NaN

isNum1NaN = isNaN(num1)
isNum2NaN = isNaN(num2)

console.log("Is num1 NaN?", isNum1NaN); // Expected output: true
console.log("Is num2 NaN?", isNum2NaN); // Expected output: false
