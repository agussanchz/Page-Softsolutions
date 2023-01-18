import React from 'react'
import headerLogo from '../../images/dev.png'

export default function Header({ desactive }) {
  //Constantes para controlar clases
  const className_title = 'leading-tight text-4xl text-indigo-50 animate__animated animate__fadeInDown'
  const close = !desactive ? 'hidden' : '';

  //Renderizado
  return (
    <>
      <header className={'h-96 flex justify-center items-center my-20 md:h-auto ' + close}>
        <div className='flex justify-center items-center gap-40'>
          <div className='font-bold'>
            <h2 className={className_title}>Estamos</h2>
            <h2 className={className_title}>para <span className='uppercase'>solucionar</span> </h2>
            <h2 className={className_title}>tus problemas.</h2>
            <p className='animate__animated animate__fadeInDown animate__delay-1s text-gray-400'>Facilitamos y mejoramos tu calidad de vida.</p>
          </div>
          <div className='hidden md:flex'>
            <img src={headerLogo} alt="imagen-header" className='h-96 animate__animated animate__fadeInDown animate__delay-2s' />
          </div>
        </div>
      </header>
    </>
  )
}
