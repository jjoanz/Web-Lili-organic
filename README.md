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

# LILI ORGANIC - Actualización de Productos de la Tienda

## 📦 Archivos Actualizados

Este paquete contiene los archivos actualizados para tu tienda web de Lili Organic con los 31 productos del listado oficial.

### Archivos Incluidos:

1. **products.js** - Base de datos completa de productos
2. **tienda.html** - Página de tienda actualizada
3. **shop.js** - Lógica de filtros y búsqueda mejorada

---

## 🚀 Instrucciones de Instalación

### Paso 1: Reemplazar products.js

```
📁 Ubicación: C:\Users\Jose\Downloads\Web-Lili-organic\js\products.js
```

**Acción:** Reemplaza el archivo `products.js` existente con el nuevo archivo.

**Cambios principales:**
- 31 productos completos con toda la información del listado
- Información de múltiples tamaños para cada producto
- Modo de uso incluido
- 6 categorías: Shampoos, Acondicionadores, Tratamientos, Sueros, Combos, Cuidado Personal

---

### Paso 2: Reemplazar tienda.html

```
📁 Ubicación: C:\Users\Jose\Downloads\Web-Lili-organic\tienda.html
```

**Acción:** Reemplaza el archivo `tienda.html` existente con el nuevo archivo.

**Mejoras:**
- Filtros actualizados con todas las categorías
- Mejor estructura de precios
- Contador de productos
- Footer mejorado con información completa

---

### Paso 3: Actualizar shop.js

```
📁 Ubicación: C:\Users\Jose\Downloads\Web-Lili-organic\asents\JS\shop.js
```

**Acción:** Reemplaza el archivo `shop.js` existente con el nuevo archivo.

**Nuevas funcionalidades:**
- Modal mejorado para ver detalles de productos
- Sistema de filtros más preciso
- Múltiples opciones de ordenamiento
- Contador de productos filtrados
- Muestra información de múltiples tamaños

---

## 📋 Lista Completa de Productos Agregados

### Mascarillas (6 productos):
1. Mascarilla Nutritiva Intensiva (10oz, 16oz, 28oz)
2. Mascarilla Hidratante (16oz, 28oz)
3. Mascarilla Crecimiento y Anticaída (10oz, 16oz, 28oz)
4. Mascarilla de Karité Anticaída (16oz, 28oz)
5. Mascarilla Re estructurante (10oz, 16oz, 28oz)
6. Mascarilla Detox (10oz, 16oz, 28oz)

### Shampoos (6 productos):
7. Shampoo Crecimiento y Anticaída (10oz, 16oz, 33oz)
8. Shampoo Nutritivo Intensivo (16oz, 33oz)
9. Shampoo Detox (10oz, 16oz, 33oz)
10. Shampoo Control Grasa y Caspa (16oz, 33oz)
11. Shampoo Reestructurante (10oz, 16oz, 33oz)
12. Shampoo Hidratante (16oz, 33oz)

### Sueros y Aceites (5 productos):
13. Serum Abrillantador (2oz, 4oz)
14. Aceite de Rosa de Mosqueta (2oz)
15. Gotero Crecimiento y Anticaída
16. Gotero Estimulador de Crecimiento
17. Suero Vitaminado (16oz)

### Tratamientos (11 productos):
18. Leave In Ultra Hidratante (5oz, 8oz)
19. Shot Capilar (6oz)
20. Gel Keratin (4oz)
21. Pre-Poo Crecimiento y Anticaída (10oz, 16oz)
22. Protector Térmico (6oz)
23. Crema de Peinar (9oz, 16oz)
24. Tratamiento Reparador e Hidratante (4oz)
25. Botox Capilar (1oz, 2oz, 5oz)
26. Grasita Nutritiva (4oz)
28. Serum Brillo & Sedosidad 33oz (tamaño familiar)

### Acondicionadores (1 producto):
27. Acondicionador Crecimiento y Anticaída (16oz)

### Cuidado Personal (1 producto):
29. Jabón Íntimo (4oz, 8oz)

### Combos (2 productos):
30. Combo Crecimiento Capilar (ahorra RD$ 650)
31. Combo Hidratación Total (ahorra RD$ 700)

---

## 🎨 Características de los Productos

