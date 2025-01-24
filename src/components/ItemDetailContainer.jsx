import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/products';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { id } = useParams();

  useEffect(() => {
    const foundProduct = products.find(p => p.id === id);
    if (foundProduct) {
      setProduct(foundProduct);
      setCurrentImageIndex(0);
    }
  }, [id]);

  if (!product) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="container my-5">
      <ItemDetail 
        product={product}
        currentImageIndex={currentImageIndex}
        onImageChange={setCurrentImageIndex}
      />
    </div>
  );
};

export default ItemDetailContainer; 