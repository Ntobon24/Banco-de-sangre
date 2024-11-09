import React from 'react';
import './Tarjeta-campaña.css';

function Tarjetacampaña({ nombre, sangre, hospital, fechaCierre, cantidad }) {
    return (
        <div className="campaign-card">
            <img src="src\assets\pagina-principal(1).jpg" alt={`Campaña de sangre ${sangre}`} className="campaign-image" />
            <div className="campaign-info">
                <p><strong>Nombre:</strong> {nombre}</p>
                <p><strong>Tipo de Sangre:</strong> {sangre}</p>
                <p><strong>Hospital:</strong> {hospital}</p>
                <p><strong>Fecha de Cierre:</strong> {fechaCierre}</p>
                <p><strong>Cantidad:</strong> {cantidad}</p>
            </div>
        </div>
    );
}

export default Tarjetacampaña;
