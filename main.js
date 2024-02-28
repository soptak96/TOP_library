let library = [
    {
        title :"into the wild",
        author : "don",
        pages : 299,
        status : "Completed!",
    },
    {
        title : "How to be rich!",
        author : "don",
        pages : 109,
        status : "Not read yet!",
    },
];


class Book{
    constructor(title,author,pages,read){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.status = read;
    }
    info(){
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.status}`
    }
}

// function addBookToLibrary() {
//     const title = document.querySelector("#title").value;
//     const author = document.querySelector("#author").value;
//     const pages = document.querySelector("#pages").value; 
//     const newBook = new Book(title,author, pages, statusTxt.innerText);
//     library.push(newBook);
//     console.log(newBook);
//     console.log(library);

// }

const shelves = document.querySelector(".shelves");
const newBookBtn = document.querySelector("#new-book");
const modal = document.querySelector(".modal");
const cancelBtn = document.querySelector("#cancel-btn");
const submitBtn = document.querySelector("#submit");

let status = document.querySelector("#status");
let statusTxt = document.querySelector("#status-txt");
statusTxt.textContent = "Not read yet!";


status.addEventListener("change", () =>
    {if(status.checked === true){
    statusTxt.textContent = "Completed!";
   } else {
    statusTxt.textContent = "Not read yet!";}})

function displayBooks(book) {
        console.log(book.pages);
        const card = document.createElement("div");
        card.classList.add("card");
        card.setAttribute("data-value", book.title)
        card.innerHTML = `
        <button class="delete-card" >×</button>
        <p>Name:${book.title}</p>
        <p>Author: ${book.author}</p>
        <p>Pages: ${book.pages}</P>
        <p>Status: ${book.status}</p>
        <button class="status-af">Change Status</button>`;
        shelves.appendChild(card);
    }

function clearInput() {
    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
    document.querySelector("#pages").value = "";
    status.checked = false;
    statusTxt.textContent = "Not read yet!";

}


library.forEach(book => displayBooks(book))

newBookBtn.addEventListener("click", () => modal.showModal())

cancelBtn.addEventListener("click", () => modal.close())

submitBtn.addEventListener("click", (e) => {
    
    e.preventDefault();

    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const pages = document.querySelector("#pages").value; 
    const newBook = new Book(title,author, pages, statusTxt.innerText);
    library.push(newBook);

    console.table(library);

    displayBooks(newBook);

    clearInput();

    modal.close()
})


function deleteBook(element) {
    if(element.classList.contains("delete-card")){
        
        let index = library.findIndex(el => el.title === element.parentElement.dataset.value);
        library.splice(index, 1);
        console.log(index);
        element.parentElement.remove();
        
    }
}

let statusAf = document.querySelectorAll(".status-af");


function changeAf(element) {
    if(element.innerText === "Change Status"){
        let index = library.findIndex(book => book.title === element.parentElement.dataset.value)
        console.log(index);
        if(library[index].status === "Not read yet!")
         {library[index].status = "Completed!"}
         else {library[index].status = "Not read yet!"}
        shelves.innerHTML = "";
        library.forEach(book => displayBooks(book));
        console.table(library);   
       
    } 
}


const deleteCard = document.querySelectorAll(".delete-card");

shelves.addEventListener("click", (e) => {

    console.log(e.target.parentElement)
    deleteBook(e.target);
    console.table(library);

    changeAf(e.target);
    
})









