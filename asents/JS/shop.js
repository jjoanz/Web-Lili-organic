// shop.js - Lógica de la tienda con filtros y búsqueda

// Variables globales
let allProducts = [];
let filteredProducts = [];

// Inicializar cuando cargue la página
document.addEventListener('DOMContentLoaded', function() {
    // Cargar productos
    if (typeof PRODUCTS !== 'undefined') {
        allProducts = [...PRODUCTS];
        filteredProducts = [...PRODUCTS];
        displayProducts(filteredProducts);
        updateProductCount();
    }
    
    // Event listeners para filtros
    const searchInput = document.getElementById('searchInput');
    const categoryFilter = document.getElementById('categoryFilter');
    const priceFilter = document.getElementById('priceFilter');
    const sortFilter = document.getElementById('sortFilter');
    
    if (searchInput) {
        searchInput.addEventListener('input', applyFilters);
    }
    
    if (categoryFilter) {
        categoryFilter.addEventListener('change', applyFilters);
    }
    
    if (priceFilter) {
        priceFilter.addEventListener('change', applyFilters);
    }
    
    if (sortFilter) {
        sortFilter.addEventListener('change', applyFilters);
    }
});

// Aplicar todos los filtros
function applyFilters() {
    const searchTerm = document.getElementById('searchInput')?.value.toLowerCase() || '';
    const category = document.getElementById('categoryFilter')?.value || 'all';
    const priceRange = document.getElementById('priceFilter')?.value || 'all';
    const sortBy = document.getElementById('sortFilter')?.value || 'default';
    
    // Filtrar productos
    filteredProducts = allProducts.filter(product => {
        // Filtro de búsqueda
        const matchesSearch = product.name.toLowerCase().includes(searchTerm) || 
                            product.description.toLowerCase().includes(searchTerm) ||
                            getCategoryName(product.category).toLowerCase().includes(searchTerm);
        
        if (!matchesSearch) return false;
        
        // Filtro de categoría
        const matchesCategory = category === 'all' || product.category === category;
        if (!matchesCategory) return false;
        
        // Filtro de precio
        if (priceRange !== 'all') {
            const productPrice = product.price;
            
            if (priceRange === '0-500') {
                if (productPrice > 500) return false;
            } else if (priceRange === '500-800') {
                if (productPrice < 500 || productPrice > 800) return false;
            } else if (priceRange === '800-1000') {
                if (productPrice < 800 || productPrice > 1000) return false;
            } else if (priceRange === '1000-2000') {
                if (productPrice < 1000 || productPrice > 2000) return false;
            } else if (priceRange === '2000+') {
                if (productPrice < 2000) return false;
            }
        }
        
        return true;
    });
    
    // Ordenar productos
    sortProducts(sortBy);
    
    // Mostrar productos filtrados
    displayProducts(filteredProducts);
    updateProductCount();
}

// Ordenar productos
function sortProducts(sortBy) {
    switch (sortBy) {
        case 'price-low':
            filteredProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            filteredProducts.sort((a, b) => b.price - a.price);
            break;
        case 'name':
            filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'popular':
            filteredProducts.sort((a, b) => b.reviews - a.reviews);
            break;
        case 'default':
        default:
            // Mantener orden original (destacados)
            filteredProducts = filteredProducts.sort((a, b) => {
                // Priorizar productos con badge
                if (a.badge && !b.badge) return -1;
                if (!a.badge && b.badge) return 1;
                // Luego por rating
                if (a.rating !== b.rating) return b.rating - a.rating;
                // Finalmente por reviews
                return b.reviews - a.reviews;
            });
            break;
    }
}

// Actualizar contador de productos
function updateProductCount() {
    const countElement = document.getElementById('productsCount');
    if (countElement) {
        const count = filteredProducts.length;
        const total = allProducts.length;
        
        if (count === total) {
            countElement.innerHTML = `<p>Mostrando <strong>${count}</strong> productos</p>`;
        } else {
            countElement.innerHTML = `<p>Mostrando <strong>${count}</strong> de <strong>${total}</strong> productos</p>`;
        }
    }
}

// Limpiar filtros
function clearFilters() {
    const searchInput = document.getElementById('searchInput');
    const categoryFilter = document.getElementById('categoryFilter');
    const priceFilter = document.getElementById('priceFilter');
    const sortFilter = document.getElementById('sortFilter');
    
    if (searchInput) searchInput.value = '';
    if (categoryFilter) categoryFilter.value = 'all';
    if (priceFilter) priceFilter.value = 'all';
    if (sortFilter) sortFilter.value = 'default';
    
    applyFilters();
}

