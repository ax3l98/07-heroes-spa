import React from 'react';
import ReactDOM from 'react-dom/client';

// ReactRouter
import { BrowserRouter } from 'react-router-dom';

// Estilos CSS
import './styles.css';

// Componentes React
import { HeroesApp } from './HeroesApp';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <HeroesApp />
    </BrowserRouter>
  </React.StrictMode>
);
