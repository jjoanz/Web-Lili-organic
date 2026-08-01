// ============================================================
// LILI ORGANIC — SISTEMA DE MERCADO / IDIOMA (RD ↔ US)
// ============================================================
const LILI_MARKET_KEY = 'lili_market';

function getMarket() {
    return localStorage.getItem(LILI_MARKET_KEY) || 'RD';
}

function getLang() {
    return getMarket() === 'US' ? 'en' : 'es';
}

function setMarket(market) {
    localStorage.setItem(LILI_MARKET_KEY, market);
    location.reload();
}

// ============================================================
// DICCIONARIO DE TEXTO FIJO DEL SITIO
// ============================================================
const LILI_DICT = {
    es: {
        nav_inicio: 'Inicio', nav_tienda: 'Tienda', nav_nosotros: 'Nosotros',
        nav_beneficios: 'Beneficios', nav_contacto: 'Contacto',

        hero_eyebrow: 'Cuidado capilar natural · República Dominicana',
        hero_title_pre: 'Tu cabello, ', hero_title_em: 'tratado con la tierra', hero_title_post: ' que lo vio crecer',
        hero_desc: 'Fórmulas naturales para cada tipo de cabello: anticaída, hidratación profunda y control de frizz, hechas para el clima dominicano.',
        hero_cta_shop: 'Ver colección',
        hero_cta_quiz: 'Encuentra tu ritual',
        hero_tag_suffix: 'productos formulados con activos botánicos',

        need_anticaida: 'Anticaída', need_hidratacion: 'Hidratación', need_reparacion: 'Reparación',
        need_frizz: 'Control de frizz', need_grasa: 'Control de grasa',

        marquee_1: 'Ingredientes naturales', marquee_2: 'Envío gratis en RD$2,000+',
        marquee_3: 'Hecho en República Dominicana', marquee_4: 'Formulado artesanalmente', marquee_5: 'Para todo tipo de cabello',

        quiz_eyebrow: 'Personalizado para ti', quiz_title: 'Encuentra tu ritual capilar',
        quiz_subtitle: '3 preguntas rápidas y te decimos qué línea de productos es ideal para tu cabello.',
        quiz_q1: '¿Cuál es tu mayor preocupación capilar?',
        quiz_q1_a: 'Caída del cabello', quiz_q1_b: 'Resequedad', quiz_q1_c: 'Exceso de grasa', quiz_q1_d: 'Frizz y encrespado',
        quiz_q2: '¿Con qué frecuencia te lavas el cabello?',
        quiz_q2_a: 'Todos los días', quiz_q2_b: 'Cada 2-3 días', quiz_q2_c: '1-2 veces por semana', quiz_q2_d: 'Rara vez',
        quiz_q3: '¿Qué buscas principalmente?',
        quiz_q3_a: 'Resultados rápidos', quiz_q3_b: 'Fórmula suave', quiz_q3_c: 'Tratamiento intensivo', quiz_q3_d: 'Mantenimiento diario',
        quiz_result_cta: 'Ver productos recomendados', quiz_restart: 'Volver a empezar',
        quiz_rec_tratamiento_t: 'Línea Anticaída & Reparación',
        quiz_rec_tratamiento_d: 'Te recomendamos nuestros tratamientos fortalecedores, mascarillas de crecimiento y sueros anticaída.',
        quiz_rec_acondicionador_t: 'Línea de Hidratación Profunda',
        quiz_rec_acondicionador_d: 'Te recomendamos nuestros acondicionadores y mascarillas hidratantes para devolverle la suavidad a tu cabello.',
        quiz_rec_shampoo_t: 'Línea Control de Grasa',
        quiz_rec_shampoo_d: 'Te recomendamos nuestros shampoos detox y de control de grasa, formulados para limpiar sin resecar.',
        quiz_rec_serum_t: 'Línea Control de Frizz',
        quiz_rec_serum_d: 'Te recomendamos nuestros sueros y leave-in para controlar el frizz y darle brillo a tu cabello.',

        kits_eyebrow: 'Ahorra más', kits_title: 'Kits y combos',
        kits_empty: 'Aún no hay kits marcados.',
        kits_includes: 'Incluye', kits_add: 'Agregar kit al carrito', kits_save: 'Ahorra',

        valores_eyebrow: 'Nuestro compromiso', valores_title: 'Lo que hay detrás de cada fórmula',

        counters_eyebrow: 'Lili Organic en números', counters_title: 'Confianza que crece',
        counter_years: 'Años de experiencia', counter_products: 'Productos formulados',
        counter_clients: 'Clientas satisfechas', counter_natural: 'Natural y orgánico',

        story_eyebrow: 'Ingredientes', story_title: 'Formulados desde la raíz',
        story_desc: 'Cada producto Lili Organic combina activos naturales pensados para el clima y tipo de cabello dominicano. Formulamos con ingredientes seleccionados para nutrir, fortalecer y devolverle la salud a tu cabello, sin comprometer la calidad.',
        story_cta: 'Ver ingredientes por producto',

        testi_eyebrow: 'Testimonios', testi_title: 'Lo que dicen quienes ya lo probaron',
        testi_empty: 'Aún no hay testimonios.',

        news_title: 'Recibe ofertas y consejos capilares', news_desc: 'Sin spam, solo lo que te sirve para tu cabello.',
        news_placeholder: 'Tu correo electrónico', news_btn: 'Suscribirme',
        news_success: '¡Gracias por suscribirte!', news_duplicate: 'Ese correo ya está suscrito.',
        news_error: 'Hubo un problema, intenta de nuevo.',

        cat_shampoo: 'Shampoos', cat_acondicionador: 'Acondicionadores', cat_tratamiento: 'Tratamientos',
        cat_serum: 'Sueros & Aceites', cat_combo: 'Combos', cat_personal: 'Cuidado Personal',

        shop_title: 'Nuestros Productos', shop_search: 'Buscar producto...', shop_sort: 'Ordenar',
        shop_all: 'Todas', shop_sort_featured: 'Destacados', shop_sort_price_asc: 'Precio: menor a mayor',
        shop_sort_price_desc: 'Precio: mayor a menor', shop_sort_name: 'Nombre A-Z',
        shop_out_stock: 'Agotado', shop_add_cart: 'Agregar al carrito',
        shop_filter_categoria: 'Categoría', shop_eyebrow: 'Catálogo completo',
        pm_usage: 'Modo de uso', pm_ingredients_title: 'Ingredientes y beneficios',
        pm_no_results: 'No se encontraron productos con estos filtros.',

        footer_rights: 'Todos los derechos reservados',

        // NOSOTROS
        about_eyebrow: 'Nuestra historia', about_title: 'Lili Organic',
        about_hero_desc: 'Lili Organic nace en febrero de 2021 de la pasión de Liliana García García por el cuidado natural del cabello. Somos una empresa dominicana comprometida con ofrecer productos naturales y orgánicos de la más alta calidad.',
        about_mision_t: 'Misión', about_mision_d: 'Promover la belleza natural y el cuidado responsable del cabello a través de productos orgánicos de calidad, contribuyendo al bienestar de nuestras clientas y al medio ambiente.',
        about_vision_t: 'Visión', about_vision_d: 'Ser la marca líder en República Dominicana en productos naturales para el cuidado capilar, reconocida por nuestra calidad, innovación y compromiso con la naturaleza.',
        about_valores_t: 'Valores',
        about_valor_1: 'Calidad', about_valor_2: 'Transparencia', about_valor_3: 'Sostenibilidad', about_valor_4: 'Innovación', about_valor_5: 'Pasión por el cuidado natural del cabello',
        about_why_eyebrow: 'Por qué elegirnos', about_why_title: 'Lo que nos distingue',
        about_why_1_t: 'Ingredientes Naturales', about_why_1_d: 'Formulados con extractos botánicos, pensados para el cabello dominicano.',
        about_why_2_t: 'Formulación Experta', about_why_2_d: 'Desarrollados con investigación y respaldo profesional en cada fórmula.',
        about_why_3_t: 'Hecho con Pasión', about_why_3_d: 'Cada producto refleja el compromiso de Lili Organic con sus clientas.',
        about_stats_eyebrow: 'Nuestros logros', about_stats_title: 'En números',
        about_stat_years: 'Años de experiencia', about_stat_products: 'Productos desarrollados', about_stat_clients: 'Clientas satisfechas', about_stat_natural: 'Natural y orgánico',

        // BENEFICIOS
        ben_eyebrow: 'Cuidado capilar natural', ben_title: 'Beneficios de lo natural',
        ben_subtitle: 'Por qué elegir fórmulas naturales marca la diferencia en la salud de tu cabello a largo plazo.',
        ben_1_t: 'Nutrición profunda', ben_1_d: 'Los ingredientes naturales aportan vitaminas y nutrientes que penetran la fibra capilar, fortaleciendo el cabello desde la raíz.',
        ben_2_t: 'Menos agresión al cuero cabelludo', ben_2_d: 'Fórmulas suaves que respetan el equilibrio natural del cuero cabelludo, reduciendo irritación y resequedad.',
        ben_3_t: 'Adaptadas al clima dominicano', ben_3_d: 'Pensadas para la humedad y el calor del Caribe: controlan el frizz y mantienen el cabello manejable todo el día.',
        ben_4_t: 'Fortalece y previene la caída', ben_4_d: 'Activos que estimulan el folículo capilar, ayudando a reducir la caída y favorecer un crecimiento más saludable.',
        ben_5_t: 'Hidratación duradera', ben_5_d: 'Sella la humedad en la fibra capilar, dejando el cabello suave, brillante y con menos frizz por más tiempo.',
        ben_6_t: 'Para todo tipo de cabello', ben_6_d: 'Ya sea rizado, liso, ondulado o con tratamientos químicos, hay una fórmula Lili Organic pensada para ti.',
        ben_routine_eyebrow: 'Rutina recomendada', ben_routine_title: 'Cómo sacarle el máximo provecho',
        ben_routine_desc: 'Una rutina capilar constante marca la diferencia. Te recomendamos:',
        ben_routine_1: 'Shampoo según tu necesidad principal (anticaída, hidratación, control de grasa)',
        ben_routine_2: 'Mascarilla 1-2 veces por semana para nutrición profunda',
        ben_routine_3: 'Sueros o tratamientos leave-in para protección diaria',
        ben_routine_4: 'Protector térmico antes de usar plancha o secadora',
        ben_cta_title: 'Encuentra tu ritual ideal', ben_cta_desc: 'Explora nuestra tienda y descubre los productos pensados para tu tipo de cabello.', ben_cta_btn: 'Ver tienda',

        // CONTACTO
        contact_eyebrow: 'Hablemos', contact_title: 'Contáctanos',
        contact_subtitle: '¿Tienes dudas sobre un producto o tu pedido? Escríbenos, con gusto te ayudamos.',
        contact_phone: 'Teléfono', contact_email: 'Email', contact_location: 'Ubicación', contact_hours: 'Horario',
        contact_hours_val: 'Lunes a Sábado, 9:00 AM - 6:00 PM',
        contact_form_title: 'Envíanos un mensaje',
        contact_name: 'Nombre', contact_phone_field: 'Teléfono', contact_message: 'Mensaje',
        contact_name_ph: 'Tu nombre', contact_phone_ph: '809-xxx-xxxx', contact_email_ph: 'tu@email.com', contact_message_ph: '¿En qué te podemos ayudar?',
        contact_submit: 'Enviar Mensaje', contact_sending: 'Enviando...',
        contact_success: '¡Gracias! Te responderemos lo antes posible.', contact_error: 'Hubo un problema, intenta de nuevo o escríbenos por WhatsApp.',
        faq_title: 'Preguntas Frecuentes',
        faq_1_q: '¿Cuáles son los métodos de pago disponibles?', faq_1_a: 'Aceptamos transferencia bancaria, link de pago con tarjeta, y pago contra entrega dentro de República Dominicana.',
        faq_2_q: '¿Cuánto tiempo tarda mi pedido en llegar?', faq_2_a: 'Los pedidos dentro de Santo Domingo suelen entregarse en 1-3 días laborables. Para el interior del país, de 3-5 días laborables.',
        faq_3_q: '¿Tienen envío gratis?', faq_3_a: 'Sí, el envío es gratis en compras mayores a RD$2,000. Compras menores tienen un costo de envío fijo.',
        faq_4_q: '¿Puedo cambiar o devolver un producto?', faq_4_a: 'Aceptamos cambios dentro de los primeros 7 días si el producto está sellado y sin usar. Escríbenos para coordinar el cambio.',
        faq_5_q: '¿Los productos son aptos para todo tipo de cabello?', faq_5_a: 'Tenemos línea para distintas necesidades: anticaída, hidratación, control de grasa, reparación y más — revisa la descripción de cada producto en la tienda.',

        // CARRITO / CHECKOUT
        cart_eyebrow: 'Tu selección', cart_title: 'Carrito de Compras',
        checkout_title: 'Finalizar Compra',
        checkout_step_info: 'Información', checkout_step_shipping: 'Envío', checkout_step_payment: 'Pago',
        checkout_contact_title: 'Información de Contacto',
        checkout_name: 'Nombre Completo *', checkout_name_ph: 'Tu nombre',
        checkout_phone: 'Teléfono *', checkout_phone_ph: '809-xxx-xxxx',
        checkout_email: 'Email *', checkout_email_ph: 'tu@email.com',
        checkout_shipping_title: 'Dirección de Envío',
        checkout_address: 'Dirección Completa *', checkout_address_ph: 'Calle, número, edificio, apartamento',
        checkout_city: 'Ciudad *', checkout_province: 'Provincia *', checkout_select: 'Seleccionar',
        checkout_payment_title: 'Método de Pago',
        checkout_transfer_t: 'Transferencia Bancaria', checkout_transfer_d: 'Recibirás los datos bancarios por email',
        checkout_link_t: 'Link de Pago (Tarjeta)', checkout_link_d: 'Te enviaremos un link seguro para pagar',
        checkout_delivery_t: 'Pago Contra Entrega', checkout_delivery_d: 'Paga en efectivo al recibir tu pedido',
        checkout_confirm_btn: 'Confirmar Pedido', checkout_processing: 'Procesando...',
        checkout_attach_label: 'Adjuntar comprobante de pago (opcional)',
        checkout_attach_note: 'Si ya hiciste la transferencia, sube aquí una foto o captura del recibo.',
        checkout_empty_cart: 'Tu carrito está vacío.',
        checkout_success: '¡Pedido confirmado! Recibirás un email con los detalles de tu orden.',
        checkout_error: 'Hubo un problema al procesar tu pedido. Por favor intenta de nuevo o contáctanos por WhatsApp.',
    },
    en: {
        nav_inicio: 'Home', nav_tienda: 'Shop', nav_nosotros: 'About Us',
        nav_beneficios: 'Benefits', nav_contacto: 'Contact',

        hero_eyebrow: 'Natural Hair Care · Dominican Republic',
        hero_title_pre: 'Your hair, ', hero_title_em: 'nurtured by the earth', hero_title_post: ' that grew it',
        hero_desc: 'Natural formulas for every hair type: hair loss control, deep hydration, and frizz control, made for the Caribbean climate.',
        hero_cta_shop: 'Shop Collection',
        hero_cta_quiz: 'Find Your Ritual',
        hero_tag_suffix: 'products formulated with botanical actives',

        need_anticaida: 'Hair Loss', need_hidratacion: 'Hydration', need_reparacion: 'Repair',
        need_frizz: 'Frizz Control', need_grasa: 'Oil Control',

        marquee_1: 'Natural Ingredients', marquee_2: 'Free Shipping over RD$2,000',
        marquee_3: 'Made in Dominican Republic', marquee_4: 'Handcrafted Formulas', marquee_5: 'For All Hair Types',

        quiz_eyebrow: 'Personalized for You', quiz_title: 'Find Your Hair Ritual',
        quiz_subtitle: '3 quick questions and we\'ll tell you which product line is ideal for your hair.',
        quiz_q1: 'What is your main hair concern?',
        quiz_q1_a: 'Hair loss', quiz_q1_b: 'Dryness', quiz_q1_c: 'Excess oil', quiz_q1_d: 'Frizz',
        quiz_q2: 'How often do you wash your hair?',
        quiz_q2_a: 'Every day', quiz_q2_b: 'Every 2-3 days', quiz_q2_c: '1-2 times a week', quiz_q2_d: 'Rarely',
        quiz_q3: 'What are you mainly looking for?',
        quiz_q3_a: 'Fast results', quiz_q3_b: 'Gentle formula', quiz_q3_c: 'Intensive treatment', quiz_q3_d: 'Daily maintenance',
        quiz_result_cta: 'See Recommended Products', quiz_restart: 'Start Over',
        quiz_rec_tratamiento_t: 'Hair Loss & Repair Line',
        quiz_rec_tratamiento_d: 'We recommend our strengthening treatments, growth masks, and hair loss serums.',
        quiz_rec_acondicionador_t: 'Deep Hydration Line',
        quiz_rec_acondicionador_d: 'We recommend our conditioners and hydrating masks to bring softness back to your hair.',
        quiz_rec_shampoo_t: 'Oil Control Line',
        quiz_rec_shampoo_d: 'We recommend our detox and oil-control shampoos, formulated to cleanse without drying.',
        quiz_rec_serum_t: 'Frizz Control Line',
        quiz_rec_serum_d: 'We recommend our serums and leave-ins to control frizz and add shine to your hair.',

        kits_eyebrow: 'Save More', kits_title: 'Kits & Bundles',
        kits_empty: 'No kits marked yet.',
        kits_includes: 'Includes', kits_add: 'Add Kit to Cart', kits_save: 'Save',

        valores_eyebrow: 'Our Commitment', valores_title: 'What\'s Behind Every Formula',

        counters_eyebrow: 'Lili Organic by the Numbers', counters_title: 'Growing Trust',
        counter_years: 'Years of Experience', counter_products: 'Products Formulated',
        counter_clients: 'Happy Customers', counter_natural: 'Natural & Organic',

        story_eyebrow: 'Ingredients', story_title: 'Formulated from the Root',
        story_desc: 'Every Lili Organic product combines natural actives designed for Dominican hair and climate. We formulate with selected ingredients to nourish, strengthen, and restore your hair\'s health, without compromising quality.',
        story_cta: 'See Ingredients by Product',

        testi_eyebrow: 'Testimonials', testi_title: 'What Our Customers Say',
        testi_empty: 'No testimonials yet.',

        news_title: 'Get Deals & Hair Tips', news_desc: 'No spam, just what your hair needs.',
        news_placeholder: 'Your email address', news_btn: 'Subscribe',
        news_success: 'Thanks for subscribing!', news_duplicate: 'That email is already subscribed.',
        news_error: 'Something went wrong, try again.',

        cat_shampoo: 'Shampoos', cat_acondicionador: 'Conditioners', cat_tratamiento: 'Treatments',
        cat_serum: 'Serums & Oils', cat_combo: 'Bundles', cat_personal: 'Personal Care',

        shop_title: 'Our Products', shop_search: 'Search products...', shop_sort: 'Sort',
        shop_all: 'All', shop_sort_featured: 'Featured', shop_sort_price_asc: 'Price: low to high',
        shop_sort_price_desc: 'Price: high to low', shop_sort_name: 'Name A-Z',
        shop_out_stock: 'Sold Out', shop_add_cart: 'Add to Cart',
        shop_filter_categoria: 'Category', shop_eyebrow: 'Full Catalog',
        pm_usage: 'How to use', pm_ingredients_title: 'Ingredients & Benefits',
        pm_no_results: 'No products found with these filters.',

        footer_rights: 'All rights reserved',

        // ABOUT
        about_eyebrow: 'Our Story', about_title: 'Lili Organic',
        about_hero_desc: 'Lili Organic was born in February 2021 from Liliana García García\'s passion for natural hair care. We are a Dominican company committed to offering natural and organic products of the highest quality.',
        about_mision_t: 'Mission', about_mision_d: 'To promote natural beauty and responsible hair care through quality organic products, contributing to the wellbeing of our customers and the environment.',
        about_vision_t: 'Vision', about_vision_d: 'To be the leading natural hair care brand in the Dominican Republic, recognized for our quality, innovation, and commitment to nature.',
        about_valores_t: 'Values',
        about_valor_1: 'Quality', about_valor_2: 'Transparency', about_valor_3: 'Sustainability', about_valor_4: 'Innovation', about_valor_5: 'Passion for natural hair care',
        about_why_eyebrow: 'Why Choose Us', about_why_title: 'What Sets Us Apart',
        about_why_1_t: 'Natural Ingredients', about_why_1_d: 'Formulated with botanical extracts, designed for Dominican hair.',
        about_why_2_t: 'Expert Formulation', about_why_2_d: 'Developed with research and professional backing in every formula.',
        about_why_3_t: 'Made with Passion', about_why_3_d: 'Every product reflects Lili Organic\'s commitment to its customers.',
        about_stats_eyebrow: 'Our Achievements', about_stats_title: 'By the Numbers',
        about_stat_years: 'Years of experience', about_stat_products: 'Products developed', about_stat_clients: 'Happy customers', about_stat_natural: 'Natural and organic',

        // BENEFITS
        ben_eyebrow: 'Natural Hair Care', ben_title: 'Benefits of Going Natural',
        ben_subtitle: 'Why choosing natural formulas makes a difference in your hair\'s long-term health.',
        ben_1_t: 'Deep Nourishment', ben_1_d: 'Natural ingredients provide vitamins and nutrients that penetrate the hair fiber, strengthening hair from the root.',
        ben_2_t: 'Gentler on the Scalp', ben_2_d: 'Gentle formulas that respect the scalp\'s natural balance, reducing irritation and dryness.',
        ben_3_t: 'Adapted to Caribbean Climate', ben_3_d: 'Designed for Caribbean humidity and heat: controls frizz and keeps hair manageable all day.',
        ben_4_t: 'Strengthens & Prevents Hair Loss', ben_4_d: 'Actives that stimulate the hair follicle, helping reduce hair loss and promote healthier growth.',
        ben_5_t: 'Long-Lasting Hydration', ben_5_d: 'Seals moisture into the hair fiber, leaving hair soft, shiny, and frizz-free for longer.',
        ben_6_t: 'For All Hair Types', ben_6_d: 'Whether curly, straight, wavy, or chemically treated, there\'s a Lili Organic formula made for you.',
        ben_routine_eyebrow: 'Recommended Routine', ben_routine_title: 'How to Get the Most Out of It',
        ben_routine_desc: 'A consistent hair routine makes all the difference. We recommend:',
        ben_routine_1: 'Shampoo based on your main need (hair loss, hydration, oil control)',
        ben_routine_2: 'Hair mask 1-2 times a week for deep nourishment',
        ben_routine_3: 'Serums or leave-in treatments for daily protection',
        ben_routine_4: 'Heat protectant before using a flat iron or blow dryer',
        ben_cta_title: 'Find Your Ideal Ritual', ben_cta_desc: 'Explore our shop and discover the products made for your hair type.', ben_cta_btn: 'Shop Now',

        // CONTACT
        contact_eyebrow: 'Let\'s Talk', contact_title: 'Contact Us',
        contact_subtitle: 'Have questions about a product or your order? Write to us, we\'re happy to help.',
        contact_phone: 'Phone', contact_email: 'Email', contact_location: 'Location', contact_hours: 'Hours',
        contact_hours_val: 'Monday to Saturday, 9:00 AM - 6:00 PM',
        contact_form_title: 'Send Us a Message',
        contact_name: 'Name', contact_phone_field: 'Phone', contact_message: 'Message',
        contact_name_ph: 'Your name', contact_phone_ph: '(809) xxx-xxxx', contact_email_ph: 'you@email.com', contact_message_ph: 'How can we help you?',
        contact_submit: 'Send Message', contact_sending: 'Sending...',
        contact_success: 'Thank you! We\'ll get back to you as soon as possible.', contact_error: 'Something went wrong, try again or message us on WhatsApp.',
        faq_title: 'Frequently Asked Questions',
        faq_1_q: 'What payment methods are available?', faq_1_a: 'We accept bank transfer, card payment link, and cash on delivery within the Dominican Republic. Customers in the US can pay by credit card.',
        faq_2_q: 'How long does my order take to arrive?', faq_2_a: 'Orders within Santo Domingo are usually delivered in 1-3 business days. For the rest of the country, 3-5 business days.',
        faq_3_q: 'Do you offer free shipping?', faq_3_a: 'Yes, shipping is free on orders over the free-shipping threshold shown at checkout. Smaller orders have a flat shipping fee.',
        faq_4_q: 'Can I exchange or return a product?', faq_4_a: 'We accept exchanges within the first 7 days if the product is sealed and unused. Contact us to arrange the exchange.',
        faq_5_q: 'Are the products suitable for all hair types?', faq_5_a: 'We have lines for different needs: hair loss, hydration, oil control, repair, and more — check each product\'s description in the shop.',

        // CART / CHECKOUT
        cart_eyebrow: 'Your Selection', cart_title: 'Shopping Cart',
        checkout_title: 'Checkout',
        checkout_step_info: 'Information', checkout_step_shipping: 'Shipping', checkout_step_payment: 'Payment',
        checkout_contact_title: 'Contact Information',
        checkout_name: 'Full Name *', checkout_name_ph: 'Your name',
        checkout_phone: 'Phone *', checkout_phone_ph: '(809) xxx-xxxx',
        checkout_email: 'Email *', checkout_email_ph: 'you@email.com',
        checkout_shipping_title: 'Shipping Address',
        checkout_address: 'Full Address *', checkout_address_ph: 'Street, number, building, apartment',
        checkout_city: 'City *', checkout_province: 'State/Province *', checkout_select: 'Select',
        checkout_payment_title: 'Payment Method',
        checkout_transfer_t: 'Bank Transfer', checkout_transfer_d: 'You will receive the bank details by email',
        checkout_link_t: 'Payment Link (Card)', checkout_link_d: 'We\'ll send you a secure link to pay',
        checkout_delivery_t: 'Cash on Delivery', checkout_delivery_d: 'Pay cash when you receive your order',
        checkout_confirm_btn: 'Confirm Order', checkout_processing: 'Processing...',
        checkout_attach_label: 'Attach payment receipt (optional)',
        checkout_attach_note: 'If you already made the transfer, upload a photo or screenshot of the receipt here.',
        checkout_empty_cart: 'Your cart is empty.',
        checkout_success: 'Order confirmed! You\'ll receive an email with your order details.',
        checkout_error: 'There was a problem processing your order. Please try again or contact us on WhatsApp.',
    }
};

