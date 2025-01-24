import PropTypes from 'prop-types';
import { formatPrice } from '../utils/formatters';
import ItemCount from './ItemCount';

const ItemDetail = ({ product, currentImageIndex, onImageChange }) => {
  // Estilo para las flechas del carrusel
  const arrowStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 20px'
  };

  const handleAddToCart = (quantity) => {
    console.log(`Agregando ${quantity} unidad(es) de ${product.name} al carrito`);
  };

  return (
    <div className="card">
      <div className="card-body">
        {/* Carrusel de imágenes del producto */}
        <div id={`carousel-${product.id}`} className="carousel slide mb-4" data-bs-ride="carousel">
          <div className="carousel-inner">
            {product.images.map((image, index) => (
              <div key={index} className={`carousel-item ${index === currentImageIndex ? 'active' : ''}`}>
                <img 
                  src={image} 
                  className="d-block w-100" 
                  alt={`${product.name} - imagen ${index + 1}`} 
                  style={{
                    height: '400px', 
                    objectFit: 'cover',
                    padding: '1rem 1rem 0 1rem'
                  }} 
                />
              </div>
            ))}
          </div>
          
          {/* Botón para imagen anterior */}
          <button 
            className="carousel-control-prev" 
            type="button" 
            onClick={() => onImageChange(prev => prev === 0 ? product.images.length - 1 : prev - 1)}
            style={arrowStyle}
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Anterior</span>
          </button>
          
          {/* Botón para imagen siguiente */}
          <button 
            className="carousel-control-next" 
            type="button" 
            onClick={() => onImageChange(prev => prev === product.images.length - 1 ? 0 : prev + 1)}
            style={arrowStyle}
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Siguiente</span>
          </button>
        </div>

        {/* Sección de detalles del producto */}
        <h2 className="card-title text-center mb-4">{product.name}</h2>
        <p className="card-text"><strong>Categoría:</strong> {product.category}</p>
        <p className="card-text"><strong>Descripción:</strong> {product.description}</p>
        <p className="card-text"><strong>Precio:</strong> {formatPrice(product.price)}</p>
        
        {/* Componente ItemCount */}
        <div className="text-center mt-4">
          <ItemCount 
            stock={product.stock} 
            initial={1} 
            onAdd={handleAddToCart}
          />
        </div>
      </div>
    </div>
  );
};

ItemDetail.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    stock: PropTypes.number.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired
  }).isRequired,
  currentImageIndex: PropTypes.number.isRequired,
  onImageChange: PropTypes.func.isRequired
};

export default ItemDetail; 