// Belajar Object

/** 
 * Struktur sebuah object 
 * {
 * key : value || Nilai
 * }
 */

const person = {
    name : "Joni",
    age : 20,
    address : "Jl. Makrik"
}

/**
 * Detail Tugas 
  
 1.	Struktur Data Buku
Setiap buku di toko memiliki atribut berikut:
	•	title (judul buku)
	•	author (penulis buku)
	•	price (harga buku)
	•	stock (jumlah buku dalam stok)
Data ini akan disimpan dalam sebuah object untuk mewakili setiap buku.
	2.	Operasi pada Sistem
        Anda harus membuat beberapa fungsi untuk mengelola inventaris buku:
	•	Menambah Buku Baru
        Tambahkan buku baru ke sistem dengan informasi lengkap, seperti judul, penulis, harga, dan stok awal.
	•	Memperbarui Informasi Buku
        Perbarui informasi buku tertentu, misalnya mengubah harga atau menambah jumlah stok.
	•	Menghapus Buku
        Hapus buku tertentu dari inventaris jika sudah tidak dijual.
	•	Menampilkan Daftar Buku
        Tampilkan daftar semua buku dalam inventaris beserta detailnya.
	•	Mengecek Stok Buku Tertentu
        Cari buku berdasarkan judul dan tampilkan jumlah stoknya.
	•	Menghitung Total Nilai Stok
        Hitung total nilai stok untuk semua buku (harga × stok) yang ada di toko.
    */
        const book = {
            id: 1,
            title: "Harry Potter",
            author: "J.K. Rowling",
            price: 100000,
            stock: 10
        }
        
        /**
         * Object untuk mengelola buku
         * inventory: array untuk menyimpan buku
         * addBook: function untuk menambah buku
         * updateBook: function untuk mengupdate buku
         * deleteBook: function untuk menghapus buku
         * showBook: function untuk menampilkan buku
         */

    const managementBook = {
        inventory: [],
        addBook: function(book){
            this.inventory.push(book);
        },
        updateBook: function(title, book){
            //Cari Buku berdasarkan title
            const bookIndex = this.inventory.findIndex(book =>book.title === title);
            console.log(bookIndex);
            
            
        /**
         * Logika Proses
         * Jadi Array dimulai dari index 0
         * Lalu Jika kondisi dari value bookIndex adalah -1 berarti buku tidak ditemukan
         * Mengapa -1 karena nilai awal dari array adalah 0, kalo tidak ditemukan maka akan bernilai -1
         * Jika buku ditemukan maka akan mengupdate buku yang ada di index yang sudah ditemukan
         */
            if (bookIndex !== -1){
                this.inventory[bookIndex] = book;
            }
        },
        deleteBook: function(title){
            const bookIndex = this.inventory.findIndex(book => book.title === title);

            /**
         * Logika Proses
         * Jika buku ditemukan maka akan menghapus buku yang ada di index yang sudah ditemukan
         */
        if (bookIndex !== -1){
            /**
             * splice untuk menghapus buku yang ada di index yang sudah ditemukan
             * Penjelasan:
             * 1. bookIndex: index dari buku yang akan dihapus
             * 2. 1: adalah jumlah buku yang akan dihapus dari index yang sudah ditemukan
             */
            this.inventory.splice(bookIndex, 1);
        }
    }
 }

    //Menambah Buku
    console.log(managementBook.inventory);
    managementBook.addBook(Book);
    managementBook.addBook({
        title: "Hujan",
        author: "Tere Liye",
        price: 50000,
        stock: 12
    });
    console.log(managementBook.inventory);

    // Mengupdate buku
    managementBook.updateBook("Harry Potter", {
        title : "Laskar Pelangi",
        author : "Andrea Hirata",
        price : 35000,
        stock : 1
    });
    console.log(managementBook.inventory);

    managementBook.deleteBook("Hujan");
    console.log(managementBook.inventory);