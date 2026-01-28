let cart = [];
let total = 0;

function addToCart(name, price) {
    cart.push({ name, price });
    total += price;

    document.getElementById("cart-count").innerText = cart.length;
    updateCart();
}

function updateCart() {
    const list = document.getElementById("cart-items");
    list.innerHTML = "";

    cart.forEach(item => {
        const li = document.createElement("li");
        li.innerText = `${item.name} - Rp ${item.price}`;
        list.appendChild(li);
    });

    document.getElementById("total").innerText = total;

    document.getElementById("wa-link").href =
        `https://wa.me/6283199415324?text=Total belanja Rp ${total}`;
}

function toggleCart() {
    const cartBox = document.getElementById("cart");
    cartBox.style.display =
        cartBox.style.display === "block" ? "none" : "block";
}

function toggleLogin() {
    const loginBox = document.getElementById("loginBox");
    loginBox.style.display =
        loginBox.style.display === "block" ? "none" : "block";
}

function login() {
    const username = document.getElementById("username").value;
    if (!username) return alert("Isi username!");

    document.getElementById("user-info").innerText = `Hi, ${username}`;
    document.getElementById("loginBox").style.display = "none";
}

/* ===== Dark Mode ===== */
const darkToggle = document.getElementById("darkModeToggle");
if(darkToggle){
    darkToggle.addEventListener("change", () => {
        document.body.classList.toggle("dark");
    });
}

/* ===== Checkout WA Otomatis ===== */
if(!window.cart) window.cart = [];

function addToCart(name, price){
    // Tetap panggil fungsi lama kalau sudah ada
    if(typeof window.addToCart === "function"){
        // Simpan di array global untuk WA
        window.cart.push({name, price});
        updateWA();
    }
}

// Fungsi update WA otomatis
function updateWA(){
    const cartItems = document.getElementById("cart-items");
    const totalEl = document.getElementById("total");
    const cartCount = document.getElementById("cart-count");
    const waLink = document.getElementById("wa-link");

    cartItems.innerHTML = "";
    let total = 0;
    window.cart.forEach(item=>{
        cartItems.innerHTML += `<li>${item.name} - Rp ${item.price}</li>`;
        total += item.price;
    });

    totalEl.innerText = total;
    cartCount.innerText = window.cart.length;

    let message = "Halo, saya ingin membeli:\n";
    window.cart.forEach(item=>{
        message += `${item.name} - Rp ${item.price}\n`;
    });

    const waNumber = "6283199415324"; // ganti dengan nomor WA tujuanmu
    waLink.href = `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`;
}

// Pastikan setiap tombol beli memanggil updateWA
document.querySelectorAll(".product button").forEach(btn=>{
    btn.addEventListener("click", ()=>{
        const name = btn.previousElementSibling.previousElementSibling.innerText;
        const price = parseInt(btn.previousElementSibling.innerText.replace(/[^0-9]/g,''));
        window.cart.push({name, price});
        updateWA();
    });
});

/* ===== BANNER AUTO SLIDE ===== */
let slides = document.querySelectorAll('.slide');
let index = 0;

setInterval(() => {
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}, 3000);

// PROMO SLIDER AUTO
let promo = document.querySelectorAll('.promo-card');
let p = 0;

setInterval(() => {
    promo[p].classList.remove('active');
    p = (p + 1) % promo.length;
    promo[p].classList.add('active');
}, 3000);
