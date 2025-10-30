# 🌿 Lili Organic - Sistema E-commerce Profesional Multipágina

Sistema completo de tienda en línea con carrito de compras y múltiples opciones de pago.

## 📋 Archivos del Proyecto

### Páginas HTML (6 páginas)
- `index.html` - Página principal con hero y productos destacados
- `tienda.html` - Catálogo completo con filtros avanzados
- `carrito.html` - Carrito de compras y checkout
- `nosotros.html` - Historia, misión, visión y valores
- `beneficios.html` - Beneficios de productos naturales
- `contacto.html` - Formulario de contacto y FAQ

### JavaScript (4 archivos)
- `js/main.js` - Navegación, notificaciones y funciones generales
- `js/cart.js` - Sistema completo de carrito de compras
- `js/products.js` - Base de datos de 10 productos
- `js/shop.js` - Sistema de filtros y búsqueda

### CSS
- `css/styles.css` - Estilos profesionales completos (6000+ líneas)

### Otros
- `logo.svg` - Logo de la marca

## 🚀 Cómo Usar

### Opción 1: Abrir directamente
1. Abrir `index.html` en el navegador
2. ¡Listo para usar!

### Opción 2: Servidor local (recomendado)
```bash
python -m http.server 8000
# Abrir: http://localhost:8000
```

## ✨ Características Principales

### 🛒 Carrito de Compras
- Agregar/eliminar productos
- Actualizar cantidades
- Subtotal y total automático
- Envío GRATIS en compras >RD$ 2,000
- Cupones de descuento
- Persistencia en localStorage

### 💳 Sistema de Pago (3 opciones)
1. **Transferencia Bancaria** - Datos enviados por email
2. **Link de Pago** - Pago seguro con tarjeta
3. **Pago Contra Entrega** - Pago en efectivo

### 🛍️ Productos (10 productos)
1. Shampoo Fortalecedor - RD$ 650
2. Acondicionador Nutritivo - RD$ 650
3. Suero Capilar Growth - RD$ 400
4. Mascarilla Hidratante - RD$ 1,000
5. Shop Capilar Anticaída - RD$ 750
6. Botox Capilar Premium - RD$ 450
7. Aceite Capilar - RD$ 350
8. Spray Leave-in - RD$ 450
9. Crema de Peinar Rizos - RD$ 550
10. Combo Crecimiento - RD$ 1,500

### 🎯 Filtros de Tienda
- Búsqueda en tiempo real
- Filtrar por categoría
- Filtrar por rango de precio
- Ordenar por precio/nombre/popularidad

### 📱 Diseño Responsive
- Optimizado para móviles
- Funciona en tablets
- Versión desktop completa

## 🎨 Colores de Marca

```css
Principal: #652C83 (Púrpura)
Secundario: #C04F4C (Coral)
Acento: #86559B (Púrpura claro)
```

## 💡 Cupones de Descuento

- `BIENVENIDA10` - 10% de descuento
- `PRIMERACOMPRA` - RD$ 150 de descuento
- `ENVIOGRATIS` - Envío gratis

## 🔧 Personalización

### Agregar producto
En `js/products.js`:
```javascript
{
    id: '11',
    name: 'Nuevo Producto',
    category: 'shampoo',
    price: 500,
    description: 'Descripción',
    image: 'images/products/nuevo.jpg'
}
```

### Cambiar datos bancarios
En `js/checkout.js`, modificar la información de transferencia.

### Modificar envío gratis
En `js/cart.js`, cambiar `2000` por el monto deseado.

## 📞 Información de Contacto

- **Teléfono:** 829-210-1162
- **Email:** info@liliorganic.com
- **Instagram:** @liliorganic
- **Ubicación:** Santo Domingo, República Dominicana

## 🔄 Próximos Pasos para Producción

1. **Backend/API**
   - Configurar servidor Node.js
   - Conectar base de datos
   - Sistema de autenticación

2. **Pasarela de Pago**
   - Integrar Azul (RD)
   - Integrar Cardnet
   - Stripe/PayPal

3. **Hosting**
   - Subir a servidor web
   - Configurar dominio
   - Certificado SSL (HTTPS)

## 📊 Estadísticas

- **Páginas HTML:** 6
- **Archivos JavaScript:** 4
- **Productos en catálogo:** 10
- **Opciones de pago:** 3
- **100% Responsive** ✅
- **Sistema de carrito funcional** ✅

## 📄 Licencia

© 2025 Industria Garli SRL - Lili Organic
Todos los derechos reservados.

---

**Desarrollado con 💜 para Lili Organic**
