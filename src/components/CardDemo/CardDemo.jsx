import React from 'react'

export default function CardDemo({ title, user, password }) {
    const animate__direction = window.innerWidth > 768 ? `animate__animated animate__fadeInDown animate__delay-3s` : `animate__animated animate__fadeInLeft animate__delay-3s`;

    return (
        <section className='md:flex justify-center flex-row' id='gestion-creditos ' >
            <div className={'p-8 flex flex-col gap-3 '+ animate__direction}  >
                <h3 className='text-indigo-50 text-center'> {title}</h3>
                <div className='text-gray-400 flex flex-col justify-center bg-card-0 text-center'>
                    <p>Para ingresar debe colocar:</p>
                    <span> {user}</span>
                    <span> {password}</span>
                </div>
                <a
                    href="https://gesisarg.com/sistema-gestion/login"
                    target='_blank'
                    className='flex justify-center underline text-indigo-50 text-xl'
                >
                    ¡Probar!
                </a>
            </div>
        </section>
    )
}
