import React from 'react'

export default function Demos({ desactive }) {
  //Constante para controlar clases y que no se muestre el componente en el menu responsive
  const close = !desactive ? 'hidden' : ' ';


  return (
    <section className={close}>

      <div className='my-20 p-8 h-screen flex flex-col gap-6'>
        <h2 className='text-indigo-50 text-4xl'>¿Te gustaria probar algunos de nuestro servicios?</h2>
        <p className='text-gray-400'>Aqui te dejamos los demos para que puedas :)</p>

   
        <a href="#gestion-creditos" className='pt-32 animate__animated animate__bounce animate__repeat-3	'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-10 h-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
          </svg>
        </a>
        
      </div>

      <div className='h-screen p-8 flex flex-col gap-3' id='gestion-creditos'>
        <h3 className='text-indigo-50 text-2xl'> Sistema de Gestión de Créditos</h3>
        <div  className='text-gray-400 flex flex-col justify-center bg-card-0 text-center'>
          <ul>
            <li>Créditos</li>
            <li>Saldos</li>
            <li>Resúmenes</li>
            <li>Estadísticas</li>
          </ul>
        </div>

        <a href="https://gesisarg.com/sistema-gestion/login" target='_blank' className='flex justify-center underline text-indigo-50 text-xl'>¡Probar!</a>
      </div>
    </section>
  )
}






