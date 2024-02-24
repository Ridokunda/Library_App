console.log("hello world")

const myLibrary = [];

function Book(name, author, pages, read){
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(name, author, pages, read){
    let book = new Book(name, author, pages, read);
    myLibrary.add(book);
}