/*Write a functional constructor Book that takes title, author, and yearPublished as arguments and assigns them to the object.*/

function Book(title, author, yearPublished) {
  // Your code here
  this.title = title;
  this.author = author;
  this.yearPublished = yearPublished;
}

const book1 = new Book("1984", "George Orwell", 1949);
console.log(book1);

/*Modify the Book constructor to throw an error if any argument is missing.*/

function Book(title, author, yearPublished) {
  // Validate arguments and throw error if missing
  if (
    title === undefined ||
    author === undefined ||
    yearPublished === undefined
  ) {
    throw new Error("Argument missing!");
  }
  this.title = title;
  this.author = author;
  this.yearPublished = yearPublished;
}

try {
  const book2 = new Book("Brave New World"); // Missing author and year
} catch (error) {
  console.error(error.message);
}

/*Add a method getSummary() to the Book prototype that returns a string summary.*/

Book.prototype.getSummary = function () {
  // Return a summary string
  return `${this.title} by ${this.author}, published in ${this.yearPublished}`
};

const book3 = new Book("Sapiens", "Yuval Noah Harari", 2011);
console.log(book3.getSummary());

/*Create a User constructor that expects name (string) and age (number). Throw a TypeError if the types don't match.*/

function User(name, age) {
  // Validate types and throw TypeError if invalid
  if (typeof name !== "string" || typeof age !== "number") {
    throw new TypeError("Invalid args types")
  }
  this.name
  this.age
}

try {
  const user1 = new User("Alice", "twenty");
} catch (error) {
  console.error(error);
}

/*Wrap the Book constructor in a safe factory function that returns a default book if an error is thrown.*/

class BookClass {
    constructor(title, author, yearPublished) {
        if (!title || !author || typeof yearPublished !== 'number') {
            throw new Error("Invalid params for Book")
        }
        this.title = title
        this.author = author
        this.yearPublished = yearPublished
    }
}

function createBook(title, author, yearPublished) {
  try {
    return new BookClass(title, author, yearPublished);
  } catch (e) {
    console.warn("Invalid book data, using default.");
    return new BookClass("The Count of Monte Cristo", "Dumas", 0);
  }
}

const book4 = createBook("Elon Musk", "Walter Isaacson", 2022); // Missing data
console.log(book4);
