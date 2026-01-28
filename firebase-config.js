// Firebase Configuration
// PENTING: Ganti dengan credentials Firebase Anda sendiri

const firebaseConfig = {
  apiKey: "AIzaSyDpreyW8sMLTW6O-jQ6UQpGdowMmW7lxkw",
  authDomain: "duckystore-173a6.firebaseapp.com",
  projectId: "duckystore-173a6",
  storageBucket: "duckystore-173a6.firebasestorage.app",
  messagingSenderId: "1009044708659",
  appId: "1:1009044708659:web:ae468968bb5faf268d7246",
  databaseURL: "https://duckystore-173a6-default-rtdb.asia-southeast1.firebasedatabase.app",
  measurementId: "G-T8ZH85NQNF"
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
  if (!isFirebaseConnected || !db) {
    console.warn('⚠️ Firebase not connected, saving to localStorage only');
    return;
  }
  
  const products = JSON.parse(localStorage.getItem('products')) || [];
  db.ref('products').set(products)
    .then(() => {
      console.log('✅ Produk disync ke Firebase:', products.length, 'items');
    })
    .catch(err => {
      console.error('❌ Sync error:', err.code, err.message);
    });
}

// Load Products dari Firebase (jika connected)
function loadProductsFromFirebase() {
  if (!isFirebaseConnected || !db) {
    console.warn('⚠️ Firebase not connected, using localStorage');
    return;
  }
  
  try {
    db.ref('products').on('value', (snapshot) => {
      const products = snapshot.val() || [];
      console.log('🔄 Produk diupdate dari Firebase:', products.length, 'items');
      localStorage.setItem('products', JSON.stringify(products));
      
      // Trigger reload di halaman jika ada
      if (typeof loadProducts === 'function') {
        loadProducts();
      }
      if (typeof updateCartUI === 'function') {
        updateCartUI();
      }
      if (typeof updateStats === 'function') {
        updateStats();
      }
    }, (error) => {
      console.error('❌ Firebase listener error:', error.code, error.message);
    });
  } catch (error) {
    console.error('❌ Error setting up Firebase listener:', error);
  }
}

// Setup Firebase Real-time Listener
if (isFirebaseConnected) {
  console.log('🔄 Setting up Firebase listeners...');
  loadProductsFromFirebase();
  
  // Setup listener untuk sync otomatis setiap ada perubahan
  setInterval(() => {
    syncProductsToFirebase();
  }, 5000); // Sync setiap 5 detik
  
  console.log('✅ Firebase listeners setup complete');
}
