import { Link, Outlet } from 'react-router-dom'
import Header from '../components/Header'

const Productos = () => {
  return (
      <div>
        <Header />
        <h2>Estos son nuestros productos</h2>
        <section>
            <nav>
                <ul>
                    <li>
                        <Link to='/productos/bolsas'>Bolsas</Link> 
                    </li>
                    <li>
                        <Link to="/productos/envases">Envases</Link>
                    </li>
                    <li>
                        <Link to="/productos/toallitas">Toallitas Desechables</Link>
                    </li>
                </ul>
            </nav>
            <div>
                    <Outlet />
                </div>
        </section>
    </div>
  )
}

export default Productos