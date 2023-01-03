import React from "react";
import {ReactComponent as UbicIcon} from '../SVG/ubicacion.svg'
import {ReactComponent as FacebookIcon} from '../SVG/facebook.svg'
import {ReactComponent as InstagramIcon} from '../SVG/instagram.svg'

export default function Footer(){
    return(
        // FOOTER DE LA PÁGINA
        <footer>
            <div>
                <p>Todos los derechos reseervados por el autor.</p>
                <p>Licensed certified for Residential & Commercial.</p>
                <p>jaredslandscape.maintenance@gmail.com.</p>
                <p>jaredslandscape@hotmail.com.</p>
            </div>
            <div>
                <p className="datos_footer">
                    <a href="tel:+19712752277" target="_blank">Contactanos: 971-275-2277.</a>
                </p>
                <p className="datos_footer">
                    <a href="https://g.page/jaredslandscape?gm" target="_blank">Google My Business.
                    <UbicIcon className="icon-ubicacion"/></a>
                </p>
                <p className="datos_footer">
                    <a href="terminos.php" target="_blank">Terminos y condiciones.</a>
                </p>
            </div>
            <div>   
                <p>Siguenos en nuestras redes sociales:</p>
                <div className="redes-sociales">
                    <a href="https://www.facebook.com/Jareds-Landscape-Maintenace-107385467821779/" target="_blank"> <FacebookIcon width={40}/></a>
                    <a href="https://www.instagram.com/jaredslandscape/?igshid=jimq9vjweep3" target="_blank">     <InstagramIcon width={40}/></a>
                </div>
            </div>
        </footer> 
    )
}