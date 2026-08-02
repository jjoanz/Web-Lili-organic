// Sistema de Carrito de Compras - Lili Organic

// Genera un placeholder local (sin depender de servicios externos que puedan caerse)
function localPlaceholderImg(text) {
    const label = (text || 'Producto').slice(0, 1).toUpperCase();
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100">
        <rect width="100" height="100" fill="#652C83" rx="10"/>
        <text x="50" y="58" font-size="34" text-anchor="middle" fill="white" font-family="sans-serif">${label}</text>
    </svg>`;
    return 'data:image/svg+xml;base64,' + btoa(svg);
}

function fmtCartPrice(amount, currency) {
    if (typeof formatCurrency === 'function') return formatCurrency(amount, currency);
    return (currency === 'USD' ? '$ ' : 'RD$ ') + Number(amount).toLocaleString();
}

// Devuelve el item del carrito con precio/moneda/nombre actualizados según el mercado vigente,
// usando el catálogo en vivo (PRODUCTS). Si el producto ya no existe, usa el valor guardado.
function liveCartItem(item) {
    if (typeof getProductById === 'function') {
        const live = getProductById(item.id);
        if (live) {
            return { ...item, price: live.price, currency: live.currency, name: live.name, image: live.image || item.image };
        }
    }
    return item;
}

function getLiveCart() {
    return getCart().map(liveCartItem);
}

// Obtener carrito del localStorage
function getCart() {
    const cart = localStorage.getItem('liliorganicCart');
    return cart ? JSON.parse(cart) : [];
}

// Guardar carrito en localStorage
function saveCart(cart) {
    localStorage.setItem('liliorganicCart', JSON.stringify(cart));
    updateCartCount();
}

// Agregar producto al carrito
function addToCart(productId) {
    const product = getProductById(productId);
    if (!product) return;

    const cart = getCart();
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({...product, quantity: 1});
    }

    saveCart(cart);
    if (typeof showNotification === 'function') {
        showNotification(`${product.name} agregado al carrito`, 'success');
    }
}

// Eliminar producto del carrito
function removeFromCart(productId) {
    let cart = getCart();
    cart = cart.filter(item => item.id !== productId);
    saveCart(cart);
    if (typeof loadCartItems === 'function') loadCartItems();
}

// Actualizar cantidad
function updateQuantity(productId, quantity) {
    const cart = getCart();
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity = Math.max(1, parseInt(quantity));
        saveCart(cart);
        if (typeof loadCartItems === 'function') loadCartItems();
    }
}

// ============================================================
// Moneda / envío del carrito (toma la moneda del primer item)
// ============================================================
function getCartCurrency() {
    return (typeof getMarket === 'function' && getMarket() === 'US') ? 'USD' : 'DOP';
}

// Umbrales de envío gratis por moneda (ajustables aquí)
const SHIPPING_RULES = {
    DOP: { freeFrom: 2000, cost: 150 },
    USD: { freeFrom: 50, cost: 8 }
};

// ============================================================
// CUPONES (con descuento real + validación de suscripción)
// ============================================================
const COUPONS = {
    'BIENVENIDA10': { type: 'percent', value: 10, description: '10% de descuento', requiresSubscription: true },
    'PRIMERACOMPRA': { type: 'fixed', value: 150, currency: 'DOP', description: 'RD$ 150 de descuento', requiresSubscription: true },
    'ENVIOGRATIS': { type: 'shipping', value: 0, description: 'Envío gratis', requiresSubscription: true }
};

function getAppliedCoupon() {
    const raw = sessionStorage.getItem('lili_applied_coupon');
    return raw ? JSON.parse(raw) : null;
}

function setAppliedCoupon(codeAndData) {
    if (codeAndData) sessionStorage.setItem('lili_applied_coupon', JSON.stringify(codeAndData));
    else sessionStorage.removeItem('lili_applied_coupon');
}

function removeCoupon() {
    setAppliedCoupon(null);
    updateCartSummary();
    if (typeof showNotification === 'function') showNotification('Cupón removido', 'info');
}

// Calcular totales
function calculateTotals() {
    const cart = getLiveCart();
    const currency = getCartCurrency();
    const rules = SHIPPING_RULES[currency] || SHIPPING_RULES.DOP;

    const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    let shipping = subtotal >= rules.freeFrom ? 0 : rules.cost;

    let discount = 0;
    const applied = getAppliedCoupon();
    if (applied) {
        const coupon = applied.coupon;
        if (coupon.type === 'percent') {
            discount = subtotal * (coupon.value / 100);
        } else if (coupon.type === 'fixed' && (!coupon.currency || coupon.currency === currency)) {
            discount = Math.min(coupon.value, subtotal);
        } else if (coupon.type === 'shipping') {
            shipping = 0;
        }
    }

    const total = Math.max(0, subtotal - discount) + shipping;

    return { subtotal, shipping, discount, total, currency, appliedCoupon: applied };
}

// Actualizar contador del carrito
function updateCartCount() {
    const cart = getCart();
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    const badge = document.getElementById('cartCount');
    if (badge) badge.textContent = count;
}

// Aplicar cupón (lookup simple, la validación real está en handleCoupon)
function applyCoupon(code) {
    return COUPONS[code.toUpperCase()];
}

// Cargar items del carrito (para página de carrito)
function loadCartItems() {
    const cart = getLiveCart();
    const container = document.getElementById('cartItemsContainer');

    if (!container) return;

    if (cart.length === 0) {
        const emptyMsg = (typeof getLang === 'function' && getLang() === 'en')
            ? { title: 'Your cart is empty', text: 'Add some products to get started!', cta: 'Go to Shop' }
            : { title: 'Tu carrito está vacío', text: '¡Agrega algunos productos para comenzar!', cta: 'Ir a la Tienda' };
        container.innerHTML = `<div style="text-align: center; padding: 3rem;"><h3>${emptyMsg.title}</h3><p>${emptyMsg.text}</p><a href="tienda.html" class="btn btn-primary">${emptyMsg.cta}</a></div>`;
        const summary = document.getElementById('cartSummary');
        if (summary) summary.style.display = 'none';
        return;
    }

    container.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-image">
                <img src="${item.image}" alt="${item.name}" onerror="this.onerror=null; this.src=localPlaceholderImg('${item.name.replace(/'/g, "")}')">
            </div>
            <div class="cart-item-info">
                <h3>${item.name}</h3>
                <p class="cart-item-price">${fmtCartPrice(item.price, item.currency)}</p>
                <div class="quantity-controls">
                    <button class="quantity-btn" onclick="updateQuantity('${item.id}', ${item.quantity - 1})">-</button>
                    <input type="number" class="quantity-input" value="${item.quantity}" min="1" onchange="updateQuantity('${item.id}', this.value)">
                    <button class="quantity-btn" onclick="updateQuantity('${item.id}', ${item.quantity + 1})">+</button>
                </div>
            </div>
            <div class="cart-item-actions">
                <p style="font-size: 1.25rem; font-weight: 700; color: var(--color-primary);">${fmtCartPrice(item.price * item.quantity, item.currency)}</p>
                <button class="remove-item" onclick="removeFromCart('${item.id}')" title="Eliminar">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        </div>
    `).join('');

    updateCartSummary();
}

