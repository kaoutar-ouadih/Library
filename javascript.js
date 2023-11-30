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

// read.addEventListener('input', ()=>{
//     readOrNot.textContent = numPages.value;
// })


addClose.addEventListener("click", (event)=>{
    event.preventDefault();// We don't want to submit this fake form
    const myBook = new Book(Name, TitleVar, Pages);
    addBookToLibrary(myBook);

    const authorName = document.createElement('p');
    const bookTitle = document.createElement('p');
    const bookNumPages = document.createElement('p');
    const readOrNot = document.createElement('h3');
    const remove = document.createElement('button');

    //Styling the card and the delete button
    const card = document.createElement('div');
    card.style.backgroundColor = 'white';
    card.style.borderRadius = '8px';
    card.style.boxShadow = '3px 3px 5px rgba(0, 0, 0, 0.1)';
    card.style.padding = '10px';
    remove.style.backgroundColor = '#3464eb';
    remove.style.border = 'none';
    remove.style.borderRadius = '8px';
    remove.style.height = '35px';
    remove.style.width = '80%';

    
    authorName.textContent = myBook.Author;
    bookTitle.textContent = `" ${myBook.title} "`;
    bookNumPages.textContent = `${myBook.numPages} pages`;
    remove.textContent = 'Delete';

    card.appendChild(authorName);
    card.appendChild(bookTitle);
    card.appendChild(bookNumPages);
    if(read.checked){
        console.log("checked");
        readOrNot.textContent = "read";
        readOrNot.style.color = "green";
        card.appendChild(readOrNot);
    }else{
        console.log("unchecked");
        readOrNot.textContent = "not read";
        readOrNot.style.color = 'red';
        card.appendChild(readOrNot);
    }
    card.appendChild(remove);

    container.appendChild(card);

    dialog.close();
})

