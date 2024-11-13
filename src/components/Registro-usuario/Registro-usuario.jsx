import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { db } from "C:/Users/Nicolas Tobon R/Desktop/Banco de sangre/Banco de sangre/src/firebaseConfig.js"; // Tu configuración de Firebase
import { collection, addDoc } from "firebase/firestore"; // Firestore para guardar datos adicionales del usuario
import './Registro-usuario.css';

function RegistrarUsuario() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [nombre, setNombre] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    
    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden.");
      return;
    }

    setLoading(true);
    setError(""); 

    const auth = getAuth();

    try {
    
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);

      
      const user = userCredential.user;

      
      await addDoc(collection(db, "Usuarios"), {
        uid: user.uid,
        nombre,
        email,
        createdAt: new Date(),
      });

      
      setNombre("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");

      alert("Usuario registrado con éxito");

    } catch (error) {
      setError(error.message);
      console.error("Error al registrar usuario:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="donate-container">
      <section className="donate-form">
        <h2>Registrar Usuario</h2>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="nombre">Nombre:</label>
            <input
              type="text"
              id="nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              placeholder="Ej: Pepito"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Correo Electrónico:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Ej: pepito@gmail.com"
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
              placeholder="Contraseña"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">Confirmar Contraseña:</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirmar Contraseña"
              required
            />
          </div>

          <button type="submit" disabled={loading}>
            {loading ? "Registrando..." : "Registrar"}
          </button>
        </form>
      </section>
    </main>
  );
}

export default RegistrarUsuario;
