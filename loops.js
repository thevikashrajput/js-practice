/*1. Sum of Numbers
Write a program that calculates the sum of all numbers from 1 to 100 using a for loop.*/

for (let i = 0; i <= 100; i++) {
    console.log(i)
    
}

/*2. Factorial of a Number
Write a function that takes a positive integer as input and returns its factorial using a while loop.*/
function factorial (int) {
    if (int < 0) {
        return "must be positive";
    }

    let result = 1
    while (int > 1) {
        result *= int
        int--;
    }
    return result;
}
console.log(factorial(5));

/*3. Fibonacci Sequence
Write a program that prints the first n Fibonacci numbers using a for loop.*/

function fibonacci(n) {
    let a = 0, b = 1
    console.log("Fibonacci sequence:");
    
    for (let i = 0; i < n; i++) {
        console.log(a);
        let next = a + b
        a = b
        b = next
        
    }
}
fibonacci(10);

/*4. Multiplication Table
Write a function that prints the multiplication table for a given number up to 10 using a for loop.*/

function mulTable(n) {
    for (let i = 1; i < 11; i++) {
        console.log(`${n} x ${i} = ${n * i}`);
        
    }
}
mulTable(7)

/*5. Count Even and Odd Numbers
Write a program that counts how many even and how many odd numbers are there between 1 and 50 using a for loop.*/

let evenCount = 0
let oddCount = 0
for (let index = 1; index <= 50; index++) {
    if (index % 2 === 0) {
         evenCount++
    } else {
        oddCount++
    }
    
}
console.log("Even Count:", evenCount)
console.log("Odd Count:", oddCount)

/*Exercise:
Use a while loop to reverse the digits of a number (e.g., 123 → 321).*/

function reverseNum(n) {
    let reverse = 0
    while (n > 0) {
        let digit = n % 10
        reverse = reverse * 10 + digit
        n = Math.floor(n / 10)
    }
    console.log("Reversed number:", reverse)
}
reverseNum(123)

/*Exercise:
Prompt the user to enter a number between 1 and 100. Keep asking until they provide a valid input.*/

// let number

// do {
//     number = prompt("Enter a number:")
//     number = Number(number)
// } while (isNaN(number) || number < 1 || number > 100);

// alert("You have entered a valid number:", number)
// will work in browser

/*Exercise:
Loop through an object and print all its keys and corresponding values.*/

let obj = {
    name: "Superman",
    alias: "Clark Kent",
    loveInterest: "Lois Lane"
}
for (const key in obj) {
    console.log(`${key}: ${obj[key]}`);
    
}

/*Exercise:
Use a for...of loop to count the number of vowels in a given string.*/

function countVowels(str) {
    const vowels = 'aeiouAEIOU'
    let count = 0

    for (let char of str) {
        if(vowels.includes(char)) {
            count++
        }
    }
    return count
}
console.log(countVowels("Hello, world!"));
