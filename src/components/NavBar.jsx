import CartWidget from './CartWidget';
// Import componente CartWidget, que se usa para mostrar ícono del carro de compra.

const NavBar = () => {
  // Definición componente NavBar.
  return (
    <nav className="navbar navbar-light bg-light fixed-top">
      {/* Elemento <nav> que representa la barra de navegación. Uso clases bootstrap:
          - `navbar`.
          - `navbar-light bg-light`.
          - `fixed-top`.*/}

      <div className="container-fluid">
        {/* Contenedor fluido que ocupe todo el ancho disponible. */}
        <div className="d-flex align-items-center">
          {/* Flexbox para alinear el brand y los enlaces correctamente. Uso clases bootstrap:
              - `d-flex`.
              - `align-items-center`. */}

          <a className="navbar-brand me-4" href="#">MiMatri</a>
          {/* Enlace que actúa como el "brand" o nombre de la tienda en la barra de navegación. Uso clase bootstrap: 
              - `navbar-brand`.
              - `me-4`. */}

          <ul className="navbar-nav flex-row gap-3">
            {/* Lista de navegación principal. Uso clases bootstrap:
                - `navbar-nav`.
                - `flex-row`.
                - `gap-3`. */}
            <li className="nav-item">
              <a className="nav-link px-3" href="#">Inicio</a>
              {/* Enlace a la sección "Inicio". Uso clases bootstrap:
                  - `px-3`. */}
            </li>
            <li className="nav-item">
              <a className="nav-link px-3" href="#">Productos</a>
              {/* Enlace a la sección "Productos". */}
            </li>
            <li className="nav-item">
              <a className="nav-link px-3" href="#">Servicios</a>
              {/* Enlace a la sección "Servicios". */}
            </li>
            <li className="nav-item">
              <a className="nav-link px-3" href="#">Contacto</a>
              {/* Enlace a la sección "Contacto". */}
            </li>
          </ul>
        </div>

        <CartWidget />
        {/* Insert componente CartWidget. */}
      </div>
    </nav>
  );
};

export default NavBar;
// Export componente NavBar.
