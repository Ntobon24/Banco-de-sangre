import React, { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'; 
import './header.css';

function Header({ setCurrentPage }) {
  const [user, setUser] = useState(null);

 
  useEffect(() => {
    const auth = getAuth();

    
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser); 
      } else {
        setUser(null); 
      }
    });

    
    return () => unsubscribe();
  }, []);

  // Función para cerrar sesión
  const handleLogout = async () => {
    const auth = getAuth();
    try {
      await signOut(auth);
      setUser(null); 
      console.log('Sesión cerrada correctamente');
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };

  return (
    <header>
      <div className="header-container">
        <h1>BANCO DE SANGRE</h1>
        <nav>
          <ul>
            <li><a onClick={() => setCurrentPage('principal')} href="#">Inicio</a></li>
            <li><a onClick={() => setCurrentPage('donar')} href="#">Donar sangre</a></li>
            <li><a onClick={() => setCurrentPage('campañas')} href="#">Campañas</a></li>
            <li><a onClick={() => setCurrentPage('crearcampaña')} href="#">Crear campaña</a></li>
            <li><a onClick={() => setCurrentPage('Acercade')} href="#">Acerca de</a></li>
          </ul>
        </nav>
        <div className="auth-links">
          {user ? (
            <div className="user-info">
              <img 
                src="src\assets\Usuario.png" 
                alt="Avatar" 
                className="user-avatar" 
                onClick={handleLogout} 
              />
            </div>
          ) : (
            <>
              <a onClick={() => setCurrentPage('inicio-sesion')} href="#">Iniciar sesión</a>
              <span>|</span>
              <a onClick={() => setCurrentPage('Registrar-usuario')} href="#">Registrarse</a>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
