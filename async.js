/*Practice using Promises and setTimeout.*/
// Implement the delay function so it can be used like setTimeout but with Promises.

function delay(ms) {
  // Your code here: Return a Promise that resolves after ms milliseconds
  return new Promise(resolve => setTimeout(resolve, ms))
}

// Usage
delay(2000).then(() => console.log("Executed after 2 seconds"));
  
/* Use async/await to run asynchronous operations in sequence.
Call fakeFetch with /api/one then /api/two, sequentially.
Log the result of each fetch.*/
function fakeFetch(url) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Data from ${url}`);
    }, 1000);
  });
}

async function fetchData() {
  // Your code here: Fetch from /api/one then /api/two in order
  const resultOne = await fakeFetch("/api/one")
  console.log(resultOne);

  const resultTwo = await fakeFetch("/api/two")
  console.log(resultTwo);
  
  
}

fetchData();
  

/*Understand parallel execution of Promises and Promise.all.
Run waitAndReturn("First", 2000) and waitAndReturn("Second", 1000) in parallel.

Use Promise.all to await both.

Log results after both complete.*/
function waitAndReturn(msg, time) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(msg), time);
  });
}

async function runTasks() {
  // Run task1 and task2 in parallel
  // Log both results when done
}

runTasks();
  