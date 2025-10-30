// Sistema de Carrito de Compras - Lili Organic

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
    showNotification(`${product.name} agregado al carrito`, 'success');
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

// Calcular totales
function calculateTotals() {
    const cart = getCart();
    const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    const shipping = subtotal >= 2000 ? 0 : 150;
    const total = subtotal + shipping;
    
    return { subtotal, shipping, total };
}

// Actualizar contador del carrito
function updateCartCount() {
    const cart = getCart();
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    const badge = document.getElementById('cartCount');
    if (badge) badge.textContent = count;
}

// Aplicar cupón
function applyCoupon(code) {
    const coupons = {
        'BIENVENIDA10': { type: 'percent', value: 10, description: '10% de descuento' },
        'PRIMERACOMPRA': { type: 'fixed', value: 150, description: 'RD$ 150 de descuento' },
        'ENVIOGRATIS': { type: 'shipping', value: 0, description: 'Envío gratis' }
    };
    
    return coupons[code.toUpperCase()];
}

// Cargar items del carrito (para página de carrito)
function loadCartItems() {
    const cart = getCart();
    const container = document.getElementById('cartItemsContainer');
    
    if (!container) return;
    
    if (cart.length === 0) {
        container.innerHTML = '<div style="text-align: center; padding: 3rem;"><h3>Tu carrito está vacío</h3><p>¡Agrega algunos productos para comenzar!</p><a href="tienda.html" class="btn btn-primary">Ir a la Tienda</a></div>';
        document.getElementById('cartSummary').style.display = 'none';
        return;
    }
    
    container.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-image">
                <img src="${item.image}" alt="${item.name}" onerror="this.src='https://via.placeholder.com/100x100/652C83/FFFFFF?text=Producto'">
            </div>
            <div class="cart-item-info">
                <h3>${item.name}</h3>
                <p class="cart-item-price">RD$ ${item.price.toLocaleString()}</p>
                <div class="quantity-controls">
                    <button class="quantity-btn" onclick="updateQuantity('${item.id}', ${item.quantity - 1})">-</button>
                    <input type="number" class="quantity-input" value="${item.quantity}" min="1" onchange="updateQuantity('${item.id}', this.value)">
                    <button class="quantity-btn" onclick="updateQuantity('${item.id}', ${item.quantity + 1})">+</button>
                </div>
            </div>
            <div class="cart-item-actions">
                <p style="font-size: 1.25rem; font-weight: 700; color: var(--color-primary);">RD$ ${(item.price * item.quantity).toLocaleString()}</p>
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
    const { subtotal, shipping, total } = calculateTotals();
    const summaryContainer = document.getElementById('cartSummary');
    
    if (summaryContainer) {
        summaryContainer.innerHTML = `
            <h3 style="margin-bottom: 1.5rem;">Resumen del Pedido</h3>
            <div class="summary-row">
                <span>Subtotal:</span>
                <span>RD$ ${subtotal.toLocaleString()}</span>
            </div>
            <div class="summary-row">
                <span>Envío:</span>
                <span>${shipping === 0 ? '<strong style="color: var(--color-success);">¡GRATIS!</strong>' : `RD$ ${shipping}`}</span>
            </div>
            ${shipping > 0 ? `<p style="font-size: 0.875rem; color: var(--color-info); margin: 0.5rem 0;">Envío gratis en compras mayores a RD$ 2,000</p>` : ''}
            <div class="coupon-input">
                <input type="text" id="couponCode" placeholder="Código de cupón">
                <button class="btn btn-secondary btn-sm" onclick="handleCoupon()">Aplicar</button>
            </div>
            <div class="summary-row total">
                <span>Total:</span>
                <span>RD$ ${total.toLocaleString()}</span>
            </div>
            <a href="carrito.html#checkout" class="btn btn-primary" style="width: 100%; margin-top: 1rem;">Proceder al Pago</a>
            <a href="tienda.html" style="display: block; text-align: center; margin-top: 1rem; color: var(--color-gray-dark);">Continuar Comprando</a>
        `;
    }
}

// Manejar cupón
function handleCoupon() {
    const input = document.getElementById('couponCode');
    const code = input.value.trim();
    const coupon = applyCoupon(code);
    
    if (coupon) {
        showNotification(`¡Cupón aplicado! ${coupon.description}`, 'success');
    } else {
        showNotification('Cupón no válido', 'error');
    }
}

// Vaciar carrito
function clearCart() {
    if (confirm('¿Estás segura de que deseas vaciar el carrito?')) {
        localStorage.removeItem('liliorganicCart');
        updateCartCount();
        if (typeof loadCartItems === 'function') loadCartItems();
        showNotification('Carrito vaciado', 'info');
    }
}

// Inicializar
document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
});
