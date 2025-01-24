# Pre-entrega 02
# E-commerce para venta de productos para celebración de Matrimonios

**Autor:** Carlos Biénzobas

## Tecnologías Utilizadas
- **HTML5**: Estructura principal de la página web.
- **JavaScript (ES6)**: Lógica del simulador.
- **Vite-ReactJs**: Framework utilizado para crear la aplicación.
- **Bootstrap**: Librería de estilos para mejorar la presentación y diseño.

## Descripción del Proyecto

Este simulador desarrollado en JavaScript y React corresponde a la segunda preentrega asociada a una plataforma de e-commerce y es una continuación de la primera entrega. En esta entrega, se mantiene la barra de navegación (`NavBar`) y se incorpora lo siguiente:

- Visualización de productos en formato grid en página principal y redireccionado por medio del navbar a vistas con filtrado/visualización de productos por categorías.
- Vista detallada de productos individuales. 
- Actualización de componentes `ItemListContainer` e `ItemDetailContainer` para visualización de productos.
- Tarjetas con imágenes, carrusel de imágenes y descripción de productos.

Esta entrega corresponde a la segunda pre-entrega del proyecto E-commerce del curso React JS de CoderHouse.

Link entrega anterior: https://github.com/cbienzobasf/rctjs_preEntrega1_Bienzobas

## Cumplimiento Entregables

1. **Catálogo con navegación**: 
   - Catálogo de productos con navegación mediante React Router.
   - Visualización productos en formato grid.
   - Visualización de categorías específicas.

2. **Detalle de Producto**:
   - Detalle de producto con `ItemDetailContainer`.
   - Rutas dinámicas `/item/:id`.
   - Vista completa con información de producto.
   - `ItemCount` para gestión de cantidad de productos a agregar al carrito.

3. **Categorías navegables**:
   - Rutas `/category/:categoryId`.
   - Visualización/Filtrado de productos por categoría
   - Categorías definidas: Invitaciones, Decoración, Recuerdos, Accesorios e Iluminación.

4. **Componentes de Visualización**:
   - `ItemListContainer` actualizado para mostrar grid de productos.
   - `ItemDetailContainer` para vista detallada de productos y carrusel de imágenes.
   - `ItemCount` como componente hijo de `ItemDetail` para gestionar cantidad de productos a agregar al carrito.
   - Sistema de cards con imágenes y descripciones detalladas.

## Conocimientos Aplicados 

1. **React Router y Navegación**: Rutas dinámicas, manejo de parámetros URL y navegación programática entre componentes.

2. **Componentes Avanzados**: Componentes con estado, ciclos de vida con useEffect y manejo de eventos y callbacks.

3. **Gestión de Datos**: Filtrado/Visualización de productos, manejo de estados locales y paso de datos entre componentes.

## Estructura del Proyecto y funcionalidades implementadas

1. **src/components/NavBar.jsx**: Funcionalidad base de entrega anterior, adicionando implementación de filtrado/visualización de productos por categorías.

2. **src/components/CartWidget.jsx**: Funcionalidad base de entrega anterior.

3. **src/components/ItemListContainer.jsx**: Implementación de grid de productos con filtrado/visualización dinámica mediante NavBar, useEffect para carga de datos ycards para visualización de productos.

4. **src/components/ItemDetailContainer.jsx**:
   - Vista detallada de productos individuales.
   - Carrusel de imágenes del producto.
   - Información completa y descripción.

5. **src/App.jsx**: Comportamiento base de entrega anterior, adicionando implementación de React Router.

6. **src/utils/**: Archivos complementarios al proyecto para facilitar visulización de precios (formatters.js) y base de datos simulada de productos (products.js).

7. **src/main.jsx**: Comportamiento base de entrega anterior, adicionando implementación de BrowserRouter.

## Cumplimiento de Criterios de Evaluación

**1. Convenciones y Estructura**: Implementación de todos los entregables solicitados, estructura de componentes siguiendo mejores prácticas de React, código limpio y documentado, nombres descriptivos y coherentes en componentes y funciones.

**2. Navegabilidad**: Implementación de React Router DOM, uso de `useEffect` para actualización de datos, manejo de estados durante cambios de categoría y navegación sin recargas de página.

**3. Componente NavBar**: Links funcionales para categorías, implementación de `Link` de React Router, Promise para filtrado/visualización de productos por categoría y persistencia del CartWidget en todas las vistas.

**4. Componente ItemListContainer**: Uso correcto de `useParams` para filtrado/visualización, implementación de `useEffect` para cambios de ruta, visualización dinámica y grid para productos.

**5. Componente ItemDetail**: Acceso a datos mediante `itemId` y Promise, vista detallada con información completa e implementación de carrusel de imágenes.

**6. Calidad de Código**: Componentes modulares y reutilizables, manejo eficiente de estados y efectos e implementación correcta de props y PropTypes.

**7. Implementación de `ItemCount`**: `ItemCount` como componente hijo para gestionar la cantidad de productos a agregar al carrito, respetando el stock disponible.

## Instrucciones de Instalación y Ejecución Local

1. **Clonar el Repositorio**:
   ```bash
   git clone https://github.com/cbienzobasf/rctjs_preEntrega2_Bienzobas.git
   cd rctjs_preEntrega2_Bienzobas
   ```

2. **Instalar Dependencias**:
   - Asegúrate de tener Node.js instalado en tu sistema (versión 14.0.0 o superior)
   - Ejecuta el siguiente comando para instalar todas las dependencias del proyecto:
   ```bash
   npm install
   ```

3. **Ejecutar el Proyecto**:
   - Una vez instaladas las dependencias, ejecuta el siguiente comando:
   ```bash
   npm run dev
   ```
   - La aplicación se iniciará en modo desarrollo
   - Abre tu navegador y visita la URL que aparece en la terminal (generalmente http://localhost:5173)

4. **Detener la Aplicación**:
   - Para detener la ejecución del servidor de desarrollo, presiona `Ctrl + C` en la terminal

## Requisitos del Sistema
- Node.js (v14.0.0 o superior)
- npm (v6.0.0 o superior)
- Navegador web moderno (Chrome, Firefox, Safari, Edge)