// Base de datos de productos - Lili Organic - Actualizado 2025 en google sheets
const PRODUCTS = [
    // MASCARILLAS
    {
        id: '1',
        name: 'Mascarilla Nutritiva Intensiva',
        category: 'tratamiento',
        description: 'Revitaliza el cabello maltratado con alto contenido en vitamina B6. Nutre e hidrata especialmente cabello tratado químicamente, teñido, fino y quebradizo.',
        price: 900,
        sizes: [
            { size: '10oz', price: 600 },
            { size: '16oz', price: 900 },
            { size: '28oz', price: 1400 }
        ],
        image: 'images/products/mascarilla-nutritiva.jpg',
        rating: 5,
        reviews: 87,
        badge: 'Más Vendido',
        stock: 30,
        usage: 'Aplicar después del shampoo'
    },
    {
        id: '2',
        name: 'Mascarilla Hidratante',
        category: 'tratamiento',
        description: 'Con vitaminas y minerales de zanahoria para un cabello brillante, fuerte y flexible. Reduce rupturas en las puntas.',
        price: 900,
        sizes: [
            { size: '16oz', price: 900 },
            { size: '28oz', price: 1400 }
        ],
        image: 'images/products/mascarilla-hidratante.jpg',
        rating: 5,
        reviews: 95,
        stock: 38,
        usage: 'Aplicar después del shampoo, dejar actuar 10-15 minutos, retirar con abundante agua'
    },
    {
        id: '3',
        name: 'Mascarilla Crecimiento y Anticaída',
        category: 'tratamiento',
        description: 'Detiene la caída del cabello con propiedades antiinflamatorias y antisépticas. Mejora circulación, estimula crecimiento y aporta brillo y volumen.',
        price: 900,
        sizes: [
            { size: '10oz', price: 600 },
            { size: '16oz', price: 900 },
            { size: '28oz', price: 1400 }
        ],
        image: 'images/products/mascarilla-anticaida.jpg',
        rating: 5,
        reviews: 143,
        badge: 'Top #1',
        stock: 52
    },
    {
        id: '4',
        name: 'Mascarilla de Karité Anticaída',
        category: 'tratamiento',
        description: 'Con Jengibre y Karité. Nutre y fortalece la fibra capilar, alivia irritación del cuero cabelludo, mejora circulación y combate la caída.',
        price: 900,
        sizes: [
            { size: '16oz', price: 900 },
            { size: '28oz', price: 1400 }
        ],
        image: 'images/products/mascarilla-karite.jpg',
        rating: 5,
        reviews: 118,
        stock: 35
    },
    {
        id: '5',
        name: 'Mascarilla Re estructurante',
        category: 'tratamiento',
        description: 'Aumenta hidratación y mejora cabello fino sin vida. Aporta brillo, elasticidad, suavidad, volumen y repara pérdida de densidad.',
        price: 900,
        sizes: [
            { size: '10oz', price: 700 },
            { size: '16oz', price: 900 },
            { size: '28oz', price: 1400 }
        ],
        image: 'images/products/mascarilla-reestructurante.jpg',
        rating: 5,
        reviews: 76,
        stock: 28
    },
    {
        id: '6',
        name: 'Mascarilla Detox',
        category: 'tratamiento',
        description: 'Con carbón activado que atrapa impurezas, toxinas y bacterias. Elimina exceso de grasa y contaminantes.',
        price: 900,
        sizes: [
            { size: '10oz', price: 700 },
            { size: '16oz', price: 900 },
            { size: '28oz', price: 1400 }
        ],
        image: 'images/products/mascarilla-detox.jpg',
        rating: 5,
        reviews: 92,
        badge: 'Popular',
        stock: 41
    },

    // SHAMPOOS
    {
        id: '7',
        name: 'Shampoo Crecimiento y Anticaída',
        category: 'shampoo',
        description: 'Repara cabello maltratado, acelera crecimiento, evita caída y brinda limpieza profunda. Hasta 100% libre de caspa.',
        price: 700,
        sizes: [
            { size: '10oz', price: 500 },
            { size: '16oz', price: 700 },
            { size: '33oz', price: 1000 }
        ],
        image: 'images/products/shampoo-anticaida.jpg',
        rating: 5,
        reviews: 128,
        badge: 'Más Vendido',
        stock: 45,
        usage: 'Aplicar en cuero cabelludo, masajear suavemente, retirar con abundante agua'
    },
    {
        id: '8',
        name: 'Shampoo Nutritivo Intensivo',
        category: 'shampoo',
        description: 'Con Cacao y Café. Revitaliza y energiza el cabello. Combina propiedades nutritivas del cacao con estimulación natural del café.',
        price: 700,
        sizes: [
            { size: '16oz', price: 700 },
            { size: '33oz', price: 1000 }
        ],
        image: 'images/products/shampoo-nutritivo.jpg',
        rating: 5,
        reviews: 95,
        stock: 38
    },
    {
        id: '9',
        name: 'Shampoo Detox',
        category: 'shampoo',
        description: 'Purifica, elimina toxinas y contaminantes. Remueve impurezas, hasta 100% libre de caspa. Sensación de frescura todo el día.',
        price: 700,
        sizes: [
            { size: '10oz', price: 500 },
            { size: '16oz', price: 700 },
            { size: '33oz', price: 1000 }
        ],
        image: 'images/products/shampoo-detox.jpg',
        rating: 5,
        reviews: 87,
        stock: 33
    },
    {
        id: '10',
        name: 'Shampoo Control Grasa y Caspa',
        category: 'shampoo',
        description: 'Con Menta y Nopal. Ideal para cabello normal a graso. Fortalece folículo piloso y devuelve brillo natural.',
        price: 700,
        sizes: [
            { size: '16oz', price: 700 },
            { size: '33oz', price: 1000 }
        ],
        image: 'images/products/shampoo-menta-nopal.jpg',
        rating: 5,
        reviews: 104,
        badge: 'Favorito',
        stock: 42
    },
    {
        id: '11',
        name: 'Shampoo Reestructurante',
        category: 'shampoo',
        description: 'Aumenta hidratación y mejora cabello fino sin vida. Aporta luminosidad, elasticidad, suavidad, volumen y repara densidad.',
        price: 700,
        sizes: [
            { size: '10oz', price: 500 },
            { size: '16oz', price: 700 },
            { size: '33oz', price: 1000 }
        ],
        image: 'images/products/shampoo-reestructurante.jpg',
        rating: 5,
        reviews: 76,
        stock: 35
    },
    {
        id: '12',
        name: 'Shampoo Hidratante',
        category: 'shampoo',
        description: 'Con vitaminas y minerales de zanahoria. Cabello brillante, fuerte, flexible. Menos rupturas en puntas. 100% sin caspa.',
        price: 700,
        sizes: [
            { size: '16oz', price: 700 },
            { size: '33oz', price: 1000 }
        ],
        image: 'images/products/shampoo-hidratante.jpg',
        rating: 5,
        reviews: 89,
        stock: 40
    },

    // SUEROS Y ACEITES
    {
        id: '13',
        name: 'Serum Abrillantador',
        category: 'serum',
        description: 'Con Vitamina E y aceite de Argán. Reduce frizz, previene puntas abiertas y caída. Sin sensación grasosa.',
        price: 550,
        sizes: [
            { size: '2oz', price: 550 },
            { size: '4oz', price: 850 }
        ],
        image: 'images/products/serum-abrillantador.jpg',
        rating: 5,
        reviews: 156,
        badge: 'Top #1',
        stock: 52,
        usage: 'Aplicar sobre cabello seco o húmedo, peinar y estilizar'
    },
    {
        id: '14',
        name: 'Aceite de Rosa de Mosqueta',
        category: 'tratamiento',
        description: 'Reduce arrugas y signos de envejecimiento. Atenúa cicatrices, estrías y manchas. Reduce dolores en senos.',
        price: 1200,
        sizes: [
            { size: '2oz', price: 1200 }
        ],
        image: 'images/products/aceite-rosa-mosqueta.jpg',
        rating: 5,
        reviews: 112,
        stock: 48,
        usage: 'Rostro: aplicar solo en las noches con cutis limpio, no exponer a rayos UV'
    },
    {
        id: '15',
        name: 'Gotero Crecimiento y Anticaída',
        category: 'serum',
        description: 'Fortalece cabello, previene caída, estimula crecimiento y controla caspa. Con café, menta, jengibre, canela y romero.',
        price: 850,
        image: 'images/products/gotero-anticaida.jpg',
        rating: 5,
        reviews: 134,
        stock: 38,
        usage: 'Aplicar en cuero cabelludo y masajear. Usar después del lavado o días antes'
    },
    {
        id: '16',
        name: 'Gotero Estimulador de Crecimiento',
        category: 'serum',
        description: 'Mejora circulación sanguínea en cuero cabelludo, acelera crecimiento. Con panthenol (pro-vitamina B5), biotina y jengibre.',
        price: 850,
        image: 'images/products/gotero-estimulador.jpg',
        rating: 5,
        reviews: 127,
        badge: 'Nuevo',
        stock: 44
    },
    {
        id: '17',
        name: 'Suero Vitaminado',
        category: 'serum',
        description: 'Repara cabello seco y maltratado. Detiene caída y estimula crecimiento.',
        price: 750,
        sizes: [
            { size: '16oz', price: 750 }
        ],
        image: 'images/products/suero-vitaminado.jpg',
        rating: 5,
        reviews: 98,
        stock: 36,
        usage: 'Aplicar en cuero cabelludo días antes del lavado con masajes. No retirar hasta lavado'
    },

    // TRATAMIENTOS SIN ENJUAGUE
    {
        id: '18',
        name: 'Leave In Ultra Hidratante',
        category: 'tratamiento',
        description: 'Rico en vitaminas A, C, E, potasio y zinc. Evita caída, hidrata, nutre, fortalece y controla frizz.',
        price: 750,
        sizes: [
            { size: '5oz', price: 550 },
            { size: '8oz', price: 750 }
        ],
        image: 'images/products/leave-in.jpg',
        rating: 5,
        reviews: 89,
        stock: 41
    },
    {
        id: '19',
        name: 'Shot Capilar',
        category: 'tratamiento',
        description: 'Componente concentrado de ingredientes naturales. Restablece cualidades naturales: sedoso, hidratado, brillante, elástico. Controla caspa seborreica.',
        price: 750,
        sizes: [
            { size: '6oz', price: 750 }
        ],
        image: 'images/products/shot-capilar.jpg',
        rating: 5,
        reviews: 103,
        badge: 'Popular',
        stock: 33,
        usage: 'Aplicar en cuero cabelludo y masajear con aceite 10-20 minutos. Lavar después'
    },
    {
        id: '20',
        name: 'Gel Keratin',
        category: 'tratamiento',
        description: 'Controla y acondiciona cabello rizado u ondulado. Deja cabello liso, sedoso y brillante. Propiedades antienvejecimiento e hidratantes.',
        price: 1000,
        sizes: [
            { size: '4oz', price: 1000 }
        ],
        image: 'images/products/gel-keratin.jpg',
        rating: 5,
        reviews: 91,
        stock: 28,
        usage: 'Aplicar pequeña cantidad en palma, extender por cabello. Se recomienda planchar'
    },
    {
        id: '21',
        name: 'Pre-Poo Crecimiento y Anticaída',
        category: 'tratamiento',
        description: 'Nutre en profundidad y protege el cabello de detergentes del shampoo que pueden resecar.',
        price: 750,
        sizes: [
            { size: '10oz', price: 550 },
            { size: '16oz', price: 750 }
        ],
        image: 'images/products/pre-poo.jpg',
        rating: 5,
        reviews: 85,
        stock: 37,
        usage: 'Aplicar en cabello seco antes del lavado, dejar actuar media hora o más'
    },
    {
        id: '22',
        name: 'Protector Térmico',
        category: 'tratamiento',
        description: 'Protege de altas temperaturas y daños ambientales. Crea barrera protectora. Ideal antes de secadores, planchas o rizadores.',
        price: 1000,
        sizes: [
            { size: '6oz', price: 1000 }
        ],
        image: 'images/products/protector-termico.jpg',
        rating: 5,
        reviews: 107,
        badge: 'Favorito',
        stock: 45,
        usage: 'Aplicar sobre cabello húmedo o seco antes de usar herramientas de calor'
    },
    {
        id: '23',
        name: 'Crema de Peinar',
        category: 'tratamiento',
        description: 'Hidrata profundamente, desenreda y controla frizz. Rizos definidos e hidratados, hebras suaves.',
        price: 450,
        sizes: [
            { size: '9oz', price: 450 },
            { size: '16oz', price: 750 }
        ],
        image: 'images/products/crema-peinar.jpg',
        rating: 5,
        reviews: 67,
        stock: 33,
        usage: 'Aplicar después del lavado en cabello húmedo o seco. No retirar'
    },
    {
        id: '24',
        name: 'Tratamiento Reparador e Hidratante',
        category: 'tratamiento',
        description: 'Repara y nutre cabello maltratado. Aporta reestructuración, suavidad y brillo.',
        price: 850,
        sizes: [
            { size: '4oz', price: 850 }
        ],
        image: 'images/products/tratamiento-reparador.jpg',
        rating: 4,
        reviews: 74,
        stock: 29,
        usage: 'Aplicar sobre cabello limpio y húmedo, masajear, dejar 15 minutos, enjuagar'
    },
    {
        id: '25',
        name: 'Botox Capilar',
        category: 'tratamiento',
        description: 'Rico en botox y ácido hialurónico. Reconstruye todo el cabello de raíz a puntas de forma instantánea.',
        price: 550,
        sizes: [
            { size: '1oz', price: 550 },
            { size: '2oz', price: 750 },
            { size: '5oz', price: 1200 }
        ],
        image: 'images/products/botox-capilar.jpg',
        rating: 5,
        reviews: 156,
        badge: 'Top Tratamiento',
        stock: 35,
        usage: 'Mezclar con doble de agua filtrada, aplicar después de lavar, dejar 20 min, retirar 70%, secar y planchar'
    },
    {
        id: '26',
        name: 'Grasita Nutritiva',
        category: 'tratamiento',
        description: 'Nutre, hidrata y rellena hebras. Facilita peinado, evita resequedad y puntas abiertas. Con mantecas de semilla, mango y karité.',
        price: 350,
        sizes: [
            { size: '4oz', price: 350 }
        ],
        image: 'images/products/grasita-nutritiva.jpg',
        rating: 5,
        reviews: 112,
        stock: 48,
        usage: 'Aplicar pequeña cantidad antes del peinado'
    },

    // ACONDICIONADORES
    {
        id: '27',
        name: 'Acondicionador Crecimiento y Anticaída',
        category: 'acondicionador',
        description: 'Suaviza, nutre y controla frizz. Combate humedad. Evita puntas abiertas y desenreda de raíz a puntas.',
        price: 650,
        sizes: [
            { size: '16oz', price: 650 }
        ],
        image: 'images/products/acondicionador-anticaida.jpg',
        rating: 5,
        reviews: 95,
        stock: 38,
        usage: 'Aplicar de raíz a puntas masajeando, desenredar, retirar con abundante agua'
    },
    {
        id: '28',
        name: 'Serum Brillo & Sedosidad (33oz)',
        category: 'serum',
        description: 'Con Vitamina E y aceite de Argán. Reduce frizz, previene puntas abiertas y caída. Sin sensación grasosa. Rico en antioxidantes.',
        price: 1400,
        sizes: [
            { size: '33oz', price: 1400 }
        ],
        image: 'images/products/serum-grande.jpg',
        rating: 5,
        reviews: 143,
        badge: 'Tamaño Familiar',
        stock: 25,
        usage: 'Aplicar sobre cabello seco o húmedo, peinar y estilizar'
    },

    // CUIDADO PERSONAL
    {
        id: '29',
        name: 'Jabón Íntimo',
        category: 'cuidado-personal',
        description: 'Con ácido láctico y extracto de manzanilla. Mantiene equilibrio de flora vaginal con pH equilibrado. Uso diario.',
        price: 450,
        sizes: [
            { size: '4oz', price: 250 },
            { size: '8oz', price: 450 }
        ],
        image: 'images/products/jabon-intimo.jpg',
        rating: 5,
        reviews: 78,
        stock: 42,
        usage: 'Aplicar pequeña cantidad en mano, lavar suavemente parte externa. Uso diario'
    },

    // COMBOS
    {
        id: '30',
        name: 'Combo Crecimiento Capilar',
        category: 'combo',
        description: 'Kit completo: Shampoo Anticaída + Mascarilla Anticaída + Gotero Estimulador + Leave In. Todo lo necesario para crecimiento.',
        price: 2500,
        image: 'images/products/combo-crecimiento.jpg',
        rating: 5,
        reviews: 234,
        badge: 'Combo Especial',
        stock: 22
    },
    {
        id: '31',
        name: 'Combo Hidratación Total',
        category: 'combo',
        description: 'Kit hidratación: Shampoo Hidratante + Mascarilla Hidratante + Leave In + Crema de Peinar. Hidratación profunda completa.',
        price: 2200,
        image: 'images/products/combo-hidratacion.jpg',
        rating: 5,
        reviews: 187,
        badge: 'Combo Especial',
        stock: 18
    }
]; 

// Función para mostrar productos
function displayProducts(products, containerId = 'productsGrid') {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.innerHTML = '';
    
    products.forEach(product => {
        // Determinar el precio a mostrar (usar el primer tamaño si hay múltiples)
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

// Obtener nombre de categoría
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

// Obtener producto por ID
function getProductById(id) {
    return PRODUCTS.find(p => p.id === id);
}

// Ver detalles del producto
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

// Exportar para uso en otros archivos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { PRODUCTS, displayProducts, getProductById, viewProduct, getCategoryName };
}