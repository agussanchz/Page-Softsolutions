//Importacion de mis componentes
import { About, Contact, Footer, Header, Navbar, NavResponsive, Products, Services} from "../components"
//Importacion de los hook
import React, { useState, useEffect} from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"

export default function Landing() {
  //Creacion de hook useState para almacenar el estado del navbar
  const [NavActive, setNavActive] = useState(true)

  //Funcion para cambiar el estado del navbar
  const handleClick = () => {
    setNavActive(!NavActive)
  }


  //Hook useEffect para cerrar el menu cuando supere los 768px
  useEffect(() => {
    const ocultarMenu = () => {
      if (window.innerWidth > 768 && !NavActive) {
        setNavActive(true)
      }
    }

    window.addEventListener('resize', ocultarMenu);

    return () => {
      window.removeEventListener('resize', ocultarMenu)
    }
  });


  return (
    <>
    <BrowserRouter>
      <Navbar openMenu={handleClick} />
      {!NavActive && <NavResponsive closeMenu={handleClick}/>}
      <Routes>
        <Route exact path="/" element={<Header desactive={NavActive}/>} />
        <Route exact path="/servicios" element={ <Services desactive={NavActive}/> }/>
        <Route exact path="/productos" element={ <Products desactive={NavActive}/> }/>
        <Route exact path="/nosotros" element={ <About desactive={NavActive}/> }/>
        <Route exact path="/contacto" element={ <Contact desactive={NavActive}/> }/>
      </Routes>
      <Footer />
    </BrowserRouter>
    
     
      
      
      
    </>
  )
}
