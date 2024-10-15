import React from 'react';
import Header from '../header/header';
import './Pagina-principal.css';

function PaginaPrincipal() {
    return (
        <div>
            <div>
                <Header />
            </div>
            <div>
                <section class="main-section">
                   <div class="container">
                       <h2>¿POR QUÉ DONAR?</h2>
                       <p>
                           Donar sangre es un acto de generosidad que puede salvar vidas. Cada donación tiene el potencial 
                           de marcar la diferencia para personas que enfrentan emergencias médicas, cirugías complejas, 
                           tratamientos de cáncer o enfermedades crónicas. Con una donación, podrías ayudar a hasta tres personas.
                       </p>
                       <div class="donate-now">
                           <a href="#" class="donate-button">Dona ahora</a>
                       </div>
                   </div>
               </section>

               <section class="facts-section">
                   <div class="container">
                       <h3>DATOS CURIOSOS DE LA SANGRE</h3>
                       <p>La sangre está compuesta por cuatro componentes principales: glóbulos rojos, glóbulos blancos, plaquetas y plasma.</p>
                       <p>Existen 4 tipos principales de sangre: A, B, AB y O, y cada uno puede ser positivo o negativo. El tipo de sangre más raro es AB negativo, que lo tiene menos del 1% de la población mundial.</p>
                       <p>El tipo O negativo es el donante universal. Esto significa que su sangre puede ser transfundida a cualquier persona, sin importar su tipo sanguíneo, lo que lo hace extremadamente importante en emergencias.</p>
                   </div>
               </section>

               <section class="campaigns-section">
                   <div class="container">
                       <h3>Campañas y solicitudes en curso</h3>
                       <div class="campaign">
                           <p><strong>Sangre:</strong> tipo AB</p>
                           <p><strong>Hospital:</strong> Hospital Pablo Tobón Uribe</p>
                           <p><strong>Fecha:</strong> 18/09/2024 - 22/09/2024</p>
                       </div>
                       <div class="campaign">
                           <p><strong>Sangre:</strong> tipo O-</p>
                           <p><strong>Hospital:</strong> Hospital General de Medellín</p>
                           <p><strong>Fecha:</strong> 24/09/2024 - 30/09/2024</p>
                       </div>
                       <div class="campaign">
                           <p><strong>Sangre:</strong> tipo O-</p>
                           <p><strong>Hospital:</strong> Hospital General de Medellín</p>
                           <p><strong>Fecha:</strong> 24/09/2024 - 30/09/2024</p>
                       </div>
                   </div>
               </section>
            </div>
        </div>
    );
}

export default PaginaPrincipal;