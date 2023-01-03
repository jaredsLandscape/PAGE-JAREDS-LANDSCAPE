import React from "react";
import {ReactComponent as ProfileIcon} from "../SVG/perfil.svg"
import BeforeAfterImg from "../img/antes-despues.jpg";

export default function Testimonials(){
    return(
        // TESTIMONIOS
        <section id="testimonios">
            {/* SLIDER */}
            <div className="container">
                <h2 className="fade">Testimonios</h2>
                <hr className="fade"/>
                <input type="radio" name="slides" id="radio1" checked/>
                <input type="radio" name="slides" id="radio2"/>
                <input type="radio" name="slides" id="radio3"/>
                <ul className="slides fade">
                    <li className="slide">
                    
                            <ProfileIcon width={80}/>
                            <p className="person-name">Steve Kleinheinz</p>
                            <q>Estos muchachos son geniales. Asequible y capaz de casi todo lo que 
            pueda arrojarles, incluido el riego. Hemos estado usando Serafrin durante casi 6 años. Algunos de mis vecinos se han dado cuenta y ahora lo usan también. Muy confiable, gran valor!</q>
                        
                    </li>
                    <li className="slide">
                    
                            <ProfileIcon width={80}/>
                            <p className="person-name">Katherine Foldes</p>
                            <q>Excelente trabajo durante varios años, incluidos proyectos especiales 
            y mantenimiento de rutina del patio. Gente agradable, confiable.</q>
                        
                    </li>
                    <li className="slide">
                    
                            <ProfileIcon width={80}/>
                            <p className="person-name">Steve Kleinheinz</p>
                            <q>Estos muchachos son geniales. Asequible y capaz de casi todo lo que 
            pueda arrojarles, incluido el riego. Hemos estado usando Serafrin durante casi 6 años. Algunos de mis vecinos se han dado cuenta y ahora lo usan también. Muy confiable, gran valor!</q>
                        
                    </li>
                </ul>
                <div className="navigation">   
                    <label htmlFor="radio1" id="radioSelect1"></label>
                    <label htmlFor="radio2" id="radioSelect2"></label>
                    <label htmlFor="radio3" id="radioSelect3"></label>
                </div>
            </div>
            <div>
                <h4 className="fade">ANTES / DESPUÉS</h4>
                <img className="antes-despues fade" src={BeforeAfterImg} width="500px" height="400px" alt="service before and after"/>
            </div>
        </section>
    )
}