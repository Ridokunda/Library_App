const myLibrary = [];

function Book(name, author, pages, read) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
}


//button to add a new book
const btn = document.querySelector('#btn-submit');
btn.addEventListener('click', () => {
    var name = document.getElementById('name').value;
    var author = document.getElementById('author').value;
    var pages = document.getElementById('pages').value;
    var read = document.getElementById('read').value;

    // Prevent adding book if name or author is empty
    if (!name || !author) {
        alert("Please provide both a name and an author for the book.");
        return;
    }

    addBookToLibrary(name, author, pages, read);

    // After adding the book, display the updated books
    displayBooks();
});

//button to clear books
const btnclear = document.querySelector('#clear');
btnclear.addEventListener('click', () => {
    clearBooks();
    // After clearing, reset the display to an empty state
    displayBooks();
});

//function to add a new book to library
function addBookToLibrary(name, author, pages, read) {
    let book = new Book(name, author, pages, read);
    myLibrary.push(book);
}

// Clear books in myLibrary
function clearBooks() {
    myLibrary.length = 0; // Clears the array
}

// Function to display all books
function displayBooks() {
    const right = document.querySelector(".right-side");
    right.style = "display:grid; grid-template-rows: 100px 100px 100px; grid-template-columns:200px 200px 200px; gap:10px;";

    // Clear previous display
    right.innerHTML = "";

    // If there are no books, show a message
    if (myLibrary.length === 0) {
        const message = document.createElement('div');
        message.textContent = "No books in the library.";
        right.appendChild(message);
    } else {
        // Otherwise, display each book
        for (let i = 0; i < myLibrary.length; i++) {
            const div = document.createElement('div');
            div.classList.add('book');
            div.style = "display:flex; flex-direction:column; border: solid 1px black; border-radius:10px; background-color: aqua; padding: 10px; position: relative;";

            const div1 = document.createElement('div');
            const div2 = document.createElement('div');
            const div3 = document.createElement('div');
            const deleteBtn = document.createElement('button');

            div1.textContent = "Book name: " + myLibrary[i].name;
            div2.textContent += "Book Author: " + myLibrary[i].author;
            div3.textContent += "Number of pages: " + myLibrary[i].pages;

            // Style the delete button
            deleteBtn.textContent = "Delete";
            deleteBtn.classList.add('delete-btn');
            deleteBtn.style = "margin-top: 10px; align-self: flex-end;"; // Ensure button stays inside the box

            // Add click event listener to delete the book
            deleteBtn.addEventListener('click', () => {
                deleteBook(i);
            });

            // Append all elements to the book div
            div.appendChild(div1);
            div.appendChild(div2);
            div.appendChild(div3);
            div.appendChild(deleteBtn);
            right.appendChild(div);
        }
    }
}

// Function to delete a book from the library
function deleteBook(index) {
    myLibrary.splice(index, 1); // Removes the book from the library by index
    displayBooks(); // Re-render the books
}
