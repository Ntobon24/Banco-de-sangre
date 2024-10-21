import React from 'react';
import './Pagina-campañas.css';
import Tarjetacampaña from '../Tarjeta-campaña/Tarjeta-campaña';

function PaginaCampañas() {
    return (
        <div>  
            <div>
                <section class="campaigns-section">
                    <div class="container">
                        <h2>Campañas y solicitudes en curso</h2>
                        <div class="campaign-grid">
                            <Tarjetacampaña
                                sangre="A+"
                                hospital="Pablo Tobón Uribe"
                                fecha="18/09/2024 - 22/09/2024"
                                cantidad="5 Litros"
                                imagen="src\assets\hospital_pablotobonuribe.png"
                            />
                            <Tarjetacampaña
                                sangre="A-"
                                hospital="Las Américas AUNA"
                                fecha="20/09/2024 - 24/09/2024"
                                cantidad="1 Litro"
                                imagen="src\assets\hospital_pablotobonuribe.png"
                            />
                            <Tarjetacampaña
                                sangre="B+"
                                hospital="Hospital General de Medellín"
                                fecha="26/09/2024 - 30/09/2024"
                                cantidad="15 Litros"
                                imagen="src\assets\hospital_pablotobonuribe.png"
                            />
                            <Tarjetacampaña
                                sangre="A+"
                                hospital="Pablo Tobón Uribe"
                                fecha="18/09/2024 - 22/09/2024"
                                cantidad="5 Litros"
                                imagen="src\assets\hospital_pablotobonuribe.png"
                            />
                            <Tarjetacampaña
                                sangre="A-"
                                hospital="Las Américas AUNA"
                                fecha="20/09/2024 - 24/09/2024"
                                cantidad="1 Litro"
                                imagen="src\assets\hospital_pablotobonuribe.png"
                            />
                            <Tarjetacampaña
                                sangre="B+"
                                hospital="Hospital General de Medellín"
                                fecha="26/09/2024 - 30/09/2024"
                                cantidad="15 Litros"
                                imagen="src\assets\hospital_pablotobonuribe.png"
                            />
                            <Tarjetacampaña
                                sangre="A-"
                                hospital="Las Américas AUNA"
                                fecha="20/09/2024 - 24/09/2024"
                                cantidad="1 Litro"
                                imagen="src\assets\hospital_pablotobonuribe.png"
                            />
                            <Tarjetacampaña
                                sangre="B+"
                                hospital="Hospital General de Medellín"
                                fecha="26/09/2024 - 30/09/2024"
                                cantidad="15 Litros"
                                imagen="src\assets\hospital_pablotobonuribe.png"
                            />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default PaginaCampañas;