import React from 'react'
import imgAbout from '../../images/about.png'
export default function About({ desactive }) {
  //Constante para controlar clases y que no se muestre el componente en el menu responsive
  const close = !desactive ? 'hidden' : ' ';

  const animation__title = window.innerWidth > 758 ? 'animate__animated animate__fadeInDown' : 'animate__animated animate__fadeInLeft animate__delay-1s';
  const animation__parrafo = window.innerWidth > 758 ? 'animate__animated animate__fadeInDown animate__delay-1s': 'animate__animated animate__fadeInLeft animate__delay-2s';

  //Renderizado
  return (
    <section className={'md:my24 ' + close}>
        <div className='my-10 md:my-20 p-6 md:flex md:justify-center md:gap-40 md:items-center'>
          <div className='flex justify-center md:hidden animate__animated animate__fadeInLeft '>
              <img src={imgAbout} alt="imagen-header" className='h-96' />
          </div>

          <div className='flex flex-col justify-center items-center p-6  md:w-96 md:p-0 '>

            <h2 className={'flex justify-center text-3xl text-indigo-50 font-bold ' + animation__title}>En SoftSolutions acompañamos tu crecimiento.</h2>

            <p className={'text-gray-400 leading-loose text-justify my-6 md:my0 ' + animation__parrafo}>
              Creemos que la tecnología junto con la innovación son las claves para el desarrollo y la evolución de toda empresa. 
              Por eso ponemos a disposición nuestros conocimientos y experiencia con el fin de brindarle las herramientas necesarias para facilitar 
              y mejorar las actividades de su organización.
              
            </p>
            
          </div>

          <div className='hidden md:flex justify-center animate__animated animate__fadeInDown animate__delay-2s' >
              <img src={imgAbout} alt="imagen-header" className='h-96 w-auto' />
          </div>
      </div>
    </section>
  )
}
