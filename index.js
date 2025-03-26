const myLibrary = [];

function Book(name, author, pages, read, category) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.category = category; // New category property
}

const btn = document.querySelector('#btn-submit');
btn.addEventListener('click', () => {
    var name = document.getElementById('name').value;
    var author = document.getElementById('author').value;
    var pages = document.getElementById('pages').value;
    var read = document.getElementById('read').checked; // Use .checked for radio button
    var category = document.getElementById('category').value; // Get selected category

    // Prevent adding book if name or author is empty
    if (!name || !author) {
        alert("Please provide both a name and an author for the book.");
        return;
    }

    addBookToLibrary(name, author, pages, read, category);
    displayBooks(); // Display books after adding a new one
});

// Function to add a new book to library
function addBookToLibrary(name, author, pages, read, category) {
    let book = new Book(name, author, pages, read, category);
    myLibrary.push(book);
}

// Function to display all books
function displayBooks() {
    const right = document.querySelector(".right-side");
    right.innerHTML = ""; // Clear previous content
    right.style = "display:grid; grid-template-columns: 200px 200px 200px; gap:10px;";

    if (myLibrary.length === 0) {
        const message = document.createElement('div');
        message.textContent = "No books in the library.";
        right.appendChild(message);
    } else {
        // Display each book
        myLibrary.forEach((book, i) => {
            const div = document.createElement('div');
            div.classList.add('book');
            div.style = "display:flex; flex-direction:column; height: 150px; border: solid 1px black; border-radius:10px; background-color: aqua; padding: 10px; position: relative;";

            const div1 = document.createElement('div');
            const div2 = document.createElement('div');
            const div3 = document.createElement('div');
            const div4 = document.createElement('div');
            const deleteBtn = document.createElement('button');

            div1.textContent = "Book name: " + book.name;
            div2.textContent += "Book Author: " + book.author;
            div3.textContent += "Number of pages: " + book.pages;
            div4.textContent = "Category: " + book.category; // Display the category

            deleteBtn.textContent = "Delete";
            deleteBtn.classList.add('delete-btn');
            deleteBtn.style = "margin-top: 10px; align-self: flex-end;"; // Ensure button stays inside the box

            deleteBtn.addEventListener('click', () => {
                deleteBook(i);
            });

            div.appendChild(div1);
            div.appendChild(div2);
            div.appendChild(div3);
            div.appendChild(div4);
            div.appendChild(deleteBtn);
            right.appendChild(div);
        });
    }
}

// Function to delete a book from the library
function deleteBook(index) {
    myLibrary.splice(index, 1); // Remove book from the array
    displayBooks(); // Re-render books
}
