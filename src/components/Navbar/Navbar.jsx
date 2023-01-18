import { Link } from 'react-router-dom'
import iconNavbar from '../../images/navigation-bar.png'

export default function Navbar({ openMenu }) {

    //Opciones del menu
    const optionNav = [
        ['Servicios', '/servicios'],
        ['Productos', '/productos'],
        ['Nosotros', '/nosotros'],
        ['Contacto', '/contacto']
    ]

    //Renderizacion
    return (
        <>
            <nav className='h-24 pt-10 flex justify-around items-center animate__animated animate__fadeInDown animate__delay-2s'>
                <div className='md:flex md:font-bold'>
                    <h2 className='text-indigo-50 text-bold text-2xl special-underline '>
                       <a href="/">SoftSolutions</a>
                    </h2>
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

                <div className='md:hidden'>
                    <button onClick={openMenu}>
                        <img src={iconNavbar} alt="icono del navbar" className='h-6 w-auto ' />
                    </button>
                </div>
            </nav>
        </>
    )
}
