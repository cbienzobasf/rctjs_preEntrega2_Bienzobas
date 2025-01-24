import { useState } from 'react';
import PropTypes from 'prop-types';

const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const [count, setCount] = useState(initial);

  // Aumentar contador.
  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  // Disminuir contador.
  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="d-flex flex-column align-items-center">
      <div className="btn-group mb-3" role="group" aria-label="Cantidad">
        <button 
          className="btn btn-outline-success" 
          onClick={decrement}
          disabled={count <= 1}
        >
          -
        </button>
        <span className="btn btn-outline-success disabled">
          {count}
        </span>
        <button 
          className="btn btn-outline-success" 
          onClick={increment}
          disabled={count >= stock}
        >
          +
        </button>
      </div>
      <button 
        className="btn btn-success"
        onClick={() => onAdd(count)}
        disabled={stock <= 0}
      >
        {stock > 0 ? 'Agregar al Carrito' : 'Sin Stock'}
      </button>
      <small className="text-muted mt-1">
        Stock disponible: {stock}
      </small>
    </div>
  );
};

ItemCount.propTypes = {
  stock: PropTypes.number.isRequired,
  initial: PropTypes.number,
  onAdd: PropTypes.func.isRequired
};

export default ItemCount; 