Cada producto incluye:
- ✅ Nombre completo
- ✅ Categoría
- ✅ Descripción detallada
- ✅ Precio base
- ✅ Múltiples tamaños (donde aplica)
- ✅ Modo de uso
- ✅ Rating (5 estrellas)
- ✅ Número de reseñas
- ✅ Badges especiales (Más Vendido, Top #1, Popular, etc.)
- ✅ Stock disponible
- ✅ Imagen placeholder (agregar imágenes reales después)

---

## 🖼️ Imágenes de Productos

**IMPORTANTE:** Los archivos incluyen placeholders para las imágenes. Necesitarás agregar las imágenes reales en:

```
📁 Ubicación: C:\Users\Jose\Downloads\Web-Lili-organic\images\products\
```

### Nombres de archivo esperados:
- mascarilla-nutritiva.jpg
- mascarilla-hidratante.jpg
- mascarilla-anticaida.jpg
- mascarilla-karite.jpg
- mascarilla-reestructurante.jpg
- mascarilla-detox.jpg
- shampoo-anticaida.jpg
- shampoo-nutritivo.jpg
- shampoo-detox.jpg
- shampoo-menta-nopal.jpg
- shampoo-reestructurante.jpg
- shampoo-hidratante.jpg
- serum-abrillantador.jpg
- aceite-rosa-mosqueta.jpg
- gotero-anticaida.jpg
- gotero-estimulador.jpg
- suero-vitaminado.jpg
- leave-in.jpg
- shot-capilar.jpg
- gel-keratin.jpg
- pre-poo.jpg
- protector-termico.jpg
- crema-peinar.jpg
- tratamiento-reparador.jpg
- botox-capilar.jpg
- grasita-nutritiva.jpg
- acondicionador-anticaida.jpg
- serum-grande.jpg
- jabon-intimo.jpg
- combo-crecimiento.jpg
- combo-hidratacion.jpg

---

## 🔧 Configuración de Filtros

Los nuevos filtros incluyen:

### Por Categoría:
- Todas las categorías
- Shampoos
- Acondicionadores
- Tratamientos
- Sueros
- Combos
- Cuidado Personal

### Por Precio:
- Todos los precios
- RD$ 0 - 500
- RD$ 500 - 800
- RD$ 800 - 1,000
- RD$ 1,000 - 2,000
- RD$ 2,000+

### Ordenar por:
- Destacados
- Precio: Bajo a Alto
- Precio: Alto a Bajo
- Nombre A-Z
- Más Populares

---

## ✨ Nuevas Funcionalidades

1. **Modal de Producto Mejorado:**
   - Vista previa de imagen grande
   - Información completa del producto
   - Todos los tamaños disponibles con precios
   - Modo de uso
   - Indicador de stock
   - Botón directo para agregar al carrito

2. **Búsqueda Inteligente:**
   - Busca por nombre de producto
   - Busca por descripción
   - Busca por categoría

3. **Contador de Productos:**
   - Muestra productos actuales vs total
   - Se actualiza dinámicamente con filtros

4. **Indicadores Visuales:**
   - Badges para productos destacados
   - Alerta de "Últimas unidades" cuando hay poco stock
   - Precios tachados para combos con descuento

---

## 🐛 Solución de Problemas

### Problema: Los productos no se muestran
**Solución:** Verifica que `products.js` esté correctamente vinculado en `tienda.html` antes de `shop.js`

### Problema: Las imágenes no cargan
**Solución:** 
1. Verifica que las imágenes estén en la carpeta correcta
2. Los nombres de archivo deben coincidir exactamente
3. Si no tienes las imágenes, aparecerán placeholders automáticamente

### Problema: Los filtros no funcionan
**Solución:** Asegúrate de que `shop.js` esté cargado después de `products.js`

---

## 📞 Contacto

Para soporte o consultas:
- 📞 829-210-1162
- 📧 info@liliorganic.com
- 📍 Santo Domingo, República Dominicana

---

## 📝 Notas Adicionales

- Todos los precios están en Pesos Dominicanos (RD$)
- Los productos tienen información basada en el listado oficial de Lili Organic
- El sistema de carrito debe estar implementado por separado (cart.js)
- Se recomienda agregar imágenes reales para mejor presentación

---

**Fecha de Actualización:** Febrero 2025
**Versión:** 2.0
**Desarrollado para:** Lili Organic


---

**Desarrollado con 💜 para Lili Organic**
