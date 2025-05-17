/*1. Basic Arithmetic Operations
Objective: Practice addition, subtraction, multiplication, and division.*/

let a = 10;
let b = 3;

let addResult = a + b
let subResult = a - b
let mulResult = a * b
let divResult = a / b
let modResult = a % b

console.log("Addition:", addResult);      // 13
console.log("Subtraction:", subResult);   // 7
console.log("Multiplication:", mulResult); // 30
console.log("Division:", divResult);      // 3.33
console.log("Remainder:", modResult);     // 1

/*2. Increment and Decrement
Objective: Use the increment (++) and decrement (--) operators.*/

let x = 5;
let y = 10;

// Increment x by 1, decrement y by 1

x++
y--

console.log("x after increment:", x);  // 6
console.log("y after decrement:", y);  // 9

/*3. Comparing Values
Objective: Practice comparison operators like >, <, >=, <=, ==, and ===.*/

let num1 = 8;
let num2 = 15;
let str1 = "8";

// Use comparison operators to compare the variables and store the results in variables

// Your code here
isGreater = num1 > num2
isEqual = num1 == num2
isStrictEqual = num1 === str1

console.log("Is num1 greater than num2?", isGreater); // false
console.log("Is num1 equal to num2?", isEqual); // false
console.log("Is num1 equal to str1?", isStrictEqual); // false

/*4. String Concatenation
Objective: Use string concatenation and the + operator to combine strings.*/

let firstName = "John";
let lastName = "Doe";

// Concatenate the firstName and lastName to create a full name

fullName = `${firstName} ${lastName}`

console.log("Full name:", fullName); // "John Doe"

/*5. Ternary Operator
Objective: Use the ternary operator ? : to perform conditional operations.*/

let age = 18;

// Check if the age is greater than or equal to 18.
// If true, print "Adult", otherwise print "Minor"

let result = age >= 18 ? "Adult" : "Minor"

console.log(result); // "Adult" if age >= 18, "Minor" otherwise