function t(key) {
    const lang = getLang();
    return (LILI_DICT[lang] && LILI_DICT[lang][key]) || (LILI_DICT.es[key]) || key;
}

function applyI18n() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        el.textContent = t(el.getAttribute('data-i18n'));
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        el.placeholder = t(el.getAttribute('data-i18n-placeholder'));
    });
}

// ============================================================
// PRECIO SEGÚN MERCADO (no convierte, usa el valor guardado)
// ============================================================
function formatMarketPrice(precioRD, precioUSD) {
    if (getMarket() === 'US') {
        if (precioUSD === null || precioUSD === undefined || precioUSD === '') return null;
        return '$ ' + Number(precioUSD).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    }
    return 'RD$ ' + Number(precioRD).toLocaleString('es-DO');
}

// Devuelve { precio, precioNormal, disponible } listo para renderizar
function getMarketPricing(producto) {
    if (getMarket() === 'US') {
        const disponible = producto.precio_usd !== null && producto.precio_usd !== undefined;
        return {
            disponible,
            precio: disponible ? formatMarketPrice(null, producto.precio_usd) : null,
            precioNormal: (disponible && producto.precio_normal_usd) ? formatMarketPrice(null, producto.precio_normal_usd) : null,
            tieneDescuento: disponible && producto.precio_normal_usd && Number(producto.precio_normal_usd) > Number(producto.precio_usd)
        };
    }
    return {
        disponible: true,
        precio: formatMarketPrice(producto.precio, null),
        precioNormal: producto.precio_normal ? formatMarketPrice(producto.precio_normal, null) : null,
        tieneDescuento: producto.precio_normal && Number(producto.precio_normal) > Number(producto.precio)
    };
}

