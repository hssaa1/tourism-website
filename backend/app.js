// Import Express
const express = require('express');
const path = require('path');

const app = express(); // <-- inilah yang bikin app ada
const PORT = 3000;
const HOST = "0.0.0.0"; // biar bisa diakses dari device lain

// Middleware: serve file frontend
app.use(express.static(path.join(__dirname, '../frontend')));

// Endpoint test
app.get('/api/hello', (req, res) => {
  res.send('Server berjalan dengan baik!');
});

// Endpoint destinasi
app.get('/api/destinasi', (req, res) => {
  res.json([
    {
      "nama": "Banjarmasin",
      "deskripsi": "Kota seribu sungai, pusat budaya dan perdagangan.",
      "lokasi": [-3.3186, 114.5944]
    },
    {
      "nama": "Banjarbaru",
      "deskripsi": "Kota berkembang dengan destinasi modern dan wisata alam.",
      "lokasi": [-3.4420, 114.8320]
    }
  ]);
});

// Jalankan server
app.listen(PORT, HOST, () => {
  console.log(`Server berjalan di http://${HOST}:${PORT}`);
});
