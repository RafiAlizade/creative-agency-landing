import './Hero.css'
import { Link } from 'react-router-dom'
import bgHero from './../../assets/bg.svg'

function Hero() {

    return (
        <section className="hero">

            <div className="hero_bg">
                <img src={bgHero} className='hero_bg_resp' />
            </div>
            <div className="hero_inner">
                <div className="hero__mobile">
                    <img src={bgHero} alt="" />
                </div>


                <div className="container">
                <div className="hero__texts">
                    <h2 className="hero__h2">Branding & website design agency</h2>
                    <p className="hero__par">We specialize in visual storytelling by creating cohesive brand and website design solutions for small businesses, giving lasting impressions to audiences in a digital world.</p>
                    <Link to='./about'><button className="hero__btn">Learn More</button></Link>
                </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;