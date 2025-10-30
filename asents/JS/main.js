// Main JavaScript - Lili Organic
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navClose = document.getElementById('nav-close');

// Menú móvil
if (navToggle) {
    navToggle.addEventListener('click', () => navMenu.classList.add('active'));
}
if (navClose) {
    navClose.addEventListener('click', () => navMenu.classList.remove('active'));
}

// Cerrar menú al hacer clic en enlaces
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => navMenu.classList.remove('active'));
});

// Header con scroll
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY >= 50) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header');
});

// Scroll to top
const scrollTop = document.getElementById('scrollTop');
if (scrollTop) {
    window.addEventListener('scroll', () => {
        scrollTop.classList.toggle('show', window.scrollY >= 400);
    });
    scrollTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Newsletter
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        showNotification('¡Gracias por suscribirte!', 'success');
        newsletterForm.reset();
    });
}

// Sistema de notificaciones
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type} show`;
    notification.innerHTML = `<i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'times-circle' : 'info-circle'}"></i><span>${message}</span>`;
    document.body.appendChild(notification);
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

window.showNotification = showNotification;

// Hover efecto en WhatsApp flotante
document.querySelector('.whatsapp-float')?.addEventListener('mouseenter', function() {
    this.style.transform = 'scale(1.1)';
});
document.querySelector('.whatsapp-float')?.addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1)';
});
