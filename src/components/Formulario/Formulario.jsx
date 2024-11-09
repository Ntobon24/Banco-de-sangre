import React from "react";
import "./Formulario.css";

function Formulario() {
    return (
        <main className="donate-container">
          <section className="donate-form">
            <h2>Donar a campaña</h2>
            <form>
              <div className="form-group">
                <label htmlFor="nombre">Nombre:</label>
                <input type="text" id="nombre" placeholder="Ej: Pepito" />
              </div>
              <div className="form-group">
                <label htmlFor="apellido">Apellido:</label>
                <input type="text" id="apellido" placeholder="Ej: Perez" />
              </div>
              <div className="form-group">
                <label htmlFor="tipoDocumento">Tipo de documento:</label>
                <select id="tipoDocumento">
                  <option>Seleccionar</option>
                  <option>Cédula</option>
                  <option>Pasaporte</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="numeroDocumento">Número de documento:</label>
                <input type="text" id="numeroDocumento" placeholder="Ej: 102383273" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Dirección de correo electrónico:</label>
                <input type="email" id="email" placeholder="Ej: albeiro@gmail.com" />
              </div>
              <div className="form-group">
                <label htmlFor="telefono">Teléfono:</label>
                <input type="text" id="telefono" placeholder="Ej: 3145726387" />
              </div>
              <div className="form-group">
                <label htmlFor="residencia">Dirección de residencia:</label>
                <input type="text" id="residencia" placeholder="Ej: Calle 123" />
              </div>
              <div className="form-group">
                <label htmlFor="litros">¿Cuántos litros desea donar?</label>
                <select id="litros">
                  <option>Seleccionar</option>
                  <option>0.1</option>
                  <option>0.2</option>
                  <option>0.3</option>
                  <option>0.4</option>
                  <option>0.5</option>
                </select>
              </div>
              <button type="submit">ENVIAR</button>
            </form>
          </section>
        </main>
  );
};

export default Formulario;