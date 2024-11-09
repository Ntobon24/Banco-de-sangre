import React, { useState } from "react";
import { db } from 'C:/Users/Nicolas Tobon R/Desktop/Banco de sangre/Banco de sangre/src/firebaseConfig.js'; 
import { collection, addDoc } from 'firebase/firestore';
import "./Crearcampaña.css";

function Crearcampaña() {
  // Estado para cada campo del formulario
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [tipoDocumento, setTipoDocumento] = useState("");
  const [numeroDocumento, setNumeroDocumento] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [tipoSangre, setTipoSangre] = useState("");
  const [hospital, setHospital] = useState("");
  const [motivo, setMotivo] = useState("");
  const [prioridad, setPrioridad] = useState("");
  const [fechaCierre, setFechaCierre] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    
    try {
      await addDoc(collection(db, "Campañas"), {
        nombre,
        apellido,
        tipoDocumento,
        numeroDocumento,
        email,
        telefono,
        tipoSangre,
        hospital,
        motivo,
        prioridad,
        fechaSolicitud: new Date().toISOString(), 
        fechaCierre, 
      });

      
      setNombre("");
      setApellido("");
      setTipoDocumento("");
      setNumeroDocumento("");
      setEmail("");
      setTelefono("");
      setTipoSangre("");
      setHospital("");
      setMotivo("");
      setPrioridad("");
      setFechaCierre("");

      alert("Campaña creada exitosamente");
    } catch (error) {
      console.error("Error creando campaña: ", error);
      alert("Hubo un error al crear la campaña");
    }
  };

  return (
    <main className="donate-container">
      <section className="donate-form">
        <h2>Buscar donante</h2>
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
              <option value="Cedula">Cédula</option>
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
            <label htmlFor="tipoSangre">Tipo de sangre requerida:</label>
            <select
              id="tipoSangre"
              value={tipoSangre}
              onChange={(e) => setTipoSangre(e.target.value)}
              required
            >
              <option value="">Seleccionar</option>
              <option value="A+">A+</option>
              <option value="O-">O-</option>
              <option value="AB+">AB+</option>
              <option value="B-">B-</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="hospital">Hospital donde requiere la sangre:</label>
            <input
              type="text"
              id="hospital"
              value={hospital}
              onChange={(e) => setHospital(e.target.value)}
              placeholder="Ej: Pablo Tobón Uribe"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="motivo">Motivo de la solicitud:</label>
            <select
              id="motivo"
              value={motivo}
              onChange={(e) => setMotivo(e.target.value)}
              required
            >
              <option value="">Seleccionar</option>
              <option value="Emergencia">Emergencia</option>
              <option value="Cirugía">Cirugía</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="prioridad">Prioridad:</label>
            <select
              id="prioridad"
              value={prioridad}
              onChange={(e) => setPrioridad(e.target.value)}
              required
            >
              <option value="">Seleccionar</option>
              <option value="Alta">Alta</option>
              <option value="Media">Media</option>
              <option value="Baja">Baja</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="fechaCierre">Fecha de cierre:</label>
            <input
              type="date"
              id="fechaCierre"
              value={fechaCierre}
              onChange={(e) => setFechaCierre(e.target.value)}
              required
            />
          </div>
          <button type="submit">ENVIAR</button>
        </form>
      </section>
    </main>
  );
}

export default Crearcampaña;
