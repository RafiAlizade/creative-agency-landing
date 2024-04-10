import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {

    return (
        <footer className='app_footer'>
                <div className="footer__inner">
                    <div className="footer__left">
                        <div className="footer_text">
                            <span className="footer_text_span">Lets build something great together.</span>
                        </div>
                    </div>

                    <div className="footer__right">
                    <Link to='./about'><button className="hero__btn">Learn More</button></Link>
                    </div>
                </div>
        </footer>
    );
}

export default Footer;