// ============================================================
// TEXTO DE PRODUCTO SEGÚN IDIOMA (con fallback a español)
// ============================================================
function productText(producto, field) {
    if (getLang() === 'en') {
        const enField = field + '_en';
        return producto[enField] || producto[field] || '';
    }
    return producto[field] || '';
}

function catName(categoria) {
    const map = { shampoo: 'cat_shampoo', acondicionador: 'cat_acondicionador', tratamiento: 'cat_tratamiento', serum: 'cat_serum', combo: 'cat_combo', 'cuidado-personal': 'cat_personal' };
    return t(map[categoria] || categoria);
}

// ============================================================
// TRADUCCIÓN AUTOMÁTICA (fallback cuando no hay texto en inglés manual)
// ============================================================
const LILI_TRANS_CACHE_PREFIX = 'lili_trans_';

async function autoTranslate(text) {
    if (!text || !text.trim()) return text;

    const cacheKey = LILI_TRANS_CACHE_PREFIX + text;
    const cached = localStorage.getItem(cacheKey);
    if (cached) return cached;

    try {
        const res = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=es|en`);
        const data = await res.json();
        const translated = data?.responseData?.translatedText;
        if (translated) {
            localStorage.setItem(cacheKey, translated);
            return translated;
        }
        return text;
    } catch (err) {
        console.warn('Auto-traducción falló, usando texto original:', err);
        return text;
    }
}

// Traduce automáticamente los campos indicados de una lista de objetos
// (solo si el mercado es US y no hay ya un campo "_en" manual cargado)
async function autoTranslateFields(items, fields) {
    if (getLang() !== 'en') return items;

    for (const item of items) {
        for (const field of fields) {
            const enField = field + '_en';
            if (!item[enField] && item[field]) {
                item[enField] = await autoTranslate(item[field]);
            }
        }
    }
    return items;
}

// ============================================================
// TASA DE CAMBIO SUGERIDA (solo ayuda al admin a rellenar precios USD)
// ============================================================
async function getSuggestedExchangeRate(supabaseUrl, headers) {
    try {
        const res = await fetch(`${supabaseUrl}/rest/v1/site_config?clave=eq.tasa_cambio`, { headers });
        const rows = await res.json();
        if (rows.length > 0 && rows[0].valor) return parseFloat(rows[0].valor);
    } catch (err) {}
    return 60; // valor por defecto aproximado, el admin puede cambiarlo
}
function renderMarketSwitcher(containerId) {
    const el = document.getElementById(containerId);
    if (!el) return;
    const market = getMarket();
    el.innerHTML = `
        <div class="market-switcher" style="position:relative;">
            <button id="marketBtn" style="display:flex; align-items:center; gap:.45rem; background:none; border:1.5px solid var(--line, #EAE3DC); border-radius:2rem; padding:.35rem .75rem; font-size:.78rem; font-weight:600; cursor:pointer; font-family:inherit; color:inherit;">
                <img src="https://flagcdn.com/24x18/${market === 'US' ? 'us' : 'do'}.png" width="20" height="15" style="border-radius:2px; display:block;" alt="${market}">
                <span>${market === 'US' ? 'US' : 'RD'}</span>
                <i class="fas fa-chevron-down" style="font-size:.6rem;"></i>
            </button>
            <div id="marketDropdown" style="display:none; position:absolute; top:110%; right:0; background:#fff; border:1px solid var(--line, #EAE3DC); border-radius:.8rem; box-shadow:0 10px 30px rgba(0,0,0,.12); min-width:180px; overflow:hidden; z-index:100;">
                <div class="market-opt" data-market="RD" style="padding:.7rem 1rem; font-size:.82rem; cursor:pointer; display:flex; align-items:center; gap:.7rem;">
                    <img src="https://flagcdn.com/24x18/do.png" width="20" height="15" style="border-radius:2px;" alt="RD"> República Dominicana
                </div>
                <div class="market-opt" data-market="US" style="padding:.7rem 1rem; font-size:.82rem; cursor:pointer; display:flex; align-items:center; gap:.7rem; border-top:1px solid var(--line, #EAE3DC);">
                    <img src="https://flagcdn.com/24x18/us.png" width="20" height="15" style="border-radius:2px;" alt="US"> United States
                </div>
            </div>
        </div>
    `;

    const btn = document.getElementById('marketBtn');
    const dropdown = document.getElementById('marketDropdown');
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
    });
    document.addEventListener('click', () => { dropdown.style.display = 'none'; });
    el.querySelectorAll('.market-opt').forEach(opt => {
        opt.addEventListener('click', () => setMarket(opt.dataset.market));
    });
}