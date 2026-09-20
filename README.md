# Kopi Nusantara — Interaktivitas dengan jQuery

Tugas Studi Kasus jQuery (Pertemuan 5) — Front-End Programming (TK23023).

Lanjutan dari Tugas Responsive UI (Pertemuan 4). Halaman company profile kedai kopi "Kopi Nusantara" kini dilengkapi interaksi dinamis menggunakan jQuery, tanpa framework CSS.

## Anggota Kelompok

| Nama | NIM |
| Yohanes Phandry | 535250054 |
| Khresnanda Putra Wirawan | 535250071 |
| Kenzie Agustin | 535250079 |
| Elfrandt Goldjer | 535250092 |
| Nicho Louis Salim | 535250095 |

## Fitur Interaktif

1. **Accordion FAQ** — 4 pertanyaan; jawaban muncul dan tertutup dengan `slideToggle()`, dan hanya satu jawaban yang terbuka dalam satu waktu.
2. **Tombol suka** — penghitung pada tiap kartu menu; klik pertama menambah, klik kedua membatalkan.
3. **Tombol kembali ke atas** — muncul dengan `fadeIn()` setelah halaman di-scroll, lalu menggulung halaman dengan `animate({ scrollTop: 0 })`.
4. **Validasi formulir kontak** — memeriksa nama, email, dan pesan; menampilkan pesan error per kolom serta notifikasi sukses dengan `slideDown()`.
5. **Animasi masuk hero** — judul, paragraf, dan tombol muncul bergantian saat halaman dibuka.
6. **Menu mobile** — menu hamburger menutup otomatis setelah salah satu tautan diklik.

## Metode jQuery yang Digunakan

- **Selector & event handling** — `$('.faq-question').click()`, `$('#form-kontak').submit()`, `$(window).scroll()`
- **Manipulasi DOM & class** — `toggleClass()`, `addClass()`, `removeClass()`, `.text()`, `.prop()`, `.next()`, `.not()`
- **Efek & animasi** — `slideToggle()`, `slideUp()`, `slideDown()`, `fadeIn()`, `fadeOut()`, `animate()`, `delay()`

## Struktur Berkas

```
index.html    — struktur halaman
style.css     — styling dan media query (mobile-first, 3 breakpoint)
script.js     — seluruh kode jQuery
images/       — foto produk dan logo
```

jQuery dimuat melalui CDN resmi (https://code.jquery.com) pada bagian bawah `<body>`, sebelum `script.js`.

## Cara Menjalankan

Unduh atau clone repositori ini, lalu buka `index.html` di browser. Diperlukan koneksi internet agar jQuery dan ikon Font Awesome dapat dimuat.
