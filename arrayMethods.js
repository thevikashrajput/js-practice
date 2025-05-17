/*1. Reverse an Array
Write a function reverseArray(arr) that takes an array arr and returns a new array where the elements are in reverse order.*/

function reverseArray(arr) {
  return arr.reverse()
}
console.log(reverseArray([1,2,3,4]))

/*2. Remove Duplicates from an Array
Write a function removeDuplicates(arr) that takes an array arr and returns a new array with duplicates removed. You can use any array method you like.*/

function removeDuplicates(arr) {
  return [...new Set(arr)]
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));

/*3. Find the Maximum Element
Write a function findMax(arr) that takes an array arr of numbers and returns the largest number in the array using array methods like reduce() or Math.max().*/

function findMax(arr) {
  return Math.max(...arr);
}
console.log(findMax([1,3,7,0,5]));

/*4. Sum of Array Elements
Write a function sumArray(arr) that takes an array arr of numbers and returns the sum of all the elements in the array using array methods.*/

function sumArray(arr) {
  return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
}
console.log(sumArray([1,2,3,4,5]));

/*5. Flatten a Nested Array
Write a function flattenArray(arr) that takes a nested array arr (array of arrays) and returns a new array with all the nested elements flattened to a single level.*/

function flattenArray(arr) {
  return arr.flat(Infinity)
}
console.log(flattenArray([1, [2, 3], [4, [5, 6]]]));