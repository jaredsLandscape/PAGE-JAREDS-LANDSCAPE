import React, { useEffect } from "react"
import LogoImg from '../img/logo-oro.png'
import {ReactComponent as SVGIconArrow} from '../SVG/arrow-down.svg'
import {ReactComponent as SVGMenu} from '../SVG/menu.svg'

export default function Nav({handLenguague, leng}){

    useEffect(() => {
        window.addEventListener('scroll', () => {
            const nav = document.getElementById('navbar')
            if(window.scrollY > 0){
                nav.classList.add('sticky')
            }else{
                nav.classList.remove('sticky')
            }
        })
    },[])
    
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
                <li><a className="btn-underline" href="#inicio">{leng==='es'?"Inicio":"Home"}</a></li>
                <li><a className="btn-underline" href="#quienes_somos">{leng==='es'?"¿Quiénes somos?":"¿About us?"}</a></li>
                <li><a className="btn-underline" href="#servicios">{leng==='es'?"Servicios":"Services"}</a></li>
                <li><a className="btn-underline" href="#contacto">{leng==='es'?"Contactanos":"Contact us"}</a></li>
                <li><a className="btn-underline" href="#testimonios">{leng==='es'?"Testimonios":"Testimonials"}</a></li>
                {/* DRODOWN */}
                <li className="dropdown">
                    <button className="dropdown-btn">
                        <SVGIconArrow width={15}/>
                        {leng==='es'?"Idioma":"Lenguague"}
                    </button>  
                    <div className="dropdown-content">
                        <button onClick={() => handLenguague('es')}>{leng==='es'?"Español":"Spanish"}</button>
                        <button onClick={() => handLenguague('en')}>{leng==='es'?"Inglés":"English"}</button>
                    </div>
                </li>
            </ul>
        </nav>
    )
}