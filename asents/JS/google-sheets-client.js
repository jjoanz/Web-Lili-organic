// ============================================================================
// GOOGLE SHEETS API CLIENT - LILI ORGANIC
// ============================================================================
// Este archivo REEMPLAZA completamente products.js
// Conecta tu tienda web con Google Sheets como base de datos

// ============================================================================
// CONFIGURACIÓN - CAMBIAR SOLO ESTA URL
// ============================================================================
const GOOGLE_SHEETS_CONFIG = {
    // ⚠️ PEGA AQUÍ LA URL DE TU WEB APP DE GOOGLE APPS SCRIPT
   API_URL: 'https://script.google.com/macros/s/AKfycbzsFeJHn_nfrUP0CoedMAYRAW00aHKKVYJKHBs6N_lPKQUQ-b2pe5vS4WdcPQH_hn0uaA/exec',
    
    // Configuración de cache (5 minutos)
    CACHE_DURATION: 5 * 60 * 1000,
    USE_CACHE: true
};

// ============================================================================
// SISTEMA DE CACHE
// ============================================================================
const cache = {
    data: {},
    timestamps: {},
    
    set(key, value) {
        this.data[key] = value;
        this.timestamps[key] = Date.now();
    },
    
    get(key) {
        if (!this.data[key]) return null;
        
        const age = Date.now() - this.timestamps[key];
        if (age > GOOGLE_SHEETS_CONFIG.CACHE_DURATION) {
            delete this.data[key];
            delete this.timestamps[key];
            return null;
        }
        
        return this.data[key];
    },
    
    clear() {
        this.data = {};
        this.timestamps = {};
    }
};

// ============================================================================
// VARIABLE GLOBAL PRODUCTS (Compatible con código existente)
// ============================================================================
let PRODUCTS = [];

// ============================================================================
// FUNCIONES API - OBTENER DATOS
// ============================================================================

/**
 * Obtener todos los productos desde Google Sheets
 */
async function getProductsFromSheets() {
    const cacheKey = 'products';
    
    // Verificar cache
    if (GOOGLE_SHEETS_CONFIG.USE_CACHE) {
        const cached = cache.get(cacheKey);
        if (cached) {
            console.log('📦 Productos cargados desde cache');
            return cached;
        }
    }
    
    try {
        showLoader('Cargando productos...');
        
        const response = await fetch(`${GOOGLE_SHEETS_CONFIG.API_URL}?action=getProducts`);
        const result = await response.json();
        
        hideLoader();
        
        if (result.success) {
            const products = formatProductsFromSheets(result.data);
            
            // Guardar en cache
            if (GOOGLE_SHEETS_CONFIG.USE_CACHE) {
                cache.set(cacheKey, products);
            }
            
            console.log(`✅ ${products.length} productos cargados desde Google Sheets`);
            return products;
        } else {
            throw new Error(result.error || 'Error al cargar productos');
        }
    } catch (error) {
        console.error('❌ Error:', error);
        hideLoader();
        showError('No se pudieron cargar los productos. Por favor, recarga la página.');
        return [];
    }
}

/**
 * Obtener un producto específico por ID
 */
async function getProductByIdFromSheets(productId) {
    try {
        const response = await fetch(`${GOOGLE_SHEETS_CONFIG.API_URL}?action=getProductById&id=${productId}`);
        const result = await response.json();
        
        if (result.success) {
            return formatSingleProduct(result.data);
        } else {
            throw new Error(result.error || 'Producto no encontrado');
        }
    } catch (error) {
        console.error('❌ Error:', error);
        return null;
    }
}

/**
 * Obtener categorías desde Google Sheets
 */
async function getCategoriesFromSheets() {
    const cacheKey = 'categories';
    
    if (GOOGLE_SHEETS_CONFIG.USE_CACHE) {
        const cached = cache.get(cacheKey);
        if (cached) return cached;
    }
    
    try {
        const response = await fetch(`${GOOGLE_SHEETS_CONFIG.API_URL}?action=getCategories`);
        const result = await response.json();
        
        if (result.success) {
            if (GOOGLE_SHEETS_CONFIG.USE_CACHE) {
                cache.set(cacheKey, result.data);
            }
            return result.data;
        }
        return [];
    } catch (error) {
        console.error('❌ Error al cargar categorías:', error);
        return [];
    }
}

/**
 * Obtener descuentos activos
 */
