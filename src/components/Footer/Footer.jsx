import React from 'react'
import imgFooter from '../../images/softSolutions.png'

export default function Footer({ desactive }) {

    return (
        <>
            <footer className='py-14 animate__animated animate__fadeInDown animate__delay-2s '>
                <img src={imgFooter} alt="imagen-header" className='w-36 m-auto' />
            </footer>
        </>
    )
}
