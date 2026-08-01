// Main JavaScript - Lili Organic
const navToggleOld = document.getElementById('nav-toggle');
const navMenuOld = document.getElementById('nav-menu');
const navCloseOld = document.getElementById('nav-close');

// Menú móvil (diseño viejo, solo si existe)
if (navToggleOld && navMenuOld) {
    navToggleOld.addEventListener('click', () => navMenuOld.classList.add('active'));
}
if (navCloseOld && navMenuOld) {
    navCloseOld.addEventListener('click', () => navMenuOld.classList.remove('active'));
}

// Cerrar menú al hacer clic en enlaces (diseño viejo, solo si existe)
if (navMenuOld) {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => navMenuOld.classList.remove('active'));
    });
}

// Header con scroll (diseño viejo, solo si existe)
const headerOld = document.getElementById('header');
if (headerOld) {
    window.addEventListener('scroll', () => {
        if (window.scrollY >= 50) headerOld.classList.add('scroll-header');
        else headerOld.classList.remove('scroll-header');
    });
}

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
        const targetId = this.getAttribute('href');
        if (!targetId || targetId === '#') return;
        const target = document.querySelector(targetId);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Newsletter (diseño viejo, solo si existe ese formulario específico)
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

// Hover efecto en WhatsApp flotante (si existe en la página)
document.querySelector('.whatsapp-float')?.addEventListener('mouseenter', function() {
    this.style.transform = 'scale(1.1)';
});
document.querySelector('.whatsapp-float')?.addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1)';
});