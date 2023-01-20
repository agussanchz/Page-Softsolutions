import React from 'react'
import Card from '../Card/Card';

export default function Services({ desactive }) {
  //Constante para controlar clases y que no se muestre el componente en el menu responsive
  const close = !desactive ? 'hidden' : ' ';

  //Servicios
  const titleCard = [
    'Desarrollo Web',
    'Robótica',
    'Software a medida',
    'Aplicaciones móviles',  
    'Sistemas comerciales',
    'Automatizaciones industriales',
 
  ]

  const animate__config = window.innerWidth > 768 ? `animate__animated animate__fadeInDown` : `animate__animated animate__fadeInLeft`;
  const animate__config1 = window.innerWidth > 768 ? `animate__animated animate__fadeInDown animate__delay-1s` : `animate__animated animate__fadeInLeft animate__delay-1s`;
  //Renderizado
  return (
    <section className={'my-10 md:my-20 flex flex-col justify-center items-center ' + close}>
      <div className='my-10 p-6 md:my-0'>
        <h2 className={'text-indigo-50 text-4xl ' + animate__config}>En nuestra empresa,</h2>
        <h2 className={'text-gray-400 text-3xl ' + animate__config}>Tenemos muchos servicios para ofrecerte.</h2>
        <div className={'mt-10 md:my-2 ' + animate__config}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-10 h-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75" />
          </svg>
        </div>
      </div>
      <div className=' flex flex-col justify-center gap-4 font-poppins md:flex-row md:my-3 '>
        {titleCard.map((titulo, indice) => (
          <Card
            title={titulo}
            index={indice}
            key={indice}
          />
        ))}
      </div>
    </section>
  )
}
