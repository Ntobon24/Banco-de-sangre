import React from 'react';
import './Tarjeta-campaña.css';

function Tarjetacampaña({ sangre, hospital, fecha, cantidad, imagen }) {
    return (
        <div className="campaign-card">
            <img src={imagen} alt={`Campaña de sangre ${sangre}`} className="campaign-image" />
            <div className="campaign-info">
                <p><strong>Sangre:</strong> {sangre}</p>
                <p><strong>Hospital:</strong> {hospital}</p>
                <p><strong>Fecha:</strong> {fecha}</p>
                <p><strong>Cantidad:</strong> {cantidad}</p>
            </div>
        </div>
    );
}

export default Tarjetacampaña;