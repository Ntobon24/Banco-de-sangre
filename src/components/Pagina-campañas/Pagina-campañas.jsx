import React from 'react';
import Header from '../header/header';
import './Pagina-campañas.css';

function PaginaCampañas() {
    return (
        <div>
            
            <div>
                <section class="campaigns-section">
                    <div class="container">
                        <h2>Campañas y solicitudes en curso</h2>
                        <div class="campaign-grid">
                            <div class="campaign-card">
                                <div class="campaign-info">
                                    <p><strong>Sangre:</strong> A+</p>
                                    <p><strong>Hospital:</strong> Pablo Tobón Uribe</p>
                                    <p><strong>Fecha:</strong> 18/09/2024 - 22/09/2024</p>
                                    <p><strong>Cantidad:</strong> 5 Litros</p>
                                </div>
                            </div>
                            <div class="campaign-card">
                                <div class="campaign-info">
                                    <p><strong>Sangre:</strong> A-</p>
                                    <p><strong>Hospital:</strong> Las Américas AUNA</p>
                                    <p><strong>Fecha:</strong> 20/09/2024 - 24/09/2024</p>
                                    <p><strong>Cantidad:</strong> 1 Litro</p>
                                </div>
                            </div>
                            <div class="campaign-card">
                                <div class="campaign-info">
                                    <p><strong>Sangre:</strong> B+</p>
                                    <p><strong>Hospital:</strong> Hospital General de Medellín</p>
                                    <p><strong>Fecha:</strong> 26/09/2024 - 30/09/2024</p>
                                    <p><strong>Cantidad:</strong> 15 Litros</p>
                                </div>
                            </div>
                            <div class="campaign-card">
                                <div class="campaign-info">
                                    <p><strong>Sangre:</strong> B-</p>
                                    <p><strong>Hospital:</strong> San Vicente Fundación</p>
                                    <p><strong>Fecha:</strong> 30/09/2024 - 01/10/2024</p>
                                    <p><strong>Cantidad:</strong> 2 Litros</p>
                                </div>
                            </div>
                            <div class="campaign-card">
                                <div class="campaign-info">
                                    <p><strong>Sangre:</strong> AB+</p>
                                    <p><strong>Hospital:</strong> Clínica León XIII</p>
                                    <p><strong>Fecha:</strong> 02/10/2024 - 04/10/2024</p>
                                    <p><strong>Cantidad:</strong> 9 Litros</p>
                                </div>
                            </div>
                            <div class="campaign-card">
                                <div class="campaign-info">
                                    <p><strong>Sangre:</strong> AB-</p>
                                    <p><strong>Hospital:</strong> Clínica Las Américas</p>
                                    <p><strong>Fecha:</strong> 10/10/2024 - 14/10/2024</p>
                                    <p><strong>Cantidad:</strong> 1.5 Litros</p>
                                </div>
                            </div>
                            <div class="campaign-card">
                                <div class="campaign-info">
                                    <p><strong>Sangre:</strong> O+</p>
                                    <p><strong>Hospital:</strong> Pablo Tobón Uribe</p>
                                    <p><strong>Fecha:</strong> 18/10/2024 - 22/10/2024</p>
                                    <p><strong>Cantidad:</strong> 1.5 Litros</p>
                                </div>
                            </div>
                            <div class="campaign-card">
                                <div class="campaign-info">
                                    <p><strong>Sangre:</strong> O-</p>
                                    <p><strong>Hospital:</strong> San Vicente Fundación</p>
                                    <p><strong>Fecha:</strong> 18/10/2024 - 24/10/2024</p>
                                    <p><strong>Cantidad:</strong> 20 Litros</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default PaginaCampañas;