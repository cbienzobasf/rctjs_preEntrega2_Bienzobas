const CartWidget = () => {
  // Componente CartWidget.
  return (
<div className="position-relative d-inline-block">
  {/* Contenedor carro de compra. Uso clases bootstrap: `position-relative` y `d-inline-block` */}

  <i className="bi bi-cart3 fs-3"></i>
  {/* Ícono carro de compra.Uso de clases bootstrap: `bi bi-cart3` y `fs-3`*/}

  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {/* Burbuja hardcoded productos carro de commpra. Uso clases bootstrap:
        - `position-absolute`.
        - `top-0`.
        - `start-100`.
        - `translate-middle`.
        - `badge`.
        - `rounded-pill`.
        - `bg-danger`. */}

    9
  </span>
</div>

  );
};

export default CartWidget;
// Export componente CartWidget.
