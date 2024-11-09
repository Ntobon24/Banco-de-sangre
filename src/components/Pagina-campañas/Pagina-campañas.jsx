import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from 'C:/Users/Nicolas Tobon R/Desktop/Banco de sangre/Banco de sangre/src/firebaseConfig.js';
import './Pagina-campañas.css';
import Tarjetacampaña from '../Tarjeta-campaña/Tarjeta-campaña';

function PaginaCampañas() {
    const [campañas, setCampañas] = useState([]);

    useEffect(() => {
        const obtenerCampañas = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'Campañas'));
                const campañasData = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setCampañas(campañasData);
            } catch (error) {
                console.error('Error al obtener las campañas:', error);
            }
        };

        obtenerCampañas();
    }, []);

    return (
        <div>
            <section className="campaigns-section">
                <div className="container">
                    <h2>Campañas y solicitudes en curso</h2>
                    <div className="campaign-grid">
                        {campañas.length > 0 ? (
                            campañas.map((campaña) => (
                                <Tarjetacampaña
                                    key={campaña.id}
                                    id={campaña.id} // Pasar el id a Tarjetacampaña
                                    nombre={`${campaña.nombre} ${campaña.apellido}`}
                                    sangre={campaña.tipoSangre} 
                                    hospital={campaña.hospital}
                                    fechaCierre={campaña.fechaCierre}
                                    cantidad={campaña.cantidadSangre}
                                />
                            ))
                        ) : (
                            <p>No hay campañas disponibles en este momento.</p>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default PaginaCampañas;
