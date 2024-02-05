const library = [
    {
        title :"into the wild",
        author : "don",
        pages : 299,
        status : true,
    },
    {
        title : "into the wild",
        author : "don",
        pages : 109,
        status : true,
    }
];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = read;
}

Book.prototype.info = function() {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.status}`
}

// const book1 = new Book("millonare", "D.K", 299, true)


// function addBookToLibrary() {
//     const title = prompt("title", "");
//     const author = prompt("author", "");
//     const pages = prompt("pages", "");
//     const status = prompt("status");
//     const newBook = new Book(title,author, pages, status);
//     library.push(newBook);
//     console.log(newBook);
//     console.log(library)

// }

const shelves = document.querySelector(".shelves");


function displayBooks() {
    library.forEach(book => {
        console.log(book.pages);
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `<p>Name:${book.title}</p>
        <p>Author: ${book.author}</p>
        <p>Pages: ${book.pages}</P>
        <p>Status: ${book.status}`;
        shelves.appendChild(card)


    })
        
}

// addBookToLibrary();
displayBooks();