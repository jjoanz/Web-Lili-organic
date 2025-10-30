// Base de datos de productos - Lili Organic
const PRODUCTS = [
    {
        id: '1',
        name: 'Shampoo Fortalecedor',
        category: 'shampoo',
        description: 'Fortalece y reduce la caída del cabello con extractos de romero y biotina.',
        price: 650,
        image: 'images/products/shampoo-fortalecedor.jpg',
        rating: 5,
        reviews: 128,
        badge: 'Más Vendido',
        stock: 45
    },
    {
        id: '2',
        name: 'Acondicionador Nutritivo',
        category: 'acondicionador',
        description: 'Hidratación profunda con aceite de coco y manteca de karité orgánica.',
        price: 650,
        image: 'images/products/acondicionador.jpg',
        rating: 5,
        reviews: 95,
        badge: 'Favorito',
        stock: 38
    },
    {
        id: '3',
        name: 'Suero Capilar Growth',
        category: 'serum',
        description: 'Estimula el crecimiento con extracto de romero, menta y cafeína natural.',
        price: 400,
        image: 'images/products/suero-growth.jpg',
        rating: 5,
        reviews: 156,
        badge: 'Top #1',
        stock: 52
    },
    {
        id: '4',
        name: 'Mascarilla Hidratante',
        category: 'tratamiento',
        description: 'Tratamiento intensivo con aloe vera, aguacate y proteínas de seda.',
        price: 1000,
        image: 'images/products/mascarilla.jpg',
        rating: 5,
        reviews: 87,
        stock: 30
    },
    {
        id: '5',
        name: 'Shop Capilar Anticaída',
        category: 'tratamiento',
        description: 'Reduce la caída hasta en un 80% con extractos naturales concentrados.',
        price: 750,
        image: 'images/products/shop-anticaida.jpg',
        rating: 5,
        reviews: 143,
        badge: 'Nuevo',
        stock: 28
    },
    {
        id: '6',
        name: 'Botox Capilar Premium',
        category: 'tratamiento',
        description: 'Reparación profunda con colágeno, keratina y vitaminas E y B5.',
        price: 450,
        image: 'images/products/botox.jpg',
        rating: 4,
        reviews: 76,
        stock: 35
    },
    {
        id: '7',
        name: 'Aceite Capilar Nutritivo',
        category: 'tratamiento',
        description: 'Mezcla de 7 aceites esenciales: argán, jojoba, almendras y más.',
        price: 350,
        image: 'images/products/aceite.jpg',
        rating: 5,
        reviews: 112,
        stock: 48
    },
    {
        id: '8',
        name: 'Spray Leave-in Hidratante',
        category: 'tratamiento',
        description: 'Hidratación instantánea sin enjuague con extracto de aloe y pantenol.',
        price: 450,
        image: 'images/products/spray.jpg',
        rating: 5,
        reviews: 89,
        stock: 41
    },
    {
        id: '9',
        name: 'Crema de Peinar Rizos',
        category: 'tratamiento',
        description: 'Define y controla el frizz con manteca de cacao y aceite de coco.',
        price: 550,
        image: 'images/products/crema-rizos.jpg',
        rating: 5,
        reviews: 67,
        badge: 'Popular',
        stock: 33
    },
    {
        id: '10',
        name: 'Combo Crecimiento Capilar',
        category: 'combo',
        description: 'Kit completo: Shampoo + Acondicionador + Suero Growth + Mascarilla.',
        price: 1500,
        oldPrice: 2050,
        image: 'images/products/combo.jpg',
        rating: 5,
        reviews: 234,
        badge: '¡Ahorra RD$ 550!',
        stock: 22
    }
];

// Función para mostrar productos
function displayProducts(products, containerId = 'productsGrid') {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.innerHTML = '';
    
    products.forEach(product => {
        const productCard = `
            <div class="product-card">
                ${product.badge ? `<div class="product-badge">${product.badge}</div>` : ''}
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}" onerror="this.src='https://via.placeholder.com/300x280/652C83/FFFFFF?text=${encodeURIComponent(product.name)}'">
                    <div class="product-overlay">
                        <button class="btn btn-secondary btn-sm" onclick="viewProduct('${product.id}')">
                            <i class="fas fa-eye"></i> Ver Detalles
                        </button>
                    </div>
                </div>
                <div class="product-info">
                    <div class="product-category">${product.category}</div>
                    <h3 class="product-name">${product.name}</h3>
                    <p class="product-description">${product.description}</p>
                    <div class="product-rating">
                        ${'<i class="fas fa-star"></i>'.repeat(product.rating)}
                        <span style="margin-left: 0.5rem; color: var(--color-gray); font-size: 0.875rem;">(${product.reviews})</span>
                    </div>
                    <div class="product-footer">
                        <div>
                            <span class="product-price">RD$ ${product.price.toLocaleString()}</span>
                            ${product.oldPrice ? `<span class="product-price-old">RD$ ${product.oldPrice.toLocaleString()}</span>` : ''}
                        </div>
                        <button class="add-to-cart" onclick="addToCart('${product.id}')">
                            <i class="fas fa-shopping-cart"></i>
                            Agregar
                        </button>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += productCard;
    });
}

// Obtener producto por ID
function getProductById(id) {
    return PRODUCTS.find(p => p.id === id);
}

// Ver detalles del producto
function viewProduct(id) {
    const product = getProductById(id);
    if (product) {
        alert(`Producto: ${product.name}\n\nPrecio: RD$ ${product.price}\n\n${product.description}\n\nStock disponible: ${product.stock} unidades`);
    }
}
