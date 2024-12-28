# Pre-entrega 01
# E-commerce productos para Matrimonios

**Autor:** Carlos Biénzobas

## Tecnologías Utilizadas
- **HTML5**: Estructura principal de la página web.
- **JavaScript (ES6)**: Lógica del simulador.
- **Vite-ReactJs**: Framework utilizado para crear la aplicación.
- **Bootstrap**: Librería de estilos para mejorar la presentación y diseño.

## Descripción del Proyecto

Este simulador desarrollado en JavaScript y React corresponde a la primera preentrega asociada a una plataforma de e-commerce. En esta entrega, se construye la barra de navegación (`NavBar`) como componente principal, incluyendo enlaces funcionales, estilos con Bootstrap y un widget de carrito (`CartWidget`) con una burbuja de notificación con la cantidad de productos hardcoded.

Esta entrega corresponde a la primera pre-entrega del proyecto E-commerce del curso React JS de CoderHouse.

## Conocimientos Aplicados

1. **React y Componentes**:
   - Creación de componentes reutilizables.
   - Uso de props.
2. **Estilos con Bootstrap**:
   - Aplicación de estilos predefinidos.
3. **Validación de Props con PropTypes**:
   - Validación de las propiedades esperadas en los componentes.
4. **Vite como Entorno de Desarrollo**:
   - Configuración liviana y preestablecida.
5. **Flexbox de Bootstrap**:
   - Uso de utilidades de diseño como `d-flex`, `justify-content-between` y `gap`.

## Estructura del Proyecto

1. **src/components/NavBar.jsx**:
   - Componente para la barra de navegación que incluye el brand name, enlaces y el widget del carrito.
2. **src/components/CartWidget.jsx**:
   - Componente que muestra el ícono del carro de compra y una burbuja de notificación de productos agregados con un número fijo.
3. **src/components/ItemListContainer.jsx**:
   - Componente que renderiza un mensaje de bienvenida pasado como prop.
   - Validación de la prop `greeting` utilizando `PropTypes`.
4. **src/App.jsx**:
   - Componente principal de organización de componentes `NavBar` e `ItemListContainer`.
5. **src/main.jsx**:
   - Punto de entrada e importación de estilos globales de Bootstrap y personalizados del proyecto.

## Funcionalidades Principales

**1. Barra de Navegación (NavBar)**
- Nombre de la tienda (**MiMatri**).
- Enlaces funcionales de categorías **Inicio**, **Productos**, **Servicios**, y **Contacto**.
- Contiene el `CartWidget` con un ícono de carro de compra y un indicador numérico de productos agregados.

**2. CartWidget**
- Ícono de carro de compra.
- Burbuja con un número fijo (9) indicando la cantidad de productos en carro de compra.

**3. ItemListContainer**
- Mensaje de bienvenida personalizado pasado como prop.
- Validación de la prop con **PropTypes** para asegurar coherencia.

## Cumplimiento de Criterios de Evaluación

**1. Funcionalidad**
- El proyecto cumple con estructura y funcionalidad solicitada:
  1. Renderización del `NavBar` con el `CartWidget`.
  2. Renderización del mensaje de bienvenida en el `ItemListContainer`.

**2. Diseño**
- Estilos aplicados utilizando **Bootstrap**.

**3. Validación de Props**
- Uso de **PropTypes** en componente `ItemListContainer` para validar las props.

**4. Código Limpio**
- Código estructurado en componentes reutilizables, con nombres coherentes y respetando la lógica del proyecto.
