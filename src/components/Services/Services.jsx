import React from 'react'

export default function Services({ desactive }) {
  //Constante para controlar clases y que no se muestre el componente en el menu responsive
  const close = !desactive ? 'hidden' : ' ';
  //Renderizado
  return (
    <div className={close}>Services</div>
  )
}