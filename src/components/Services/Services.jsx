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
    <section className={'my-20 flex justify-center items-center ' + close}>
      <div className='flex flex-col justify-center gap-4 font-poppins md:flex-row'>
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
