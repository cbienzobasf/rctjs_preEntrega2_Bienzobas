import PropTypes from 'prop-types';
// Import PropTypes.

const ItemListContainer = ({ greeting }) => {
  // Define el componente ItemListContainer como una función que recibe las props desestructuradas.
  // La prop `greeting` es un mensaje que se pasará al componente y se mostrará en la interfaz.

  return (
    <div style={{ padding: '20px', textAlign: 'center', fontSize: '1.2rem' }}>
      {/* Contenedor componente. Uso de clases bootstrap:
          - `padding: '20px'`.
          - `textAlign: 'center'`.
          - `fontSize: '1.2rem'`. */}
      <p>{greeting}</p>
      {/* Renderiza valor de la prop `greeting` dentro de un elemento <p>. */}
    </div>
  );
};

ItemListContainer.propTypes = {
  // Validacion de las props esperadas por el componente.
  greeting: PropTypes.string.isRequired,
};

export default ItemListContainer;
// Export componente.
