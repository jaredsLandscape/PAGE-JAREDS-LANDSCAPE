import React from "react";
import {ReactComponent as UbicIcon} from '../SVG/ubicacion.svg'
import {ReactComponent as FacebookIcon} from '../SVG/facebook.svg'
import {ReactComponent as InstagramIcon} from '../SVG/instagram.svg'
import { Link } from "react-router-dom";

export default function Footer({leng}){
    return(
        // FOOTER DE LA PÁGINA
        <footer>
            <div>
                <p>{leng==='es'?"Todos los derechos reseervados por el autor.":"All rights reserved by the author."}</p>
                <p>Licensed certified for Residential & Commercial.</p>
                <p>jaredslandscape.maintenance@gmail.com.</p>
                <p>jaredslandscape@hotmail.com.</p>
            </div>
            <div>
                <p className="datos_footer">
                    <a href="tel:+19712752277" target="_blank" rel="noreferrer">Contactanos: 971-275-2277.</a>
                </p>
                <p className="datos_footer">
                    <a href="https://g.page/jaredslandscape?gm" target="_blank" rel="noreferrer">Google My Business.
                    <UbicIcon className="icon-ubicacion"/></a>
                </p>
                <p className="datos_footer">
                    <Link to="/terms">{leng==='es'?"Terminos y condiciones.":"Terms and Conditions"}</Link>
                </p>
            </div>
            <div>   
                <p>{leng==='es'?"Siguenos en nuestras redes sociales":"Follow us on our social networks:"}</p>
                <div className="redes-sociales">
                    <a href="https://www.facebook.com/Jareds-Landscape-Maintenace-107385467821779/" target="_blank" rel="noreferrer"> <FacebookIcon width={40}/></a>
                    <a href="https://www.instagram.com/jaredslandscape/?igshid=jimq9vjweep3" target="_blank" rel="noreferrer">     <InstagramIcon width={40}/></a>
                </div>
            </div>
        </footer> 
    )
}