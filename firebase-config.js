// Firebase Configuration
// PENTING: Ganti dengan credentials Firebase Anda sendiri

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
let db = null;
let isFirebaseConnected = false;

// Try to initialize Firebase if config is available
if (firebaseConfig.apiKey !== "YOUR_API_KEY") {
  try {
    firebase.initializeApp(firebaseConfig);
    db = firebase.database();
    isFirebaseConnected = true;
    console.log('✅ Firebase Connected');
  } catch (error) {
    console.warn('Firebase initialization failed:', error);
    isFirebaseConnected = false;
  }
} else {
  console.warn('⚠️ Firebase config tidak diatur. Menggunakan localStorage saja.');
  console.log('📝 Untuk setup Firebase:');
  console.log('1. Buka https://console.firebase.google.com');
  console.log('2. Buat project baru atau gunakan existing');
  console.log('3. Setup Realtime Database');
  console.log('4. Copy config dari Project Settings');
  console.log('5. Paste di firebase-config.js');
}

// Sync Products ke Firebase (jika connected)
function syncProductsToFirebase() {
  if (!isFirebaseConnected || !db) return;
  
  const products = JSON.parse(localStorage.getItem('products')) || [];
  db.ref('products').set(products)
    .then(() => console.log('✅ Produk disync ke Firebase'))
    .catch(err => console.error('❌ Sync error:', err));
}

// Load Products dari Firebase (jika connected)
function loadProductsFromFirebase() {
  if (!isFirebaseConnected || !db) return;
  
  db.ref('products').on('value', (snapshot) => {
    const products = snapshot.val() || [];
    localStorage.setItem('products', JSON.stringify(products));
    console.log('✅ Produk diupdate dari Firebase');
    
    // Trigger reload di halaman jika ada
    if (typeof loadProducts === 'function') {
      loadProducts();
    }
    if (typeof updateCartUI === 'function') {
      updateCartUI();
    }
  });
}

// Setup Firebase Real-time Listener
if (isFirebaseConnected) {
  loadProductsFromFirebase();
  
  // Setup listener untuk sync otomatis setiap ada perubahan
  setInterval(() => {
    syncProductsToFirebase();
  }, 5000); // Sync setiap 5 detik
}
