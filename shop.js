// Sistema de filtros de tienda
let filteredProducts = [...PRODUCTS];

function initShop() {
    displayProducts(PRODUCTS);
    setupFilters();
}

function setupFilters() {
    // Búsqueda
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', applyFilters);
    }
    
    // Filtros
    ['categoryFilter', 'priceFilter', 'sortFilter'].forEach(id => {
        const element = document.getElementById(id);
        if (element) element.addEventListener('change', applyFilters);
    });
}

function applyFilters() {
    let products = [...PRODUCTS];
    
    // Búsqueda
    const search = document.getElementById('searchInput')?.value.toLowerCase();
    if (search) {
        products = products.filter(p => 
            p.name.toLowerCase().includes(search) || 
            p.description.toLowerCase().includes(search)
        );
    }
    
    // Categoría
    const category = document.getElementById('categoryFilter')?.value;
    if (category && category !== 'all') {
        products = products.filter(p => p.category === category);
    }
    
    // Precio
    const priceRange = document.getElementById('priceFilter')?.value;
    if (priceRange && priceRange !== 'all') {
        const [min, max] = priceRange.split('-').map(Number);
        products = products.filter(p => {
            if (max) return p.price >= min && p.price <= max;
            return p.price >= min;
        });
    }
    
    // Ordenar
    const sort = document.getElementById('sortFilter')?.value;
    if (sort) {
        switch(sort) {
            case 'price-low':
                products.sort((a, b) => a.price - b.price);
                break;
            case 'price-high':
                products.sort((a, b) => b.price - a.price);
                break;
            case 'name':
                products.sort((a, b) => a.name.localeCompare(b.name));
                break;
        }
    }
    
    displayProducts(products);
}

// Inicializar cuando se carga la página
if (document.getElementById('productsGrid')) {
    document.addEventListener('DOMContentLoaded', initShop);
}
