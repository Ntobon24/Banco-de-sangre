import React, { useState } from "react";
import { db } from 'C:/Users/Nicolas Tobon R/Desktop/Banco de sangre/Banco de sangre/src/firebaseConfig.js'; 
import { collection, addDoc } from 'firebase/firestore';
import "./Formulario.css";

function Formulario() {
  const [idCampaña, setIdCampaña] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [tipoDocumento, setTipoDocumento] = useState("");
  const [numeroDocumento, setNumeroDocumento] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [residencia, setResidencia] = useState("");
  const [litros, setLitros] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "Donaciones"), {
        idCampaña,
        nombre,
        apellido,
        tipoDocumento,
        numeroDocumento,
        email,
        telefono,
        residencia,
        litros,
        fechaDonacion: new Date().toISOString()
      });
      
      alert("Donación registrada exitosamente");
      setIdCampaña("");
      setNombre("");
      setApellido("");
      setTipoDocumento("");
      setNumeroDocumento("");
      setEmail("");
      setTelefono("");
      setResidencia("");
      setLitros("");
    } catch (error) {
      console.error("Error al registrar la donación: ", error);
      alert("Hubo un error al registrar la donación");
    }
  };

  return (
    <main className="donate-container">
      <section className="donate-form">
        <h2>Donar a campaña</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="idCampaña">Id campaña:</label>
            <input
              type="text"
              id="idCampaña"
              value={idCampaña}
              onChange={(e) => setIdCampaña(e.target.value)}
              placeholder="Ej: XAwpEGUn0lwm4c2kyaHU"
              required
            />
          </div>
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
            <label htmlFor="apellido">Apellido:</label>
            <input
              type="text"
              id="apellido"
              value={apellido}
              onChange={(e) => setApellido(e.target.value)}
              placeholder="Ej: Perez"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="tipoDocumento">Tipo de documento:</label>
            <select
              id="tipoDocumento"
              value={tipoDocumento}
              onChange={(e) => setTipoDocumento(e.target.value)}
              required
            >
              <option value="">Seleccionar</option>
              <option value="Cédula">Cédula</option>
              <option value="Pasaporte">Pasaporte</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="numeroDocumento">Número de documento:</label>
            <input
              type="text"
              id="numeroDocumento"
              value={numeroDocumento}
              onChange={(e) => setNumeroDocumento(e.target.value)}
              placeholder="Ej: 102383273"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Dirección de correo electrónico:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Ej: albeiro@gmail.com"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="telefono">Teléfono:</label>
            <input
              type="text"
              id="telefono"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
              placeholder="Ej: 3145726387"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="residencia">Dirección de residencia:</label>
            <input
              type="text"
              id="residencia"
              value={residencia}
              onChange={(e) => setResidencia(e.target.value)}
              placeholder="Ej: Calle 123"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="litros">¿Cuántos litros desea donar?</label>
            <select
              id="litros"
              value={litros}
              onChange={(e) => setLitros(e.target.value)}
              required
            >
              <option value="">Seleccionar</option>
              <option value="0.1">0.1</option>
              <option value="0.2">0.2</option>
              <option value="0.3">0.3</option>
              <option value="0.4">0.4</option>
              <option value="0.5">0.5</option>
            </select>
          </div>
          <button type="submit">ENVIAR</button>
        </form>
      </section>
    </main>
  );
}

export default Formulario;
