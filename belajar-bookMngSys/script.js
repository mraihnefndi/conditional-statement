// Javascript
// 1. Inisialisasi Variable dan Data
const books = [];
let isEditing = false;

// 2. Element DOM Selection
const formElement = document.getElementById("bookForm");
const buttonElement = document.getElementById("submitBtn");
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const priceInput = document.getElementById("price");
const stockInput = document.getElementById("stock");
const idInput = document.getElementById("id");

const operations = {
    /**
     * Fungsi untuk menambahkan buku baru ke array books
     * @param {Object} book - Object buku yang akan ditambahkan
     * Flow:
     * 1. Membuat ID unik untuk buku
     * 2. Menambahkan buku ke array
     * 3. Memperbarui tampilan daftar buku
     */
    created: function(book) {
        books.push({
            id: Math.random().toString(36).substring(2, 15),
            ...book,
        });
        displayBooks();
    },
    /**
     * Fungsi untuk mengupdate data buku
     * @param {string} id - ID buku yang akan diupdate
     * @param {Object} book - Object buku yang akan diupdate
     * Flow:
     * 1. Mendapatkan data buku yang akan diupdate
     * 2. Membuat object buku dengan data terbaru
     * 3. Mengupdate data di array books
     * 4. Memperbarui tampilan
     * 5. Mereset form dan tombol ke kondisi awal
     */
    updated: function(id, book) {
        const selectedBook = this.getBookById(id);

        const updatedBook = {
            ...book,
            id: selectedBook.id
        };

        const index = books.indexOf(selectedBook);
        books[index] = {...updatedBook};

        displayBooks();
        resetFormState();
    },
    /**
     * Fungsi untuk menghapus buku
     * @param {string} id - ID buku yang akan dihapus
     * Flow:
     * 1. Mendapatkan buku yang akan dihapus
     * 2. Menghapus buku dari array
     * 3. Memperbarui tampilan
     */
    deleted: function(id) {
        const selectedBook = this.getBookById(id);
        books.splice(books.indexOf(selectedBook), 1);
        displayBooks();
    },
    /**
     * Fungsi untuk mendapatkan buku berdasarkan ID
     * @param {string} id - ID buku yang dicari
     * @returns {Object} Object buku yang ditemukan
     */
    getBookById: function(id) {
        const selectedBook = books.find((book) => book.id === id);
        return selectedBook;
    },
    /**
     * Fungsi untuk mendapatkan semua buku
     * @returns {Array} Array buku
     */
    getAllBooks: function() {
        return books;
    }
}


/**
 * Fungsi untuk mendapatkan buku berdasarkan ID
 * @param {string} id - ID buku yang dicari
 * @returns {Object} Object buku yang ditemukan
 * Flow:
 * 1. Mencari buku dalam array berdasarkan ID
 * 2. Mengembalikan object buku yang ditemukan
 */
function getBookbyId(id) {
    return books.find((book) => book.id === id);
}

/**
 * Fungsi untuk mengupdate data buku
 * @param {string} id - ID buku yang akan diupdate
 * Flow:
 * 1. Mendapatkan data buku yang akan diupdate
 * 2. Membuat object buku dengan data terbaru
 * 3. Mengupdate data di array books
 * 4. Memperbarui tampilan
 * 5. Mereset form dan tombol ke kondisi awal
 */
function updateBook(id) {
    const selectedBook = operations.getBookById(id);
    
    const updatedBook = {
        title: titleInput.value,
        author: authorInput.value,
        price: priceInput.value,
        stock: stockInput.value
    };

    const index = books.indexOf(selectedBook);
    books[index] = {
        ...updatedBook,
        id: selectedBook.id
    };
    displayBooks();
    resetFormState();
}

/**
 * Fungsi untuk menghapus buku
 * @param {string} id - ID buku yang akan dihapus
 * Flow:
 * 1. Mendapatkan buku yang akan dihapus
 * 2. Menghapus buku dari array
 * 3. Memperbarui tampilan
 */
function deleteBook(id) {
        const selectedBook = operations.getBookById(id);
    books.splice(books.indexOf(selectedBook), 1);
    displayBooks();
}

// 4. UI Management Functions
/**
 * Fungsi untuk menampilkan semua buku ke dalam tabel
 * Flow:
 * 1. Mengosongkan isi tabel terlebih dahulu
 * 2. Melakukan iterasi pada array books
 * 3. Membuat element tr untuk setiap buku
 * 4. Menambahkan tombol edit dan delete
 * 5. Menambahkan ke dalam tabel
 */
function displayBooks() {
    const bookList = document.getElementById("bookList");
    bookList.innerHTML = "";
    books.forEach((book) => {
        const bookElement = document.createElement("tr");
        bookElement.innerHTML = `
            <td class="table-dark">${book.title}</td>
            <td class="table-dark">${book.author}</td>
            <td class="table-dark">${book.price}</td>
            <td class="table-dark">${book.stock}</td>
            <td class="table-dark">
                <button class="btn btn-primary" onclick="showSelectedBook('${book.id}')">Edit</button>
                <button class="btn btn-danger" onclick="operations.deleted('${book.id}')">Delete</button>
            </td>
        `;
        bookList.appendChild(bookElement);
    });
}

/**
 * Fungsi untuk mereset state form ke kondisi awal
 * Flow:
 * 1. Mengubah tombol kembali ke Add
 * 2. Mengembalikan warna tombol
 * 3. Menonaktifkan mode edit
 * 4. Mereset form
 */
function resetFormState() {
    buttonElement.textContent = "Add";
    buttonElement.classList.remove("btn-warning");
    buttonElement.classList.add("btn-primary");
    isEditing = false;
    formElement.reset();
}

/**
 * Fungsi untuk memulai proses edit buku
 * @param {string} id - ID buku yang akan diedit
 * Flow:
 * 1. Mendapatkan data buku yang akan diedit
 * 2. Mengisi form dengan data buku tersebut
 * 3. Mengubah tampilan tombol submit menjadi update
 * 4. Mengaktifkan mode edit
 */
function showSelectedBook(id) {
    const selectedBook = operations.getBookById(id);   

    titleInput.value = selectedBook.title;
    authorInput.value = selectedBook.author;
    priceInput.value = selectedBook.price;
    stockInput.value = selectedBook.stock;
    idInput.value = selectedBook.id;

    buttonElement.textContent = "Update";
    isEditing = true;
    buttonElement.classList.remove("btn-primary");
    buttonElement.classList.add("btn-warning");
}

// 5. Event Listeners
formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    if (isEditing) {
        operations.updated(idInput.value, {
            title: titleInput.value,
            author: authorInput.value,
            price: priceInput.value,
            stock: stockInput.value
        });
    } else {
        operations.created({
            title: titleInput.value,
            author: authorInput.value,
            price: priceInput.value,
            stock: stockInput.value
        });
    }

    resetFormState();
});