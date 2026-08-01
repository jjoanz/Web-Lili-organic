// ============================================================================
// SUPABASE API CLIENT - LILI ORGANIC
// ============================================================================

const SUPABASE_URL = 'https://tvxknfbfusuppuwsdwag.supabase.co';
const SUPABASE_KEY = 'sb_publishable_PchhZA-S7q-nGckaaK4-rw_tQW_SHgw';
const HEADERS = {
    'apikey': SUPABASE_KEY,
    'Authorization': `Bearer ${SUPABASE_KEY}`,
    'Content-Type': 'application/json'
};

// Cache simple
const cache = { products: null, timestamp: null };
const CACHE_DURATION = 5 * 60 * 1000;

// Variable global compatible con código existente
let PRODUCTS = [];

// ============================================================================
// OBTENER PRODUCTOS
// ============================================================================
async function getProductsFromSupabase() {
    // Verificar cache
    if (cache.products && (Date.now() - cache.timestamp) < CACHE_DURATION) {
        return cache.products;
    }

    try {
        const response = await fetch(
            `${SUPABASE_URL}/rest/v1/productos?activo=eq.true&order=id.asc`,
            { headers: HEADERS }
        );

        if (!response.ok) throw new Error('Error al cargar productos');

        let data = await response.json();

        // En mercado US, solo se listan productos con precio_usd definido
        if (typeof getMarket === 'function' && getMarket() === 'US') {
            data = data.filter(row => row.precio_usd !== null && row.precio_usd !== undefined);
        }

        // Traducción automática (si no hay texto en inglés cargado manualmente)
        if (typeof autoTranslateFields === 'function') {
            await autoTranslateFields(data, ['nombre', 'descripcion', 'uso']);
        }

        const products = data.map(formatProduct);

        cache.products = products;
        cache.timestamp = Date.now();

        return products;
    } catch (error) {
        console.error('Error Supabase:', error);
        return [];
    }
}

// ============================================================================
// FORMATO DE PRODUCTO (Supabase → tienda) — respeta mercado RD/US
// ============================================================================
function formatProduct(row) {
    const market = (typeof getMarket === 'function') ? getMarket() : 'RD';
    const isUS = market === 'US';

    const price = isUS && row.precio_usd !== null && row.precio_usd !== undefined
        ? parseFloat(row.precio_usd)
        : parseFloat(row.precio);

    const priceNormal = isUS
        ? (row.precio_normal_usd !== null && row.precio_normal_usd !== undefined ? parseFloat(row.precio_normal_usd) : null)
        : (row.precio_normal !== null && row.precio_normal !== undefined ? parseFloat(row.precio_normal) : null);

    const name = isUS && row.nombre_en ? row.nombre_en : row.nombre;
    const description = isUS && row.descripcion_en ? row.descripcion_en : (row.descripcion || '');
    const usage = isUS && row.uso_en ? row.uso_en : (row.uso || '');

    return {
        id: String(row.id),
        name: name,
        category: row.categoria,
        description: description,
        price: price,
        priceNormal: priceNormal,
        currency: isUS ? 'USD' : 'DOP',
        image: row.imagen_url || '',
        stock: parseInt(row.stock) || 0,
        rating: parseFloat(row.rating) || 5,
        reviews: parseInt(row.reviews) || 0,
        badge: row.badge || '',
        usage: usage,
        sizes: []
    };
}

// ============================================================================
// FUNCIONES COMPATIBLES CON EL CÓDIGO EXISTENTE
// ============================================================================
function getProductById(id) {
    return PRODUCTS.find(p => p.id === String(id));
}

function getCategoryName(category) {
    if (typeof catName === 'function') return catName(category);
    const categories = {
        'shampoo': 'Shampoos',
        'acondicionador': 'Acondicionadores',
        'tratamiento': 'Tratamientos',
        'serum': 'Sueros',
        'combo': 'Combos',
        'cuidado-personal': 'Cuidado Personal'
    };
    return categories[category] || category;
}

function formatCurrency(amount, currency) {
    if (currency === 'USD') {
        return '$ ' + Number(amount).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    }
    return 'RD$ ' + Number(amount).toLocaleString('es-DO');
}

function viewProduct(id) {
    const product = getProductById(id);
    if (!product) return;
    let usageInfo = product.usage ? `\n\nModo de uso:\n${product.usage}` : '';
    alert(`${product.name}\n\nPrecio: ${formatCurrency(product.price, product.currency)}\n\n${product.description}${usageInfo}\n\nStock disponible: ${product.stock} unidades`);
}

function displayProducts(products, containerId = 'productsGrid') {
    const container = document.getElementById(containerId);
    if (!container) return;

    if (products.length === 0) {
        container.innerHTML = '<p style="text-align:center; color: var(--color-gray); padding: 3rem;">No se encontraron productos.</p>';
        return;
    }

    container.innerHTML = products.map(product => `
        <div class="product-card">
            ${product.badge ? `<div class="product-badge">${product.badge}</div>` : ''}
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" 
                     onerror="this.onerror=null; this.style.display='none'; this.parentElement.style.background='#652C83';">
                <div class="product-overlay">
                    <button class="btn btn-secondary btn-sm" onclick="viewProduct('${product.id}')">
                        <i class="fas fa-eye"></i> Ver Detalles
                    </button>
                </div>
            </div>
            <div class="product-info">
                <div class="product-category">${getCategoryName(product.category)}</div>
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-rating">
                    ${'<i class="fas fa-star"></i>'.repeat(Math.round(product.rating))}
                    <span style="margin-left: 0.5rem; color: var(--color-gray); font-size: 0.875rem;">(${product.reviews})</span>
                </div>
                <div class="product-footer">
                    <span class="product-price">${formatCurrency(product.price, product.currency)}</span>
                    <button class="add-to-cart" onclick="addToCart('${product.id}')">
                        <i class="fas fa-shopping-cart"></i> Agregar
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// ============================================================================
// INICIALIZACIÓN
// ============================================================================
async function initializeProducts() {
    const products = await getProductsFromSupabase();
    PRODUCTS.length = 0;
    PRODUCTS.push(...products);

    const container = document.getElementById('productsGrid');
    if (container) displayProducts(products);

    return products;
}

// Auto-inicializar
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeProducts);
} else {
    initializeProducts();
}