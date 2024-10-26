import React from 'react';
import './header.css';

function Header({ setCurrentPage }) {
  return (
    <header>
        <div class="header-container">
            <h1>BANCO DE SANGRE</h1>
            <nav>
                <ul>
                    <li><a onClick={() => setCurrentPage('principal')} href="#">Inicio</a></li>
                    <li><a onClick={() => setCurrentPage('donar')} href="#">Donar sangre</a></li>
                    <li><a onClick={() => setCurrentPage('campañas')} href="#">Campañas</a></li>
                    <li><a onClick={() => setCurrentPage('crearcampaña')} href="#">Buscar donante</a></li>
                    <li><a onClick={() => setCurrentPage('Acercade')} href="#">Acerca de</a></li>
                </ul>
            </nav>
            <div class="auth-links">
                <a href="#">Iniciar sesión</a>
                <span>|</span>
                <a href="#">Registrarse</a>
            </div>
        </div>
    </header>
  );
}

export default Header;