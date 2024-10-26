import React from "react";
import "./Acercade.css";

function Acercade() {
    return (

        <main className="about-container">
          <section className="about-content">
            <h2>Acerca de nosotros</h2>
            <p>
              En Banco de sangre, estamos comprometidos con salvar vidas a través de la donación de sangre. 
              Nuestro objetivo es garantizar que cada persona que lo necesite tenga acceso a sangre segura y de calidad en el momento adecuado.
            </p>
            <p>
              Somos una organización dedicada a conectar a donantes generosos con hospitales y clínicas que requieren transfusiones urgentes 
              para sus pacientes. A través de nuestra red, proporcionamos sangre para tratamientos críticos, cirugías, emergencias y terapias para enfermedades crónicas.
            </p>
            <div className="mission-vision">
              <div className="mission">
                <h3>Misión</h3>
                <p>
                  Salvaguardar la salud de las personas asegurando un suministro constante y seguro de sangre. Creemos que cada donación es un acto de 
                  solidaridad que puede marcar la diferencia en la vida de hasta tres personas.
                </p>
              </div>
              <div className="vision">
                <h3>Visión</h3>
                <p>
                  Crear una comunidad solidaria donde cada persona que pueda donar sangre lo haga, garantizando que nunca falten suministros para aquellos que más lo necesitan.
                </p>
              </div>
            </div>
          </section>
        </main>
      );
    };
    
    export default Acercade;