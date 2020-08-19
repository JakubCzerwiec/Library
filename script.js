/* Set up variables */

let myLibrary = [];
let addForm = document.querySelector('.addForm');
let shelf = document.querySelector('.shelf');
let inputPlaceholder = document.getElementsByTagName('input');


/* Book constructor */

function Book (title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}


/* Adding book to Library */

addForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let read = document.getElementById('read').checked;

    let book = new Book (title, author, pages, read);

    myLibrary.push(book);
    console.log(myLibrary)
    render()
    clearInput()
})


/* Rendering books on the screen */

function render () {
    shelf.innerHTML = '';
    for (let i = 0; i < myLibrary.length; i++) {

            let bookAuthor = myLibrary[i].author;
            let bookTitle = myLibrary[i].title;
            let bookPages = myLibrary[i].pages;
            let bookRead;

            if (myLibrary[i].read == true) {
                bookRead = 'I have read it.'
            } else {
                bookRead = 'I did not read it.'
            }


            shelf.innerHTML += `<div class="volumin vol${[i]}"></div>`;

            let vol = document.querySelector(`.vol${[i]}`);
            vol.innerHTML += `<div class="title">Title: ${bookTitle} </div>` + 
                            `<div class="author">By: ${bookAuthor} </div>` +
                            `<div class="pages">No. of pages: ${bookPages} </div>` +
                            `<div class="read">${bookRead} </div>`;
    }
} 

function clearInput() {
    for (let i = 0; i < inputPlaceholder.length-1; i++) {
        inputPlaceholder[i].value = '';
    }
    
}
