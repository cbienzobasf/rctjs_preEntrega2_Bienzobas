import { NavLink } from 'react-router-dom';
import CartWidget from './CartWidget';
// Import componente CartWidget, que se usa para mostrar ícono del carro de compra.

const NavBar = () => {
  // Definimos las categorías disponibles en la navegación
  const categories = [
    { id: 'invitaciones', name: 'Invitaciones' },
    { id: 'decoracion', name: 'Decoración' },
    { id: 'recuerdos', name: 'Recuerdos' },
    { id: 'accesorios', name: 'Accesorios' },
    { id: 'iluminacion', name: 'Iluminación' }
  ];

  return (
    // Barra de navegación fija en la parte superior
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      {/* Contenedor principal */}
      <div className="container">
        {/* Logo/Nombre de la tienda con enlace a inicio */}
        <NavLink className="navbar-brand" to="/">MiMatri</NavLink>
        {/* Enlace que actúa como el "brand" o nombre de la tienda en la barra de navegación. Uso clase bootstrap: 
            - `navbar-brand`. */}

        {/* Botón hamburguesa para menú móvil */}
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menú colapsable */}
        <div className="collapse navbar-collapse" id="navbarNav">
          {/* Lista de enlaces de navegación */}
          <ul className="navbar-nav me-auto">
            {/* Generamos los enlaces de categorías dinámicamente */}
            {categories.map(cat => (
              <li key={cat.id} className="nav-item">
                <NavLink 
                  to={`/category/${cat.id}`}
                  className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}
                >
                  {cat.name}
                </NavLink>
              </li>
            ))}
          </ul>
          {/* Componente del carrito de compras */}
          <CartWidget />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
// Export componente NavBar.
