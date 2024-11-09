import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import './Inicio-sesion.css'; // Usamos el mismo estilo de formulario

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Función para manejar el inicio de sesión
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true); // Para mostrar que está en proceso

    const auth = getAuth();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      setError(''); // Limpiar errores si el login es exitoso
      console.log('Inicio de sesión exitoso');
      // Aquí puedes redirigir o actualizar el estado de la aplicación (ej. cambiar la página activa)
    } catch (error) {
      setError('Error al iniciar sesión. Verifica tus credenciales.');
      console.error(error.message);
    }

    setLoading(false); // Detener la carga
  };

  return (
    <main className="donate-container">
      <section className="donate-form">
        <h2>Iniciar sesión</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="email">Correo electrónico:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Ej: example@gmail.com"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Ej: ********"
              required
            />
          </div>
          {error && <p className="error-message">{error}</p>} {/* Mostrar mensaje de error */}
          <button type="submit" disabled={loading}>
            {loading ? 'Iniciando sesión...' : 'Iniciar sesión'}
          </button>
        </form>
      </section>
    </main>
  );
}

export default Login;
