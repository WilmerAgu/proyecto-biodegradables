
import Header from '../components/Header'
import Footer from '../components/Footer'
import './Home.css'

const Home = () => {
  return (
    <div>
      <Header />
        <main className='home'>
          <h2>Productos Biodegradables Para Un Futuro Sostenible</h2>
          <p>Descubre nuestra variedad de productos ecológicos diseñados para cuidar nuestro planeta. 
            Desde envases y bolsas hasta toallitas, todos nuestros productos son biodegradables y 
            respetuosos con el medio ambiente.</p>
          <img src="/public/img/img-principal.jpg" alt="" />
          
        </main>
      <Footer />
    </div>
  )
}

export default Home