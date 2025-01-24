import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import products from '../data/products';
import PropTypes from 'prop-types';
import { formatPrice } from '../utils/formatters';

const ItemListContainer = () => {
  // Estado local para almacenar los productos filtrados/visualizados.
  const [items, setItems] = useState([]);

  // Extracción de parámetro de categoría de la URL usando destructuring y renombrado a categoryId para mayor claridad.
  const { id: categoryId } = useParams();

  // Función auxiliar para normalizar texto, eliminación de tildes y conversión a minúsculas para hacer comparaciones consistentes.
  const normalizeText = (text) => {
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  };

  // Cambia la categoría en la URL.
  useEffect(() => {
    // Si hay una categoría seleccionada, filtra los productos. Si no hay categoría, se muestran todos los productos.
    const filteredProducts = categoryId
      ? products.filter(product => normalizeText(product.category) === normalizeText(categoryId))
      : products;
    
    // Actualización del estado con los productos filtrados.
    setItems(filteredProducts);
  }, [categoryId]); // Efecto se ejecuta cada vez que cambia categoryId.

  // Renderizado.
  return (
    <div className="container mt-5">
      {/* Grid.*/}
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {/* Productos filtrados. */}
        {items.map(product => (
          // Columna por producto.
          <div key={product.id} className="col">
            {/* Tarjeta con altura 100%. */}
            <div className="card h-100">
              {/* Imagen principal del producto personalizada */}
              <img 
                src={product.images[0]} // Primera imagen del array de imágenes.
                className="card-img-top" 
                alt={product.name}
                style={{
                  height: '200px',
                  objectFit: 'cover',
                  padding: '1rem 1rem 0 1rem'
                }}
              />
              
              <div className="card-body d-flex flex-column">
                {/* Título producto. */}
                <h5 className="card-title">{product.name}</h5>
                {/* Descripción producto. */}
                <p className="card-text">{product.description}</p>
                {/* Categoría producto */}
                <p className="card-text">
                  <small className="text-muted">Categoría: {product.category}</small>
                </p>
                {/* Precio producto. */}
                <p className="card-text">
                  <strong>{formatPrice(product.price)}</strong>
                </p>
                {/* Enlace para ver detalles. */}
                <Link to={`/item/${product.id}`} className="btn btn-success mt-auto">
                  Ver Detalles
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

ItemListContainer.propTypes = {
  greeting: PropTypes.string.isRequired,
};

export default ItemListContainer;
