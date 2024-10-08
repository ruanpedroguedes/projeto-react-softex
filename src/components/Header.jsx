import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'

function Header(){
    return(
        <>
          <header>
            <nav className="navbar">
                <img className='img-nav' src={logo}></img>
                <ul className='nav-bar'>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contato">Contato</Link></li>
                </ul>

            </nav>
          </header>
        </>
    )
}

export default Header;