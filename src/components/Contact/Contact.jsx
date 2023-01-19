import React from 'react'

export default function Contact({ desactive }) {
  //Constante para controlar clases y que no se muestre el componente en el menu responsive
  const close = !desactive ? 'hidden' : ' ';
  //Renderizado
  return (
    <div className={'h-96 my-20 flex flex-col justify-center items-center gap-10 p-6 ' + close}>

      <div className='flex justify-center text-center items-center'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-20 h-20">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
        </svg>
        <a href="https://api.whatsapp.com/send?phone=3513413259&text=Hola%20, me%20gustaria%20consultar%20%20por%20los%20servicios%20de%20softsolutions!." target='_blank'>
          <h2 className='text-gray-400 text-xl md:hover:text-indigo-50'>+54 9 351 341 3259</h2>
        </a>
      </div>
      <div className='flex justify-center gap-3 text-center items-center'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-20 h-20">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>
        <h2 className='text-gray-400 text-xl md:hover:text-indigo-50'>info@softsolutionsarg.com</h2>
      </div>
    </div>
  )
}