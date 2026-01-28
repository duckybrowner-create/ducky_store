// DARK MODE
const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('change', () => {
    document.body.classList.toggle('dark');
});

// NAVIGASI PRODUK
function goProduct(url) {
    window.location.href = url;
}

// SLIDER
let slides = document.querySelectorAll('.banner-slider .slide');
let currentSlide = 0;
setInterval(() => {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}, 4000);

// KERANJANG
let cart = [];
function addToCart(name, price) {
    cart.push({name, price});
    document.getElementById('cart-count').innerText = cart.length;
    updateCartUI();
}

function updateCartUI(){
    const ul = document.getElementById('cart-items');
    ul.innerHTML = '';
    let total = 0;
    cart.forEach(item=>{
        let li = document.createElement('li');
        li.textContent = `${item.name} - Rp ${item.price}`;
        ul.appendChild(li);
        total += item.price;
    });
    document.getElementById('total').innerText = total;
}

function checkoutCart(){
    const phone = "6283199415324";
    let text = "Halo admin, saya mau beli:\n";
    cart.forEach(item=>{
        text += `${item.name} - Rp ${item.price}\n`;
    });
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`);
}

// TOGGLE CART & LOGIN
function toggleCart(){ document.getElementById('cart').classList.toggle('active'); }
function toggleLogin(){ document.getElementById('loginBox').classList.toggle('active'); }
