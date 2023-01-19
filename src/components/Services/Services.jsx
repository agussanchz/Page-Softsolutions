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

  //Renderizado
  return (
    <section className={'my-20 flex flex-col justify-center items-center ' + close}>
      <div className='p-6'>
        <h2 className='text-indigo-50 text-4xl '>En nuestra empresa,</h2>
        <h2 className='text-gray-400 text-3xl '>Tenemos muchos servicios para ofrecerle.</h2>
        <h2 className='text-indigo-50 text-3xl '>Aqui van:</h2>
      </div>
      <div className='my-10 flex flex-col justify-center gap-4 font-poppins md:flex-row'>
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
