import logo from '../assets/logo.png'

function Header(){
    return(
        <>
          <header>
            <nav className="navbar">
                <img className='img-nav' src={logo}></img>
                <ul>
                    <li>Inicio</li>
                    <li>Sobre</li>
                    <li>Contato</li>
                </ul>

            </nav>
          </header>
        </>
    )
}

export default Header;