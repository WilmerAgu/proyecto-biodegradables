import { Link, Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import './Productos.css'

const Productos = () => {
  return (
    <div>
        <Header />
        <section className='nav-productos'>
            <nav>
                <ul>
                    <li>
                        <Link className='enlace-productos' to='/productos/bolsas'>Bolsas</Link> 
                    </li>
                    <li>
                        <Link className='enlace-productos' to="/productos/envases">Envases</Link>
                    </li>
                    <li>
                        <Link className='enlace-productos' to="/productos/toallitas">Toallitas Desechables</Link>
                    </li>
                </ul>
            </nav>
            <div>
                <Outlet />
            </div>
        </section>
        <Footer />
    </div>
  )
}

export default Productos