import React from "react";
import "./Crearcampaña.css";

function Crearcampaña() {
    return (
        <main className="donate-container">
          <section className="donate-form">
            <h2>Buscar donante</h2>
            <form >
              <div className="form-group">
                <label htmlFor="nombre">Nombre:</label>
                <input type="text" id="nombre" placeholder="Ej: Pepito" required />
              </div>
              <div className="form-group">
                <label htmlFor="apellido">Apellido:</label>
                <input type="text" id="apellido" placeholder="Ej: Perez" required />
              </div>
              <div className="form-group">
                <label htmlFor="tipoDocumento">Tipo de documento:</label>
                <select id="tipoDocumento" required>
                  <option value="">Seleccionar</option>
                  <option value="Cedula">Cédula</option>
                  <option value="Pasaporte">Pasaporte</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="numeroDocumento">Número de documento:</label>
                <input type="text" id="numeroDocumento" placeholder="Ej: 102383273" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Dirección de correo electrónico:</label>
                <input type="email" id="email" placeholder="Ej: albeiro@gmail.com" required />
              </div>
              <div className="form-group">
                <label htmlFor="telefono">Teléfono:</label>
                <input type="text" id="telefono" placeholder="Ej: 3145726387" required />
              </div>
              <div className="form-group">
                <label htmlFor="tipoSangre">Tipo de sangre requerida:</label>
                <select id="tipoSangre" required>
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
                <input type="text" id="hospital" placeholder="Ej: Pablo Tobón Uribe" required />
              </div>
              <div className="form-group">
                <label htmlFor="motivo">Motivo de la solicitud:</label>
                <select id="motivo" required>
                  <option value="">Seleccionar</option>
                  <option value="Emergencia">Emergencia</option>
                  <option value="Cirugía">Cirugía</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="prioridad">Prioridad:</label>
                <select id="prioridad" required>
                  <option value="">Seleccionar</option>
                  <option value="Alta">Alta</option>
                  <option value="Media">Media</option>
                  <option value="Baja">Baja</option>
                </select>
              </div>
              <button type="submit">ENVIAR</button>
            </form>
          </section>
        </main>
      );
    };

export default Crearcampaña;