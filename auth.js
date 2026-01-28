// ===== AUTH SYSTEM =====
const DEFAULT_ADMIN = {
    email: 'admin@duckystore.com',
    password: 'admin123',
    name: 'Admin DuckyStore'
};

// Initialize local storage dengan admin default
function initializeAuth() {
    if (!localStorage.getItem('adminUsers')) {
        localStorage.setItem('adminUsers', JSON.stringify([DEFAULT_ADMIN]));
    }
}

// Switch Tab Login/Register
function switchTab(tab) {
    document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(el => el.classList.remove('active'));
    
    document.getElementById(tab + '-tab').classList.add('active');
    event.target.classList.add('active');
}

// Handle Login
function handleLogin(e) {
    e.preventDefault();
    
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    const errorDiv = document.getElementById('loginError');
    
    initializeAuth();
    const admins = JSON.parse(localStorage.getItem('adminUsers'));
    
    const admin = admins.find(a => a.email === email && a.password === password);
    
    if (admin) {
        localStorage.setItem('loggedIn', 'true');
        localStorage.setItem('currentAdmin', JSON.stringify(admin));
        errorDiv.style.display = 'none';
        alert('Login berhasil! Selamat datang ' + admin.name);
        window.location.href = 'dashboard.html';
    } else {
        errorDiv.textContent = 'Email atau password salah!';
        errorDiv.style.display = 'block';
    }
}

// Handle Register
function handleRegister(e) {
    e.preventDefault();
    
    const name = document.getElementById('register-name').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    const confirm = document.getElementById('register-confirm').value;
    const errorDiv = document.getElementById('registerError');
    
    if (password !== confirm) {
        errorDiv.textContent = 'Password tidak cocok!';
        errorDiv.style.display = 'block';
        return;
    }
    
    if (password.length < 6) {
        errorDiv.textContent = 'Password minimal 6 karakter!';
        errorDiv.style.display = 'block';
        return;
    }
    
    initializeAuth();
    const admins = JSON.parse(localStorage.getItem('adminUsers'));
    
    if (admins.find(a => a.email === email)) {
        errorDiv.textContent = 'Email sudah terdaftar!';
        errorDiv.style.display = 'block';
        return;
    }
    
    const newAdmin = { name, email, password };
    admins.push(newAdmin);
    localStorage.setItem('adminUsers', JSON.stringify(admins));
    
    errorDiv.style.display = 'none';
    alert('Registrasi berhasil! Silakan login');
    document.getElementById('register-name').value = '';
    document.getElementById('register-email').value = '';
    document.getElementById('register-password').value = '';
    document.getElementById('register-confirm').value = '';
    switchTab('login');
}

// Check Login Status
function checkLogin() {
    if (localStorage.getItem('loggedIn') !== 'true') {
        window.location.href = 'login.html';
    }
}

// Get Current Admin
function getCurrentAdmin() {
    return JSON.parse(localStorage.getItem('currentAdmin'));
}

// Logout
function logout() {
    if (confirm('Apakah Anda yakin ingin logout?')) {
        localStorage.removeItem('loggedIn');
        localStorage.removeItem('currentAdmin');
        window.location.href = 'landing.html';
    }
}

// Initialize on page load
initializeAuth();
