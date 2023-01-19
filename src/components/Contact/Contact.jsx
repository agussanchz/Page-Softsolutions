import React from 'react'

export default function Contact({ desactive }) {
  //Constante para controlar clases y que no se muestre el componente en el menu responsive
  const close = !desactive ? 'hidden' : ' ';
  //Renderizado
  return (
    <div className={'h-96 flex justify-center items-center ' + close}>
        <h2 className='text-indigo-50 text-xl'>info@softsolutionsarg.com</h2>
    </div>
  )
}