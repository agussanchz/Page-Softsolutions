import React from 'react'

export default function Card({title, index}) {

    
    const animate__direction = window.innerWidth > 768 ? `animate__animated animate__fadeInDown animate__delay-${index}s` : `animate__animated animate__fadeInLeft animate__delay-${index}s`;

    return (
        <div className={'bg-card-0 w-64 h-96 rounded-xl flex item-center ' + animate__direction}>
            <div className='flex flex-col justify-center text-center p-3 gap-3'>
                <h2 className='text-2xl text-indigo-50'>{title}</h2>
                <p className='text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quisquam doloremque fuga porro distinctio impedit delectus, maxime neque.</p>
            </div>
        </div>
    )
}
