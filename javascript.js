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

const addBtn = document.querySelector('#addBtn');
const dialog = document.querySelector('dialog');
const addClose = document.querySelector('#addClose');
const author = document.querySelector('#author');
const title = document.querySelector('#title');
const numPages = document.querySelector('#numPages');
const read = document.querySelector('#read');
const output = document.querySelector('#output');

// for outputs
const authorName = document.createElement('p');
const bookTitle = document.createElement('p');
const bookNumPages = document.createElement('p');


addBtn.addEventListener("click", ()=>{
    dialog.showModal();
})

author.addEventListener('input', ()=>{
    authorName.textContent = author.value;
})

title.addEventListener('input', ()=>{
    bookTitle.textContent = title.value;
})

numPages.addEventListener('input', ()=>{
    bookNumPages.textContent = numPages.value;
})




addClose.addEventListener("click", (event)=>{
    event.preventDefault();// We don't want to submit this fake form
    output.appendChild(authorName);
    output.appendChild(bookTitle);
    output.appendChild(bookNumPages);
    dialog.close(authorName);
})