import './Home.css'
import Navbar from '../../Components/Navbar/Navbar'
import Hero from '../../Components/Hero/Hero'
import Strategic from '../../Components/Strategic/Strategic'

function Home() {

  return (
    <>
    <Navbar />
    <main className='app_main'>
    <Hero />
    <Strategic />
    </main>
    </>
  );
}

export default Home;