async function getActiveDiscounts() {
    try {
        const response = await fetch(`${GOOGLE_SHEETS_CONFIG.API_URL}?action=getDiscounts`);
        const result = await response.json();
        
        if (result.success) {
            return result.data;
        }
        return [];
    } catch (error) {
        console.error('❌ Error al cargar descuentos:', error);
        return [];
    }
}

/**
 * Crear una nueva orden
 */
async function createOrder(orderData) {
    try {
        showLoader('Procesando orden...');
        
        const response = await fetch(GOOGLE_SHEETS_CONFIG.API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                action: 'addOrder',
                ...orderData
            })
        });
        
        const result = await response.json();
        hideLoader();
        
        if (result.success) {
            console.log('✅ Orden creada:', result.order_number);
            return result;
        } else {
            throw new Error(result.error || 'Error al crear la orden');
        }
    } catch (error) {
        console.error('❌ Error:', error);
        hideLoader();
        showError('No se pudo procesar la orden. Por favor, intenta de nuevo.');
        return null;
    }
}

// ============================================================================
// FUNCIONES DE FORMATO
// ============================================================================

/**
 * Formatear productos desde el formato de Google Sheets al formato de la tienda
 */
function formatProductsFromSheets(sheetsData) {
    return sheetsData.map(row => ({
        id: String(row.ID),
        name: row.Nombre,
        category: row.Categoria,
        description: row.Descripcion,
        price: parseFloat(row.Precio),
        image: row.Imagen_URL || `https://via.placeholder.com/300x280/652C83/FFFFFF?text=${encodeURIComponent(row.Nombre)}`,
        stock: parseInt(row.Stock) || 0,
        rating: parseFloat(row.Rating) || 5,
        reviews: parseInt(row.Reviews) || 0,
        badge: row.Badge || '',
        usage: row.Modo_Uso || '',
        sizes: [] // Se cargarán bajo demanda si es necesario
    }));
}

/**
 * Formatear un solo producto con sus tamaños
 */
function formatSingleProduct(data) {
    const product = {
        id: String(data.ID),
        name: data.Nombre,
        category: data.Categoria,
        description: data.Descripcion,
        price: parseFloat(data.Precio),
        image: data.Imagen_URL || `https://via.placeholder.com/400x400/652C83/FFFFFF?text=${encodeURIComponent(data.Nombre)}`,
        stock: parseInt(data.Stock) || 0,
        rating: parseFloat(data.Rating) || 5,
        reviews: parseInt(data.Reviews) || 0,
        badge: data.Badge || '',
        usage: data.Modo_Uso || '',
        sizes: data.sizes || []
    };
    
    return product;
}

/**
 * Calcular precio con descuento si aplica
 */
async function calculateDiscountedPrice(productId, basePrice) {
    const discounts = await getActiveDiscounts();
    const productDiscount = discounts.find(d => d.Producto_ID == productId);
    
    if (!productDiscount) return basePrice;
    
    if (productDiscount.Tipo === 'porcentaje') {
        return basePrice * (1 - productDiscount.Valor / 100);
    } else if (productDiscount.Tipo === 'fijo') {
        return basePrice - productDiscount.Valor;
    }
    
    return basePrice;
}

// ============================================================================
// FUNCIONES COMPATIBLES CON CÓDIGO EXISTENTE
// ============================================================================

/**
 * Obtener producto por ID (compatible con viewProduct)
 */
function getProductById(id) {
    return PRODUCTS.find(p => p.id === id);
}

/**
 * Obtener nombre de categoría (compatible con shop.js)
 */
