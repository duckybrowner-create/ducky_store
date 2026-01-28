# 🦆 DuckyStore - Dokumentasi Lengkap

## Deskripsi Aplikasi
DuckyStore adalah platform e-commerce modern untuk menjual produk digital premium. Aplikasi ini dilengkapi dengan sistem admin yang lengkap dengan login, dashboard, dan fitur manajemen produk.

## 📁 Struktur File

```
duckystore/
├── landing.html          # Halaman utama (seperti Facebook)
├── login.html           # Halaman login & register admin
├── dashboard.html       # Dashboard admin dengan semua fitur
├── index.html           # Halaman toko/produk publik
├── auth.js              # Sistem autentikasi
├── script.js            # Script global aplikasi
├── style.css            # Stylesheet global
└── README.md            # File dokumentasi ini
```

## 🚀 Cara Memulai

1. **Buka Landing Page**: Klik `landing.html` untuk melihat halaman utama
2. **Login Admin**: Klik "Admin Login" atau buka `login.html`
3. **Demo Login**:
   - Email: `admin@duckystore.com`
   - Password: `admin123`

## 🔐 Fitur Login & Autentikasi

### Login
- Email dan password untuk akses admin
- Data tersimpan di localStorage browser
- Session management otomatis

### Register Admin
- Buat akun admin baru
- Validasi password (min 6 karakter)
- Cek email duplikat

### Default Admin
```
Email: admin@duckystore.com
Password: admin123
```

## 📊 Dashboard Admin

Setelah login, admin memiliki akses ke:

### 1. **Dashboard** 📊
- Statistik jumlah produk
- Total penjualan
- Total orders
- Jumlah admin terdaftar

### 2. **Kelola Produk** 📦
- ➕ **Tambah Produk Baru**
  - Nama produk
  - Harga (Rp)
  - URL gambar
  - Deskripsi
- ✏️ **Edit Produk**
- 🗑️ **Hapus Produk**
- Lihat daftar semua produk dalam tabel

### 3. **Statistik** 📈
- Total produk
- Total penjualan (dalam Rp)
- Total orders

### 4. **Profile** 👤
- Informasi profil admin
- Status akun
- Tanggal bergabung
- 🔐 **Ubah Password**
  - Password lama
  - Password baru
  - Konfirmasi password

### 5. **Pengaturan** ⚙️
- Notifikasi email
- Notifikasi SMS
- Mode gelap
- **Zona Bahaya**: Hapus semua produk

### 6. **Logout** 🚪
- Keluar dari akun admin

## 🛒 Halaman Toko (Public)

### index.html
- Menampilkan semua produk yang ditambahkan admin
- Tombol "Beli Sekarang" untuk setiap produk
- Keranjang belanja
- Checkout via WhatsApp

### Fitur Keranjang
- Tambah/hapus produk
- Lihat total harga
- Checkout langsung ke WhatsApp admin

## 🎨 Landing Page (index.html)

Halaman utama dengan:
- Header dengan logo DuckyStore
- Navigasi lengkap
- Hero section yang menarik
- Fitur-fitur aplikasi
- Showcase produk
- Footer dengan informasi kontak

## 💾 Data Storage

Aplikasi menggunakan **localStorage** browser untuk menyimpan:
- `adminUsers` - Daftar admin terdaftar
- `currentAdmin` - Admin yang sedang login
- `loggedIn` - Status login
- `products` - Daftar produk
- `cart` - Keranjang belanja
- `darkMode` - Preferensi dark mode

## 🎨 Desain & Styling

### Warna Utama
- **Primary**: #667eea (Ungu)
- **Secondary**: #764ba2 (Ungu tua)
- **Danger**: #f44336 (Merah)
- **Success**: #4CAF50 (Hijau)

### Fitur Desain
- Responsive design (mobile-friendly)
- Dark mode support
- Smooth animations
- Modern gradient buttons
- Clean UI dengan card components

## 🔧 Fungsi Utama

### Authentication (auth.js)
```javascript
checkLogin()           // Cek apakah user sudah login
getCurrentAdmin()      // Ambil data admin saat ini
logout()              // Keluar dari akun
handleLogin()         // Proses login
handleRegister()      // Proses registrasi
```

### Dashboard (dashboard.html)
```javascript
addProduct()          // Tambah produk baru
editProduct()         // Edit produk
deleteProduct()       // Hapus produk
loadProducts()        // Load daftar produk
updateStats()         // Update statistik
changePassword()      // Ubah password
```

### Toko (index.html)
```javascript
loadProducts()        // Load produk dari localStorage
addToCart()          // Tambah ke keranjang
removeFromCart()     // Hapus dari keranjang
updateCartUI()       // Update tampilan keranjang
checkout()           // Checkout via WhatsApp
```

## 📱 Responsif
Aplikasi fully responsive untuk:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (< 768px)

## 🌙 Dark Mode
- Toggle dark mode di halaman publik
- Preference tersimpan di localStorage
- Automatic apply saat refresh

## 📞 Kontak
- Email: admin@duckystore.com
- WhatsApp: +62 831 9941 5324

## 🚀 Fitur Future
- Payment gateway integration
- Email notification system
- SMS notification system
- Advanced analytics
- Export laporan penjualan
- Multi-language support

## 📝 Notes
- Semua data disimpan di browser (localStorage)
- Untuk production, gunakan backend/database
- Ganti nomor WhatsApp di kode jika diperlukan
- Customize email dan preferensi di settings

---
**Dibuat dengan ❤️ untuk DuckyStore**
