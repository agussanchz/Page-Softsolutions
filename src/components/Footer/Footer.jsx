import React from 'react'
import imgFooter from '../../images/softSolutions.png'

export default function Footer({ desactive }) {
    //Constante para controlar clases y que no se muestre el footer en el menu responsive
    const close = !desactive ? 'hidden' : ' ';
    //Renderizado
    return (
        <>
            <footer className={'py-14 animate__animated animate__fadeInDown animate__delay-2s ' + close}>
                <img src={imgFooter} alt="imagen-header" className='w-36 m-auto' />
            </footer>
        </>
    )
}
