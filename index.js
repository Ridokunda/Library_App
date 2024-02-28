

const myLibrary = [];



function Book(name, author, pages, read){
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

let book1 = new Book("GetRich", "Kundi", 300, true);
let book2 = new Book("Cars Guide", "Ridokunda", 200, true);
myLibrary[0] = book1;
myLibrary[1] = book2;

//button to add a new book
const btn = document.querySelector('#btn-submit');
btn.addEventListener('click' , () =>{
    var name = document.getElementById('name').value;
    var author = document.getElementById('author').value;
    var pages = document.getElementById('pages').value;
    var read = document.getElementById('read').value;
    addBookToLibrary(name,author,pages,read);


    clearBooks();
    displayBooks();
});

//button to clear books
const btnclear = document.querySelector('#clear');
btnclear.addEventListener('click' , ()=>{
    clearBooks();
});

const btnDisplay = document.querySelector('#display');
btnDisplay.addEventListener('click' , () => {
    displayBooks();
});

//function to add a new book to library
function addBookToLibrary(name, author, pages, read){
    let book = new Book(name, author, pages, read);
    myLibrary.push(book);
}



function clearBooks(){
    const right = document.querySelector('.right-side');
    right.innerHTML = " ";
}
function displayBooks(){
    const right = document.querySelector(".right-side");
    right.style = "display:grid; grid-template-rows: 100px 100px 100px; grid-template-columns:200px 200px 200px; gap:10px;";
    
    for(let i = 0; i < myLibrary.length; i++){
        const div = document.createElement('div');
        div.classList.add('book');
        div.style = "display:flex; flex-direction:column; border: solid 1px black; border-radius:10px; background-color: aqua; padding: 10px"

        const div1 = document.createElement('div');
        const div2 = document.createElement('div');
        const div3 = document.createElement('div');

        
        div1.textContent = "Book name: " + myLibrary[i].name;
       
        div2.textContent += "Book Author: "+ myLibrary[i].author;
        
        div3.textContent += "Number of pages: " + myLibrary[i].pages;

        div.appendChild(div1);
        div.appendChild(div2);
        div.appendChild(div3);
        right.appendChild(div);
    }  
}