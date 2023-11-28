const myLibrary = [];

//the constructor
function Book(author, title, numPages, read){
  this.Author = author;
  this.title = title;
  this.numPages = numPages;
  this.read = read;
}

function addBookToLibrary(book){
 myLibrary.push(book);
}

const Book1 = new Book("James Clear", "Atomic Habits", 314, "yes");
console.log(Book1.Author);
addBookToLibrary(Book1);
console.log(myLibrary);
const Book2 = new Book("James Clear", "Atomic Habits", 314, "yes");
addBookToLibrary(Book1);
console.log(myLibrary);

myLibrary.forEach(element => {
    console.log(element);
});