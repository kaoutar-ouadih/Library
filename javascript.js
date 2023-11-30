const myLibrary = [];

//the constructor
function Book(author, title, numPages){
  this.Author = author;
  this.title = title;
  this.numPages = numPages;
//   this.read = read;
}

function addBookToLibrary(book){
 myLibrary.push(book);
}

// const Book1 = new Book("James Clear", "Atomic Habits", 314);
// console.log(Book1.Author);
// addBookToLibrary(Book1);

// myLibrary.forEach(element => {
//     console.log(element);
// });

const addBtn = document.querySelector('#addBtn');
const dialog = document.querySelector('dialog');
const addClose = document.querySelector('#addClose');
const author = document.querySelector('#author');
const title = document.querySelector('#title');
const numPages = document.querySelector('#numPages');
const read = document.querySelector('#read');
const container = document.querySelector('#container');


// for outputs
let Name;
let TitleVar;
let Pages;


addBtn.addEventListener("click", ()=>{
    dialog.showModal();
})

author.addEventListener('input', ()=>{  
    Name = author.value;
})

title.addEventListener('input', ()=>{
    TitleVar = title.value;
})

numPages.addEventListener('input', ()=>{
    Pages = numPages.value;
})

read.addEventListener('input', ()=>{
    readOrNot.textContent = numPages.value;
})


addClose.addEventListener("click", (event)=>{
    event.preventDefault();// We don't want to submit this fake form
    const myBook = new Book(Name, TitleVar, Pages);
    console.log(myBook);
    addBookToLibrary(myBook);

    const authorName = document.createElement('p');
    const bookTitle = document.createElement('p');
    const bookNumPages = document.createElement('p');
    // const readOrNot = document.createElement('button');
    const card = document.createElement('div');
    card.style.backgroundColor = 'white';
    card.style.borderRadius = '8px';
    card.style.boxShadow = '3px 3px 5px rgba(0, 0, 0, 0.1)';
    console.log(myBook.Name);
    authorName.textContent = myBook.Author;
    bookTitle.textContent = myBook.title;
    bookNumPages.textContent = myBook.numPages;

    card.append(authorName);
    card.append(bookTitle);
    card.append(bookNumPages);

    container.appendChild(card);

    dialog.close();
})




// const tab = [{name :"kaoutar", age: 200}, {name :"salma", age: 100}];
// tab.forEach(element => {
//     console.log(element);
//     const nameElt = document.createElement('h3');
//     const ageElt = document.createElement('p');
//     nameElt.textContent = element.name;
//     ageElt.textContent = element.age;
//     container.appendChild(nameElt);
//     container.appendChild(ageElt);

    
// });