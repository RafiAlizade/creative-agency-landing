import './Home.css'
import Navbar from '../../Components/Navbar/Navbar'
import Hero from '../../Components/Hero/Hero'
import Strategic from '../../Components/Strategic/Strategic'
import Advantages from '../../Components/Advantages/Advantages'
import Carousel from '../../Components/Carousel/Carousel'
import Footer from '../../Components/Footer/Footer'

function Home() {

  return (
    <>
    <Navbar />
    <main className='app_main'>
    <Hero />
    <Strategic />
    <Advantages />
    <Carousel />
    </main>
    <Footer />
    </>
  );
}

export default Home;