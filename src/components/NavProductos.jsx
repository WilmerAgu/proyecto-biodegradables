import { Link, Outlet } from 'react-router-dom'
import './NavProductos.css'

const NavProductos = () => {
  return (
    <section className='nav-productos'>
            <nav>
                <ul>
                    <li>
                        <Link className='enlace-productos' to='/bolsas'>Bolsas</Link> 
                    </li>
                    <li>
                        <Link className='enlace-productos' to="/envases">Envases</Link>
                    </li>
                    <li>
                        <Link className='enlace-productos' to="/toallitas">Toallitas Desechables</Link>
                    </li>
                </ul>
            </nav>
            <div>
                <Outlet />
            </div>
        </section>
  )
}

export default NavProductos