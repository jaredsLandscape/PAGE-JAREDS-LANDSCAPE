import React from "react";
import {ReactComponent as StepCallIcon} from "../SVG/llamada.svg"
import {ReactComponent as StepAgenIcon} from "../SVG/agendar.svg"
import {ReactComponent as StepCotIcon} from "../SVG/cotizacion.svg"
import {ReactComponent as UserIcon} from "../SVG/usuario.svg"
import {ReactComponent as EmailIcon} from "../SVG/email.svg"
import {ReactComponent as PhoneIcon} from "../SVG/phone.svg"
import {ReactComponent as MessageIcon} from "../SVG/comentario.svg"

export default function Contact(){
   return(
        // CONTACTO
        <section id="contacto">
        <div className="container-contacto">
            <h2 className="fade">Proceso de contratacion</h2>
            <div className="fade container-passeds">
                <div className="passed-1 passed">
                    <h3>Paso 1</h3>
                    <div className="passeds-img">
                        <StepCallIcon width={90} height={90}/>
                    </div>
                    <p>Contactanos para resolver dudas y agendar visita a la propiedad.</p>
                </div>
                <div className="passed-2 passed">
                    <h3>Paso 2</h3>
                    <div className="passeds-img">
                        <StepCotIcon width={60}/>
                    </div>
                    <p>Después de la visita realizamos el estimado y enviamos por email todos los detalles.</p>
                </div>
                <div className="passed-3 passed">
                    <h3>Paso 3</h3>
                    <div className="passeds-img">
                        <StepAgenIcon width={90}/>
                    </div>
                    <p>Agendar el dia  para iniciar el servicio.</p>
                </div>
            </div>
        </div>
        {/* FORMULARIO */}
        <form action="correos.php" method="POST" className="fade">
            <div className="form fade">
                <h3>Contactanos</h3>
                <div className="grupo">
                    <input type="text" name="nombre" required/><span className="barra"></span>
                    <label>
                        <UserIcon width={20}/>
                        Nombre
                    </label>
                </div>
                <div className="grupo">
                    <input type="email" name="mail" required/><span className="barra"></span>
                    <label>
                        <EmailIcon width={20}/>
                        Correo electronico
                    </label>
                </div>
                <div className="grupo">
                    <input type="tel" name="phone"/><span className="barra"></span>
                    <label>
                        <PhoneIcon width={15}/>
                        Teléfono
                    </label>
                </div>
                <div className="grupo">
                    <textarea name="comentario" rows="3"></textarea><span className="barra"></span>
                    <label>
                        <MessageIcon width={20}/>
                        Dejanos un comentario
                    </label>
                </div>
                <button  type="submit">Enviar</button>
            </div>
        </form>
    </section>
   )
}