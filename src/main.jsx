import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';
// Import estilos en el archivo `index.css`.

import App from './App.jsx';
// Import  componente `App`.

import 'bootstrap/dist/css/bootstrap.min.css';
// Estilos de Bootstrap.

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
