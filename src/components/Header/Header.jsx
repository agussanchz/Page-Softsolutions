import React from 'react'
import headerLogo from '../../images/dev.png'
import headerResponsive from '../../images/headerResponsive.png'
export default function Header({ desactive }) {
  //Constantes para controlar clases
  const className_title = 'leading-tight text-4xl text-indigo-50 animate__animated animate__fadeInDown'
  const close = !desactive ? 'hidden' : '';

  //Renderizado
  return (
    <>
      <header className={'pt-12 pb-20 flex justify-center items-center md:bg-trasparent md:h-auto md:my-20 md:p-0 ' + close}>
        <div className='h-full md:flex md:justify-center md:items-center md:gap-40'>
          <div className='flex justify-center text-center flex-col md:text-start'>
            <h2 className={className_title}>Estamos para </h2>
            <h2 className={className_title}><span className='uppercase font-bold'>solucionar</span> </h2>
            <h2 className={className_title}>tus problemas.</h2>
            <p className='animate__animated animate__fadeInDown animate__delay-1s text-gray-400'>Facilitamos y mejoramos tu calidad de vida.</p>
          </div>
          <div className='hidden md:flex'>
            <img src={headerLogo} alt="imagen-header" className='h-96 animate__animated animate__fadeInDown animate__delay-2s' />
          </div>
          <div className='flex justify-center md:hidden'>
            <img src={headerResponsive} alt="imagen-header" className='h-96 animate__animated animate__fadeInDown animate__delay-2s' />
          </div>
        </div>
      </header>
    </>
  )
}
