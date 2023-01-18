import React from 'react'
import { Link } from 'react-router-dom'

export default function NavResponsive({ closeMenu }) {
        //Opciones del menu
        const optionNav = [
            ['Servicios', '/servicios'],
            ['Productos', '/productos'],
            ['Nosotros', '/nosotros'],
            ['Contacto','/contacto']
        ]
    
  return (
    <>
        <div className='h-auto overflow-hidden touch-none'>
            <div className='border-solid border-transparent border-4 animate__animated animate__fadeInDown'>  
                {optionNav.map(([option, url]) => (
                    <Link to={url} key={option}>
                        <div className='h-16 text-indigo-50 border p-4 border-gray-400' onClick={closeMenu}>                            
                            <p>{option}</p>
                        </div>  
                    </Link>        
                ))}  
            </div>
        </div>
    </>
  )
}
