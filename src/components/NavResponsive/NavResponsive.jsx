import React from 'react'
import { Link } from 'react-router-dom'

export default function NavResponsive({ closeMenu }) {
        //Opciones del menu
        const optionNav = [
            ['Inicio', '/'],
            ['Servicios', '/servicios'],
            ['Demos', '/demos'],
            ['Nosotros', '/nosotros']
        ]
    
  return (
    <>
        <div className='h-auto overflow-hidden my-5'>
            <div className='animate__animated animate__fadeInDown'>  
                {optionNav.map(([option, url]) => (
                    <Link to={url} key={option}>
                        <div className='h-16 text-indigo-50 p-4 border-t border-gray-500' onClick={closeMenu}>                            
                            <p>{option}</p>
                        </div>  
                    </Link>        
                ))}  
                <Link to={'/contacto'}> 
                    <div className='h-16 text-indigo-50 p-4 border-b border-t border-gray-500' onClick={closeMenu}>
                        <p>Contacto</p>
                    </div>
                </Link>
            </div>
        </div>
    </>
  )
}
