import React, { useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import {ReactComponent as MessIcon} from './SVG/mensaje.svg'

const App = () => {

  const handleCookie = () => {
    localStorage.setItem("terms", JSON.stringify(true))
    window.location = "/"
  }
  const [cookie, setCookie] = useState()

  useEffect(() => {
    setCookie(JSON.parse(localStorage.getItem("terms")))
  },[cookie])
  
  return (
    <div>
        {/* TERMINOS Y CONDICIONES */}
        {!cookie ? (<div>
                <div id="terminos" className="terminos_condiciones">
                    <p>Este sitio web hace uso de cookies, al navegar en el estas aceptando el uso de cookies 
                y los terminos de privacidad<a href="./terminos.php" target="_blank">Terminos y condiciones.</a></p>
                    <button className="btn_terminos" onClick={handleCookie}>OK</button>
                </div>  
        </div>): null}

        {/* BOTON DE MENSAJES */}
        <a className="btn-messages" href="sms:+19712752277" target="_blank" rel="noreferrer">
            <MessIcon/>
        </a>

        <Nav/>
        <Header/>
        <About/>
        <Services/>
        <Contact/>
        <Testimonials/>
        <Footer/>
    </div>
  );
};

export default App;