// Importamos los componentes necesarios de react-router-dom
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Importamos los componentes de nuestra aplicación
import NavBar from './components/NavBar';
// Import componente NavBar. 

import ItemListContainer from './components/ItemListContainer';
// Import componente ItemListContainer.

import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  // Define el componente App como una función de React.

  return (
    // Router principal de la aplicación
    <Router>
      {/* Contenedor principal con margen superior para el navbar fijo */}
      <div style={{ marginTop: '60px' }}>
        {/* Barra de navegación */}
        <NavBar />
        
        {/* Definición de rutas */}
        <Routes>
          {/* Ruta principal - muestra todos los productos */}
          <Route path="/" element={<ItemListContainer />} />
          {/* Ruta para filtrar productos por categoría */}
          <Route path="/category/:id" element={<ItemListContainer />} />
          {/* Ruta para ver detalles de un producto específico */}
          <Route path="/item/:id" element={<ItemDetailContainer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
// Export el componente App.
