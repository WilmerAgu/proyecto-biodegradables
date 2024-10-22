import './Bolsas.css'

const Bolsas = () => {
  return (
    <section className='bolsas-sesion'>
        <h2>Bolsas Biodegradables: Una Elección Responsable</h2>
        <p>Las bolsas biodegradables son una alternativa sostenible que ayuda a 
          reducir la contaminación plástica. Estas bolsas están hechas de materiales 
          que se descomponen naturalmente en el medio ambiente, minimizando su impacto negativo.</p>
        <div className='bolsas-container'>
          <div className='bolsa'>
            <img src="/public/img/bolsas-papel.jpeg" alt="bolsas de papel" />
            <h3>Bolsa de Papel kraft</h3>
            <p>Hecha de papel reciclado, esta bolsa es resistente y 100% biodegradable, 
              ideal para compras y regalos </p>
          </div>
          <div className='bolsa'>
            <img src="/public/img/bolsa-bioplastico.jpeg" alt="bolsa de bioplastico" />
            <h3>Bolsa de Bioplástico</h3>
            <p>Fabricada a partir de recursos renovables, esta bolsa se descompone en condiciones 
              adecuadas, ofreciendo una opción práctica y ecológica.</p>
          </div>
        </div>

    </section>
  )
}

export default Bolsas