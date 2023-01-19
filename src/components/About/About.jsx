import React from 'react'
import imgAbout from '../../images/2.png'
export default function About({ desactive }) {
  //Constante para controlar clases y que no se muestre el componente en el menu responsive
  const close = !desactive ? 'hidden' : ' ';
  //Renderizado
  return (
    <section className={close}>
        <div className='p-6'>
        <div className='flex justify-center md:hidden '>
            <img src={imgAbout} alt="imagen-header" className='h-80 animate__animated animate__fadeInLeft' />
        </div>

          <p className='text-indigo-50 animate__animated animate__fadeInLeft animate__delay-1s leading-loose p-6 text-justify my-6'>
            En SoftSolutions creemos que la tecnología junto con la innovación son las claves para el desarrollo y la evolución de toda empresa. 
            Por eso ponemos a disposición nuestros conocimientos y experiencia con el fin de brindarle las herramientas necesarias para facilitar 
            y mejorar las actividades de su organización.
            En SoftSolutions acompañamos tu crecimiento.
          </p>
      </div>
    </section>
  )
}
