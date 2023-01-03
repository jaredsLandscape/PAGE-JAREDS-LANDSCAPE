import React from "react";
import {ReactComponent as StepCallIcon} from "../SVG/llamada.svg"
import {ReactComponent as StepAgenIcon} from "../SVG/agendar.svg"
import {ReactComponent as StepCotIcon} from "../SVG/cotizacion.svg"
import {ReactComponent as UserIcon} from "../SVG/usuario.svg"
import {ReactComponent as EmailIcon} from "../SVG/email.svg"
import {ReactComponent as PhoneIcon} from "../SVG/phone.svg"
import {ReactComponent as MessageIcon} from "../SVG/comentario.svg"

export default function Contact({leng}){
   return(
        // CONTACTO
        <section id="contacto">
        <div className="container-contacto">
            <h2 className="fade">{leng==='es'?"Proceso de contratacion":"Recruitment process"}</h2>
            <div className="fade container-passeds">
                <div className="passed-1 passed">
                    <h3>Paso 1</h3>
                    <div className="passeds-img">
                        <StepCallIcon width={90} height={90}/>
                    </div>
                    <p>{leng==='es'?"Contactanos para resolver dudas y agendar visita a la propiedad.":"Contact us to answer questions and schedule a visit to the property."}</p>
                </div>
                <div className="passed-2 passed">
                    <h3>Paso 2</h3>
                    <div className="passeds-img">
                        <StepCotIcon width={60}/>
                    </div>
                    <p>{leng==='es'?"Después de la visita realizamos el estimado y enviamos por email todos los detalles.":"After the visit, we make the estimate and send all the details by email."}</p>
                </div>
                <div className="passed-3 passed">
                    <h3>Paso 3</h3>
                    <div className="passeds-img">
                        <StepAgenIcon width={90}/>
                    </div>
                    <p>{leng==='es'?"Agendar el dia  para iniciar el servicio.":"Schedule the date to start the service."}</p>
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
                        {leng==='es'?"Nombre":"Name"}
                    </label>
                </div>
                <div className="grupo">
                    <input type="email" name="mail" required/><span className="barra"></span>
                    <label>
                        <EmailIcon width={20}/>
                        
                        {leng==='es'?"Correo electronico":"Email"}
                    </label>
                </div>
                <div className="grupo">
                    <input type="tel" name="phone"/><span className="barra"></span>
                    <label>
                        <PhoneIcon width={15}/>
                        
                        {leng==='es'?"Teléfono":"Phone"}
                    </label>
                </div>
                <div className="grupo">
                    <textarea name="comentario" rows="3"></textarea><span className="barra"></span>
                    <label>
                        <MessageIcon width={20}/>
                        {leng==='es'?"Dejanos un comentario":"Leave us a comment"}
                    </label>
                </div>
                <button  type="submit">{leng==='es'?"Enviar":"Send"}</button>
            </div>
        </form>
    </section>
   )
}