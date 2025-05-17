/*1. Check if a number is positive, negative, or zero
Write a function that takes a number as an argument and checks if it is positive, negative, or zero. The function should return a string indicating the result.*/

function checkNumber(num) {
  if (num < 0) {
    return "Negative"
  } else if (num > 0) {
    return "Positive"
    
  }
  else {
    return "It's 0"
  }
}

console.log(checkNumber(0))

/*2. Find the largest of three numbers
Create a function that accepts three numbers as arguments and returns the largest of them.*/

function findLargest(num1, num2, num3) {
  if (num1 >= num2 && num1 >= num3) {
    return num1;
  } else if (num2>= num1 && num2 >= num3) {
    return num2
  }
  else {
    return num3;
  }
}
console.log(findLargest(1,2,3));

/*3. Grade Evaluation
Write a function that takes a score (a number between 0 and 100) and returns the corresponding grade:

A: 90–100

B: 80–89

C: 70–79

D: 60–69

F: Below 60*/

function evaluateGrade(score) {
  if (score < 0 || score > 100) {
    return "Invalid Score"
    
  } else if (score >= 90) {
    return "A"
  } else if (score >= 80) {
    return "B"
  } else if (score >= 70) {
    return "C"
  } else if (score >= 60) {
    return "D"
  } else {
    return "F"
  }
}
console.log(evaluateGrade(85))

/*4. Check if a year is a leap year
Write a function that checks if a given year is a leap year. A year is a leap year if:

It is divisible by 4.

If it is divisible by 100, it must also be divisible by 400.*/

function isLeapYear(year) {
  if (year % 4 == 0 && (year % 100 !== 0 || year % 400 === 0)) {
    return true;
  } else {return false}
}
console.log(isLeapYear(2024))

/*5. Even or Odd Number Checker
Write a function that takes an integer and returns whether it is "even" or "odd".*/

function checkEvenOrOdd(num) {
  if (num % 2 === 0) {
    return "even"
  } else {
    return "odd"
  }
}
console.log(checkEvenOrOdd(7))