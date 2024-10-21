import './Footer.css'

const Footer = () => {
    return (
        <footer>
            <p>&copy; 2024 Productos Biodegradables. Todos los derechos reservados.</p>
            <p>Síguenos en nuestras redes sociales:</p>
            <ul>
                <li>
                    <a href=""></a>
                    <img className='social-icon' src="/public/img/instagram.png" alt="instagram" />
                </li>
                <li>
                    <a href=""></a></li>
                    <img className='social-icon' src="/public/img/whatsapp.png" alt="whatsapp" />
            </ul>
        </footer>
    )
}

export default Footer