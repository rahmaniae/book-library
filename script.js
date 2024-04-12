let myLibrary = [{
    title: "book1",
    author: "agatha",
    pages: 300,
    status: 'is read',
    info: function() {
        let infos =  `${this.title} by ${this.author}, ${this.pages} pages, ${this.isRead}`;
        return infos;
    },
    changeStatus: function() {
        
        if(this.status === 'is read') {
            console.log('done for read')
            this.status = 'not read'
        }else {
            console.log('done for not read')
            this.status = 'is read'
        }
    },
},
{
    title: "book2",
    author: "agatha",
    pages: 300,
    status: 'is read',
    info: function() {
        let infos =  `${this.title} by ${this.author}, ${this.pages} pages, ${this.isRead}`;
        return infos;
    },
    changeStatus: function() {
        
        if(this.status === 'is read') {
            console.log('done for read')
            this.status = 'not read'
        }else {
            console.log('done for not read')
            this.status = 'is read'
        }
    },
},
{
    title: "book3",
    author: "agatha",
    pages: 300,
    status: 'is read',
    info: function() {
        let infos =  `${this.title} by ${this.author}, ${this.pages} pages, ${this.isRead}`;
        return infos;
    },
    changeStatus: function() {
        
        if(this.status === 'is read') {
            console.log('done for read')
            this.status = 'not read'
        }else {
            console.log('done for not read')
            this.status = 'is read'
        }
    },
},
]

function Book(title, author, pages, isRead) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.status = isRead,
    this.info = function() {
        let infos =  `${this.title} by ${this.author}, ${this.pages} pages, ${this.isRead}`;
        return infos
    }
    this.changeStatus = function() {
        
        if(this.status === 'is read') {
            console.log('done for read')
            this.status = 'not read'
        }else {
            console.log('done for not read')
            this.status = 'is read'
        }
    }
}


function addBookToLibrary(title, author, pages, isRead) {;
    const book = new Book(title, author, pages, isRead);
    myLibrary.push(book);
    loadBooks()

}
function loadBooks() {

        const cards = document.querySelector('.cards');
        cards.innerHTML = '';

    myLibrary.forEach((item, index) => {
        const cards = document.querySelector('.cards')
        const card = document.createElement('div');
        const title = document.createElement('div')
        const author = document.createElement('div');
        const pages = document.createElement('div');
        const status = document.createElement('div');
        const btnContainer = document.createElement('p');
        const setReadBtn = document.createElement('button');
        const deleteBtn = document.createElement('button');
        
        title.textContent = item.title;
        author.textContent = item.author;
        pages.textContent = item.pages;
        status.textContent = item.status;
        setReadBtn.textContent = (item.status == "is read") ? "MARK AS UNREAD" : "MARK AS READ";
        deleteBtn.textContent = "DELETE"
    
        card.classList = 'card';
        title.classList = 'title';
        author.classList = 'author';
        pages.classList = 'pages';
        status.classList = 'status';
        setReadBtn.classList = 'button setReadBtn';
        deleteBtn.classList = 'button deleteBtn';

        btnContainer.append(setReadBtn, deleteBtn)

        card.setAttribute('data-index', index);
        deleteBtn.setAttribute('data-index', index);
        setReadBtn.setAttribute('data-index', index);

        card.append(title, author, pages, status, btnContainer)
        cards.appendChild(card)
    })

    const deleteButtons = document.querySelectorAll('.deleteBtn');
    deleteButtons.forEach((item) => item.addEventListener('click', (e) => {
        const index = e.target.dataset.index;
        myLibrary.splice(index, 1)
        loadBooks()
    }))

    const setReadBtns = document.querySelectorAll('.setReadBtn');
    setReadBtns.forEach((item) => {item.addEventListener('click', (e) => {
        const index = e.target.dataset.index;
        console.log(index)
        myLibrary[index].changeStatus();
        loadBooks()
    })})

}



const form = document.querySelector('dialog form')
const dialog = document.querySelector('dialog');
const addBookBtn = document.querySelector('#addBookBtn');
const submitBtn = document.querySelector('#submitBtn');
const closeBtn = document.querySelector('#closeBtn')

addBookBtn.addEventListener('click', (e) => {
    dialog.showModal()
})

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const title = document.querySelector('form #title').value;
    const author = document.querySelector('form #author').value;
    const pages = document.querySelector('form #pages').value;
    const isRead = document.querySelector('form #isRead').value;
    addBookToLibrary(title, author, pages, isRead) 
    dialog.close()
})

closeBtn.addEventListener('click', (e) => {
    dialog.close()
})

dialog.addEventListener('close', (e) => {
    form.reset();
})

loadBooks()