// Actualizar resumen del carrito
function updateCartSummary() {
    const { subtotal, shipping, discount, total, currency, appliedCoupon } = calculateTotals();
    const summaryContainer = document.getElementById('cartSummary');
    const isEn = typeof getLang === 'function' && getLang() === 'en';
    const rules = SHIPPING_RULES[currency] || SHIPPING_RULES.DOP;

    const labels = isEn
        ? { subtotal: 'Subtotal:', shipping: 'Shipping:', free: 'FREE!', freeNote: `Free shipping on orders over ${fmtCartPrice(rules.freeFrom, currency)}`, coupon: 'Coupon code', apply: 'Apply', total: 'Total:', checkout: 'Proceed to Checkout', continue: 'Continue Shopping', discount: 'Discount', remove: 'Remove' }
        : { subtotal: 'Subtotal:', shipping: 'Envío:', free: '¡GRATIS!', freeNote: `Envío gratis en compras mayores a ${fmtCartPrice(rules.freeFrom, currency)}`, coupon: 'Código de cupón', apply: 'Aplicar', total: 'Total:', checkout: 'Proceder al Pago', continue: 'Continuar Comprando', discount: 'Descuento', remove: 'Quitar' };

    if (summaryContainer) {
        summaryContainer.style.display = '';
        summaryContainer.innerHTML = `
            <h3 style="margin-bottom: 1.5rem;">${isEn ? 'Order Summary' : 'Resumen del Pedido'}</h3>
            <div class="summary-row">
                <span>${labels.subtotal}</span>
                <span>${fmtCartPrice(subtotal, currency)}</span>
            </div>
            ${discount > 0 ? `
            <div class="summary-row">
                <span>${labels.discount} (${appliedCoupon.code}) <a href="#" onclick="event.preventDefault(); removeCoupon();" style="font-size:0.75rem; color:var(--color-gray-dark, #999);">[${labels.remove}]</a></span>
                <span style="color: var(--color-success, #38a169);">-${fmtCartPrice(discount, currency)}</span>
            </div>` : ''}
            <div class="summary-row">
                <span>${labels.shipping}</span>
                <span>${shipping === 0 ? `<strong style="color: var(--color-success);">${labels.free}</strong>` : fmtCartPrice(shipping, currency)}</span>
            </div>
            ${shipping > 0 ? `<p style="font-size: 0.875rem; color: var(--color-info); margin: 0.5rem 0;">${labels.freeNote}</p>` : ''}
            ${!appliedCoupon ? `
            <div class="coupon-input">
                <input type="text" id="couponCode" placeholder="${labels.coupon}">
                <button class="btn btn-secondary btn-sm" onclick="handleCoupon()">${labels.apply}</button>
            </div>` : ''}
            <div class="summary-row total">
                <span>${labels.total}</span>
                <span>${fmtCartPrice(total, currency)}</span>
            </div>
            <a href="carrito.html#checkout" class="btn btn-primary" style="width: 100%; margin-top: 1rem;">${labels.checkout}</a>
            <a href="tienda.html" style="display: block; text-align: center; margin-top: 1rem; color: var(--color-gray-dark);">${labels.continue}</a>
        `;
    }
}

