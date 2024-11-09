import React from 'react';
import './Tarjeta-campaña.css';

function Tarjetacampaña({ id, nombre, sangre, hospital, fechaCierre, cantidad }) {
    return (
        <div className="campaign-card">
            <img src="src\assets\pagina-principal(1).jpg" alt={`Campaña de sangre ${sangre}`} className="campaign-image" />
            <p><strong>ID de campaña:</strong> {id}</p>
            <p><strong>Nombre:</strong> {nombre}</p>
            <p><strong>Tipo de Sangre:</strong> {sangre}</p>
            <p><strong>Hospital:</strong> {hospital}</p>
            <p><strong>Fecha de Cierre:</strong> {fechaCierre}</p>
            <p><strong>Cantidad Necesaria:</strong> {cantidad} litros</p>
        </div>
    );
}

export default Tarjetacampaña;
