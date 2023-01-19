import { Link } from 'react-router-dom'
import iconNavbar from '../../images/navigation-bar.png'

export default function Navbar({ openMenu }) {

    //Opciones del menu
    const optionNav = [
        ['Servicios', '/servicios'],
        ['Productos', '/productos'],
        ['Nosotros', '/nosotros'],
    ]

    const classNav = window.innerWidth > 768 ? 'animate__animated animate__fadeInDown animate__delay-2s' : ''
    //Renderizacion
    return (
        <>
            <nav className={'h-24 pt-10 flex justify-around items-center ' + classNav}>
                <div className='md:flex md:font-bold'>
                    <h2 className='text-bold text-3xl text-indigo-50 md:text-2xl '>
                        <a href="/" className='special-underline'>SoftSolutions</a>
                    </h2>
                </div>

                <div className='md:hidden border border-gray-400 w-11 h-11 rounded-full flex justify-center items-center' onClick={openMenu}>
                    <img src={iconNavbar} alt="icono del navbar" className='h-5 w-auto ' />
                </div>

                <div className='hidden md:flex'>
                    <ul className='flex gap-4 text-gray-400'>
                        {optionNav.map(([option, url]) => (
                            <li key={url}>
                                <Link to={url} className='special-underline'>{option}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className='hidden md:flex'>
                    <Link to={'/contacto'} className='special-underline text-gray-400'>Contacto</Link>
                </div>
            </nav>
        </>
    )
}
