import React from 'react'
import CardDemo from '../CardDemo/CardDemo';

export default function Demos({ desactive }) {
  //Constante para controlar clases y que no se muestre el componente en el menu responsive
  const close = !desactive ? 'hidden' : ' ';

  const animate__title = window.innerWidth > 768 ? `animate__animated animate__fadeInDown` : `animate__animated animate__fadeInLeft`;
  const animate__parrafo= window.innerWidth > 768 ? `animate__animated animate__fadeInDown animate__delay-1s` : `animate__animated animate__fadeInLeft animate__delay-1s`;


  return (
    <section className={'md:my-20 md:flex md:justify-center md:gap-40 ' + close}>
      <div className='my-20 p-4 flex flex-col gap-6'>
        <h2 className={'text-indigo-50 text-4xl md:flex md:justify-center md:text-3xl ' + animate__title}>¿Te gustaria probar algunos de nuestros servicios?</h2>
        <p className={'text-gray-400 md:flex md:justify-center ' + animate__parrafo}>¡Aqui te dejamos los <span className='mx-1 text-indigo-50 font-bold'>demos</span>para que puedas utilizarlos!</p>
      
        <span className='pt-32 animate__animated animate__bounce animate__delay-2s md:flex md:justify-center	'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-10 h-10 md:hidden">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75" />
          </svg>

          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="hidden md:flex md:w-10 md:h-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </span>
      </div>

      <div className='flex flex-col gap-4 justify-center items-center md:flex md:flex-row'>
        <CardDemo
            title='Sistema de Gestión de Créditos'
            user='Usuario:  cliente_demo '
            password='Contraseña: 1234'
          />

          <CardDemo
            title='Sistema de Gestión Comercial'
            user='Usuario: pedidos_demo'
            password='Contraseña: 1234'
          />
      </div>

    </section>
  )
}






