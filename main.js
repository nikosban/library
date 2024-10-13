//dialog box
const dialog = document.getElementById("addModal");

//assign an id number to each book
let id = 0;

//initiate the library array
const library = [];

//create the book object
function Book (id, title, author, pages, read) {
    this.id = id,
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read;
}

//create a book based on input
function createBook () {
    const newBook = new Book (
        id += 1,
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

    createItem();
}

//create the book in the ui
function createItem () {
    const bookArea = document.getElementById("bookArea");

    library.forEach((bookItem) => {
        const itemBox = document.createElement("div")
        const bookTitle = document.createElement("h5");
        const bookAuthor = document.createElement("p");
        const bookPages = document.createElement("p");
        const removeBtn = document.createElement("button")

        bookTitle.textContent = bookItem.title;
        bookAuthor.textContent = `by ${bookItem.author}`;
        bookPages.textContent = bookItem.pages;
        removeBtn.textContent = "Remove";
        removeBtn.className = "removeBtn";
        removeBtn.setAttribute("data-id", bookItem.id);

        itemBox.appendChild(bookTitle);
        itemBox.appendChild(bookAuthor);
        itemBox.appendChild(bookPages);
        itemBox.appendChild(removeBtn);

        bookArea.appendChild(itemBox);
    
    });

}

//remove a book
const rmvBtn = Array.from(document.getElementsByClassName("removeBtn"));

rmvBtn.forEach((button) => {
    button.addEventListener("click", () => {
        const itemID = button.getAttribute("data-id")
        removeItem(itemID);
    })
})

function removeItem(itemID) {
    const index = library.findIndex(book => book.id === itemID);
    console.log(index);
}

//show the modal
document.getElementById("addBtn").addEventListener("click", () => {
    dialog.showModal();
})

//close the modal
document.getElementById("submit").addEventListener("click", (event) => {
    event.preventDefault();
    createBook();
    dialog.close();
})
