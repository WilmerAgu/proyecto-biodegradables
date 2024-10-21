import { Link } from "react-router-dom"
import './Header.css'


const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link className="enlace" to='/' >Home</Link>
                    </li>
                    <li>
                        <Link className="enlace" to="/biodegradables">Productos Biodegradables</Link>
                    </li>
                    <li>
                        <Link className="enlace" to="/productos">Productos</Link>
                    </li>
                    <li>
                        <Link className="enlace" to="/contacto">Contactanos</Link>                
                    </li>               
                </ul>
            </nav>
        </header>
    )
}

export default Header