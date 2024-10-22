import './Products.css'

const Envases = () => {
  return (
    <div>
      <section className='products-sesion'>
        <h2>Envases Biodegradables: Cuidando Nuestro Planeta</h2>
        <p>Los envases biodegradables son una excelente alternativa para reducir el impacto 
          ambiental de los productos desechables. Fabricados a partir de materiales naturales, 
          se descomponen de manera rápida y segura, minimizando la acumulación de residuos en 
          vertederos y océanos. Al elegir envases biodegradables, no solo apoyas la sostenibilidad, 
          sino que también contribuyes a la preservación de nuestro planeta para 
          las futuras generaciones.
        </p>
        <div className='products-container'>
          <div className='product'>
            <img src="/public/img/envases1.jpeg" alt="envase de carton" />
            <h3>Envases de cartón</h3>
            <p>Los envases de cartón son biodegradables y se descomponen rápidamente 
          en el medio ambiente. Además, su reciclaje contribuye a la economía circular 
          y reduce la tala de árboles. ¡Prefiere el cartón y fomenta la sostenibilidad!. </p>
          </div>
          <div className='product'>
            <img src="/public/img/envases2.jpeg" alt="envase de bambu" />
            <h3>Envases de bambú estilo natural</h3>
            <p>LLos envases de bambú son una opción ecológica y biodegradable que ofrece una 
              alternativa sostenible a los plásticos tradicionales. Este material renovable es 
              ligero, resistente y se descompone fácilmente en el medio ambiente. Al elegir envases 
              de bambú, no solo proteges el planeta, sino que también aportas un toque de estilo 
              natural a tu vida cotidiana.
            </p>
          </div>
        </div>
      </section>  
    </div>
  )
}

export default Envases