# 🔥 Firebase Setup untuk DuckyStore Real-Time Sync

## Langkah 1: Buat Firebase Project

1. **Buka Firebase Console**: https://console.firebase.google.com
2. Klik **"Add project"**
3. **Nama project**: `duckystore`
4. Uncheck "Enable Google Analytics" → **Create project**
5. Tunggu selesai (~2 menit)

## Langkah 2: Setup Realtime Database

1. Di sidebar kiri → **Build** → **Realtime Database**
2. Klik **"Create Database"**
3. Pilih region: `asia-southeast1` (Singapore)
4. Mode: **Start in test mode**
5. Klik **"Enable"**

## Langkah 3: Ambil Firebase Config

1. Klik ⚙️ **Project Settings** (di atas)
2. Scroll ke bawah → **"Your apps"**
3. Klik **`</>`** (Web icon)
4. Copy semua kode yang ditampilkan

## Langkah 4: Update Config di Project

Buka file `firebase-config.js` dan ganti:

```javascript
const firebaseConfig = {
  apiKey: "PASTE_API_KEY_ANDA",
  authDomain: "PASTE_AUTH_DOMAIN",
  projectId: "PASTE_PROJECT_ID",
  storageBucket: "PASTE_STORAGE_BUCKET",
  messagingSenderId: "PASTE_SENDER_ID",
  appId: "PASTE_APP_ID"
};
```

**Contoh hasil:**
```javascript
const firebaseConfig = {
  apiKey: "AIzaSyD5VmPeXbXuQu5Z6xZ...",
  authDomain: "duckystore-abc123.firebaseapp.com",
  projectId: "duckystore-abc123",
  storageBucket: "duckystore-abc123.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123def456"
};
```

## Langkah 5: Deploy ke Firebase Hosting (Optional)

```bash
# Login ke Firebase
firebase login

# Update .firebaserc dengan project ID Anda
# Edit .firebaserc dan ganti YOUR_PROJECT_ID

# Deploy
firebase deploy
```

## ✅ Testing

1. **Laptop**: Buka http://localhost:3000 (atau URL lokal)
2. **HP**: Buka Dashboard, tambah produk
3. **Laptop**: Produk otomatis muncul di halaman
4. **HP**: Hapus produk
5. **Laptop**: Produk otomatis hilang

## 🔄 Real-Time Sync Features

✅ **Produk sync otomatis** setiap 5 detik
✅ **Instant update** di semua device
✅ **Backup lokal** (localStorage) jika offline
✅ **Export/Import** manual di Settings

## 🆘 Troubleshooting

**"Firebase is not defined"**
- Pastikan Firebase SDK sudah diload di HTML
- Check console untuk error messages

**"Permission denied"**
- Buka Firebase Console → Realtime Database → Rules
- Pastikan test mode aktif (allow read/write)

**Produk tidak sync**
- Check browser console (F12) untuk error
- Pastikan internet connection stabil
- Coba refresh halaman

## 📱 URL untuk Akses di HP

Setelah deploy ke Firebase Hosting:
```
https://duckystore-abc123.web.app
```

Atau jika ingin test lokal dengan IP:
```
http://[IP_LAPTOP]:8000
```

Dapatkan IP laptop:
```bash
# Di terminal
ipconfig (Windows) atau ifconfig (Mac/Linux)
```

---

**Sudah ready? Mulai dari Step 1!** 🚀
