import React from "react";
import ImgServiceOne from '../img/img-servicio-1.jpg'
import ImgServiceTwo from '../img/img-servicio-2.jpg'
import ImgServiceThree from '../img/img-servicio-3.jpg'

export default function Services({leng}){
    return(
        // SERVICIOS
        <section id="servicios">
            <h2 className="fade">{leng === 'es'?"Servicios": "Services"}</h2>
            {/* CARDS */}
            <div className="cards fade">
                <div className="card">
                    <div className="card-img">
                        <img src={ImgServiceOne} width="300px" alt="servicie initial clean up"/>
                        <h3>{leng==='es'?"Limpieza Inicial": "Initial Clean up"}</h3>
                    </div>
                    <div className="card-info">
                            {leng==='es'?(
                                <ul>
                                    <li>Arbustos y poda de árboles pequeños.</li>
                                    <li>Limpieza de la maleza.</li>
                                    <li>Extraer todos los árboles marcados.</li>
                                    <li>Cuidado del Césped (cortar y fertilizar).</li>
                                    <li>Eliminación de escombros.</li>
                                </ul>
                            ):<ul>
                                <li>Shrubbery & Small Tree Trimming.</li>
                                <li>Clean and rake all beds.</li>
                                <li>Dig out all trees marked.</li>
                                <li>Mowing & Edging.</li>
                                <li>Debri disposal.</li>
                            </ul>}
                    </div>
                </div>  
                <div className="card">
                    <div className="card-img">
                        <img src={ImgServiceTwo} width="300px" alt="servicie maintenance" />
                        <h3>{leng=== 'es'?"Mantenimiento": "Maintenance"}</h3>
                    </div>
                    <div className="card-info">
                        {leng==='es'?(
                            <ul>
                                <li>Servicios semanales.</li>
                                <li>Limpieza de Jardin.</li>
                                <li>Limpieza de todas las camas de planteros.</li>
                                <li>Limpiezas especiales de primavera y otoño.</li>
                                <li>Soplar y despejar las vías de camino.</li>
                            </ul>
                        ):(
                            <ul>
                                <li>Weekly services.</li>
                                <li>Garden Cleaning.</li>
                                <li>Cleaning of all planters beds.</li>
                                <li>Spring & Fall special Clean-ups.</li>
                                <li>Blow and clear the pathways.</li>
                            </ul>)}
                    </div>
                </div>
                <div className="card">
                    <div className="card-img">
                        <img src={ImgServiceThree} width="300px" alt="service special works"/>
                        <h3>{leng=== 'es'?"Trabajos especiales": "Specials Works"}</h3>
                    </div>
                    <div className="card-info">
                        {leng==='es'?(
                            <ul>
                                <li>Diseño de Jardinería y paisajismo.</li>
                                <li>Planificación de proyectos de paisajismo.</li>
                                <li>Replantar y rediseñar espacios con plantas.</li>
                            </ul>):
                        (
                            <ul>
                                <li>Gardening and landscaping design.</li>
                                <li>Landscaping Project Planning.</li>
                                <li>Relocate and design spaces with plants.</li>
                            </ul>
                        )}
                        
                    </div>
                </div>
            </div>

        </section>
    )
}