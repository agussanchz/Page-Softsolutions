import React from 'react'
import CardDemo from '../CardDemo/CardDemo';

export default function Demos({ desactive }) {
  //Constante para controlar clases y que no se muestre el componente en el menu responsive
  const close = !desactive ? 'hidden' : ' ';

  const animate__direction = window.innerWidth > 768 ? `animate__animated animate__fadeInDown` : `animate__animated animate__fadeInLeft`;

 


  return (
    <section className={close}>
      <div className='my-20 p-8 flex flex-col gap-6'>
        <h2 className={'text-indigo-50 text-4xl md:flex md:justify-center ' + animate__direction}>¿Te gustaria probar algunos de nuestro servicios?</h2>
        <p className='text-gray-400 md:flex md:justify-center animate__animated animate__fadeInLeft animate__delay-1s'>Aqui te dejamos los <span className='mx-1 text-indigo-50 font-bold'>demos</span>para que puedas :)</p>
        <a href="#gestion-creditos" className='pt-32 animate__animated animate__bounce animate__delay-2s md:flex md:justify-center	'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-10 h-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
          </svg>
        </a>
      </div>

      <div className='md:flex justify-center text-xl'>
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






