import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import './Biodegradables.css'

export const Biodegradables = () => {
    return (
        <div>
            <Header />
            <section className='productos-sesion'>
                <h2> Tipos de Productos Biodegradables</h2>
                <div className='productos-container' >
                    <article className='producto'>
                        <img src="/public/img/cepillos.jpeg" alt="cepillos de bambu" />
                        <h3>Cepillos de Dientes Biodegradables</h3>
                        <p>Hechos de bambú, estos cepillos son una alternativa ecológica 
                            que ayuda a reducir el plástico en el océano.</p>
                    </article>
                    <article className='producto'>
                        <img src="/public/img/fertilizantes.jpeg" alt="fertilizantes" />
                        <h3>Fertilizantes Orgánicos</h3>
                        <p>Fertilizantes naturales que nutren el suelo y promueven 
                            un crecimiento saludable sin químicos dañinos.</p>
                    </article>
                    <article className='producto'>
                        <img src="/public/img/limpieza.jpeg" alt="limpieza" />
                        <h3>Productos de limpieza Ecológicos</h3>
                        <p>Limpiadores biodegradables que son seguros para el medio ambiente y 
                            efectivos en la limpieza de tu hogar.</p>
                    </article>                  
                </div>
            </section>
            <Footer />
        </div>
    )
}
