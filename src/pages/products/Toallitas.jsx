import './Products.css'

export const Toallitas = () => {
    return (
        <section className='products-sesion'>
            <h2>Toallitas Biodegradables</h2>
            <p>Son productos desechables diseñados para descomponerse de manera natural en 
                el medio ambiente. Su importancia radica en que reducen la contaminación y el 
                impacto ambiental de las toallitas convencionales, que pueden tardar años en 
                desintegrarse. Al optar por toallitas biodegradables, contribuyes a un consumo 
                más responsable y sostenible, ayudando a proteger nuestros ecosistemas.
            </p>
            <div className='products-container'>
                <div className='product'>
                    <img src="/public/img/toallitas2.jpeg" alt="toallitas biodegradables" />
                    <h3>Toallitas Ecológicas</h3>
                    <p>Las toallas ecológicas están fabricadas con materiales sostenibles y 
                        biodegradables, ofreciendo una alternativa responsable a las toallas 
                        desechables. Su uso contribuye a reducir la generación de residuos y 
                        promueve un estilo de vida más amigable con el medio ambiente.
                    </p>
                </div>
                <div className='product'>
                    <img src="/public/img/toallitas3.jpeg" alt="bolsa de tela" />
                    <h3>Toallitas de tela</h3>
                    <p>Las toallitas de tela son una alternativa ecológica y reusable a las toallitas 
                        desechables. Fabricadas con materiales suaves y duraderos, ayudan a reducir 
                        el desperdicio y son perfectas para diversas aplicaciones, desde la limpieza 
                        hasta el cuidado personal.  
                    </p>
                </div>
                
            </div>

        </section>
    )
}
