import React from 'react'

export default function CardDemo({ title, user, password }) {
    const animate__direction = window.innerWidth > 768 ? `animate__animated animate__fadeInDown animate__delay-3s` : `animate__animated animate__fadeInLeft animate__delay-3s`;

    return (
        <section className='md:flex md:justify-center md:flex-row' >
            <div className={'w-64 h-96 rounded-xl bg-card-0 flex flex-col justify-center gap-3 items-center text-center  '+ animate__direction}  >
                <h3 className='text-indigo-50 text-2xl'> {title}</h3>
                <div className='text-gray-400 flex flex-col justify-center text-center'>
                    <p>Para ingresar debe colocar:</p>
                    <span> {user}</span>
                    <span> {password}</span>
                </div>
                <a
                    href="https://gesisarg.com/sistema-gestion/login"
                    target='_blank'
                    className='flex justify-center underline text-gray-400 text-xl  md:hover:text-indigo-50 md:font-bold'
                >
                    ¡Probar!
                </a>
            </div>
        </section>
    )
}