// Función mejorada para ver detalles del producto
function viewProduct(id) {
    const product = getProductById(id);
    if (!product) return;
    
    // Crear modal de detalles
    const modal = document.createElement('div');
    modal.className = 'product-modal';
    modal.innerHTML = `
        <div class="modal-overlay" onclick="closeProductModal()"></div>
        <div class="modal-content">
            <button class="modal-close" onclick="closeProductModal()">
                <i class="fas fa-times"></i>
            </button>
            <div class="modal-body">
                <div class="modal-image">
                    <img src="${product.image}" alt="${product.name}" 
                         onerror="this.src='https://via.placeholder.com/400x400/652C83/FFFFFF?text=${encodeURIComponent(product.name)}'">
                    ${product.badge ? `<div class="product-badge">${product.badge}</div>` : ''}
                </div>
                <div class="modal-info">
                    <div class="product-category">${getCategoryName(product.category)}</div>
                    <h2>${product.name}</h2>
                    <div class="product-rating">
                        ${'<i class="fas fa-star"></i>'.repeat(product.rating)}
                        <span>(${product.reviews} reseñas)</span>
                    </div>
                    <p class="product-description">${product.description}</p>
                    
                    ${product.usage ? `
                        <div class="product-usage">
                            <h3><i class="fas fa-info-circle"></i> Modo de uso</h3>
                            <p>${product.usage}</p>
                        </div>
                    ` : ''}
                    
                    ${product.sizes && product.sizes.length > 0 ? `
                        <div class="product-sizes">
                            <h3>Tamaños disponibles</h3>
                            <div class="sizes-list">
                                ${product.sizes.map(size => `
                                    <div class="size-option">
                                        <span class="size-label">${size.size}</span>
                                        <span class="size-price">RD$ ${size.price.toLocaleString()}</span>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    ` : ''}
                    
                    <div class="product-price-section">
                        <div class="price-info">
                            <span class="product-price">RD$ ${product.price.toLocaleString()}</span>
                            ${product.oldPrice ? `<span class="product-price-old">RD$ ${product.oldPrice.toLocaleString()}</span>` : ''}
                        </div>
                        <div class="stock-info ${product.stock < 10 ? 'low-stock' : ''}">
                            <i class="fas fa-box"></i>
                            ${product.stock} disponibles
                            ${product.stock < 10 ? '<span class="low-stock-label">¡Últimas unidades!</span>' : ''}
                        </div>
                    </div>
                    
                    <button class="btn btn-primary btn-block" onclick="addToCart('${product.id}'); closeProductModal();">
                        <i class="fas fa-shopping-cart"></i>
                        Agregar al carrito
                    </button>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
    
    // Animar entrada
    setTimeout(() => modal.classList.add('active'), 10);
}

// Cerrar modal de producto
function closeProductModal() {
    const modal = document.querySelector('.product-modal');
    if (modal) {
        modal.classList.remove('active');
        setTimeout(() => {
            modal.remove();
            document.body.style.overflow = '';
        }, 300);
    }
}

// Estilos CSS para el modal (agregar al CSS principal)
const modalStyles = `
<style>
.product-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10000;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.product-modal.active {
    opacity: 1;
}

.modal-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    cursor: pointer;
}

.modal-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    border-radius: 1rem;
    max-width: 900px;
    width: 90%;
    max-height: 90vh;
    overflow-y: auto;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
}

.modal-close {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: rgba(255, 255, 255, 0.9);
    border: none;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
    z-index: 10;
    transition: all 0.3s ease;
}

.modal-close:hover {
    background: white;
    transform: rotate(90deg);
}

.modal-body {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    padding: 2rem;
}

.modal-image {
    position: relative;
}

.modal-image img {
    width: 100%;
    border-radius: 0.5rem;
}

.modal-info h2 {
    margin: 0.5rem 0;
    color: var(--color-primary);
}

.product-usage {
    background: #f8f9fa;
    padding: 1rem;
    border-radius: 0.5rem;
    margin: 1rem 0;
}

.product-usage h3 {
    margin: 0 0 0.5rem;
    font-size: 1rem;
    color: var(--color-primary);
}

.product-sizes {
    margin: 1.5rem 0;
}

.sizes-list {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.size-option {
    display: flex;
    justify-content: space-between;
    padding: 0.75rem;
    background: #f8f9fa;
    border-radius: 0.5rem;
}

.size-label {
    font-weight: 600;
}

.size-price {
    color: var(--color-primary);
    font-weight: 700;
}

.product-price-section {
    margin: 1.5rem 0;
    padding: 1rem;
    background: #f8f9fa;
    border-radius: 0.5rem;
}

.stock-info {
    margin-top: 0.5rem;
    color: green;
    font-size: 0.875rem;
}

.stock-info.low-stock {
    color: orange;
}

.low-stock-label {
    display: inline-block;
    margin-left: 0.5rem;
    padding: 0.25rem 0.5rem;
    background: orange;
    color: white;
    border-radius: 0.25rem;
    font-size: 0.75rem;
}

.products-count {
    margin: 1.5rem 0;
    text-align: center;
    color: var(--color-gray);
}

@media (max-width: 768px) {
    .modal-body {
        grid-template-columns: 1fr;
        gap: 1rem;
        padding: 1rem;
    }
    
    .modal-content {
        width: 95%;
    }
}
</style>
`;

// Insertar estilos
if (!document.querySelector('#modal-styles')) {
    const styleElement = document.createElement('div');
    styleElement.id = 'modal-styles';
    styleElement.innerHTML = modalStyles;
    document.head.appendChild(styleElement);
}