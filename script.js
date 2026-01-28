// ===== DARK MODE =====
const darkModeToggle = document.getElementById('darkModeToggle');
if (darkModeToggle) {
    darkModeToggle.addEventListener('change', () => {
        document.body.classList.toggle('dark');
        localStorage.setItem('darkMode', document.body.classList.contains('dark'));
    });
}

// Load dark mode preference
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark');
    if (darkModeToggle) darkModeToggle.checked = true;
}

// ===== RESPONSIVE NAVIGATION =====
function toggleMobileMenu() {
    const menu = document.querySelector('.nav-links');
    if (menu) menu.classList.toggle('active');
}

// Close mobile menu when link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        const menu = document.querySelector('.nav-links');
        if (menu) menu.classList.remove('active');
    });
});
