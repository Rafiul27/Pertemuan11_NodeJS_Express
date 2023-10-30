const express = require('express')
const path = require('path')
const app = express()
const port = 3000

// Menggunakan middleware express.static untuk menyajikan file statis di folder 'public html'
app.use(express.static(path.join(__dirname, 'public html')));

// Menangani rute untuk halaman utama
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public html', 'halaman utama.html'));
})

// Menangani rute untuk halaman contact
app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'public html', 'contact.html'));
})

// Menangani rute untuk halaman about
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public html', 'about.html'));
})

// menjalankan server pada port 3000
app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}/`);
})

