/* Set up variables */

let myLibrary = [];
let addForm = document.querySelector('.addForm');
let shelf = document.querySelector('.shelf');
let inputPlaceholder = document.getElementsByTagName('input');

let volumin = document.querySelectorAll('.volumin');

let formBox = document.querySelector('.addFormBox');

let newBookBtn = document.querySelector('.newBook');


/* Creating Book class */

class Book {
    constructor(title, author, pages, read) {
        this.title = title
        this.author = author
        this.pages = pages
        this.read = read
    }
}


/* Book constructor */

/* function Book (title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
} */

/* Some default books on my shelf */

let book1 = new Book('The bad', 'Leopold T.', '600', true);
let book2 = new Book ('Travelers', 'Jonny Germ', '500', true);

myLibrary.push(book1, book2)
render()


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
    formBox.classList.toggle('hiden')
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
                bookRead = 'YES';

            } else {
                bookRead = 'NO';
            }


            shelf.innerHTML += `<div class="volumin vol${[i]}"></div>`;

            let vol = document.querySelector(`.vol${[i]}`);
            vol.innerHTML += `<div class="title">Title: ${bookTitle} </div>` + 
                            `<div class="author">By: ${bookAuthor} </div>` +
                            `<div class="pages">No. of pages: ${bookPages} </div>` +
                            `<div class="read">Did you read it? ${bookRead} </div>` +
                            `<div class="removeBook"><img src="bin.png"></div>`;
                            

        initiateListeners()                 
    }
    
} 


/* Clearing input values */

function clearInput() {
    for (let i = 0; i < inputPlaceholder.length-2; i++) {
        inputPlaceholder[i].value = '';
    }
}


/* Event listener for 'New Book Button' showing/hiding input form for new book */

newBookBtn.addEventListener('click', () => {
    formBox.classList.toggle('hiden')
})


/* Listeners for changing 'read' status of a book and for 'remove book' button */

function initiateListeners () {
    let readBtn = document.querySelectorAll(`.read`);
    let removeBookBtn = document.querySelectorAll('.removeBook')


    /* Changing 'read' book status */

    readBtn.forEach((item, index) => {
        item.addEventListener('click', () => {
            if (myLibrary[index].read == false) {
                myLibrary[index].read = true;
                
            } else if (myLibrary[index].read == true) {
                myLibrary[index].read = false;
                
            }
            
            render()
        })
    })


    /* Deleting book */

    removeBookBtn.forEach((item, index) => {
        item.addEventListener('click', () => {
            myLibrary.splice(index, 1)

            render()
        })
    })
}