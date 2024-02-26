console.log("hello world")

const myLibrary = [];



function Book(name, author, pages, read){
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

let book1 = new Book("GetRich", "Kundi", 300, true);
myLibrary[0] = book1;


function addBookToLibrary(name, author, pages, read){
    let book = new Book(name, author, pages, read);
    myLibrary.add(book);
}

console.log(myLibrary);

function displayBooks(){
    const right = document.querySelector(".right-side");
    
    
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

displayBooks();
