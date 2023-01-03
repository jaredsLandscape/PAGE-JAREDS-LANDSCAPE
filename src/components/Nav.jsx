import React, { useEffect } from "react"
import LogoImg from '../img/logo-oro.png'
import {ReactComponent as SVGIconArrow} from '../SVG/arrow-down.svg'
import {ReactComponent as SVGMenu} from '../SVG/menu.svg'

export default function Nav(){

    useEffect(() => {
        window.addEventListener('scroll', () => {
            const nav = document.getElementById('navbar')
            if(window.scrollY > 0){
                nav.classList.add('sticky')
            }else{
                nav.classList.remove('sticky')
            }
        })
    })
    
    return(
        // NAVBAR
        <nav id="navbar">
            <img className="navbar-logo" src={LogoImg} alt="Logotipo JARED´S"/>
            {/* MENU PARA DSIPOSITIVOS MOVILES */}
            <input type="checkbox" id="menu"/>
            <label htmlFor="menu" className="checkbtn">
                <SVGMenu width={40} height={40}/>
            </label>
            <ul className="menu">
                <li><a className="btn-underline" href="#inicio">Inicio</a></li>
                <li><a className="btn-underline" href="#quienes_somos">¿Quiénes somos?</a></li>
                <li><a className="btn-underline" href="#servicios">Servicios</a></li>
                <li><a className="btn-underline" href="#contacto">Contactanos</a></li>
                <li><a className="btn-underline" href="#testimonios">Testimonios</a></li>
                {/* DRODOWN */}
                <li className="dropdown">
                    <button className="dropdown-btn">
                        <SVGIconArrow width={15}/>
                        Idioma
                    </button>  
                    <div className="dropdown-content">
                        <a href="index.php?lang=es">Español</a>
                        <a href="index.php?lang=en">Inglés</a>
                    </div>
                </li>
            </ul>
        </nav>
    )
}