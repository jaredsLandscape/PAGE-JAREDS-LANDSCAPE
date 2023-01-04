import React, { useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import {ReactComponent as MessIcon} from './SVG/mensaje.svg'
import { Link } from "react-router-dom";
import './css/index.css'

const App = () => {

  const handleCookie = () => {
    localStorage.setItem("terms", JSON.stringify(true))
    window.location = "/"
  }
  const [cookie, setCookie] = useState()
  const [lenguague, setLenguague] = useState('es')

  useEffect(() => {
    setCookie(JSON.parse(localStorage.getItem("terms")))
    localStorage.setItem('lenguague', JSON.stringify('en'))
    setLenguague(JSON.parse(localStorage.getItem("lenguague")))
  },[cookie])
  
  const selectLenguague = (leng)=> {
    localStorage.setItem('lenguague', JSON.stringify(leng)) 
    setLenguague(JSON.parse(localStorage.getItem("lenguague")))
  }

  return (
    <div>
        {/* TERMINOS Y CONDICIONES */}
        {!cookie ? (<div>
                <div id="terminos" className="terminos_condiciones">
                    <p>{lenguague==='es'?"Este sitio web hace uso de cookies, al navegar en el estas aceptando el uso de cookies y los terminos de privacidad":"This website uses cookies, by browsing you are accepting the use of cookies and the privacy terms"}<Link to="/terms">Terminos y condiciones.</Link></p>
                    <button className="btn_terminos" onClick={handleCookie}>OK</button>
                </div>  
        </div>): null}

        {/* BOTON DE MENSAJES */}
        <a className="btn-messages" href="sms:+19712752277" target="_blank" rel="noreferrer">
            <MessIcon/>
        </a>

        <Nav handLenguague={selectLenguague} leng={lenguague}/>
        <Header/>
        <About leng={lenguague}/>
        <Services leng={lenguague}/>
        <Contact leng={lenguague}/>
        <Testimonials leng={lenguague}/>
        <Footer leng={lenguague}/>
    </div>
  );
};

export default App;