function getCategoryName(category) {
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

/**
 * Ver detalles del producto (compatible con tienda.html)
 */
function viewProduct(id) {
    const product = getProductById(id);
    if (product) {
        let sizeInfo = '';
        if (product.sizes && product.sizes.length > 0) {
            sizeInfo = '\n\nTamaños disponibles:\n' + 
                product.sizes.map(s => `${s.size}: RD$ ${s.price}`).join('\n');
        }
        
        let usageInfo = product.usage ? `\n\nModo de uso:\n${product.usage}` : '';
        
        alert(`${product.name}\n\nPrecio: RD$ ${product.price}${sizeInfo}\n\n${product.description}${usageInfo}\n\nStock disponible: ${product.stock} unidades`);
    }
}

/**
 * Mostrar productos (compatible con shop.js)
 */
function displayProducts(products, containerId = 'productsGrid') {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.innerHTML = '';
    
    products.forEach(product => {
        const displayPrice = product.sizes && product.sizes.length > 0 
            ? product.sizes[0].price 
            : product.price;
        
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
                    <div class="product-category">${getCategoryName(product.category)}</div>
                    <h3 class="product-name">${product.name}</h3>
                    <p class="product-description">${product.description}</p>
                    <div class="product-rating">
                        ${'<i class="fas fa-star"></i>'.repeat(product.rating)}
                        <span style="margin-left: 0.5rem; color: var(--color-gray); font-size: 0.875rem;">(${product.reviews})</span>
                    </div>
                    <div class="product-footer">
                        <div>
                            <span class="product-price">RD$ ${displayPrice.toLocaleString()}</span>
                            ${product.oldPrice ? `<span class="product-price-old">RD$ ${product.oldPrice.toLocaleString()}</span>` : ''}
                            ${product.sizes && product.sizes.length > 1 ? '<span style="font-size: 0.75rem; color: var(--color-gray); display: block;">Varios tamaños disponibles</span>' : ''}
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

// ============================================================================
// FUNCIONES DE UI/UX
// ============================================================================

/**
 * Mostrar loader
 */
function showLoader(message = 'Cargando...') {
    let loader = document.getElementById('global-loader');
    
    if (!loader) {
        loader = document.createElement('div');
        loader.id = 'global-loader';
        loader.innerHTML = `
            <div class="loader-overlay">
                <div class="loader-content">
                    <div class="spinner"></div>
                    <p class="loader-message">${message}</p>
                </div>
            </div>
        `;
        document.body.appendChild(loader);
        
        // Agregar estilos si no existen
        if (!document.getElementById('loader-styles')) {
            const styles = document.createElement('style');
            styles.id = 'loader-styles';
            styles.textContent = `
                .loader-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0, 0, 0, 0.7);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 999999;
                }
                .loader-content {
                    text-align: center;
                    color: white;
                }
                .spinner {
                    width: 50px;
                    height: 50px;
                    border: 4px solid rgba(255, 255, 255, 0.3);
                    border-top-color: white;
                    border-radius: 50%;
                    animation: spin 1s linear infinite;
                    margin: 0 auto 1rem;
                }
                @keyframes spin {
                    to { transform: rotate(360deg); }
                }
                .loader-message {
                    font-size: 1rem;
                    margin: 0;
                }
            `;
            document.head.appendChild(styles);
        }
    } else {
        loader.querySelector('.loader-message').textContent = message;
        loader.style.display = 'block';
    }
}

/**
 * Ocultar loader
 */
function hideLoader() {
    const loader = document.getElementById('global-loader');
    if (loader) {
        loader.style.display = 'none';
    }
}

/**
 * Mostrar mensaje de error
 */
function showError(message) {
    alert(message);
}

// ============================================================================
// INICIALIZACIÓN
// ============================================================================

/**
 * Inicializar productos desde Google Sheets
 */
async function initializeProducts() {
    try {
        console.log('🚀 Inicializando productos desde Google Sheets...');
        
        // Cargar productos
        const products = await getProductsFromSheets();
        
        // Cargar descuentos
        const discounts = await getActiveDiscounts();
        
        // Aplicar descuentos a productos
        for (let product of products) {
            const discountedPrice = await calculateDiscountedPrice(product.id, product.price);
            if (discountedPrice < product.price) {
                product.oldPrice = product.price;
                product.price = discountedPrice;
                if (!product.badge) {
                    const discount = Math.round((1 - discountedPrice / product.oldPrice) * 100);
                    product.badge = `¡${discount}% OFF!`;
                }
            }
        }
        
        // Actualizar variable global PRODUCTS
        PRODUCTS.length = 0;
        PRODUCTS.push(...products);
        
        console.log('✅ Productos inicializados correctamente');
        
        // Mostrar productos en la página si existe el contenedor
        const container = document.getElementById('productsGrid');
        if (container) {
            displayProducts(products);
        }
        
        return products;
    } catch (error) {
        console.error('❌ Error al inicializar productos:', error);
        return [];
    }
}

// ============================================================================
// AUTO-INICIALIZACIÓN
// ============================================================================

// Inicializar cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeProducts);
} else {
    initializeProducts();
}

// Refrescar productos cada 5 minutos
setInterval(() => {
    console.log('🔄 Refrescando productos...');
    cache.clear();
    initializeProducts();
}, 5 * 60 * 1000);

// ============================================================================
// EXPORTAR PARA USO EN OTROS ARCHIVOS
// ============================================================================
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        PRODUCTS,
        getProductsFromSheets,
        getProductByIdFromSheets,
        getCategoriesFromSheets,
        getActiveDiscounts,
        createOrder,
        getProductById,
        getCategoryName,
        viewProduct,
        displayProducts,
        initializeProducts
    };
}