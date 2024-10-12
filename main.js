const bookTitle = document.getElementById("title");
const bookAuthor = document.getElementById("author");
const bookPages = document.getElementById("pages");
const bookRead = document.getElementById("read");
const submitButton = document.getElementById("submit");

submitButton.addEventListener("click", () => {
    createBook();
})


//initialise the library
let library = [];


//initialise the constructor
function Book (title, author, pages, read) {

    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read;
}

function createBook() {
    const newBook = new Book (
        title = bookTitle.value,
        author = bookAuthor.value,
        pages = bookPages.value,
        read = bookRead.checked
    )

    addBook(newBook);
}


// add book to library
function addBook (newBook) {

    library.push(newBook);
    console.log(library);
}