// Manejar cupón (valida suscripción real y aplica el descuento de verdad)
async function handleCoupon() {
    const input = document.getElementById('couponCode');
    const code = input.value.trim().toUpperCase();
    const coupon = applyCoupon(code);
    const isEn = typeof getLang === 'function' && getLang() === 'en';

    if (!coupon) {
        if (typeof showNotification === 'function') showNotification(isEn ? 'Invalid coupon' : 'Cupón no válido', 'error');
        return;
    }

    if (coupon.type === 'fixed' && coupon.currency && typeof getCartCurrency === 'function' && getCartCurrency() !== coupon.currency) {
        if (typeof showNotification === 'function') showNotification(isEn ? 'This coupon is not available in your currency' : 'Este cupón no está disponible en tu moneda', 'error');
        return;
    }

    if (coupon.requiresSubscription) {
        const emailField = document.getElementById('email');
        const email = emailField ? emailField.value.trim() : '';

        if (!email) {
            if (typeof showNotification === 'function') {
                showNotification(isEn ? 'Enter your email in the checkout form first to validate this coupon' : 'Ingresa tu email en el formulario de checkout primero para validar este cupón', 'error');
            }
            return;
        }

        try {
            const res = await fetch(
                `${SUPABASE_URL}/rest/v1/newsletter_subscribers?email=eq.${encodeURIComponent(email)}&select=id`,
                { headers: HEADERS }
            );
            const rows = await res.json();

            if (!rows || rows.length === 0) {
                if (typeof showNotification === 'function') {
                    showNotification(isEn ? 'This coupon is only for subscribers. Subscribe first with this same email.' : 'Este cupón es solo para suscriptores. Suscríbete primero con este mismo correo.', 'error');
                }
                return;
            }
        } catch (err) {
            if (typeof showNotification === 'function') showNotification(isEn ? 'Error validating coupon' : 'Error al validar el cupón', 'error');
            return;
        }
    }

    setAppliedCoupon({ code, coupon });
    updateCartSummary();
    if (typeof showNotification === 'function') showNotification(`¡Cupón aplicado! ${coupon.description}`, 'success');
}

// Vaciar carrito
function clearCart() {
    localStorage.removeItem('liliorganicCart');
    setAppliedCoupon(null);
    updateCartCount();
    if (typeof loadCartItems === 'function') loadCartItems();
}

// Inicializar
document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
});