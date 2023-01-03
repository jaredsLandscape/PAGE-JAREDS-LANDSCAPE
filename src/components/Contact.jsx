import React, { useState, useEffect } from "react";
import {ReactComponent as StepCallIcon} from "../SVG/llamada.svg"
import {ReactComponent as StepAgenIcon} from "../SVG/agendar.svg"
import {ReactComponent as StepCotIcon} from "../SVG/cotizacion.svg"
import {ReactComponent as UserIcon} from "../SVG/usuario.svg"
import {ReactComponent as EmailIcon} from "../SVG/email.svg"
import {ReactComponent as PhoneIcon} from "../SVG/phone.svg"
import {ReactComponent as MessageIcon} from "../SVG/comentario.svg"
import emailjs from 'emailjs-com'
import * as yup from 'yup'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'

const schema = yup.object().shape({
    email: yup.string().required("Campo obligatorio"),
    phone: yup.number().required("Campo obligatorio"),
    name: yup.string().required("Campo obligatorio"),
    message: yup.string().required("Campo obligatorio")
})

export default function Contact({leng}){

    const [notification, setNotification] = useState(false)
    const {register, formState:{errors}, handleSubmit} = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmit = e => {
        try {
            const templateID = 'template_oi0iikr'
            console.log(e);
            sendFeedback(templateID,{
                name: e.name,
                phone: e.phone,
                email: e.email,
                message: e.message
            })
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        emailjs.init("muG-RCz3M9JixjsDP")
    })

    const sendFeedback = (templateID, variables) => {
        emailjs.send('service_mm92bph', templateID, variables)
        .then(res => {
            setNotification(true)
            setTimeout(() => {
                setNotification(false)
            },3000)
        })
        .catch( err => {
            console.log(err, 'No se envío el correo')
        })
    }

   return(
        // CONTACTO
        <section id="contacto">
            {notification?(<div id="notification">
                Se envío el correo exitosamente
            </div>):null}
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
        <form onSubmit={handleSubmit(onSubmit)} className="fade">
            <div className="form fade">
                <h3>Contactanos</h3>
                <div className="grupo">
                    <input type="text" name="nombre" {...register("name")}/><span className="barra"></span>              <p className='text-red-primary'>{errors.name?.message}</p>
                    <label>
                        <UserIcon width={20}/>
                        {leng==='es'?"Nombre":"Name"}
                    </label>
                </div>
                <div className="grupo">
                    <input type="email" name="mail" {...register("email")}/><span className="barra" ></span>               <p className='text-red-primary'>{errors.email?.message}</p>
                    <label>
                        <EmailIcon width={20}/>
                        
                        {leng==='es'?"Correo electronico":"Email"}
                    </label>
                </div>
                <div className="grupo">
                    <input type="tel" name="phone" {...register("phone")}/><span className="barra" ></span>
                    <p className='text-red-primary'>{errors.phone?.message}</p>
                    <label>
                        <PhoneIcon width={15}/>
                        
                        {leng==='es'?"Teléfono":"Phone"}
                    </label>
                </div>
                <div className="grupo">
                    <textarea name="comentario" rows="3" {...register("message")}></textarea><span className="barra" ></span>
                    <p className='text-red-primary'>{errors.message?.message}</p>
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