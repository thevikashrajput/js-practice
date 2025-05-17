/*Write a function customFilter that takes an array and a callback function, and returns a new array containing only the elements that pass the test implemented by the callback.*/

function customFilter(array, callback) {
    const result = []
    for(let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            result.push(array[i])
        }
    }
    return result;
}
console.log(customFilter([1,2,3,4], n => n % 2 === 0))

/*Create a function multiplier(factor) that returns a function. The returned function takes a number and returns it multiplied by factor.*/

function multiplier(factor) {
    return function(n) {
        return n * factor
    }
}
const double = multiplier(2)
console.log(double(50))

/*Write a function customMap that mimics Array.prototype.map using a nested function inside it.*/

function customMap(array, callback) {
    function mapper(arr, cb) {
        const result = []
        for (let i = 0; i< arr.length; i++) {
            result.push(cb(arr[i], i, arr))
        }
        return result
    }
    return mapper(array, callback)
}

const numbers = [1,2,3,4]
const squared = customMap(numbers, function(num) {
    return num * num
})
console.log(squared);

/*Write a function compose(f, g) that returns a new function. The returned function takes an input x and applies g to x, then f to the result.*/

function compose(f, g) {
    return function(x){
        
        return f(g(x));
    }
}
// usage
function addOne(x) {
    return x + 1
}

function multiplyByTwo(x) {
    return x * 2
}
// composing the fns
const composedFunction = compose(addOne, multiplyByTwo)
// calling the composed fn with an input
const result = composedFunction(3)
console.log(result);

/*Write a function once(fn) that returns a new function. The new function will call fn only the first time it's invoked and return the same result for subsequent calls.*/

function once(fn) {
    let called = false
    let result;

    return function(...args) {
        if (!called) {
            result = fn(...args)
            called =true
        }
        return result
    }
}
// usage
const myFunction = once((x) => x *2)
console.log(myFunction(5));
console.log(myFunction(10));
console.log(myFunction(20));
