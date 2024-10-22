import { Link, Outlet, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import './Productos.css'

const Productos = () => {
    const [showMainContent, setShowMainContent] = useState(true);

    // Hook para obtener la ubicación actual (URL)
    const location = useLocation();

    // Efecto para ocultar el contenido cuando se cambia la ruta
    useEffect(() => {
        // Si la ruta es diferente a "/productos", ocultamos el contenido principal
        if (location.pathname !== "/productos") {
            setShowMainContent(false);
        } else {
            setShowMainContent(true);
        }
    }, [location]);

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
                            <Link className='enlace-productos' to='/productos/envases'>Envases</Link>
                        </li>
                        <li>
                            <Link className='enlace-productos' to='/productos/toallitas'>Toallitas Desechables</Link>
                        </li>
                    </ul>
                </nav>
                <div>
                    <Outlet /> {/* Aquí se cargan los componentes de las subrutas */}
                </div>
            </section>

            {/* Mostrar u ocultar el contenido principal de productos */}
            {showMainContent && (
                <section className='container-productos'>
                <div className='encabezado-productos'>
                    <h1>Reciclaje y Productos Biodegradables</h1>
                    <p>¡Descubre la importancia de elegir productos que cuidan nuestro planeta!</p>
                </div>
            
                <section className='info-section'>
                    <h2>¿Por qué elegir productos biodegradables?</h2>
                    <div className='capsule'>
                        <h3>1. Reducción de residuos</h3>
                        <p>Los productos biodegradables se descomponen naturalmente, ayudando a reducir la 
                            cantidad de basura en vertederos.</p>
                    </div>
                    <div className='capsule'>
                        <h3>2. Menor impacto ambiental</h3>
                        <p>Al descomponerse, estos productos no liberan sustancias tóxicas, protegiendo 
                            nuestros ecosistemas.</p>
                    </div>
                    <div className='capsule'>
                        <h3>3. Fomento de la sostenibilidad</h3>
                        <p>Elegir productos biodegradables apoya prácticas de producción 
                            responsables y sostenibles.</p>
                    </div>
                    <div className='capsule'>
                        <h3>4. Contribución a la economía circular</h3>
                        <p>Estos productos ayudan a cerrar el ciclo de vida de los materiales, promoviendo un 
                            uso eficiente de los recursos.</p>
                    </div>
                </section>
            </section>
    
            )}

            <Footer />
        </div>
    )
}

export default Productos
