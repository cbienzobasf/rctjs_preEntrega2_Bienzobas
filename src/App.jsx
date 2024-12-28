import NavBar from './components/NavBar';
// Import componente NavBar. 

import ItemListContainer from './components/ItemListContainer';
// Import componente ItemListContainer.

function App() {
  // Define el componente App como una función de React.

  return (
    <div style={{ marginTop: '60px' }}>
      {/* Contenedor aplicación.*/}
      <NavBar />

      <ItemListContainer greeting="¡Bienvenido a MiMatri, tienda de productos para tu matrimonio!" />
      {/* Renderiza el componente ItemListContainer con la prop `greeting`.*/}
    </div>
  );
}

export default App;
// Export el componente App.
