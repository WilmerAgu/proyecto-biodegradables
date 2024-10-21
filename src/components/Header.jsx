import { Link } from "react-router-dom"


const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to='/' >Home</Link>
                    </li>
                    <li>
                        <Link to="/biodegradables">Productos Biodegradables</Link>
                    </li>
                    <li>
                        <Link to="/productos">Productos</Link>
                    </li>
                    <li>
                        <Link to="/contacto">Contactanos</Link>                
                    </li>               
                </ul>
            </nav>
        </header>
    )
}

export default Header