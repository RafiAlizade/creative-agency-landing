import './Service.css'
import Navbar from '../../Components/Navbar/Navbar'
import Service from '../../Components/Service/Service'
import Footer from '../../Components/Footer/Footer'

function Home() {

  return (
    <>
    <Navbar />
    <main className='app_main'>
    <Service />
    </main>
    <Footer />
    </>
  );
}

export default Home;