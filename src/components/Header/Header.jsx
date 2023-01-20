import React from 'react'
import headerLogo from '../../images/header.png'
import headerResponsive from '../../images/headerResponsive.png'

export default function Header({ desactive }) {
  //Constantes para controlar clases
  const close = !desactive ? 'hidden' : '';
  const classTitle = window.innerWidth > 768 ? 'animate__animated animate__fadeInDown' : 'animate__animated animate__fadeInLeft animate__delay-1s'
  const classParrafo = window.innerWidth > 768 ? 'animate__animated animate__fadeInDown animate__delay-1s' : 'animate__animated animate__fadeInLeft animate__delay-2s'

  //Renderizado
  return (
    <>
      <header className={'h-auto py-5 flex justify-center items-center md:h-full md:my-20 ' + close}>
        <div className='md:flex md:justify-center md:items-center md:gap-40'>
          <div className='h-auto pt-14 flex justify-center animate__animated animate__fadeInLeft md:hidden'>
            <img src={headerResponsive} alt="imagen-header" className='h-80' />
          </div>  
          <div className='h-auto flex justify-center flex-col p-10 gap-4 md:text-start'>
            <div className={'text-4xl text-gray-400 ' + classTitle}>
              <h2>Estamos para</h2>
              <span className='font-bold uppercase text-indigo-50'>solucionar</span>
              <h2>tus problemas.</h2>
            </div>
            <div className={classParrafo}>
              <p className=' text-indigo-50 md:text-gray-400'>Facilitamos y mejoramos tu calidad de vida.</p>
            </div>
          </div>      
          <div className='hidden md:flex'>
            <img src={headerLogo} alt="imagen-header" className='h-96 w-auto animate__animated animate__fadeInDown animate__delay-2s' />
          </div>
        </div>
      </header>
    </>
  )
}
