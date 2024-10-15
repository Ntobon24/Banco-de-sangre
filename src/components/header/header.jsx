import React from 'react';
import './header.css';

function Header() {
  return (
    <header>
        <div class="header-container">
            <h1>BANCO DE SANGRE</h1>
            <nav>
                <ul>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Acerca de</a></li>
                    <li><a href="#">Donar sangre</a></li>
                    <li><a href="#">Buscar donante</a></li>
                    <li><a href="#">Contáctenos</a></li>
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