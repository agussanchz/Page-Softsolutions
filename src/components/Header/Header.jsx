import React from 'react'
import headerLogo from '../../images/dev.png'
import headerResponsive from '../../images/headerResponsive.png'
export default function Header({ desactive }) {
  //Constantes para controlar clases
  const className_title = ' text-2xl text-gray-400 animate__animated animate__fadeInDown md:text-4xl md:text-indigo-50 '
  const close = !desactive ? 'hidden' : '';

  //Renderizado
  return (
    <>
      <header className={'h-auto py-14 flex justify-center items-center md:h-full ' + close}>
        <div className='md:flex md:justify-center md:items-center md:gap-40'>
          <div className='flex justify-center text-center flex-col md:text-start'>
            <h2 className={className_title}>Estamos para </h2>
            <h2 className={className_title}><span className='uppercase font-bold text-indigo-50'>solucionar</span> </h2>
            <h2 className={className_title}>tus problemas.</h2>
            <p className='animate__animated animate__fadeInDown animate__delay-1s text-gray-400'>Facilitamos y mejoramos tu calidad de vida.</p>
          </div>
          <div className='hidden md:flex'>
            <img src={headerLogo} alt="imagen-header" className='h-96 animate__animated animate__fadeInDown animate__delay-2s' />
          </div>
          <div className='h-auto pt-14 flex justify-center md:hidden'>
            <img src={headerResponsive} alt="imagen-header" className='h-80 animate__animated animate__fadeInDown animate__delay-2s' />
          </div>
        </div>
      </header>
    </>
  )
}
