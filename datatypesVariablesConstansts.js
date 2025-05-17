/*1. Swap Two Variables
Objective: Practice variable assignment and swapping values using a temporary variable.*/

let a = 5;
let b = 10;

let c = a;
a = b;
b = c;

console.log("a =", a); // should be 10
console.log("b =", b); // should be 5

/*2. Calculate Area of a Circle
Objective: Use constants and numeric types to compute a formula.*/

const PI = 3.14159;
let radius = 7;

// Calculate the area of the circle and store in a variable
// Formula: area = PI * radius^2

let area = PI * Math.pow(radius, 2);

console.log("Area of the circle is:", area); // should print a number

/*3. String Manipulation
Objective: Work with string variables and concatenation.*/

let firstName = "Ada";
let lastName = "Lovelace";

// Create a full name by joining firstName and lastName with a space

let fullName = `${firstName} ${lastName}`

console.log("Full name:", fullName); // Output: Ada Lovelace

/*4. Type Check Practice
Objective: Learn to check data types using typeof.*/

let age = 25;
let name = "Grace";
let isStudent = true;

// Print the type of each variable using typeof

console.log(typeof(age));
console.log(typeof(name));
console.log(typeof(isStudent));


/*
Expected Output:
number
string
boolean
*/

/*5. Convert String to Number
Objective: Practice type conversion from string to number.*/

let numStr1 = "12";
let numStr2 = "8";

// Convert to numbers and add them

numStr1 = parseInt(numStr1)
numStr2 = parseInt(numStr2)
sum = numStr1 + numStr2;


console.log("Sum is:", sum); // Output: 20
