//dialog box
const dialog = document.getElementById("addModal");

//initiate the library array
const library = [];

//create the book object
function Book (title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read;
}

//create a book based on input
function createBook () {
    const newBook = new Book (
         document.getElementById("title").value,
         document.getElementById("author").value,
         document.getElementById("pages").value,
         document.getElementById("read").checked
    );

    //add book to library
    addBook(newBook);
}

//add book to the library
function addBook(newBook) {
    library.push(newBook);
    console.log(library)
}

document.getElementById("addBtn").addEventListener("click", () => {
    dialog.showModal();
})

document.getElementById("submit").addEventListener("click", (event) => {
    event.preventDefault();
    createBook();
    dialog.close();
})
