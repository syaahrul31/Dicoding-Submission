//menampung objek berisi data-data buku
const books = [];
//mendefinisikan custom event //digunakan sebagai patokan dasar ketika ada perubahan data pada variabel books
const RENDER_BOOKS = 'render_data_array_books';

//menghasilkan identitas unik
function generateId(){
    return +new Date();
}

//membuat objek baru dari data yang masuk setelah mengisi form input
function generateBook(id, title, author, year, isComplete){
    return {
        id,
        title,
        author,
        year,
        isComplete
    }
}

function findBook(bookId){
    for(bookItem of books){
        if(bookItem.id === bookId){
            return bookItem;
        }
    }
    return null;
}

function findBookIndex(bookId){
    for(index in books){
        if(books[index].id === bookId){
            return index;
        }
    }
    return -1;
}

function makeBook(bookObject){
    const{id, title, author, year, isComplete} = bookObject;

    const bookTitle = document.createElement('h3');
    bookTitle.innerText = title;

    const bookAuthor = document.createElement('p');
    bookAuthor.innerText = "Nama : "+author;

    const bookYear = document.createElement('p');
    bookYear.innerText = "Tahun  : "+year;
    
    const bookContainer = document.createElement('div');
    bookContainer.classList.add('action');

    const container = document.createElement('article');
    container.classList.add('book_item');
    container.setAttribute('id', 'books');
    container.append(bookTitle, bookAuthor, bookYear, bookContainer);

    if(isComplete){
        const undoBtn = document.createElement('button');
        undoBtn.innerText = "Belum Dibaca";
        undoBtn.classList.add('green');
        undoBtn.addEventListener('click', function(){
            undoTaskFromCompleted(id);
        });

        const trashBtn = document.createElement('button');
        trashBtn.innerText = "Hapus buku";
        trashBtn.classList.add('red');
        trashBtn.addEventListener('click', function(){
            if(confirm('Yakin Ingin menghapus buku dari list?') == true){
                removeTaskFromCompleted(id);
            }
        });
        bookContainer.append(undoBtn, trashBtn);
    } else{
        const doneBtn = document.createElement('button');
        doneBtn.innerText = "Sudah Dibaca";
        doneBtn.classList.add('green');
        doneBtn.addEventListener('click', function(){
            addTaskToCompleted(id);
        });

        const trashBtn = document.createElement('button');
        trashBtn.innerText = "Hapus buku";
        trashBtn.classList.add('red');
        trashBtn.addEventListener('click', function(){
            if(confirm('Yakin Ingin menghapus buku dari list?') == true){
                removeTaskFromCompleted(id);
            }
        });
        bookContainer.append(doneBtn, trashBtn);
    }
    return container;
}

//menambah data buku
function addBook(){
    const title = document.getElementById('inputBookTitle').value;
    const author = document.getElementById('inputBookAuthor').value;
    const year = document.getElementById('inputBookYear').value;
    const check = document.getElementById('inputBookIsComplete');

    const genId = generateId();
    if(check.checked){
        const bookObject = generateBook(genId, title, author, year, true);
        books.push(bookObject);
    }else{
        const bookObject = generateBook(genId, title, author, year, false);
        books.push(bookObject);
    }

    document.dispatchEvent(new Event(RENDER_BOOKS));
    saveData();
    alert('Data Buku Berhasil di Tambahkan!');
}

function addTaskToCompleted(bookId){
    const bookTarget =  findBook(bookId);
    
    if(bookTarget == null){
        return;
    }

    bookTarget.isComplete = true;
    document.dispatchEvent(new Event(RENDER_BOOKS));
    saveData();
    alert('Buku Berhasil di Pindahkan!');
}

function removeTaskFromCompleted(bookId){
    const bookTarget = findBookIndex(bookId);
    if(bookTarget === -1){
        return;
    }
    books.splice(bookTarget, 1);
    document.dispatchEvent(new Event(RENDER_BOOKS));
    saveData();
}

function undoTaskFromCompleted(bookId){
    const bookTarget = findBook(bookId);
    if(bookTarget == null){
        return;
    }
    bookTarget.isComplete = false;
    document.dispatchEvent(new Event(RENDER_BOOKS));
    saveData();
    alert('Buku Berhasil di Pindahkan!');
}


//event saat menekan submit -> menyimpan data ke memori
document.addEventListener('DOMContentLoaded', function(){
    const submitBook = document.getElementById('inputBook');
    submitBook.addEventListener('submit', function(event){
        event.preventDefault();
        addBook();
    });
    if(isStorageExist()){
        loadDataFromStorage();
    }
});


document.addEventListener(RENDER_BOOKS,function(){
    const listUncompleted = document.getElementById('incompleteBookshelfList');
    const listCompleted = document.getElementById('completeBookshelfList')
    
    listUncompleted.innerHTML = '';
    listCompleted.innerHTML = '';

    for(bookItem of books){
        const bookElement = makeBook(bookItem);
        if(bookItem.isComplete){
            listCompleted.append(bookElement);
        }else{
            listUncompleted.append(bookElement);
        }
    }
});

document.addEventListener('click', function(event){
    const check = document.getElementById('inputBookIsComplete');
    if (check.checked) {
        document.getElementById('bookSubmit').innerHTML = 'Masukkan Buku ke Rak <span>Selesai Dibaca</span>';
    }else{
        document.getElementById('bookSubmit').innerHTML = 'Masukkan Buku ke Rak <span>Belum Selesai Dibaca</span>';
    }
});



//CONFIGURASI LOCAL STORAGE ==================================================

const SAVED_BOOK = 'saved-book';
const LIBRARY = 'Bookshelf-Apps';

function isStorageExist(){
    if(typeof(Storage) === undefined){
        alert('Browser Tidak Mendukung Local Storage');
        return false;
    }
    return true;
}

function saveData(){
    if(isStorageExist()){
        const parsed = JSON.stringify(books);
        localStorage.setItem(LIBRARY, parsed);
        document.dispatchEvent(new Event(SAVED_BOOK));
    }
}

function loadDataFromStorage(){
    const accBook =  localStorage.getItem(LIBRARY);
    let data = JSON.parse(accBook);

    if(data !== null){
        for(const book of data){
            books.push(book);
        }
    }
    document.dispatchEvent(new Event(RENDER_BOOKS));
}

document. addEventListener(SAVED_BOOK, function(){
    console.log(localStorage.getItem(LIBRARY));
});
