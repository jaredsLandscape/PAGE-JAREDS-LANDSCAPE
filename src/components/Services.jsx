import React from "react";
import ImgServiceOne from '../img/img-servicio-1.jpg'
import ImgServiceTwo from '../img/img-servicio-2.jpg'
import ImgServiceThree from '../img/img-servicio-3.jpg'

export default function Services(){
    return(
        // SERVICIOS
        <section id="servicios">
            <h2 className="fade">Servicios</h2>
            {/* CARDS */}
            <div className="cards fade">
                <div className="card">
                    <div className="card-img">
                        <img src={ImgServiceOne} width="300px" alt="servicie initial clean up"/>
                        <h3>Limpieza Inicial</h3>
                    </div>
                    <div className="card-info">
                            <ul>
                                <li>Arbustos y poda de árboles pequeños.</li>
                                <li>Limpieza de la maleza.</li>
                                <li>Extraer todos los árboles marcados.</li>
                                <li>Cuidado del Césped (cortar y fertilizar).</li>
                                <li>Eliminación de escombros.</li>
                            </ul>
                    </div>
                </div>  
                <div className="card">
                    <div className="card-img">
                        <img src={ImgServiceTwo} width="300px" alt="servicie maintenance" />
                        <h3>Mantenimiento</h3>
                    </div>
                    <div className="card-info">
                    
                            <ul>
                                <li>Servicios semanales.</li>
                                <li>Limpieza de Jardin.</li>
                                <li>Limpieza de todas las camas de planteros.</li>
                                <li>Limpiezas especiales de primavera y otoño.</li>
                                <li>Soplar y despejar las vías de camino.</li>
                            </ul>
                        
                    </div>
                </div>
                <div className="card">
                    <div className="card-img">
                        <img src={ImgServiceThree} width="300px" alt="service special works"/>
                        <h3>Trabajos especiales</h3>
                    </div>
                    <div className="card-info">
                        
                            <ul>
                                <li>Diseño de Jardinería y paisajismo.</li>
                                <li>Planificación de proyectos de paisajismo.</li>
                                <li>Replantar y rediseñar espacios con plantas.</li>
                            </ul>
                        
                    </div>
                </div>
            </div>

        </section>
    )
}